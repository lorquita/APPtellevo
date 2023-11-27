import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TablaAlumnosBDComponent } from './tabla-alumnos-bd.component';

describe('TablaAlumnosBDComponent', () => {
  let component: TablaAlumnosBDComponent;
  let fixture: ComponentFixture<TablaAlumnosBDComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaAlumnosBDComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TablaAlumnosBDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
