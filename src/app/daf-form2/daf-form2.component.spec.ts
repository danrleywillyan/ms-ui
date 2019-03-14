import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DafForm2Component } from './daf-form2.component';

describe('DafForm2Component', () => {
  let component: DafForm2Component;
  let fixture: ComponentFixture<DafForm2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DafForm2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DafForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
