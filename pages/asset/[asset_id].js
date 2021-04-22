import React, { useEffect } from 'react'
import { useRouter } from "next/router"
// import SimpleReactLightbox from 'simple-react-lightbox'
// import { SRLWrapper } from "simple-react-lightbox";
import { Row, Col, Tab, Nav } from 'react-bootstrap'
// import FbImageLibrary from 'react-fb-image-grid'
import Head_meta from "../../components/Head_meta"

// import 'react-image-lightbox/style.css'
// import 'react-fb-image-grid/es/css/style.css'

import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css';
import 'react-owl-carousel2/src/owl.theme.default.css';
// import 'react-owl-carousel2/src/owl.theme.green.css';
import 'react-owl-carousel2/lib/styles.css';
import Head from 'next/head'


const asset_item = (
    { data:
        {
            asset
        }
    }
) => {
    const router = useRouter()
    const { asset_id } = router.query

    useEffect(() => {
        if (isNaN(asset_id)) {
            router.push('/asset')
        }
    }, [])

    const pictures = []
    asset.pictures.map(
        (picture, index) => {

            let pic = picture.filename ? process.env.NEXT_PUBLIC_API_PREFIX + 'images/gallery/' + picture.filename : `/assets/images/p-1.jpg`
            pictures.push(pic)
        })
    // console.log(pictures)
    // const handleImageClick = (a) => {
    //     alert('x');
    // }

    const OWLoptions = {
        items: 3,
        nav: false,
        rewind: true,
        autoplay: true,
        navText: ['<', '>'],
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    };


    return (
        <>

            <Head_meta
                title='สินค้าอุตสาหกรรม ค้นหาสินค้าอุตสาหกรรมออนไลน์ เว็บไซต์รวมรายชื่อผู้ผลิต จำหน่าย ให้บริการ'
                keyword='เว็บไซต์รวมสินค้าอุตสาหกรรมออนไลน์ ค้นหารายชื่อผู้ประกอบการภาคอุตสาหกรรม ตลาดสินค้าอุตสาหกรรม โดยบริษัท แบรนด์เด็กซ์ ไดเร็กทอรี่ จำกัด ผู้ผลิตสื่ออุตสาหกรรมคุณภาพ'
                description="สินค้าอุตสาหกรรม,สินค้าอุตสาหกรรมออนไลน์,เว็บอุตสาหกรรม,ตลาดอุตสาหกรรม,ตลาดกลางอุตสาหกรรม, สื่อสินค้าอุตสาหกรรม,ตลาดกลางสินค้าอุตสาหกรรม,thailand industry,รายชื่อบริษัทอุตสาหกรรม,สินค้าอุตสาหกรรมคืออะไร,สินค้าอุตสาหกรรมมีกี่ประเภท,ตัวอย่างสินค้าอุตสาหกรรม"
            />

            {/*             
            <FbImageLibrary
                images={pictures}
                // hideOverlay={true}
                renderOverlay={() => <b style={{ fontSize: '40px' }}>HOUSINGHOME.NET</b>}
            /> */}

            <OwlCarousel options={OWLoptions} >
                {pictures.map(
                    (picture, index) => {
                        return (
                            <div key={index} style={{ height: '350px', overflow: 'hidden' }}><img src={picture} alt="xxx" /></div>
                        )
                    }
                )}
            </OwlCarousel>

            <div id="asset_detail" className="custom-container ">
                <Row>
                    <Col md={10} lg={9}>
                        <div style={{ display: 'flex', justifyContent: "space-between" }}>
                            <h1>{asset.title_th}</h1>
                            <h1>{asset.price}</h1>
                        </div>
                        <div>
                            {asset.place_th}
                        </div>
                        <div>
                            <h1>รายละเอียด</h1>
                            <div style={{ whiteSpace: 'pre-line' }}>
                                {(asset.detail_th)}
                            </div>
                            <h1>คุณลักษณะ</h1>
                            <Row>
                                <Col>
                                    ห้องนอน
                                </Col>
                                <Col>
                                    ห้องน้ำ
                                </Col>
                                <Col>
                                    พื้นที่ใช้สอย
                                </Col>
                                <Col>
                                    ที่จอดรถ
                                </Col>
                            </Row>
                            <h1>รายละเอียดเพิ่มเติม</h1>
                            <Row>
                                <Col>
                                    <table className="table">
                                        <tr>
                                            <td>ประเภท</td>
                                            <td>xx</td>
                                        </tr>
                                        <tr>
                                            <td>พื้นที่ใช้สอย</td>
                                            <td>xx</td>
                                        </tr>
                                        <tr>
                                            <td>ขนาดที่ดิน</td>
                                            <td>xx</td>
                                        </tr>
                                        <tr>
                                            <td>เฟอร์นิเจอร์</td>
                                            <td>xx</td>
                                        </tr>
                                        <tr>
                                            <td>จำนวนชั้น</td>
                                            <td>xx</td>
                                        </tr>
                                        <tr>
                                            <td>ลงประกาศเมื่อ</td>
                                            <td>xx</td>
                                        </tr>
                                    </table>
                                </Col>
                                <Col>
                                    <table className="table">
                                        <tr>
                                            <td>การถือครอง</td>
                                            <td>xx</td>
                                        </tr>
                                        <tr>
                                            <td>โครงการ</td>
                                            <td>xx</td>
                                        </tr>
                                        <tr>
                                            <td>ราคาต่อ ตร.ม.</td>
                                            <td>xx</td>
                                        </tr>
                                        <tr>
                                            <td>ปีที่สร้างเสร็จ</td>
                                            <td>xx</td>
                                        </tr>
                                        <tr>
                                            <td>รหัสประกาศ</td>
                                            <td>xx</td>
                                        </tr>
                                    </table>
                                </Col>
                            </Row>

                            <h1>สิ่งอำนวนความสะดวก</h1>
                            <Row>
                                <Col xs={12} lg={4}>

                                </Col>
                            </Row>

                            <h1>แผนผังชั้น</h1>
                            <Row>
                                <Col>
                                    <Tab.Container id="bottom-tab-example" defaultActiveKey="link-1">
                                        <div className="custom-container mt-4">
                                            <Row>
                                                <Col>
                                                    <Nav variant="pills">
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="link-1">ชั้นที่ 1 </Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="link-2">ชั้นที่ 2 </Nav.Link>
                                                        </Nav.Item>
                                                    </Nav>
                                                </Col>
                                            </Row>
                                        </div>

                                        <div className="custom-container">
                                            <Row>
                                                <Col>
                                                    <Tab.Content>
                                                        <Tab.Pane eventKey="link-1">
                                                            <div>
                                                                ชั้นที่ 1
                                                            </div>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="link-2">
                                                            <div>
                                                                ชั้นที่ 2
                                                            </div>
                                                        </Tab.Pane>
                                                    </Tab.Content>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Tab.Container>
                                </Col>
                            </Row>

                            <h1>วีดีโอสถานที่</h1>
                            <Row>
                                <Col>
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/CAmotCLaAG0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </Col>
                            </Row>

                            <h1>ทำเลที่ตั้ง</h1>
                            <Row>
                                <Col>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.042937188833!2d100.65496010924777!3d13.715849337926592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd469356dbb6fbab0!2z4LmB4Lia4Lij4LiZ4LiU4LmM4LmA4LiU4LmH4LiB4LiL4LmMIOC5hOC4lOC5gOC4o-C5h-C4geC4l-C4reC4o-C4teC5iCDguJrguIjguIEu!5e0!3m2!1sth!2sth!4v1617935993155!5m2!1sth!2sth" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe>
                                </Col>
                            </Row>


                        </div>
                    </Col>
                    <Col md={2} lg={3}>
                        <Row>
                            <Col>
                                <Tab.Container id="bottom-tab-example" defaultActiveKey="link-1">
                                    <div className="custom-container mt-4">
                                        <Row>
                                            <Col>
                                                <Nav variant="pills">
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="link-1">ตารางนัดหมาย</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="link-2">ขอข้อมูลเพิ่มเติม</Nav.Link>
                                                    </Nav.Item>
                                                </Nav>
                                            </Col>
                                        </Row>
                                    </div>

                                    <div className="custom-container">
                                        <Row>
                                            <Col>
                                                <Tab.Content>
                                                    <Tab.Pane eventKey="link-1">
                                                        <div>
                                                            xx
                                                        </div>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="link-2">
                                                        <div>
                                                            yyy
                                                        </div>
                                                    </Tab.Pane>
                                                </Tab.Content>
                                            </Col>
                                        </Row>
                                    </div>
                                </Tab.Container>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <h1>ประกาศแนะนำสำหรับคุณ</h1>
                <Row>
                    <Col>
                        xxx
                    </Col>
                </Row>

                <h1>ประกาศในทำเลที่คุณค้นหา</h1>
                <Row>
                    <Col>
                        xxx
                    </Col>
                </Row>
            </div>

            <style jsx>{`
            @media (min-width: 1200px)
            .container, .container-lg, .container-md, .container-sm, .container-xl {
                max-width: 1580px;
            }
            .grid-container .container{
                max-width: 1580px;
            }

            .owl-carousel .owl-nav .owl-prev {
                position: absolute;
                left: 10px;
                top: 70px;
                height: 170px;
                font-size: 5rem;
               
            }
            .owl-carousel .owl-nav .owl-next {
                position: absolute;
                right: 10px;
                top: 70px;
                height: 170px;
                font-size: 6rem;
            }
               
            `}
            </style>


        </>
    )
}

export async function getServerSideProps({ query }) {
    let { asset_id } = query
    asset_id = !(asset_id === undefined) ? asset_id : 0

    const res = await fetch(process.env.NEXT_PUBLIC_API_PREFIX + `asset/getOne?asset_id=` + asset_id)
    let data = await res.json()

    return { props: { data } }
}


export default asset_item
