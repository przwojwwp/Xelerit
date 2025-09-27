import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Habit } from '../../models/habit.model';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-habit-card',
  standalone: true,
  templateUrl: './habit-card.component.html',
  styleUrls: ['./habit-card.component.css'],
  imports: [CommonModule, MatCardModule, MatProgressBarModule, MatButtonModule],
})
export class HabitCardComponent {
  @Input() habit!: Habit;
  @Output() onUpdate = new EventEmitter<Habit>();

  increment() {
    this.onUpdate.emit({ ...this.habit, progress: this.habit.progress + 1 });
  }

  decrement() {
    if (this.habit.progress > 0) {
      this.onUpdate.emit({ ...this.habit, progress: this.habit.progress - 1 });
    }
  }
}
