import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head_meta from "../components/Head_meta";
import useTranslation from "next-translate/useTranslation";
import BaseLayout from "../components/layout/BaseLayout";
import BarSearch from "../components/BarSearch";
import ColumnAsset from "../components/card/columnAsset";
import ColumnNews from "../components/card/columnNews";
import ColumnProject from "../components/card/columnProject";
import RowAsset from "../components/card/rowAsset";
import RowService from "../components/card/rowService";
import YellowBreadcrumb from "../components/shared/YellowBreadcrumb";

function test(props) {
  const router = useRouter();
  const { t, lang } = useTranslation("common");
  const img =
    "https://www.housinghome.net/api/images/gallery/2021Apr010311033568.jpg";
  const type = "ทาวน์โฮม";
  const title = "ขายทาวน์โฮม อินดี้ บางนา";
  const desc =
    "ถนนบางนา-ตราด, บางแก้ว, บางพลี  สมุทรปราการ ถนนบางนา-ตราด, บางแก้ว, บางพลี  สมุทรปราการถนนบางนา-ตราด, บางแก้ว, บางพลี  สมุทรปราการถนนบางนา-ตราด, บางแก้ว, บางพลี  สมุทรปราการถนนบางนา-ตราด, บางแก้ว, บางพลี  สมุทรปราการ";
  const price = 500000;
  const url = "#";
  return (
    <BaseLayout>
      <Head_meta />
      <YellowBreadcrumb />
      <div className="container">
        <dir className="row">
          <div className="col-lg-4 ">
            <ColumnAsset
              imgsrc={img}
              title={title}
              desc={desc}
              price={price}
              linkurl={url}
            />
          </div>
          <div className="col-lg-4">
            <ColumnProject
              imgsrc={img}
              title={title}
              desc={desc}
              price={price}
              linkurl={url}
              color="#add7fe"
            />
          </div>
          <div className="col-lg-4">
            <ColumnNews
              imgsrc={img}
              title={title}
              desc={desc}
              price={price}
              linkurl={url}
            />
          </div>
        </dir>
        <dir className="row">
          <div className="col-lg-6">
            <RowAsset
              imgsrc={img}
              title={title}
              desc={desc}
              price={price}
              linkurl={url}
              room={2}
              bath={2}
              area={18}
              creator="Admin"
            />
          </div>
          <div className="col-lg-6">
            <RowService
              imgsrc={img}
              title={title}
              desc={desc}
              price={price}
              linkurl={url}
              room={2}
              bath={2}
              area={18}
              creator="Admin"
            />
          </div>
        </dir>
      </div>
    </BaseLayout>
  );
}

export default test;
