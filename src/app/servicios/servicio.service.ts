import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListadoAlumnos } from '../componentes/tabla-alumnos/tabla-alumnos.component';
import { ListadoClases } from '../componentes/tabla-clases/tabla-clases.component';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http : HttpClient) { }


  getAlumnos():Observable<ListadoAlumnos[]>{
    return this.http.get<ListadoAlumnos[]>("http://localhost:3000/alumnos");
  }

  getClases():Observable<ListadoClases[]>{
    return this.http.get<ListadoClases[]>("http://localhost:3000/clases");
  }
}

