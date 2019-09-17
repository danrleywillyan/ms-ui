import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AquisitionComponent } from './aquisition.component';

describe('AquisitionComponent', () => {
  let component: AquisitionComponent;
  let fixture: ComponentFixture<AquisitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AquisitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AquisitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
