import { ResponseSignUpMutation } from './../../../../../utils/mutations/responses';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { ResponseLoginMutation } from 'src/utils/mutations/responses';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  showMessages = {};
  errors: string[] = [];
  messages: string[] = [];
  submitted = false;
  rememberMe = false;
  redirectDelay = 0;
  user = {
    email: '',
    password: '',
    name: '',
    lastName: '',
    phone: '',
    address: ''
  };

  constructor(protected authService: AuthService, private router: Router) {}

  saveUserDataRegister(data: ResponseSignUpMutation) {
    this.authService.saveUserDataRegister(data);
  }

  register(): void {
    this.authService
      .signup(
        this.user.email,
        this.user.password,
        this.user.name,
        this.user.lastName,
        this.user.phone,
        this.user.address
      )
      .subscribe({
        next: ({ data }) => {
          if (!(data === undefined || data === null)) {
            this.saveUserDataRegister(data);
          }
        },
        error: (err) => {
          console.error(err);
          this.errors.push(err);
        },
        complete: () => {
          this.router.navigate(['/']);
        }
      });
  }
}
