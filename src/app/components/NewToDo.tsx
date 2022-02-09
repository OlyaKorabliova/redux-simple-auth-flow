import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PrioritiesEnum } from "../enums/priorities.enum";
import { IPriorityOption } from "../interfaces/priority-option.interface";
import { removeError } from "../redux/todos/todos.actions";
import { getError } from "../redux/todos/todos.selector";
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
  const dispatch = useDispatch();
  const error = useSelector(getError);
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState(PrioritiesEnum.Low);

  const onInputChange = ({ target: { value } }) => {
    setTitle(value);

    if (error) {
      dispatch(removeError());
    }
  };

  const onAddClick = () => {
    if (title.length) {
      saveCallback({
        title,
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
