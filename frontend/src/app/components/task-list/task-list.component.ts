import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService, Task } from '../../services/task.service';
import { HttpClientModule } from '@angular/common/http';
import { DeleteConfirmModalComponent } from '../delete-confirm-modal/delete-confirm-modal.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, DeleteConfirmModalComponent],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  tasks: Task[] = [];
  showDeleteModal = false;
  taskToDelete: number | null = null;
  deletingTaskId: number | null = null;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe({
      next: (data: Task[]) => this.tasks = data,
      error: (err: unknown) => console.error('Error al cargar tareas:', err)
    });
  }

  toggleCompleted(task: Task): void {
    if (task.id === undefined) {
      console.error('La tarea no tiene un id asignado');
      return;
    }
  
    const updatedTask = { ...task, completed: !task.completed };
    this.taskService.updateTask(updatedTask).subscribe({
      error: (err) => console.error('Error al actualizar tarea:', err)
    });
  }

  deleteTask(id: number): void {
    if (id === undefined) {
      console.error('No se puede eliminar una tarea sin un id');
      return;
    }
    
    this.taskToDelete = id;
    this.showDeleteModal = true;
  }

  onDeleteConfirmed(): void {
    if (this.taskToDelete !== null) {
      this.deletingTaskId = this.taskToDelete;
      
      this.taskService.deleteTask(this.taskToDelete).subscribe({
        next: () => {
          this.tasks = this.tasks.filter(task => task.id !== this.taskToDelete);
          this.closeModal();
        },
        error: (err) => {
          console.error('Error al eliminar tarea:', err);
          this.closeModal();
        }
      });
    }
  }

  onDeleteCancelled(): void {
    this.closeModal();
  }

  private closeModal(): void {
    this.showDeleteModal = false;
    this.taskToDelete = null;
    this.deletingTaskId = null;
  }

  isTaskDeleting(taskId: number | undefined): boolean {
    return taskId !== undefined && taskId === this.deletingTaskId;
  }
}