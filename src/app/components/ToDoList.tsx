import { useDispatch, useSelector } from "react-redux";
import { IToDoItem } from "../interfaces/to-do-item.interface";
import NewToDo from "./NewToDo";
import ToDoItem from "./ToDoItem";
import ViewFilter from "./ViewFilter";
import * as todosSelectors from "../redux/todos/todos.selector";
import * as todosActions from "../redux/todos/todos.actions";
import { isVisible } from "../redux/filters/filters.selector";
import { useEffect } from "react";

const ToDoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(todosSelectors.getAllTodos);
  const error = useSelector(todosSelectors.getError);
  const isVisibleContent = useSelector(isVisible);
  const isLoading = useSelector(todosSelectors.isTodosLoading);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    dispatch(todosActions.getTodos());
  };

  const changeCallback = (id: string, checked: boolean) => {
    dispatch(todosActions.toggleTodo(id, checked));
  };

  const removeCallback = (id: string) => {
    dispatch(todosActions.removeTodo(id));

    if (error) {
      dispatch(todosActions.removeError());
    }
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
    dispatch(todosActions.addTodo(todo));
  };

  return (
    <div>
      <ViewFilter />
      {isVisibleContent ? (
        <>
          <NewToDo saveCallback={onSaveNewTodo} />
          {!isLoading ? (
            <>
              {todos.map(renderTodoItem)}
              {error ? <h3 style={{ color: "red" }}>{error}</h3> : null}
            </>
          ) : (
            <h5>Todos are loading...</h5>
          )}
        </>
      ) : null}
    </div>
  );
};

export default ToDoList;
