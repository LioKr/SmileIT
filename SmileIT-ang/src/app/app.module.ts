import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './_helpers/jwt-interceptor.model';
import {ErrorInterceptor } from './_helpers/error-interceptor.model';

// import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { CustomerOpinionDetailsComponent } from './customer-opinion-details/customer-opinion-details.component';
import { CustomerOpinionDetailFormComponent } from './customer-opinion-details/customer-opinion-detail-form/customer-opinion-detail-form.component';
import { VoteSmileyComponent } from './customer-opinion/vote-smiley/vote-smiley.component';
import { VoteThanksComponent } from './customer-opinion/vote-thanks/vote-thanks.component';
import { LoginComponent } from './login/login.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UserDetailFormComponent } from './users/user-details/user-detail-form/user-detail-form.component';
import { FourOhOneComponent } from './four-oh-one/four-oh-one.component';




@NgModule({
  declarations: [
    AppComponent,
    FourOhFourComponent,
    CustomerOpinionDetailsComponent,
    CustomerOpinionDetailFormComponent,
    VoteSmileyComponent,
    VoteThanksComponent,
    LoginComponent,
    UserDetailsComponent,
    UserDetailFormComponent,
    FourOhOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
