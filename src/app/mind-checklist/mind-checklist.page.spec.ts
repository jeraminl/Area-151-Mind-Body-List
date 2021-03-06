import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MindChecklistPage } from './mind-checklist.page';

describe('MindChecklistPage', () => {
  let component: MindChecklistPage;
  let fixture: ComponentFixture<MindChecklistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MindChecklistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MindChecklistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
