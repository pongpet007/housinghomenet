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
import BarSearch from "../components/BarSearch";

function index2(props) {
  const router = useRouter();
  const { t, lang } = useTranslation("common");

  return (
    <BaseLayout>
      <Head_meta />
      <Banner />
      <BarSearch isIndex={true} />
      {/* <SectionHome />*/}
      <SectionService />
      <SectionPartner />
    </BaseLayout>
  );
}

export default index2;
