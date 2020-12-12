import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmploiedetempsPage } from './emploiedetemps.page';

describe('EmploiedetempsPage', () => {
  let component: EmploiedetempsPage;
  let fixture: ComponentFixture<EmploiedetempsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmploiedetempsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmploiedetempsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
