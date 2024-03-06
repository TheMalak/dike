import { Component, OnInit } from '@angular/core';
import { WindowSizeService } from '../../services/windowsize.service';

@Component({
  selector: 'shared-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.sass'
})
export class HeroComponent implements OnInit {
  public backgroungImage: string = 'url("assets/hero.png")';
  public backgroungImageMobile: string = 'url("assets/mobile-hero.jpeg")';
  public mobileBackground: boolean = false;
  constructor(private windowSizeService: WindowSizeService) { }

  ngOnInit(): void {
    this.windowSizeService.windowWidth$.subscribe((size: number) => {
      this.mobileBackground = (size < 600) ? false : true;
    });
  }

}
