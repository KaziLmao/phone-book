import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public fullName = 'admin';
  private userName = 'admin';
  private password = 'admin';
  private isAuthenticated = false;

  constructor() {
    this.isAuthenticated = !!sessionStorage.getItem('token');
  }

  login(userName: string, password: string): boolean {
    if (userName === this.userName && password === this.password) {
      this.isAuthenticated = true;
      sessionStorage.setItem('token', 'dummy_token');
      return true;
    }
    this.isAuthenticated = false;
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
    sessionStorage.removeItem('token');
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  register(fullName: string, userName: string, password: string): boolean {
    if (userName === this.userName) {
      return false;
    }

    this.fullName = fullName;
    this.userName = userName;
    this.password = password;
    this.isAuthenticated = true;
    return true;
  }
}
