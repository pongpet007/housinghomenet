import Head_meta from "../../components/Head_meta";
import YellowBreadcrumb from "../../components/shared/YellowBreadcrumb";
import useTranslation from "next-translate/useTranslation";
import BaseLayout from "../../components/layout/BaseLayout";
import ColumnNews2 from "../../components/card/columnNews2";
import HTMLReactParser from "html-react-parser";

import React, { useEffect, useState } from "react";
import { fetchNews } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

const Review = (props) => {
  const { t, lang } = useTranslation("common");
  const dispatch = useDispatch();

  const newsList = useSelector((state) => state.news.newsList);

  const striptag = (str) => {
    const regex = /(<([^>]+)>)|(&nbsp;)/gi;
    return str.replace(regex, "");
  };
  useEffect(() => {
    dispatch(fetchNews({ only_project: 1, is_random: 1, limit: 12 }));
  }, []);

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
        <div className="row">
          <div className="sugguestion">
            <h4>รีวิวโครงการใหม่</h4>
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

export default Review;
