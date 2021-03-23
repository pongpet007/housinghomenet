import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'next/image'
import Col from 'react-bootstrap/Col'

export default function sectionBanner() {
    return (
        <div>
             <Carousel fade className="section-banner">
                <Carousel.Item interval={3000}>
                    <Image
                    className="d-block w-100"
                    src="/assets/images/banner-1.jpg"
                    alt="housinghome"
                    layout="responsive"
                    width={1920}
                    height={500}
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <Image
                    className="d-block w-100"
                    src="/assets/images/banner-2.jpg"
                    alt="housinghome"
                    layout="responsive"
                    width={1920}
                    height={500}
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

