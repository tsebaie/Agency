import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import arr from '../../app/array';
import { AlertController } from 'ionic-angular';
import {con} from '../../app/tshepo';
import {ViewPage} from '../../pages/view/view' ;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
send(){
  this.navCtrl.push(ViewPage)
}
}
