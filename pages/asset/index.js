import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import CardHome from "../../components/Home/cardHome"
import { Row, Col } from 'react-bootstrap'
import Head_meta from "../../components/Head_meta"
import {getAssetList} from '../../lib/api'
import {useRouter} from 'next/router'

const index = () => {
    const router = useRouter();
    const asset_type_id =  router.query.asset_type_id;
    // console.log(data)
    const { t, lang } = useTranslation('common')
    const params = {
        asset_type_id,
        limit:12,
        page:1
    }
    const data =  getAssetList(params);

    return (
        <>
            <Head_meta
                title='สินค้าอุตสาหกรรม ค้นหาสินค้าอุตสาหกรรมออนไลน์ เว็บไซต์รวมรายชื่อผู้ผลิต จำหน่าย ให้บริการ'
                keyword='เว็บไซต์รวมสินค้าอุตสาหกรรมออนไลน์ ค้นหารายชื่อผู้ประกอบการภาคอุตสาหกรรม ตลาดสินค้าอุตสาหกรรม โดยบริษัท แบรนด์เด็กซ์ ไดเร็กทอรี่ จำกัด ผู้ผลิตสื่ออุตสาหกรรมคุณภาพ'
                description="สินค้าอุตสาหกรรม,สินค้าอุตสาหกรรมออนไลน์,เว็บอุตสาหกรรม,ตลาดอุตสาหกรรม,ตลาดกลางอุตสาหกรรม, สื่อสินค้าอุตสาหกรรม,ตลาดกลางสินค้าอุตสาหกรรม,thailand industry,รายชื่อบริษัทอุตสาหกรรม,สินค้าอุตสาหกรรมคืออะไร,สินค้าอุตสาหกรรมมีกี่ประเภท,ตัวอย่างสินค้าอุตสาหกรรม"
            />

            <div className="custom-container form-header">
                <Row>
                    {data && data.assets.map(
                        (asset) => {

                            let pic = asset.pictures[0] ? process.env.NEXT_PUBLIC_API_PREFIX + 'images/gallery/' + asset.pictures[0].filename : `/assets/images/p-1.jpg`
                            // console.log(pic)
                            return (
                                <Col xs={6} lg={3} key="{asset.asset_id}" className="mb-display-r" >
                                    <CardHome asset_id={asset.asset_id} url={pic} name={asset.title_th} address={asset.place_th} price={asset.price} />
                                </Col>
                            )
                        }
                    )}
                </Row>

            </div>
        </>
    )
}

// const checkundefined = (t) => (t === undefined) ? 0 : t

// export async function getServerSideProps({ query }) {
//     let { asset_type_id, sale_type_id, is_new, keyword } = query
//     asset_type_id = !(asset_type_id===undefined)?asset_type_id:0
//     sale_type_id = !(sale_type_id===undefined)?sale_type_id:0
//     is_new = !(is_new===undefined)?is_new:0
//     keyword = !(keyword===undefined)?keyword:''

//     let params = {
//         asset_type_id,
//         sale_type_id,
//         keyword,
//         is_new,
//         limit: 12,
//         page: 1
//     }

//     let queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
//     const res = await fetch(process.env.NEXT_PUBLIC_API_PREFIX + `asset/getlistbytype?` + queryString)
//     let data = await res.json()

//     return { props: { data } }
// }


export default index
