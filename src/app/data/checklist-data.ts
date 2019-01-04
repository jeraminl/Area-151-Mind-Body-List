export class ChecklistData {
    today:Date = new Date();
    dataType:string;
    dataInt:number;
    dataReturned;

    day:string = this.today.getMonth() + "/" + this.today.getDate() + "/" + this.today.getFullYear();

}
