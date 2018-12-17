import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiaryService {
  public static entryCurrent:string = "testing";
  public static allEntries:string[] = [];

  constructor() { }
}
