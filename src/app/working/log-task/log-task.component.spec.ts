import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogTaskComponent } from './log-task.component';

describe('LogTaskComponent', () => {
  let component: LogTaskComponent;
  let fixture: ComponentFixture<LogTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogTaskComponent]
    });
    fixture = TestBed.createComponent(LogTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
