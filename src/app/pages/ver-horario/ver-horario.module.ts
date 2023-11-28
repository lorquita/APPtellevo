import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerHorarioPageRoutingModule } from './ver-horario-routing.module';

import { VerHorarioPage } from './ver-horario.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';
import { ModuleModule } from 'src/app/modulos/module/module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerHorarioPageRoutingModule,
    ComponentesModule,
    ModuleModule
  ],
  declarations: [VerHorarioPage]
})
export class VerHorarioPageModule {}
