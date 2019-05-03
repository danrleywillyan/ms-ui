import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatesLayoutComponent } from './templates-layout.component';

describe('TemplatesLayoutComponent', () => {
  let component: TemplatesLayoutComponent;
  let fixture: ComponentFixture<TemplatesLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplatesLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
