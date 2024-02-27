import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { HeroServicesComponent } from './components/hero-services/hero-services.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ConsultantsComponent } from './components/consultants/consultants.component';
import { ButtonComponent } from './components/button/button.component';
import { CardConsultantComponent } from './components/card-consultant/card-consultant.component';
import { ContactComponent } from './components/contact/contact.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    HeroServicesComponent,
    AboutComponent,
    ServicesComponent,
    ConsultantsComponent,
    ButtonComponent,
    CardConsultantComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CarouselModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    HeroServicesComponent,
    AboutComponent,
    ServicesComponent,
    ConsultantsComponent,
    ContactComponent
  ]
})
export class SharedModule { }
