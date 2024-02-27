import { Component, OnDestroy, OnInit } from '@angular/core';
import { WindowSizeService } from '../../services/windowsize.service';
import { DikeServicesService } from '../../services/dike-services.service';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})
export class HeaderComponent implements OnInit {

  public headerLogo: string = 'assets/logo.png';
  public showMenuServices: boolean = false;

  // dike Service
  public activeIndex: number = 0;
  public servicesNames: string[] = this.dikeService.names;

  constructor(
    private dikeService: DikeServicesService,
    private windowSizeService: WindowSizeService) { }

  ngOnInit(): void {

    this.dikeService.dataChanged$.subscribe(data => {
      this.activeIndex = this.dikeService.activeIndex;
    });

    this.windowSizeService.windowWidth$.subscribe((size: number) => {
      this.showMenuServices = (size < 810) ? false : true;
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
