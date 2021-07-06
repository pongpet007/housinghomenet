import * as types from "../types";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_PREFIX;

export const fetchNewsType = (search) => async (dispatch) => {
  try {
    let params = {
      limit: search.limit ? search.limit : 20,
      page: search.page ? search.page : 1,
    };
    const queryString = Object.keys(params)
      .map((key) => key + "=" + params[key])
      .join("&");
    const url = API_URL + "newstype/getlist?" + queryString;
    const response = await axios.get(url);
    dispatch({
      type: types.GET_NEWS_TYPE,
      payload: response.data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const fetNewsTypeById = (news_type_id) => async (dispatch) => {
  try {
    const url = API_URL + "newstype/getOne?news_type_id=" + news_type_id;
    const response = await axios.get(url);
    dispatch({
      type: types.GET_NEWS_TYPE_BY_ID,
      payload: response.data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const fetchNews = (search) => async (dispatch) => {
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
    const url = API_URL + "news/getlist?" + queryString;
    const response = await axios.get(url);
    dispatch({
      type: types.GET_NEWS,
      payload: response.data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const fetNewsById = (news_id) => async (dispatch) => {
  try {
    const url = API_URL + "news/getOne?news_id=" + news_id;
    const response = await axios.get(url);
    dispatch({
      type: types.GET_NEWS_BY_ID,
      payload: response.data,
    });
  } catch (err) {
    console.error(err);
  }
};