import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CustomerReviewSmileyComponent } from './customer-review-smiley/customer-review-smiley.component';
import { CustomerReviewCommentaryComponent } from './customer-review-commentary/customer-review-commentary.component';
import { CustomerReviewThanksComponent } from './customer-review-thanks/customer-review-thanks.component';
//import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';




@NgModule({
  declarations: [
    AppComponent,
    CustomerReviewSmileyComponent,
    CustomerReviewCommentaryComponent,
    CustomerReviewThanksComponent,
    FourOhFourComponent,
    HttpClientModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
