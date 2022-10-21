import { Component, OnInit } from '@angular/core';
import {observable, of} from 'rxjs'
import {Task} from '../../Task';
import {TaskService} from '../../services/task.service'


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  deleteTask(task: Task): void {
    this.taskService
    .deleteTask(task)
    .subscribe(
      () => this.tasks = this.tasks.filter(
      (t) => t.id !== task.id));
  }

  toggleReminder(task: Task): void {
    task.reminder = !task.reminder;
    this.taskService.updateTask(task).subscribe()
  }

  addTask(task: Task): void {
    this.taskService.addTask(task).subscribe(task => this.tasks.push(task));
  }

  editTask(task: Task): void {
    this.taskService.updateTask(task).subscribe()
  }

}
