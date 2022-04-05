import { ResponseSignUpMutation } from './../../../../../utils/mutations/responses';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm = this.fb.group({
    email: [''],
    password: [''],
    name: [''],
    lastName: [''],
    telephoneNumber: [''],
    address: ['']
  });
  errors: string[] = [];

  constructor(
    protected authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  saveUserDataRegister(data: ResponseSignUpMutation) {
    this.authService.saveUserDataRegister(data);
  }

  register(): void {
    this.authService.signup(this.registerForm.value).subscribe({
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
