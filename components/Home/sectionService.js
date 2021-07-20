import React, { useEffect } from "react";
import useTranslation from "next-translate/useTranslation";
import RowService from "../../components/card/rowService";
import { fetchService } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import pars from "html-react-parser";

export default function sectionService() {
  const { t, lang } = useTranslation("common");
  const dispatch = useDispatch();
  const serviceList = useSelector((state) => state.service.serviceList);

  useEffect(() => {
    dispatch(
      fetchService({
        show_index: 1,
        limit: 10,
        country_id: lang === "en" ? 236 : 221,
      })
    );
  }, []);

  // console.log(serviceList);

  let pic = "";
  return (
    <div className="bg-service" style={{ marginTop: 30 }}>
      <div className="container">
        <div className="mb-4">
          <div className="row">
            <div lg={12}>
              <h4 style={{ fontWeight: "bold" }}>
                {t("homeservice")}
                <a href={`/${lang}/service/`} target="_blank">
                  <span style={{ float: "right" }}>ดูทั้งหมด</span>
                </a>
              </h4>
            </div>
          </div>
        </div>
        <div className="section-service">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                {serviceList.service &&
                  serviceList.service.map((item, idx) => {
                    pic =
                      process.env.NEXT_PUBLIC_API_PREFIX +
                      "images/service/service" +
                      item.service_id +
                      `_title.jpg`;
                    return (
                      <div className="col-lg-4 col-sm-12 col-xs-12" key={idx}>
                        <RowService
                          linkurl={`/${lang}/service/${item.service_id}`}
                          imgsrc={pic ? pic : `/images/img-test.png`}
                          title={item.name}
                          desc={item.desc_short ? pars(item.desc_short) : ""}
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
