import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';
import {Task} from '../../Task';
import {UiService} from '../../services/ui.service';
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  @Input() task!: Task;
  @Output() onEditTask: EventEmitter<Task> = new EventEmitter()
  text?: string;
  day?: string;
  showEditTask: [boolean,number] = [false, 1]
  subscription!:Subscription;

  constructor(private uiService: UiService) { 
    this.subscription = this.uiService
      .onToggleEdit()
      .subscribe(n => this.showEditTask = n)
  }

  ngOnInit(): void {
  }

  onEdit(task: Task): void {
    this.task.text = this.text? this.text: this.task.text;
    this.task.day = this.day? this.day: this.task.day;
    this.onEditTask.emit(task);
  }

}
