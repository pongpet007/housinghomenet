import React from 'react'
import Image from 'next/image'
import { Col, Row } from 'react-bootstrap';
export default function sectionBannerSponseBottom() {
    return (
        <div className="custom-container">
            <Col lg={12} className="pt-4">
                <Image
                    src="/assets/images/banner-sponser-4.jpg"
                    alt="bannerSponser"
                    layout="responsive"
                    width={1560}
                    height={350}
                />
            </Col>

            <Col lg={12} className="pt-4">
                <Image
                    src="/assets/images/banner-sponser-5.jpg"
                    alt="bannerSponser"
                    layout="responsive"
                    width={1560}
                    height={350}
                />
            </Col>
            
        </div>
    )
}
