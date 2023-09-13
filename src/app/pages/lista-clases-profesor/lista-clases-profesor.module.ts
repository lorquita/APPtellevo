import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaClasesProfesorPageRoutingModule } from './lista-clases-profesor-routing.module';

import { ListaClasesProfesorPage } from './lista-clases-profesor.page';
import { ModuleModule } from 'src/app/modulos/module/module.module';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaClasesProfesorPageRoutingModule,
    ModuleModule,
    ComponentesModule
  ],
  declarations: [ListaClasesProfesorPage]
})
export class ListaClasesProfesorPageModule {}
