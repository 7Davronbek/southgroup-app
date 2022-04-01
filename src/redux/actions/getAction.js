import { UPDATE_STATE } from "../types/getTypes";
import axios from "axios";
import { API_PATH } from "../../tools/constants";

export const updateState = (state) => {
  return {
    type: UPDATE_STATE,
    payload: state,
  };
};

// export const getCategory = () => (dispatch) => {
//   axios
//     .get(API_PATH + "api/category/")
//     .then((res) => {
//       dispatch(updateState({ allCategory: res.data }));
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

export function getCategory() {
  return function (dispatch) {
    axios
      .get(API_PATH + "api/category/")
      .then((res) => {
        dispatch(
          updateState({
            type: UPDATE_STATE,
            payload: {
                allCategory: res.data
            },
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function getProducts() {
  return function (dispatch) {
    axios.get(API_PATH + "api/product/");
  };
}
