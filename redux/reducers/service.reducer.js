import * as types from "../types";

const initialState = {
  serviceTypeList: {},
  serviceList: {},
  serviceType: {},
  service: {},
};

export const serviceReducer = (state = initialState, action) => {
  // console.log(action.payload);
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
    case types.GET_SERVICE_TYPE:
      return {
        ...state,
        serviceTypeList: action.payload,
      };
    case types.GET_SERVICE_TYPE_BY_ID:
      return {
        ...state,
        serviceType: action.payload,
      };
    default:
      return state;
  }
};
