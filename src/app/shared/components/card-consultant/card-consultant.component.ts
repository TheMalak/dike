import { Component, Input } from '@angular/core';
import { Consultant } from '../../interfaces/consultant';

@Component({
  selector: 'shared-card-consultant',
  templateUrl: './card-consultant.component.html',
  styleUrl: './card-consultant.component.sass'
})
export class CardConsultantComponent {
  @Input() public consultant!: Consultant;
}
