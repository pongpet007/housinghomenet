import * as types from "../types";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_PREFIX;

export const fetchAsset = (search) => async (dispatch) => {
  try {
    let params = {
      asset_type_id: search.asset_type_id ? search.asset_type_id : 0,
      sale_type_id: search.sale_type_id ? search.sale_type_id : 0,
      keyword: search.keyword ? search.keyword : 0,
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

export const fetAssetById = (url) => async (dispatch) => {
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

export const fetAssetTypeById = (url) => async (dispatch) => {
  try {
    const response = await axios.get(url ? url : null);
    dispatch({
      type: types.GET_ASSET_TYPE,
      payload: response.data,
    });
  } catch (err) {
    console.error(err);
  }
};
