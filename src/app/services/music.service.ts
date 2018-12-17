import { Injectable } from '@angular/core';
import { Howl, Howler } from 'howler';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  // public static currentMusic:string = "Healing Meditation";
  //
  // public static sound1 = new Howl({
  //   src: ['../../assets/audio/Healing Meditation.mp3'],
  //   autoplay: true,
  //   loop: true,
  //   volume: 1.0,
  //   preload:true,
  //   html5:true
  // });
  //
  // public static sound2 = new Howl({
  //   src: ['../../assets/audio/Deep Sleep Healing.mp3'],
  //   loop: true,
  //   volume: 1.0,
  //   preload:true,
  //   html5:true
  // });
  //
  // public static sound3 = new Howl({
  //   src: ['../../assets/audio/Water Flow.mp3'],
  //   loop: true,
  //   volume: 1.0,
  //   preload:true,
  //   html5:true
  // });
  //
  // public static sound4 = new Howl({
  //   src: ['../../assets/audio/Zen Meditation.mp3'],
  //   loop: true,
  //   volume: 1.0,
  //   preload:true,
  //   html5:true
  });

  constructor() {
  }

  changeMusic(songChoice:string){
    var newPath = '../../assets/audio/' + songChoice + '.mp3';
    // if(MusicService.currentMusic == "Deep Sleep Healing"){
    //   MusicService.sound2.stop();
    // }
    // else if(MusicService.currentMusic == "Healing Meditation"){
    //   MusicService.sound1.stop();
    // }
    // else if(MusicService.currentMusic == "Water Flow"){
    //   MusicService.sound3.stop();
    // }
    // else if(MusicService.currentMusic == "Zen Meditation"){
    //   MusicService.sound4.stop();
    // }
    //
    // if(songChoice == "Deep Sleep Healing"){
    //   MusicService.sound2.play();
    // }
    // else if(songChoice == "Healing Meditation"){
    //   MusicService.sound1.play();
    // }
    // else if(songChoice == "Water Flow"){
    //   MusicService.sound3.play();
    // }
    // else if(songChoice == "Zen Meditation"){
    //   MusicService.sound4.play();
    // }
    // MusicService.currentMusic = songChoice;

    //   MusicService.sound.stop();
    //   MusicService.sound = new Howl({
    //   src: [newPath],
    //   autoplay: true,
    //   loop: true,
    //   volume: 1.0,
    //   preload:true,
    //   html5:true
    // });
  }
}
