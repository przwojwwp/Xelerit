import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Habit } from '../../models/habit.model';
import { HabitCardComponent } from '../habit-card/habit-card.component';

@Component({
  selector: 'app-habit-list',
  standalone: true,
  templateUrl: './habit-list.component.html',
  styleUrls: ['./habit-list.component.css'],
  imports: [CommonModule, HabitCardComponent],
})
export class HabitListComponent {
  @Input() habits: Habit[] = [];
  @Output() update = new EventEmitter<Habit>();
  @Output() delete = new EventEmitter<number>();
}
