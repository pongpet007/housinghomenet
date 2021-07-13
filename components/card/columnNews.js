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
            <img src={imgsrc} style={{ width: "100%" }} />
          </a>
        </Link>

        <div className="column-news-text">
          <h2 className="title">
            <Link href={linkurl ? linkurl : "#"}>
              <a> {title} </a>
            </Link>
          </h2>
          <div className="desc">{desc}</div>
          <div className="price">฿ {price}</div>
        </div>
      </div>
    </>
  );
};

export default ColumnNews;
