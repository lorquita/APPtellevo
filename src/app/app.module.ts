import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ComponentesModule } from './componentes/componentes.module';
import { MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserAnimationsModule, 
            BrowserModule, 
            IonicModule.forRoot(), 
            AppRoutingModule, 
            ComponentesModule, 
            MatSidenavModule,
            FormsModule],
  providers: [{ provide: RouteReuseStrategy, 
                useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
