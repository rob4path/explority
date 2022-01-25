import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  email: string;
  password: string;
  hide = true;
  error: string = 'heeeeei';
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  async login() {
    await this.authService.login(this.email, this.password);
    location.reload();
    console.log(this.form);
  }
}
