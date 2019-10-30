import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElucidationComponent } from './elucidation.component';

describe('ElucidationComponent', () => {
  let component: ElucidationComponent;
  let fixture: ComponentFixture<ElucidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElucidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElucidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
