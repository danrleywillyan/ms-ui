import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FarmPopComponent } from './farm-pop/farm-pop.component';
import { FarmPopRoutingModule } from './farm-pop-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { LocalStorageService } from '../admin/services/admin-storage-service';
import { HttpClientModule } from '@angular/common/http';
import { RequestElucidationComponent } from './request-elucidation/request-elucidation.component';
import { RequestElucidationV1Component } from './request-elucidation-v1/request-elucidation-v1.component';
import { ManterOcorrenciaComponent } from './manter-ocorrencia/manter-ocorrencia.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    FarmPopRoutingModule,
    HttpClientModule,
    LayoutModule
  ],
  declarations: [
    FarmPopComponent,
    RequestElucidationComponent,
    RequestElucidationV1Component,
    ManterOcorrenciaComponent
  ],
  providers: [
    DatePipe,
    LocalStorageService
  ],
})
export class FarmPopModule { }
