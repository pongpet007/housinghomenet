import { Container, Row, Col } from "react-bootstrap";
import Head_meta from "../../components/Head_meta";
import YellowBreadcrumb from "../../components/shared/YellowBreadcrumb";
import useTranslation from "next-translate/useTranslation";
import BaseLayout from "../../components/layout/BaseLayout";
import ColumnNews2 from "../../components/card/columnNews2";
const Review = (props) => {
  const { t, lang } = useTranslation("common");
  return (
    <BaseLayout>
      <Head_meta />

      <YellowBreadcrumb
        data={[
          { name: t("home"), url: `/${lang}` },
          { name: "Review", url: "", active: true },
        ]}
      />

      <div className="container">
        <div className="row" style={{ paddingBottom: 30, paddingTop: 30 }}>
          <div className="sugguestion">
            <h4>
              รีวิวโครงการใหม่
              <span style={{ float: "right" }}>ดูเพิ่มเติมทั้งหมด</span>
            </h4>
          </div>
        </div>
        <div className="row">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, idx) => {
            return (
              <div className="col-lg-3">
                <ColumnNews2 />
              </div>
            );
          })}
        </div>
      </div>
    </BaseLayout>
  );
};

export default Review;
