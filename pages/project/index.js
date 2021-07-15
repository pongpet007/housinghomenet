import { Container, Row, Col } from "react-bootstrap";
import Head_meta from "../../components/Head_meta";
import YellowBreadcrumb from "../../components/shared/YellowBreadcrumb";
import useTranslation from "next-translate/useTranslation";
import BaseLayout from "../../components/layout/BaseLayout";
import Link from "next/link";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { fetchAsset } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

const Main = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { t, lang } = useTranslation("common");

  const assetList = useSelector((state) => state.asset.assetList);

  useEffect(() => {
    dispatch(fetchAsset({ limit: 1, page: 1 }));
  }, []);

  return (
    <BaseLayout>
      <Head_meta />

      <YellowBreadcrumb
        data={[
          { name: t("home"), url: `/${lang}` },
          { name: "Main", url: "", active: true },
        ]}
      />

      <div className="container">
        <div className="row">
          <div className="col-lg-6">xxx</div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-6">xx</div>
              <div className="col-lg-6">xx</div>
              <div className="col-lg-6">xx</div>
              <div className="col-lg-6">xx</div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="sugguestion">
            <h4>แนะนำสำหรับคุณ</h4>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Main;
