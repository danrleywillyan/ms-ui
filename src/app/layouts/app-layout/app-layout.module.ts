import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';
import { AppLayoutRoutes } from './app-layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialComponent } from '../../pages/predictive/material/material.component';
import { MaterialDetailComponent } from '../../pages/predictive/material/material-detail/material-detail.component';
import { DashboardComponent } from '../../pages/budget/dashboard/dashboard.component';
import { PloaComponent } from '../../pages/budget/ploa/ploa.component';
import { AnalyticPage } from '../../pages/budget/analytic/analytic-page.component';
//leaf pages
import { TwoTableComponent } from '../../pages/budget/analytic/details/two-tables/two-tables.component';
import { BigTableComponent } from '../../pages/budget/analytic/details/big-table/big-table.component';
import { MedicationDetailsComponent } from '../../pages/budget/analytic/details/medication-details/medication-details.component';
import { FourTableComponent } from '../../pages/budget/analytic/details/four-tables/four-tables.component';
//leaf pages' end
import { ElucidationComponent } from '../../pages/popular-pharmacy/notification/elucidation/elucidation.component';
import { ProcessesComponent } from '../../pages/popular-pharmacy/processes/processes.component';
import { NotificationComponent } from '../../pages/popular-pharmacy/notification/notification/notification.component';
import { MagStartComponent } from '../../pages/budget/mag-start/mag-start.component';
import { OccurrenceTypesComponent } from '../../pages/popular-pharmacy/notification/occurrence-types/occurrence-types.component';
import { FormElucidationComponent } from '../../pages/popular-pharmacy/notification/form-elucidation/form-elucidation.component';
import { LoaderComponent } from '../../components/loader/loader.component';
import { MulctComponent } from '../../pages/popular-pharmacy/mulct/mulct.component';
import { TransactionsFilterPipe } from '../../pipes/filters/transactions-filter.pipe';
import { ReplacePipe } from '../../pipes/filters/replace.pipe';
import { registerLocaleData } from '@angular/common';
import localeBr from '@angular/common/locales/br';
import { ShortNumberPipe } from 'src/app/pipes/short-number.pipe';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { DataTableComponent } from '../../components/data-table/data-table.component';
import { CoursesComponent } from '../../pages/courses/courses.component';
import { SProcessesComponent } from '../../pages/reports/processes/processes.component';
import { ReportIAFComponent } from 'src/app/pages/reports/report-iaf/report-iaf.component';
import { ReportIAComponent } from 'src/app/pages/reports/report-ia/report-ia.component';
import { ReportCNESComponent } from 'src/app/pages/reports/report-cnes/report-cnes.component';
import { ReportDataComponent } from 'src/app/pages/reports/report-data/report-data.component';


registerLocaleData(localeBr);

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AppLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    ReactiveFormsModule,
    PdfViewerModule
  ],
  exports: [
    LoaderComponent
  ],
  declarations: [
    LoaderComponent,
    MaterialComponent,
    MaterialDetailComponent,
    DashboardComponent,
    PloaComponent,
    AnalyticPage,
    TwoTableComponent,
    BigTableComponent,
    MedicationDetailsComponent,
    FourTableComponent,
    ElucidationComponent,
    ProcessesComponent,
    SProcessesComponent,
    NotificationComponent,
    DashboardComponent,
    MagStartComponent,
    OccurrenceTypesComponent,
    FormElucidationComponent,
    MulctComponent,
    TransactionsFilterPipe,
    ReplacePipe,
    ShortNumberPipe,
    DataTableComponent,
    CoursesComponent,
    ReportIAFComponent,
    ReportIAComponent,
    ReportCNESComponent,
    ReportDataComponent
  ]
})

export class AppLayoutModule {}
