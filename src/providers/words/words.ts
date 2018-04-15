import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the WordsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WordsProvider {
  apiKey = 'CJzKmKHaLOMi';
  url;
  //
  constructor(public http: Http) {
    console.log('Hello WordsProvider Provider');
    this.url = 'https://appforbenapi.azurewebsites.net/api/wordlist';
  }

  getWordLists(){
    return this.http.get(this.url)
                    .map(res=>res.json());
  }

  getWordList(wordListId){
    return this.http.get(this.url+ '/'+wordListId);
  }
}
