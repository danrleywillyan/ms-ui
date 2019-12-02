import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TemplateSidebarComponent } from './templates-sidebar/templates-sidebar.component';
import { LoaderComponent } from './loader/loader.component';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    TemplateSidebarComponent,
    ChartComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    TemplateSidebarComponent,
    ChartComponent
  ]
})
export class ComponentsModule { }
