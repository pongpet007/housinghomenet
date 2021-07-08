import AOS from "aos";
import { useEffect, useState } from "react";
import Head_meta from "../../components/Head_meta";
import YellowBreadcrumb from "../../components/shared/YellowBreadcrumb";
import useTranslation from "next-translate/useTranslation";
import BaseLayout from "../../components/layout/BaseLayout";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { fetchService, fetchServiceType } from "../../redux/actions";
import pars from "html-react-parser";

const DEFAULT_DATA = {
  service_type_id: [],
  keyword: "",
};

const VIP = () => {
  const [form, setForm] = useState(DEFAULT_DATA);

  const { t, lang } = useTranslation("common");

  const handleChange = (e) => {
    console.log(e);
    const { name, value } = e.target;
    let x = 0;
    if (name === "service_type_id") {
      if (form[name].includes(value)) {
        x = form[name].filter((v) => {
          return v != value;
        });
      } else {
        x = [...form[name], value];
      }
    } else {
      if (e.charCode == 13 || e.keyCode == 13) {
        x = value;
      }
    }

    setForm({
      ...form,
      [name]: x,
    });

    dispatch(
      fetchService({
        keyword: name === "keyword" ? x : "",
        service_type_id: name === "service_type_id" ? x : "",
        show_index: 1,
        limit: 10,
        country_id: lang === "en" ? 236 : 221,
      })
    );
  };

  const dispatch = useDispatch();
  const serviceTypeList = useSelector((state) => state.service.serviceTypeList);
  const serviceList = useSelector((state) => state.service.serviceList);

  useEffect(() => {
    dispatch(
      fetchService({
        keyword: form["keyword"],
        service_type_id: form["service_type_id"].toString(),
        show_index: 1,
        limit: 10,
        country_id: lang === "en" ? 236 : 221,
      })
    );
    dispatch(fetchServiceType({ limit: 20 }));
    AOS.init();
  }, []);
  // console.log(serviceTypeList);
  console.log(serviceList);

  const URL_PREFIX = process.env.NEXT_PUBLIC_API_PREFIX;

  return (
    <BaseLayout>
      <Head_meta />

      <YellowBreadcrumb
        data={[
          { name: t("home"), url: `/${lang}` },
          {
            name: lang === "th" ? "งานช่าง" : "Service",
            url: "",
            active: true,
          },
        ]}
      />

      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <h4>หมวดหมู่งานบริการ</h4>
            <div>
              <ul style={{ listStyle: "none" }}>
                {serviceTypeList.servicetypes &&
                  serviceTypeList.servicetypes.map((item, idx) => {
                    return (
                      <li key={idx}>
                        <input
                          onChange={handleChange}
                          type="checkbox"
                          checked={form["service_type_id"].includes(
                            item.service_type_id
                          )}
                          name="service_type_id"
                          value={item.service_type_id}
                        />{" "}
                        {lang === "th"
                          ? item.service_type_name_th
                          : item.service_type_name_en}
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className="banner"></div>
          </div>
          <div className="col-lg-9">
            <div className="row">
              <div className="col-lg-12">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    name="keyword"
                    onKeyPress={handleChange}
                    className="form-control"
                    placeholder="ค้นหางานบริการ"
                  />
                  <span className="input-group-text" id="basic-addon2">
                    <i
                      className="fas fa-search"
                      style={{
                        color: "black",
                      }}
                    />
                  </span>
                </div>
              </div>
              <div className="mb-4">
                <h5>
                  <span style={{ color: "red" }}>{serviceList.totalrows}</span>
                  {"  "}
                  <span>
                    ผลการค้นหา{" "}
                    <span style={{ color: "red" }}>
                      " {serviceList?.search?.keyword} "
                    </span>
                    {"  "}
                    บริการเพื่อความเป็น VIP สร้างการแจ้งเตือน.
                  </span>
                </h5>
              </div>

              {serviceList.service &&
                serviceList.service.map((item, idx) => {
                  return (
                    <div
                      className="mb-4 row"
                      data-aos="fade"
                      data-aos-easing="linear"
                      data-aos-duration="1500"
                      key={idx}
                    >
                      <div className="col-lg-4">
                        <Link href={`/${lang}/service/${item.service_id}`}>
                          <a>
                            <img
                              src={
                                URL_PREFIX +
                                "images/service/service" +
                                item.service_id +
                                `_title.jpg`
                              }
                              style={{ width: "100%" }}
                            />
                          </a>
                        </Link>
                      </div>
                      <div className="col-lg-8 service-text">
                        <h5>
                          <Link href={`/${lang}/service/${item.service_id}`}>
                            <a>{item.name}</a>
                          </Link>
                        </h5>
                        <div>
                          {item.desc_short ? pars(item.desc_short) : " "}
                        </div>

                        <div>
                          <Link href={`/${lang}/service/${item.service_id}`}>
                            <a className="btn btn-info">ติดต่อเรา</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .service-text div {
          margin-top: 15px;
        }
      `}</style>
    </BaseLayout>
  );
};

export default VIP;
