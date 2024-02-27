import { Component } from '@angular/core';

@Component({
  selector: 'shared-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.sass'
})
export class FooterComponent {
  public headerLogo: string = 'assets/logo.png';

  scroll(data: string) {
    let el = document.getElementById(data);
    el!.scrollIntoView({ behavior: 'smooth' });
  }
}
