import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ServicioService } from 'src/app/servicios/servicio.service';

export interface ListadoAlumnos {
  rut: string;
  nombre: string;
  apellido: string;
  carrera: string;
  porcentaje: number;
}

@Component({
  selector: 'app-tabla-alumnos',
  templateUrl: './tabla-alumnos.component.html',
  styleUrls: ['./tabla-alumnos.component.scss'],
})
export class TablaAlumnosComponent   {

  listaAlumnos !: ListadoAlumnos[];
  dataSource : any;
  displayedColumns:string[]=["rut", "nombre", "apellido", "carrera", "porcentaje"];
  @ViewChild(MatPaginator) paginator !:MatPaginator;
  @ViewChild(MatSort) sort !:MatSort;

  constructor(private service : ServicioService) { 
    this.service.getAlumnos().subscribe(res=>{
      this.listaAlumnos = res;
      this.dataSource = new MatTableDataSource<ListadoAlumnos>(this.listaAlumnos);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

}
