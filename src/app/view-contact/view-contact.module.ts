import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViewContactPage } from './view-contact.page';

import { IonicModule } from '@ionic/angular';

import { ViewContactPageRoutingModule } from './view-contact-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewContactPageRoutingModule
  ],
  declarations: [ViewContactPage]
})
export class ViewContactPageModule {}
