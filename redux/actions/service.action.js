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

export const fetchServiceTypeById = (service_type_id) => async (dispatch) => {
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
      service_type_id: search.service_type_id ? search.service_type_id : "",
      keyword: search.keyword ? search.keyword : "",
      show_index: search.show_index ? search.show_index : 0,
      country_id: search.country_id ? search.country_id : 221,
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

export const fetchServiceById = (service_id) => async (dispatch) => {
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
