import { IToDoItem } from "../../interfaces/to-do-item.interface";
import {
  ADD_TODO,
  REMOVE_ERROR,
  REMOVE_TODO,
  TOGGLE_TODO,
} from "../actionTypes";

const LIMIT = 3;

export function addTodo(todo: IToDoItem) {
  return function (dispatch, getState) {
    if (getState().todos.items.length >= LIMIT) {
      dispatch({
        type: ADD_TODO.ERROR,
        limit: LIMIT,
      });
    } else {
      dispatch({
        type: ADD_TODO.SUCCESS,
        todo,
      });
    }
  };
}

export function toggleTodo(id: string, checked: boolean) {
  return {
    type: TOGGLE_TODO,
    id,
    checked,
  };
}

export function removeTodo(id: string) {
  return {
    type: REMOVE_TODO,
    id,
  };
}

export function removeError() {
  return {
    type: REMOVE_ERROR,
  };
}
