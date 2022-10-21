import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask: boolean = false;
  private showEditTask: [boolean,number] = [false,0];
  private editSubject = new Subject<[boolean,number]>();
  private subject = new Subject<boolean>();

  constructor() { }

  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  toggleEditTask(task: number): void {
    this.showEditTask[0] = !this.showEditTask[0];
    this.showEditTask[1] = task
    this.editSubject.next(this.showEditTask)
  }

  onToggle(): Observable<boolean> {
    return this.subject.asObservable();
  }

  onToggleEdit(): Observable<[boolean,number]> {
    return this.editSubject.asObservable();
  }
}
