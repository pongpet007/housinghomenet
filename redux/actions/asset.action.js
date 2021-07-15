import * as types from "../types";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_PREFIX;

export const fetchAsset = (search) => async (dispatch) => {
  try {
    let params = {
      keyword: search.keyword ? search.keyword : "",
      asset_type_id: search.asset_type_id ? search.asset_type_id : 0,
      sale_type_id: search.sale_type_id ? search.sale_type_id : 0,
      project_id: search.project_id ? search.project_id : 0,
      only_project: search.only_project ? search.only_project : 0,
      is_random: search.is_random ? search.is_random : 0,
      is_new: search.is_new ? search.is_new : 0,
      limit: search.limit ? search.limit : 20,
      page: search.page ? search.page : 1,
    };
    const queryString = Object.keys(params)
      .map((key) => key + "=" + params[key])
      .join("&");
    const url = API_URL + "asset/getlist?" + queryString;
    const response = await axios.get(url);
    dispatch({
      type: types.GET_ASSET,
      payload: response.data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const fetchAssetById = (url) => async (dispatch) => {
  try {
    const response = await axios.get(url ? url : null);
    dispatch({
      type: types.GET_ASSET,
      payload: response.data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const fetchAssetTypeById = (asset_type_id) => async (dispatch) => {
  try {
    const url = API_URL + "asset/getTypeOne?asset_type_id=" + asset_type_id;
    const response = await axios.get(url);
    dispatch({
      type: types.GET_ASSET_TYPE,
      payload: response.data.asset_type,
    });
  } catch (err) {
    console.error(err);
  }
};
