import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrySubmittedPage } from './entry-submitted.page';

describe('EntrySubmittedPage', () => {
  let component: EntrySubmittedPage;
  let fixture: ComponentFixture<EntrySubmittedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrySubmittedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrySubmittedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
