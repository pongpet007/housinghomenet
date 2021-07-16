import Head_meta from "../../components/Head_meta";
import YellowBreadcrumb from "../../components/shared/YellowBreadcrumb";
import useTranslation from "next-translate/useTranslation";
import BaseLayout from "../../components/layout/BaseLayout";
import HTMLReactParser from "html-react-parser";

const detail = ({ data }) => {
  const { t, lang } = useTranslation("common");
  console.log(data);
  const title =
    lang == "th"
      ? data.news.language_th.length > 0
        ? data.news.language_th[0].name
        : ""
      : data.news.language_en.length > 0
      ? data.news.language_en[0].name
      : "";
  const desc =
    lang == "th"
      ? data.news.language_th.length > 0
        ? data.news.language_th[0].desc_long
        : ""
      : data.news.language_en.length > 0
      ? data.news.language_en[0].desc_long
      : "";
  return (
    <BaseLayout>
      <Head_meta />

      <YellowBreadcrumb
        data={[
          { name: t("home"), url: `/${lang}` },
          { name: t("news"), url: `/${lang}/project/promotion` },
          { name: title, url: "", active: true },
        ]}
      />

      <div className="container">
        <div className="row" style={{ paddingBottom: 30, paddingTop: 30 }}>
          <div className="col-xl-12">
            <h1>{title}</h1>
            <div>{HTMLReactParser(desc)}</div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export async function getServerSideProps({ query }) {
  let { id } = query;

  const res = await fetch(
    process.env.NEXT_PUBLIC_API_PREFIX + `news/getOne?news_id=` + id
  );
  let data = await res.json();

  return { props: { data } };
}

export default detail;
