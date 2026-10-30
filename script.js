/**
 * ==============================================================================
 * CÔNG TY TNHH KT XANH THÁI NGUYÊN - JAVASCRIPT ĐIỀU KHIỂN GIAO DIỆN & TƯƠNG TÁC
 * Tuân thủ tiêu chuẩn: UI/UX Designer & UI/UX Pro Max
 * Phiên bản: 2.0 (Tích hợp nhận diện Logo & Poster thực tế)
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // Khởi động các khối chức năng
  initTheme();
  initNavigation();
  initServiceCardActions();
  initServiceFilter();
  initBookingForm();
  initChatbotWidget();
  initModal();
  initScrollProgressBar();
  initCounterAnimation();
});

/* ==============================================================================
   1. MENU ĐIỀU HƯỚNG & HIỆU ỨNG HEADER (NAVIGATION CONTROLLER)
   ============================================================================== */
function initNavigation() {
  const siteHeader = document.getElementById('siteHeader');
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mainNav = document.getElementById('mainNav');
  const navBackdrop = document.getElementById('navBackdrop');
  const navLinks = document.querySelectorAll('.nav-link');

  // 1.1 Hiệu ứng bóng đổ Header khi cuộn trang
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  }, { passive: true });

  // 1.2 Bật/Tắt Menu Hamburger trên Mobile & Tablet
  function toggleMobileMenu() {
    const isOpen = mainNav.classList.toggle('open');
    hamburgerBtn.classList.toggle('active', isOpen);
    navBackdrop.classList.toggle('show', isOpen);
    hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  function closeMobileMenu() {
    mainNav.classList.remove('open');
    hamburgerBtn.classList.remove('active');
    navBackdrop.classList.remove('show');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', toggleMobileMenu);
  }

  const drawerCloseBtn = document.getElementById('drawerCloseBtn');
  if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener('click', closeMobileMenu);
  }

  if (navBackdrop) {
    navBackdrop.addEventListener('click', closeMobileMenu);
  }

  // 1.3 Đóng menu khi bấm liên kết & cập nhật active
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
      navLinks.forEach(item => item.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // 1.4 Intersection Observer cập nhật link active theo vùng hiển thị
  const sections = document.querySelectorAll('section[id]');
  if ('IntersectionObserver' in window && sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${currentId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => sectionObserver.observe(section));
  }
}

/* ==============================================================================
   2. TƯƠNG TÁC THẺ DỊCH VỤ & CHUYỂN TIẾP FORM (SERVICE CARDS)
   ============================================================================== */
