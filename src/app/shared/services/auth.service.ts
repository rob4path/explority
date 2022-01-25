import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user-model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenSubject: Subject<string> = new ReplaySubject(1);

  get token$(): Observable<string> {
    return this.tokenSubject.asObservable();
  }

  private userSubject: BehaviorSubject<User> = new BehaviorSubject(null);

  get user$(): Observable<User> {
    return this.userSubject.asObservable();
  }

  get user(): User {
    return this.userSubject.value;
  }

  private token: string;

  constructor(private router: Router, private http: HttpClient) {
    this.getDataFromStorage();
  }

  getDataFromStorage() {
    const token =
      sessionStorage.getItem('authToken') || localStorage.getItem('authToken');
    const user = JSON.parse(
      sessionStorage.getItem('user') || localStorage.getItem('user')
    );

    // If the user has saved auth data with the old user model
    if (user) {
      if (!user.role && user.type) user.role = user.type;
    }
    this.tokenSubject.next(token || null);
    this.token = token;
    this.userSubject.next(user);
  }

  isLoggedIn() {
    return !!this.token;
  }

  private handleLoginResponse(
    resp: { user: User; authToken: string },
    rememberMe = true
  ) {
    const { user, authToken } = resp;

    if (rememberMe) {
      localStorage.setItem('authToken', authToken);
      localStorage.setItem('user', JSON.stringify(user));
    }
    sessionStorage.setItem('authToken', authToken);
    sessionStorage.setItem('user', JSON.stringify(user));
    this.tokenSubject.next(authToken);
    this.token = authToken;
    this.userSubject.next(user);
  }

  async logout() {
    await this.http
      .post('/auth/logout', {}, { responseType: 'text' })
      .toPromise();
    this.clearLocalStorage();
  }

  async clearLocalStorage() {
    sessionStorage.clear();
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    this.tokenSubject.next(null);
    this.userSubject.next(null);
    this.token = null;
    await this.router.navigateByUrl('/');
  }

  async login(email: string, password: string) {
    const response = await this.http
      .post<{ user: User; authToken: string }>(`/auth/login`, {
        email,
        password,
      })
      .toPromise();
    console.log('POST login', email, password);
    localStorage.setItem('authToken', response.authToken);
    await this.router.navigateByUrl('/');
    return response;
  }

  async register(email: string, password: string, firstName?: string) {
    const response = await this.http
      .post<{ user: User; authToken: string }>(`/auth/register`, {
        email,
        password,
        firstName,
      })
      .toPromise();
    console.log('POST register', email, password);
    await this.router.navigateByUrl('/');

    localStorage.setItem('authToken', response.authToken);

    return response;
  }

  // async logout() {
  //   const response = await this.http
  //     .post(`${environment.apiUrl}/auth/logout`, {})
  //     .toPromise();
  //   console.log('POST logout');
  //   localStorage.removeItem('authToken');
  //   return response;
  // }
}
