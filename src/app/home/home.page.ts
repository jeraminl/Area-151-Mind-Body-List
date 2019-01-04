import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ChecklistService } from "../services/checklist.service";
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { ToastController } from '@ionic/angular';
import { MusicService } from '../services/music.service';
import { Storage } from '@ionic/storage';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

/*Notable bug: Program restricts adding another task if previous one is empty, but can be worked around by creating and filling many tasks, and them emptying them later. Possible solution is to use an *ngIf to remove the array element if the task is left empty.*/

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
    public static bodyArray:string[] = [""];
    today:Date = new Date();
    day:string = this.today.getMonth() + "/" + this.today.getDate() + "/" + this.today.getFullYear();

    constructor(public navCtrl: NavController, public checklistService:ChecklistService,
      public toastController:ToastController, public musicService:MusicService,
      private storage: Storage, private nativeStorage:NativeStorage){

        this.storage.keys().then((keys) => {
          console.log(keys);
          if(!(keys.includes(this.day))){
            this.storage.set(this.day, {'body':[""],
            'mind':[""],'diary':[""]});
          }
          else{
            this.storage.get(this.day).then((obj) => {HomePage.bodyArray = obj["body"];});
            //this.storage.clear();
          }
        });
      }
    ngOnInit(){
    }

    ionViewDidLoad(){
    }

    ionViewWillUnload(){
      console.log("UNLOAD");
      this.storage.set(this.day, {'body':HomePage.bodyArray, 'mind':[""],'diary':[""]});
    }

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

    goToDiary(){
      this.navCtrl.navigateForward("/journal");
    }

    handleStorage(){
      // if(HomePage.bodyArray.length > 1){
      //   this.storageDummy[0]["body"] = HomePage.bodyArray;
      //   console.log(this.storageDummy);
      // }
    }

    get bodyArray(){
        return HomePage.bodyArray;
    }
}
