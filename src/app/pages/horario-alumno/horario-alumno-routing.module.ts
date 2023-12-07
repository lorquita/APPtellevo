import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HorarioAlumnoPage } from './horario-alumno.page';

const routes: Routes = [
  {
    path: '',
    component: HorarioAlumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HorarioAlumnoPageRoutingModule {}
