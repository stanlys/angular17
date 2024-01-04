import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CardsComponent } from './components/cards/cards.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, CardsComponent],
  providers: [],
  bootstrap: [AppComponent],
  exports: [CardsComponent],
})
export class AppModule {}
