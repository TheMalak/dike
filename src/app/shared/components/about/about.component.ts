import { Component } from '@angular/core';

@Component({
  selector: 'shared-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.sass'
})
export class AboutComponent {
  public aboutImage: string = 'url("assets/about.png")';
  public featuredImagePath: string = 'https://www.shutterstock.com/image-photo/well-dressed-male-fixing-his-600nw-230575147.jpg';
}
