import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() applicationName = 'Application Name';
  @Input() applicationLogoUrl = '/assets/images/logo.jpg';
}
