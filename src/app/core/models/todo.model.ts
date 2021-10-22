interface TodoModel {
  name: string;
  description: string;
  id: number;
  owner: string;
}

export class Todo {
  name: string;
  description: string;
  id: number;
  owner: string;

  constructor(todo: TodoModel) {
    this.name = todo.name;
    this.description = todo.description;
    this.id = todo.id;
    this.owner = todo.owner;
  }
}
