import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(private router:Router) {}
  
  ngOnInit() {
  }

  irReg(){
    this.router.navigate(['/reg-asist'])
  }
  irHorarioAlumno(){
    this.router.navigate(['/horario-alumno'])
  }
  irVerAsistencia(){
    this.router.navigate(['/ver-asistencia'])
  }
}