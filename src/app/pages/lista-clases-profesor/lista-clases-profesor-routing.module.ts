import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaClasesProfesorPage } from './lista-clases-profesor.page';

const routes: Routes = [
  {
    path: '',
    component: ListaClasesProfesorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaClasesProfesorPageRoutingModule {}
