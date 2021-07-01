import { Container, Row, Col } from "react-bootstrap";
import Head_meta from "../../components/Head_meta";
import YellowBreadcrumb from "../../components/shared/YellowBreadcrumb";
import useTranslation from "next-translate/useTranslation";
import BaseLayout from "../../components/layout/BaseLayout";
import Link from "next/link";

const ServiceDetail = (props) => {
  const { t, lang } = useTranslation("common");
  const data = [
    "https://www.housinghome.net/api/images/gallery/2021Apr010311033568.jpg",
    "https://www.housinghome.net/api/images/gallery/2021Apr010311033639.jpg",
    "https://www.housinghome.net/api/images/gallery/2021Apr010311034633.jpg",
    "https://www.housinghome.net/api/images/gallery/2021Apr010311034954.jpg",
    "https://www.housinghome.net/api/images/gallery/2021Apr010311041000.jpg",
    "https://www.housinghome.net/api/images/gallery/2021Apr010311041001.jpg",
    "https://www.housinghome.net/api/images/gallery/2021Apr010311041140.jpg",
    "https://www.housinghome.net/api/images/gallery/2021Apr010311041349.jpg",
    "https://www.housinghome.net/api/images/gallery/2021Apr010311041484.jpg",
    "https://www.housinghome.net/api/images/gallery/2021Apr010311042288.jpg",
    "https://www.housinghome.net/api/images/gallery/2021Apr010311042710.jpg",
    "https://www.housinghome.net/api/images/gallery/2021Apr010311044513.jpg",
  ];
  return (
    <BaseLayout>
      <Head_meta />

      <YellowBreadcrumb
        data={[
          { name: t("home"), url: `/${lang}` },
          { name: "ServiceDetail", url: "", active: true },
        ]}
      />

      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <h5>ชื่องานบริการ</h5>
            <h1>฿ อัตตราค่าบริการ 1500 / ทางผู้ให้บริการเป็นคนกำหนด</h1>
            <div>
              <i className="fas fa-map-marker-alt"></i> ถนนบางนา-ตราด, บางแก้ว,
              บางพลี, สมุทรปราการ
            </div>

            {/* <FbImageLibrary
              images={[
                "https://www.housinghome.net/api/images/gallery/2021Apr010311033568.jpg",
                "https://www.housinghome.net/api/images/gallery/2021Apr010311033639.jpg",
                "https://www.housinghome.net/api/images/gallery/2021Apr010311034633.jpg",
                "https://www.housinghome.net/api/images/gallery/2021Apr010311034954.jpg",
                "https://www.housinghome.net/api/images/gallery/2021Apr010311041000.jpg",
                "https://www.housinghome.net/api/images/gallery/2021Apr010311041001.jpg",
                "https://www.housinghome.net/api/images/gallery/2021Apr010311041140.jpg",
                "https://www.housinghome.net/api/images/gallery/2021Apr010311041349.jpg",
                "https://www.housinghome.net/api/images/gallery/2021Apr010311041484.jpg",
                "https://www.housinghome.net/api/images/gallery/2021Apr010311042288.jpg",
                "https://www.housinghome.net/api/images/gallery/2021Apr010311042710.jpg",
                "https://www.housinghome.net/api/images/gallery/2021Apr010311044513.jpg",
              ]}
            /> */}
            <div>
              <i className="far fa-clock"></i> 2 เดือนที่ผ่านมา{" "}
              <i className="far fa-eye"></i> 150 ผู้เข้าชม
            </div>
            <h2>รายละเอียด</h2>
            <div className="pt-4 pb-4">
              บ้านแฝด สูง 5 ชั้น โดยหลังนึงจะมีขนาดประมาณเริ่ม 53 ตร.ว.
              หน้าบ้านกว้างถึง 7.5 เมตร ได้ที่จอดรถ 6-8 คัน
              และมีพื้นที่ใช้สอยมากถึง 587 ตรม. มีลิฟท์ให้ทุกหลัง The Element
              พระราม 9 ถูกออกแบบให้เป็นได้ทั้งบ้านจริงๆและออฟฟิศจริงๆ
              ด้วยพื้นที่ใช้สอยรวมกันมาก ถึง 500 ตารางเมตร
              ทำให้ที่นี่มีครบทุกฟังชั่นการใช้งานได้อย่างสมบูร์แบบจริงๆครับ
              ถ้าเป็นบ้านแล้วมีครอบครัวใหญ่ ผมบอกเลยว่า
              คุณสามารถแบ่งให้อยู่กันครอบครัวละชั้นได้เลยทำเลดีมากๆ ใกล้ The
              Nine รถสาธารณะผ่านเยอะและยังไม่ไกลจาก Airport Link ราคาเพียง 28.5
              ล้านเท่านั้น (ต่อรองได้) บ้านแถวนี้ราคาเริ่มต้นไม่ต่ำกว่า 40 ล้าน
              หากแนะนำคนมาซื้อ รับค่าแนะนำอย่างต่ำ 150,000 บาทไปเลย ติดต่อ
              088-554-0725 ไลน์ไอดี @Livinginsider
            </div>
          </div>
          <div className="col-lg-3">
            <h4>ผู้ลงประกาศ </h4>
            <div className="row">
              <div className="col-lg-3">
                <img
                  src="/../images/img-test.png"
                  style={{ width: "70px", height: "70px" }}
                  className="rounded-circle"
                  alt=""
                />
              </div>
              <div className="col-lg-9">
                <h6>Nattapat Winner Estate</h6>
                <Link href="#">
                  <a
                    className="btn btn-info"
                    style={{
                      fontSize: 12,
                      color: "white",
                      backgroundColor: "#8CC63F",
                      border: 0,
                    }}
                  >
                    <i className="fab fa-line"></i> Line
                  </a>
                </Link>
                <Link href="#">
                  <a
                    className="btn btn-info"
                    style={{
                      fontSize: 14,
                      color: "white",
                      marginLeft: 5,
                      backgroundColor: "#DB3A34",
                      border: 0,
                    }}
                  >
                    <i className="fas fa-phone-alt"></i> +662-123-4567
                  </a>
                </Link>
              </div>
            </div>
            <div>
              <form>
                <div className="mt-3 mb-3 row">
                  <div className="col-lg-12">
                    <input
                      type="text"
                      className="form-control"
                      id="inputPassword"
                      placeholder="ชื่อ-นามสกุล"
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <div className="col-lg-12">
                    <input
                      type="text"
                      className="form-control"
                      id="inputPassword"
                      placeholder="อีเมล"
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <div className="col-lg-12">
                    <input
                      type="text"
                      className="form-control"
                      id="inputPassword"
                      placeholder="เบอร์โทรศัพท์"
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <div className="col-lg-12">
                    <textarea
                      rows={4}
                      className="form-control"
                      placeholder="ข้อความสอบถามเพิ่มเติม"
                    ></textarea>
                  </div>
                </div>
                <div className="mb-3 row">
                  <div className="col-lg-12">
                    <input
                      type="submit"
                      className="btn btn-danger form-control"
                      id="inputPassword"
                      placeholder="ชื่อ-นามสกุล"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <hr />
        <h4>คล้ายกัน</h4>
        <div className="row">
          <div className="col-lg-6">
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
          <div className="col-lg-6">
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
      </div>
      <style jsx>{`
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

export default ServiceDetail;
