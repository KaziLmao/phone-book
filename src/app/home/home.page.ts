import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Contacts } from '@capacitor-community/contacts';
import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  contacts: any[] = [];
  contacts1:any = "WTF";
  test: string = 'HELLOOO';

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
    this.requestPermissionContact();
    // this.getContacts();
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

  async getContactsList():Promise<void> {
    try{
      const result = await Contacts.getContacts({projection: 
        {
          name: true,
          phones: true,
          emails: true,
          image: true
        }
      });
      this.contacts = result.contacts;
      console.log(this.contacts);
    }catch(error){
      console.error(error);
    }
  }

  public async requestPermissionContact(): Promise<void> {
    try{
      const permission = await Contacts.requestPermissions();
      if(permission?.contacts == 'granted'){
        this.getContactsList();
      } else {
        console.log('Permission denied');
      }
    }catch(error){
      console.error(error);
    }
  }

  // async getContacts(){
  //   try{
  //     const permission = await Contacts.requestPermissions();
  //     console.log('permission', permission.contacts);
  //     if(!permission?.contacts) return;
  //     else if(permission?.contacts == 'granted'){
  //       const result = await Contacts.getContacts({
  //         projection: {
  //           name: true,
  //           phones: true,
  //           emails: true
  //         }
  //       });
  //       console.log('result: ', result);
  //       this.contacts1 = result.contacts;
  //       console.log(this.contacts1);
  //     }
  //   }catch(e){
  //     console.log(e);
  //   }
  // }
}
