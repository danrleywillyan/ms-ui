import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TemplatesLayoutComponent } from './layouts/templates-layout/templates-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import {LoaderComponent} from './components/loader/loader.component';
import {AppLayoutModule} from './layouts/app-layout/app-layout.module';
import { TransactionsFilterPipe } from './pipes/filters/transactions-filter.pipe';
import { TransferComponent } from './pages/analytic/basic-coord/transfer/transfer.component';
import { AquisitionComponent } from './pages/analytic/basic-coord/aquisition/aquisition.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    AppLayoutModule
  ],
  declarations: [
    AppComponent,
    AppLayoutComponent,
    TemplatesLayoutComponent,
    AuthLayoutComponent,
    TransferComponent,
    AquisitionComponent
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LoaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
