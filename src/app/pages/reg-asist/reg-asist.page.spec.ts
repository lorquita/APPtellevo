import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegAsistPage } from './reg-asist.page';

describe('RegAsistPage', () => {
  let component: RegAsistPage;
  let fixture: ComponentFixture<RegAsistPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegAsistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
