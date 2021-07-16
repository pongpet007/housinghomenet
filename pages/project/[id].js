import Head_meta from "../../components/Head_meta";
import YellowBreadcrumb from "../../components/shared/YellowBreadcrumb";
import useTranslation from "next-translate/useTranslation";
import BaseLayout from "../../components/layout/BaseLayout";
import { useRouter } from "next/router";

const detail = (props) => {
  const { t, lang } = useTranslation("common");
  const router = useRouter();
  const { id } = router.query;
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
        <div
          className="row"
          style={{ paddingBottom: 30, paddingTop: 30 }}
        ></div>
      </div>
    </BaseLayout>
  );
};

export default detail;
