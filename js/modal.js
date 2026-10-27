/**
 * CÔNG TY TNHH KT XANH THÁI NGUYÊN
 * Module: Quản lý hộp thoại Modal (Modal Controller)
 */

export function initModal() {
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

export function openModal() {
  const successModal = document.getElementById('successModal');
  if (successModal) {
    successModal.classList.add('show');
    successModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
}
