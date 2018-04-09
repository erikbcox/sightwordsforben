import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {WordsProvider} from '../../providers/words/words';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  wordLists:any;

  constructor(public navCtrl: NavController, private wordsProvider:WordsProvider) {

  }

  ionViewWillEnter(){
    this.wordsProvider.getWordLists().subscribe(wordLists=>{
      this.wordLists = wordLists;
    });
  }
}
