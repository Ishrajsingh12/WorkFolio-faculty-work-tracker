// src/app/working/services/dashboard.services.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private subjectData = new BehaviorSubject<{ name: string; hours: number }[]>([]);
  subjectData$ = this.subjectData.asObservable();

  updateSubjectData(data: { name: string; hours: number }[]) {
    this.subjectData.next(data);
  }
}
