import Head_meta from "../../components/Head_meta";
import YellowBreadcrumb from "../../components/shared/YellowBreadcrumb";
import useTranslation from "next-translate/useTranslation";
import BaseLayout from "../../components/layout/BaseLayout";
import Link from "next/link";

const Filter = (props) => {
  const { t, lang } = useTranslation("common");
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const category = [
    "ทำความสะอาด",
    "งานแต่ง",
    "ช่างไฟฟ้า",
    "ช่างประปา",
    "ช่างปูน",
    "ปูกระเบื้อง",
    "แต่งสวน",
    "รับจัดงานเลี้ยง",
  ];
  return (
    <BaseLayout>
      <Head_meta />

      <YellowBreadcrumb
        data={[
          { name: t("common:home"), url: `/${lang}` },
          { name: "Filter", url: "", active: true },
        ]}
      />

      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <h4>หมวดหมู่งานบริการ</h4>
            <div>
              <ul style={{ listStyle: "none" }}>
                {category.map((item, idx) => {
                  return (
                    <li key={idx}>
                      <input type="checkbox" name="chk" value={idx} /> {item}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="banner">xxx</div>
          </div>
          <div className="col-lg-9">
            <div className="row">
              <div className="mb-4">
                <h5>
                  <span>99999</span>
                  <span>
                    ผลการค้นหา " คำค้นหา" บริการเพื่อความเป็น VIP
                    สร้างการแจ้งเตือน.
                  </span>
                </h5>
              </div>

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

export default Filter;
