import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Habit } from '../../models/habit.model';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-habit-card',
  standalone: true,
  templateUrl: './habit-card.component.html',
  styleUrls: ['./habit-card.component.css'],
  imports: [CommonModule, MatCardModule, MatProgressBarModule, MatButtonModule, FormsModule],
})
export class HabitCardComponent {
  @Input() habit!: Habit;
  @Output() onUpdate = new EventEmitter<Habit>();
  @Output() onDelete = new EventEmitter<number>();

  extraValue: number = 0;
  editMode = false;

  increment() {
    this.onUpdate.emit({ ...this.habit, progress: this.habit.progress + 1 });
  }

  decrement() {
    if (this.habit.progress > 0) {
      this.onUpdate.emit({ ...this.habit, progress: this.habit.progress - 1 });
    }
  }

  addValue() {
    if (this.extraValue > 0) {
      this.onUpdate.emit({ ...this.habit, progress: this.habit.progress + this.extraValue });
      this.extraValue = 0;
    }
  }

  toggleEdit() {
    this.editMode = !this.editMode;
  }

  saveGoal() {
    this.onUpdate.emit({ ...this.habit, goal: this.habit.goal });
    this.editMode = false;
  }

  delete() {
    this.onDelete.emit(this.habit.id);
  }
}
