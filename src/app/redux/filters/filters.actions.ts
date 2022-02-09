import { SHOW_CONTENT, HIDE_CONTENT } from "../actionTypes";
import { createAction } from "../utils/createAction";

export const hideContent = createAction(HIDE_CONTENT);
export const showContent = createAction(SHOW_CONTENT);
