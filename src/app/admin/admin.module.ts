import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { LayoutModule }   from '@angular/cdk/layout';

import { AdminComponent }           from './admin/admin.component';
import { AdminDashboardComponent }  from './admin-dashboard/admin-dashboard.component';
import { DafForm1Component }        from './daf-form1/daf-form1.component';
import { DafForm2Component }        from './daf-form2/daf-form2.component';
import { DafForm3Component }        from './daf-form3/daf-form3.component';


import { AdminRoutingModule }       from './admin-routing.module';

import { LocalStorageService } from './services/admin-storage-service';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    LayoutModule
  ],
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    DafForm1Component,
    DafForm2Component,
    DafForm3Component
  ],
  providers: [LocalStorageService],
})
export class AdminModule {}
