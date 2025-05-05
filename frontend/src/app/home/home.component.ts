import { Component } from '@angular/core';
import { TaskListComponent } from '../components/task-list/task-list.component'; 
import { TaskFormComponent } from '../components/task-form/task-form.component'; 
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ HttpClientModule, TaskListComponent, TaskFormComponent], 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}

