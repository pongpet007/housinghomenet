import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import useTranslation from "next-translate/useTranslation";
import Images from "next/image";
import Link from "next/link";
import { fetchBanner } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

function sectionPartner() {
  const dispatch = useDispatch();
  const { t, lang } = useTranslation("common");
  const bannerList = useSelector((state) => state.banner.bannerList);
  // console.log(bannerList);

  useEffect(() => {
    dispatch(fetchBanner({ banner_type_id: 3, limit: 12, page: 1 }));
  }, []);

  const { banners, search, totalrows } = bannerList;

  return (
    <div className="mt-5 mb-5">
      <div className="container">
        <Col lg={6} className="mb-3">
          <h4>
            <b>{t("Thaiproperty")}</b>
          </h4>
          <div className="boder-red-bottom"></div>
          <h5>{t("goodproject")}</h5>
        </Col>
      </div>
      <div className="container">
        <Row className="pr-3 pl-3">
          {banners &&
            banners.map((banner) => {
              let pic =
                process.env.NEXT_PUBLIC_API_PREFIX +
                "images/banner/" +
                banner.banner_id +
                `.jpg`;
              // console.log(pic)
              return (
                <Col key={banner.banner_id} xs={3} lg={1} className="mb-3">
                  <Link href={banner.link}>
                    <a target="_blank">
                      <Images
                        src={pic}
                        alt={banner.link}
                        width={115}
                        layout="responsive"
                        height={80}
                      />
                    </a>
                  </Link>
                </Col>
              );
            })}
        </Row>
      </div>
    </div>
  );
}

export default sectionPartner;
