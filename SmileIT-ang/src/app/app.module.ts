import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './_helpers/jwt-interceptor.model';
import {ErrorInterceptor } from './_helpers/error-interceptor.model';

// import { MatToolbarModule,
//    MatIconModule, 
//    MatSidenavModule, 
//    MatListModule, 
//    MatButtonModule } from  '@angular/material';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';


import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { CustomerOpinionDetailsComponent } from './customer-opinion-details/customer-opinion-details.component';
import { CustomerOpinionDetailFormComponent } from './customer-opinion-details/customer-opinion-detail-form/customer-opinion-detail-form.component';
import { VoteSmileyComponent } from './customer-opinion/vote-smiley/vote-smiley.component';
import { VoteThanksComponent } from './customer-opinion/vote-thanks/vote-thanks.component';
import { LoginComponent } from './login/login.component';
// feature/jy_CustomersOpinionsAverage
import { CustomerOpinionAverageBetweenTwoDateDetailsComponent } from './customer-opinion-details/customer-opinion-average-between-two-date-details/customer-opinion-average-between-two-date-details.component';
import { CustomerOpinionAverageBetweenTwoDateFormComponent } from './customer-opinion-details/customer-opinion-average-between-two-date-details/customer-opinion-average-between-two-date-form/customer-opinion-average-between-two-date-form.component';
import { CustomerOpinionDetailsReadListBetweenTwoDateComponent } from './customer-opinion-details/customer-opinion-details-read-list-between-two-date/customer-opinion-details-read-list-between-two-date.component';
import { CustomerOpinionDetailsReadListBetweenTwoDateFormComponent } from './customer-opinion-details/customer-opinion-details-read-list-between-two-date/customer-opinion-details-read-list-between-two-date-form/customer-opinion-details-read-list-between-two-date-form.component';
import { CustomerOpinionListComponent } from './customer-opinion-list/customer-opinion-list.component';

import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UserDetailFormComponent } from './users/user-details/user-detail-form/user-detail-form.component';
import { FourOhOneComponent } from './four-oh-one/four-oh-one.component';
import { NumberToSmileyLogoPipe } from './pipes/number-to-smiley-logo.pipe';





@NgModule({
  declarations: [
    AppComponent,
    FourOhFourComponent,
    CustomerOpinionDetailsComponent,
    CustomerOpinionDetailFormComponent,
    VoteSmileyComponent,
    VoteThanksComponent,
    LoginComponent,
//feature/jy_CustomersOpinionsAverage
    CustomerOpinionAverageBetweenTwoDateDetailsComponent,
    CustomerOpinionAverageBetweenTwoDateFormComponent,
    CustomerOpinionDetailsReadListBetweenTwoDateComponent,
    CustomerOpinionDetailsReadListBetweenTwoDateFormComponent,
    CustomerOpinionListComponent,
    UserDetailsComponent,
    UserDetailFormComponent,
    FourOhOneComponent,
    NumberToSmileyLogoPipe
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
    MatIconModule,
    MatCardModule,
    MatInputModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
