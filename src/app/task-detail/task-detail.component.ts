import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { TASKS } from '../mock-tasks';
import { task } from '../task';

@Component({
  selector: 'app-task-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './task-detail.component.html'
})
export class TaskDetailComponent implements OnInit {
  id: string | null = null;
  t: task | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Lấy id từ URL (đang là chuỗi)
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      // Ép kiểu sang Number để tìm kiếm chính xác
      this.t = this.findByID(Number(this.id));
    }
  }

  findByID(id: number): task | undefined {
    // Sử dụng toán tử so sánh nghiêm ngặt ===
    return TASKS.find(obj => obj.id === id);
  }

  // Xử lý sự kiện khi bấm nút "Thực hiện"
  onExecute(): void {
    if (this.t) {
      this.t.status = 1; // Chuyển trạng thái thành 'Đang làm'
      alert(`Đã chuyển trạng thái "${this.t.title}" thành Đang làm!`);
      this.router.navigate(['/list']);
    }
  }

  // Xử lý sự kiện khi bấm nút "Kết thúc"
  onComplete(): void {
    if (this.t) {
      this.t.status = 2; // Chuyển trạng thái thành 'Hoàn thành'
      alert(`Chúc mừng! Bạn đã hoàn thành "${this.t.title}".`);
      this.router.navigate(['/list']);
    }
  }

  // Xử lý sự kiện khi bấm nút "Xóa bỏ"
  onDelete(): void {
    if (this.t) {
      // Tìm vị trí và xóa khỏi mảng dữ liệu mock tạm thời
      const index = TASKS.findIndex(obj => obj.id === this.t?.id);
      if (index !== -1) {
        TASKS.splice(index, 1);
        alert(`Đã xóa công việc thành công!`);
        this.router.navigate(['/list']);
      }
    }
  }
}