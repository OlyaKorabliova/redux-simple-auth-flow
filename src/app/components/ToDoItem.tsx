import { PrioritiesEnum } from "../enums/priorities.enum";
import { IToDoItem } from "../interfaces/to-do-item.interface";
import "../styles/ToDoItem.css";

interface IToDoItemProps {
  data: IToDoItem;
  changeCallback: (id: string, checked: boolean) => void;
  removeCallback: (id: string) => void;
}

const ToDoItem = ({ data, changeCallback, removeCallback }: IToDoItemProps) => {
  const onChange = ({ target: { value, checked } }) => {
    changeCallback(value, checked);
  };

  const onRemove = () => {
    removeCallback(data.id);
  };

  return (
    <div style={{ display: "flex", margin: 8 }}>
      <button onClick={onRemove}>-</button>
      <label>
        <input
          type="checkbox"
          onChange={onChange}
          value={data.id}
          checked={data.checked}
        />
        <div
          className={`priority ${PrioritiesEnum[data.priority].toLowerCase()}`}
        />
        {data.title}
      </label>
    </div>
  );
};

export default ToDoItem;
