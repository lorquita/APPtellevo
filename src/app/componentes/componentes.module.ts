import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CabeceraComponent } from './cabecera/cabecera.component';
import { PieComponent } from './pie/pie.component';
import { IonicModule } from '@ionic/angular';
import { ModuleModule } from '../modulos/module/module.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule, Routes } from "@angular/router";

@NgModule({
  declarations: [
    CabeceraComponent, PieComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ModuleModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule, 
    MatDividerModule,
    RouterModule,
    
  ],
  exports:[ CabeceraComponent, PieComponent]
})
export class ComponentesModule { }
