/**
 * ==============================================================================
 * CÔNG TY TNHH KT XANH THÁI NGUYÊN - THEME CONTROLLER
 * Quản lý chuyển đổi giao diện Sáng / Tối (Light & Dark Mode)
 * Tự động ghi nhớ cấu hình người dùng (localStorage) & Hệ thống (prefers-color-scheme)
 * ==============================================================================
 */

export function initTheme() {
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn, #themeToggleBtn');
  const htmlEl = document.documentElement;

  // Lấy theme đã lưu hoặc theo cấu hình hệ thống
  function getPreferredTheme() {
    const saved = localStorage.getItem('kt_theme');
    if (saved === 'dark' || saved === 'light') {
      return saved;
    }
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme, animate = true) {
    if (animate) {
      htmlEl.classList.add('theme-transitioning');
      setTimeout(() => {
        htmlEl.classList.remove('theme-transitioning');
      }, 350);
    }

    if (theme === 'dark') {
      htmlEl.setAttribute('data-theme', 'dark');
      localStorage.setItem('kt_theme', 'dark');
    } else {
      htmlEl.setAttribute('data-theme', 'light');
      localStorage.setItem('kt_theme', 'light');
    }

    // Cập nhật trạng thái hiển thị & hỗ trợ tiếp cận (ARIA)
    themeToggleBtns.forEach(btn => {
      btn.setAttribute('aria-pressed', String(theme === 'dark'));
      btn.setAttribute('title', theme === 'dark' ? 'Chuyển sang chế độ Sáng' : 'Chuyển sang chế độ Tối');
    });
  }

  // Khởi tạo trạng thái ban đầu không hiệu ứng chớp
  const initialTheme = getPreferredTheme();
  applyTheme(initialTheme, false);

  // Gắn sự kiện click cho toàn bộ nút toggle (ở Desktop Header lẫn Mobile Drawer)
  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const current = htmlEl.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const target = current === 'dark' ? 'light' : 'dark';
      applyTheme(target, true);
    });
  });

  // Tự động thích ứng nếu người dùng thay đổi chế độ sáng/tối trong Windows Settings
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('kt_theme')) {
        applyTheme(e.matches ? 'dark' : 'light', true);
      }
    });
  }
}
