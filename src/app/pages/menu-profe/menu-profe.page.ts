import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-profe',
  templateUrl: './menu-profe.page.html',
  styleUrls: ['./menu-profe.page.scss'],
})
export class MenuProfePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  irListaClases(){
    this.router.navigate(['/lista-clases-profesor'])
  }

}
