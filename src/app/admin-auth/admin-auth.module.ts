import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AdminSignInComponent } from './admin-sign-in/admin-sign-in.component';

@NgModule({
  declarations: [
    AdminSignInComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class AdminAuthModule { }
