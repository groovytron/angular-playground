import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListResolver } from 'src/app/core/resolvers/todo-list.resolver';

const routes: Routes = [
  {
    path: '',
    component: TodoListComponent,
    resolve: {
      todos: TodoListResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoRoutingModule {}
