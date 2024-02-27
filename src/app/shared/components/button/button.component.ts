import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.sass'
})
export class ButtonComponent {

  @Input() imagePath!: string;
  @Input() imageAlt!: string;
  @Input() title!: string;

}
