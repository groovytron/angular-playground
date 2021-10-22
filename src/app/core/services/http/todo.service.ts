import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { ApiPagination } from '../../models/api-pagination.model';
import { ApiPaginationInterface } from './interfaces/api-pagination.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaginationParameters } from './http.parameters';
import { Todo } from '../../models/todo.model';
import { TodoInterface } from './interfaces/todo.interface';
import { TodoSerializer } from './serializers/todo.serializer';

import { getTodoPageMock } from 'src/app/core/mocks/todo.mock';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient, private serializer: TodoSerializer) {}

  list(params: PaginationParameters = {}): Observable<ApiPagination<Todo>> {
    return of(getTodoPageMock(params)).pipe(
      map((pagination: ApiPaginationInterface<TodoInterface>) => {
        return new ApiPagination<Todo>({
          count: pagination.count,
          previous: pagination.previous,
          current: pagination.current,
          next: pagination.next,
          last: pagination.last,
          items: this.serializer.serializeMany(pagination.items),
        });
      }),
      delay(2000)
    );
  }
}
