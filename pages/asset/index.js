import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import CardHome from "../../components/Home/cardHome"
import { Row, Col } from 'react-bootstrap'

const index = ({ data }) => {
    // console.log(data)
    const { t, lang } = useTranslation('common')
    return (
        <>
            <div className="custom-container form-header">
                <Row>
                    {data && data.assets.map(
                        (asset) => (
                            <Col xs={6} lg={3} className="mb-display-r">
                                <CardHome url="/assets/images/p-1.jpg" name="ขายทาวน์โฮม อินดี้ บางนา" address="ถนนบางนา-ตราด, บางแก้ว, บางพลี,สมุทรปราการ" price="฿ 2,400,000" />
                            </Col>
                        )
                    )}
                </Row>

            </div>
        </>
    )
}

const checkundefined = (t) => (t === undefined) ? 0 : t

export async function getServerSideProps({ query }) {
    let { asset_type_id, sale_type_id, is_new, keyword } = query
    asset_type_id = checkundefined(asset_type_id)
    sale_type_id = checkundefined(sale_type_id)
    is_new = checkundefined(is_new)
    keyword = checkundefined(keyword)

    let params = {
        asset_type_id,
        sale_type_id,
        keyword,
        is_new,
        limit: 20,
        page: 1
    }
    
    let queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
    const res = await fetch(process.env.API_PREFIX + `asset/getlistbytype?` + queryString)
    let data = await res.json()

    return { props: { data } }
}


export default index
