import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ChecklistService } from "../services/checklist.service";

@Component({
  selector: 'app-mind-checklist',
  templateUrl: './mind-checklist.page.html',
  styleUrls: ['./mind-checklist.page.scss'],
})
export class MindChecklistPage implements OnInit{
    public static mindArray:string[] = [""];

    constructor(public navCtrl:NavController, public checklistService:ChecklistService){
    }
    
    ngOnInit(){
    }
    
    addTask(){
        if(MindChecklistPage.mindArray[MindChecklistPage.mindArray.length - 1] != ""){
            MindChecklistPage.mindArray.push("");
        }
    }
    
    trackByFn(index: any, item: any) {
        return index;
    }
    
    goToBodyList(){
        this.navCtrl.navigateForward("/home");
    }
    
    get mindArray(){
        return MindChecklistPage.mindArray;
    }
}
