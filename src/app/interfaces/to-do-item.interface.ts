import { PrioritiesEnum } from "../enums/priorities.enum";

export interface IToDoItem {
  id: string;
  title: string;
  checked: boolean;
  priority: PrioritiesEnum;
}
