import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgClientPaginationModule } from 'ng-client-pagination';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgClientPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
