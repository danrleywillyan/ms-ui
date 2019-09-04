import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemedyLifecycleComponent } from './remedy-lifecycle.component';

describe('RemedyLifecycleComponent', () => {
  let component: RemedyLifecycleComponent;
  let fixture: ComponentFixture<RemedyLifecycleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemedyLifecycleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemedyLifecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
