import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdSortableHeader } from '../sortable.directive';
import { StrategicComponent } from './strategic.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [StrategicComponent, NgbdSortableHeader],
  exports: [StrategicComponent],
  bootstrap: [StrategicComponent]
})
export class StrategicComponentModule {}