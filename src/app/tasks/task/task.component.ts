import { Component, inject, Input } from '@angular/core';

import { TasK } from './task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',

  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: TasK;
  private taskService = inject(TasksService);
  onCompleteTask() {
    this.taskService.removeTask(this.task.id);
  }
}
