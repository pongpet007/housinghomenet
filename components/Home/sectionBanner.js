import React from 'react'
import Carousel from 'react-bootstrap/Carousel'


export default function sectionBanner() {
    return (
        <div>
             <Carousel className="section-banner">
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src="/assets/images/banner-1.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

