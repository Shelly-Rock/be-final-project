import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});




// Import thư viện
// import { ValidationPipe } from '@nestjs/common';

// 👉 Import ValidationPipe

// Dùng để validate dữ liệu request (body, query…)
// Kết hợp với class-validator
// import * as helmet from 'helmet';

// 👉 Import helmet

// Middleware giúp bảo mật HTTP
// Thêm các header chống XSS, clickjacking…
// import * as compression from 'compression';

// 👉 Import compression

// Nén response trước khi trả về client
// Giúp API nhanh hơn
// 🚀 Hàm khởi động app
// async function bootstrap() {

// 👉 Hàm chính để start server

// const app = await NestFactory.create(AppModule);

// 👉 Tạo ứng dụng từ module gốc AppModule

// NestFactory là core của NestJS
// AppModule chứa toàn bộ config, controller, service
// 🛡️ Middleware
// app.use(helmet());

// 👉 Bật bảo mật HTTP

// Tự động thêm header như:
// X-Frame-Options
// Content-Security-Policy
// app.use(compression());

// 👉 Bật nén dữ liệu

// Response sẽ được gzip/brotli
// Giảm dung lượng → nhanh hơn
// app.enableCors();

// 👉 Bật CORS (Cross-Origin Resource Sharing)

// Cho phép frontend (React, Vue…) gọi API
// Nếu không có → sẽ bị lỗi CORS
// ✅ Validation toàn cục
// app.useGlobalPipes(
//   new ValidationPipe({
//     whitelist: true,
//     transform: true,
//   }),
// );

// 👉 Áp dụng validation cho toàn bộ app

// Chi tiết config:
// whitelist: true
// Tự động loại bỏ field không có trong DTO

// 📌 Ví dụ:

// {
//   "email": "test@gmail.com",
//   "password": "123",
//   "hack": "abc"
// }

// 👉 field hack sẽ bị xoá

// transform: true
// Tự động convert kiểu dữ liệu

// 📌 Ví dụ:

// id: number;

// Client gửi:

// { "id": "1" }

// 👉 sẽ convert thành:

// id = 1
// 🌐 Chạy server
// await app.listen(process.env.PORT || 3000);

// 👉 Start server

// Nếu có biến môi trường PORT → dùng nó
// Không có → chạy mặc định 3000
// ▶️ Gọi hàm bootstrap
// bootstrap();

// 👉 Thực thi để app chạy

// 🧠 Tóm tắt flow
// Import thư viện
// Tạo app từ AppModule
// Gắn middleware (bảo mật + nén + CORS)
// Bật validation toàn cục
// Start server
// 💡 Nâng cao (bạn nên biết)

// Bạn có thể cải thiện thêm:

// app.setGlobalPrefix('api');

// 👉 URL sẽ thành:

// http://localhost:3000/api/users