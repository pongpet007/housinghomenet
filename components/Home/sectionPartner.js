import React from 'react'
import { Col, Row } from 'react-bootstrap'
import useTranslation from 'next-translate/useTranslation'
import Images from 'next/image'


function sectionPartner() {
    const { t, lang } = useTranslation('common')
    return (
        <div className ="mb-5">
            <div className="custom-container">
                <Col lg={6}>
                    <h1><b>{t('Thaiproperty')}</b></h1>
                    <div className="boder-red-bottom"></div>
                    <h3>{t('goodproject')}</h3>
                </Col>
            </div>
            <div className="custom-container">
                <Row className ="pr-3 pl-3">
                    <Col xs={3} lg={1}className="mb-3">
                    <a href="#" target="_blank"> <Images
                            src="/assets/images/partner.jpg"
                            alt="partner"
                            width={115}
                            layout="responsive"
                            height={80} /> </a>
                    </Col>
                    <Col xs={3} lg={1}className="mb-3">
                    <a href="#" target="_blank"> <Images
                            src="/assets/images/partner.jpg"
                            alt="partner"
                            width={115}
                            layout="responsive"
                            height={80} /> </a>
                    </Col>
                    <Col xs={3} lg={1}className="mb-3">
                    <a href="#" target="_blank"> <Images
                            src="/assets/images/partner.jpg"
                            alt="partner"
                            width={115}
                            layout="responsive"
                            height={80} /> </a>
                    </Col>
                    <Col xs={3} lg={1}className="mb-3">
                    <a href="#" target="_blank"> <Images
                            src="/assets/images/partner.jpg"
                            alt="partner"
                            width={115}
                            layout="responsive"
                            height={80} /> </a>
                    </Col>
                    <Col xs={3} lg={1}className="mb-3">
                    <a href="#" target="_blank"> <Images
                            src="/assets/images/partner.jpg"
                            alt="partner"
                            width={115}
                            layout="responsive"
                            height={80} /> </a>
                    </Col>
                    <Col xs={3} lg={1}className="mb-3">
                    <a href="#" target="_blank"><Images
                            src="/assets/images/partner.jpg"
                            alt="partner"
                            width={115}
                            layout="responsive"
                            height={80} /> </a>
                    </Col>
                    <Col xs={3} lg={1}className="mb-3">
                    <a href="#" target="_blank"> <Images
                            src="/assets/images/partner.jpg"
                            alt="partner"
                            width={115}
                            layout="responsive"
                            height={80} /> </a>
                    </Col>
                    <Col xs={3} lg={1}className="mb-3">
                    <a href="#" target="_blank"> <Images
                            src="/assets/images/partner.jpg"
                            alt="partner"
                            width={115}
                            layout="responsive"
                            height={80} /> </a>
                    </Col>
                    <Col xs={3} lg={1}className="mb-3">
                    <a href="#" target="_blank"> <Images
                            src="/assets/images/partner.jpg"
                            alt="partner"
                            width={115}
                            layout="responsive"
                            height={80} /> </a>
                    </Col>
                    <Col xs={3} lg={1}className="mb-3">
                    <a href="#" target="_blank"> <Images
                            src="/assets/images/partner.jpg"
                            alt="partner"
                            width={115}
                            layout="responsive"
                            height={80} /> </a>
                    </Col>
                    <Col xs={3} lg={1}className="mb-3">
                    <a href="#" target="_blank"> <Images
                            src="/assets/images/partner.jpg"
                            alt="partner"
                            width={115}
                            layout="responsive"
                            height={80} /> </a>
                    </Col>
                    <Col xs={3} lg={1}className="mb-3">
                    <a href="#" target="_blank"><Images
                            src="/assets/images/partner.jpg"
                            alt="partner"
                            width={115}
                            layout="responsive"
                            height={80} /> </a>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default sectionPartner
