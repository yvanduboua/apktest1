import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeconnectionPage } from './deconnection.page';

describe('DeconnectionPage', () => {
  let component: DeconnectionPage;
  let fixture: ComponentFixture<DeconnectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeconnectionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeconnectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
