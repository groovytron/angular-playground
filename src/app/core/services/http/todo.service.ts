import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiPaginationInterface } from './interfaces/api-pagination.interface';
import { ApiPagination } from '../../models/api-pagination.model';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { TodoSerializer } from './serializers/todo.serializer';
import { Todo } from '../../models/todo.model';
import { TodoInterface } from './interfaces/todo.interface';

import { getTodoPageMock } from 'src/app/core/mocks/todo.mock';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient, private serializer: TodoSerializer) { }

  list(params: any = {}): Observable<ApiPagination<Todo>> {
    return (of(getTodoPageMock(params)) as Observable<ApiPaginationInterface<TodoInterface>>).pipe(
      map((pagination: ApiPaginationInterface<TodoInterface>) => {
        return new ApiPagination<Todo>({
          count: pagination.count,
          previous: pagination.previous,
          current: pagination.current,
          next: pagination.next,
          last: pagination.last,
          items: this.serializer.serializeMany(pagination.items)
        });
      }),
      delay(2000)
    );
  }
}
