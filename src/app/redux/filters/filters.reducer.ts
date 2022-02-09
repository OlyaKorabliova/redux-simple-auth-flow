import { HIDE_CONTENT, SHOW_CONTENT } from "../actionTypes";
import { createReducer } from "../utils/createReducer";

const initialState = {
  isVisible: true,
};

const filtersReducer = createReducer(initialState, {
  [SHOW_CONTENT]: (state) => {
    return {
      ...state,
      isVisible: true,
    };
  },
  [HIDE_CONTENT]: (state) => {
    return {
      ...state,
      isVisible: false,
    };
  },
});

export default filtersReducer;
