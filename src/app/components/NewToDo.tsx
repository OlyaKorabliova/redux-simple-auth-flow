import { useState } from "react";
import { PrioritiesEnum } from "../enums/priorities.enum";
import { IPriorityOption } from "../interfaces/priority-option.interface";
import "../styles/NewToDo.css";

const PRIORITIES: IPriorityOption[] = [
  {
    value: PrioritiesEnum.Low,
    name: "Low",
  },
  {
    value: PrioritiesEnum.Middle,
    name: "Middle",
  },
  {
    value: PrioritiesEnum.High,
    name: "High",
  },
];

const NewToDo = ({ saveCallback }) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState(PrioritiesEnum.Low);

  const onInputChange = ({ target: { value } }) => {
    setTitle(value);
  };

  const onAddClick = () => {
    if (title.length) {
      saveCallback({
        id: 4,
        title,
        isDone: false,
        priority,
      });

      setTitle("");
      setPriority(PrioritiesEnum.Low);
    }
  };

  const renderOption = (opt: IPriorityOption) => {
    return (
      <option value={opt.value} key={opt.value}>
        {opt.name}
      </option>
    );
  };

  const onSelect = ({ target: { value } }) => {
    setPriority(value);
  };

  return (
    <div className="container">
      <input type="text" value={title} onChange={onInputChange} />
      <select value={priority} onChange={onSelect}>
        {PRIORITIES.map(renderOption)}
      </select>
      <button disabled={!title.length} onClick={onAddClick}>
        Add!
      </button>
    </div>
  );
};

export default NewToDo;
