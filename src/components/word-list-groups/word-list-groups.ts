import { Component, Input, Output, EventEmitter  } from '@angular/core';

/**
 * Generated class for the WordListGroupsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'word-list-groups',
  templateUrl: 'word-list-groups.html'
})
export class WordListGroupsComponent {
  @Input() wordListGroups;
  @Output() selectWordList = new EventEmitter<object>();
  text: string;
  onItemClick(obj){
    console.log(obj);
    this.selectWordList.emit(obj);
  }

  constructor() {
    console.log('Hello WordListGroupsComponent Component');
    this.text = 'Hello World';
  }

}
