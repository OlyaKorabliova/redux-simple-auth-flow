import { createActionType } from "./utils/createActionType";

export const TOGGLE_TODO = "TOGGLE_TODO";
export const ADD_TODO = createActionType("ADD_TODO");
export const REMOVE_TODO = "REMOVE_TODO";

export const REMOVE_ERROR = "REMOVE_ERROR";

export const HIDE_CONTENT = "HIDE_CONTENT";
export const SHOW_CONTENT = "SHOw_CONTENT";
