import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Habit } from '../../models/habit.model';

@Component({
  selector: 'app-habit-edit-dialog',
  standalone: true,
  templateUrl: './habit-edit-dialog.component.html',
  styleUrls: ['./habit-edit-dialog.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class HabitEditDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<HabitEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Habit
  ) {}

  save() {
    this.dialogRef.close(this.data);
  }

  cancel() {
    this.dialogRef.close();
  }
}
