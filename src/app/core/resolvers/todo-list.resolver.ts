import { TodoService } from 'src/app/core/services/http/todo.service';
import { ApiPagination } from 'src/app/core/models/api-pagination.model';
import { Todo } from 'src/app/core/models/todo.model';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TodoListResolver implements Resolve<Todo> {
  constructor(private todoService: TodoService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return this.todoService.list();
  }
}
