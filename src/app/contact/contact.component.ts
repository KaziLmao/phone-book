import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { Platform, isPlatform } from '@ionic/angular';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  private platform = inject(Platform);

  isAndroid(){
    return this.platform.is('android');
  }

  isIos() {
    return this.platform.is('ios');
  }
}
