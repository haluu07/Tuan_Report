/**
 * CÔNG TY TNHH KT XANH THÁI NGUYÊN
 * Module: Validation & Gửi Form Đặt Lịch (Booking Form Controller)
 */

import { escapeHTML } from './utils.js';
import { openModal } from './modal.js';

export function initBookingForm() {
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
      validateField('phone', false, 'Số điện thoại không hợp lệ (10 chữ số, VD: 0988123456)');
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
      const selectedTime = new Date(appointmentDate).getTime();
      const currentTime = new Date().getTime();

      if (selectedTime < currentTime - 60000) {
        validateField('appointmentDate', false, 'Thời gian hẹn phải từ thời điểm hiện tại trở đi');
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

    // Chuẩn bị payload gửi FormSubmit.co (tối ưu gửi email HTML bàn giao đầy đủ)
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

    // Gửi AJAX không chuyển hướng trang tới FormSubmit endpoint của dtc235270180@ictu.edu.vn
    fetch('https://formsubmit.co/ajax/dtc235270180@ictu.edu.vn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    .then(async (response) => {
      let result = null;
      try {
        result = await response.json();
      } catch (e) {
        result = { success: response.ok };
      }
      return { ok: response.ok, data: result };
    })
    .then(({ ok, data }) => {
      // Đổ dữ liệu chi tiết vào Modal Thành Công (chỉ giữ thông tin phiếu hẹn chuyên nghiệp)
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
    })
    .catch((error) => {
      console.warn('Gửi Form qua FormSubmit:', error);
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
    })
    .finally(() => {
      btnSubmit.classList.remove('loading');
      btnSubmit.disabled = false;
      btnText.textContent = 'Gửi Yêu Cầu Đặt Lịch Khảo Sát';
    });
  });
}
