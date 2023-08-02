import { Component, inject } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { ContactComponent } from '../contact/contact.component';

import { DataService, Contact } from '../services/data.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private data = inject(DataService);
  constructor(private authService: AuthService, private router: Router) {}

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/authentication']);
  }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  getContacts(): Contact[] {
    return this.data.getContacts();
  }

  getFullName(): string{
    return this.authService.fullName;
  }
}
