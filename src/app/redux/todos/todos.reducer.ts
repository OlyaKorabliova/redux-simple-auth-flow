import uniqid from "uniqid";
import { PrioritiesEnum } from "../enums/priorities.enum";
import {
  ADD_TODO,
  REMOVE_ERROR,
  REMOVE_TODO,
  TOGGLE_TODO,
} from "./actionTypes";

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

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_TODO: {
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
    }
    case REMOVE_TODO: {
      const newTodos = state.items.filter((todo) => todo.id !== action.id);
      return {
        ...state,
        items: newTodos,
      };
    }
    case ADD_TODO.SUCCESS: {
      const newTodo = {
        ...action.todo,
        checked: false,
        id: uniqid(),
      };

      return {
        ...state,
        items: [...state.items, newTodo],
      };
    }
    case ADD_TODO.ERROR: {
      const message = `Only ${action.limit} Todos allowed!`;

      return {
        ...state,
        error: message,
      };
    }
    case REMOVE_ERROR: {
      return {
        ...state,
        error: null,
      };
    }
    default:
      return state;
  }
};

export default todosReducer;
