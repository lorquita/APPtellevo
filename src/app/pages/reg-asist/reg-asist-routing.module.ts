import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegAsistPage } from './reg-asist.page';

const routes: Routes = [
  {
    path: '',
    component: RegAsistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegAsistPageRoutingModule {}
