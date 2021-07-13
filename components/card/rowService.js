import React, { useEffect, useState } from "react";
import { CardGroup, Card, Col, Row, Button } from "react-bootstrap";
import Images from "next/image";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

const RowService = ({ linkurl, imgsrc, title, desc }) => {
  const { t, lang } = useTranslation("common");
  return (
    <div className="row-asset">
      <div className="row">
        <div className="col" style={{ marginBottom: 20 }}>
          <div
            style={{ height: 200, overflow: "hidden", position: "relative" }}
          >
            <div style={{ position: "absolute", bottom: 0 }}>
              <Link href={linkurl}>
                <a>
                  <img src={imgsrc} style={{ width: "100%" }} />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div>
            <h4 className="title">{title}</h4>
            <div className="desc">{desc}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RowService;
