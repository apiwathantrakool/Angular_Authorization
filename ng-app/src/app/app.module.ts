import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './Services/user.service';
import { LoginService } from './Services/login.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NewsFeedComponent,
    ProfileComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UserService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
