import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegAsistPageRoutingModule } from './reg-asist-routing.module';

import { RegAsistPage } from './reg-asist.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';
import { ModuleModule } from 'src/app/modulos/module/module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegAsistPageRoutingModule,
    ComponentesModule,
    ModuleModule
  ],
  declarations: [RegAsistPage]
})
export class RegAsistPageModule {}
