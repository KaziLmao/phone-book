import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ViewContactPageRoutingModule } from './view-contact-routing.module';
import { ViewContactPage } from './view-contact.page';

describe('ViewContactPage', () => {
  let component: ViewContactPage;
  let fixture: ComponentFixture<ViewContactPage>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ViewContactPage],
      imports: [IonicModule.forRoot(), ViewContactPageRoutingModule, RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewContactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
