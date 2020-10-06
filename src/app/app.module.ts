import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//Módulos
import { SharedModule } from '../app/shared/shared.module'
import { AppRoutingModule } from './app-routing.module';
import { BookModule } from './book/book.module';
import { AngularFireModule } from '@angular/fire'
import { environment } from '../environments/environment'


import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [BrowserModule, AppRoutingModule,  SharedModule, BookModule, 
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
