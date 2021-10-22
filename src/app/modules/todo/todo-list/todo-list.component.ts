import { ActivatedRoute } from '@angular/router';
import { ApiPagination } from 'src/app/core/models/api-pagination.model';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';
import { Todo } from 'src/app/core/models/todo.model';
import { TodoService } from 'src/app/core/services/http/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  todosPagination: ApiPagination<Todo> = new ApiPagination<Todo>();
  todosDataSource: MatTableDataSource<Todo> = new MatTableDataSource<Todo>([]);
  isLoading = false;

  readonly columns: string[] = ['id', 'name'];

  constructor(
    private activeRoute: ActivatedRoute,
    private todoService: TodoService
  ) {
    this.updatePagination(this.activeRoute.snapshot.data.todos);
  }

  updatePagination = (pagination: ApiPagination<Todo>): void => {
    this.todosPagination = pagination;
    this.todosDataSource.data = pagination.items;
    this.isLoading = false;
  };

  onPageChange(event: PageEvent): void {
    this.isLoading = true;

    this.todoService
      .list({
        page: event.pageIndex + 1,
      })
      .subscribe(this.updatePagination);
  }
}
