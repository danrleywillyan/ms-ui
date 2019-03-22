import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { LoginComponent }    from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';

import { MatDialogModule } from '@angular/material/dialog';
import { LayoutModule }   from '@angular/cdk/layout';
import { MatButtonModule, MatIconModule, MatListModule,
          MatCardModule,
          MatInputModule,
          MatTableModule,
          MatMenuModule,
          MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    MatDialogModule,
    LayoutModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatMenuModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class AuthModule {}
