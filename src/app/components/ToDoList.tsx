import { useDispatch, useSelector } from "react-redux";
import { IToDoItem } from "../interfaces/to-do-item.interface";
import NewToDo from "./NewToDo";
import ToDoItem from "./ToDoItem";
import { getAllTodos } from "../redux/todos.selector";

const ToDoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => getAllTodos(state));

  const changeCallback = (id: string, checked: boolean) => {
    dispatch({
      type: "TOGGLE_TODO",
      id,
      checked,
    });
  };

  const removeCallback = (id: string) => {
    dispatch({
      type: "REMOVE_TODO",
      id,
    });
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
    dispatch({
      type: "ADD_TODO",
      todo,
    });
  };

  return (
    <div>
      <NewToDo saveCallback={onSaveNewTodo} />
      {todos.map(renderTodoItem)}
    </div>
  );
};

export default ToDoList;
