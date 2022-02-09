import { useSelector } from "react-redux";
import { PrioritiesEnum } from "../enums/priorities.enum";
import { getTodoById } from "../redux/todos/todos.selector";
import "../styles/ToDoItem.css";

interface IToDoItemProps {
  id: string;
  changeCallback: (id: string, checked: boolean) => void;
  removeCallback: (id: string) => void;
}

const ToDoItem = ({ id, changeCallback, removeCallback }: IToDoItemProps) => {
  const todo = useSelector((state) => getTodoById(state, id));

  const onChange = ({ target: { value, checked } }) => {
    changeCallback(value, checked);
  };

  const onRemove = () => {
    removeCallback(id);
  };

  return (
    <div style={{ display: "flex", margin: 8 }}>
      <button onClick={onRemove}>-</button>
      <label>
        <input
          type="checkbox"
          onChange={onChange}
          value={id}
          checked={todo.checked}
        />
        <div
          className={`priority ${PrioritiesEnum[todo.priority].toLowerCase()}`}
        />
        {todo.title}
      </label>
    </div>
  );
};

export default ToDoItem;
