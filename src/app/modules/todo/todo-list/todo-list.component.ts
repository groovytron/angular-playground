import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.activeRoute.snapshot.data.todos);
  }

}
