import { Component, OnInit } from '@angular/core';

interface Asignatura {
  nombre: string;
  dias: string[];
  horaInicio: string;
  horaFin: string;
}

@Component({
  selector: 'app-horario-alumno',
  templateUrl: './horario-alumno.page.html',
  styleUrls: ['./horario-alumno.page.scss'],
})
export class HorarioAlumnoPage implements OnInit {

  asignaturas: Asignatura[] = [
    { nombre: 'Calidad de Software', dias: ['Lunes', 'Jueves'], horaInicio: '10:00 am', horaFin: '12:30 pm' },
    { nombre: 'Etica', dias: ['Lunes', 'Miércoles'], horaInicio: '11:00 am', horaFin: '13:30 pm' },
    { nombre: 'Programacion Movil', dias: ['Martes', 'Viernes'], horaInicio: '10:30 am', horaFin: '13:10 pm' },
    { nombre: 'Ingles', dias: ['Lunes', 'Miércoles'], horaInicio: '10:50 am', horaFin: '13:50 pm' },
  ];
  asignaturasPorDia: Asignatura[] = [];

  segmentChanged(event: any) {
    const diaSeleccionado = event.detail.value;
    this.asignaturasPorDia = this.asignaturas.filter(
      asignatura => asignatura.dias.includes(diaSeleccionado)
    );
  }

  constructor() { }

  ngOnInit() {
  }

}
