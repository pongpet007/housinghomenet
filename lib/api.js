import useSWR from "swr";
import useTranslation from "next-translate/useTranslation";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const API_URL = process.env.NEXT_PUBLIC_API_PREFIX;

export function getAssetList({
  asset_type_id,
  sale_type_id,
  keyword,
  is_new,
  limit,
  page,
}) {
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
  const { data, error } = useSWR(
    API_URL + "asset/getlist?" + queryString,
    fetcher
  );
  return data;
}

export function getAssetOne(asset_id) {
  const { data, error } = useSWR(
    API_URL + `asset/getOne?asset_id=${asset_id}`,
    fetcher
  );
  return data;
}

export function getImageList({ banner_type_id, limit, page }) {
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
}

export function getServiceTypeList({ limit, page }) {
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
}

export function getServiceTypeOne(service_type_id) {
  const { data, error } = useSWR(
    API_URL + `servicetype/getOne?asset_id=${service_type_id}`,
    fetcher
  );
  return data;
}

export function getServiceList({ service_type_id, limit, page }) {
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
}

export function getServiceOne(service_type_id) {
  const { data, error } = useSWR(
    API_URL + `service/getOne?asset_id=${service_type_id}`,
    fetcher
  );
  return data;
}

export function getPageOne(page_id) {
  const { t, lang } = useTranslation("common");
  const country_id = lang == "en" ? 236 : 221;
  const { data, error } = useSWR(
    API_URL + `page/getOne?page_id=${page_id}&country_id=${country_id}`,
    fetcher
  );
  return data;
}

export function getNewsList({ service_type_id, limit, page }) {}

export function getNewsOne(service_type_id) {}
