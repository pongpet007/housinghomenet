import React from "react";
import Link from "next/link";
import { Col, Row } from "react-bootstrap";
import Images from "next/image";
import useTranslation from "next-translate/useTranslation";

export default function footer() {
  const { t, lang } = useTranslation("common");
  return (
    <div className="footer bg-footer pt-5 pb-5 mt-5">
      <div className="container" style={{ textAlign: "center" }}>
        <Row>
          <Col lg={3}>
            <h5>{t("houseandlandrentbuy")}</h5>
            <ul>
              <li>
                <Link href={`/${lang}/asset?asset_type_id=1`}>
                  <a>{t("houseandland")}</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>{t("coworkingspace")}</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>{t("fortravel")}</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>{t("forrent")}</a>
                </Link>
              </li>
            </ul>
          </Col>
          <Col lg={3}>
            <h5>{t("servicehousing")}</h5>
            <ul>
              <li>
                <Link href={`/${lang}/service/register`}>
                  <a>{t("registerforservice")}</a>
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/service`}>
                  <a>{t("servicevip")}</a>
                </Link>
              </li>
            </ul>
          </Col>
          <Col lg={3}>
            <h5>{t("newproject")}</h5>
            <ul>
              <li>
                <Link href={`/${lang}/project/promotion`}>
                  <a>{t("promotionnewproject")}</a>
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/project/review`}>
                  <a>{t("reviewnewproject")}</a>
                </Link>
              </li>
            </ul>
          </Col>
          <Col lg={3}>
            <h5>{t("agentonline")}</h5>
            <ul>
              <li>
                <Link href={`/${lang}/aboutus/why`}>
                  <a>{t("whyweare")}</a>
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/aboutus/saleasset`}>
                  <a>{t("saleasset")}</a>
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/aboutus/package`}>
                  <a>{t("packagesale")}</a>
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/aboutus/step`}>
                  <a>{t("stepsale")}</a>
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/aboutus/qa`}>
                  <a>{t("qa")}</a>
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </div>
  );
}
