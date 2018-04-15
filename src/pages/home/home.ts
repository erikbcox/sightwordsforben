import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {WordsProvider} from '../../providers/words/words';

import { WordListComponent } from '../../components/word-list/word-list';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  wordLists:any;
  selectedWordList:any;
  wordsUser:any;

  constructor(
    public navCtrl: NavController,
    private wordsProvider:WordsProvider,
    private storage:Storage) {

  }

  ionViewWillEnter(){
    console.log("enter home");
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

  onListSelected(obj){
    if(obj){
      this.selectedWordList = obj;
    }
  }

  deselectWordList(){
    this.selectedWordList = null;
  }
}
