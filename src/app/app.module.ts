import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {PellModule} from './modules/pell/pell.module';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PellModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
