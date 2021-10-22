import {
  ActivationStart,
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'todo-frontend';
  isLoading = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof ActivationStart:
        case event instanceof NavigationStart: {
          this.isLoading = true;
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.isLoading = false;
          break;
        }
        default: {
          break;
        }
      }
    });
  }
}
