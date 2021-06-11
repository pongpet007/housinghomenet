import React, { useEffect, useState } from "react";
import { CardGroup, Card, Col, Row, Button } from "react-bootstrap";
import Images from "next/image";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

const CardHome = ({ asset_id, url, name, address, price }) => {
  const { t, lang } = useTranslation("common");
  return (
    <>
      <Card className="item-home-2">
        <Images src={url} alt="ItemHome" width={360} height={270} />
        <Card.Body>
          <Link href={`/${lang}/asset/${asset_id}`}>
            <a target="_blank">
              <div className="title-home">{name}</div>
            </a>
          </Link>
          <p className="home-address">{address}</p>
          <b style={{ color: "#084C61", fontSize: 15 }}>{price}</b>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardHome;
