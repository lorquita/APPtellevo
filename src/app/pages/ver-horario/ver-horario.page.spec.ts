import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerHorarioPage } from './ver-horario.page';

describe('VerHorarioPage', () => {
  let component: VerHorarioPage;
  let fixture: ComponentFixture<VerHorarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VerHorarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
