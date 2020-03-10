import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { DataLocalService } from '../../services/data-local.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  swipeOpts = {
    allowSlidePrev: false,
    allowSlideNext: false
  };

  constructor(
    private barcodeScanner: BarcodeScanner,
    private dataLocalService: DataLocalService
  ) {}

  scan() {
    console.log('scan');
    this.barcodeScanner.scan()
      .then(barcodeData => {
        console.log('Barcode Data: ', barcodeData);
        if ( !barcodeData.cancelled) {
          this.dataLocalService.guardarRegistro(barcodeData.format, barcodeData.text);
        }
      }).catch( err => {
        console.log('Error: ', err);
        //this.dataLocalService.guardarRegistro('QRCode', 'https://ramirex.com');
        this.dataLocalService.guardarRegistro('QRCode', 'geo:40.73151796986687,-74.06087294062502');
      })
  }

}
