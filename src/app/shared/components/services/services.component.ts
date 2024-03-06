import { Component, OnInit } from '@angular/core';
import { Service } from '../../interfaces/services';
import { DikeServicesService } from '../../services/dike-services.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'shared-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.sass']
})
export class ServicesComponent implements OnInit {

  public currentService!: Service;
  public activeIndex: number = 0;
  private dataSubscription!: Subscription;
  public servicesNames: string[] = this.dikeService.names;
  public whatsAppUrl: string = "https://wa.me/+522222124995?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20sus%20servicios";

  constructor(private dikeService: DikeServicesService) {
    this.currentService = {} as Service; // Inicializar currentService
  }

  ngOnInit() {
    this.dikeService.setCurrentServiceByIndex(0);
    this.currentService = this.dikeService.currentService;

    this.dataSubscription = this.dikeService.dataChanged$.subscribe(data => {
      this.currentService = this.dikeService.currentService;
      this.activeIndex = this.dikeService.activeIndex;
      console.log(this.currentService);
      console.log(this.activeIndex);
    });

  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }

  changeService(index: number) {
    this.dikeService.setCurrentServiceByIndex(index);
  }
}
