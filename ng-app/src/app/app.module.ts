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
import { UserService } from './_Services/user.service';
import { LoginService } from './_Services/login.service';
import { AuthGuard } from './_Auth/auth-guard.service';
import { AuthService } from './_Auth/auth.service';

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
  providers: [UserService, LoginService, AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