function initServiceCardActions() {
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

function initServiceFilter() {
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
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      if (selectedCategory === 'all') {
        updateAllVisibility();
      } else {
        if (toggleWrap) toggleWrap.style.display = 'none';

        serviceCards.forEach(card => {
          const cardCat = card.getAttribute('data-category');
          card.classList.remove('is-extra-hidden');
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

/* ==============================================================================
   3. VALIDATION & GỬI FORM ĐẶT LỊCH (BOOKING FORM CONTROLLER)
   ============================================================================== */
function initBookingForm() {
  const form = document.getElementById('bookingForm');
  if (!form) return;

  const fullNameInput = document.getElementById('fullName');
  const phoneInput = document.getElementById('phone');
  const emailInput = document.getElementById('email');
  const serviceSelect = document.getElementById('serviceSelect');
  const appointmentDateInput = document.getElementById('appointmentDate');
  const notesInput = document.getElementById('notes');

  const btnSubmit = document.getElementById('btnSubmit');
  const btnText = document.getElementById('btnText');
  const formAlert = document.getElementById('formAlert');
  const alertIcon = document.getElementById('alertIcon');
  const alertMessage = document.getElementById('alertMessage');

  // Cài đặt ngày giờ tối thiểu là thời điểm hiện tại
  if (appointmentDateInput) {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    appointmentDateInput.min = `${year}-${month}-${day}T${hours}:${minutes}`;
  }

  // Regex kiểm tra số điện thoại Việt Nam & Email RFC 5322
  const REGEX = {
    phone: /^(0|\+84)(3|5|7|8|9)[0-9]{8}$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  };

  function validateField(fieldId, isValid, errorMessage) {
    const group = document.getElementById(`group-${fieldId}`);
    const errorSpan = document.getElementById(`error-${fieldId}`);

    if (!group) return isValid;

    if (!isValid) {
      group.classList.add('has-error');
      group.classList.remove('is-valid');
      if (errorSpan && errorMessage) {
        errorSpan.textContent = errorMessage;
      }
    } else {
      group.classList.remove('has-error');
      group.classList.add('is-valid');
    }

    return isValid;
  }

  // Xóa cảnh báo lỗi real-time khi người dùng bắt đầu nhập
  [fullNameInput, phoneInput, emailInput, serviceSelect, appointmentDateInput].forEach(input => {
    if (!input) return;
    const eventType = input.tagName.toLowerCase() === 'select' ? 'change' : 'input';

    input.addEventListener(eventType, () => {
      const fieldName = input.name;
      const group = document.getElementById(`group-${fieldName}`);
      if (group && group.classList.contains('has-error')) {
        group.classList.remove('has-error');
      }
    });
  });

  function showAlert(type, message) {
    formAlert.className = `form-alert alert-${type}`;
    alertMessage.textContent = message;

    if (type === 'error') {
      alertIcon.innerHTML = `
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>`;
    } else if (type === 'success') {
      alertIcon.innerHTML = `
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>`;
    }
  }

  function hideAlert() {
    formAlert.className = 'form-alert alert-hidden';
    alertMessage.textContent = '';
  }

  // Submit Handler
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    hideAlert();

    const fullName = fullNameInput.value.trim();
    const phone = phoneInput.value.trim().replace(/\s+/g, '');
    const email = emailInput.value.trim();
    const service = serviceSelect.value;
    const appointmentDate = appointmentDateInput.value;
    const notes = notesInput ? notesInput.value.trim() : '';

    let isFormValid = true;
    let firstInvalidInput = null;

    if (!fullName || fullName.length < 2) {
      validateField('fullName', false, 'Vui lòng nhập họ và tên (tối thiểu 2 ký tự)');
      isFormValid = false;
      if (!firstInvalidInput) firstInvalidInput = fullNameInput;
    } else {
      validateField('fullName', true);
    }

    if (!phone) {
      validateField('phone', false, 'Vui lòng nhập số điện thoại');
      isFormValid = false;
      if (!firstInvalidInput) firstInvalidInput = phoneInput;
    } else if (!REGEX.phone.test(phone)) {
      validateField('phone', false, 'Số điện thoại không hợp lệ (10 chữ số, VD: 0982346837)');
      isFormValid = false;
      if (!firstInvalidInput) firstInvalidInput = phoneInput;
    } else {
      validateField('phone', true);
    }

    if (!email) {
      validateField('email', false, 'Vui lòng nhập email');
      isFormValid = false;
      if (!firstInvalidInput) firstInvalidInput = emailInput;
    } else if (!REGEX.email.test(email)) {
      validateField('email', false, 'Email không đúng định dạng (VD: contact@company.vn)');
      isFormValid = false;
      if (!firstInvalidInput) firstInvalidInput = emailInput;
    } else {
      validateField('email', true);
    }

    if (!service) {
      validateField('service', false, 'Vui lòng chọn 1 trong 11 lĩnh vực dịch vụ');
      isFormValid = false;
      if (!firstInvalidInput) firstInvalidInput = serviceSelect;
    } else {
      validateField('service', true);
    }

    if (!appointmentDate) {
      validateField('appointmentDate', false, 'Vui lòng chọn ngày và giờ dự kiến khảo sát');
      isFormValid = false;
      if (!firstInvalidInput) firstInvalidInput = appointmentDateInput;
    } else {
      const selectedDate = new Date(appointmentDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const selectedDay = new Date(selectedDate);
      selectedDay.setHours(0, 0, 0, 0);

      if (selectedDay < today) {
        validateField('appointmentDate', false, 'Thời gian hẹn phải từ ngày hôm nay trở đi');
        isFormValid = false;
        if (!firstInvalidInput) firstInvalidInput = appointmentDateInput;
      } else {
        validateField('appointmentDate', true);
      }
    }

    if (!isFormValid) {
      showAlert('error', 'Vui lòng kiểm tra và hoàn thiện các trường thông tin báo đỏ.');
      if (firstInvalidInput) firstInvalidInput.focus();
      return;
    }

    // Trạng thái Loading gửi form
    btnSubmit.classList.add('loading');
    btnSubmit.disabled = true;
    btnText.textContent = 'Đang chuyển yêu cầu đến email kỹ sư...';

    const randomCode = 'KTX-TN-' + Math.floor(1000 + Math.random() * 9000);
    const dateObj = new Date(appointmentDate);
    const formattedDate = dateObj.toLocaleString('vi-VN', {
      hour: '2-digit',
      minute: '2-digit',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });

    // Chuẩn bị payload gửi FormSubmit.co
    const payload = {
      _subject: `[KT Xanh] Yêu Cầu Khảo Sát Mới: ${fullName} - ${phone}`,
      _template: 'table',
      _captcha: 'false',
      'Mã phiếu hẹn': randomCode,
      'Người liên hệ / Khách hàng': fullName,
      'Số điện thoại': phone,
      'Email liên hệ': email,
      'Lĩnh vực dịch vụ': service,
      'Thời gian mong muốn': formattedDate,
      'Địa điểm & Yêu cầu công trình': notes || 'Không có ghi chú thêm',
      'Nền tảng gửi': 'Website KT Xanh Thái Nguyên (Deploy GitHub Pages)',
      'Thời điểm gửi': new Date().toLocaleString('vi-VN')
    };

    // 1. Lưu ngay vào LocalStorage để không mất thông tin
    try {
      const storedList = JSON.parse(localStorage.getItem('ktx_booking_records') || '[]');
      storedList.push({
        code: randomCode,
        fullName,
        phone,
        email,
        service,
        appointmentDate: formattedDate,
        notes: notes || '',
        createdAt: new Date().toISOString()
      });
      localStorage.setItem('ktx_booking_records', JSON.stringify(storedList));
    } catch (err) {
      console.warn('Lỗi ghi LocalStorage:', err);
    }

    // 2. Hiển thị popup thành công và reset form
    let hasRenderedModal = false;
    function renderModalAndSuccess() {
      if (hasRenderedModal) return;
      hasRenderedModal = true;

      const modalBookingDetails = document.getElementById('modalBookingDetails');
      if (modalBookingDetails) {
        modalBookingDetails.innerHTML = `
          <div class="detail-row">
            <span class="detail-label">Mã phiếu hẹn:</span>
            <span class="detail-value text-primary" style="font-weight: 800; color: #13448f;">${randomCode}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Khách hàng / Kỹ sư:</span>
            <span class="detail-value">${escapeHTML(fullName)}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Số điện thoại:</span>
            <span class="detail-value">${escapeHTML(phone)}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Email:</span>
            <span class="detail-value">${escapeHTML(email)}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Dịch vụ đăng ký:</span>
            <span class="detail-value">${escapeHTML(service)}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Thời gian khảo sát:</span>
            <span class="detail-value">${formattedDate}</span>
          </div>
          ${notes ? `
          <div class="detail-row">
            <span class="detail-label">Ghi chú dự án:</span>
            <span class="detail-value">${escapeHTML(notes)}</span>
          </div>` : ''}
        `;
      }

      openModal();
      form.reset();
      document.querySelectorAll('.form-group').forEach(grp => {
        grp.classList.remove('is-valid', 'has-error');
      });
      showAlert('success', 'Yêu cầu của bạn đã được tiếp nhận. Đội ngũ kỹ sư KT Xanh Thái Nguyên sẽ liên hệ xác nhận trong 30 phút!');
      btnSubmit.classList.remove('loading');
      btnSubmit.disabled = false;
      btnText.textContent = 'Gửi Yêu Cầu Đặt Lịch Khảo Sát';
    }

    const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
    const timeoutId = setTimeout(() => {
      if (controller) controller.abort();
      renderModalAndSuccess();
    }, 4000);

    fetch('https://formsubmit.co/ajax/dtc235270180@ictu.edu.vn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload),
      signal: controller ? controller.signal : undefined
    })
    .then(async (response) => {
      clearTimeout(timeoutId);
      renderModalAndSuccess();
    })
    .catch((error) => {
      clearTimeout(timeoutId);
      console.warn('FormSubmit kết quả:', error);
      renderModalAndSuccess();
    });
  });
}

/* ==============================================================================
   4. TRỢ LÝ CHATBOT TỰ ĐỘNG (FLOATING CHATBOT CONTROLLER)
   ============================================================================== */
function initChatbotWidget() {
  const chatToggleBtn = document.getElementById('chatToggleBtn');
  const chatWindow = document.getElementById('chatWindow');
  const chatCloseBtn = document.getElementById('chatCloseBtn');
  const chatMessages = document.getElementById('chatMessages');
  const chatForm = document.getElementById('chatForm');
  const chatInput = document.getElementById('chatInput');
  const quickChips = document.querySelectorAll('.quick-chip');

  if (!chatToggleBtn || !chatWindow) return;

  let isInitialized = false;

  function toggleChat() {
    const isActive = chatWindow.classList.toggle('active');
    chatToggleBtn.classList.toggle('open', isActive);
    chatWindow.setAttribute('aria-hidden', String(!isActive));

    if (isActive) {
      if (!isInitialized) {
        sendBotGreeting();
        isInitialized = true;
      }
      setTimeout(() => {
        chatInput.focus();
      }, 250);
    }
  }

  function closeChat() {
    chatWindow.classList.remove('active');
    chatToggleBtn.classList.remove('open');
    chatWindow.setAttribute('aria-hidden', 'true');
  }

  chatToggleBtn.addEventListener('click', toggleChat);
  if (chatCloseBtn) chatCloseBtn.addEventListener('click', closeChat);

  function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
  }

  function appendMessage(sender, text) {
    const bubble = document.createElement('div');
    bubble.className = `chat-bubble chat-bubble-${sender}`;
    const sanitizedText = escapeHTML(text).replace(/\n/g, '<br>');
    
    bubble.innerHTML = `
      <div class="chat-bubble-content">${sanitizedText}</div>
      <span class="chat-bubble-time">${getCurrentTime()}</span>
    `;

    chatMessages.appendChild(bubble);
    scrollChatToBottom();
  }

  function showTypingIndicator() {
    const typingBubble = document.createElement('div');
    typingBubble.className = 'typing-bubble';
    typingBubble.id = 'botTyping';
    typingBubble.innerHTML = `
      <span class="typing-dot"></span>
      <span class="typing-dot"></span>
      <span class="typing-dot"></span>
    `;
    chatMessages.appendChild(typingBubble);
    scrollChatToBottom();
  }

  function removeTypingIndicator() {
    const typing = document.getElementById('botTyping');
    if (typing) typing.remove();
  }

  function scrollChatToBottom() {
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function sendBotGreeting() {
    showTypingIndicator();
    setTimeout(() => {
      removeTypingIndicator();
      appendMessage('bot', 'Kính chào Quý khách! Em là Trợ lý Kỹ thuật của Công ty TNHH KT Xanh Thái Nguyên.\nQuý khách có thể bấm nhanh vào 4 câu hỏi gợi ý bên dưới (Báo giá địa chất, Thẩm tra dự toán, Trạm 110kV, Đặt lịch khảo sát) hoặc nhập nội dung để em hỗ trợ ngay ạ!');
    }, 500);
  }

  // Tri thức trả lời tự động cập nhật đúng chuẩn thông tin doanh nghiệp
  function getBotResponse(userMsg) {
    const msg = userMsg.toLowerCase().trim();

    // 1. Hỏi về Báo giá khảo sát địa chất / Địa hình / Khoan
    if (msg.includes('báo giá') || msg.includes('đơn giá') || msg.includes('chi phí') || msg.includes('địa chất') || msg.includes('khoan')) {
      return 'Báo giá khảo sát địa chất & địa hình tại KT Xanh căn cứ theo Định mức Thông tư 12/2021/TT-BXD:\n• Trọn gói bao gồm: Khoan khảo sát hiện trường, thí nghiệm SPT, thí nghiệm cơ lý mẫu đất đá tại phòng kiểm định hợp chuẩn LAS-XD.\n• Bàn giao Báo cáo kết quả địa chất có đóng dấu pháp nhân chứng chỉ năng lực hạng II/III, phục vụ trực tiếp thiết kế móng và xin phép xây dựng.\n• Tiến độ hoàn thành: Từ 3 - 5 ngày làm việc.\nQuý khách chỉ cần cung cấp vị trí mặt bằng và diện tích dự án, kỹ sư KT Xanh sẽ gửi Đề cương & Báo giá chi tiết trong 2 giờ qua Hotline: 0982.346.837!';
    }

    // 2. Hỏi về Quy trình thẩm tra dự toán / Thẩm tra dự án
    if (msg.includes('thẩm tra') || msg.includes('dự toán') || msg.includes('quản lý chi phí')) {
      return 'Quy trình thẩm tra thiết kế & dự toán tại KT Xanh tuân thủ Nghị định 10/2021/NĐ-CP & Nghị định 15/2021/NĐ-CP:\n1. Tiếp nhận hồ sơ: Bản vẽ thiết kế, thuyết minh và bảng dự toán ban đầu.\n2. Rà soát khối lượng: Đối chiếu định mức, đơn giá nhân công - ca máy theo công bố giá của Sở Xây dựng.\n3. Thẩm định kết cấu & tối ưu: Đề xuất giải pháp kỹ thuật tối ưu chi phí, tránh lãng phí hoặc đội vốn (tiết kiệm từ 5 - 15% ngân sách).\n4. Phát hành Báo cáo kết quả thẩm tra độc lập có dấu pháp nhân, đủ điều kiện trình Chủ đầu tư phê duyệt khởi công.\nThời gian thực hiện nhanh chóng: 3 - 7 ngày làm việc. Hotline: 0982.346.837.';
    }

    // 3. Hỏi về Đường dây & Trạm biến áp 110kV, điện mặt trời
    if (msg.includes('110') || msg.includes('trạm biến áp') || msg.includes('đường dây') || msg.includes('mặt trời') || msg.includes('solar') || msg.includes('điện')) {
      return 'Năng lực tư vấn Đường dây & Trạm biến áp đến 110kV và Điện mặt trời của KT Xanh:\n• Khảo sát hướng tuyến, đo đạc trắc địa mặt bằng trạm biến áp và hành lang an toàn lưới điện.\n• Lập Báo cáo nghiên cứu khả thi (FS), thiết kế bản vẽ thi công trạm 110kV/35kV/22kV.\n• Tư vấn thỏa thuận đấu nối chuyên sâu với Tổng công ty Điện lực miền Bắc (EVNNPC) và PC Thái Nguyên.\n• Giám sát thi công lắp đặt máy biến áp, hệ thống SCADA, rơ-le bảo vệ và thí nghiệm đóng điện bàn giao.\n• Tư vấn giải pháp Điện mặt trời áp mái công nghiệp (Rooftop Solar) giảm phát thải xanh cho nhà xưởng.\nLiên hệ Kỹ sư trưởng chuyên trách điện: 0982.346.837 để được khảo sát thực tế!';
    }

    // 4. Đặt lịch khảo sát
    if (msg.includes('đặt lịch') || msg.includes('khảo sát') || msg.includes('hẹn') || msg.includes('tư vấn')) {
      return 'Dạ vâng! KT Xanh sẵn sàng cử kỹ sư mang máy toàn đạc điện tử và thiết bị GPS RTK đến khảo sát trực tiếp tại hiện trường công trình:\n• Quý khách có thể kéo xuống mục "Đăng Ký Khảo Sát & Tư Vấn" trên trang web để điền thông tin.\n• Hoặc bấm gọi ngay Hotline Kỹ sư trưởng: 0982.346.837 để xếp lịch hẹn khảo sát trong ngày!\nKỹ sư KT Xanh sẽ liên hệ lại xác nhận trong vòng 15 phút ạ.';
    }

    // 5. Hỏi về dịch vụ, lĩnh vực hoạt động
    if (msg.includes('dịch vụ') || msg.includes('lĩnh vực') || msg.includes('làm gì') || msg.includes('hoạt động')) {
      return 'KT Xanh Thái Nguyên chuyên sâu 11 lĩnh vực kỹ thuật xây dựng & hạ tầng:\n1. Giám sát công trình (dân dụng, công nghiệp, hạ tầng, ĐZ & TBA, giao thông)\n2. Thiết kế kỹ thuật & thông tin liên lạc\n3. Khảo sát địa hình – Khảo sát địa chất\n4. Kiểm định xây dựng\n5. Quản lý chi phí đầu tư\n6. Lập dự án đầu tư\n7. Tư vấn đấu thầu, HSMT\n8. Thiết kế kiến trúc, tổng mặt bằng\n9. Thẩm tra dự án, dự toán\n10. Tư vấn tạo mẫu biển quảng cáo\n11. Khảo sát, thiết kế, giám sát ĐZ & TBA đến 110kV; Điện mặt trời.';
    }

    // 6. Hỏi về địa chỉ, trụ sở, văn phòng
    if (msg.includes('địa chỉ') || msg.includes('ở đâu') || msg.includes('văn phòng') || msg.includes('trụ sở')) {
      return 'Trụ sở chính: Số 13, Tổ 90, Phường Phan Đình Phùng, TP. Thái Nguyên, Tỉnh Thái Nguyên.\nĐơn vị còn có Chi nhánh tại Tỉnh Cao Bằng phục vụ các dự án hạ tầng khu vực Đông Bắc.';
    }

    // 7. Hỏi về pháp lý, mã số thuế, giám đốc, năm thành lập
    if (msg.includes('pháp lý') || msg.includes('mã số thuế') || msg.includes('mst') || msg.includes('giám đốc') || msg.includes('thành lập')) {
      return 'Thông tin pháp lý Công ty TNHH KT Xanh:\n• Tên quốc tế: KT GREEN CO.,LTD\n• Mã số thuế: 4600361446\n• Ngày hoạt động: 19/08/2004 (Hơn 20 năm kinh nghiệm)\n• Người đại diện / Giám đốc: Ông Trần Văn Vinh\n• Khẩu hiệu: TẬN TÂM - CHUYÊN NGHIỆP - BỀN VỮNG.';
    }

    // 8. Hỏi về giờ làm việc, hotline
    if (msg.includes('giờ') || msg.includes('thời gian') || msg.includes('hotline') || msg.includes('liên hệ') || msg.includes('sđt')) {
      return 'Thông tin liên hệ & Giờ làm việc:\n• Giờ làm việc: 08:00 - 17:30 (Thứ 2 đến Thứ 7)\n• Hotline kỹ sư trưởng: 0982.346.837\n• Email: lienhe@ktxanh.vn\nKỹ sư luôn sẵn sàng tư vấn trực tiếp tận nơi!';
    }

    return 'Cảm ơn Quý khách! Để nhận được tư vấn kỹ thuật chính xác nhất theo quy mô công trình, Quý khách vui lòng để lại số điện thoại hoặc gọi ngay Hotline 0982.346.837. KT Xanh Thái Nguyên luôn sẵn sàng phục vụ!';
  }

  function handleSendMessage(text) {
    const userText = text.trim();
    if (!userText) return;

    appendMessage('user', userText);
    chatInput.value = '';

    showTypingIndicator();

    setTimeout(() => {
      removeTypingIndicator();
      const botReply = getBotResponse(userText);
      appendMessage('bot', botReply);
    }, 750);
  }

  chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    handleSendMessage(chatInput.value);
  });

  quickChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const question = chip.getAttribute('data-question');
      handleSendMessage(question);
    });
  });
}

