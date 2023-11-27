import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})
export class InicioSesionPage implements OnInit {

  usuario: string = '';
  password: string = '';

  constructor(private router: Router,
              private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  async irHome() {
    if (this.usuario=="admin" && this.password=="1234") {
      this.router.navigate(['/home']);
  }else{
    let t=this.toastCtrl.create({
      message:"usuario o password incorrecto",
      duration:3000,
      position:'bottom'
    });
    (await t).present();
  }
  
}

  irRecuperar() {
    this.router.navigate(['/recuperar-contra'])
  }
}
