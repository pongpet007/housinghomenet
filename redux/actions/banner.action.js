import * as types from "../types";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_PREFIX;

export const fetBanner = (search) => async (dispatch) => {
  try {
    let params = {
      banner_type_id: search.banner_type_id > 0 ? search.banner_type_id : 0,
      limit: search.limit > 0 ? search.limit : 20,
      page: search.page > 1 ? search.page : 1,
    };
    const queryString = Object.keys(params)
      .map((key) => key + "=" + params[key])
      .join("&");
    const url = API_URL + "Imageset/getlist?" + queryString;
    console.log(url);
    const response = await axios.get(url);
    dispatch({
      type: types.GET_BANNER,
      payload: response.data,
    });
  } catch (err) {
    console.error(err);
  }
};
