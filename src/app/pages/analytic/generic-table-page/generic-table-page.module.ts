import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdSortableHeader } from '../sortable.directive';
import { GenericPage } from './generic-table-page.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [GenericPage, NgbdSortableHeader],
  exports: [GenericPage],
  bootstrap: [GenericPage]
})
export class BasicComponentModule {}