import React from 'react'
import { useRouter } from "next/router"
import { Nav , Col , Tab } from 'react-bootstrap'
import Link from 'next/link'
import ItemHome from '../Home/itemHome'
import useTranslation from 'next-translate/useTranslation'

export default function sectionHome() {
    const router = useRouter()
    const { t, lang } = useTranslation('common')
    
    return (
        
        <Tab.Container id="bottom-tab-example" defaultActiveKey="link-1">
        <div className="custom-container form-header showhome-mb mt-4">
           
            <Col lg={6}>
            <h1><b>{t('sellbyowner')}</b></h1>
            <div className="boder-red-bottom"></div>
            <h3>{t('goodproject')}</h3>
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
                    <Nav.Link><Link href="produts">{t('viewmore')}</Link></Nav.Link>
                </Nav.Item>
            </Nav>
            </Col>
        </div>

        <div className="custom-container">
            <Col>
               <Tab.Content>
               <Tab.Pane eventKey="link-1">
                 <ItemHome />
               </Tab.Pane>
               <Tab.Pane eventKey="link-2">
                 <ItemHome />
               </Tab.Pane>
               <Tab.Pane eventKey="link-3">
                 <ItemHome />
               </Tab.Pane>
               
               </Tab.Content>
           </Col>
        </div>
        
        </Tab.Container> 
       
    )
}
