import React, { useEffect, useState } from "react";
import useTranslation from "next-translate/useTranslation";
import Head_meta from "../../components/Head_meta";
import { useRouter } from "next/router";
import YellowBreadcrumb from "../../components/shared/YellowBreadcrumb";
import BaseLayout from "../../components/layout/BaseLayout";
import BarSearch from "../../components/BarSearch";
import RowAsset from "../../components/card/rowAsset";
import ColumnNews from "../../components/card/columnNews";
import Link from "next/link";

import { fetchAsset, fetchAssetTypeById } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

const index = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { t, lang } = useTranslation("common");

  const assetList = useSelector((state) => state.asset.assetList);
  const assetType = useSelector((state) => state.asset.assetType);
  const asset_type_id = router.query.asset_type_id
    ? router.query.asset_type_id
    : 0;

  useEffect(() => {
    dispatch(fetchAsset({ asset_type_id: asset_type_id, limit: 20, page: 1 }));
    dispatch(fetchAssetTypeById(asset_type_id));
  }, []);

  // console.log(assetType);
  const { assets, totalrows, search } = assetList;
  const dataslice = assets?.slice(3, assets.length);
  return (
    <BaseLayout>
      <Head_meta />
      <BarSearch />
      <YellowBreadcrumb
        data={[
          { name: t("home"), url: `/${lang}` },
          {
            name:
              lang === "th" && assetType
                ? assetType.asset_type_name_th
                : assetType.asset_type_name_en,
            url: "",
            active: true,
          },
        ]}
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            {assets && assets[0] && (
              <div>
                <ColumnNews
                  linkurl={`/${lang}/asset/${assets[0].asset_id}`}
                  imgsrc={
                    assets[0]?.pictures
                      ? process.env.NEXT_PUBLIC_API_PREFIX +
                        "images/gallery/" +
                        assets[0]?.pictures[0]?.filename
                      : "/../images/img-test.png"
                  }
                  title={
                    lang === "th" ? assets[0].title_th : assets[0].title_en
                  }
                  desc={
                    lang === "th" ? assets[0].detail_th : assets[0].detail_en
                  }
                  price={assets[0].price}
                />
              </div>
            )}
          </div>
          <div className="col-lg-6">
            {assets && assets[1] && (
              <RowAsset
                linkurl={`/${lang}/asset/${assets[1].asset_id}`}
                imgsrc={
                  assets[1]?.pictures[0]
                    ? process.env.NEXT_PUBLIC_API_PREFIX +
                      "images/gallery/" +
                      assets[1]?.pictures[0]?.filename
                    : "/../images/img-test.png"
                }
                title={lang === "th" ? assets[1].title_th : assets[1].title_en}
                desc={lang === "th" ? assets[1].detail_th : assets[1].detail_en}
                price={assets[1].price}
                room={assets[1].room}
                bath={assets[1].bathroom}
                area={assets[1].dimension_wa}
                creator={assets[1].cby}
              />
            )}

            {assets && assets[2] && (
              <RowAsset
                linkurl={`/${lang}/asset/${assets[2].asset_id}`}
                imgsrc={
                  assets[2]?.pictures[0]
                    ? process.env.NEXT_PUBLIC_API_PREFIX +
                      "images/gallery/" +
                      assets[2]?.pictures[0]?.filename
                    : "/../images/img-test.png"
                }
                title={lang === "th" ? assets[2].title_th : assets[2].title_en}
                desc={lang === "th" ? assets[2].detail_th : assets[2].detail_en}
                price={assets[2].price}
                room={assets[2].room}
                bath={assets[2].bathroom}
                area={assets[2].dimension_wa}
                creator={assets[2].cby}
              />
            )}
          </div>
        </div>
        <div className="row" style={{ marginTop: 50 }}>
          <div className="col-lg-9">
            <div className="assetlist">
              <div className="mb-3">
                <h4>
                  {lang === "th" && assetType
                    ? assetType.asset_type_name_th
                    : assetType.asset_type_name_en}
                </h4>
                <button className="btn btn-danger">ขาย</button>
                <button
                  className="btn btn-default"
                  style={{ border: "2px solid #b02a37", marginLeft: 10 }}
                >
                  เช่า
                </button>
              </div>
              {dataslice &&
                dataslice.map((item, idx) => {
                  return (
                    <RowAsset
                      key={idx}
                      linkurl={`/${lang}/asset/${item.asset_id}`}
                      imgsrc={
                        item.pictures[0]
                          ? process.env.NEXT_PUBLIC_API_PREFIX +
                            "images/gallery/" +
                            item.pictures[0]?.filename
                          : `/../images/img-test.png`
                      }
                      title={lang === "th" ? item.title_th : item.title_en}
                      desc={lang === "th" ? item.detail_th : item.detail_en}
                      price={item.price}
                      room={item.room}
                      bath={item.bathroom}
                      area={item.dimension_wa}
                      creator={item.cby}
                    />
                  );
                })}
            </div>
            <div
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Link href={`/${lang}/asset/filter/`}>
                <a className="btn btn-danger">ดูทั้งหมด</a>
              </Link>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="locationhit">
              <h4>ทำเลยอดนิยม</h4>
              <div>xxx</div>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

// const checkundefined = (t) => (t === undefined) ? 0 : t

// export async function getServerSideProps({ query }) {
//     let { asset_type_id, sale_type_id, is_new, keyword } = query
//     asset_type_id = !(asset_type_id===undefined)?asset_type_id:0
//     sale_type_id = !(sale_type_id===undefined)?sale_type_id:0
//     is_new = !(is_new===undefined)?is_new:0
//     keyword = !(keyword===undefined)?keyword:''

//     let params = {
//         asset_type_id,
//         sale_type_id,
//         keyword,
//         is_new,
//         limit: 12,
//         page: 1
//     }

//     let queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
//     const res = await fetch(process.env.NEXT_PUBLIC_API_PREFIX + `asset/getlistbytype?` + queryString)
//     let data = await res.json()

//     return { props: { data } }
// }

export default index;
