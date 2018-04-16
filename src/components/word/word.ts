import { Component, Input } from '@angular/core';

/**
 * Generated class for the WordComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'word',
  templateUrl: 'word.html'
})
export class WordComponent {

  @Input() currentWord;
  text: string;

  constructor() {
    console.log('Hello WordComponent Component');
    this.text = 'Hello World';
  }

}
