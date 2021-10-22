import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoRoutingModule } from './todo-routing.module';

@NgModule({
  declarations: [TodoListComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    MatTableModule,
    MatPaginatorModule,
  ],
})
export class TodoModule {}
