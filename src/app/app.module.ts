import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroSingUpFormComponent } from './components/hero-sing-up-form/hero-sing-up-form.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CarouselComponent } from './components/carousel/carousel.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeContentComponent,
    FooterComponent,
    HeroSingUpFormComponent,
    PricingComponent,
    AccordionComponent,
    ContactComponent,
    HomeComponent,
    AboutComponent,
    CarouselComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
