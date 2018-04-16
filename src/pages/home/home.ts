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
  selectedWordList:any;
  selectedWord:any;
  selectedWordIndex:any;
  showFinish:any;
  wordsUser:any;
  showFinalPage:boolean;

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
      this.selectedWordIndex = 0;
     this.selectedWord = this.selectedWordList.words[this.selectedWordIndex];
    }
  }
  onNextClick(){
    if(this.selectedWordIndex < this.selectedWordList.words.length-1){
      this.selectedWordIndex++;
      this.selectedWord = this.selectedWordList.words[this.selectedWordIndex];
      console.log(this.selectedWord);
    } else if(this.selectedWordIndex > 0){
      this.showFinalPage = true;
    }
  }

  deselectWordList(){
    this.resetSelected();
  }

  onCloseWordList(){
    this.resetSelected();
  }

  resetSelected(){
    this.selectedWordList = null;
    this.selectedWord = null;
    this.selectedWordIndex = 0;

    this.showFinalPage = false;
  }
}
