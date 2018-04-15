import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WordGroupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'word-group',
  templateUrl: 'word-group.html',
})
export class WordGroupPage {
  @Input() wordListGroups;
  @Output() selectWordList = new EventEmitter<object>();
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WordGroupPage');
  }

  onItemClick(obj){
    this.selectWordList.emit(obj);
  }
}
