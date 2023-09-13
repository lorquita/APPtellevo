import { Component, OnInit } from '@angular/core';

export interface ListadoClases {
  Id: number;
  asignatura: string;
  seccion: string;
  sala: string;
}

const ELEMENT_DATA: ListadoClases[] = [
  {Id: 1, asignatura: 'Programacion BD',seccion: '011D', sala: 'LC-12'},
  {Id: 2, asignatura: 'Programacion Movil', seccion: '007D', sala: 'LC-14'},
  {Id: 3, asignatura: 'Algoritmos', seccion: '021D', sala: 'TR-21'},
  {Id: 4, asignatura: 'Consulta BD', seccion: '0923D', sala: 'EEEEEEE-2'},
  {Id: 5, asignatura: 'Principios de Fe Cristiana', seccion: 'D10S', sala: 'PA-523'},
  {Id: 6, asignatura: 'Ingles', seccion: '010D', sala: 'LSD-020'},
  {Id: 7, asignatura: 'Portafolio', seccion: '003D', sala: 'CR-7'},
];


@Component({
  selector: 'app-tabla-clases',
  templateUrl: './tabla-clases.component.html',
  styleUrls: ['./tabla-clases.component.scss'],
})
export class TablaClasesComponent  implements OnInit {

  displayedColumns: string[] = ['Id', 'asignatura', 'seccion', 'sala', 'iniciar-clase'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {}

}
