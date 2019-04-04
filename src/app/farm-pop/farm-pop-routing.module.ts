import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FarmPopComponent} from './farm-pop/farm-pop.component';
import {RequestElucidationComponent} from './request-elucidation/request-elucidation.component';

// import { AuthGuard } from '../auth/auth.guard';

const farmPopRoutes: Routes = [
  {
    path: '',
    component: FarmPopComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        // canActivateChild: [AuthGuard],
        children: [
          { path: 'solicitacao-esclarescimento', component: RequestElucidationComponent }
          // { path: 'daf-form2', component: DafForm2Component },
          // { path: 'daf-form3', component: DafForm3Component },
          // { path: '', component: AdminDashboardComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(farmPopRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class FarmPopRoutingModule {}
