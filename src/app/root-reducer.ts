import { combineReducers } from "redux";
import todosReducer from "./redux/todos/todos.reducer";
import filtersReducer from "./redux/filters/filters.reducer";

const rootReducer = combineReducers({
  todos: todosReducer,
  filters: filtersReducer,
});

export default rootReducer;
