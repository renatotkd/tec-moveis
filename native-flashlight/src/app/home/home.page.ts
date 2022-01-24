import { Component } from '@angular/core';
import { Flashlight } from '@awesome-cordova-plugins/flashlight/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private flashlight: Flashlight) {
  }
  ligar(){
    this.flashlight.switchOn();
  }
  desligar(){
    this.flashlight.switchOff();
  }



}



