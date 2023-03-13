import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@NgModule({
  
  
  declarations: [
        AppComponent,
        HelloComponent
       ],

  imports:      [ 
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule, 

  ],

  bootstrap:    [ AppComponent ]
}

)
export class AppModule { }
