import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule, Platform } from '@ionic/angular';
import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.page.html',
  styleUrls: ['./view-contact.page.scss'],
})
export class ViewContactPage implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  private platform = inject(Platform);
  // public contacts: any = HomePage.getSavedContacts();

  constructor() {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  getBackButtonText() {
    const isOs = this.platform.is('ios'||'android');
    return isOs ? 'Inbox' : '';
  }
}
