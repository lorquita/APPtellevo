import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss'],
})
export class PieComponent  implements OnInit {
  @Input() public pie:string="";

  constructor(private router:Router) { }

  ngOnInit() {}

  irHome(){
    this.router.navigate(['/home'])
  }
  retroceder(){
    window.history.back();
  }
  irVerHorario(){
    this.router.navigate(['/ver-horario'])
  }
}
