import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {aquisitionComponent  } from './aquisition.component';

describe('aquisition.Component', () => {
  let component: aquisitionComponent;
  let fixture: ComponentFixture<aquisitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ aquisitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(aquisitionComponent);
    component = fixture.componentInstance; aquisitionComponent
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
