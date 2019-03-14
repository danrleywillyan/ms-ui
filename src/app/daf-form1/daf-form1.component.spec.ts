import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DafForm1Component } from './daf-form1.component';

describe('DafForm1Component', () => {
  let component: DafForm1Component;
  let fixture: ComponentFixture<DafForm1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DafForm1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DafForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
