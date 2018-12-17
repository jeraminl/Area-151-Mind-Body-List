import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-entry-submitted',
  templateUrl: './entry-submitted.page.html',
  styleUrls: ['./entry-submitted.page.scss'],
})
export class EntrySubmittedPage implements OnInit {

  constructor( public navCtrl:NavController) { }

  ngOnInit() {
  }

  goToDiary(){
    this.navCtrl.navigateForward('/journal');
  }

}
