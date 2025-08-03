import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalaryComponent } from './salary/salary.component';
import { ReportComponent } from './report/report.component';
import { AdminWorkComponent } from './admin-work/admin-work.component';
import { FormsModule } from '@angular/forms'; // ✅ Add this
import { RouterModule } from '@angular/router';
import { MemberInfoComponent } from './member-info/member-info.component';


@NgModule({
  declarations: [
    AdminWorkComponent,
    SalaryComponent,
    ReportComponent,
    MemberInfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule  // ✅ Add this
  ]
})
export class AdminLookupModule { }

