import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { fromEventPattern } from 'rxjs';
import { AppComponent } from './app.component';

import { HiComponent } from './component/hi/hi.component';

@NgModule({
  declarations: [
    AppComponent,

    HiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
