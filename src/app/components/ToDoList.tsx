import { useDispatch, useSelector } from "react-redux";
import { IToDoItem } from "../interfaces/to-do-item.interface";
import NewToDo from "./NewToDo";
import ToDoItem from "./ToDoItem";
import ViewFilter from "./ViewFilter";
import { getAllTodos, getError } from "../redux/todos/todos.selector";
import {
  addTodo,
  removeError,
  removeTodo,
  toggleTodo,
} from "../redux/todos/todos.actions";
import { isVisible } from "../redux/filters/filters.selector";

const ToDoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => getAllTodos(state));
  const error = useSelector(getError);
  const isVisibleContent = useSelector(isVisible);

  const changeCallback = (id: string, checked: boolean) => {
    dispatch(toggleTodo(id, checked));
  };

  const removeCallback = (id: string) => {
    dispatch(removeTodo(id));
    dispatch(removeError());
  };

  const renderTodoItem = (todo: IToDoItem) => {
    return (
      <ToDoItem
        key={todo.id}
        id={todo.id}
        changeCallback={changeCallback}
        removeCallback={removeCallback}
      />
    );
  };

  const onSaveNewTodo = (todo: IToDoItem) => {
    dispatch(addTodo(todo));
  };

  return (
    <div>
      <ViewFilter />
      {isVisibleContent ? (
        <>
          <NewToDo saveCallback={onSaveNewTodo} />
          {todos.map(renderTodoItem)}
          {error ? <h3 style={{ color: "red" }}>{error}</h3> : null}
        </>
      ) : null}
    </div>
  );
};

export default ToDoList;
