import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Images from 'next/image'

function cardServicePartner() {
    return (
        <>
            <div className="bg-pink mb-4">
                <h3>ช่างต่อเติม</h3>
                <h4 className="text-partner">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem
                orem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem
                orem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem
            </h4>
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
                        <h3>ส.การช่างต่อเติม</h3>
                        <h4>โทร.02-132-2458</h4>
                    </Col>
                </Row>
            </div>

            <div className="bg-blue mb-4">
                <h3>บริการระบบรักษาความปลอดภัย</h3>
                <h4 className="text-partner">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euis
            </h4>
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
                        <h3>ปลอยภัยซีเคียวริตี้</h3>
                        <h4>โทร.02-132-2458</h4>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default cardServicePartner
