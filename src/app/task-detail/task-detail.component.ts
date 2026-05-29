import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
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

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Lấy tham số 'id' từ URL thông qua snapshot của ActivatedRoute
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.t = this.findByID(Number(this.id));
    }
  }

  // Tìm kiếm đối tượng công việc trong mảng dữ liệu dựa vào trường định danh id
  findByID(id: number): task | undefined {
    return TASKS.find(obj => obj.id === id);
  }
}