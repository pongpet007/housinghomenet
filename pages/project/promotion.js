import Head_meta from "../../components/Head_meta";
import YellowBreadcrumb from "../../components/shared/YellowBreadcrumb";
import useTranslation from "next-translate/useTranslation";
import BaseLayout from "../../components/layout/BaseLayout";
import ColumnProject from "../../components/card/columnProject";
import ColumnNews from "../../components/card/columnNews";
import ColumnNews2 from "../../components/card/columnNews2";
import HTMLReactParser from "html-react-parser";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { fetchAsset, fetchNews } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

const Promotion = (props) => {
  const { t, lang } = useTranslation("common");
  const dispatch = useDispatch();

  const assetList = useSelector((state) => state.asset.assetList);
  const newsList = useSelector((state) => state.news.newsList);

  const striptag = (str) => {
    const regex = /(<([^>]+)>)|(&nbsp;)/gi;
    return str.replace(regex, "");
  };
  useEffect(() => {
    dispatch(
      fetchAsset({
        only_project: 1,
        only_picture_main: 0,
        is_random: 1,
        limit: 5,
      })
    );
    dispatch(fetchNews({ only_project: 1, is_random: 1, limit: 4 }));
  }, []);

  // console.log(newsList);

  const item1 = assetList?.assets?.filter((item) => {
    if (item?.pictures?.length > 5) {
      return item;
    }
  });

  // if (item1?.length > 0) console.log(item1[0]);

  const assetMain =
    item1?.length > 0 ? (
      <div className="row" style={{ paddingBottom: 30 }}>
        <div className="col-lg-6">
          <ColumnNews
            imgsrc={
              process.env.NEXT_PUBLIC_API_PREFIX +
              "images/gallery/" +
              item1[0]?.pictures[0]?.filename
            }
            title={lang == "th" ? item1[0].title_th : item1[0].title_en}
            desc={lang == "th" ? item1[0].place_th : item1[0].place_en}
          />
        </div>
        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-6">
              <img
                src={
                  process.env.NEXT_PUBLIC_API_PREFIX +
                  "images/gallery/" +
                  item1[0]?.pictures[1]?.filename
                }
                style={{ maxWidth: "100%" }}
              />
            </div>
            <div className="col-lg-6">
              <img
                src={
                  process.env.NEXT_PUBLIC_API_PREFIX +
                  "images/gallery/" +
                  item1[0]?.pictures[2]?.filename
                }
                style={{ maxWidth: "100%" }}
              />
            </div>
            <div className="col-lg-6">
              <img
                src={
                  process.env.NEXT_PUBLIC_API_PREFIX +
                  "images/gallery/" +
                  item1[0]?.pictures[3]?.filename
                }
                style={{ maxWidth: "100%" }}
              />
            </div>
            <div className="col-lg-6">
              <img
                src={
                  process.env.NEXT_PUBLIC_API_PREFIX +
                  "images/gallery/" +
                  item1[0]?.pictures[4]?.filename
                }
                style={{ maxWidth: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div></div>
    );

  return (
    <BaseLayout>
      <Head_meta />

      <YellowBreadcrumb
        data={[
          { name: t("home"), url: `/${lang}` },
          { name: t("Promotion"), active: true },
        ]}
      />

      <div className="container">
        {assetMain}

        <div className="row">
          <div className="sugguestion">
            <h4>โครงการใหม่แนะนำ</h4>
          </div>
        </div>

        <div className="row">
          {assetList &&
            assetList?.assets?.map((item, idx) => {
              if (idx > 0)
                return (
                  <div className="col-lg-3" key={idx}>
                    <ColumnProject
                      color="red"
                      linkproject={`/${lang}/project/${item.project_id}`}
                      linkurl={`/${lang}/asset/${item.asset_id}`}
                      typeName={
                        lang == "th"
                          ? item.project_name_th
                          : item.project_name_en
                      }
                      title={lang == "th" ? item.title_th : item.title_en}
                      desc={lang == "th" ? item.place_th : item.place_en}
                      imgsrc={
                        item.pictures.length > 0
                          ? process.env.NEXT_PUBLIC_API_PREFIX +
                            "images/gallery/" +
                            item?.pictures[0]?.filename
                          : "/images/img-test.png"
                      }
                    />
                  </div>
                );
            })}
        </div>

        <div className="row">
          <div className="sugguestion">
            <h4>
              รีวิวโครงการใหม่
              <span style={{ float: "right" }}>
                <Link href={`/${lang}/project/review`}>
                  <a>ดูเพิ่มเติมทั้งหมด</a>
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

export default Promotion;
