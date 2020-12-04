import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerOpinionDetailsComponent } from './customer-opinion-details/customer-opinion-details.component';
import { VoteSmileyComponent } from './customer-opinion/vote-smiley/vote-smiley.component';
import { VoteThanksComponent } from './customer-opinion/vote-thanks/vote-thanks.component';
import { CustomerReviewCommentaryComponent } from './customer-review-commentary/customer-review-commentary.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'vote', component: VoteSmileyComponent},
  {path: 'thanks', component: VoteThanksComponent},
  { path: 'customerOpinion', component: CustomerOpinionDetailsComponent},
  {path: 'login', component: LoginComponent},
  { path: 'comment', component: CustomerReviewCommentaryComponent},
  { path: '', component: VoteSmileyComponent},
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
