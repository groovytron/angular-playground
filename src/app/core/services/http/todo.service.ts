import { ApiPagination } from '../../models/api-pagination.model';
import { ApiPaginationInterface } from './interfaces/api-pagination.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginationParameters } from './http.parameters';
import { Todo } from '../../models/todo.model';
import { TodoInterface } from './interfaces/todo.interface';
import { TodoSerializer } from './serializers/todo.serializer';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient, private serializer: TodoSerializer) {}

  list(params: PaginationParameters = {}): Observable<ApiPagination<Todo>> {
    return this.http
      .get<ApiPaginationInterface<TodoInterface>>('/api/users/username/todos', {
        params,
      })
      .pipe(
        map((pagination: ApiPaginationInterface<TodoInterface>) => {
          return new ApiPagination<Todo>({
            totalItems: pagination.totalItems,
            previous: pagination.previous,
            current: pagination.current,
            next: pagination.next,
            last: pagination.last,
            items: this.serializer.serializeMany(pagination.items),
          });
        })
      );
  }
}
