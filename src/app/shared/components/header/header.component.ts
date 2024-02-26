import { Component, OnInit } from '@angular/core';
import { WindowSizeService } from '../../services/windowsize.service';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})
export class HeaderComponent implements OnInit {

  public headerLogo: string = 'assets/logo.png';
  public showMenuServices: boolean = false;

  constructor(private windowSizeService: WindowSizeService) { }

  ngOnInit(): void {
    this.windowSizeService.windowWidth$.subscribe((size: number) => {
      this.showMenuServices = (size < 810) ? false : true;
    });
  }
}
