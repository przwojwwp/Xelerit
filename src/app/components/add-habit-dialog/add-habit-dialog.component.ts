import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { Habit } from '../../models/habit.model';

@Component({
  selector: 'app-add-habit-dialog',
  standalone: true,
  templateUrl: './add-habit-dialog.component.html',
  styleUrls: ['./add-habit-dialog.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
  ],
})
export class AddHabitDialogComponent {
  // Formularzowe pola
  name: string = '';
  goal: number = 1;
  unit: string = '';
  icon: string = '✨';
  color: string = 'linear-gradient(to right, #ece9e6, #ffffff)';

  selectedHabit: any = null;

  // domyślne nawyki do wyboru
  defaultHabits = [
    {
      name: 'Woda',
      unit: 'szklanki',
      goal: 8,
      icon: 'fa-droplet fa-solid',
      color: 'linear-gradient(to right,#89f7fe,#66a6ff)',
    },
    {
      name: 'Sen',
      unit: 'godziny',
      goal: 8,
      icon: 'fa-bed fa-solid',
      color: 'linear-gradient(to right,#a18cd1,#fbc2eb)',
    },
    {
      name: 'Kroki',
      unit: 'kroki',
      goal: 10000,
      icon: 'fa-shoe-prints fa-solid',
      color: 'linear-gradient(to right,#56ab2f,#a8e063)',
    },
    {
      name: 'Meditation',
      unit: 'minuty',
      goal: 10,
      icon: 'fa-solid fa-spa',
      color: 'linear-gradient(to right,#43cea2,#185a9d)',
    },
    {
      name: 'Reading',
      unit: 'strony',
      goal: 20,
      icon: 'fas fa-book-reader',
      color: 'linear-gradient(to right,#ffd89b,#19547b)',
    },
  ];

  constructor(private dialogRef: MatDialogRef<AddHabitDialogComponent>) {}

  applyDefault(h: any) {
    this.name = h.name;
    this.unit = h.unit;
    this.goal = h.goal;
    this.icon = h.icon;
    this.color = h.color;
  }

  save() {
    const habit: Habit = {
      id: 0,
      name: this.name,
      goal: this.goal,
      progress: 0,
      unit: this.unit || '',
      icon: this.icon,
      color: this.color,
    };
    this.dialogRef.close(habit);
  }

  cancel() {
    this.dialogRef.close();
  }
}
