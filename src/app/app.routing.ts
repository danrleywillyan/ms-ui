import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import {Routes, RouterModule, Route} from '@angular/router';

import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';
import { TemplatesLayoutComponent } from './layouts/templates-layout/templates-layout.component';
import {AppLayoutComponent} from './layouts/app-layout/app-layout.component';



const routes: Routes = [
  // Real & Final layout routes
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/app-layout/app-layout.module#AppLayoutModule'
      }
    ]
  },

  // Templates & documentations routes
  {
    path: 'templates',
    component: TemplatesLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/templates-layout/templates-layout.module#TemplatesLayoutModule'
      }
    ]
  },

  // Generic/Error Pages
  {
    path: '**',
    redirectTo: 'budget/dashboard'
  },

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(
      routes,
      {
        enableTracing: false, // <-- debugging purposes only
        preloadingStrategy: SelectivePreloadingStrategyService
    })
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
