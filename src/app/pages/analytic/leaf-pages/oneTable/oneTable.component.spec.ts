import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneTableComponent } from './oneTable.component';

describe('OneTableComponent', () => {
  let component: OneTableComponent;
  let fixture: ComponentFixture<OneTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
