"""
CÔNG TY TNHH KT XANH THÁI NGUYÊN
Build Script: Tự động ghép nối các HTML Components thành index.html
Chạy lệnh: python build.py
"""

import sys
import os

if sys.stdout.encoding != 'utf-8':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

COMPONENTS = [
    ("components/topbar.html", "<!-- 1. TOPBAR COMPONENT -->"),
    ("components/header.html", "<!-- 2. HEADER & NAVIGATION COMPONENT -->"),
    ("components/hero.html", "<!-- 3. HERO & 3D WEBGL COMPONENT -->"),
    ("components/trust-marquee.html", "<!-- 4. TRUST & TECHNICAL STANDARDS MARQUEE COMPONENT -->"),
    ("components/pillars.html", "<!-- 5. PILLARS COMPONENT -->"),
    ("components/services.html", "<!-- 5. SERVICES COMPONENT -->"),
    ("components/projects.html", "<!-- 6. PROJECTS SHOWCASE COMPONENT -->"),
    ("components/workflow.html", "<!-- 7. WORKFLOW COMPONENT -->"),
    ("components/about.html", "<!-- 7. ABOUT COMPONENT -->"),
    ("components/booking.html", "<!-- 8. BOOKING COMPONENT -->"),
    ("components/contact.html", "<!-- 9. CONTACT COMPONENT -->"),
    ("components/footer.html", "<!-- 10. FOOTER COMPONENT -->"),
    ("components/chatbot.html", "<!-- 11. CHATBOT COMPONENT -->"),
    ("components/modal.html", "<!-- 12. MODAL COMPONENT -->"),
]

def read_file(path):
    with open(path, "r", encoding="utf-8") as f:
        return f.read().strip()

def build():
    print("[KT Xanh Build] Đang biên dịch các HTML components...")

    html_parts = []
    
    # HTML Head & Meta
    html_parts.append("""<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Công Ty TNHH KT Xanh Thái Nguyên - Tư Vấn Xây Dựng, Hạ Tầng & Điện Năng Lượng</title>
  <meta name="description" content="Công ty TNHH KT Xanh Thái Nguyên - Đơn vị tư vấn chuyên nghiệp trong lĩnh vực xây dựng và hạ tầng: Khảo sát địa hình địa chất, giám sát công trình, đường dây trạm biến áp đến 110kV, điện mặt trời, thiết kế & thẩm tra dự án.">
  <meta name="keywords" content="KT Xanh Thái Nguyên, Công ty TNHH KT Xanh, giám sát công trình, khảo sát địa hình địa chất, trạm biến áp 110kV, điện mặt trời, kiểm định xây dựng, tư vấn đấu thầu">
  <meta name="author" content="Công ty TNHH KT Xanh Thái Nguyên">

  <!-- Favicon từ Logo chính hãng -->
  <link rel="icon" type="image/png" href="assets/logo-kt-xanh.png">
  
  <!-- Google Fonts: Plus Jakarta Sans -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap" rel="stylesheet">
  
  <!-- ========================================================
       HỆ THỐNG CSS MODULAR THEO COMPONENT ARCHITECTURE
       ======================================================== -->
  <link rel="stylesheet" href="css/base.css">
  <link rel="stylesheet" href="css/header.css">
  <link rel="stylesheet" href="css/hero.css">
  <link rel="stylesheet" href="css/trust-marquee.css">
  <link rel="stylesheet" href="css/pillars.css">
  <link rel="stylesheet" href="css/services.css">
  <link rel="stylesheet" href="css/projects.css">
  <link rel="stylesheet" href="css/workflow.css">
  <link rel="stylesheet" href="css/about.css">
  <link rel="stylesheet" href="css/booking.css">
  <link rel="stylesheet" href="css/contact.css">
  <link rel="stylesheet" href="css/footer.css">
  <link rel="stylesheet" href="css/chatbot.css">
  <link rel="stylesheet" href="css/modal.css">
  <link rel="stylesheet" href="css/animations.css">
  <link rel="stylesheet" href="css/responsive.css">
  <!-- Thư viện Bản đồ số GIS Leaflet -->
  <link rel="stylesheet" href="css/leaflet.css">
  
  <!-- Fallback master stylesheet -->
  <link rel="stylesheet" href="styles.css">

  <!-- ========================================================
       THƯ VIỆN ĐỒ HỌA 3D THREE.JS & BẢN ĐỒ SỐ LEAFLET
       ======================================================== -->
  <script src="js/three.min.js"></script>
  <script src="js/leaflet.js"></script>
</head>
<body>""")

    # Topbar
    html_parts.append(read_file("components/topbar.html"))

    # Header
    html_parts.append(read_file("components/header.html"))

    # Main tag start
    html_parts.append("  <main>")

    # Sections inside main
    html_parts.append("    " + read_file("components/hero.html"))
    html_parts.append("    " + read_file("components/trust-marquee.html"))
    html_parts.append("    " + read_file("components/pillars.html"))
    html_parts.append("    " + read_file("components/services.html"))
    html_parts.append("    " + read_file("components/projects.html"))
    html_parts.append("    " + read_file("components/workflow.html"))
    html_parts.append("    " + read_file("components/about.html"))
    html_parts.append("    " + read_file("components/booking.html"))
    html_parts.append("    " + read_file("components/contact.html"))

    # Main tag end
    html_parts.append("  </main>")

    # Footer
    html_parts.append(read_file("components/footer.html"))

    # Floating Widgets
    html_parts.append(read_file("components/chatbot.html"))
    html_parts.append(read_file("components/modal.html"))

    # JavaScript Modules
    html_parts.append("""  <!-- ========================================================
       HỆ THỐNG JAVASCRIPT MODULAR (ES MODULES & 3D INTERACTION)
       ======================================================== -->
  <script src="js/projects.js"></script>
  <script type="module" src="js/app.js"></script>
  <script nomodule src="script.js"></script>
</body>
</html>
""")

    output_content = "\n\n".join(html_parts)
    with open("index.html", "w", encoding="utf-8") as f:
        f.write(output_content)

    print(f"[KT Xanh Build] Thành công! Đã biên dịch toàn bộ components vào index.html ({len(output_content)} bytes).")

if __name__ == "__main__":
    build()
