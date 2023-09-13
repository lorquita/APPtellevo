import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaAlumnosPageRoutingModule } from './lista-alumnos-routing.module';

import { ListaAlumnosPage } from './lista-alumnos.page';
import { ModuleModule } from 'src/app/modulos/module/module.module';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaAlumnosPageRoutingModule,
    ModuleModule,
    ComponentesModule
  ],
  declarations: [ListaAlumnosPage]
})
export class ListaAlumnosPageModule {}
