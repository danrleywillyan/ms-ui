import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';
import { TemplatesLayoutComponent } from './layouts/templates-layout/templates-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import {AppLayoutComponent} from './layouts/app-layout/app-layout.component';

const routes: Routes = [
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

  // Template Routes
  // {
  //   path: 'admin',
  //   redirectTo: 'templates/dashboard',
  //   pathMatch: 'full',
  // },

  {
    path: 'templates',
    component: TemplatesLayoutComponent,
    children: [
      {
        path: 'index',
        loadChildren: './layouts/templates-layout/templates-layout.module#TemplatesLayoutModule'
      }
    ]
  },

  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule'
      }
    ]
  }, {
    path: '**',
    redirectTo: 'dashboard'
  }
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
  ],
})
export class AppRoutingModule { }
