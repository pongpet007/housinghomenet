import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Images from 'next/image'

function cardServicePartner() {
    return (
        <>
            <div className="bg-pink mb-4">
                <h4>ช่างต่อเติม</h4>
                <p className="text-partner">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem
                orem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem
                orem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem
            </p>
                <Row className="mt-3">
                    <Col xs={3} lg={3}>
                        <Images
                            src="/assets/images/logo-partner-04.svg"
                            alt="ItemHome"
                            layout="responsive"
                            width={86}
                            height={86} />

                    </Col>
                    <Col xs={9} lg={9}>
                        <h4>ส.การช่างต่อเติม</h4>
                        <h5>โทร.02-132-2458</h5>
                    </Col>
                </Row>
            </div>

            <div className="bg-blue mb-4">
                <h4>บริการระบบรักษาความปลอดภัย</h4>
                <p className="text-partner">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euis
            </p>
                <Row className="mt-3">
                    <Col xs={3} lg={3}>
                        <Images
                            src="/assets/images/logo-partner-blue-04.svg"
                            alt="ItemHome"
                            layout="responsive"
                            width={86}
                            height={86} />

                    </Col>
                    <Col xs={9} lg={9}>
                        <h4>ปลอยภัยซีเคียวริตี้</h4>
                        <h5>โทร.02-132-2458</h5>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default cardServicePartner
