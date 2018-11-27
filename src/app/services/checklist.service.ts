import { Injectable } from '@angular/core';
import { ChecklistData } from '../data/checklist-data';

@Injectable({
  providedIn: 'root'
})
export class ChecklistService {
    
    public static mindArray:string[] = [""];
    public static bodyArray:string[] = [""];
    
    constructor() {
    }
    
    addTaskToBody(task:string){
        ChecklistService.bodyArray.push(task);
    }
    
    addTaskToMind(task:string){
        ChecklistService.mindArray.push(task);
    }
    
    get mindData(){
        return ChecklistService.mindArray;
    }
    
    get bodyData(){
        return ChecklistService.bodyArray;
    }
    
    /*
    addRecord(data:ChecklistData){
        ChecklistService.checklistRecords.push({data.today : [{"body":[]},{"mind":[]},{"journal":[]}]});
    }
    */
}
