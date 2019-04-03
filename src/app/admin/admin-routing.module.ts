import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent }           from './admin/admin.component';
import { AdminDashboardComponent }  from './admin-dashboard/admin-dashboard.component';
import { DafForm1Component }        from './daf-form1/daf-form1.component';
import { DafForm2Component }        from './daf-form2/daf-form2.component';
import { DafForm3Component }        from './daf-form3/daf-form3.component';

import { AuthGuard }                from '../auth/auth.guard';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: 'daf-form1', component: DafForm1Component },
          { path: 'daf-form2', component: DafForm2Component },
          { path: 'daf-form3', component: DafForm3Component },
          { path: '', component: AdminDashboardComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {}
