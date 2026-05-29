import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TASKS } from '../mock-tasks';
import { task } from '../task';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './task-list.component.html'
})
export class TaskListComponent {
  // Liên kết với mảng dữ liệu dùng chung
  tasks = TASKS;

  // Chuyển trạng thái công việc sang Đang làm (1)
  onExecute(t: task): void {
    t.status = 1;
  }

  // Chuyển trạng thái công việc sang Hoàn thành (2)
  onComplete(t: task): void {
    t.status = 2;
  }

  // Xóa công việc khỏi mảng dữ liệu
  onDelete(t: task): void {
    const index = this.tasks.findIndex(obj => obj.id === t.id);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }
}