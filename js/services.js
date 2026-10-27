/**
 * CÔNG TY TNHH KT XANH THÁI NGUYÊN
 * Module: Tương tác danh mục 11 Dịch vụ, Bộ lọc phân nhóm & Thu gọn / Xem thêm
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
 * Tích hợp tính năng Thu Gọn / Xem Thêm chống chiếm diện tích trang landing page
 */
export function initServiceFilter() {
  const filterBtns = document.querySelectorAll('.service-filter-btn');
  const serviceCards = document.querySelectorAll('.service-card[data-category]');
  const toggleWrap = document.getElementById('servicesToggleWrap');
  const btnToggle = document.getElementById('btnToggleAllServices');
  let isAllExpanded = false;

  if (!filterBtns.length || !serviceCards.length) return;

  function updateAllVisibility() {
    serviceCards.forEach(card => {
      card.classList.remove('is-hidden');
      if (!isAllExpanded && card.classList.contains('service-card-extra')) {
        card.classList.add('is-extra-hidden');
      } else {
        card.classList.remove('is-extra-hidden');
      }
    });

    if (toggleWrap && btnToggle) {
      toggleWrap.style.display = 'flex';
      const toggleText = btnToggle.querySelector('.toggle-text');
      if (isAllExpanded) {
        if (toggleText) toggleText.textContent = 'Thu Gọn Bớt';
        btnToggle.classList.add('expanded');
      } else {
        if (toggleText) toggleText.textContent = 'Xem Thêm 5 Dịch Vụ Khác';
        btnToggle.classList.remove('expanded');
      }
    }
  }

  // Khởi tạo trạng thái ban đầu cho tab Tất Cả
  updateAllVisibility();

  if (btnToggle) {
    btnToggle.addEventListener('click', () => {
      isAllExpanded = !isAllExpanded;
      updateAllVisibility();
      if (!isAllExpanded) {
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedCategory = btn.getAttribute('data-filter');

      // Cập nhật active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      if (selectedCategory === 'all') {
        updateAllVisibility();
      } else {
        // Ẩn nút toggle khi đang xem danh mục cụ thể (vì mỗi nhóm chỉ có 2-4 dịch vụ)
        if (toggleWrap) toggleWrap.style.display = 'none';

        serviceCards.forEach(card => {
          const cardCat = card.getAttribute('data-category');
          card.classList.remove('is-extra-hidden'); // Hiện đầy đủ cho danh mục đang chọn
          if (cardCat === selectedCategory) {
            card.classList.remove('is-hidden');
            card.classList.remove('is-animating');
            void card.offsetWidth;
            card.classList.add('is-animating');
          } else {
            card.classList.add('is-hidden');
            card.classList.remove('is-animating');
          }
        });
      }
    });
  });
}
