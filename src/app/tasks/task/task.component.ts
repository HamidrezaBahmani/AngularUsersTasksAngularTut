import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { TasK } from './task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: TasK;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask() {
    this.complete.emit(this.task.id);
  }
}
