import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFromComponent } from './login-from/login-from.component';
import { NavBarHeaderComponent } from './nav-bar-header/nav-bar-header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFromComponent,
    NavBarHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
