import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourTableComponent } from './four-tables.component';

describe('FourTableComponent', () => {
  let component: FourTableComponent;
  let fixture: ComponentFixture<FourTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
