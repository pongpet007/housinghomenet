import { Container, Row, Col } from "react-bootstrap";
import Head_meta from "../../components/Head_meta";
import YellowBreadcrumb from "../../components/shared/YellowBreadcrumb";
import useTranslation from "next-translate/useTranslation";
import BaseLayout from "../../components/layout/BaseLayout";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
const Member = (props) => {
  const { t, lang } = useTranslation("common");
  return (
    <BaseLayout>
      <Head_meta />

      <YellowBreadcrumb
        data={[
          { name: t("home"), url: `/${lang}` },
          { name: "Member", url: "", active: true },
        ]}
      />

      <Container>
        <Row>
          <h4>{t("login")}</h4>

          <div className="col-sm-12 col-md-6">
            <Row className="mb-3">
              <div className="col-12 text-center">
                <FacebookLogin />
              </div>
            </Row>
            <Row className="mb-3">
              <div className="col-12 text-center">
                <GoogleLogin />
              </div>
            </Row>
            <Row className="mb-3">
              <div className="col-12">{t("or")}</div>
            </Row>
            <form>
              <div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    name="email"
                    id="email"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="email">{t("email")}</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="xxxxx"
                  />
                  <label htmlFor="password">{t("password")}</label>
                </div>

                <div className="mb-3">
                  <button
                    type="button"
                    class="btn btn-primary"
                    style={{
                      backgroundColor: "#158791",
                      borderColor: "#158791",
                      width: "100%",
                    }}
                  >
                    {t("login")}
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-sm-12 col-md-6">
            <div style={{ backgroundColor: "#F6F6F6", padding: 50 }}>
              <form>
                <h4 className="mb-3">{t("registerbyemail")}</h4>
                <Row className="mb-3">
                  <Col>
                    <input
                      type="text"
                      class="form-control"
                      id="email"
                      name="email"
                      placeholder={t("email")}
                    />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col>
                    <input
                      type="text"
                      class="form-control"
                      id="email"
                      name="email"
                      placeholder={t("password")}
                    />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col>
                    <input
                      type="text"
                      class="form-control"
                      id="email"
                      name="email"
                      placeholder={t("repassword")}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <button
                      type="button"
                      class="btn btn-primary"
                      style={{
                        backgroundColor: "#DB3A34",
                        borderColor: "#DB3A34",
                        width: "100%",
                      }}
                    >
                      {t("login")}
                    </button>
                  </Col>
                </Row>
              </form>
            </div>
          </div>
        </Row>
      </Container>
    </BaseLayout>
  );
};

export default Member;
