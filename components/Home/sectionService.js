import React, { useEffect } from "react";
import useTranslation from "next-translate/useTranslation";
import RowService from "../../components/card/rowService";
import { fetchServiceType } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

export default function sectionService() {
  const { t, lang } = useTranslation("common");
  const dispatch = useDispatch();
  const serviceTypeList = useSelector((state) => state.service.serviceTypeList);

  useEffect(() => {
    dispatch(fetchServiceType({ limit: 10 }));
  }, []);

  console.log(serviceTypeList);
  // const params = {
  //   limit: 10,
  //   page: 1,
  // };

  // const data = getServiceTypeList(params);
  let pic = "";
  return (
    <div className="bg-service">
      <div className="container">
        <div className="mb-4">
          <div className="row">
            <div lg={12}>
              <h4 style={{ fontWeight: "bold" }}>{t("homeservice")}</h4>
            </div>
          </div>
        </div>
        <div className="section-service">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                {serviceTypeList.servicetypes &&
                  serviceTypeList.servicetypes.map((item, idx) => {
                    pic =
                      process.env.NEXT_PUBLIC_API_PREFIX +
                      "images/service_type/service_type" +
                      item.service_type_id +
                      `_title.jpg`;
                    return (
                      <div className="col-lg-6 col-sm-12 col-xs-12" key={idx}>
                        <RowService
                          linkurl={`/${lang}/service/${item.service_type_id}`}
                          imgsrc={pic ? pic : `/images/img-test.png`}
                          title={
                            lang === "th"
                              ? item.service_type_name_th
                              : item.service_type_name_en
                          }
                          desc={
                            lang === "th"
                              ? item.service_type_detail_th
                              : item.service_type_detail_en
                          }
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
