import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Habit } from '../../models/habit.model';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialog } from '@angular/material/dialog';
import { HabitEditDialogComponent } from '../habit-edit-dialog/habit-edit-dialog.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-habit-card',
  standalone: true,
  templateUrl: './habit-card.component.html',
  styleUrls: ['./habit-card.component.css'],
  imports: [CommonModule, FormsModule, MatCardModule, MatButtonModule, MatProgressBarModule],
})
export class HabitCardComponent {
  @Input() habit!: Habit;
  @Output() onUpdate = new EventEmitter<Habit>();
  @Output() onDelete = new EventEmitter<number>();

  extraValue: number = 0;

  constructor(private dialog: MatDialog) {}

  addValue() {
    if (this.extraValue > 0) {
      this.onUpdate.emit({
        ...this.habit,
        progress: this.habit.progress + this.extraValue,
      });
      this.extraValue = 0;
    }
  }

  increment() {
    this.onUpdate.emit({ ...this.habit, progress: this.habit.progress + 1 });
  }
  decrement() {
    if (this.habit.progress > 0)
      this.onUpdate.emit({ ...this.habit, progress: this.habit.progress - 1 });
  }
  delete() {
    this.onDelete.emit(this.habit.id);
  }

  openEditDialog() {
    const dialogRef = this.dialog.open(HabitEditDialogComponent, {
      width: '200px',
      data: { ...this.habit },
    });

    dialogRef.afterClosed().subscribe((result: Habit | undefined) => {
      if (result) {
        this.onUpdate.emit(result);
      }
    });
  }
}
