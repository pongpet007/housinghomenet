import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Col, Nav, Row, NavDropdown, Form } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

// import Button from 'react-bootstrap/Button'
// import Accordion from 'react-bootstrap/Accordion'
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
// const Menulink = (props) => {
//   const { url, text } = props;
//   return (
//     <a href={url} className="border-menu nav-link">
//       {text}
//     </a>
//   );
// };

const Headers = () => {
  const router = useRouter();
  const { t, lang } = useTranslation("common");

  return (
    <div>
      <div className="bg-white-2 fixed-top">
        <div className="container ">
          <Row>
            <Col xxl={12}>
              <Navbar expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Item>
                      <Link href={`/${lang}`}>
                        <a>
                          <Image
                            src="/assets/images/logo-04.svg"
                            alt="logo"
                            width={118}
                            height={44}
                          />
                        </a>
                      </Link>
                    </Nav.Item>
                  </Nav>
                  <Nav className="Navbar-text mr-auto">
                    <NavDropdown title="บ้านที่ดินเช่าซื้อ" id="nav-menu1">
                      <div className="dropdown-item">
                        <Link href={`/${lang}/asset?asset_type_id=1`}>
                          <a>ขายบ้านทีดิน</a>
                        </Link>
                      </div>

                      <NavDropdown.Item eventKey="4.2">
                        พื้นที่ทำงานร่วมกัน
                      </NavDropdown.Item>
                      <NavDropdown.Item eventKey="4.3">
                        บ้านพักท่องเที่ยว
                      </NavDropdown.Item>
                      <NavDropdown.Item eventKey="4.3">
                        ปะรกาศให้เช่า
                      </NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="งานบริการเกี่ยวกับบ้าน" id="nav-menu2">
                      <div className="dropdown-item">
                        <Link href={`/${lang}/service/register`}>
                          <a>สมัครเป็นผู้ให้บริการ</a>
                        </Link>
                      </div>
                      <div className="dropdown-item">
                        <Link href={`/${lang}/service/`}>
                          <a>บริการเพื่อความเป็น VIP</a>
                        </Link>
                      </div>
                    </NavDropdown>

                    <NavDropdown title="โครงการใหม่" id="nav-menu3">
                      <div className="dropdown-item">
                        <Link href={`/${lang}/project/promotion`}>
                          <a>โปรโมชั่นโครงการใหม่</a>
                        </Link>
                      </div>
                      <div className="dropdown-item">
                        <Link href={`/${lang}/project/review`}>
                          <a>รีวิวโครงการใหม่</a>
                        </Link>
                      </div>
                    </NavDropdown>

                    <NavDropdown title="นายหน้าออนไลน์" id="nav-menu4">
                      <div className="dropdown-item">
                        <Link href={`/${lang}/aboutus/why`}>
                          <a>ทำไมต้องเรา</a>
                        </Link>
                      </div>
                      <div className="dropdown-item">
                        <Link href={`/${lang}/aboutus/saleasset`}>
                          <a>บริการขายสินทรัพย์</a>
                        </Link>
                      </div>
                      <div className="dropdown-item">
                        <Link href={`/${lang}/aboutus/package`}>
                          <a>แพคเกจขายสินทรัพย์</a>
                        </Link>
                      </div>
                      <div className="dropdown-item">
                        <Link href={`/${lang}/aboutus/step`}>
                          <a>ขั้นตอนการให้บริการ</a>
                        </Link>
                      </div>
                      <div className="dropdown-item">
                        <Link href={`/${lang}/aboutus/qa`}>
                          <a>ถาม-ตอบ</a>
                        </Link>
                      </div>
                    </NavDropdown>
                  </Nav>

                  <Nav className="mr-auto">
                    <NavDropdown title={t("changelanguage")} id="nav-lang">
                      <Link href={`/th${router.pathname}`} locale="th">
                        <a className="dropdown-item" key={lang} eventKey="4.1">
                          <Image
                            src="/assets/images/th.svg"
                            alt="thai"
                            width={40}
                            height={17}
                          />
                          {t("tha")}
                        </a>
                      </Link>

                      <Link href={`/en${router.pathname}`} locale="en">
                        <a className="dropdown-item" key={lang} eventKey="4.2">
                          <Image
                            src="/assets/images/en.svg"
                            alt={t("tha")}
                            width={40}
                            height={17}
                          />
                          {t("eng")}
                        </a>
                      </Link>
                    </NavDropdown>
                    <Nav.Item>
                      <Link href={`/${lang}/member`}>
                        <a className="nav-link">เข้าสู่ระบบ/ลงทะเบียน</a>
                      </Link>
                    </Nav.Item>
                  </Nav>
                  <Nav>
                    <Nav.Item>
                      <button className="post">ลงประกาศ</button>
                    </Nav.Item>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Headers;
