import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnChangesComponent } from './components/on-changes/on-changes.component';
import { OnChangesParentComponent } from './components/on-changes-parent/on-changes-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    OnChangesComponent,
    OnChangesParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
