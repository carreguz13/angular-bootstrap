import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroSingUpFormComponent } from './components/hero-sing-up-form/hero-sing-up-form.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { AccordionComponent } from './components/accordion/accordion.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeContentComponent,
    FooterComponent,
    HeroSingUpFormComponent,
    PricingComponent,
    AccordionComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
