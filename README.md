- Đồ án môn: Chuyên đề thực tập
- Cơ sở lý thuyết:
  + Backend: javascript
  + Fontend: reactjs
  + Database: mysql
  + Database management: strapi
- Để chạy được web ở localhost vui lòng làm theo các bước sau:
  + B1: Dùng xampp hoặc laragon và tạo cơ sở dữ liệu có tên: quan_ly_thu_vien
  + B2: Mở cmd và chạy lệnh sau: npx create-strapi@latest quan-ly-thu-vien-database (chạy cùng cấp với folder quan-ly-thu-vien)
      Video tham khảo: https://www.youtube.com/watch?v=8ZFhujEX3iU&list=PL8-VnJIzN_fWKZeXDp_wq4NgwAMgu3laq&index=4
  + B3: Vào folder quan-ly-thu-vien-database và mở cmd
  + B4: Chạy lệnh npm run strapi import -- -f /path/to/my/file/my-strapi-export.tar.gz.enc --key quan-ly-thu-vien
  + B5: Chạy lệnh "npm run develop"
- Link deploy: https://deploy-quan-ly-thu-vien-web.vercel.app/
  + Lưu ý: vì web được deploy free nên thời gian sử dụng chỉ được tới ngày 16/01/2025
- Link deploy cơ sở dữ liệu: https://necessary-activity-37100e79a5.strapiapp.com/admin
  + Lưu ý: deploy free tới ngày 20/01/2025
  + Emai: admin123@gmail.com
  + Pass: Quanlythuvien@
