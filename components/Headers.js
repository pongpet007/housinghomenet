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
                      <Link href={`/${lang}/index2`}>
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
                    <NavDropdown
                      title={t("houseandlandrentbuy")}
                      id="nav-menu1"
                    >
                      <div className="dropdown-item">
                        <Link href={`/${lang}/asset?asset_type_id=1`}>
                          <a>{t("houseandland")}</a>
                        </Link>
                      </div>

                      <NavDropdown.Item eventKey="4.2">
                        {t("coworkingspace")}
                      </NavDropdown.Item>
                      <NavDropdown.Item eventKey="4.3">
                        {t("fortravel")}
                      </NavDropdown.Item>
                      <NavDropdown.Item eventKey="4.3">
                        {t("forrent")}
                      </NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title={t("servicehousing")} id="nav-menu2">
                      <div className="dropdown-item">
                        <Link href={`/${lang}/service/register`}>
                          <a>{t("registerforservice")}</a>
                        </Link>
                      </div>
                      <div className="dropdown-item">
                        <Link href={`/${lang}/service/`}>
                          <a>{t("servicevip")}</a>
                        </Link>
                      </div>
                    </NavDropdown>

                    <NavDropdown title={t("newproject")} id="nav-menu3">
                      <div className="dropdown-item">
                        <Link href={`/${lang}/project/promotion`}>
                          <a>{t("promotionnewproject")}</a>
                        </Link>
                      </div>
                      <div className="dropdown-item">
                        <Link href={`/${lang}/project/review`}>
                          <a>{t("reviewnewproject")}</a>
                        </Link>
                      </div>
                    </NavDropdown>

                    <NavDropdown title={t("agentonline")} id="nav-menu4">
                      <div className="dropdown-item">
                        <Link href={`/${lang}/aboutus/why`}>
                          <a>{t("whyweare")}</a>
                        </Link>
                      </div>
                      <div className="dropdown-item">
                        <Link href={`/${lang}/aboutus/saleasset`}>
                          <a>{t("saleasset")}</a>
                        </Link>
                      </div>
                      <div className="dropdown-item">
                        <Link href={`/${lang}/aboutus/package`}>
                          <a>{t("packagesale")}</a>
                        </Link>
                      </div>
                      <div className="dropdown-item">
                        <Link href={`/${lang}/aboutus/step`}>
                          <a>{t("stepsale")}</a>
                        </Link>
                      </div>
                      <div className="dropdown-item">
                        <Link href={`/${lang}/aboutus/qa`}>
                          <a>{t("qa")}</a>
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
                        <a className="nav-link">
                          {t("login")}/{t("register")}
                        </a>
                      </Link>
                    </Nav.Item>
                  </Nav>
                  <Nav>
                    <Nav.Item>
                      <button className="post">{t("freepost")}</button>
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
