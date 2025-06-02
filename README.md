# TTCSN Group 16 - Xây Dựng Website Bán Đồ Điện Tử  

## Mô tả dự án  
[Demo](https://ttcsngroup16-production.up.railway.app/)
Đây là một dự án website thương mại điện tử bán đồ điện tử được xây dựng bằng HTML, CSS, JavaScript thuần, Node.js, EJS, và MySQL.  
Website cung cấp các tính năng mua sắm trực tuyến cơ bản như xem sản phẩm, tìm kiếm, quản lý giỏ hàng, đặt hàng, và quản lý dành cho quản trị viên.  

---

## Công nghệ sử dụng  
- **Front-end:** HTML, CSS, JavaScript  
- **Template Engine:** EJS  
- **Back-end:** Node.js  
- **Cơ sở dữ liệu:** MySQL (sử dụng Laragon và phpMyAdmin để quản lý)  

---

## Các chức năng chính  
### Người dùng  
- Đăng ký, đăng nhập.  
- Xem danh sách sản phẩm, tìm kiếm, và xem thông tin chi tiết sản phẩm.  
- Thêm sản phẩm vào giỏ hàng, quản lý giỏ hàng.  
- Đặt hàng và hủy đơn hàng.  

### Quản trị viên  
- Đăng nhập với quyền quản trị.  
- Quản lý danh mục sản phẩm, thêm/sửa/xóa sản phẩm.  
- Xem và quản lý đơn hàng.  
- Quản lý tài khoản nhân viên.

---

## Hướng dẫn cài đặt  

### 1. Yêu cầu hệ thống  
- **Node.js** >= 16.x  
- **Laragon:** Để chạy MySQL và quản lý phpMyAdmin.  

### 2. Cài đặt  
1. Clone dự án từ GitHub:  
   ```bash
   git clone https://github.com/Seotow/TTCSN_Group16.git
   cd TTCSN_Group16

### 2. Cài đặt các thư viện cần thiết  

1. Đảm bảo bạn đã cài đặt **Node.js** trên máy tính.  
2. Trong thư mục gốc của dự án (sau khi clone về), chạy lệnh sau để cài đặt các thư viện:  
   ```bash
   npm install

### 3. Cài đặt cơ sở dữ liệu  

1. Khởi động MySQL thông qua Laragon.  
2. Truy cập phpMyAdmin tại `http://localhost/phpmyadmin`.  
3. Tạo một cơ sở dữ liệu mới với tên **`group16`**.  
4. Nhập dữ liệu từ file `group16.sql` có trong thư mục `/database`:  
   - Chọn cơ sở dữ liệu **`group16`** vừa tạo.  
   - Nhấn **Import**, sau đó chọn file `group16.sql`.  
   - Nhấn **Go** để hoàn tất việc nhập dữ liệu.  

Sau khi hoàn tất, cơ sở dữ liệu của bạn sẽ sẵn sàng để sử dụng với dự án.

### 4. Khởi chạy ứng dụng  

1. Trong thư mục gốc của dự án, chạy lệnh sau để khởi động server:  
   ```bash
   npm start
2. Sau khi server khởi động thành công, truy cập website tại: `http://localhost:3000`
3. **Lưu ý:**  
   - Đảm bảo **MySQL** đã được khởi động thông qua **Laragon** trước khi chạy ứng dụng.  
   - Kiểm tra xem cơ sở dữ liệu **`group16`** đã được tạo và nhập liệu từ file `group16.sql`.  
   - Nếu gặp lỗi kết nối, hãy kiểm tra lại các thông tin cấu hình cơ sở dữ liệu trong file `app.js`, bao gồm:  
     - **Host:** `localhost`  
     - **User:** `root` (hoặc tài khoản bạn đã thiết lập)  
     - **Password:** (mật khẩu MySQL của bạn)  
     - **Database:** `group16`  

### Hướng dẫn sử dụng  

#### Với người dùng:  
- Truy cập giao diện chính của website tại `http://localhost:3000`.  
- Người dùng có thể:  
  - Duyệt và tìm kiếm sản phẩm.  
  - Thêm sản phẩm vào giỏ hàng.  
  - Thực hiện thanh toán và quản lý đơn hàng.  

#### Với quản trị viên:  
- Truy cập giao diện quản trị tại `http://localhost:3000/admin`.  
- Quản trị viên có thể:  
  - Quản lý sản phẩm, danh mục.  
  - Xem và xử lý đơn hàng.  
  - Quản lý tài khoản nhân viên.  

---

## Deployment  

Dự án này được cấu hình để deploy lên các hosting miễn phí

### Một số lựa chọn:
- **Railway.app**: Hỗ trợ nodejs
- **Vercel**: Hạn chế về mặt backend

### Thông tin cần thiết cho các biến môi trường
```env
NODE_ENV=production
DB_HOST=your-database-host
DB_USER=your-database-user  
DB_PASSWORD=your-database-password
DB_NAME=your-database-name
DB_PORT=your-database-port
PORT=your-port
SESSION_SECRET=your-secret-key
```

---

### Thông tin nhóm thực hiện  
- **Nguyễn Trung Hiếu**  
- **Nguyễn Mạnh Hoàn**  

---

### Đóng góp  
Nếu bạn muốn đóng góp cho dự án, vui lòng tạo Pull Request hoặc liên hệ trực tiếp với nhóm qua GitHub tại [TTCSN_Group16](https://github.com/Seotow/TTCSN_Group16).  

---

### License  
This project is licensed under the **MIT License**.  
