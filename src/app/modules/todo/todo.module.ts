import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoListComponent } from './todo-list/todo-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    TodoListComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class TodoModule { }
