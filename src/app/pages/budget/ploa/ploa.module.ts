import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdSortableHeader } from '../sortable.directive';
import { RouterModule, Routes } from "@angular/router";
import { PloaComponent } from './ploa.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule
    
  ],
  declarations: [PloaComponent, NgbdSortableHeader],
  exports: [PloaComponent],
  bootstrap: [PloaComponent]
})
export class PloaComponentModule {}