import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {UiService} from '../../services/ui.service';
import {Subscription} from 'rxjs'
import {Task} from '../../Task'

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter()
  text!: string;
  day!: string;
  reminder: boolean = false;
  subscription!: Subscription;
  showAddTask!: boolean

  constructor(private uiService: UiService) { 
    this.subscription = this.uiService
      .onToggle()
      .subscribe(value => this.showAddTask = value)
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (!this.text) {
      alert('Please enter task!');
      return;
    }

    const newTask: Task = {
      id:4,
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddTask.emit(newTask)

    this.text = '';
    this.day = '';
    this.reminder = false    
  }

}
