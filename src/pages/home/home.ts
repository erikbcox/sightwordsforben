import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {WordsProvider} from '../../providers/words/words';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  wordLists:any;
  wordsUser:any;

  constructor(
    public navCtrl: NavController, 
    private wordsProvider:WordsProvider,
    private storage:Storage) {

  }

  ionViewWillEnter(){
    this.storage.get('wordsUser').then((val)=>{
        if(val!=null){
          this.wordsUser = JSON.parse( val);
        }else{
          this.wordsUser = "Ben";
        }
    });
    this.wordsProvider.getWordLists().subscribe(wordLists=>{
      this.wordLists = wordLists;
    });
  }
}
