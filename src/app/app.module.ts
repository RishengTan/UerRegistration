import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ChartsModule } from "ng2-charts";
import { FormsModule } from "@angular/forms";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserService } from './shared/user.service';
import { UsersigninComponent } from './usersignin/usersignin.component';
import { HomeComponent } from './home/home.component';
import { Authinterceptor } from './authinterceptor';
import { PasswordchangeComponent } from './passwordchange/passwordchange.component';
import { HeroService } from './shared/hero.service';
import { AddheroComponent } from './addhero/addhero.component';
import { SearchResultComponent } from './search-result/search-result.component';



import { SmarttableModule } from './smarttable/smarttable.module';




@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    UsersigninComponent,
    HomeComponent,
    PasswordchangeComponent,
    AddheroComponent,
    SearchResultComponent,
   
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartsModule,
    FormsModule,
    SmarttableModule
   
  ],
  
  providers: [HeroService,UserService,{
    provide: HTTP_INTERCEPTORS,
    useClass: Authinterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
