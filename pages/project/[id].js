import Head_meta from "../../components/Head_meta";
import YellowBreadcrumb from "../../components/shared/YellowBreadcrumb";
import useTranslation from "next-translate/useTranslation";
import BaseLayout from "../../components/layout/BaseLayout";
import { useRouter } from "next/router";
import HTMLReactParser from "html-react-parser";
import ColumnProject from "../../components/card/columnProject";
import ColumnNews2 from "../../components/card/columnNews2";
import Link from "next/link";

import React, { useEffect, useState } from "react";
import { fetchNews, fetchAsset, fetchProjectById } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

const detail = (props) => {
  const striptag = (str) => {
    const regex = /(<([^>]+)>)|(&nbsp;)/gi;
    return str.replace(regex, "");
  };

  const { t, lang } = useTranslation("common");
  const router = useRouter();
  const { id } = router.query;

  const dispatch = useDispatch();

  const assetList = useSelector((state) => state.asset.assetList);
  const newsList = useSelector((state) => state.news.newsList);
  const project = useSelector((state) => state.project.project);

  // const striptag = (str) => {
  //   const regex = /(<([^>]+)>)|(&nbsp;)/gi;
  //   return str.replace(regex, "");
  // };

  useEffect(() => {
    dispatch(fetchAsset({ project_id: id, limit: 4 }));
    dispatch(fetchProjectById({ project_id: id }));
    dispatch(fetchNews({ project_id: id, limit: 4 }));
  }, []);

  const desclang =
    lang == "th" ? project?.project?.desc_th : project?.project?.desc_en;

  console.log(assetList);
  return (
    <BaseLayout>
      <Head_meta />

      <YellowBreadcrumb
        data={[
          { name: t("home"), url: `/${lang}` },
          { name: "Review", url: "", active: true },
        ]}
      />

      <div style={{ marginTop: -30 }}>
        <img
          className="img-fluid"
          src={
            process.env.NEXT_PUBLIC_API_PREFIX +
            "images/project/project" +
            project?.project?.project_id +
            ".jpg"
          }
        />
      </div>

      <div className="container" style={{ marginTop: 30, marginBottom: 30 }}>
        <div className="row">
          <div className="col-lg-12">{HTMLReactParser(" " + desclang)}</div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-12" style={{ marginTop: 20 }}>
            <div className="sugguestion">
              <h4>
                โครงการคัดสรรแล้วสำหรับคุณ{" "}
                <a href={`/${lang}/project/promotion`} target="_blank">
                  <span style={{ float: "right" }}>{t("viewmore")}</span>
                </a>
              </h4>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="row">
              {assetList.assets &&
                assetList.assets.map((item, idx) => {
                  const api_url = process.env.NEXT_PUBLIC_API_PREFIX;
                  return (
                    <div className="col-lg-3" key={item.asset_id}>
                      <ColumnProject
                        typeName={
                          lang === "th"
                            ? item.project_name_th
                            : item.project_name_en
                        }
                        color="pink"
                        linkurl={`/${lang}/asset/${item.asset_id}`}
                        linkproject={`/${lang}/project/${item.project_id}`}
                        imgsrc={
                          item.pictures[0]
                            ? api_url +
                              "images/gallery/" +
                              item.pictures[0]?.filename
                            : `/images/img-test.png`
                        }
                        title={lang === "th" ? item.title_th : item.title_en}
                        desc={lang === "th" ? item.detail_th : item.detail_en}
                        price={item.price}
                        room={item.room}
                        bath={item.bathroom}
                        area={item.dimension_wa}
                        creator={item.cby}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="sugguestion">
            <h4>
              รีวิวโครงการ
              <span style={{ float: "right" }}>
                <Link href={`/${lang}/project/review`}>
                  <a>{t("viewmore")}</a>
                </Link>
              </span>
            </h4>
          </div>
        </div>
        <div className="row">
          {newsList &&
            newsList?.news?.map((item, idx) => {
              return (
                <div className="col-lg-3" key={idx}>
                  <ColumnNews2
                    linkurl={`/${lang}/news/${item.news_id}`}
                    imgsrc={
                      process.env.NEXT_PUBLIC_API_PREFIX +
                      "images/news/news" +
                      item.news_id +
                      "_title.jpg"
                    }
                    title={
                      lang == "th"
                        ? item.language_th.length > 0
                          ? item.language_th[0].name
                          : ""
                        : item.language_en.length > 0
                        ? item.language_en[0].name
                        : ""
                    }
                    desc={
                      lang == "th"
                        ? item.language_th.length > 0
                          ? HTMLReactParser(
                              striptag(item.language_th[0].desc_short)
                            )
                          : "desc short"
                        : item.language_en.length > 0
                        ? HTMLReactParser(
                            striptag(item.language_en[0].desc_short)
                          )
                        : "desc short"
                    }
                  />
                </div>
              );
            })}
        </div>
      </div>
    </BaseLayout>
  );
};

export default detail;
