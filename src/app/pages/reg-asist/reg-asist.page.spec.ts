import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegAsistPage } from './reg-asist.page';
import { AppModule } from 'src/app/app.module';

describe('RegAsistPage', () => {
  let component: RegAsistPage;
  let fixture: ComponentFixture<RegAsistPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegAsistPage],
      imports: [AppModule],
    }).compileComponents();

    fixture = TestBed.createComponent(RegAsistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.nativeElement.remove();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
