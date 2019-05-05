import { Routes } from '@angular/router';
import { DashboardComponent } from '../../pages/budget/dashboard/dashboard.component';
import { RemedyLifecycleComponent } from '../../pages/budget/remedy-lifecycle/remedy-lifecycle.component';

export const AppLayoutRoutes: Routes = [
  // Budget paths (Orçamento)
  { path: '', component: DashboardComponent },
  { path: 'budget/dashboard', component: DashboardComponent },
  { path: 'budget/remedy-lifecycle', component: RemedyLifecycleComponent }

  // Predictive paths

  // Popular Pharmacy

];
