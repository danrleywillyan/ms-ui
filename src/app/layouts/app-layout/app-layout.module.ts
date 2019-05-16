import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AppLayoutRoutes } from './app-layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from '../../pages/budget/dashboard/dashboard.component';
import { ElucidationComponent } from '../../pages/popular-pharmacy/notification/elucidation/elucidation.component';
import { NotificationComponent } from '../../pages/popular-pharmacy/notification/notification/notification.component';
import { RemedyLifecycleComponent } from '../../pages/budget/remedy-lifecycle/remedy-lifecycle.component';
import { OccurrenceTypesComponent } from '../../pages/popular-pharmacy/notification/occurrence-types/occurrence-types.component';
import { FormElucidationComponent } from '../../pages/popular-pharmacy/notification/form-elucidation/form-elucidation.component';
import {LoaderComponent} from '../../components/loader/loader.component';
import { MultaComponent } from '../../pages/popular-pharmacy/multa/multa.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AppLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    ReactiveFormsModule
  ],
  exports: [
    LoaderComponent
  ],
  declarations: [
    LoaderComponent,
    DashboardComponent,
    ElucidationComponent,
    NotificationComponent,
    DashboardComponent,
    RemedyLifecycleComponent,
    OccurrenceTypesComponent,
    FormElucidationComponent,
    MultaComponent
  ]
})

export class AppLayoutModule {}
