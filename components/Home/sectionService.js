import React from 'react'
import { Col, Row } from 'react-bootstrap'
import useTranslation from 'next-translate/useTranslation'
import Images from 'next/image'
import CardService from '../Home/cardService'
import CardServicePartner from '../Home/cardServicePartner'



export default function sectionService() {
    const { t, lang } = useTranslation('common')
    return (

        <div className="bg-service mt-5">
            <div className="custom-container">
                <div className="mb-4">
                    <Col lg={12}>
                        <h1 style={{ fontWeight: 'bold', letterSpacing: '0.5px' }}>
                            {t('homeservice')}
                        </h1>
                    </Col>
                </div>
                <div className="section-service">
                    <Row>
                    <Col xs={6} sm={6} lg={4}>
                            <CardService/>
                            <CardService/>
                            <CardService/>
                            <CardService/>
                    </Col>
                    <Col xs={6} sm={6} lg={4}>
                                < CardService/>
                            <CardService/>
                            <CardService/>
                            <CardService/>
                    </Col>
                    <Col sm={12} lg={4}>
                        <CardServicePartner/>
                    </Col>
                    </Row>
                </div>

            </div>

        </div>




    )
}
