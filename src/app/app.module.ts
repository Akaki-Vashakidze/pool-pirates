import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from './modules/shared/pipes/translate.pipe';
import { CostumerModule } from './modules/costumer/costumer.module';

@NgModule({
  declarations: [
    AppComponent,
    TranslatePipe
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
