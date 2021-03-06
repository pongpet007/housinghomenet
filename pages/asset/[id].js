import React, { useEffect } from "react";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
// import SimpleReactLightbox from 'simple-react-lightbox'
// import { SRLWrapper } from "simple-react-lightbox";
import { Row, Col, Tab, Nav } from "react-bootstrap";
import YellowBreadcrumb from "../../components/shared/YellowBreadcrumb";
// import FbImageLibrary from 'react-fb-image-grid'
import Head_meta from "../../components/Head_meta";

// import 'react-image-lightbox/style.css'
// import 'react-fb-image-grid/es/css/style.css'

import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
// import 'react-owl-carousel2/src/owl.theme.green.css';
import "react-owl-carousel2/lib/styles.css";
import Head from "next/head";
// import { getAssetOne } from "../../lib/api";
import BaseLayout from "../../components/layout/BaseLayout";

const asset_item = ({ data: { asset } }) => {
  const { t, lang } = useTranslation("common");
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (isNaN(id)) {
      router.push("/asset");
    }
  }, []);

  // const data = getAssetOne(asset_id);
  // console.log(asset);

  let pictures = [];
  asset.pictures.map((picture, index) => {
    let pic = picture.filename
      ? process.env.NEXT_PUBLIC_API_PREFIX +
        "images/gallery/" +
        picture.filename
      : `/assets/images/p-1.jpg`;
    pictures.push(pic);
  });

  // return <div>xx</div>

  // console.log(pictures);
  // const handleImageClick = (a) => {
  //     alert('x');
  // }

  const OWLoptions = {
    items: 3,
    nav: false,
    rewind: true,
    autoplay: true,
    navText: ["<", ">"],
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 3,
        nav: true,
        loop: false,
      },
    },
  };

  return (
    <BaseLayout>
      <Head_meta />
      <YellowBreadcrumb
        data={[
          { name: t("common:home"), url: `/${lang}` },
          { name: "Filter", url: "", active: true },
        ]}
      />
      {/*             
            <FbImageLibrary
                images={pictures}
                // hideOverlay={true}
                renderOverlay={() => <b style={{ fontSize: '40px' }}>HOUSINGHOME.NET</b>}
            /> */}

      <OwlCarousel options={OWLoptions}>
        {pictures &&
          pictures.map((picture, index) => {
            return (
              <div key={index} style={{ height: "350px", overflow: "hidden" }}>
                <img src={picture} alt="xxx" />
              </div>
            );
          })}
      </OwlCarousel>

      <div id="asset_detail" className="container ">
        <Row>
          <Col md={10} lg={9}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h1>{asset.title_th}</h1>
              <h1>{asset.price}</h1>
            </div>
            <div>{asset.place_th}</div>
            <div>
              <h1>??????????????????????????????</h1>
              <div style={{ whiteSpace: "pre-line" }}>{asset.detail_th}</div>
              <h1>???????????????????????????</h1>
              <Row>
                <Col>?????????????????????</Col>
                <Col>?????????????????????</Col>
                <Col>???????????????????????????????????????</Col>
                <Col>????????????????????????</Col>
              </Row>
              <h1>?????????????????????????????????????????????????????????</h1>
              <Row>
                <Col>
                  <table className="table">
                    <tr>
                      <td>??????????????????</td>
                      <td>xx</td>
                    </tr>
                    <tr>
                      <td>???????????????????????????????????????</td>
                      <td>xx</td>
                    </tr>
                    <tr>
                      <td>??????????????????????????????</td>
                      <td>xx</td>
                    </tr>
                    <tr>
                      <td>????????????????????????????????????</td>
                      <td>xx</td>
                    </tr>
                    <tr>
                      <td>???????????????????????????</td>
                      <td>xx</td>
                    </tr>
                    <tr>
                      <td>???????????????????????????????????????</td>
                      <td>xx</td>
                    </tr>
                  </table>
                </Col>
                <Col>
                  <table className="table">
                    <tr>
                      <td>??????????????????????????????</td>
                      <td>xx</td>
                    </tr>
                    <tr>
                      <td>?????????????????????</td>
                      <td>xx</td>
                    </tr>
                    <tr>
                      <td>????????????????????? ??????.???.</td>
                      <td>xx</td>
                    </tr>
                    <tr>
                      <td>?????????????????????????????????????????????</td>
                      <td>xx</td>
                    </tr>
                    <tr>
                      <td>??????????????????????????????</td>
                      <td>xx</td>
                    </tr>
                  </table>
                </Col>
              </Row>

              <h1>??????????????????????????????????????????????????????</h1>
              <Row>
                <Col xs={12} lg={4}></Col>
              </Row>

              <h1>??????????????????????????????</h1>
              <Row>
                <Col>
                  <Tab.Container
                    id="bottom-tab-example"
                    defaultActiveKey="link-1"
                  >
                    <div className="custom-container mt-4">
                      <Row>
                        <Col>
                          <Nav variant="pills">
                            <Nav.Item>
                              <Nav.Link eventKey="link-1">????????????????????? 1 </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="link-2">????????????????????? 2 </Nav.Link>
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
                              <div>????????????????????? 1</div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="link-2">
                              <div>????????????????????? 2</div>
                            </Tab.Pane>
                          </Tab.Content>
                        </Col>
                      </Row>
                    </div>
                  </Tab.Container>
                </Col>
              </Row>

              <h1>???????????????????????????????????????</h1>
              <Row>
                <Col>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/CAmotCLaAG0"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullScreen="true"
                  ></iframe>
                </Col>
              </Row>

              <h1>?????????????????????????????????</h1>
              <Row>
                <Col>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.042937188833!2d100.65496010924777!3d13.715849337926592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd469356dbb6fbab0!2z4LmB4Lia4Lij4LiZ4LiU4LmM4LmA4LiU4LmH4LiB4LiL4LmMIOC5hOC4lOC5gOC4o-C5h-C4geC4l-C4reC4o-C4teC5iCDguJrguIjguIEu!5e0!3m2!1sth!2sth!4v1617935993155!5m2!1sth!2sth"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    loading="lazy"
                  ></iframe>
                </Col>
              </Row>
            </div>
          </Col>
          <Col md={2} lg={3}>
            <Row>
              <Col>
                <Tab.Container
                  id="bottom-tab-example"
                  defaultActiveKey="link-1"
                >
                  <div className="custom-container mt-4">
                    <Row>
                      <Col>
                        <Nav variant="pills">
                          <Nav.Item>
                            <Nav.Link eventKey="link-1">????????????????????????????????????</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="link-2">
                              ???????????????????????????????????????????????????
                            </Nav.Link>
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
                            <div>xx</div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="link-2">
                            <div>yyy</div>
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

        <h1>????????????????????????????????????????????????????????????</h1>
        <Row>
          <Col>xxx</Col>
        </Row>

        <h1>?????????????????????????????????????????????????????????????????????</h1>
        <Row>
          <Col>xxx</Col>
        </Row>
      </div>

      <style jsx>
        {`
          @media (min-width: 1200px) .container,
            .container-lg,
            .container-md,
            .container-sm,
            .container-xl {
            max-width: 1580px;
          }
          .grid-container .container {
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
    </BaseLayout>
  );
};

export async function getServerSideProps({ query }) {
  let { id } = query;
  const asset_id = !(id === undefined) ? id : 0;

  const res = await fetch(
    process.env.NEXT_PUBLIC_API_PREFIX + `asset/getOne?asset_id=` + asset_id
  );
  let data = await res.json();

  return { props: { data } };
}

// asset_item.getInitialProps = async ({ query }) => {
//     let { asset_id } = query
//     asset_id = !(asset_id === undefined) ? asset_id : 0

//     const res = await fetch(process.env.NEXT_PUBLIC_API_PREFIX + `asset/getOne?asset_id=` + asset_id)
//     let data = await res.json()

//     return {
//         resource: data
//     }
// }

export default asset_item;
