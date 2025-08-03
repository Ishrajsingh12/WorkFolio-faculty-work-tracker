import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-work',
  templateUrl: './admin-work.component.html',
  styleUrls: ['./admin-work.component.css']
})
export class AdminWorkComponent implements OnInit {

  constructor(private router: Router) {
    console.log('AdminWorkComponent initialized');
  }
  
  ngOnInit(): void {
    console.log('AdminWorkComponent: ngOnInit');
    
    const adminWorkVisits = JSON.parse(localStorage.getItem('workfolio_admin_work_visits') || '[]');
    adminWorkVisits.push({
      timestamp: new Date().toISOString(),
      referrer: document.referrer || 'direct'
    });
    localStorage.setItem('workfolio_admin_work_visits', JSON.stringify(adminWorkVisits));
    console.log(`Admin work page visited ${adminWorkVisits.length} times`);
    
    localStorage.setItem('workfolio_last_admin_work_visit', new Date().toISOString());
    
    const adminSession = JSON.parse(localStorage.getItem('workfolio_admin_session') || 'null');
    if (adminSession && adminSession.active) {
      console.log(`Admin session active for: ${adminSession.username}`);
    } else {
      console.log('No active admin session found');
    }
  }

 

  goToSalary(): void {
    console.log('Navigating to salary page');
    
    const salaryNavigations = JSON.parse(localStorage.getItem('workfolio_admin_salary_navigations') || '[]');
    salaryNavigations.push({
      timestamp: new Date().toISOString(),
      from: 'admin-work'
    });
    localStorage.setItem('workfolio_admin_salary_navigations', JSON.stringify(salaryNavigations));
    
    this.router.navigate(['/admin/salary']);
  }


  goToReport(): void {
    console.log('Navigating to report page');
    
    const reportNavigations = JSON.parse(localStorage.getItem('workfolio_admin_report_navigations') || '[]');
    reportNavigations.push({
      timestamp: new Date().toISOString(),
      from: 'admin-work'
    });
    localStorage.setItem('workfolio_admin_report_navigations', JSON.stringify(reportNavigations));
    
    this.router.navigate(['/admin/report']);
  }
}
