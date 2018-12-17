import { Component, OnInit } from '@angular/core';
import { MusicService } from '../services/music.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  chosenAmbiance:string = "Healing Meditation";
  musicArray:string[] = ["Deep Sleep Healing", "Healing Meditation",
                        "Water Flow", "Zen Meditation"];

  constructor(public musicService:MusicService) {
  }

  ngOnInit() {
  }

  changeAmbiance(songChoice:string){
    this.chosenAmbiance = songChoice;
    console.log(this.chosenAmbiance);
    this.musicService.changeMusic(this.chosenAmbiance);
  }


}
