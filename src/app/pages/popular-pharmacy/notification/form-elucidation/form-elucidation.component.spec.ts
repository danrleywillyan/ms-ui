import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormElucidationComponent } from './form-elucidation.component';

describe('FormElucidationComponent', () => {
  let component: FormElucidationComponent;
  let fixture: ComponentFixture<FormElucidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormElucidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormElucidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
