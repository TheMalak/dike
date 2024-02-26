import { Component } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.sass'
})
export class HomePageComponent {
  public backgroungImage: string = 'url("assets/hero.png")';
  public servicesHeroImage: string = 'url("assets/services.png")';
}
