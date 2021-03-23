import React from 'react'
import { CardGroup, Card, Col, Row, Button } from 'react-bootstrap'
import Images from 'next/image'
import CardHome from '../Home/cardHome'
import Link from 'next/link'

export default function itemHome() {
    return (
        <div className="custom-container form-header">

            <Row>
                <Col xs={6} lg={3} className="mb-display-r">
                    <CardHome url="/assets/images/p-1.jpg" name="ขายทาวน์โฮม อินดี้ บางนา" address="ถนนบางนา-ตราด, บางแก้ว, บางพลี,สมุทรปราการ" price="฿ 2,400,000" />
                </Col>
                <Col xs={6} lg={3} className="mb-display-r">
                    <CardHome url="/assets/images/p-2.jpg" name="ขายทาวน์โฮม อินดี้ บางนา" address="ถนนบางนา-ตราด, บางแก้ว, บางพลี,สมุทรปราการ" price="฿ 2,400,000" />
                </Col>
                <Col xs={6} lg={3} className="mb-display-r">
                    <CardHome url="/assets/images/p-3.jpg" name="ขายทาวน์โฮม อินดี้ บางนา" address="ถนนบางนา-ตราด, บางแก้ว, บางพลี,สมุทรปราการ" price="฿ 2,400,000" />
                </Col>
                <Col xs={6} lg={3} className="mb-display-r">
                    <CardHome url="/assets/images/p-4.jpg" name="ขายทาวน์โฮม อินดี้ บางนา" address="ถนนบางนา-ตราด, บางแก้ว, บางพลี,สมุทรปราการ" price="฿ 2,400,000" />
                </Col>
            </Row>
        </div>
    )
}

