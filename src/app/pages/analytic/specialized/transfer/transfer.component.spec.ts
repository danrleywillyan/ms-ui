import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { STransferComponent  } from './transfer.component';

describe('TransferComponent', () => {
  let component: STransferComponent;
  let fixture: ComponentFixture<STransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ STransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(STransferComponent);
    component = fixture.componentInstance; STransferComponent
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
