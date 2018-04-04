import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WordsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WordsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello WordsProvider Provider');
  }

}
