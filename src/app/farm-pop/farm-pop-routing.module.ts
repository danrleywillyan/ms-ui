import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FarmPopComponent} from './farm-pop/farm-pop.component';
import {RequestElucidationComponent} from './request-elucidation/request-elucidation.component';
import {RequestElucidationV1Component} from './request-elucidation-v1/request-elucidation-v1.component';
import {ManterOcorrenciaComponent} from './manter-ocorrencia/manter-ocorrencia.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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
          { path: 'solicitacao-esclarecimento', component: RequestElucidationComponent },
          { path: 'solicitacao-esclarecimento-v1', component: RequestElucidationV1Component },
          { path: 'manter-ocorrencia', component: ManterOcorrenciaComponent }
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
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(farmPopRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class FarmPopRoutingModule {}
