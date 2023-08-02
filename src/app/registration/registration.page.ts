import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  fullName = '';
  userName = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  register(): void {
    if (this.authService.register( this.fullName, this.userName, this.password)) {
      this.router.navigate(['/authentication']);
    } else {
      alert('Username already exists. Try another one.');
    }
  }

  ngOnInit() {
  }

}
