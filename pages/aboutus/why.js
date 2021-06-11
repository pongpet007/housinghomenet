import { Container, Row, Col } from "react-bootstrap";
import Head_meta from "../../components/Head_meta";
import YellowBreadcrumb from "../../components/shared/YellowBreadcrumb";
import useTranslation from "next-translate/useTranslation";
const Why = (props) => {
  const { t, lang } = useTranslation("common");
  return (
    <div>
      <Head_meta />

      <YellowBreadcrumb
        data={[
          { name: t("home"), url: `/${lang}` },
          { name: "Why", url: "", active: true },
        ]}
      />

      <Container>
        <Row>
          <Col lg={12}>
            <h1>Why</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Why;
