import React from "react";
import Link from "next/link";
import { Col, Row } from "react-bootstrap";
import Images from "next/image";
import useTranslation from "next-translate/useTranslation";

export default function footer() {
  const { t, lang } = useTranslation("common");
  return (
    <div className="footer bg-footer pt-5 pb-5">
      <div className="container" style={{ textAlign: "center" }}>
        <Row>
          <Col lg={3}>
            <h5>บ้านที่ดินเช่าซื้อ</h5>
            <ul>
              <li>
                <Link href={`/${lang}/asset?asset_type_id=1`}>
                  <a>ขายบ้านทีดิน</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>พื้นที่ทำงานร่วมกัน</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>บ้านพักท่องเที่ยว</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>ประกาศให้เช่า</a>
                </Link>
              </li>
            </ul>
          </Col>
          <Col lg={3}>
            <h5>งานบริการเกี่ยวกับบ้าน</h5>
            <ul>
              <li>
                <Link href={`/${lang}/service/register`}>
                  <a>สมัครเป็นผู้ให้บริการ</a>
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/service`}>
                  <a>บริการเพื่อความเป็น VIP</a>
                </Link>
              </li>
            </ul>
          </Col>
          <Col lg={3}>
            <h5>โครงการใหม่</h5>
            <ul>
              <li>
                <Link href={`/${lang}/project/promotion`}>
                  <a>โปรโมชั่นโครงการใหม่</a>
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/project/review`}>
                  <a>รีวิวโครงการใหม่</a>
                </Link>
              </li>
            </ul>
          </Col>
          <Col lg={3}>
            <h5>นายหน้าออนไลน์</h5>
            <ul>
              <li>
                <Link href={`/${lang}/aboutus/why`}>
                  <a>ทำไมต้องเรา</a>
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/aboutus/saleasset`}>
                  <a>บริการขายสินทรัพย์</a>
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/aboutus/package`}>
                  <a>แพคเกจขายสินทรัพย์</a>
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/aboutus/step`}>
                  <a>ขั้นตอนการให้บริการ</a>
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/aboutus/qa`}>
                  <a> ถาม-ตอบ</a>
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </div>
  );
}
