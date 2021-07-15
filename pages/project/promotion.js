import { Container, Row, Col } from "react-bootstrap";
import Head_meta from "../../components/Head_meta";
import YellowBreadcrumb from "../../components/shared/YellowBreadcrumb";
import useTranslation from "next-translate/useTranslation";
import BaseLayout from "../../components/layout/BaseLayout";
import ColumnProject from "../../components/card/columnProject";
import ColumnNews from "../../components/card/columnNews";
import ColumnNews2 from "../../components/card/columnNews2";

const Promotion = (props) => {
  const { t, lang } = useTranslation("common");
  return (
    <BaseLayout>
      <Head_meta />

      <YellowBreadcrumb
        data={[
          { name: t("home"), url: `/${lang}` },
          { name: "Promotion", url: "", active: true },
        ]}
      />

      <div className="container">
        <div className="row" style={{ paddingBottom: 30 }}>
          <div className="col-lg-6">
            <ColumnNews />
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-6">
                <img src="/images/img-test.png" style={{ maxWidth: "100%" }} />
              </div>
              <div className="col-lg-6">
                <img src="/images/img-test.png" style={{ maxWidth: "100%" }} />
              </div>
              <div className="col-lg-6">
                <img src="/images/img-test.png" style={{ maxWidth: "100%" }} />
              </div>
              <div className="col-lg-6">
                <img src="/images/img-test.png" style={{ maxWidth: "100%" }} />
              </div>
            </div>
          </div>
        </div>

        <div className="row" style={{ paddingBottom: 30 }}>
          <div className="sugguestion">
            <h4>
              โครงการใหม่แนะนำ{" "}
              <span style={{ float: "right" }}>ดูเพิ่มเติมทั้งหมด</span>
            </h4>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3">
            <ColumnProject
              color="red"
              linkurl="#"
              typeName="บ้านเดี่ยว"
              title="Supalai"
              desc="ถนนบางนา-ตราด, บางแก้ว, บางพลี, สมุทรปราการ"
              imgsrc="/images/img-test.png"
            />
          </div>
          <div className="col-lg-3">
            <ColumnProject
              color="green"
              linkurl="#"
              typeName="บ้านเดี่ยว"
              title="Supalai"
              desc="ถนนบางนา-ตราด, บางแก้ว, บางพลี, สมุทรปราการ"
              imgsrc="/images/img-test.png"
            />
          </div>
          <div className="col-lg-3">
            <ColumnProject
              color="blue"
              linkurl="#"
              typeName="บ้านเดี่ยว"
              title="Supalai"
              desc="ถนนบางนา-ตราด, บางแก้ว, บางพลี, สมุทรปราการ"
              imgsrc="/images/img-test.png"
            />
          </div>
          <div className="col-lg-3">
            <ColumnProject
              color="gray"
              linkurl="#"
              typeName="บ้านเดี่ยว"
              title="Supalai"
              desc="ถนนบางนา-ตราด, บางแก้ว, บางพลี, สมุทรปราการ"
              imgsrc="/images/img-test.png"
            />
          </div>
        </div>

        <div className="row" style={{ paddingBottom: 30, paddingTop: 30 }}>
          <div className="sugguestion">
            <h4>
              รีวิวโครงการใหม่
              <span style={{ float: "right" }}>ดูเพิ่มเติมทั้งหมด</span>
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <ColumnNews2 />
          </div>
          <div className="col-lg-3">
            <ColumnNews2 />
          </div>
          <div className="col-lg-3">
            <ColumnNews2 />
          </div>
          <div className="col-lg-3">
            <ColumnNews2 />
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Promotion;
