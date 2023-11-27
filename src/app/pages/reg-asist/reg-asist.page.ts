import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';

@Component({
  selector: 'app-reg-asist',
  templateUrl: './reg-asist.page.html',
  styleUrls: ['./reg-asist.page.scss'],
})
export class RegAsistPage implements OnInit {

  constructor(private router:Router, barcodeScanner: BarcodeScanner) { }

  ngOnInit() {
  }

  irConfirmarAsistencia(){
    this.router.navigate(['/confirmar-asistencia'])
  }

}
