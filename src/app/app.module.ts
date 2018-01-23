import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BuyComponent } from './buy/buy.component';
import {SellComponent} from "./sell/sell.component";

const appRoutes: Routes = [
  { path: 'buy', component: BuyComponent },
  { path: 'sell',      component: SellComponent },
  { path: '**', component: SellComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SellComponent,
    BuyComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
