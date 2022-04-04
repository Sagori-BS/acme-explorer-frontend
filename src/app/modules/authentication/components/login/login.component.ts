import { Router } from '@angular/router';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ResponseLoginMutation } from 'src/utils/mutations/responses';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  showMessages = {};
  errors: string[] = [];
  messages: string[] = [];
  submitted = false;
  rememberMe = false;
  redirectDelay = 0;
  user = {
    email: '',
    password: ''
  };

  constructor(protected authService: AuthService, private router: Router) {}

  saveUserData(data: ResponseLoginMutation) {
    this.authService.saveUserData(data);
  }

  login(): void {
    this.authService.login(this.user.email, this.user.password).subscribe({
      next: ({ data }) => {
        if (!(data === undefined || data === null)) {
          this.saveUserData(data);
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
