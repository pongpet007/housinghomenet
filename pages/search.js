import React from "react";
import useTranslation from "next-translate/useTranslation";
import Head_meta from "../components/Head_meta";

import { useRouter } from "next/router";
import YellowBreadcrumb from "../components/shared/YellowBreadcrumb";
import BaseLayout from "../components/layout/BaseLayout";
import BarSearch from "../components/BarSearch";
import Link from "next/link";

const search = () => {
  const router = useRouter();
  const { t, lang } = useTranslation("common");

  return (
    <BaseLayout>
      <Head_meta />
      <BarSearch />
      <YellowBreadcrumb
        data={[
          { name: t("home"), url: `/${lang}` },
          { name: "ผลการค้นหา", url: "", active: true },
        ]}
      />
      <div className="container">
        <div className="row">
          <h1 style={{ color: "red", fontSize: 18 }}>
            <span style={{ color: "black" }}>9999</span> ผลการค้นหา "คำค้น"
            รายการ
          </h1>
          {
            <div className="col-lg-6 asset-item">
              <div className="wrap">
                <div className="row">
                  <div className="picture col">
                    <img
                      src="/../images/img-test.png"
                      style={{ maxWidth: "100%" }}
                    />
                  </div>
                  <div className=" col">
                    <h5>
                      <Link href="/">
                        <a>ขายทาวน์โฮม อินดี บางนา</a>
                      </Link>
                    </h5>

                    <div>ถนนบางนา-ตราด, บางแก้ว, บางพลี สมุทรปราการ</div>
                    <div>฿ 2,400,000</div>
                    <div></div>
                    <div>xxx</div>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </BaseLayout>
  );
};

export default search;
