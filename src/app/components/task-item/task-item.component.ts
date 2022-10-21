import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Task} from '../../Task'
import { faTimes, faPencil, faFloppyDisk} from '@fortawesome/free-solid-svg-icons';
import {Subscription} from 'rxjs';
import {UiService} from '../../services/ui.service'


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() onDeleteTask:EventEmitter<Task> = new EventEmitter()
  @Output() onToggleReminder:EventEmitter<Task> = new EventEmitter()
  @Output() onToggleEdit = new EventEmitter()
  @Output() onEditTask: EventEmitter<Task> = new EventEmitter()
  fontTimes = faTimes;
  fontEdit= faPencil;
  fontSave = faFloppyDisk;
  subscription: Subscription;
  showEditTask:[boolean,number] = [false, 1]

  constructor(private uiService: UiService) { 
    this.subscription = this.uiService
      .onToggleEdit()
      .subscribe(n => this.showEditTask = n)
  }

  ngOnInit(): void {
  }

  onDelete(task:Task): void {
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task): void {
    this.onToggleReminder.emit(task);
  }

  onEdit(task: Task): void {
    this.onEditTask.emit(task)
  }

  toggleEdit(): void {
    this.uiService.toggleEditTask(this.task.id)
  }

}
