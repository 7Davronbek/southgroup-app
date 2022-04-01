import { UPDATE_STATE } from "../types/getTypes";

const initialState = {
  isLoading: false,
  allCategory: [],
  allProducts: []
};

export const getReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_STATE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
