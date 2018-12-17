import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ChecklistService } from "../services/checklist.service";
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { ToastController } from '@ionic/angular';
import { MusicService } from '../services/music.service';

/*Notable bug: Program restricts adding another task if previous one is empty, but can be worked around by creating and filling many tasks, and them emptying them later. Possible solution is to use an *ngIf to remove the array element if the task is left empty.*/

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
    public static bodyArray:string[] = [""];

    constructor(public navCtrl: NavController, public checklistService:ChecklistService,
      public toastController:ToastController, public musicService:MusicService){
    }

    ngOnInit(){

    }

    // presentToast(){
    //   this.toastController.create({
    //     message: 'Hello',
    //     showCloseButton:true,
    //     position:"top",
    //     duration: 2000
    //   }).then((toast) => {
    //     toast.present();
    //   });
    // }
    addTask(){
        if(HomePage.bodyArray[HomePage.bodyArray.length - 1] != ""){
            HomePage.bodyArray.push("");
        }
    }

    trackByFn(index: any, item: any) {
        return index;
    }

    goToMindList(){
        this.navCtrl.navigateForward("/MindChecklist");
    }

    get bodyArray(){
        return HomePage.bodyArray;
    }
}
