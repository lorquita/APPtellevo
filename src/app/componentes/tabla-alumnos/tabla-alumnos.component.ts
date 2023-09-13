import { Component, OnInit } from '@angular/core';

export interface ListadoAlumnos {
  rut: string;
  nombre: string;
  apellido: string;
  carrera: string;
  porcentaje: number;
}

const ELEMENT_DATA: ListadoAlumnos[] = [
  {rut: '12345678-9', nombre: 'Alejandra', apellido: 'González', carrera: 'Ingeniería Civil', porcentaje: 80},
  {rut: '98765432-1', nombre: 'Juan', apellido: 'Pérez', carrera: 'Medicina', porcentaje: 70},
  {rut: '23456789-0', nombre: 'María', apellido: 'López', carrera: 'Derecho', porcentaje: 90},
  {rut: '34567890-1', nombre: 'Andrés', apellido: 'Rodríguez', carrera: 'Arquitectura', porcentaje: 75},
  {rut: '45678901-2', nombre: 'Carla', apellido: 'Torres', carrera: 'Psicología', porcentaje: 85},
  {rut: '56789012-3', nombre: 'Pedro', apellido: 'Martínez', carrera: 'Periodismo', porcentaje: 65},
  {rut: '67890123-4', nombre: 'Isabel', apellido: 'Gómez', carrera: 'Administración de Empresas', porcentaje: 88},
  {rut: '78901234-5', nombre: 'Francisco', apellido: 'Díaz', carrera: 'Ingeniería Comercial', porcentaje: 78},
  {rut: '89012345-6', nombre: 'Camila', apellido: 'Soto', carrera: 'Enfermería', porcentaje: 95},
  {rut: '90123456-7', nombre: 'Luis', apellido: 'Fernández', carrera: 'Psicopedagogía', porcentaje: 72},
  {rut: '01234567-8', nombre: 'Ana', apellido: 'Hernández', carrera: 'Artes Plásticas', porcentaje: 60},
  {rut: '12345098-7', nombre: 'Eduardo', apellido: 'Vargas', carrera: 'Ingeniería Informática', porcentaje: 82},
  {rut: '23456789-6', nombre: 'Paulina', apellido: 'Silva', carrera: 'Medicina Veterinaria', porcentaje: 76},
  {rut: '34567890-5', nombre: 'Javier', apellido: 'Gutiérrez', carrera: 'Biología Marina', porcentaje: 88},
  {rut: '45678901-4', nombre: 'Mónica', apellido: 'Rojas', carrera: 'Química', porcentaje: 70},
  {rut: '56789012-3', nombre: 'Roberto', apellido: 'Molina', carrera: 'Ingeniería Eléctrica', porcentaje: 85},
  {rut: '67890123-2', nombre: 'Carolina', apellido: 'Álvarez', carrera: 'Historia', porcentaje: 68},
  {rut: '78901234-1', nombre: 'Felipe', apellido: 'Lara', carrera: 'Economía', porcentaje: 92},
  {rut: '89012345-0', nombre: 'Laura', apellido: 'Cruz', carrera: 'Comunicación Social', porcentaje: 79},
  {rut: '90123456-9', nombre: 'Ricardo', apellido: 'Mendoza', carrera: 'Ingeniería Mecánica', porcentaje: 77},
];

@Component({
  selector: 'app-tabla-alumnos',
  templateUrl: './tabla-alumnos.component.html',
  styleUrls: ['./tabla-alumnos.component.scss'],
})
export class TablaAlumnosComponent  implements OnInit {

  displayedColumns: string[] = ['rut', 'nombre','apellido', 'carrera' , 'porcentaje'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {}

}
