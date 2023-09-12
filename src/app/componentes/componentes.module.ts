import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { IonicModule } from '@ionic/angular';
import { ModuleModule } from '../modulos/module/module.module';

@NgModule({
  declarations: [
    CabeceraComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ModuleModule
  ],
  exports: [CabeceraComponent]
})
export class ComponentesModule { }
