export interface Habit {
  id: number;
  name: string;
  goal: number;
  progress: number;
  unit: string;
  icon: string;
  color: string;
  description?: string;
  history?: number[];
}
