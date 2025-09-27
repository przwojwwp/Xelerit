import { Component } from '@angular/core';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Habit } from '../../models/habit.model';

@Component({
  selector: 'app-add-habit-dialog',
  standalone: true,
  templateUrl: './add-habit-dialog.component.html',
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class AddHabitDialogComponent {
  name: string = '';
  goal: number = 1;
  unit: string = '';

  constructor(private dialogRef: MatDialogRef<AddHabitDialogComponent>) {}

  save() {
    const habit: Habit = {
      id: 0,
      name: this.name,
      goal: this.goal,
      progress: 0,
      unit: this.unit || '',
    };
    this.dialogRef.close(habit);
  }

  cancel() {
    this.dialogRef.close();
  }
}
