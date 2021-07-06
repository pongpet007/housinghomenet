import React, { useEffect } from "react";
import { useRouter } from "next/router";
import ColumnAsset from "../../components/card/columnAsset";
import ColumnProject from "../../components/card/columnProject";
import useTranslation from "next-translate/useTranslation";
import { fetchAsset1, fetchAsset2 } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
function sectionHome() {
  const dispatch = useDispatch();
  const assetList1 = useSelector((state) => state.home.assetList1);
  const assetList2 = useSelector((state) => state.home.assetList2);
  const router = useRouter();
  const { t, lang } = useTranslation("common");

  useEffect(() => {
    dispatch(fetchAsset1({ asset_type_id: 1, limit: 4 }));
    dispatch(fetchAsset2({ limit: 4 }));
  }, []);
  let pic = "";
  const api_url = process.env.NEXT_PUBLIC_API_PREFIX;
  // console.log(assetList1);
  // console.log(assetList2);
  return (
    <>
      <div className="container form-header showhome-mb">
        <div className="row">
          <div className="col-lg-12">
            <div className="sugguestion">
              <h4>แนะนำสำหรับคุณ</h4>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="row">
              {assetList1.assets &&
                assetList1.assets.map((item, idx) => {
                  return (
                    <div className="col-lg-3" key={item.asset_id}>
                      <ColumnAsset
                        linkurl={`/${lang}/asset/${item.asset_id}`}
                        imgsrc={
                          item.pictures[0]
                            ? api_url +
                              "images/gallery/" +
                              item.pictures[0]?.filename
                            : `/images/img-test.png`
                        }
                        title={lang === "th" ? item.title_th : item.title_en}
                        desc={lang === "th" ? item.detail_th : item.detail_en}
                        price={item.price}
                        room={item.room}
                        bath={item.bathroom}
                        area={item.dimension_wa}
                        creator={item.cby}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12" style={{ marginTop: 20 }}>
            <div className="sugguestion">
              <h4>โครงการคัดสรรแล้วสำหรับคุณ</h4>
            </div>
          </div>
          <div className="col-lg-12">
            <dir className="row">
              {assetList2.assets &&
                assetList2.assets.map((item, idx) => {
                  return (
                    <div className="col-lg-3" key={item.asset_id}>
                      <ColumnProject
                        typeName={
                          lang === "th"
                            ? item.project_name_th
                            : item.project_name_en
                        }
                        color="pink"
                        linkurl={`/${lang}/asset/${item.asset_id}`}
                        imgsrc={
                          item.pictures[0]
                            ? api_url +
                              "images/gallery/" +
                              item.pictures[0]?.filename
                            : `/images/img-test.png`
                        }
                        title={lang === "th" ? item.title_th : item.title_en}
                        desc={lang === "th" ? item.detail_th : item.detail_en}
                        price={item.price}
                        room={item.room}
                        bath={item.bathroom}
                        area={item.dimension_wa}
                        creator={item.cby}
                      />
                    </div>
                  );
                })}
            </dir>
          </div>
        </div>
      </div>
    </>
  );
}

export default sectionHome;
