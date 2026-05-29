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

  // Xử lý sự kiện khi bấm nút "Thực hiện"
  onExecute(t: task): void {
    if (t) {
      t.status = 1; // Chuyển trạng thái thành 'Đang làm'
      alert(`Đã chuyển trạng thái "${t.title}" thành Đang làm!`);
    }
  }

  // Xử lý sự kiện khi bấm nút "Kết thúc"
  onComplete(t: task): void {
    if (t) {
      t.status = 2; // Chuyển trạng thái thành 'Hoàn thành'
      alert(`Chúc mừng! Bạn đã hoàn thành "${t.title}".`);
    }
  }

  // Xử lý sự kiện khi bấm nút "Xóa bỏ"
  onDelete(t: task): void {
    if (t) {
      // Tìm vị trí và xóa khỏi mảng dữ liệu mock tạm thời
      const index = TASKS.findIndex(obj => obj.id === t?.id);
      if (index !== -1) {
        TASKS.splice(index, 1);
        alert(`Đã xóa công việc thành công!`);
      }
    }
  }
}