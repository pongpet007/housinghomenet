import React, { useEffect, useState } from "react";

import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

const ColumnNews2 = ({ linkurl, imgsrc, title, desc, price }) => {
  const { t, lang } = useTranslation("common");
  return (
    <>
      <div className="column-news2" style={{ position: "relative" }}>
        <Link href={linkurl ? linkurl : "#"}>
          <a target="_blank">
            <img
              src={imgsrc ? imgsrc : "/images/img-test.png"}
              style={{ width: "100%" }}
            />
          </a>
        </Link>

        <div className="column-news2-text">
          <h2 className="title">
            <Link href={linkurl ? linkurl : "#"}>
              <a target="_blank"> {title ? title : "Title"} </a>
            </Link>
          </h2>
          <div className="desc">{desc ? desc : "Description"}</div>
        </div>
      </div>
    </>
  );
};

export default ColumnNews2;
