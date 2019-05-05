import { Routes } from '@angular/router';
import { DashboardComponent } from '../../pages/budget/dashboard/dashboard.component';
import { NotificationComponent } from '../../pages/popular-pharmacy/notification/notification/notification.component';

export const AppLayoutRoutes: Routes = [
  // Budget paths (Orçamento)
  { path: '', component: DashboardComponent },
  { path: 'budget/dashboard', component: DashboardComponent },

  // Predictive paths

  // Popular Pharmacy
  { path: 'popular-pharmacy/notification', component: NotificationComponent }
];
