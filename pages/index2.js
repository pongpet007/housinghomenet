import React, { useState, useEffect } from "react";
import Banner from "../components/Home/sectionBanner";
import BannerSponser from "../components/Home/sectionBannerSponser";
import BannerSponserBottom from "../components/Home/sectionBannerSponseBottom";
import SectionService from "../components/Home/sectionService";
import SectionHome from "../components/Home/sectionHome";
import { useRouter } from "next/router";
import Head_meta from "../components/Head_meta";
import SectionPartner from "../components/Home/sectionPartner";
import { Col, Nav, Row, Form } from "react-bootstrap";
import useTranslation from "next-translate/useTranslation";
import BaseLayout from "../components/layout/BaseLayout";

const BarSearch = (props) => {
  const { t, lang } = useTranslation("common");
  return (
    <div className="pt-3">
      <div
        className="container form-header bg-red"
        style={{
          borderRadius: 10,
          top: -45,
          position: "relative",
          zIndex: 1,
        }}
      >
        <Row>
          <Col xs lg="3">
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label className="font-label">{t("Need")}</Form.Label>
              <Form.Control
                as="select"
                name="sale_type"
                className="form-header"
              >
                <option>{t("select")}</option>
                <option>{t("sell")}</option>
                <option>{t("rental")}</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col xs lg="3">
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label className="font-label">{t("property")}</Form.Label>
              <Form.Control
                as="select"
                name="asset_type"
                className="form-header"
              >
                <option value={1}>{t("select")}</option>
                <option value={2}>{t("land")}</option>
                <option value={3}>{t("condo")}</option>
                <option value={4}>{t("townhome")}</option>
                <option value={5}>{t("Detached-house")}</option>
                <option value={6}>{t("Semi-detached-house")}</option>
              </Form.Control>
            </Form.Group>
          </Col>

          <Col xs lg="4">
            <Form.Group>
              <Form.Label className="font-label">{t("search")}</Form.Label>
              <Form.Control
                name="keyword"
                placeholder={t("Location-project-condo-district")}
                className="form-header"
              />
            </Form.Group>
          </Col>
          <Col xs lg="2">
            <button className="btn-search-subimit">{t("search")}</button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

function index2(props) {
  const router = useRouter();
  const { t, lang } = useTranslation("common");
  // const [data, setData] = useState(null);

  // const fetcher = (...args) => fetch(...args).then(res => res.json())
  // const { data, error } = useSWR('https://www.housinghome.net/api/Slide/getList', fetcher)

  // if (error) return <div>failed to load</div>
  // if (!data) return <div>loading...</div>

  // console.log(data)
  // console.log(props)

  // useEffect(async () => {
  //   const result = await axios(
  //     'https://www.housinghome.net/api/Slide/getList', {
  //     headers: { "Access-Control-Allow-Origin": "*" }
  //   }
  //   );

  //   setData(result.data);
  //   console.log(data)
  // }, []);

  return (
    <BaseLayout>
      <Head_meta />
      <Banner />
      <BarSearch />
      <SectionHome />
      <SectionService />
      <SectionPartner />
    </BaseLayout>
  );
}

// index2.getInitialProps = async () => {
//   return {};
// };

// export async function getServerSideProps() {
//   let params = {
//     asset_type_id: "0",
//     sale_type_id: "1",
//     keyword: "",
//     is_new: 0,
//     limit: 20,
//     page: 1
//   }
//   let queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
//   const res = await fetch(process.env.NEXT_PUBLIC_API_PREFIX + `asset/getlistbytype?` + queryString)
//   let data = await res.json()

//   params = {
//     asset_type_id: "4",
//     sale_type_id: "0",
//     keyword: "",
//     is_new: 0,
//     limit: 20,
//     page: 1
//   }
//   queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
//   const res2 = await fetch(process.env.NEXT_PUBLIC_API_PREFIX + `asset/getlistbytype?` + queryString)
//   const data2 = await res2.json()

//   // console.log(data2)
//   // const res2 = await fetch(`http://www.myhousinghome.net/api/asset/getOne?asset_id=2`)

//   // const data2 = await res2.json()
//   // console.log(data2)
//   return { props: { data, data2 } }
// }

export default index2;
