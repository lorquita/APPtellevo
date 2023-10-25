import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ServicioService } from 'src/app/servicios/servicio.service';

export interface ListadoClases {
  Id: number;
  asignatura: string;
  seccion: string;
  sala: string;
}

@Component({
  selector: 'app-tabla-clases',
  templateUrl: './tabla-clases.component.html',
  styleUrls: ['./tabla-clases.component.scss'],
})
export class TablaClasesComponent    {

  listaClases !: ListadoClases[];
  dataSource : any;
  displayedColumns:string[]=["Id", "asignatura", "seccion", "sala","iniciar-clase"];

  constructor(private service : ServicioService) { 
    this.service.getClases().subscribe(res=>{
      this.listaClases = res;
      this.dataSource = new MatTableDataSource<ListadoClases>(this.listaClases);
    })
  }
}
