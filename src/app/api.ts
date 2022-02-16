import axios from "axios";
import { BASE_URL } from "./constants";
import { IToDoItem } from "./interfaces/to-do-item.interface";

const URL = `${BASE_URL}/todos`;

export const getTodos = async () => {
  return axios.get(URL);
};

export const addTodos = async (todo: IToDoItem) => {
  return axios.post(URL, todo);
};

export const toggleTodo = (id: string, checked: boolean) => {
  return axios.patch(`${URL}/${id}`, { checked });
};

export const removeTodo = (id: string) => {
  return axios.delete(`${URL}/${id}`);
};
