import React from "react";
import useTranslation from "next-translate/useTranslation";
import CardHome from "../../components/Home/cardHome";
import { Row, Col } from "react-bootstrap";
import Head_meta from "../../components/Head_meta";
import { getAssetList } from "../../lib/api";
import { useRouter } from "next/router";
import YellowBreadcrumb from "../../components/shared/YellowBreadcrumb";
import BaseLayout from "../../components/layout/BaseLayout";
const index = () => {
  const router = useRouter();
  const asset_type_id = router.query.asset_type_id;
  // console.log(data)
  const { t, lang } = useTranslation("common");
  const params = {
    asset_type_id,
    limit: 12,
    page: 1,
  };
  const data = getAssetList(params);

  return (
    <BaseLayout>
      <Head_meta />
      <YellowBreadcrumb
        data={[
          { name: t("home"), url: `/${lang}` },
          { name: "ขายบ้านที่ดิน", url: "", active: true },
        ]}
      />
      <div className="container form-header">
        <Row>
          {data &&
            data.assets.map((asset) => {
              let pic = asset.pictures[0]
                ? process.env.NEXT_PUBLIC_API_PREFIX +
                  "images/gallery/" +
                  asset.pictures[0].filename
                : `/assets/images/p-1.jpg`;
              // console.log(pic)
              return (
                <Col
                  xs={6}
                  lg={3}
                  key="{asset.asset_id}"
                  className="mb-display-r"
                >
                  <CardHome
                    asset_id={asset.asset_id}
                    url={pic}
                    name={asset.title_th}
                    address={asset.place_th}
                    price={asset.price}
                  />
                </Col>
              );
            })}
        </Row>
      </div>
    </BaseLayout>
  );
};

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

export default index;
