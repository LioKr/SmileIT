import { Component } from '@angular/core';
import { AuthenticationService } from './shared/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SmileIT-ang';

  
  constructor(private authService:AuthenticationService) {
        
  }

  logout(){
    this.authService.logout();
  }
}
