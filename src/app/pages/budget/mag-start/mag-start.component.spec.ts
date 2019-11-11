import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagStartComponent } from './mag-start.component';

describe('MagStartComponent', () => {
  let component: MagStartComponent;
  let fixture: ComponentFixture<MagStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
