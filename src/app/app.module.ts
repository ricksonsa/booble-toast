import { BoobleToastModule } from './../../projects/booble-toast/src/lib/booble-toast.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BoobleToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
