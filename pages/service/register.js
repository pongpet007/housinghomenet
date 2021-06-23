import { Container, Row, Col } from "react-bootstrap";
import Head_meta from "../../components/Head_meta";
import YellowBreadcrumb from "../../components/shared/YellowBreadcrumb";
import useTranslation from "next-translate/useTranslation";
import BaseLayout from "../../components/layout/BaseLayout";

const register = (props) => {
  const { t, lang } = useTranslation("common");
  return (
    <BaseLayout>
      <Head_meta />

      <YellowBreadcrumb
        data={[
          { name: t("home"), url: `/${lang}` },
          { name: "Register", url: "", active: true },
        ]}
      />

      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h4>สมัครเป็นผู้ให้บริการ</h4>
            <form method="post" action="">
              <div className="mb-3 mt-4 row">
                <div className="col-lg-6">
                  <input
                    type="text"
                    className="form-control"
                    id="inputPassword"
                    placeholder="ชื่อ"
                  />
                </div>
                <div className="col-lg-6">
                  <input
                    type="text"
                    className="form-control"
                    id="inputPassword"
                    placeholder="นามสกุล"
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <div className="col-lg-12">
                  <input
                    type="text"
                    className="form-control"
                    id="inputPassword"
                    placeholder="ชื่อบริษัท"
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
                    placeholder="รหัสผ่าน"
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <div className="col-lg-12">
                  <input
                    type="text"
                    className="form-control"
                    id="inputPassword"
                    placeholder="รหัสผ่านอีกครั้ง"
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <div className="col-lg-12">
                  <input
                    type="text"
                    className="form-control"
                    id="inputPassword"
                    placeholder="ให้บริการเกี่ยวกับ"
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
            </form>
          </div>
          <div className="col-lg-6">
            <h4>เงื่อนไขการสมัครเป็นผู้ให้บริการ</h4>
            <div className="mb-4 mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
            <button className="btn btn-danger form-control">
              สมัครเป็นผู้ให้บริการ
            </button>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default register;
