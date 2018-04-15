import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the WordListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'word-list',
  templateUrl: 'word-list.html'
})
export class WordListComponent {
  @Input() wordLists;
  @Output() selectWordList = new EventEmitter<object>();
  text: string;
  onItemClick(obj){
    console.log(obj);
    this.selectWordList.emit(obj);
  }
  constructor() {
    console.log('Hello WordListComponent Component');
    this.text = 'Hello World';
  }

}
