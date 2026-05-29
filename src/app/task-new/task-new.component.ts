import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-task-new',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink], // Đăng ký trực tiếp ReactiveFormsModule tại đây
  templateUrl: './task-new.component.html'
})
export class TaskNewComponent {
  newForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    // Khởi tạo cấu trúc các ô nhập liệu cho biểu mẫu thêm mới
    this.newForm = this.fb.group({
      title: [''],
      content: ['']
    });
  }

  // Xử lý hành động gửi dữ liệu từ biểu mẫu
  onSubmit(): void {
    console.log(this.newForm.value);
    // Quay trở lại trang danh sách sau khi submit xong log dữ liệu
    this.router.navigate(['/list']);
  }
}