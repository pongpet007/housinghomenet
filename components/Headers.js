import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import { Col, Nav, Row } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import Image from 'next/image'
import Link from 'next/link'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'
import useTranslation from 'next-translate/useTranslation'

const Headers = () => {
    const { t, lang } = useTranslation('common')

    return (
        <div>
            <div className="bg-white-2 fixed-top">
                <div className="custom-container ">
                    <Navbar expand="lg">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="Navbar-text mr-auto">
                                <Link href="#home"><Nav.Link className="border-menu"><h5>{t('home')}</h5></Nav.Link></Link>
                                <Nav.Link href="#home" className="border-menu"><h5 >{t('newproject')}</h5></Nav.Link>
                                <Nav.Link href="#home" className="border-menu"><h5>{t('house')}</h5></Nav.Link>
                                <Nav.Link href="#home" className="border-menu"><h5>{t('land')}</h5></Nav.Link>
                                <Nav.Link href="#home" className="border-menu"><h5>{t('service')}</h5></Nav.Link>
                                <Nav.Link href="#home" className="border-menu"><h5>{t('rent')}</h5></Nav.Link>
                            </Nav>
                            <Navbar.Brand className=" mr-auto showlogo" href="#home">

                                <Image
                                    src="/assets/images/logo-04.svg"
                                    alt="logo"
                                    width={118}
                                    height={44}
                                />
                            </Navbar.Brand>

                            <Nav className="font-26">
                                <NavDropdown title={t('changelanguage')} id="basic-nav-dropdown" className="mr-3 ml-3">
                                    <NavDropdown.Item >
                                        <Link  href="/" locale="th" key={lang}>
                                            <h5>
                                                <Image
                                                    src="/assets/images/th.svg"
                                                    alt="thai"
                                                    width={40}
                                                    height={17}
                                                />
                                                {t('tha')}
                                            </h5>
                                        </Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item >
                                        <Link  href="/" locale="en" key={lang}>
                                        <h5>
                                            <Image
                                                src="/assets/images/en.svg"
                                                alt={t('tha')}
                                                width={40}
                                                height={17}
                                            />
                                            {t('eng')}
                                        </h5>
                                        </Link>
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title={t('singin')} id="basic-nav-dropdown" className="mr-3 ml-3">
                                    <NavDropdown.Item href="#action/3.1"><h5>{t('myaccount')}</h5></NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3"><h5>{t('forgetpassword')}</h5></NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4"><h5>{t('register')}</h5></NavDropdown.Item>
                                </NavDropdown>

                                <Nav.Link href="#home" className="favorate count-style mr-2 ml-2">

                                    <Image
                                        src="/assets/images/heart-06.svg"
                                        alt="logo"
                                        width={20}
                                        height={20}
                                    />
                                    <h1>20</h1>
                                </Nav.Link>
                                <button className="post">
                                    {t('freepost')}</button>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>

            <div className="red pb-3 pt-3">
                <div className="custom-container form-header">
                    <Col xs lg="2">
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label className="font-label">{t('Need')}</Form.Label>
                            <Form.Control as="select" className="form-header">
                                <option>{t('select')}</option>
                                <option>{t('by')}</option>
                                <option>{t('sell')}</option>
                                <option>{t('rental')}</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label className="font-label">{t('property')}</Form.Label>
                            <Form.Control as="select" className="form-header">
                                <option>{t('select')}</option>
                                <option>{t('land')}</option>
                                <option>{t('condo')}</option>
                                <option>{t('townhome')}</option>
                                <option>{t('Detached-house')}</option>
                                <option>{t('Semi-detached-house')}</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group>
                            <Form.Label className="font-label">{t('search')}</Form.Label>
                            <Form.Control placeholder={t('Location-project-condo-district')}className="form-header" />
                        </Form.Group>
                    </Col>
                    <Col xs lg="1">
                        <button className="btn-search-subimit">{t('search')}</button>
                    </Col>

                </div>
                <div className="custom-container form-header">

                    <Col className="pb-2">

                        <Accordion defaultActiveKey="0">
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                <h5 className="font-search-more">{t('viewmore')}</h5>
                            </Accordion.Toggle>
                            <container>

                                <Accordion.Collapse eventKey="1">
                                    <Form.Group className="form-serach-more">
                                        <Col lg={2}>
                                            <Row className="pdr">
                                                <Form.Label className="font-label">{t('bed')}</Form.Label>
                                                <Form.Control as="select" className="form-header">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>{t('all')}</option>
                                                </Form.Control>
                                            </Row>
                                        </Col>
                                        <Col lg={2}>
                                            <Row className="pdr">
                                                <Form.Label className="font-label">{t('toilet')}</Form.Label>
                                                <Form.Control as="select" className="form-header">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>{t('all')}</option>
                                                </Form.Control>
                                            </Row>
                                        </Col>
                                        <Col>
                                            <Row className="pdr" >
                                                <Form.Label className="font-label">{t('Province')}</Form.Label>
                                                <Form.Control as="select" className="form-header">
                                                    <option>กรุงเทพมหานคร</option>
                                                    <option>กระบี่</option>
                                                    <option>ระยอง</option>
                                                    <option>ชลบุรี</option>
                                                    <option>สมุทรปราการ</option>
                                                </Form.Control>
                                            </Row>
                                        </Col>
                                        <Col>
                                            <Row className="pdr">
                                                <Form.Label className="font-label">{t('district')}</Form.Label>
                                                <Form.Control as="select" className="form-header">
                                                    <option>{t('select')}</option>
                                                    <option>อ่อนนุช</option>
                                                    <option>บางกะปิ</option>
                                                    <option>สะพานสูง</option>
                                                    <option>ลาดกระบัง</option>
                                                </Form.Control>
                                            </Row>
                                        </Col>

                                        <Col>
                                            <Row>
                                                <Form.Label className="font-label">{t('Sub-district')}</Form.Label>
                                                <Form.Control as="select" className="form-header">
                                                    <option>{t('select')}</option>
                                                    <option>อ่อนนุช</option>
                                                    <option>บางกะปิ</option>
                                                    <option>สะพานสูง</option>
                                                    <option>ลาดกระบัง</option>
                                                </Form.Control>
                                            </Row>
                                        </Col>
                                    </Form.Group>

                                </Accordion.Collapse>

                                <Accordion.Collapse eventKey="1">
                                    <Form.Group className="form-serach-more" controlId="formBasicRange">
                                        <Col>
                                            <Row className="pdr">
                                                <Form.Label className="font-label">{t('furniture')}</Form.Label>
                                                <Form.Control as="select" className="form-header">
                                                    <option>{t('yes')}</option>
                                                    <option>{t('no')}</option>

                                                </Form.Control>
                                            </Row>
                                        </Col>
                                        <Col>
                                            <Row className="pdr">
                                                <Form.Label className="font-label">{t('post-date')}</Form.Label>
                                                <Form.Control as="select" className="form-header">
                                                    <option>{t('today')}</option>
                                                    <option>{t('last-week')}</option>
                                                    <option>{t('last-month')}</option>
                                                    <option>{t('last-year')}</option>
                                                    <option>{t('all')}</option>
                                                </Form.Control>
                                            </Row>
                                        </Col>

                                        <Col>
                                            <Row>
                                                <Form.Label className="font-label">{t('price')}</Form.Label>
                                                <Form.Control as="select" className="form-header">
                                                    <option>1,000,000-2,000,000</option>
                                                    <option>3,000,000-6,000,000</option>
                                                    <option>10,000,000-20,000,000</option>
                                                    <option>{t('all')}</option>
                                                </Form.Control>
                                            </Row>
                                        </Col>


                                    </Form.Group>

                                </Accordion.Collapse>

                            </container>


                        </Accordion>
                    </Col>

                </div>
            </div>
        </div>
    )
}

export default Headers
