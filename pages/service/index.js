import { Container, Row, Col } from "react-bootstrap";
import Head_meta from "../../components/Head_meta";
import YellowBreadcrumb from "../../components/shared/YellowBreadcrumb";
import useTranslation from "next-translate/useTranslation";
import BaseLayout from "../../components/layout/BaseLayout";
import Link from "next/link";

const VIP = (props) => {
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
          { name: t("home"), url: `/${lang}` },
          { name: "VIP", url: "", active: true },
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
              <div className="col-lg-12">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="ค้นหางานบริการ"
                  />
                  <span className="input-group-text" id="basic-addon2">
                    <i
                      className="fas fa-search"
                      style={{
                        backgroundColor: "rgb(253, 93, 93)",
                        color: "white",
                      }}
                    />
                  </span>
                </div>
              </div>
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
                  <div className="mb-4 row" key={idx}>
                    <div className="col-lg-4">
                      <Link href="/service/1">
                        <a>
                          <img
                            src="/../images/img-test.png"
                            style={{ width: "100%" }}
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="col-lg-8 service-text">
                      <h5>
                        <Link href="/service/1">
                          <a>ชื่องานบริการ</a>
                        </Link>
                      </h5>
                      <div>ถนนบางนา-ตราด, บางแก้ว, บางพลี สมุทรปราการ</div>
                      <div>ราคา ค่าบริการ 1500 / แล้วแต่ผู้ให้บริการกำหนด</div>
                      <div>
                        <Link href="/service/1">
                          <a className="btn btn-info">ติดต่อเรา</a>
                        </Link>
                      </div>
                      <div>ผู้ลงประกาศ : xxxxxxxx</div>
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
