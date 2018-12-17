import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryDatesPage } from './diary-dates.page';

describe('DiaryDatesPage', () => {
  let component: DiaryDatesPage;
  let fixture: ComponentFixture<DiaryDatesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaryDatesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaryDatesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
