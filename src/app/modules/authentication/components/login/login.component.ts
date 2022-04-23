import { Router } from '@angular/router';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ResponseLoginMutation } from 'src/utils/mutations/responses';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [Validators.required, Validators.minLength(6), Validators.maxLength(40)]
    ]
  });
  submitted = false;
  loading = false;

  constructor(
    protected authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private toastrService: NbToastrService
  ) {}

  saveUserData(data: ResponseLoginMutation) {
    this.authService.saveUserData(data);
  }

  login(): void {
    this.submitted = true;
    this.loading = true;

    this.authService.login(this.loginForm.value).subscribe({
      next: ({ data, loading }) => {
        if (!(data === undefined || data === null)) {
          this.saveUserData(data);
        }
      },
      error: (err) => {
        this.loading = false;
        this.toastrService.show(err.message, 'Error', {
          duration: 3000,
          status: 'danger'
        });

        console.error(err);
      },
      complete: () => {
        this.loading = false;
        this.router.navigate(['/']);
      }
    });
  }
}
