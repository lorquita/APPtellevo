import { Component, OnInit } from '@angular/core';
export interface ListadoClase {
  id: string;
  asignatura: string;
  seccion: string;
  sala: string;
}
const ELEMENT_DATA: ListadoClase[] = [
  {id:'1',asignatura:'Programacion Movil',seccion:'008D',sala:'LC-13'},
  {id:'2',asignatura:'Consulta Base de Datos',seccion:'007D',sala:'LC-9'}
];
@Component({
  selector: 'app-tabla-asignatura',
  templateUrl: './tabla-asignatura.component.html',
  styleUrls: ['./tabla-asignatura.component.scss'],
})
export class TablaAsignaturaComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
