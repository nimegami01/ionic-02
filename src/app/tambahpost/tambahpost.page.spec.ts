import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahpostPage } from './tambahpost.page';

describe('TambahpostPage', () => {
  let component: TambahpostPage;
  let fixture: ComponentFixture<TambahpostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TambahpostPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahpostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
