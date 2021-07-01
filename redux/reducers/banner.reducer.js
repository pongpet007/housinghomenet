import * as types from "../types";

const initialState = {
  bannerList: { title: "Demo start", desc: "Desc Demo" },
};

export const bannerReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_BANNER:
      return {
        ...state,
        bannerList: action.payload,
      };
    default:
      return state;
  }
};
