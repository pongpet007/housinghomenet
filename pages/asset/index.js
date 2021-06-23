import React from "react";
import useTranslation from "next-translate/useTranslation";
import CardHome from "../../components/Home/cardHome";
import { Row, Col } from "react-bootstrap";
import Head_meta from "../../components/Head_meta";
import { getAssetList } from "../../lib/api";
import { useRouter } from "next/router";
import YellowBreadcrumb from "../../components/shared/YellowBreadcrumb";
import BaseLayout from "../../components/layout/BaseLayout";
import BarSearch from "../../components/BarSearch";

const index = () => {
  const router = useRouter();
  const asset_type_id = router.query.asset_type_id
    ? router.query.asset_type_id
    : 0;
  // console.log(data)
  const { t, lang } = useTranslation("common");
  const params = {
    asset_type_id,
    limit: 12,
    page: 1,
  };
  const data = getAssetList(params);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <BaseLayout>
      <Head_meta />
      <BarSearch />
      <YellowBreadcrumb
        data={[
          { name: t("home"), url: `/${lang}` },
          { name: "ขายบ้านที่ดิน", url: "", active: true },
        ]}
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="asset1" style={{ position: "relative" }}>
              <img src="/../images/img-test.png" style={{ width: "100%" }} />
              <div className="asset1-text">
                <h2>ขายทาวน์โฮม อินดี้ บางนา</h2>
                <div className="address">
                  ถนนบางนา-ตราด, บางแก้ว, บางพลี สมุทรปราการ
                </div>
                <div className="price">฿ 2,400,000</div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col" style={{ marginBottom: 20 }}>
                <img src="/../images/img-test.png" style={{ width: "100%" }} />
              </div>
              <div className="col">
                <div className="asset2">
                  <h4>ขายทาวน์โฮม อินดี้ บางนา</h4>
                  <div className="address">
                    ถนนบางนา-ตราด, บางแก้ว, บางพลี สมุทรปราการ ถนนบางนา-ตราด,
                    บางแก้ว, บางพลี สมุทรปราการ ถนนบางนา-ตราด, บางแก้ว, บางพลี
                    สมุทรปราการ
                  </div>
                  <div className="price">฿ 2,400,000</div>

                  <div className="row">
                    <div className="col">
                      <img src="/../images/icon-room.png" /> 2 ห้องนอน
                    </div>
                    <div className="col">
                      <img src="/../images/icon-bath.png" /> 2 ห้องน้ำ
                    </div>
                  </div>
                  <div>
                    <img src="/../images/icon-area.png" /> 56 ตรว.
                  </div>
                  <div>ผู้ลงประกาศ : xxxxxxxx</div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <img src="/../images/img-test.png" style={{ width: "100%" }} />
              </div>
              <div className="col">
                <div className="asset2">
                  <h4>ขายทาวน์โฮม อินดี้ บางนา</h4>
                  <div className="address">
                    ถนนบางนา-ตราด, บางแก้ว, บางพลี สมุทรปราการ ถนนบางนา-ตราด,
                    บางแก้ว, บางพลี สมุทรปราการ ถนนบางนา-ตราด, บางแก้ว, บางพลี
                    สมุทรปราการ
                  </div>
                  <div className="price">฿ 2,400,000</div>

                  <div className="row">
                    <div className="col">
                      <img src="/../images/icon-room.png" /> 2 ห้องนอน
                    </div>
                    <div className="col">
                      <img src="/../images/icon-bath.png" /> 2 ห้องน้ำ
                    </div>
                  </div>
                  <div>
                    <img src="/../images/icon-area.png" /> 56 ตรว.
                  </div>
                  <div>ผู้ลงประกาศ : xxxxxxxx</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={{ marginTop: 50 }}>
          <div className="col-lg-9">
            <div className="assetlist">
              <h4>ขายบ้านที่ดิน</h4>
              <button className="btn btn-danger">ขาย</button>
              <button
                className="btn btn-default"
                style={{ border: "2px solid #b02a37", marginLeft: 10 }}
              >
                เช่า
              </button>

              {arr.map((item, idx) => {
                return (
                  <div
                    className="row asset2 "
                    key={idx}
                    style={{ marginTop: 20 }}
                  >
                    <div className="col-lg-3">
                      <img
                        src="/../images/img-test.png"
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="col-lg-9">
                      <div>
                        <h4>ขายทาวน์โฮม อินดี้ บางนา</h4>
                        <div className="address">
                          ถนนบางนา-ตราด, บางแก้ว, บางพลี สมุทรปราการ
                          ถนนบางนา-ตราด, บางแก้ว, บางพลี สมุทรปราการ
                          ถนนบางนา-ตราด, บางแก้ว, บางพลี สมุทรปราการ
                        </div>
                        <div className="price">฿ 2,400,000</div>

                        <div className="row">
                          <div className="col">
                            <img src="/../images/icon-room.png" /> 2 ห้องนอน
                          </div>
                          <div className="col">
                            <img src="/../images/icon-bath.png" /> 2 ห้องน้ำ
                          </div>
                          <div className="col">
                            <img src="/../images/icon-area.png" /> 56 ตรว.
                          </div>
                        </div>

                        <div>ผู้ลงประกาศ : xxxxxxxx</div>
                      </div>
                    </div>
                  </div>
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
              <button className="btn btn-danger">ดูทั้งหมด</button>
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
      {/* <div className="container form-header">
        <Row>
          {data &&
            data.assets.map((asset) => {
              let pic = asset.pictures[0]
                ? process.env.NEXT_PUBLIC_API_PREFIX +
                  "images/gallery/" +
                  asset.pictures[0].filename
                : `/assets/images/p-1.jpg`;
              // console.log(pic)
              return (
                <Col
                  xs={6}
                  lg={3}
                  key="{asset.asset_id}"
                  className="mb-display-r"
                >
                  <CardHome
                    asset_id={asset.asset_id}
                    url={pic}
                    name={asset.title_th}
                    address={asset.place_th}
                    price={asset.price}
                  />
                </Col>
              );
            })}
        </Row>
      </div> */}
      <style jsx>{`
        .asset1 h2 {
          font-size: 31px;
        }
        .asset1 .address {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: 16px;
        }
        .asset1 .price {
          font-size: 18px;
        }
        .asset1-text {
          position: absolute;
          bottom: 0;
          left: 0;
          padding: 10px;
          background-color: rgba(0, 0, 0, 0.2);
          width: 100%;
          color: white;
        }
        .asset2 {
          font-size: 16px;
        }
        .asset2 div {
          margin-bottom: 10px;
        }
        .asset2 h4 {
          line-clamp: 1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: 18px;
        }
        .asset2 .address {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      `}</style>
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
