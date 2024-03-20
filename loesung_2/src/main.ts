import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { LowerCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';


bootstrapApplication(AppComponent, {
    providers: [importProvidersFrom(BrowserModule, FormsModule, LowerCasePipe)]
})
  .catch(err => console.error(err));
