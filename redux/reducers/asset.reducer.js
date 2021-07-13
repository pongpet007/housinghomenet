import * as types from "../types";

const initialState = {
  assetList: [],
  assetType: {},
  asset: {},
};

export const assetReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ASSET:
      return { ...state, assetList: action.payload };
    case types.GET_ASSET_BY_ID:
      return { ...state, asset: action.payload };
    case types.GET_ASSET_TYPE:
      return { ...state, assetType: action.payload };
    default:
      return state;
  }
};
