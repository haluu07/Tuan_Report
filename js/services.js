/**
 * CÔNG TY TNHH KT XANH THÁI NGUYÊN
 * Module: Tương tác danh mục 11 Dịch vụ, Bộ lọc phân nhóm & Chuyển tiếp Form
 */

export function initServiceCardActions() {
  const bookServiceButtons = document.querySelectorAll('.btn-book-service');
  const serviceSelect = document.getElementById('serviceSelect');
  const bookingSection = document.getElementById('booking');

  bookServiceButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedService = btn.getAttribute('data-service');

      if (serviceSelect && selectedService) {
        // Tự động gán đúng dịch vụ vào ô chọn
        serviceSelect.value = selectedService;

        // Xóa thông báo lỗi nếu có
        const serviceGroup = document.getElementById('group-service');
        if (serviceGroup) {
          serviceGroup.classList.remove('has-error');
          serviceGroup.classList.add('is-valid');
        }
      }

      // Cuộn mượt màn hình tới Form Đặt Lịch
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: 'smooth' });

        if (serviceSelect) {
          setTimeout(() => {
            serviceSelect.focus();
            serviceSelect.style.outline = '2px solid var(--primary)';
            setTimeout(() => { serviceSelect.style.outline = ''; }, 1200);
          }, 600);
        }
      }
    });
  });
}

/**
 * Bộ lọc phân nhóm danh mục dịch vụ trực quan theo 4 nhóm chuyên môn
 */
export function initServiceFilter() {
  const filterBtns = document.querySelectorAll('.service-filter-btn');
  const serviceCards = document.querySelectorAll('.service-card[data-category]');

  if (!filterBtns.length || !serviceCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedCategory = btn.getAttribute('data-filter');

      // Cập nhật active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Lọc các thẻ dịch vụ với animation mượt mà
      serviceCards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        const shouldShow = selectedCategory === 'all' || cardCat === selectedCategory;

        if (shouldShow) {
          card.classList.remove('is-hidden');
          card.classList.remove('is-animating');
          // Trigger reflow để kích hoạt CSS animation
          void card.offsetWidth;
          card.classList.add('is-animating');
        } else {
          card.classList.add('is-hidden');
          card.classList.remove('is-animating');
        }
      });
    });
  });
}
