import React from 'react'
import { useRouter } from "next/router"
import { Nav, Col, Tab } from 'react-bootstrap'
import Link from 'next/link'
import ItemHome from '../Home/itemHome'
import useTranslation from 'next-translate/useTranslation'

function sectionHome() {
   
    const router = useRouter()
    const { t, lang } = useTranslation('common')

    return (

        <Tab.Container id="bottom-tab-example" defaultActiveKey="link-1">
            <div className="custom-container form-header showhome-mb mt-4">

                <Col lg={6}>
                    <h4><b>{t('sellbyowner')}</b></h4>
                    <div className="boder-red-bottom"></div>
                    <h5>{t('goodproject')}</h5>
                </Col>

                <Col lg={6}>
                    <Nav variant="pills">
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">{t('housesandland')}</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">{t('Own-land-for-sale')}</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-3">{t('Homes-sold-by-the-owner')}</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                onClick={() => {
                                    router.push('/products')
                                }}>{t('viewmore')}</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
            </div>

            <div className="custom-container">
                <Col>
                    <Tab.Content>
                        <Tab.Pane eventKey="link-1">
                            <ItemHome asset_type_id={1} />
                        </Tab.Pane>
                        <Tab.Pane eventKey="link-2">
                            <ItemHome asset_type_id={2}/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="link-3">
                            <ItemHome asset_type_id={3}/>
                        </Tab.Pane>

                    </Tab.Content>
                </Col>
            </div>

        </Tab.Container>

    )
}

export default sectionHome