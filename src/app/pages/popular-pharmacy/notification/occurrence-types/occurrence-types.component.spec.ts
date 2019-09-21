import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OccurrenceTypesComponent } from './occurrence-types.component';

describe('OccurrenceTypesComponent', () => {
  let component: OccurrenceTypesComponent;
  let fixture: ComponentFixture<OccurrenceTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OccurrenceTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OccurrenceTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
