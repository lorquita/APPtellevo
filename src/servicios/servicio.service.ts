import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListadoAlumnosPM } from 'src/app/componentes/tabla-alumno-pm/tabla-alumno-pm.component';
import { ListadoAlumnosDB } from 'src/app/componentes/tabla-alumnos-bd/tabla-alumnos-bd.component';
import { ListadoClase } from 'src/app/componentes/tabla-asignatura/tabla-asignatura.component';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http : HttpClient) { }


  getAlumnos():Observable<ListadoAlumnosPM[]>{
    return this.http.get<ListadoAlumnosPM[]>("http://localhost:3000/alumnos-PM");
  }

  gets():Observable<ListadoAlumnosDB[]>{
    return this.http.get<ListadoAlumnosDB[]>("http://localhost:3000/alumnos-BD");
  }

  getClases():Observable<ListadoClase[]>{
    return this.http.get<ListadoClase[]>("http://localhost:3000/asignaturas");
  }
}

