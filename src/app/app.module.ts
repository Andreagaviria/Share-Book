import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//Módulos
import { SharedModule } from '../app/shared/shared.module'
import { AppRoutingModule } from './app-routing.module';
import { BookModule } from './book/book.module';


import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [BrowserModule, AppRoutingModule,  SharedModule, BookModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
