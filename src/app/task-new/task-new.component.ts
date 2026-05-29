import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { TASKS } from '../mock-tasks';

@Component({
  selector: 'app-task-new',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './task-new.component.html'
})
export class TaskNewComponent {
  newForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.newForm = this.fb.group({
      title: [''],
      content: ['']
    });
  }

  onSubmit(): void {
    const formValue = this.newForm.value;
    
    // Tính toán ID mới dựa trên ID lớn nhất trong mảng hiện tại
    const newId = TASKS.length > 0 ? Math.max(...TASKS.map(t => t.id || 0)) + 1 : 1;
    
    // Đẩy dữ liệu mới vào mảng TASKS dùng chung
    TASKS.push({
      id: newId,
      title: formValue.title,
      content: formValue.content,
      status: 0 // Khởi tạo trạng thái mặc định là Chưa làm
    });

    // Điều hướng về trang danh sách để xem kết quả
    this.router.navigate(['/list']);
  }
}