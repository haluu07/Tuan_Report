/**
 * CÔNG TY TNHH KT XANH THÁI NGUYÊN - I18N SYSTEM CONTROLLER
 * Quản lý chuyển đổi ngôn ngữ song ngữ Tiếng Việt (VIE) & Tiếng Anh (ENG)
 * Tự động cập nhật toàn bộ trang, hỗ trợ lưu trữ cục bộ (localStorage)
 */

import { TRANSLATIONS } from './translations.js';

export function getCurrentLang() {
  try {
    const saved = localStorage.getItem('kt_lang');
    if (saved === 'en' || saved === 'vi') return saved;
  } catch (e) {}
  return 'vi';
}

export function setLanguage(lang) {
  const targetLang = (lang === 'en') ? 'en' : 'vi';
  const dict = TRANSLATIONS[targetLang];
  if (!dict) return;

  try {
    localStorage.setItem('kt_lang', targetLang);
  } catch (e) {}

  // 1. Cập nhật thẻ HTML lang attribute & meta
  document.documentElement.setAttribute('lang', targetLang);
  if (dict.doc_title) {
    document.title = dict.doc_title;
  }
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && dict.meta_desc) {
    metaDesc.setAttribute('content', dict.meta_desc);
  }

  // 2. Cập nhật các phần tử văn bản đơn (data-i18n)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  // 3. Cập nhật các phần tử chứa HTML (data-i18n-html)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  // 4. Cập nhật thuộc tính placeholder (data-i18n-placeholder)
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  // 5. Cập nhật thuộc tính title (data-i18n-title)
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    if (dict[key] !== undefined) {
      el.setAttribute('title', dict[key]);
    }
  });

  // 6. Cập nhật thuộc tính aria-label (data-i18n-aria)
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    if (dict[key] !== undefined) {
      el.setAttribute('aria-label', dict[key]);
    }
  });

  // 7. Đồng bộ trạng thái active trên tất cả các nút chuyển đổi ngôn ngữ
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const btnLang = btn.getAttribute('data-lang');
    if (btnLang === targetLang) {
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
    } else {
      btn.classList.remove('active');
      btn.setAttribute('aria-pressed', 'false');
    }
  });

  // 8. Cập nhật động nút Thu Gọn / Xem Thêm Dịch Vụ
  const btnToggleServices = document.getElementById('btnToggleAllServices');
  if (btnToggleServices) {
    const toggleText = btnToggleServices.querySelector('.toggle-text');
    if (toggleText) {
      const isExpanded = btnToggleServices.classList.contains('expanded');
      toggleText.textContent = isExpanded ? dict.btn_expand_less : dict.btn_expand_more;
    }
  }

  // 9. Cập nhật placeholder chat input & quick chips
  const chatInput = document.getElementById('chatInput');
  if (chatInput && dict.chat_input_ph) {
    chatInput.setAttribute('placeholder', dict.chat_input_ph);
  }

  // 10. Phát sự kiện toàn cục để các module khác (Chatbot, Dự án GIS) lắng nghe
  window.dispatchEvent(new CustomEvent('kt:langchange', { detail: { lang: targetLang } }));
  document.dispatchEvent(new CustomEvent('kt:langchange', { detail: { lang: targetLang } }));
}

export function initI18n() {
  const currentLang = getCurrentLang();

  // Bắt sự kiện click vào các nút chọn ngôn ngữ (Header desktop & Mobile drawer)
  document.addEventListener('click', (e) => {
    const langBtn = e.target.closest('.lang-btn');
    if (langBtn) {
      const lang = langBtn.getAttribute('data-lang');
      if (lang) {
        setLanguage(lang);
      }
    }
  });

  // Kích hoạt ngay ngôn ngữ đã lưu hoặc mặc định
  setLanguage(currentLang);
}
