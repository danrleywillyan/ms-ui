import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DafForm1Component } from './daf-form1/daf-form1.component';
import { DafForm2Component } from './daf-form2/daf-form2.component';

const appRoutes: Routes = [
  { path: 'daf-form1', component: DafForm1Component },
  { path: 'daf-form2', component: DafForm2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
