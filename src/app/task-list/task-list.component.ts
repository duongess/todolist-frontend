import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TASKS } from '../mock-tasks';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, RouterLink], // Nhập CommonModule cho *ngFor, *ngIf và RouterLink cho việc chuyển trang
  templateUrl: './task-list.component.html'
})
export class TaskListComponent {
  // Gán nguồn dữ liệu giả lập cho thuộc tính component
  tasks = TASKS;
}