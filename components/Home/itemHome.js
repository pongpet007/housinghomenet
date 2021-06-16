import React, { useEffect, useState } from "react";
import { CardGroup, Card, Col, Row, Button } from "react-bootstrap";
import Images from "next/image";
import Link from "next/link";
import useSWR from "swr";
import { getAssetList } from "../../lib/api";
import useTranslation from "next-translate/useTranslation";

export default function itemHome({ asset_type_id }) {
  const params = {
    asset_type_id,
    limit: 4,
  };
  const data = getAssetList(params);

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

  return (
    <div className=" form-header">
      <Row>
        {data &&
          data.assets.map((asset) => {
            let pic = asset.pictures[0]
              ? process.env.NEXT_PUBLIC_API_PREFIX +
                "images/gallery/" +
                asset.pictures[0].filename
              : `/assets/images/p-1.jpg`;
            // console.log(pic)
            return (
              <Col xs={6} lg={3} key={asset.asset_id} className="mb-display-r">
                <CardHome
                  asset_id={asset.asset_id}
                  url={pic}
                  name={asset.title_th}
                  address={asset.place_th}
                  price={asset.price}
                />
              </Col>
            );
          })}
      </Row>
    </div>
  );
}
