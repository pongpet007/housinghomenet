import React from 'react'
import { Col, Row } from 'react-bootstrap'
import useTranslation from 'next-translate/useTranslation'
import Images from 'next/image'
import Link from 'next/link'



function cardService({ pictureurl, title, desc }) {
    const { t, lang } = useTranslation('common')


    return (
        <div className="mb-5">
            <Row>
                <Col lg={6} className="mb-3">
                    <Link href="#">
                    <a target="_blank">
                        <Images
                            src={pictureurl?pictureurl:"/assets/images/p-5.jpg"}
                            alt="ItemHome"
                            layout="responsive"
                            width={231}
                            height={155} />
                            </a>
                            </Link>

                </Col>
                <Col lg={6}>
                    <Link href="#"><a><h5 data-aos="fade-left" className="text-service">{title?title:'หัวเรื่อง'}</h5></a></Link>
                    <p className="detail-service">{desc?desc:"รายละเอียด"}</p>
                </Col>
            </Row>
        </div>
    )
}

export default cardService
