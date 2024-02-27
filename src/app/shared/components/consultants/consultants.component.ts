import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'shared-consultants',
  templateUrl: './consultants.component.html',
  styleUrl: './consultants.component.sass'
})
export class ConsultantsComponent {
  public customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    items: 1,
    nav: true
  }
}
