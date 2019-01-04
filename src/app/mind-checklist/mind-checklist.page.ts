import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ChecklistService } from "../services/checklist.service";

/*Notable bug: Program restricts adding another task if previous one is empty, but can be worked around by creating and filling many tasks, and them emptying them later. Possible solution is to use an *ngIf to remove the array element if the task is left empty.*/

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

    goToDiary(){
      this.navCtrl.navigateForward("/journal");
    }

    get mindArray(){
        return MindChecklistPage.mindArray;
    }
}
