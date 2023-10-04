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
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    CostumerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