/* ==============================================================================
   5. QUẢN LÝ HỘP THOẠI MODAL (MODAL CONTROLLER)
   ============================================================================== */
function initModal() {
  const successModal = document.getElementById('successModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');

  if (!successModal) return;

  function closeModal() {
    successModal.classList.remove('show');
    successModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  successModal.addEventListener('click', (e) => {
    if (e.target === successModal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (successModal.classList.contains('show')) closeModal();
      const chatWindow = document.getElementById('chatWindow');
      if (chatWindow && chatWindow.classList.contains('active')) {
        chatWindow.classList.remove('active');
        const chatToggleBtn = document.getElementById('chatToggleBtn');
        if (chatToggleBtn) chatToggleBtn.classList.remove('open');
      }
    }
  });
}

function openModal() {
  const successModal = document.getElementById('successModal');
  if (successModal) {
    successModal.classList.add('show');
    successModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
}

function escapeHTML(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/* ==============================================================================
   6. THANH TIẾN ĐỘ CUỘN TRANG & HIỆU ỨNG ĐẾM SỐ ĐỘNG
   ============================================================================== */
function initScrollProgressBar() {
  let bar = document.getElementById('scrollProgressBar');
  if (!bar) {
    bar = document.createElement('div');
    bar.id = 'scrollProgressBar';
    bar.className = 'scroll-progress-bar';
    bar.setAttribute('aria-hidden', 'true');
    document.body.prepend(bar);
  }

  function updateProgressBar() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = `${Math.min(100, Math.max(0, scrollPercent))}%`;
  }

  window.addEventListener('scroll', updateProgressBar, { passive: true });
  window.addEventListener('resize', updateProgressBar, { passive: true });
  updateProgressBar();
}

function initCounterAnimation() {
  const counterElements = document.querySelectorAll('.count-up, .stat-number, .p-stat-val, .profile-stat-number');
  if (!counterElements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2, rootMargin: '0px 0px -30px 0px' });

  counterElements.forEach(el => observer.observe(el));

  function animateCounter(el) {
    let targetNumber = 0;
    let suffix = '';
    let prefix = '';

    if (el.hasAttribute('data-target')) {
      targetNumber = parseInt(el.getAttribute('data-target'), 10) || 0;
      suffix = el.getAttribute('data-suffix') || '';
      prefix = el.getAttribute('data-prefix') || '';
    } else {
      const rawText = el.textContent.trim();
      const match = rawText.match(/^([0-9]+)(.*)$/);
      if (!match) return;
      targetNumber = parseInt(match[1], 10);
      suffix = match[2] || '';
      if (rawText.startsWith('0') && targetNumber < 10) {
        prefix = '0';
      }
    }

    const duration = 1400; // ms
    const startTime = performance.now();

    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Easing out cubic: 1 - (1 - t)^3
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.round(targetNumber * easeOut);

      let formatted = currentVal.toString();
      if (prefix && currentVal < 10) {
        formatted = prefix + formatted;
      }

      el.textContent = `${formatted}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        let finalVal = targetNumber.toString();
        if (prefix && targetNumber < 10) {
          finalVal = prefix + finalVal;
        }
        el.textContent = `${finalVal}${suffix}`;
      }
    }

    requestAnimationFrame(update);
  }
}

/* ==============================================================================
   7. QUẢN LÝ CHẾ ĐỘ SÁNG / TỐI (LIGHT & DARK THEME)
   ============================================================================== */
function initTheme() {
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn, #themeToggleBtn');
  const htmlEl = document.documentElement;

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

    themeToggleBtns.forEach(btn => {
      btn.setAttribute('aria-pressed', String(theme === 'dark'));
      btn.setAttribute('title', theme === 'dark' ? 'Chuyển sang chế độ Sáng' : 'Chuyển sang chế độ Tối');
    });
  }

  const initialTheme = getPreferredTheme();
  applyTheme(initialTheme, false);

  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const current = htmlEl.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const target = current === 'dark' ? 'light' : 'dark';
      applyTheme(target, true);
    });
  });

  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('kt_theme')) {
        applyTheme(e.matches ? 'dark' : 'light', true);
      }
    });
  }
}
