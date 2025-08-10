import { TodoStatus } from '../enums/todo-status';

export type Todo = {
  id: string;
  name: string;
  status: TodoStatus;
};
