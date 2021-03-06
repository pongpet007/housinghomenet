import React, { useEffect, useState } from "react";

import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

const ColumnNews = ({ linkurl, imgsrc, title, desc, price }) => {
  const { t, lang } = useTranslation("common");
  return (
    <>
      <div className="column-news" style={{ position: "relative" }}>
        <Link href={linkurl ? linkurl : "#"}>
          <a>
            <img
              src={imgsrc ? imgsrc : "/images/img-test.png"}
              style={{ width: "100%" }}
            />
          </a>
        </Link>

        <div className="column-news-text">
          <h2 className="title">
            <Link href={linkurl ? linkurl : "#"}>
              <a> {title ? title : "Title"} </a>
            </Link>
          </h2>
          <div className="desc">{desc ? desc : "Description"}</div>
        </div>
      </div>
    </>
  );
};

export default ColumnNews;
