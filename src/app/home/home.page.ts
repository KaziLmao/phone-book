import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Contacts } from '@capacitor-community/contacts';
import { Barcode, BarcodeScanner, BarcodeFormat, LensFacing } from '@capacitor-mlkit/barcode-scanning';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  static getSavedContacts() {
    throw new Error('Method not implemented.');
  }

  contacts: any[] = [];

  isSupported = false;
  barcodes: Barcode[] = [];
  
  constructor(
    private authService: AuthService, 
    private router: Router,
    private alertController: AlertController) {}

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/authentication']);
  }

  ngOnInit(){
    this.getContactsList()
    BarcodeScanner.isSupported().then((result) => {
      this.isSupported = result.supported;
    });
  }

  async scan(): Promise<void> {
    const granted = await this.requestPermissionsCamera();
    if (!granted) {
      this.presentAlert();
      return;
    }
    const { barcodes } = await BarcodeScanner.scan();
    this.barcodes.push(...barcodes);
  }

  public async requestPermissionsCamera(): Promise<boolean> {
    const { camera } = await BarcodeScanner.requestPermissions();
    return camera === 'granted' || camera === 'limited';
  }

  async presentAlert(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Permission denied',
      message: 'Please grant camera permission to use the barcode scanner.',
      buttons: ['OK'],
    });
    await alert.present();
  }


  async getContactsList(){
    try{
      const permission = await Contacts.requestPermissions();
      console.log('permission', permission.contacts);
      if (permission.contacts === 'denied') {
        return;
      }
      else if(permission.contacts === 'granted'){
        const result = await Contacts.getContacts({
          projection: {
            name: true,
            phones: true,
            emails: true
          }
        });
        console.log('result: ', result);
        this.contacts = result.contacts;
        console.log(this.contacts);
      }else {
        const requestPermission = await Contacts.requestPermissions();
        if (requestPermission.contacts === 'granted') {
          this.getContactsList();
        }
      }
    }catch(e){
      console.log(e);
    }
  }

  joinNumbers(array: any[]){
    return array.map(x => x.number).join(' | ');
  }

}