import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BodyData } from "../data/body-data";
import { ChecklistService } from "../services/checklist-service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    bodyArray:string[] = [""];

    constructor(public navCtrl: NavController){
    
    }
    
    addTask(){
        this.bodyArray.push("");
    }
    
    trackByFn(index: any, item: any) {
        return index;
    }
    
    goToMindList(){
        this.navCtrl.navigateForward("/MindChecklist");
    }
}
