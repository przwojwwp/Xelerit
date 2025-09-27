import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { Habit } from './models/habit.model';
import { HabitListComponent } from './components/habit-list/habit-list.component';
import { AddHabitDialogComponent } from './components/add-habit-dialog/add-habit-dialog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatProgressBarModule,
    HabitListComponent,
  ],
})
export class AppComponent {
  habits: Habit[] = [
    {
      id: 1,
      name: 'Woda',
      goal: 8,
      progress: 3,
      unit: 'szklanki',
      icon: '💧',
      color: 'linear-gradient(to right,#89f7fe,#66a6ff)',
      description: 'Nawodnij organizm',
      history: [3, 5, 6, 8, 7],
    },
    {
      id: 2,
      name: 'Kroki',
      goal: 10000,
      progress: 4000,
      unit: 'kroki',
      icon: '🚶',
      color: 'linear-gradient(to right,#56ab2f,#a8e063)',
      description: 'Idź na spacer!',
      history: [2000, 7000, 10000, 5000],
    },
    {
      id: 3,
      name: 'Sen',
      goal: 8,
      progress: 5,
      unit: 'godziny',
      icon: '🌙',
      color: 'linear-gradient(to right,#a18cd1,#fbc2eb)',
      description: 'Zadbaj o odpoczynek',
      history: [6, 7, 8, 8, 5],
    },
  ];

  constructor(private dialog: MatDialog) {}

  openAddHabitDialog() {
    const dialogRef = this.dialog.open(AddHabitDialogComponent);
    dialogRef.afterClosed().subscribe((result: Habit) => {
      if (result) {
        this.habits.push({ ...result, id: Date.now() });
      }
    });
  }

  handleUpdate(updatedHabit: Habit) {
    this.habits = this.habits.map((h) => (h.id === updatedHabit.id ? updatedHabit : h));
  }

  get completedHabits() {
    return this.habits.filter((h) => h.progress >= h.goal).length;
  }

  get completionRate() {
    return (this.completedHabits / this.habits.length) * 100;
  }
}
