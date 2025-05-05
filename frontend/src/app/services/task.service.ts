import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { startWith, switchMap, tap } from 'rxjs/operators';

export interface Task {
  id?: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/api/tasks';
  private refresh$ = new Subject<void>();

  constructor(private http: HttpClient) {}

  // Método para forzar la actualización
  refreshTasks() {
    this.refresh$.next();
  }

  getTasks(): Observable<Task[]> {
    return this.refresh$.pipe(
      startWith(undefined),
      switchMap(() => this.http.get<Task[]>(this.apiUrl))
    );
  }

  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task).pipe(
      tap(() => this.refresh$.next())
    );
  }
  
  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.apiUrl}/${task.id}`, task).pipe(
      tap(() => this.refresh$.next())
    );
  }

  deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      tap(() => this.refresh$.next())
    );
  }
}