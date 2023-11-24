import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TablaAlumnoPMComponent } from './tabla-alumno-pm.component';

describe('TablaAlumnoPMComponent', () => {
  let component: TablaAlumnoPMComponent;
  let fixture: ComponentFixture<TablaAlumnoPMComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaAlumnoPMComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TablaAlumnoPMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
