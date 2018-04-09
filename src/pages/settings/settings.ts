import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {  
  wordsUser:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private storage:Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');

    this.storage.get('wordsUser').then((val)=>{
      if(val!=null){
        this.wordsUser = JSON.parse( val);
      }else{
        this.wordsUser = "Ben";
      }
  });
  }

  saveForm(){
   this.storage.set('wordsUser', JSON.stringify( this.wordsUser));
  }
}
