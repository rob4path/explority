import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  nickName: string;
  email: string;
  password: string;
  hide = true;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  async register() {
    const { user, authToken } = await this.authService.register(
      this.email,
      this.password,
      this.nickName
    );
    console.log(user);
    console.log(authToken);
    location.reload();
  }
}
