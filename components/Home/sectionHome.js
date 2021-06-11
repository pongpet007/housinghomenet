import React from "react";
import { useRouter } from "next/router";
import { Nav, Col, Tab, Row } from "react-bootstrap";
import Link from "next/link";
import ItemHome from "../Home/itemHome";
import useTranslation from "next-translate/useTranslation";

function sectionHome() {
  const router = useRouter();
  const { t, lang } = useTranslation("common");

  return (
    <>
      <div className="container form-header showhome-mb">
        <Row>
          <Col lg={12}>
            <div className="sugguestion">
              <h4>แนะนำสำหรับคุณ</h4>
            </div>
          </Col>
          <Col lg={12}>
            <ItemHome asset_type_id={1} />
          </Col>
        </Row>

        <Row>
          <Col lg={12}>
            <div className="sugguestion">
              <h4>โครงการคัดสรรแล้วสำหรับคุณ</h4>
            </div>
          </Col>
          <Col lg={12}>
            <ItemHome asset_type_id={1} />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default sectionHome;
