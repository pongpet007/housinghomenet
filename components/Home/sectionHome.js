import React from 'react'
import { useRouter } from "next/router"
import { Nav , Col , Tab } from 'react-bootstrap'
import ItemHome from '../Home/itemHome'

export default function sectionHome() {
    const router = useRouter()
    
    return (
        
        <Tab.Container id="bottom-tab-example" defaultActiveKey="link-1">
        <div className="custom-container form-header showhome-mb mt-4">
           
            <Col lg={6}>
            <h1 className><b>เจ้าของขายเอง</b></h1>
            <div className="boder-red-bottom"></div>
            <h3>แหล่งรวมโครงการดีดี คัดสรรแล้วเพื่อคุณ</h3>
            </Col>

            <Col lg={6}>    
            <Nav variant="pills">
                <Nav.Item>
                    <Nav.Link eventKey="link-1">บ้านและที่ดินให้เช่า</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">ที่ดินเจ้าของขายเอง</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3">ที่อยู่อาศัยเจ้าของขายเอง</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-4">ดูโครงการแนะนำทั้งหมด</Nav.Link>
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
               <h1>33333333333333</h1>
               </Tab.Pane>
               </Tab.Content>
           </Col>
        </div>
        
        </Tab.Container> 
       
    )
}
