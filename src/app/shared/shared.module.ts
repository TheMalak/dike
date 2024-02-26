import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { HeroServicesComponent } from './components/hero-services/hero-services.component';
import { AboutComponent } from './components/about/about.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    HeroServicesComponent,
    AboutComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    HeroServicesComponent,
    AboutComponent
  ]
})
export class SharedModule { }
