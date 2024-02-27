import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Consultant } from '../../interfaces/consultant';

@Component({
  selector: 'shared-consultants',
  templateUrl: './consultants.component.html',
  styleUrl: './consultants.component.sass'
})
export class ConsultantsComponent implements OnInit {

  public consultants!: Consultant[];
  public whatsAppUrl: string = "https://wa.me/+522222124995?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20sus%20servicios";
  public backgroundImage: string = 'linear-gradient(rgba(34, 83, 131, 0.8), rgba(34, 83, 131, 0.8)),url("assets/services.png")';

  public customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    margin: 30,
    items: 2,
    nav: false
  }

  constructor(private http: HttpClient) { }


  ngOnInit() {
    this.http.get<Consultant[]>('/assets/data/consultants.json').subscribe(data => {
      this.consultants = data;
    });
  }
}
