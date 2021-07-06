import * as types from "../types";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_PREFIX;

export const fetchServiceType = (search) => async (dispatch) => {
  try {
    let params = {
      limit: search.limit ? search.limit : 20,
      page: search.page ? search.page : 1,
    };
    const queryString = Object.keys(params)
      .map((key) => key + "=" + params[key])
      .join("&");
    const url = API_URL + "servicetype/getlist?" + queryString;
    const response = await axios.get(url);
    dispatch({
      type: types.GET_SERVICE_TYPE,
      payload: response.data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const fetServiceTypeById = (service_type_id) => async (dispatch) => {
  try {
    const url =
      API_URL + "servicetype/getOne?service_type_id=" + service_type_id;
    const response = await axios.get(url);
    dispatch({
      type: types.GET_SERVICE_TYPE_BY_ID,
      payload: response.data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const fetchService = (search) => async (dispatch) => {
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
    const url = API_URL + "Service/getlist?" + queryString;
    const response = await axios.get(url);
    dispatch({
      type: types.GET_SERVICE,
      payload: response.data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const fetServiceById = (service_id) => async (dispatch) => {
  try {
    const url = API_URL + "service/getOne?service_id=" + service_id;
    const response = await axios.get(url);
    dispatch({
      type: types.GET_SERVICE_BY_ID,
      payload: response.data,
    });
  } catch (err) {
    console.error(err);
  }
};
