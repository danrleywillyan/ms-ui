import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MulctComponent } from './mulct.component';

describe('MulctComponent', () => {
  let component: MulctComponent;
  let fixture: ComponentFixture<MulctComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MulctComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MulctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
