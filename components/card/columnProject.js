import React, { useEffect, useState } from "react";
import { CardGroup, Card, Col, Row, Button } from "react-bootstrap";
import Images from "next/image";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

const ColumnProject = ({ linkurl, imgsrc, title, desc, color, typeName }) => {
  const { t, lang } = useTranslation("common");
  return (
    <>
      <Card className="column-project">
        <Images src={imgsrc} alt={linkurl} width={360} height={270} />
        <Card.Body>
          <div>
            <Link href={linkurl}>
              {color ? (
                <a
                  className="btn btn-danger"
                  style={{ backgroundColor: color, border: 0 }}
                >
                  {typeName ? typeName : ""}
                </a>
              ) : (
                <a className="btn btn-danger"> {typeName ? typeName : ""}</a>
              )}
            </Link>
          </div>
          <Link href={linkurl}>
            <a target="_blank">
              <div className="title pt-3 pb-3">{title}</div>
            </a>
          </Link>
          <p className="desc">{desc}</p>
        </Card.Body>
      </Card>
    </>
  );
};

export default ColumnProject;
