import { Component } from '@angular/core';

@Component({
  selector: 'shared-hero-services',
  templateUrl: './hero-services.component.html',
  styleUrl: './hero-services.component.sass'
})
export class HeroServicesComponent {
  public servicesHeroImage: string = 'url("assets/services.png")';
}
