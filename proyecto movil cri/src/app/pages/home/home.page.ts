import { Component, OnInit } from '@angular/core';
import { VerHorario } from 'src/app/interfaces/ver-horario';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor() {}
  
  ngOnInit() {
  }
  horarios: VerHorario[]=[
    {imagen: '../../../assets/img/horario.jpg', titulo:"Horario"},
  ]
}
