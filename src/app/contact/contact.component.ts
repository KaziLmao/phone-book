import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { Platform, isPlatform } from '@ionic/angular';
import { Contacts } from '@capacitor-community/contacts';
import { Plugin } from '@capacitor/core';

// const {Contacts} = Plugin;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  private platform = inject(Platform);

  async loadContacts() {
    if(isPlatform('android')){
      await Contacts.requestPermissions();
    }
  }

  isAndroid(){
    return this.platform.is('android');
  }

  isIos() {
    return this.platform.is('ios');
  }
}
