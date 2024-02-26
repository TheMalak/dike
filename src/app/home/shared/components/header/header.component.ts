import { Component } from '@angular/core';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})
export class HeaderComponent {
  public headerLogo: string = 'assets/logo.png';
}
