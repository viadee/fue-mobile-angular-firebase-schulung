import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FruitComponent} from "./fruit/fruit.component";
import {FormsModule} from "@angular/forms";
import {FruitListComponent} from "./fruit-list/fruit-list.component";
import {LowerCasePipe} from "@angular/common";


@NgModule({
  declarations: [
    AppComponent,
    FruitComponent,
    FruitListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    LowerCasePipe,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
