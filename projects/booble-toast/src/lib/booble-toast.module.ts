import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BoobleToastComponent } from './booble-toast.component';


@NgModule({
  declarations: [BoobleToastComponent],
  entryComponents: [BoobleToastComponent],
  imports: [
    FormsModule,
    BrowserModule
  ],
  exports: [BoobleToastComponent]
})
export class BoobleToastModule { }
