import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { Habit } from './models/habit.model';
import { HabitListComponent } from './components/habit-list/habit-list.component';
import { AddHabitDialogComponent } from './components/add-habit-dialog/add-habit-dialog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: [],
  imports: [CommonModule, MatToolbarModule, MatButtonModule, HabitListComponent],
})
export class AppComponent {
  habits: Habit[] = [
    { id: 1, name: 'Woda', goal: 8, progress: 3, unit: 'szklanki' },
    { id: 2, name: 'Kroki', goal: 10000, progress: 4000, unit: 'kroki' },
    { id: 3, name: 'Sen', goal: 8, progress: 5, unit: 'godziny' },
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
}
