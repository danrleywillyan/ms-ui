import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticPage } from './analytic-page.component';

describe('AnalyticPage', () => {
  let component: AnalyticPage;
  let fixture: ComponentFixture<AnalyticPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
