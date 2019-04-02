import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { LayoutModule }   from '@angular/cdk/layout';

import { LoginComponent }    from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    LayoutModule,
    CommonModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class AuthModule {}
