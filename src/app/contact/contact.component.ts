import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { Platform } from '@ionic/angular';
import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  private platform = inject(Platform);

}
