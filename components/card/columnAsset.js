import React, { useEffect, useState } from "react";
import { CardGroup, Card, Col, Row, Button } from "react-bootstrap";
import Images from "next/image";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

const ColumnAsset = ({ linkurl, imgsrc, title, desc, price }) => {
  const { t, lang } = useTranslation("common");
  return (
    <>
      <Card className="column-asset">
        <Images src={imgsrc} alt={linkurl} width={360} height={270} />
        <Card.Body>
          <Link href={linkurl}>
            <a target="_blank">
              <div className="title pt-3 pb-3">{title}</div>
            </a>
          </Link>
          <p className="desc">{desc}</p>
          {price && <b className="price"> ฿ {price}</b>}
        </Card.Body>
      </Card>
    </>
  );
};

export default ColumnAsset;
