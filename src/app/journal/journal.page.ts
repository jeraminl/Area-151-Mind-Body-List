import { Component, OnInit } from '@angular/core';
import { DiaryService } from '../services/diary.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.page.html',
  styleUrls: ['./journal.page.scss'],
})
export class JournalPage implements OnInit {
  currentEntry:string = "";
  constructor(public diaryService:DiaryService, public navCtrl:NavController) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.currentEntry = DiaryService.entryCurrent;
  }

  ionViewDidLeave(){
    DiaryService.entryCurrent = this.currentEntry;
  }

  onSubmit(){
    if(this.currentEntry != ""){
      DiaryService.allEntries.push(this.currentEntry);
      console.log(DiaryService.allEntries);
      this.currentEntry= "";
      this.navCtrl.navigateForward('/entrySubmitted');
    }
  }

  goToMindList(){
      this.navCtrl.navigateForward("/MindChecklist");
  }

  goToBodyList(){
      this.navCtrl.navigateForward("/home");
  }

}
