import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecializedComponent  } from './aquisition.component';
import { StrategicComponent } from '../../strategic/strategic.component';
import { STransferComponent } from '../transfer/transfer.component';

describe('TransferComponent', () => {
  let component: StrategicComponent;
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
