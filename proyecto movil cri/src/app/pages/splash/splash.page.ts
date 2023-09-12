import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements AfterViewInit {
  @ViewChild('animacion') animacion!: ElementRef;

  constructor(private router: Router, private aniCtrl: AnimationController) { }
  ngAfterViewInit(): void {
    const mi_animacion=this.aniCtrl.create()
    .addElement(this.animacion.nativeElement)
    .duration(7000)
    .iterations(Infinity)
    .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
    .fromTo('opacity', '1', '0.2');
    mi_animacion.play();
  }

  ngOnInit() {
    setTimeout(()=>{
      this.router.navigate(['/inicio-sesion'])
    },5000)
  }

}
