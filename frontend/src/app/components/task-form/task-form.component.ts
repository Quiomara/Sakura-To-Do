import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TaskService, Task } from '../../services/task.service';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})

export class TaskFormComponent {
  newTaskTitle: string = '';

  constructor(private taskService: TaskService) { }

  addTask() {
    if (!this.newTaskTitle.trim()) return;

    const newTask: Task = {
      title: this.newTaskTitle.trim(),
      completed: false
    };

    this.taskService.createTask(newTask).subscribe({
      next: () => {
        this.newTaskTitle = '';
        // Efecto visual
        const button = document.querySelector('.sakura-button');
        button?.classList.add('clicked');
        setTimeout(() => button?.classList.remove('clicked'), 300);
      },
      error: (err) => console.error(err)
    });
  }
}