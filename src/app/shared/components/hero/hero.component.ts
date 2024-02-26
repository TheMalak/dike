import { Component } from '@angular/core';

@Component({
  selector: 'shared-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.sass'
})
export class HeroComponent {
  public backgroungImage: string = 'url("assets/hero.png")';
}
