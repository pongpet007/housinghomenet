import { Container, Row, Col } from "react-bootstrap";
import Head_meta from "../../components/Head_meta";
import YellowBreadcrumb from "../../components/shared/YellowBreadcrumb";
import useTranslation from "next-translate/useTranslation";
import BaseLayout from "../../components/layout/BaseLayout";
import PageContent from "../../components/shared/PageContent";
const Package = (props) => {
  const { t, lang } = useTranslation("common");
  return (
    <BaseLayout>
      <Head_meta />

      <YellowBreadcrumb
        data={[
          { name: t("home"), url: `/${lang}` },
          { name: "Package", url: "", active: true },
        ]}
      />

      <Container>
        <Row>
          <Col lg={12}>
            <PageContent page_id={3} />
          </Col>
        </Row>
      </Container>
    </BaseLayout>
  );
};

export default Package;
