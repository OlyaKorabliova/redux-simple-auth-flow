import { useState } from "react";
import { PrioritiesEnum } from "../enums/priorities.enum";
import { IToDoItem } from "../interfaces/to-do-item.interface";
import NewToDo from "./NewToDo";
import ToDoItem from "./ToDoItem";

const TODOS: IToDoItem[] = [
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
];

const ToDoList = () => {
  const [todos, setTodos] = useState(TODOS);

  const changeCallback = (id: string, checked: boolean) => {
    const index = todos.findIndex((todo) => todo.id === id);

    const todo = {
      ...todos[index],
      checked: checked,
    };

    const newTodos = [
      ...todos.slice(0, index),
      todo,
      ...todos.slice(index + 1),
    ];

    setTodos(newTodos);
  };

  const removeCallback = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);

    setTodos(newTodos);
  };

  const renderTodoItem = (todo: IToDoItem) => {
    return (
      <ToDoItem
        key={todo.id}
        data={todo}
        changeCallback={changeCallback}
        removeCallback={removeCallback}
      />
    );
  };

  const onSaveNewTodo = (todo: IToDoItem) => {
    setTodos([...todos, todo]);
  };

  return (
    <div>
      <NewToDo saveCallback={onSaveNewTodo} />
      {todos.map(renderTodoItem)}
    </div>
  );
};

export default ToDoList;
