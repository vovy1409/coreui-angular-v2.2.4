import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
    message = '';
    userName = '';
    password = '';
    constructor(private userSerivce: UserService, private router: Router) {}
    login() {
      this.userSerivce.login(this.userName, this.password)
        .subscribe(result => {
          if (result.errorCode === 1) {
          this.message = result.errorMessage;
          } else {
            this.message = '';
            this.router.navigate(['/dashboard']);
          }
        });
    }
 }
