import * as types from "../types";

const initialState = {
  assetList1: {},
  assetList2: {},
};

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_HOME_ASSET1:
      return {
        ...state,
        assetList1: action.payload,
      };
    case types.GET_HOME_ASSET2:
      return {
        ...state,
        assetList2: action.payload,
      };
    default:
      return state;
  }
};
