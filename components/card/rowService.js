import React, { useEffect, useState } from "react";
import { CardGroup, Card, Col, Row, Button } from "react-bootstrap";
import Images from "next/image";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

const RowService = ({
  linkurl,
  imgsrc,
  title,
  desc,
  price,
  room,
  bath,
  area,
  creator,
}) => {
  const { t, lang } = useTranslation("common");
  return (
    <div className="row-asset">
      <div className="row">
        <div className="col" style={{ marginBottom: 20 }}>
          <div
            style={{ height: 200, overflow: "hidden", position: "relative" }}
          >
            <div style={{ position: "absolute", bottom: 0 }}>
              <img src={imgsrc} style={{ width: "100%" }} />
            </div>
          </div>
        </div>
        <div className="col">
          <div>
            <h4 className="title">{title}</h4>
            <div className="desc">{desc}</div>
            <div className="price"> ฿ {price}</div>

            <div className="row">
              {room && (
                <div className="col">
                  <img src="/../images/icon-room.png" /> 2 ห้องนอน
                </div>
              )}
              {bath && (
                <div className="col">
                  <img src="/../images/icon-bath.png" /> 2 ห้องน้ำ
                </div>
              )}

              {area && (
                <div className="col">
                  <img src="/../images/icon-area.png" /> 56 ตรว.
                </div>
              )}
            </div>
            {creator && <div>ผู้ลงประกาศ : {creator}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RowService;
