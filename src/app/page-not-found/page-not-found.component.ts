import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div style="text-align: center; margin-top: 5rem;">
      <h1>Page Not Found!</h1>
      <p>Đường dẫn bạn truy cập không hợp lệ hoặc không tồn tại.</p>
      <button [routerLink]="['/list']">Quay lại trang chủ danh sách</button>
    </div>
  `
})
export class PageNotFoundComponent {}