import { CookieService } from 'ngx-cookie-service';
import { NotificationService } from '@progress/kendo-angular-notification';
import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputsModule, ReactiveFormsModule, ButtonsModule , TranslateModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage = '';
  message: string;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private notificationService: NotificationService,
    private translate: TranslateService,
    private CookieService: CookieService
  ) {
    this.translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      this.authService.login(username, password).subscribe(
        (response) => {
          localStorage.setItem('userData', JSON.stringify(response?.users));
          localStorage.setItem('token', response?.sessionToken);
          this.CookieService.set('jwt',response?.sessionToken);
          this.message = response.message;
          this.notificationService.show({
            content: this.message,
            cssClass: 'k-notification k-notification-success',
            animation: { type: 'fade', duration: 400 },
            width: 300,
            height:50
          });
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          this.errorMessage = 'Invalid credentials. Please try again.';
          this.notificationService.show({
            content: error.error.message,
            cssClass: 'k-notification k-notification-error',
            animation: { type: 'fade', duration: 400 },
            width: 300,
            height:50
          });
        }
      );
    } else {
      this.errorMessage = 'Please fill out the form correctly.';
      this.notificationService.show({
        content: this.errorMessage,
        cssClass: 'k-notification k-notification-error',
        animation: { type: 'fade', duration: 400 },
        width: 300,
        height:50
      });
    }
  }
}
