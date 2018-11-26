import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MindData } from "../data/mind-data";
import { ChecklistService } from "../services/checklist-service";

@Component({
  selector: 'app-mind-checklist',
  templateUrl: './mind-checklist.page.html',
  styleUrls: ['./mind-checklist.page.scss'],
})
export class MindChecklistPage{
    mindArray:string[] = [""];

    constructor(public navCtrl:NavController){
    
    }
    
    addTask(){
        this.mindArray.push("");
    }
    
    trackByFn(index: any, item: any) {
        return index;
    }
    
    goToBodyList(){
        this.navCtrl.navigateForward("/home");
    }
}
