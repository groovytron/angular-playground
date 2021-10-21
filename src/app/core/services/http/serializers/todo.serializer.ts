import { Injectable } from '@angular/core';
import { AbstractSerializer } from './abstract-serializer';
import { Todo } from '../../../models/todo.model';
import { TodoInterface } from '../interfaces/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoSerializer extends AbstractSerializer<TodoInterface, Todo> {
  serialize(input: TodoInterface): Todo {
    return new Todo(input);
  }

  deserialize(input: Todo): TodoInterface {
    return {
      name: input.name,
      description: input.description,
      id: input.id,
      owner: input.owner
    };
  }
}
