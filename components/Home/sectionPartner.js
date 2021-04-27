import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import useTranslation from 'next-translate/useTranslation'
import Images from 'next/image'
import useSWR from 'swr'

function sectionPartner() {

        const fetcher = (...args) => fetch(...args).then(res => res.json())
        const { data, error } = useSWR('https://www.housinghome.net/api/Imageset/getList?banner_type_id=3&limit=12&page=1', fetcher)

        const { t, lang } = useTranslation('common')
        return (
                <div className="mb-5">
                        <div className="custom-container">
                                <Col lg={6} className="mb-3">
                                        <h4><b>{t('Thaiproperty')}</b></h4>
                                        <div className="boder-red-bottom"></div>
                                        <h5>{t('goodproject')}</h5>
                                </Col>
                        </div>
                        <div className="custom-container">
                                <Row className="pr-3 pl-3">
                                        {data && data.banners.map(
                                                (banner) => {

                                                        let pic = process.env.NEXT_PUBLIC_API_PREFIX + 'images/banner/' + banner.banner_id + `.jpg`
                                                        // console.log(pic)
                                                        return (

                                                                <Col xs={3} lg={1} className="mb-3">
                                                                        <a href={banner.link} target="_blank">
                                                                                <Images
                                                                                        src={pic}
                                                                                        alt={banner.link}
                                                                                        width={115}
                                                                                        layout="responsive"
                                                                                        height={80} />
                                                                        </a>
                                                                </Col>
                                                        )
                                                }
                                        )}

                                </Row>
                        </div>
                </div>
        )
}

export default sectionPartner
