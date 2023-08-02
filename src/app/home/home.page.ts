import { Component, OnInit, inject } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { ContactComponent } from '../contact/contact.component';

import { DataService } from '../services/data.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Contacts } from '@capacitor-community/contacts';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  private data = inject(DataService);

  contacts = [];
  
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

  ngOnInit(){
    this.getContacts();
  }

  async getContacts(){
    try{
      const premission = await Contacts.requestPermissions();
      console.log('Premission: ', premission.contacts);
    }catch(e){
      console.log(e);
    }
  }

  // getListContacts(): {
  //   return ;
  // }

  // getFullName(): string{
  //   return ;
  // }
}
