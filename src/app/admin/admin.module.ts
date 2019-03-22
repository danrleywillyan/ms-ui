import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { AdminComponent }           from './admin/admin.component';
import { AdminDashboardComponent }  from './admin-dashboard/admin-dashboard.component';
import { DafForm1Component }        from './daf-form1/daf-form1.component';
import { DafForm2Component }        from './daf-form2/daf-form2.component';

import { AdminRoutingModule }       from './admin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    DafForm1Component,
    DafForm2Component
  ]
})
export class AdminModule {}
