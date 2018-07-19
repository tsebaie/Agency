import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import array from '../../app/array';
import {con} from '../../app/tshepo';
import { AlertController } from 'ionic-angular';
import arr from '../../app/array';

/**
 * Generated class for the ViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view',
  templateUrl: 'view.html',
})
export class ViewPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    
  }
  submit(){ {
      const prompt = this.alertCtrl.create({
        title: 'Login',
        message: "Enter a name for this new album you're so keen on adding",
        inputs: [
          {
            name: 'Name',
            placeholder: 'Name'
          },
          {
            name: 'Surname',
            placeholder: 'Surname'
          },
          {
            name: 'PhoneNo',
            placeholder: 'PhoneNo'
          },
          {
            name: 'Email',
            placeholder: 'Email'
          },
        ],
        buttons: [
          {
            text: 'Add',
            handler: data => {
              var obj = new con(data.Name, data.Surname, data.PhoneNo, data.Email);
             arr.push(obj); 
              
            }
          }
        ]
      });
      prompt.present();
    }

  }  
  Options(i){
    let alert = this.alertCtrl.create({
      title: 'Update',
      buttons: [
        {
          text: 'Delete',
          handler: data => {
            this.arrays.splice(i, 1);
          }
        },
        {
          text: 'Update',
          handler: data => {
            {
              const prompt = this.alertCtrl.create({
                title: 'Login',
                message: "Enter a name for this new album you're so keen on adding",
                inputs: [
                  {
                    name: 'Name',
                    placeholder: 'Name'
                  },
                  {
                    name: 'Surname',
                    placeholder: 'Surname'
                  },
                  {
                    name: 'PhoneNo',
                    placeholder: 'PhoneNo'
                  },
                  {
                    name: 'Email',
                    placeholder: 'Email'
                  },
                ],
                buttons: [
                  {
                    text: 'Update',
                    handler: data => {
                      
                      var obj = new con(data.Name, data.Surname, data.PhoneNo, data.Email);
                     arr.splice(i,1,obj) 
                      
                    }
                  }
                ]
              });
              prompt.present();
            }
          }
        }
      ]
    });
    alert.present();

  }


  // delete(i) {
  //   
  // }
  arrays= arr;
  
}
