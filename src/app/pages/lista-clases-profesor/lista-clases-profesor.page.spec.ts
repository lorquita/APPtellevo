import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaClasesProfesorPage } from './lista-clases-profesor.page';

describe('ListaClasesProfesorPage', () => {
  let component: ListaClasesProfesorPage;
  let fixture: ComponentFixture<ListaClasesProfesorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListaClasesProfesorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
