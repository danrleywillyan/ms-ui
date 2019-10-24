import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoColumnsTablesComponent } from './twoColumnsTables.component';

describe('TwoColumnsTablesComponent', () => {
  let component: TwoColumnsTablesComponent;
  let fixture: ComponentFixture<TwoColumnsTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoColumnsTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoColumnsTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
