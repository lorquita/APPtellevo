import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmar-asistencia',
  templateUrl: './confirmar-asistencia.page.html',
  styleUrls: ['./confirmar-asistencia.page.scss'],
})
export class ConfirmarAsistenciaPage implements OnInit {
  constructor(private router:Router) { }
  public alertButtons = ['OK'];

  ngOnInit() {
  }
  irHome(){
    this.router.navigate(['/home'])
  }
}
