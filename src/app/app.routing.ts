import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import {Routes, RouterModule, Route} from '@angular/router';

import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';
import { TemplatesLayoutComponent } from './layouts/templates-layout/templates-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import {AppLayoutComponent} from './layouts/app-layout/app-layout.component';
import {IconsComponent} from './pages/templates/icons/icons.component';

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

  // {path: '', redirectTo: 'dashboard', pathMatch: 'full'},

  // {
  //   path: 'icons',
  //   component: IconsComponent
  // },

  // Template Routes
  // {
  //   path: 'admin',
  //   redirectTo: 'templates/dashboard',
  //   pathMatch: 'full',
  // },

  // {
  //   path: 'templates',
  //   component: TemplatesLayoutComponent,
  //   children: [
  //     {
  //       path: 'index',
  //       loadChildren: './layouts/templates-layout/templates-layout.module#TemplatesLayoutModule'
  //     },
  //     // {
  //     //   path: 'icons',
  //     //   component: IconsComponent
  //     // },
  //   ]
  // },
  //
  // {
  //   path: 'auth',
  //   component: AuthLayoutComponent,
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule'
  //     }
  //   ]
  // }, {
  //   path: '**',
  //   redirectTo: 'dashboard'
  // }
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
