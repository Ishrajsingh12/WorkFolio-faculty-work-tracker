import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AdminLookupModule } from './admin-lookup/admin-lookup.module';
import { AuthModule } from './auth/auth.module';
import { AdminAuthModule } from './admin-auth/admin-auth.module';
import { WorkingModule } from './working/working.module';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent
    // No need to declare DashboardComponent, LogTaskComponent, or AnalyticsComponent here
    // They are declared and exported in WorkingModule
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminLookupModule,
    AuthModule,
    AdminAuthModule,
    WorkingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
