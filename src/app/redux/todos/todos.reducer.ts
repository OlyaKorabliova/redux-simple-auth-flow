import uniqid from "uniqid";
import { PrioritiesEnum } from "../../enums/priorities.enum";
import {
  ADD_TODO,
  REMOVE_ERROR,
  REMOVE_TODO,
  TOGGLE_TODO,
} from "../actionTypes";
import { createReducer } from "../utils/createReducer";

const initialState = {
  items: [
    {
      id: "1",
      title: "read a book",
      checked: true,
      priority: PrioritiesEnum.Low,
    },
    {
      id: "2",
      title: "make an exercise",
      checked: false,
      priority: PrioritiesEnum.High,
    },
    {
      id: "3",
      title: "rock it",
      checked: false,
      priority: PrioritiesEnum.Middle,
    },
  ],
  error: null,
};

const todosReducer = createReducer(initialState, {
  [TOGGLE_TODO]: (state, action) => {
    const index = state.items.findIndex((todo) => todo.id === action.id);

    const todo = {
      ...state.items[index],
      checked: action.checked,
    };

    return {
      ...state,
      items: [
        ...state.items.slice(0, index),
        todo,
        ...state.items.slice(index + 1),
      ],
    };
  },
  [REMOVE_TODO]: (state, action) => {
    const newTodos = state.items.filter((todo) => todo.id !== action.id);
    return {
      ...state,
      items: newTodos,
    };
  },
  [ADD_TODO.SUCCESS]: (state, action) => {
    const newTodo = {
      ...action.payload.todo,
      checked: false,
      id: uniqid(),
    };

    return {
      ...state,
      items: [...state.items, newTodo],
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
