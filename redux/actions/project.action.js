import * as types from "../types";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_PREFIX;

export const fetchProject = (search) => async (dispatch) => {
  try {
    let params = {
      limit: search.limit ? search.limit : 20,
      page: search.page ? search.page : 1,
    };
    const queryString = Object.keys(params)
      .map((key) => key + "=" + params[key])
      .join("&");
    const url = API_URL + "Project/getlist?" + queryString;
    const response = await axios.get(url);
    dispatch({
      type: types.GET_PROJECT,
      payload: response.data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const fetchProjectById =
  ({ project_id }) =>
  async (dispatch) => {
    try {
      const url = API_URL + "project/getOne?project_id=" + project_id;
      const response = await axios.get(url);
      dispatch({
        type: types.GET_PROJECT_BY_ID,
        payload: response.data,
      });
    } catch (err) {
      console.error(err);
    }
  };
