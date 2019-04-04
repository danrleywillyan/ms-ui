import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FarmPopComponent} from './farm-pop/farm-pop.component';
import {FarmPopRoutingModule} from './farm-pop-routing.module';
import {FormsModule} from '@angular/forms';
import {LayoutModule} from '@angular/cdk/layout';
import {LocalStorageService} from '../admin/services/admin-storage-service';
import {RequestElucidationComponent} from './request-elucidation/request-elucidation.component';

@NgModule({
  imports: [
    CommonModule,
    FarmPopRoutingModule,
    FormsModule,
    LayoutModule
  ],
  declarations: [
    FarmPopComponent,
    RequestElucidationComponent
  ],
  providers: [LocalStorageService],
})
export class FarmPopModule { }
