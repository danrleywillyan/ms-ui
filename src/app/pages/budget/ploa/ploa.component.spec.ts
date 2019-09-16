import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PloaComponent } from './ploa.component';

describe('PloaComponent', () => {
  let component: PloaComponent;
  let fixture: ComponentFixture<PloaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PloaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PloaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
