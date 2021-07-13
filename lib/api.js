import { useEffect, useState } from "react";
import useSWR from "swr";
import useTranslation from "next-translate/useTranslation";

const fetcher = (url) =>
  fetch(url).then(async (res) => {
    const result = await res.json();

    if (res.status !== 200) {
      return Promise.reject(result);
    } else {
      return result;
    }
  });

const API_URL = process.env.NEXT_PUBLIC_API_PREFIX;

export const getAssetList = ({
  asset_type_id,
  sale_type_id,
  keyword,
  is_new,
  limit,
  page,
}) => {
  let params = {
    asset_type_id: asset_type_id ? asset_type_id : "",
    sale_type_id: sale_type_id ? sale_type_id : "",
    keyword: keyword ? keyword : "",
    is_new: is_new ? is_new : is_new,
    limit: limit ? limit : 10,
    page: page ? page : 1,
  };
  const queryString = Object.keys(params)
    .map((key) => key + "=" + params[key])
    .join("&");

  const { data, error, ...rest } = useSWR(
    API_URL + "asset/getlist?" + queryString,
    fetcher
  );
  return { data, error, loading: !data && !error, ...rest };
};

//     async function getPost() {
//       const res = await fetch(API_URL + "asset/getlist?" + queryString);
//       const result = await res.json();
//       if (res.status !== 200) {
//         console.log(res.status);
//       } else {
//         setData(result);
//         setDataslice(result?.assets.slice(3, result.assets.length));
//       }

//
//     }

export const getAssetOne = (asset_id) => {
  const { data, error } = useSWR(
    API_URL + `asset/getOne?asset_id=${asset_id}`,
    fetcher
  );
  return data;
};

export const getImageList = ({ banner_type_id, limit, page }) => {
  let params = {
    banner_type_id: banner_type_id ? banner_type_id : "",
    limit: limit ? limit : 10,
    page: page ? page : 1,
  };
  const queryString = Object.keys(params)
    .map((key) => key + "=" + params[key])
    .join("&");
  const { data, error } = useSWR(
    API_URL + "asset/getlist?" + queryString,
    fetcher
  );
  return data;
};

export const getServiceTypeList = ({ limit, page }) => {
  let params = {
    limit: limit ? limit : 10,
    page: page ? page : 1,
  };
  const queryString = Object.keys(params)
    .map((key) => key + "=" + params[key])
    .join("&");
  const { data, error } = useSWR(
    API_URL + "servicetype/getlist?" + queryString,
    fetcher
  );
  return data;
};

export const getServiceTypeOne = (service_type_id) => {
  const { data, error } = useSWR(
    API_URL + `servicetype/getOne?asset_id=${service_type_id}`,
    fetcher
  );
  return data;
};

export const getServiceList = ({ service_type_id, limit, page }) => {
  let params = {
    service_type_id: service_type_id ? service_type_id : "",
    limit: limit ? limit : 10,
    page: page ? page : 1,
  };
  const queryString = Object.keys(params)
    .map((key) => key + "=" + params[key])
    .join("&");
  const { data, error } = useSWR(
    API_URL + "service/getlist?" + queryString,
    fetcher
  );
  return data;
};

export const getServiceOne = (service_type_id) => {
  const { data, error } = useSWR(
    API_URL + `service/getOne?asset_id=${service_type_id}`,
    fetcher
  );
  return data;
};

export const getPageOne = (page_id) => {
  const { t, lang } = useTranslation("common");
  const country_id = lang == "en" ? 236 : 221;
  const { data, error } = useSWR(
    API_URL + `page/getOne?page_id=${page_id}&country_id=${country_id}`,
    fetcher
  );
  return data;
};

export const getNewsList = ({ service_type_id, limit, page }) => {};

export const getNewsOne = (service_type_id) => {};
