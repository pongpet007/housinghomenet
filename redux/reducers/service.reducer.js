import * as types from "../types";

const initialState = {
  serviceList: {},
  service: {},
};

export const serviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_SERVICE:
      return {
        ...state,
        serviceList: action.payload,
      };
    case types.GET_SERVICE_BY_ID:
      return {
        ...state,
        service: action.payload,
      };
    default:
      return state;
  }
};
