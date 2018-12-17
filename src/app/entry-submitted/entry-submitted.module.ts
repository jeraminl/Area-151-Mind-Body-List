import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EntrySubmittedPage } from './entry-submitted.page';

const routes: Routes = [
  {
    path: '',
    component: EntrySubmittedPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EntrySubmittedPage]
})
export class EntrySubmittedPageModule {}
