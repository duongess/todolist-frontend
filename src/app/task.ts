// Định nghĩa cấu trúc dữ liệu cho một công việc
export class task {
  id: number | undefined;
  title: string | undefined;
  content: string | undefined;
  status: number | undefined; // 0: Chưa làm, 1: Đang làm, 2: Hoàn thành
}