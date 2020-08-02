import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HiComponent } from './component/hi/hi.component';
import { ItemDetailComponent } from './component/item-detail/item-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    HiComponent,
    ItemDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
