import * as types from "../types";

const initialState = {
  newsTypeList: {},
  newsList: {},
  newsType: {},
  news: {},
};

export const newsReducer = (state = initialState, action) => {
  // console.log(action.payload);
  switch (action.type) {
    case types.GET_NEWS:
      return {
        ...state,
        newsList: action.payload,
      };
    case types.GET_NEWS_BY_ID:
      return {
        ...state,
        news: action.payload,
      };
    case types.GET_NEWS_TYPE:
      return {
        ...state,
        newsTypeList: action.payload,
      };
    case types.GET_NEWS_TYPE_BY_ID:
      return {
        ...state,
        newsType: action.payload,
      };
    default:
      return state;
  }
};
