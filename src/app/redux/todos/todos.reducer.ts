import uniqid from "uniqid";
import { PrioritiesEnum } from "../../enums/priorities.enum";
import {
  ADD_TODO,
  GET_TODOS,
  REMOVE_ERROR,
  REMOVE_TODO,
  TOGGLE_TODO,
} from "../actionTypes";
import { createReducer } from "../utils/createReducer";

const initialState = {
  items: [],
  error: null,
  isLoading: false,
};

const todosReducer = createReducer(initialState, {
  [GET_TODOS.REQUEST]: (state) => {
    return {
      ...state,
      isLoading: true,
    };
  },
  [GET_TODOS.SUCCESS]: (state, action) => {
    return {
      ...state,
      items: action.payload.data,
      isLoading: false,
    };
  },
  [TOGGLE_TODO.SUCCESS]: (state, action) => {
    const { data } = action.payload;

    const index = state.items.findIndex((todo) => todo.id === data.id);

    return {
      ...state,
      items: [
        ...state.items.slice(0, index),
        data,
        ...state.items.slice(index + 1),
      ],
    };
  },
  [REMOVE_TODO.SUCCESS]: (state, action) => {
    const newTodos = state.items.filter(
      (todo) => todo.id !== action.payload.id
    );
    return {
      ...state,
      items: newTodos,
    };
  },
  [ADD_TODO.SUCCESS]: (state, action) => {
    return {
      ...state,
      items: [...state.items, action.payload.data],
    };
  },
  [ADD_TODO.ERROR]: (state, action) => {
    const message = `Only ${action.payload.limit} Todos allowed!`;

    return {
      ...state,
      error: message,
    };
  },
  [REMOVE_ERROR]: (state) => {
    return {
      ...state,
      error: null,
    };
  },
});

export default todosReducer;
