import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'MindChecklist', loadChildren: './mind-checklist/mind-checklist.module#MindChecklistPageModule' },
  { path: 'Settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'journal', loadChildren: './journal/journal.module#JournalPageModule' },  { path: 'diaryDates', loadChildren: './diary-dates/diary-dates.module#DiaryDatesPageModule' },
  { path: 'entrySubmitted', loadChildren: './entry-submitted/entry-submitted.module#EntrySubmittedPageModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
