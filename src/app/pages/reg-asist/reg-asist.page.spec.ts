import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RegAsistPage } from './reg-asist.page';
import { IonicModule } from '@ionic/angular';

describe('RegAsistPage', () => {
  let component: RegAsistPage;
  let fixture: ComponentFixture<RegAsistPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegAsistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegAsistPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegAsistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});