import React, { useEffect, useState } from 'react'
import { CardGroup, Card, Col, Row, Button } from 'react-bootstrap'
// import Images from 'next/image'
import CardHome from '../Home/cardHome'
// import Link from 'next/link'
import useSWR from 'swr'
import {getAssetList} from '../../lib/api'

export default  function itemHome({ asset_type_id }) {

    // const fetcher = (...args) => fetch(...args).then(res => res.json())
    // const { data, error } = useSWR('https://www.housinghome.net/api/asset/getlist?asset_type_id=' + asset_type_id + '&sale_type_id=0&keyword=&is_new=0&limit=4&page=1', fetcher)
    const params = {
        asset_type_id,
        limit:4
    }
    const data =  getAssetList(params);
    // console.log(data)    
    // return (<div>Loading</div>);

    return (
        <div className="custom-container form-header">
            <Row>
                {data && data.assets.map(
                    (asset) => {

                        let pic = asset.pictures[0] ? process.env.NEXT_PUBLIC_API_PREFIX + 'images/gallery/' + asset.pictures[0].filename : `/assets/images/p-1.jpg`
                        // console.log(pic)
                        return (
                            <Col xs={6} lg={3} key={asset.asset_id} className="mb-display-r" >
                                <CardHome asset_id={asset.asset_id} url={pic} name={asset.title_th} address={asset.place_th} price={asset.price} />
                            </Col>
                        )
                    }
                )}
            </Row>
        </div>
    )
}

