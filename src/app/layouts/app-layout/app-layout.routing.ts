import { Routes } from '@angular/router';
import { DashboardComponent } from '../../pages/budget/dashboard/dashboard.component';
import { NotificationComponent } from '../../pages/popular-pharmacy/notification/notification/notification.component';
import { RemedyLifecycleComponent } from '../../pages/budget/remedy-lifecycle/remedy-lifecycle.component';
import { ElucidationComponent } from '../../pages/popular-pharmacy/notification/elucidation/elucidation.component';
import {FormElucidationComponent} from '../../pages/popular-pharmacy/notification/form-elucidation/form-elucidation.component';
import {OccurrenceTypesComponent} from '../../pages/popular-pharmacy/notification/occurrence-types/occurrence-types.component';

export const AppLayoutRoutes: Routes = [
  // Budget paths (Orçamento)
  { path: '', component: DashboardComponent },
  { path: 'budget/dashboard', component: DashboardComponent },
  { path: 'budget/remedy-lifecycle', component: RemedyLifecycleComponent },

  // Predictive paths


  // Popular Pharmacy
  { path: 'popular-pharmacy/notification', component: NotificationComponent },
  { path: 'popular-pharmacy/notification/elucidation', component: ElucidationComponent },
  { path: 'popular-pharmacy/notification/elucidation/form', component: FormElucidationComponent },
  { path: 'popular-pharmacy/notification/occurrences-types', component: OccurrenceTypesComponent }
];
