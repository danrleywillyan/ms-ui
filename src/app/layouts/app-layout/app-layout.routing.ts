import { Routes } from '@angular/router';
import { MaterialComponent } from '../../pages/predictive/material/material.component';
import { DashboardComponent } from '../../pages/budget/dashboard/dashboard.component';
import { PloaComponent } from '../../pages/budget/ploa/ploa.component';

import { AnalyticPage } from '../../pages/analytic/analytic-page.component';
import { TablesComponent } from '../../pages/analytic/leaf-pages/tables/tables.component';
import { OneTableComponent } from '../../pages/analytic/leaf-pages/oneTable/oneTable.component';
import { TwoColumnsTablesComponent } from '../../pages/analytic/leaf-pages/two-columns-tables/twoColumnsTables.component';
import { MedicineDetailsComponent } from '../../pages/analytic/leaf-pages/medicine-details/medicineDetails.component';

import { NotificationComponent } from '../../pages/popular-pharmacy/notification/notification/notification.component';
import { RemedyLifecycleComponent } from '../../pages/budget/remedy-lifecycle/remedy-lifecycle.component';
import { ElucidationComponent } from '../../pages/popular-pharmacy/notification/elucidation/elucidation.component';
import { ProcessesComponent } from '../../pages/popular-pharmacy/processes/processes.component';
import { FormElucidationComponent } from '../../pages/popular-pharmacy/notification/form-elucidation/form-elucidation.component';
import { OccurrenceTypesComponent } from '../../pages/popular-pharmacy/notification/occurrence-types/occurrence-types.component';
import { MulctComponent } from '../../pages/popular-pharmacy/mulct/mulct.component';
import { MedicationComponent } from 'src/app/pages/analytic/medication/medication.component';
import { CoursesComponent } from 'src/app/pages/courses/courses.component';

import { SProcessesComponent } from '../../pages/reports/processes/processes.component';
import { ReportIAFComponent } from 'src/app/pages/reports/report-iaf/report-iaf.component';
import { ReportIAComponent } from 'src/app/pages/reports/report-ia/report-ia.component';
import { ReportCNESComponent } from 'src/app/pages/reports/report-cnes/report-cnes.component';
import { ReportDataComponent } from 'src/app/pages/reports/report-data/report-data.component';

import { from } from 'rxjs';

export const AppLayoutRoutes: Routes = [
  // Overview paths
  { path: '', component: RemedyLifecycleComponent },
  { path: 'caf', component: RemedyLifecycleComponent },

  //=====================================================================================================
  // Predictive paths
  { path: 'predictive/material', component:MaterialComponent },

  //=====================================================================================================
  // Budget paths (Orçamento)
  { path: 'budget/dashboard', component: DashboardComponent },
  { path: 'budget/ploa', component: PloaComponent },

  //=====================================================================================================
  //Analytic paths (Visão Analítica)
  { path: 'analytic/medication/:coord', component: MedicationComponent},
  
  //-----------------------------------------------------------------------------------------------------
  { path: 'budget/:coord', component: AnalyticPage },
  { path: 'budget/:coord/:view', component: AnalyticPage },
  { path: 'budget/:coord/:view/:aggreg', component: AnalyticPage },
  { path: 'budget/:coord/:view/:aggreg/:detail', component: AnalyticPage },
  { path: 'budget/:coord/:view/:aggreg/:detail/leaf1', component: TablesComponent },
  { path: 'budget/:coord/:view/:aggreg/:detail/leaf2', component: OneTableComponent },
  { path: 'budget/:coord/:view/:aggreg/:detail/leaf3', component: MedicineDetailsComponent },
  { path: 'budget/:coord/:view/:aggreg/:detail/leaf4', component: TwoColumnsTablesComponent },
  //-----------------------------------------------------------------------------------------------------
  //=====================================================================================================
  // Predictive paths

  //=====================================================================================================
  // Popular Pharmacy
  { path: 'popular-pharmacy/notification/occurrences-types', component: OccurrenceTypesComponent },
  { path: 'popular-pharmacy/notification/form/:id', component: FormElucidationComponent },
  { path: 'popular-pharmacy/notification/form', component: FormElucidationComponent },
  { path: 'popular-pharmacy/notification', component: ElucidationComponent },
  { path: 'popular-pharmacy/mulct', component: MulctComponent },
  { path: 'popular-pharmacy/processes', component: ProcessesComponent },
  //=====================================================================================================
  // Research paths
  { path: 'research/processes', component: SProcessesComponent },
  { path: 'research/reportdata', component: ReportDataComponent },
  { path: 'research/reportcnes', component: ReportCNESComponent },
  { path: 'research/reportia', component: ReportIAComponent },
  { path: 'research/reportiaf', component: ReportIAFComponent },

  //=====================================================================================================
  // Trainning
  { path: 'training/courses', component: CoursesComponent },
];
