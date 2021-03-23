import React from 'react'
import { Card, Col, Row, Button } from 'react-bootstrap'
import Images from 'next/image'
import CardHome from '../Home/cardHome'
import Link from 'next/link'

export default function itemHome() {
    return (
        <div className="custom-container form-header">
            <Row>
                <Col>
                    <Card className="item-home-2">
                        <div className="icon-home-2">
                            <div>
                                <Images
                                    src="/assets/images/item-home.png"
                                    alt="ItemHome"
                                    layout="responsive"
                                    width={360}
                                    height={270} />
                            </div>
                            <ul className="list-icon">
                                <li>
                                    <p className="pink icon-1">แนะนำ</p>
                                </li>
                                <li>
                                    <p className="green icon-1">ขาย</p>
                                </li>
                                <li>
                                    <p className="bluesky icon-1">บ้านมือ 2</p>
                                </li>
                            </ul>
                            <div className="icon-heart">
                                <Images
                                    src="/assets/images/heart-white-07.svg"
                                    alt="ItemHome"
                                    width={35}
                                    height={35} />
                            </div>
                            <Card.Body>
                                <Link href="#"><a target="_blank"><h2>ขายทาวน์โฮม อินดี้ บางนา</h2></a></Link>
                                <h4> ถนนบางนา-ตราด, บางแก้ว, บางพลี,สมุทรปราการ</h4>
                                <h2>฿ 2,400,000</h2>
                                <ul className="list-icon-bottom">
                                    <li>
                                        <Images
                                            src="/assets/images/icon-05.svg"
                                            alt="ItemHome"
                                            width={20}
                                            height={20} />
                                        <h5>3</h5><h5 className="text-item">ห้องนอน</h5>
                                    </li>
                                    <li>
                                        <Images
                                            src="/assets/images/icon-06.svg"
                                            alt="ItemHome"
                                            width={20}
                                            height={20} />
                                        <h5>3</h5><h5 className="text-item">ห้องนอน</h5>
                                    </li>
                                    <li>
                                        <Images
                                            src="/assets/images/icon-07.svg"
                                            alt="ItemHome"
                                            width={20}
                                            height={20} />
                                        <h5>3</h5><h5 className="text-item">ห้องนอน</h5>
                                    </li>
                                </ul>
                            </Card.Body>
                        </div>
                    </Card>
                </Col>
                <Col>
                    <Card className="item-home-2">
                        <Card.Img variant="top" src="/assets/images/item-home.png" alt="ItemHome" />
                        <Card.Body>
                            <Link href="#"><a target="_blank"><h2>ขายทาวน์โฮม อินดี้ บางนา</h2></a></Link>
                            <h4> ถนนบางนา-ตราด, บางแก้ว, บางพลี,สมุทรปราการ</h4>
                            <h2>฿ 2,400,000</h2>

                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="item-home-2">
                        <Card.Img variant="top" src="/assets/images/item-home.png" alt="ItemHome" />
                        <Card.Body>
                            <Link href="#"><a target="_blank"><h2>ขายทาวน์โฮม อินดี้ บางนา</h2></a></Link>
                            <h4> ถนนบางนา-ตราด, บางแก้ว, บางพลี,สมุทรปราการ</h4>
                            <h2>฿ 2,400,000</h2>

                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="item-home-2">
                        <Card.Img variant="top" src="/assets/images/item-home.png" alt="ItemHome" />
                        <Card.Body>
                            <Link href="#"><a target="_blank"><h2>ขายทาวน์โฮม อินดี้ บางนา</h2></a></Link>
                            <h4> ถนนบางนา-ตราด, บางแก้ว, บางพลี,สมุทรปราการ</h4>
                            <h2>฿ 2,400,000</h2>

                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </div>
    )
}

