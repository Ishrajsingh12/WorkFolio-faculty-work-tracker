import { Injectable } from '@angular/core';

export interface Task {
  subject: string;
  workType: string;
  hours: number;
  date: string;
  description?: string;
}

@Injectable({
  providedIn: 'root'
})
export class LogTaskService {
  private tasks: Task[] = [];

  getTasks(): Task[] {
    return this.tasks;
  }

  setTasks(tasks: Task[]): void {
    this.tasks = tasks;
  }
}
