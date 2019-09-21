import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecializedCoordComponent } from './specialized-coord.component';

describe('SpecializedCoordComponent', () => {
  let component: SpecializedCoordComponent;
  let fixture: ComponentFixture<SpecializedCoordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecializedCoordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecializedCoordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
