/**
 * CÔNG TY TNHH KT XANH THÁI NGUYÊN
 * Module: Menu điều hướng & Hiệu ứng Header (Navigation Controller)
 */

export function initNavigation() {
  const siteHeader = document.getElementById('siteHeader');
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mainNav = document.getElementById('mainNav');
  const navBackdrop = document.getElementById('navBackdrop');
  const navLinks = document.querySelectorAll('.nav-link');

  // 1.1 Hiệu ứng bóng đổ Header khi cuộn trang
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      siteHeader?.classList.add('scrolled');
    } else {
      siteHeader?.classList.remove('scrolled');
    }
  }, { passive: true });

  // 1.2 Bật/Tắt Menu Hamburger trên Mobile & Tablet
  function toggleMobileMenu() {
    if (!mainNav || !hamburgerBtn || !navBackdrop) return;
    const isOpen = mainNav.classList.toggle('open');
    hamburgerBtn.classList.toggle('active', isOpen);
    navBackdrop.classList.toggle('show', isOpen);
    hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  function closeMobileMenu() {
    if (!mainNav || !hamburgerBtn || !navBackdrop) return;
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
