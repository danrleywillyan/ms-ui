import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericPage } from './generic-table-page.component';

describe('GenericPage', () => {
  let component: GenericPage;
  let fixture: ComponentFixture<GenericPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
