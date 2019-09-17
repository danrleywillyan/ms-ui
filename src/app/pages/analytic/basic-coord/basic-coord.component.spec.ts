import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicCoordComponent } from './basic-coord.component';

describe('BasicCoordComponent', () => {
  let component: BasicCoordComponent;
  let fixture: ComponentFixture<BasicCoordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicCoordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicCoordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
