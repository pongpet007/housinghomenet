import * as types from "../types";

const initialState = {
  projectList: {},
  project: {},
};

export const projectReducer = (state = initialState, action) => {
  // console.log(action.payload);
  switch (action.type) {
    case types.GET_PROJECT:
      return {
        ...state,
        projectList: action.payload,
      };
    case types.GET_PROJECT_BY_ID:
      return {
        ...state,
        project: action.payload,
      };
    default:
      return state;
  }
};
