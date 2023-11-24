import { Component, OnInit } from '@angular/core';
export interface ListadoAlumnosDB {
  rut: string;
  nombre: string;
  apellido: string;
  carrera: string;
  porcentaje: number;
}
const ELEMENT_DATA: ListadoAlumnosDB[] = [
  {rut: '12345678-9', nombre: 'Alejandra', apellido: 'González', carrera: 'Ingeniería en Informatica', porcentaje: 80},
  {rut: '98765432-1', nombre: 'Juan', apellido: 'Pérez', carrera: 'Ingeniería en Informatica', porcentaje: 70},
  {rut: '23456789-0', nombre: 'María', apellido: 'López', carrera: 'Ingeniería en Informatica', porcentaje: 90},
  {rut: '34567890-1', nombre: 'Andrés', apellido: 'Rodríguez', carrera: 'Ingeniería en Informatica', porcentaje: 75},
  {rut: '45678901-2', nombre: 'Carla', apellido: 'Torres', carrera: 'Ingeniería en Informatica', porcentaje: 85},
  {rut: '56789012-3', nombre: 'Pedro', apellido: 'Martínez', carrera: 'Ingeniería en Informatica', porcentaje: 65},
  {rut: '67890123-4', nombre: 'Isabel', apellido: 'Gómez', carrera: 'Ingeniería en Informatica', porcentaje: 88},
  {rut: '78901234-5', nombre: 'Francisco', apellido: 'Díaz', carrera: 'Ingeniería en Informatica', porcentaje: 78},
  {rut: '89012345-6', nombre: 'Camila', apellido: 'Soto', carrera: 'Ingeniería en Informatica', porcentaje: 95},
  {rut: '90123456-7', nombre: 'Luis', apellido: 'Fernández', carrera: 'Ingeniería en Informatica', porcentaje: 72},
  {rut: '01234567-8', nombre: 'Ana', apellido: 'Hernández', carrera: 'Ingeniería en Informatica', porcentaje: 60},
  {rut: '12345098-7', nombre: 'Eduardo', apellido: 'Vargas', carrera: 'Ingeniería en Informatica', porcentaje: 82},
  {rut: '23456789-6', nombre: 'Paulina', apellido: 'Silva', carrera: 'Ingeniería en Informatica', porcentaje: 76},
  {rut: '34567890-5', nombre: 'Javier', apellido: 'Gutiérrez', carrera: 'Ingeniería en Informatica', porcentaje: 88},
  {rut: '45678901-4', nombre: 'Mónica', apellido: 'Rojas', carrera: 'Ingeniería en Informatica', porcentaje: 70},
  {rut: '56789012-3', nombre: 'Roberto', apellido: 'Molina', carrera: 'Ingeniería en Informatica', porcentaje: 85},
  {rut: '67890123-2', nombre: 'Carolina', apellido: 'Álvarez', carrera: 'Ingeniería en Informatica', porcentaje: 68},
  {rut: '78901234-1', nombre: 'Felipe', apellido: 'Lara', carrera: 'Ingeniería en Informatica', porcentaje: 92},
  {rut: '89012345-0', nombre: 'Laura', apellido: 'Cruz', carrera: 'Ingeniería en Informatica', porcentaje: 79},
  {rut: '90123456-9', nombre: 'Ricardo', apellido: 'Mendoza', carrera: 'Ingeniería en Informatica', porcentaje: 77},
];
@Component({
  selector: 'app-tabla-alumnos-bd',
  templateUrl: './tabla-alumnos-bd.component.html',
  styleUrls: ['./tabla-alumnos-bd.component.scss'],
})
export class TablaAlumnosBDComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
