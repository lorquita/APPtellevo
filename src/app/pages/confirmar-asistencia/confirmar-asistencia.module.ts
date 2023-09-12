import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmarAsistenciaPageRoutingModule } from './confirmar-asistencia-routing.module';

import { ConfirmarAsistenciaPage } from './confirmar-asistencia.page';
import { ModuleModule } from 'src/app/modulos/module/module.module';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmarAsistenciaPageRoutingModule,
    ModuleModule,
    ComponentesModule
  ],
  declarations: [ConfirmarAsistenciaPage]
})
export class ConfirmarAsistenciaPageModule {}
