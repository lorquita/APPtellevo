import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'inicio-sesion',
    loadChildren: () => import('./pages/inicio-sesion/inicio-sesion.module').then( m => m.InicioSesionPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./pages/splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'recuperar-contra',
    loadChildren: () => import('./pages/recuperar-contra/recuperar-contra.module').then( m => m.RecuperarContraPageModule)
  },
  {
    path: 'reg-asist',
    loadChildren: () => import('./pages/reg-asist/reg-asist.module').then( m => m.RegAsistPageModule)
  },
  {
    path: 'ver-horario',
    loadChildren: () => import('./pages/ver-horario/ver-horario.module').then( m => m.VerHorarioPageModule)
  },
  {
    path: 'ver-asistencia',
    loadChildren: () => import('./pages/ver-asistencia/ver-asistencia.module').then( m => m.VerAsistenciaPageModule)
  },
  {
    path: 'confirmar-asistencia',
    loadChildren: () => import('./pages/confirmar-asistencia/confirmar-asistencia.module').then( m => m.ConfirmarAsistenciaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
