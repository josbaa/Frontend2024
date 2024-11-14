import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { AppComponent } from '../app.component';
import { MatSliderChange } from '@angular/material/slider';


@NgModule({
  imports: [
    BrowserModule,
    MatSliderModule,
    AppComponent // Jos AppComponent on standalone
  ],
  bootstrap: []
})
export class AppModule { }

  
  
