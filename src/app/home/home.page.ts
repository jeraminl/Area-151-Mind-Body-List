import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ChecklistService } from "../services/checklist.service";
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
    public static bodyArray:string[] = [""];

    constructor(public navCtrl: NavController, public checklistService:ChecklistService){
    }
    
    ngOnInit(){
        
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
    
    get bodyArray(){
        return HomePage.bodyArray;
    }
}
