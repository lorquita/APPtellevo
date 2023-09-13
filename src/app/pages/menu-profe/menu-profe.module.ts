import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuProfePageRoutingModule } from './menu-profe-routing.module';

import { MenuProfePage } from './menu-profe.page';
import { ModuleModule } from 'src/app/modulos/module/module.module';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuProfePageRoutingModule,
    ModuleModule,
    ComponentesModule
  ],
  declarations: [MenuProfePage]
})
export class MenuProfePageModule {}
