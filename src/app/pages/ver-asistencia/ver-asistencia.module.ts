import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerAsistenciaPageRoutingModule } from './ver-asistencia-routing.module';

import { VerAsistenciaPage } from './ver-asistencia.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';
import { ModuleModule } from 'src/app/modulos/module/module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerAsistenciaPageRoutingModule,
    ComponentesModule,
    ModuleModule
  ],
  declarations: [VerAsistenciaPage]
})
export class VerAsistenciaPageModule {}
