# Cốc Cốc Assessment Test for Interns - Test 3

## Đề bài

> Tạo một widget Đồng hồ Analog hiển thị thời gian theo thời gian thực

## Nguyên lý hoạt động

### Lý thuyết tính toán

-   **Góc quay**: Tính toán dựa trên một vòng tròn đồng hồ (360°)
-   **Công thức**: `(giá trị thời gian / giới hạn giá trị thời gian) * 360°`
-   **Ví dụ**:
    -   Kim giờ: `(giờ % 12 / 12) * 360°`
    -   Kim phút: `(phút / 60) * 360°`
    -   Kim giây: `(giây / 60) * 360°`

### Triển khai

-   Sử dụng `JavaScript Date()` để lấy thời gian hiện tại
-   Cập nhật thời gian sử dụng `setInterval` với tần suất 500ms
-   Áp dụng `CSS transform` với thuộc tính `rotate` để xoay kim đồng hồ
-   Thêm transition để xử lý chuyển động mượt mà và tự nhiên

## Công nghệ sử dụng

-   [TypeScript](https://www.typescriptlang.org/) - Ngôn ngữ lập trình mở rộng của JavaScript với kiểu dữ liệu tĩnh
-   [React](https://react.dev/) - Thư viện JavaScript để xây dựng giao diện người dùng
-   [Vite](https://vitejs.dev/) - Công cụ build frontend hiện đại và nhanh chóng
-   [TailwindCSS](https://tailwindcss.com/) - Framework CSS tiện ích để xây dựng thiết kế tùy chỉnh

## Cài đặt và sử dụng

1. Clone repository:
    ```sh
    git clone https://github.com/nmq2812/CocCoc_HomeTest
    cd AnalogClock
    ```
2. Cài đặt dependencies:
    ```sh
    npm install  # hoặc yarn install
    ```
3. Chạy dự án:
    ```sh
    npm run dev  # hoặc yarn dev
    ```
