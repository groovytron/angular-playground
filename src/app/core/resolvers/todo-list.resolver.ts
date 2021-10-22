import { ApiPagination } from 'src/app/core/models/api-pagination.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resolve } from '@angular/router';
import { Todo } from 'src/app/core/models/todo.model';
import { TodoService } from 'src/app/core/services/http/todo.service';

@Injectable({ providedIn: 'root' })
export class TodoListResolver implements Resolve<ApiPagination<Todo>> {
  constructor(private todoService: TodoService) {}

  resolve(): Observable<ApiPagination<Todo>> {
    return this.todoService.list();
  }
}
