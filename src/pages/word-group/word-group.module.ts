import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WordGroupPage } from './word-group';

@NgModule({
  declarations: [
    WordGroupPage,
  ],
  imports: [
    IonicPageModule.forChild(WordGroupPage),
  ],
})
export class WordGroupPageModule {}
