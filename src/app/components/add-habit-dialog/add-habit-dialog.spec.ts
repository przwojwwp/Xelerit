import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHabitDialog } from './add-habit-dialog.component';

describe('AddHabitDialog', () => {
  let component: AddHabitDialog;
  let fixture: ComponentFixture<AddHabitDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddHabitDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddHabitDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
