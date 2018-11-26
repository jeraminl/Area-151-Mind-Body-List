import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MindChecklistPage } from './mind-checklist.page';

const routes: Routes = [
  {
    path: '',
    component: MindChecklistPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MindChecklistPage]
})
export class MindChecklistPageModule {}
