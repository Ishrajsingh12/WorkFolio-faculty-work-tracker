import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminWorkComponent } from './admin-lookup/admin-work/admin-work.component';
import { SalaryComponent } from './admin-lookup/salary/salary.component';
import { ReportComponent } from './admin-lookup/report/report.component';
import { MemberInfoComponent } from './admin-lookup/member-info/member-info.component';

import { DashboardComponent } from './working/dashboard/dashboard.component';
import { AnalyticsComponent } from './working/analytics/analytics.component';
import { LogTaskComponent } from './working/log-task/log-task.component';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AdminSignInComponent } from './admin-auth/admin-sign-in/admin-sign-in.component';
import { LandingComponent } from './landing/landing.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  // Default route
  { path: '', redirectTo: 'landing', pathMatch: 'full' },

  // Landing and auth
  { path: 'landing', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin-sign-in', component: AdminSignInComponent },

  // Admin-related routes
  { path: 'admin', component: AdminWorkComponent },
  { path: 'admin/salary', component: SalaryComponent },
  { path: 'admin/report', component: ReportComponent },
  { path: 'admin/member/:id', component: MemberInfoComponent },

  // User-protected routes
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'log-task', component: LogTaskComponent, canActivate: [AuthGuard] },
  { path: 'analytics', component: AnalyticsComponent, canActivate: [AuthGuard] },

  // Fallback route
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
