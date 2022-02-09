import { combineReducers } from "redux";
import todosReducer from "./redux/todos.reducer";

const rootReducer = combineReducers({
  todos: todosReducer,
});

export default rootReducer;
