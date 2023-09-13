import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CabeceraComponent } from './cabecera/cabecera.component';
import { PieComponent } from './pie/pie.component';
import { IonicModule } from '@ionic/angular';
import { ModuleModule } from '../modulos/module/module.module';
import { TablaClasesComponent } from './tabla-clases/tabla-clases.component';

@NgModule({
  declarations: [
    CabeceraComponent, PieComponent, TablaClasesComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ModuleModule
  ],
  exports:[ CabeceraComponent, PieComponent, TablaClasesComponent]
})
export class ComponentesModule { }
