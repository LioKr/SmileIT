import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerReviewCommentaryComponent } from './customer-review-commentary/customer-review-commentary.component';
import { CustomerReviewSmileyComponent } from './customer-review-smiley/customer-review-smiley.component';
import { CustomerReviewThanksComponent } from './customer-review-thanks/customer-review-thanks.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';

const routes: Routes = [
  {path: 'vote', component: CustomerReviewSmileyComponent},
  {path: 'thanks', component: CustomerReviewThanksComponent},
  // {path: 'auth', component: AuthComponent},
  {path: 'comment', component: CustomerReviewCommentaryComponent},
  {path: '', component: CustomerReviewSmileyComponent},
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
