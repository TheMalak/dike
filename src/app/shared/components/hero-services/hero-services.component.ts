import { Component } from '@angular/core';
import { DikeServicesService } from '../../services/dike-services.service';

@Component({
  selector: 'shared-hero-services',
  templateUrl: './hero-services.component.html',
  styleUrl: './hero-services.component.sass'
})
export class HeroServicesComponent {

  public servicesHeroImage: string = 'url("assets/services.png")';
  public activeIndex: number = 0;

  constructor(
    private dikeService: DikeServicesService) { }

  ngOnInit(): void {
    this.dikeService.dataChanged$.subscribe(() => {
      this.activeIndex = this.dikeService.activeIndex;
    });
  }

  changeService(index: number) {
    this.dikeService.setCurrentServiceByIndex(index);
  }

  scroll(data: string) {
    let el = document.getElementById(data);
    el!.scrollIntoView({ behavior: 'smooth' });
  }

}
