import React from 'react'
import { Col, Row } from 'react-bootstrap'
import useTranslation from 'next-translate/useTranslation'
import Images from 'next/image'
import Link from 'next/link'



function cardService() {
    const { t, lang } = useTranslation('common')
    

    return (
        <div className="mb-5">
            <Row>
                <Col lg={6} className="mb-3">
                <a href="#" target="_blank"> 
                        <Images
                        src="/assets/images/p-5.jpg"
                        alt="ItemHome"
                        layout="responsive"
                        width={231}
                        height={155} /></a>

                </Col>
                <Col lg={6}>
                    <h5 data-aos="fade-left" className="text-service"><Link href="#">บริการต่อเติม</Link></h5>
                    <p className="detail-service">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem</p>
                </Col>
            </Row>
        </div>
    )
}

export default cardService
