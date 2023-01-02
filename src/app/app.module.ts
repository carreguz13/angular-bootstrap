import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeContentComponent } from './components/home-content/home-content.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeContentComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
