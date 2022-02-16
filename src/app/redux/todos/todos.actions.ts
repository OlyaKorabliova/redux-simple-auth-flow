import { IToDoItem } from "../../interfaces/to-do-item.interface";
import {
  ADD_TODO,
  GET_TODOS,
  REMOVE_ERROR,
  REMOVE_TODO,
  TOGGLE_TODO,
} from "../actionTypes";
import { createAction } from "../utils/createAction";
import * as api from "../../api";

export function addTodo(todo: IToDoItem) {
  return function (dispatch) {
    dispatch({
      type: ADD_TODO.REQUEST,
    });

    return api
      .addTodos({ ...todo, checked: false })
      .then((res) => {
        dispatch({
          type: ADD_TODO.SUCCESS,
          payload: {
            data: res.data,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: ADD_TODO.ERROR,
          payload: {
            error,
          },
        });
      });
  };
}

export function getTodos() {
  return function (dispatch, getState) {
    dispatch({
      type: GET_TODOS.REQUEST,
    });

    return api
      .getTodos()
      .then((res) => {
        dispatch({
          type: GET_TODOS.SUCCESS,
          payload: {
            data: res.data,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_TODOS.ERROR,
          payload: { error },
        });
      });
  };
}

export const toggleTodo =
  (id: string, checked: boolean) => (dispatch, getState) => {
    dispatch({
      type: TOGGLE_TODO.REQUEST,
    });

    return api
      .toggleTodo(id, checked)
      .then((res) => {
        dispatch({
          type: TOGGLE_TODO.SUCCESS,
          payload: {
            data: res.data,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: TOGGLE_TODO.ERROR,
          payload: { error },
        });
      });
  };

export const removeTodo = (id: string) => (dispatch) => {
  dispatch({
    type: REMOVE_TODO.REQUEST,
  });

  return api
    .removeTodo(id)
    .then((res) => {
      dispatch({
        type: REMOVE_TODO.SUCCESS,
        payload: {
          id,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: REMOVE_TODO.ERROR,
        payload: { error },
      });
    });
};

export const removeError = createAction(REMOVE_ERROR);
