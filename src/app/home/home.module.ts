import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { ContactComponentModule } from '../contact/contact.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactComponentModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage],
  exports: [HomePage]
})
export class HomePageModule {}
