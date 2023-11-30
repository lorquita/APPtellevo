import { Component, OnInit } from '@angular/core';
import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { AlertController } from '@ionic/angular';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-reg-asist',
  templateUrl: './reg-asist.page.html',
  styleUrls: ['./reg-asist.page.scss'],
})
export class RegAsistPage implements OnInit {

  isSupported = false;
  barcodes: Barcode[] = [];

  constructor(private alertController: AlertController) { }

  ngOnInit() {
    BarcodeScanner.isSupported().then((result) => {
      this.isSupported = result.supported;
    });
  }

  async scan(): Promise<void> {
    const granted = await this.requestPermissions();

    if (!granted) {
      this.presentPermissionDeniedAlert();
      return;
    }

    const { barcodes } = await BarcodeScanner.scan();
    this.barcodes = barcodes;

    this.processQrCodeContent();
  }

  async requestPermissions(): Promise<boolean> {
    const { camera } = await BarcodeScanner.requestPermissions();
    return camera === 'granted' || camera === 'limited';
  }

  async presentPermissionDeniedAlert(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Permiso Denegado',
      message: 'Por favor, acepte los permisos de cámara para usar el escáner QR.',
      buttons: ['OK'],
    });
    await alert.present();
  }

  processQrCodeContent(): void {
    if (this.barcodes.length > 0) {
      const barcode = this.barcodes[0];
      const qrCodeContent = barcode.rawValue;

      if (this.isValidUrl(qrCodeContent)) {
        this.openUrlInBrowser(qrCodeContent);
      } else {
        this.showAlert('Contenido del código QR', qrCodeContent);
      }
    }
  }

  isValidUrl(url: string): boolean {
    const urlPattern = /^(https?|ftp):\/\/\S+/i;
    return urlPattern.test(url);
  }

  openUrlInBrowser(url: string): void {
    Browser.open({ url: url });
  }

  async showAlert(header: string, message: string): Promise<void> {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
