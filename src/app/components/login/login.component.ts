import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email : string = '';
  password : string = '';
  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private toast: HotToastService
  ) {}

  ngOnInit(): void {}

  submit() {
    this.authService
      .login(this.email, this.password)
      .pipe(
        this.toast.observe({
          success: 'Đăng nhập thành công',
          loading: 'Đang đăng nhập',
          error: 'có lỗi',
        })
      )
      .subscribe(() => {
        this.router.navigate(['/home']);
      });
  }
}
