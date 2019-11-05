import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';
import { AppLayoutRoutes } from './app-layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialComponent } from '../../pages/predictive/material/material.component';
import { DashboardComponent } from '../../pages/budget/dashboard/dashboard.component';
import { PloaComponent } from '../../pages/budget/ploa/ploa.component';
import { AnalyticPage } from '../../pages/analytic/analytic-page.component';
//leaf pages
import { TablesComponent } from '../../pages/analytic/leaf-pages/tables/tables.component';
import { OneTableComponent } from '../../pages/analytic/leaf-pages/oneTable/oneTable.component';
import { MedicineDetailsComponent } from '../../pages/analytic/leaf-pages/medicine-details/medicineDetails.component';
import { TwoColumnsTablesComponent } from '../../pages/analytic/leaf-pages/two-columns-tables/twoColumnsTables.component';
//leaf pages' end
import { ElucidationComponent } from '../../pages/popular-pharmacy/notification/elucidation/elucidation.component';
import { ProcessesComponent } from '../../pages/popular-pharmacy/processes/processes.component';
import { NotificationComponent } from '../../pages/popular-pharmacy/notification/notification/notification.component';
import { RemedyLifecycleComponent } from '../../pages/budget/remedy-lifecycle/remedy-lifecycle.component';
import { OccurrenceTypesComponent } from '../../pages/popular-pharmacy/notification/occurrence-types/occurrence-types.component';
import { FormElucidationComponent } from '../../pages/popular-pharmacy/notification/form-elucidation/form-elucidation.component';
import { LoaderComponent } from '../../components/loader/loader.component';
import { MulctComponent } from '../../pages/popular-pharmacy/mulct/mulct.component';
import { TransactionsFilterPipe } from '../../pipes/filters/transactions-filter.pipe';
import { ReplacePipe } from '../../pipes/filters/replace.pipe';
import { registerLocaleData } from '@angular/common';
import localeBr from '@angular/common/locales/br';
import { MedicationComponent } from 'src/app/pages/analytic/medication/medication.component';
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
    DashboardComponent,
    PloaComponent,
    AnalyticPage,
    TablesComponent,
    OneTableComponent,
    MedicineDetailsComponent,
    TwoColumnsTablesComponent,
    ElucidationComponent,
    ProcessesComponent,
    SProcessesComponent,
    NotificationComponent,
    DashboardComponent,
    RemedyLifecycleComponent,
    OccurrenceTypesComponent,
    FormElucidationComponent,
    MulctComponent,
    TransactionsFilterPipe,
    ReplacePipe,
    ShortNumberPipe,
    MedicationComponent,
    DataTableComponent,
    CoursesComponent,
    ReportIAFComponent,
    ReportIAComponent,
    ReportCNESComponent,
    ReportDataComponent
  ]
})

export class AppLayoutModule {}
