import * as types from "../types";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_PREFIX;

export const fetchAsset1 = (search) => async (dispatch) => {
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
      type: types.GET_HOME_ASSET1,
      payload: response.data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const fetchAsset2 = (search) => async (dispatch) => {
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
      type: types.GET_HOME_ASSET2,
      payload: response.data,
    });
  } catch (err) {
    console.error(err);
  }
};
