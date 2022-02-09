import { IToDoItem } from "../../interfaces/to-do-item.interface";
import {
  ADD_TODO,
  REMOVE_ERROR,
  REMOVE_TODO,
  TOGGLE_TODO,
} from "../actionTypes";
import { createAction } from "../utils/createAction";

const LIMIT = 3;

export function addTodo(todo: IToDoItem) {
  return function (dispatch, getState) {
    if (getState().todos.items.length >= LIMIT) {
      dispatch({
        type: ADD_TODO.ERROR,
        payload: {
          limit: LIMIT,
        },
      });
    } else {
      dispatch({
        type: ADD_TODO.SUCCESS,
        payload: {
          todo,
        },
      });
    }
  };
}

export const toggleTodo = createAction(TOGGLE_TODO, "id", "checked");
export const removeTodo = createAction(REMOVE_TODO, "id");
export const removeError = createAction(REMOVE_ERROR);
