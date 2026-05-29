import { Routes } from '@angular/router';

// Định nghĩa các đường dẫn URL và liên kết tới Standalone Component tương ứng
export const routes: Routes = [
  { 
    path: 'list', 
    loadComponent: () => import('./task-list/task-list.component').then(m => m.TaskListComponent) 
  },
  { 
    path: 'detail/:id', 
    loadComponent: () => import('./task-detail/task-detail.component').then(m => m.TaskDetailComponent) 
  },
  { 
    path: 'new', 
    loadComponent: () => import('./task-new/task-new.component').then(m => m.TaskNewComponent) 
  },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { 
    path: '**', 
    loadComponent: () => import('./page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent) 
  }
];``