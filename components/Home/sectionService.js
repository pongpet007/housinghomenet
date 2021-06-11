import React from "react";
import { Col, Row } from "react-bootstrap";
import useTranslation from "next-translate/useTranslation";
import Images from "next/image";
import CardService from "../Home/cardService";
import CardServicePartner from "../Home/cardServicePartner";
import { getServiceTypeList } from "../../lib/api";

export default function sectionService() {
  const { t, lang } = useTranslation("common");
  const params = {
    limit: 10,
    page: 1,
  };
  const data = getServiceTypeList(params);

  return (
    <div className="bg-service">
      <div className="container">
        <div className="mb-4">
          <Row>
            <Col lg={12}>
              <h4 style={{ fontWeight: "bold" }}>{t("homeservice")}</h4>
            </Col>
          </Row>
        </div>
        <div className="section-service">
          <Row>
            <Col xs={12} sm={12} lg={12}>
              <Row>
                <Col xs={12} sm={12} lg={4}>
                  <CardService key="{111}" />
                </Col>
                <Col xs={12} sm={12} lg={4}>
                  <CardService key="{2222}" />
                </Col>
                <Col xs={12} sm={12} lg={4}>
                  <CardService key="{3333}" />
                </Col>
                <Col xs={12} sm={12} lg={4}>
                  <CardService key="{4444}" />
                </Col>
                <Col xs={12} sm={12} lg={4}>
                  <CardService key="{4444}" />
                </Col>
                <Col xs={12} sm={12} lg={4}>
                  <CardService key="{4444}" />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
