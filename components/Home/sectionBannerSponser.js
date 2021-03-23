import React from 'react'
import Image from 'next/image'
import { Col, Row } from 'react-bootstrap';
export default function sectionBannerSponser() {
    return (
        <div className="custom-container">
            <Col lg={12} className="pt-4">
                <Image
                    src="/assets/images/banner-sponser-1.jpg"
                    alt="bannerSponser"
                    layout="responsive"
                    width={1560}
                    height={330}
                />
            </Col>
            <div className="pt-4 banner-flex">
                <Col>   
                    <Image
                        src="/assets/images/banner-sponser-2.jpg"
                        alt="bannerSponser"
                        layout="responsive"
                        width={750}
                        height={330}
                    />
                </Col>
                <Col>   
                    <Image
                        src="/assets/images/banner-sponser-3.jpg"
                        alt="bannerSponser"
                        layout="responsive"
                        width={750}
                        height={330}
                    />
                </Col>
            </div>
        </div>
    )
}
