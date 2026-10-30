# 🌐 HỆ THỐNG CỔNG THÔNG TIN DOANH NGHIỆP & HỒ SƠ NĂNG LỰC SỐ HÓA
## CÔNG TY TNHH KT XANH THÁI NGUYÊN (KT GREEN CO., LTD)

> **Báo Cáo Doanh Nghiệp & Đồ Án Thực Tập Kỹ Thuật Web Nâng Cao**  
> **Đơn vị đào tạo:** Trường Đại Học Công Nghệ Thông Tin & Truyền Thông Thái Nguyên (ICTU)  
> **Sinh viên thực hiện:** Đỗ Văn Tuấn (MSV: DTC235270180 - Email: `dtc235270180@ictu.edu.vn`)  
> **Doanh nghiệp tiếp nhận & thẩm định:** Công ty TNHH KT Xanh Thái Nguyên  
> **Mã số thuế:** `4600361446` • **Năm thành lập:** 2004 (Hơn 20 năm phát triển)

---

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3 Modular](https://img.shields.io/badge/CSS3-Modular-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript ES6+](https://img.shields.io/badge/JavaScript-ES6%2B%20Modules-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Three.js 3D WebGL](https://img.shields.io/badge/Three.js-3D%20WebGL-000000?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![Leaflet GIS](https://img.shields.io/badge/Leaflet-GIS%20Map-199900?style=for-the-badge&logo=leaflet&logoColor=white)](https://leafletjs.com/)
[![Python Automation](https://img.shields.io/badge/Python-3.x%20Compiler-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![FormSubmit Integration](https://img.shields.io/badge/FormSubmit-Email%20Relay-FF6C37?style=for-the-badge)](https://formsubmit.co/)

---

## 📑 MỤC LỤC CHI TIẾT

1. [Giới Thiệu Tổng Quan](#1-giới-thiệu-tổng-quan)
   - [1.1. Về Doanh Nghiệp Đối Tác (KT Xanh)](#11-về-doanh-nghiệp-đối-tác-kt-xanh)
   - [1.2. Mục Tiêu Xây Dựng Dự Án](#12-mục-tiêu-xây-dựng-dự-án)
2. [Kiến Trúc Kỹ Thuật & Công Nghệ (Tech Stack)](#2-kiến-trúc-kỹ-thuật--công-nghệ-tech-stack)
   - [2.1. Ngăn Xếp Công Nghệ (Core Technologies)](#21-ngăn-xếp-công-nghệ-core-technologies)
   - [2.2. Kiến Trúc Hợp Nhất & Tách Rời Component](#22-kiến-trúc-hợp-nhất--tách-rời-component)
3. [Cấu Trúc Thư Mục Dự Án (Project Structure)](#3-cấu-trúc-thư-mục-dự-án-project-structure)
4. [Đặc Tả Phân Hệ Tính Năng Chi Tiết](#4-đặc-tả-phân-hệ-tính-năng-chi-tiết)
   - [4.1. Hệ thống Giao diện Sáng / Tối (Dark / Light Mode & Anti-FOUT)](#41-hệ-thống-giao-diện-sáng--tối-dark--light-mode--anti-fout)
   - [4.2. Hệ thống Song ngữ Đa quốc gia (i18n VIE / ENG Engine)](#42-hệ-thống-song-ngữ-đa-quốc-gia-i18n-vie--eng-engine)
   - [4.3. Không gian 3D WebGL (Three.js Constellation)](#43-không-gian-3d-webgl-threejs-constellation)
   - [4.4. Hệ thống Bản đồ số GIS (Leaflet Map & GPS Project Tracking)](#44-hệ-thống-bản-đồ-số-gis-leaflet-map--gps-project-tracking)
   - [4.5. Phân hệ Thư viện Dự án & Modal Kỹ thuật (Project Lightbox Showcase)](#45-phân-hệ-thư-viện-dự-án--modal-kỹ-thuật-project-lightbox-showcase)
   - [4.6. Trợ lý Ảo Tư vấn Tự động 24/7 (AI Chatbot Widget)](#46-trợ-lý-ảo-tư-vấn-tự-động-247-ai-chatbot-widget)
   - [4.7. Form Đặt Lịch Khảo sát Kỹ thuật (FormSubmit Email Integration)](#47-form-đặt-lịch-khảo-sát-kỹ-thuật-formsubmit-email-integration)
   - [4.8. Các Hiệu ứng Trải nghiệm Người dùng Vi mô (Micro-UX Interactions)](#48-các-hiệu-ứng-trải-nghiệm-người-dùng-vi-mô-micro-ux-interactions)
5. [Hướng Dẫn Cài Đặt & Chạy Cục Bộ (Local Development Guide)](#5-hướng-dẫn-cài-đặt--chạy-cục-bộ-local-development-guide)
   - [5.1. Yêu Cầu Môi Trường](#51-yêu-cầu-môi-trường)
   - [5.2. Khởi Chạy Local Web Server](#52-khởi-chạy-local-web-server)
   - [5.3. Biên Dịch Tự Động Với Python Script](#53-biên-dịch-tự-động-với-python-script)
6. [Hướng Dẫn Tùy Biến & Mở Rộng Mã Nguồn](#6-hướng-dẫn-tùy-biến--mở-rộng-mã-nguồn)
   - [6.1. Thêm Dự Án Mới Vào Bản Đồ & Thư Viện](#61-thêm-dự-án-mới-vào-bản-đồ--thư-viện)
   - [6.2. Thêm Ngôn Ngữ / Cụm Từ Dịch Mới](#62-thêm-ngôn-ngữ--cụm-từ-dịch-mới)
   - [6.3. Bổ Sung Câu Hỏi / Trả Lời Vào Chatbot](#63-bổ-sung-câu-hỏi--trả-lời-vào-chatbot)
7. [Hướng Dẫn Triển Khai Lên Môi Trường Thực Tế (Deployment Guide)](#7-hướng-dẫn-triển-khai-lên-môi-trường-thực-tế-deployment-guide)
8. [Tối Ưu Hóa & Chuẩn SEO On-Page](#8-tối-ưu-hóa--chuẩn-seo-on-page)
9. [Thông Tin Bản Quyền & Người Thực Hiện](#9-thông-tin-bản-quyền--người-thực-hiện)

---

## 1. GIỚI THIỆU TỔNG QUAN

### 1.1. Về Doanh Nghiệp Đối Tác (KT Xanh)
**Công ty TNHH KT Xanh Thái Nguyên** (*KT GREEN CO., LTD*) được thành lập ngày **19/08/2004**, là đơn vị tư vấn hàng đầu tại Thái Nguyên và khu vực Trung du miền núi phía Bắc trong các lĩnh vực:
- **Tư vấn giám sát thi công xây dựng:** Công trình dân dụng, công nghiệp, giao thông, thủy lợi, hạ tầng kỹ thuật đô thị.
- **Khảo sát kỹ thuật cao:** Khảo sát địa hình bằng máy toàn đạc điện tử và Flycam UAV RTK; khảo sát địa chất công trình và thí nghiệm cơ lý đất phòng kiểm định hợp chuẩn **LAS-XD**.
- **Hệ thống truyền tải điện & Năng lượng xanh:** Khảo sát, lập dự án và giám sát các công trình **đường dây & trạm biến áp đến cấp điện áp 110kV**; hệ thống điện mặt trời mái nhà công nghiệp.
- **Thẩm tra & Đấu thầu:** Thẩm tra thiết kế bản vẽ thi công, thẩm tra dự toán định mức Nhà nước và lập hồ sơ mời thầu/đánh giá thầu.

### 1.2. Mục Tiêu Xây Dựng Dự Án
Dự án được xây dựng nhằm hiện đại hóa và số hóa toàn bộ năng lực kỹ thuật của doanh nghiệp lên nền tảng web công nghệ cao:
1. **Khẳng định uy tín thương hiệu 20 năm:** Thể hiện đầy đủ năng lực pháp lý, giấy phép hoạt động, đội ngũ kỹ sư và danh mục dự án trọng điểm.
2. **Trực quan hóa công trình bằng GIS:** Giúp các chủ đầu tư, tổng thầu FDI và đối tác tra cứu vị trí địa lý, quy mô và hình ảnh thực tế của các trạm 110kV, khu công nghiệp bằng bản đồ số.
3. **Tự động hóa luồng tiếp nhận yêu cầu:** Giảm thiểu quy trình trao đổi thủ công qua hệ thống Chatbot tư vấn báo giá tự động và Form đặt lịch khảo sát gửi thẳng về hòm thư chuyên viên.
4. **Chuẩn hóa kiến trúc mã nguồn:** Xây dựng cấu trúc Component hướng module (Component-Driven Architecture) độc lập, dễ bảo trì, dễ mở rộng mà không phụ thuộc vào các framework nặng nề.

---

## 2. KIẾN TRÚC KỸ THUẬT & CÔNG NGHỆ (TECH STACK)

### 2.1. Ngăn Xếp Công Nghệ (Core Technologies)

| Tầng công nghệ | Công cụ / Thư viện | Vai trò & Mục đích sử dụng |
| :--- | :--- | :--- |
| **Markup** | HTML5 Semantic | Cấu trúc ngữ nghĩa chuẩn SEO, hỗ trợ bộ đọc màn hình Screen Reader và khả năng truy cập Accessibility (a11y). |
| **Styling** | Vanilla CSS3 Modular | Hệ thống biến CSS (Custom Properties), Flexbox, CSS Grid, Glassmorphism, hiệu ứng chuyển màu sống động, Dark/Light Themes. |
| **Logic & Modules**| JavaScript ES6+ Modules | Kiến trúc module độc lập (`import`/`export`), điều khiển sự kiện, lưu trữ trạng thái người dùng với `localStorage`. |
| **3D Graphics** | Three.js (WebGL) | Tạo hiệu ứng hạt không gian 3D tương tác theo chuột (Constellation Particle Network) ở khu vực Hero Banner. |
| **GIS Mapping** | Leaflet.js & OpenStreetMap | Bản đồ số GIS tương tác, đánh dấu tọa độ vệ tinh các dự án trọng điểm, popup thông số kỹ thuật. |
| **Forms & Email** | FormSubmit.co API | Cổng chuyển tiếp dữ liệu đăng ký khảo sát trực tiếp vào email người phụ trách với độ bảo mật cao, không cần backend server phức tạp. |
| **Build Tool** | Python 3.x Script (`build.py`) | Trình biên dịch nối file tự động ghép các HTML Component thành file `index.html` duy nhất tối ưu tốc độ tải trang. |

### 2.2. Kiến Trúc Hợp Nhất & Tách Rời Component

Hệ thống hỗ trợ song song 2 cơ chế vận hành:

```
               [ THƯ MỤC COMPONENTS/ ]
       (topbar, header, hero, services, projects, ...)
                    |                     \
   (Build Time / Production)      (Dev Time / Live Preview)
                    v                               v
         [ python build.py ]             [ component-loader.js ]
                    v                               v
            [ index.html ]               [ index-modular.html ]
   (File đơn nhất tải siêu nhanh,         (Tải động qua Fetch API,
    tối ưu SEO & GitHub Pages)             phát triển & debug độc lập)
```

1. **Chế độ Biên dịch Phát hành (`index.html`):**  
   Chạy `python build.py`, hệ thống tự động đọc từng file HTML trong thư mục `components/`, ghép lại thành 1 file `index.html` duy nhất với đầy đủ thẻ Meta, SEO tags, CSS và script. Chế độ này có tốc độ tải trang nhanh nhất, không bị hạn chế bởi chính sách CORS khi mở trực tiếp.
2. **Chế độ Module Hóa Tải Động (`index-modular.html`):**  
   Sử dụng Fetch API qua file `components/component-loader.js` để nhúng động các component vào thẻ `<div data-component="...">`. Rất thuận tiện khi làm việc theo nhóm hoặc phát triển từng phần giao diện riêng lẻ.

---

## 3. CẤU TRÚC THƯ MỤC DỰ ÁN (PROJECT STRUCTURE)

```bash
Bao_cao_doanh_nghiep_Tuan/
│
├── index.html                  # File chính đã biên dịch hoàn chỉnh để chạy trực tiếp / host
├── index-modular.html          # File khung tải component động (dành cho môi trường Dev)
├── build.py                    # Script tự động hóa biên dịch components thành index.html
├── styles.css                  # Master CSS fallback liên kết các sheet
├── script.js                   # JavaScript tổng hợp dự phòng (nomodule fallback)
├── README.md                   # Toàn bộ tài liệu đặc tả dự án và hướng dẫn sử dụng
│
├── assets/                     # Kho tài nguyên đa phương tiện chất lượng cao
│   ├── logo-kt-xanh.png        # Logo nhận diện chính hãng KT Xanh
│   ├── banner-kt-xanh.jpg      # Ảnh bìa quảng bá doanh nghiệp
│   ├── project-p1-diachat.jpg  # Ảnh dự án Khảo sát địa chất KCN Điềm Thụy
│   ├── project-p2-tramdien.jpg # Ảnh dự án Trạm biến áp 110kV KCN Sông Công II
│   ├── project-p3-thamtrapk.jpg# Ảnh dự án Thẩm tra nhà xưởng Samsung Phổ Yên
│   ├── project-p4-solar.jpg    # Ảnh dự án Điện mặt trời mái nhà 1.2 MWp
│   ├── project-p5-uavdrone.jpg # Ảnh dự án Khảo sát địa hình UAV Drone RTK
│   ├── project-p6-hatang.jpg   # Ảnh dự án Giám sát KCN Nam Phổ Yên
│   └── ...
│
├── components/                 # Các khối giao diện HTML độc lập (Reusable Components)
│   ├── topbar.html             # Thanh tiện ích đỉnh trang (MST, địa chỉ, hotline)
│   ├── header.html             # Thanh điều hướng, bộ chọn giao diện Sáng/Tối & Ngôn ngữ
│   ├── hero.html               # Khối giới thiệu mở đầu tích hợp Canvas 3D WebGL
│   ├── trust-marquee.html      # Dải băng chuyền vô tận hiển thị tiêu chuẩn kỹ thuật TCVN/QCVN
│   ├── pillars.html            # Khối 5 trụ cột năng lực cốt lõi
│   ├── services.html           # Khối danh mục 11 dịch vụ tư vấn kỹ thuật chuyên sâu
│   ├── projects.html           # Khối hiển thị dự án tiêu biểu: Lưới thẻ & Bản đồ số GIS
│   ├── workflow.html           # Khối quy trình khảo sát & thực hiện dự án 5 bước
│   ├── about.html              # Khối giới thiệu hồ sơ năng lực 20 năm của KT Xanh
│   ├── booking.html            # Khối Form đăng ký đặt lịch khảo sát hiện trường
│   ├── footer.html             # Chân trang thông tin liên hệ, pháp lý và bản quyền
│   ├── chatbot.html            # Cửa sổ Widget Trợ lý ảo tư vấn tự động
│   ├── modal.html              # Khung Lightbox hiển thị thông báo & xác nhận
│   └── component-loader.js     # Script tải động các file component cho index-modular.html
│
├── css/                        # Hệ thống CSS module hóa theo từng tính năng
│   ├── base.css                # CSS nền tảng: Biến màu sắc, Typography, Reset, Utilities
│   ├── header.css              # Phong cách Topbar, Navbar, Menu Mobile, Nút tương tác
│   ├── hero.css                # Phong cách khu vực Hero & bố cục Canvas 3D
│   ├── dark-theme.css          # Định nghĩa toàn bộ bảng màu Chế độ Tối (Dark Mode)
│   ├── trust-marquee.css       # Hiệu ứng cuộn vô tận cho tiêu chuẩn & đối tác
│   ├── pillars.css             # Định kiểu 5 thẻ trụ cột năng lực
│   ├── services.css            # Lưới 11 thẻ dịch vụ & nút mở rộng/thu gọn
│   ├── projects.css            # Giao diện Lưới thẻ dự án & Giao diện Bản đồ GIS Leaflet
│   ├── leaflet.css             # Bảng định kiểu chuẩn của thư viện bản đồ số Leaflet
│   ├── workflow.css            # Định kiểu timeline các bước quy trình làm việc
│   ├── about.css               # Bảng Profile hồ sơ năng lực doanh nghiệp
│   ├── booking.css             # Giao diện Form đặt lịch khảo sát và hotline card
│   ├── chatbot.css             # Giao diện Floating Widget Chatbot, bong bóng hội thoại
│   ├── modal.css               # Giao diện hộp thoại tương tác & thông báo pop-up
│   ├── 3d-effects.css          # Hiệu ứng phối cảnh Perspective, 3D Card Tilt, Sheen
│   ├── animations.css          # Các hiệu ứng chuyển động Keyframes, Glow, Pulse
│   └── responsive.css          # Tối ưu giao diện đáp ứng cho Tablet, Mobile, Màn hình lớn
│
└── js/                         # Hệ thống JavaScript kiến trúc ES Modules
    ├── app.js                  # Entry Point chính khởi tạo toàn bộ các module
    ├── theme.js                # Quản lý chuyển đổi chế độ Sáng / Tối và lưu Cache
    ├── i18n.js                 # Bộ xử lý dịch ngôn ngữ song ngữ tự động (VIE / ENG)
    ├── translations.js         # Từ điển dữ liệu đa ngôn ngữ chi tiết
    ├── navigation.js           # Điều hướng mượt (Smooth scroll), Spy menu, Mobile nav
    ├── three-scene.js          # Khởi tạo không gian WebGL 3D Three.js Constellation
    ├── three.min.js            # Thư viện đồ họa 3D Three.js
    ├── projects.js             # Dữ liệu dự án, Bộ lọc phân loại, Bản đồ GIS, Modal chi tiết
    ├── leaflet.js              # Thư viện lõi Bản đồ số GIS Leaflet
    ├── services.js             # Xử lý lọc danh mục dịch vụ, xem thêm / thu gọn thẻ
    ├── booking.js              # Kiểm tra dữ liệu form khảo sát, gửi API FormSubmit
    ├── chatbot.js              # Xử lý hội thoại Chatbot, câu hỏi thường gặp FAQ, gợi ý
    ├── tilt-effects.js         # Hiệu ứng nghiêng 3D Perspective theo vị trí con trỏ
    ├── animations.js           # Thanh tiến trình cuộn, nút Back to Top, Counter số động
    ├── modal.js                # Đóng / mở và bẫy focus bàn phím cho Modal dialog
    └── utils.js                # Các hàm trợ giúp xử lý chuỗi và khử mã độc XSS
```

---

## 4. ĐẶC TẢ PHÂN HỆ TÍNH NĂNG CHI TIẾT

### 4.1. Hệ thống Giao diện Sáng / Tối (Dark / Light Mode & Anti-FOUT)
- **Công nghệ áp dụng:** CSS Variables kết hợp `data-theme="dark"` / `data-theme="light"` trên thẻ `<html>`, lưu trữ trạng thái tại `localStorage.getItem('kt_theme')`.
- **Cơ chế chống chớp sáng tối (Anti-FOUT Script):**  
  Một đoạn mã JavaScript nhỏ gọn được đặt trực tiếp ngay đầu thẻ `<head>` trong file `index.html`. Đoạn mã này thực thi đồng bộ trước khi trình duyệt dựng giao diện (Render-blocking), kiểm tra `localStorage` hoặc cài đặt của hệ điều hành `prefers-color-scheme` để gán ngay thuộc tính theme, triệt tiêu hoàn toàn hiện tượng chớp màn hình trắng khi tải trang trong chế độ tối.
- **Biến màu thông minh:**  
  Chuyển đổi mượt mà toàn bộ màu nền, viền thẻ (Border Glassmorphism), màu chữ và bóng đổ (Box-shadow) mà không làm vỡ bố cục.

### 4.2. Hệ thống Song ngữ Đa quốc gia (i18n VIE / ENG Engine)
- **Cơ chế dịch tự động:** Module `js/i18n.js` quét toàn bộ DOM chứa thuộc tính `data-i18n="..."` (gán text thường) hoặc `data-i18n-html="..."` (gán HTML phong phú), đối chiếu khóa với từ điển khổng lồ trong `js/translations.js`.
- **Lưu trữ phiên làm việc:** Tự động ghi nhớ lựa chọn Tiếng Việt (`vi`) hoặc Tiếng Anh (`en`) vào `localStorage.getItem('kt_lang')`.
- **Độ phủ dịch thuật:** Dịch toàn diện từ Topbar, Thanh điều hướng, Khẩu hiệu Hero, Danh mục dịch vụ, Toàn bộ 6 Dự án kỹ thuật chuyên sâu, Nhãn bản đồ số GIS, Quy trình làm việc, Form đặt lịch, Chatbot cho đến Chân trang pháp lý.

### 4.3. Không gian 3D WebGL (Three.js Constellation)
- **Vị trí:** Tích hợp trong `<section class="hero-section">` qua thẻ `<canvas id="hero-3d-canvas">`.
- **Nguyên lý hoạt động:**  
  Module `js/three-scene.js` khởi tạo một `PerspectiveCamera`, `Scene` và `WebGLRenderer`. Hàng trăm nút hạt (Particles) đại diện cho các trạm đo đạc, cột mốc công trình được tính toán vị trí ngẫu nhiên trong không gian 3 chiều. Khi khoảng cách giữa hai hạt nhỏ hơn ngưỡng cho phép, thuật toán sẽ tự động vẽ các đường nối phát sáng mô phỏng mạng lưới kỹ thuật hạ tầng (Constellation Network).
- **Tương tác trực tiếp:** Khi người dùng rê chuột qua Banner, các hạt 3D sẽ tạo lực hút hoặc né tránh nhẹ nhàng theo tọa độ con trỏ, tạo cảm giác công nghệ cao và hiện đại.
- **Tối ưu tài nguyên:** Tự động lắng nghe sự kiện `resize` để cập nhật `aspect ratio`, tự động tạm dừng vòng lặp `requestAnimationFrame` khi tab trình duyệt bị ẩn giúp tiết kiệm CPU và Pin thiết bị.

### 4.4. Hệ thống Bản đồ số GIS (Leaflet Map & GPS Project Tracking)
- **Công nghệ:** Sử dụng thư viện Leaflet.js mã nguồn mở, bản đồ nền OpenStreetMap độ nét cao, định vị GPS chuẩn xác các công trình thực tế tại Thái Nguyên.
- **Chế độ chuyển đổi mượt (View Toggle):**
  - **Chế độ Lưới Thẻ (Grid Mode):** Hiển thị 6 dự án dạng thẻ bài trực quan, kèm hình ảnh sắc nét, huy hiệu phân loại và tóm tắt năng lực.
  - **Chế độ Bản Đồ Số (GPS Map Mode):** Khởi tạo khung bản đồ số tương tác tại `<div id="projectMapView">`. Khi người dùng click nút "Bản Đồ Số GPS (Mới)", bản đồ hiển thị với các Marker kỹ thuật số tùy biến (Custom Pin Marker với hiệu ứng sóng Radar Pulse).
- **Tọa độ thực tế các công trình:**
  1. *Khảo sát địa chất KCN Điềm Thụy:* `[21.4428, 105.8856]`
  2. *Trạm biến áp 110kV KCN Sông Công II:* `[21.5034, 105.8219]`
  3. *Thẩm tra kỹ thuật FDI Samsung Phổ Yên (KCN Yên Bình):* `[21.4312, 105.8675]`
  4. *Hệ thống Điện mặt trời 1.2 MWp KCN Điềm Thụy:* `[21.4465, 105.8920]`
  5. *Khảo sát trắc địa Flycam UAV Đô thị Sông Công:* `[21.4920, 105.8150]`
  6. *Giám sát hạ tầng kỹ thuật KCN Nam Phổ Yên:* `[21.3980, 105.8540]`
- **Tương tác Popup & Liên kết:** Nhấp vào bất kỳ Marker nào trên bản đồ, popup sẽ hiển thị chi tiết tên dự án, chủ đầu tư, hình ảnh thu nhỏ và nút **"Xem Hồ Sơ Kỹ Thuật"** để mở ngay Lightbox.

### 4.5. Phân hệ Thư viện Dự án & Modal Kỹ thuật (Project Lightbox Showcase)
- **Bộ lọc thông minh (Category Filter):** Phân loại tức thì dự án theo các danh mục chuyên sâu: *Tất cả*, *Trạm biến áp & Điện 110kV*, *Khảo sát Địa chất*, *Thẩm tra & Giám sát*, *Năng lượng mặt trời*.
- **Hồ sơ kỹ thuật chuyên sâu (Technical Spec Lightbox Modal):**
  Mỗi dự án được thiết kế với cơ sở dữ liệu hoàn chỉnh (`PROJECTS_DATABASE` trong `js/projects.js`):
  - Tiêu chuẩn áp dụng (TCVN, QCVN, IEC).
  - Danh mục thiết bị sử dụng (Máy khoan XY-1, Máy toàn đạc Leica, Máy biến áp 63MVA ABB, Máy cắt SF6, UAV RTK...).
  - Quy mô dự án, chủ đầu tư, kết quả đo đạc kiểm định phòng LAS-XD.
  - Bộ điều hướng Trước/Sau (Prev / Next) bằng phím bấm hoặc phím mũi tên bàn phím.
  - Nút **"Đặt Lịch Khảo Sát Dự Án Này"**: Khi click, hệ thống tự động cuộn trang xuống Form Đặt lịch, đồng thời điền sẵn dịch vụ và ghi chú dự án tương ứng vào Form.

### 4.6. Trợ lý Ảo Tư vấn Tự động 24/7 (AI Chatbot Widget)
- **Vị trí:** Nút tròn đính nổi góc phải bên dưới màn hình, tích hợp hiệu ứng thông báo chào đón.
- **Tính năng nổi bật:**
  - **Khởi tạo tự động:** Gửi tin nhắn chào mừng và gợi ý các chủ đề quan tâm ngay khi người dùng mở khung chat lần đầu.
  - **Gợi ý câu hỏi nhanh (Quick Chips):** Các nút bấm một chạm như: *"Báo giá trạm 110kV"*, *"Khảo sát địa chất KCN"*, *"Điện mặt trời mái nhà"*, *"Thời gian hoàn thành"*, *"Liên hệ chuyên viên"*.
  - **Cơ chế xử lý ngôn ngữ & Tìm kiếm từ khóa thông minh:** Tự động phân tích các cụm từ trong câu hỏi của người dùng (giá, chi phí, địa chất, 110kv, giám sát, tiêu chuẩn, liên hệ, địa chỉ...) để đưa ra câu trả lời chính xác, kèm số Hotline và đường dẫn điều hướng đến đúng phân đoạn trên trang.
  - **Bảo mật nội dung (XSS Prevention):** Tự động khử các ký tự nguy hiểm (`<`, `>`, `&`, `"`) bằng hàm `escapeHTML()` trước khi đưa vào bong bóng chat.

### 4.7. Form Đặt Lịch Khảo sát Kỹ thuật (FormSubmit Email Integration)
- **Địa chỉ tiếp nhận:** Dữ liệu form được chuyển tiếp an toàn tới Email quản lý: `dtc235270180@ictu.edu.vn`.
- **Cấu hình FormSubmit bảo mật:**
  - Tích hợp `_captcha = false` cho trải nghiệm mượt mà.
  - Template dạng bảng biểu `_template = table` giúp chuyên viên đọc hồ sơ khảo sát trực quan, rõ ràng trên điện thoại và máy tính.
  - Tiêu đề email `_subject` định danh rõ ràng nguồn từ Cổng thông tin KT Xanh.
- **Xác thực dữ liệu chặt chẽ (Client-side Validation):**
  - Bắt buộc điền: Họ tên người liên hệ, Số điện thoại hợp lệ (theo định dạng viễn thông Việt Nam: 10 chữ số, đầu số 03, 05, 07, 08, 09), Loại hình công trình cần khảo sát.
  - Lựa chọn ngày khảo sát mong muốn không được nằm trong quá khứ.
  - Hiển thị thông báo trạng thái gửi thành công qua hệ thống Modal hoặc banner trạng thái.

### 4.8. Các Hiệu ứng Trải nghiệm Người dùng Vi mô (Micro-UX Interactions)
- **Thanh tiến trình đọc trang (Scroll Progress Bar):** Một vạch xanh lục gradient mảnh nằm trên cùng màn hình, mở rộng chiều rộng từ 0% đến 100% tỷ lệ thuận theo độ cuộn của trang.
- **Nút Back to Top với vòng tròn SVG tiến trình:** Nút bấm xuất hiện khi cuộn qua 400px. Đường viền vòng tròn SVG (`stroke-dashoffset`) tự động lấp đầy theo độ sâu trang web. Khi bấm, trang sẽ cuộn mượt mà về đỉnh đầu trang (`scroll-behavior: smooth`).
- **Hiệu ứng số nhảy tự động (Dynamic Count-Up Animation):** Sử dụng `IntersectionObserver` theo dõi khi các thẻ thống kê năng lực (20+ năm, 110kV, 11 lĩnh vực, 2 trụ sở) xuất hiện trong tầm nhìn người dùng, các con số sẽ đếm dần từ 0 lên giá trị mục tiêu với hiệu ứng thị giác ấn tượng.
- **Hiệu ứng 3D Card Tilt & Spotlight Sheen:** Khi di chuột trên các thẻ trụ cột và thẻ dịch vụ, thẻ sẽ nghiêng 3 chiều theo góc nhìn thực tế (`transform: perspective(1000px) rotateX(...) rotateY(...)`), kèm vệt sáng ánh kim chạy dọc bề mặt thẻ.

---

## 5. HƯỚNG DẪN CÀI ĐẶT & CHẠY CỤC BỘ (LOCAL DEVELOPMENT GUIDE)

### 5.1. Yêu Cầu Môi Trường
- **Hệ điều hành:** Hỗ trợ mọi hệ điều hành (Windows 10/11, macOS, Linux).
- **Trình duyệt web:** Google Chrome, Microsoft Edge, Mozilla Firefox hoặc Safari phiên bản mới (hỗ trợ ES6 Modules và WebGL).
- **Công cụ tùy chọn:** Python 3.8+ (dùng để chạy script biên dịch và tạo local server nhanh).

### 5.2. Khởi Chạy Local Web Server
Vì hệ thống sử dụng **JavaScript ES Modules** (`import`/`export`) và tải bản đồ số **Leaflet GIS**, bạn nên chạy trang web thông qua một Local Web Server để tránh bị trình duyệt chặn CORS:

#### Cách 1: Sử dụng Python HTTP Server (Đơn giản & Khuyến nghị nhất)
Mở cửa sổ dòng lệnh (Terminal / PowerShell / Command Prompt) tại thư mục dự án và chạy:
```powershell
python -m http.server 8000
```
Sau đó mở trình duyệt và truy cập:
👉 `http://localhost:8000/index.html` (Bản phân phối đơn nhất đã compile)  
👉 `http://localhost:8000/index-modular.html` (Bản component động thử nghiệm)

#### Cách 2: Sử dụng VS Code Live Server
1. Cài đặt tiện ích mở rộng **Live Server** của tác giả *Ritwick Dey* trên Visual Studio Code.
2. Nhấp chuột phải vào file `index.html` (hoặc `index-modular.html`) và chọn **"Open with Live Server"**.

#### Cách 3: Sử dụng Node.js `serve` / `http-server`
```bash
npx serve .
# Hoặc
npx http-server -p 8000
```

### 5.3. Biên Dịch Tự Động Với Python Script
Bất cứ khi nào bạn chỉnh sửa nội dung trong các file HTML thành phần thuộc thư mục `components/`, hãy chạy lệnh sau để tự động biên dịch lại file `index.html`:

```powershell
python build.py
```

**Kết quả màn hình Terminal:**
```
[KT Xanh Build] Đang biên dịch các HTML components...
[KT Xanh Build] Thành công! Đã biên dịch toàn bộ components vào index.html (148440 bytes).
```

---

## 6. HƯỚNG DẪN TÙY BIẾN & MỞ RỘNG MÃ NGUỒN

### 6.1. Thêm Dự Án Mới Vào Bản Đồ & Thư Viện
Mở file [js/projects.js](file:///d:/Bao_cao_doanh_nghiep_Tuan/js/projects.js) và bổ sung một đối tượng mới vào mảng `PROJECTS_DATABASE`:

```javascript
{
  id: 'p7',
  title: 'Tên dự án tiếng Việt',
  title_en: 'Project title in English',
  category: 'dien-110kv', // Một trong các mã: 'dien-110kv', 'dia-chat', 'giam-sat', 'solar', 'trac-dia'
  categoryName: 'Trạm Biến Áp & Điện 110kV',
  categoryName_en: 'Substations & 110kV Power Lines',
  location: 'Vị trí tại Thái Nguyên',
  location_en: 'Location details in English',
  scale: 'Quy mô công trình',
  scale_en: 'Engineering scale in English',
  client: 'Tên chủ đầu tư',
  standards: 'TCVN ..., QCVN ...',
  equipment: 'Thiết bị máy móc sử dụng',
  time: 'Thời gian hoàn thành',
  result: 'Kết quả đạt được',
  description: 'Mô tả chi tiết kỹ thuật...',
  chips: ['TCVN ...', 'Quy mô ...', 'Nghiệm thu an toàn'],
  chips_en: ['Standard ...', 'Scale ...', 'Safely Accepted'],
  image: 'assets/ten-anh-du-an.jpg',
  // Tọa độ GPS để hiển thị lên Bản đồ Leaflet:
  coords: [21.5925, 105.8450] // [Vĩ độ, Kinh độ]
}
```

### 6.2. Thêm Ngôn Ngữ / Cụm Từ Dịch Mới
1. Mở file [js/translations.js](file:///d:/Bao_cao_doanh_nghiep_Tuan/js/translations.js).
2. Thêm cặp khóa - giá trị vào cả 2 đối tượng `vi` và `en`:
   ```javascript
   export const TRANSLATIONS = {
     vi: {
       my_new_key: "Nội dung tiếng Việt ở đây"
     },
     en: {
       my_new_key: "English translated content here"
     }
   };
   ```
3. Trong file component HTML tương ứng, gắn thuộc tính:
   ```html
   <span data-i18n="my_new_key">Nội dung tiếng Việt mặc định</span>
   ```

### 6.3. Bổ Sung Câu Hỏi / Trả Lời Vào Chatbot
Mở file [js/chatbot.js](file:///d:/Bao_cao_doanh_nghiep_Tuan/js/chatbot.js) và thêm từ khóa tìm kiếm kèm câu trả lời vào mảng `KNOWLEDGE_BASE`:

```javascript
{
  keywords: ['giá', 'chi phí', 'báo giá', 'dự toán'],
  response: 'Báo giá dịch vụ của KT Xanh được lập dựa trên định mức xây dựng hiện hành của Nhà nước và quy mô công trình thực tế. Quý khách vui lòng để lại thông tin tại Form Đặt Lịch hoặc gọi Hotline 0982.346.837 để nhận báo giá chi tiết.'
}
```

---

## 7. HƯỚNG DẪN TRIỂN KHAI LÊN MÔI TRƯỜNG THỰC TẾ (DEPLOYMENT GUIDE)

### 7.1. Triển Khai Miễn Phí Với GitHub Pages (Khuyến nghị)
Vì toàn bộ mã nguồn được thiết kế theo cấu trúc Single Page tĩnh (Static Web), việc triển khai lên GitHub Pages là vô cùng thuận lợi:
1. Đẩy toàn bộ mã nguồn lên kho chứa GitHub:
   ```powershell
   git add .
   git commit -m "feat: cap nhat toan bo he thong va tai lieu readme"
   git push origin main
   ```
2. Trên giao diện trình duyệt GitHub:
   - Vào mục **Settings** của repository `haluu07/Tuan_Report`.
   - Chọn menu **Pages** ở thanh bên trái.
   - Tại mục **Build and deployment > Branch**, chọn nhánh `main` và thư mục `/ (root)`.
   - Nhấn **Save**.
3. Sau khoảng 1-2 phút, trang web sẽ hoạt động trực tiếp tại địa chỉ:  
   👉 `https://haluu07.github.io/Tuan_Report/`

### 7.2. Triển Khai Lên Vercel / Netlify
1. Đăng nhập vào [Vercel](https://vercel.com/) hoặc [Netlify](https://www.netlify.com/).
2. Chọn **"Import Project"** từ tài khoản GitHub `haluu07/Tuan_Report`.
3. Giữ nguyên cấu hình mặc định (Root directory: `./`, Framework: `Other`).
4. Nhấn **Deploy** để nhận đường link truy cập toàn cầu kèm chứng chỉ SSL miễn phí.

---

## 8. TỐI ƯU HÓA & CHUẨN SEO ON-PAGE

1. **Thẻ Meta & Social Graphs:** Tích hợp đầy đủ thẻ `<title>`, `<meta name="description">`, `<meta name="keywords">`, `<meta name="author">` và OpenGraph chuẩn mực nhằm tăng điểm xếp hạng trên công cụ tìm kiếm Google.
2. **Typography Hiện Đại:** Tích hợp bộ font tiếng Việt cao cấp **Plus Jakarta Sans** từ Google Fonts, tối ưu kết nối bằng `preconnect` và `display=swap`.
3. **Hiệu Suất Tải Trang (Performance):**
   - Không sử dụng các framework cồng kềnh như Bootstrap, jQuery hay React khi không cần thiết, giúp dung lượng tải lần đầu siêu nhẹ.
   - Trì hoãn thực thi các script 3D và GIS để ưu tiên tốc độ hiển thị nội dung đầu tiên (FCP - First Contentful Paint).
   - Tối ưu hóa kích thước hình ảnh `.jpg` và `.png` đảm bảo chất lượng sắc nét nhưng không gây nghẽn băng thông mạng.
4. **Khả Năng Truy Cập (Accessibility - WCAG):**
   - Đầy đủ các thuộc tính `aria-label`, `aria-hidden`, `role="tablist"`, `role="tab"`.
   - Bẫy phím bấm (Focus Trap) cho modal và cho phép dùng phím `Escape` để thoát nhanh khỏi cửa sổ lightbox.

---

## 9. THÔNG TIN BẢN QUYỀN & NGƯỜI THỰC HIỆN

- **Học phần:** Báo Cáo Doanh Nghiệp / Thực Tập Chuyên Ngành CNTT
- **Đơn vị đào tạo:** Khoa Công Nghệ Thông Tin - Trường Đại Học Công Nghệ Thông Tin & Truyền Thông (ICTU)
- **Sinh viên thực hiện:** **Đỗ Văn Tuấn**
- **Mã số sinh viên:** `DTC235270180`
- **Email học tập:** `dtc235270180@ictu.edu.vn`
- **Kho lưu trữ mã nguồn:** [https://github.com/haluu07/Tuan_Report](https://github.com/haluu07/Tuan_Report)
- **Bản quyền doanh nghiệp:** © 2004 - 2026 **CÔNG TY TNHH KT XANH THÁI NGUYÊN**. All Rights Reserved.

> *"TẬN TÂM TRONG TỪNG CHI TIẾT • CHUYÊN NGHIỆP TRONG GIẢI PHÁP • BỀN VỮNG CÙNG THỜI GIAN"*
