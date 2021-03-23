import React from 'react'
import { CardGroup ,Card, Col, Row, Button } from 'react-bootstrap'
import Images from 'next/image'
import CardHome from '../Home/cardHome'
import Link from 'next/link'

export default function itemHome() {
    return (
        <div className="custom-container form-header">

            <Row>
            <Col xs={6} lg={3} className="mb-display-r">
                <CardHome />
            </Col>  
            <Col xs={6} lg={3} className="mb-display-l">
                <CardHome />
            </Col>  
            <Col xs={6} lg={3} className="mb-display-r">
                <CardHome />
            </Col>  
            <Col xs={6} lg={3} className="mb-display-l">
                <CardHome />
            </Col>    
            </Row>
           
      
            
                
           
            
          
        </div>
    )
}

