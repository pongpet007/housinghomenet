import React from 'react'
import { Col, Row } from 'react-bootstrap'
import useTranslation from 'next-translate/useTranslation'
import Images from 'next/image'

function cardService() {
    const { t, lang } = useTranslation('common')
    return (
        <div className="mb-5">
            <Row>
                <Col lg={6}>
                    <Images
                        src="/assets/images/p-5.jpg"
                        alt="ItemHome"
                        layout="responsive"
                        width={231}
                        height={155} />

                </Col>
                <Col lg={6}>
                    <h1>บริการต่อเติม</h1>
                    <h4>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem</h4>
                </Col>
            </Row>
        </div>
    )
}

export default cardService
