/**
 * ==============================================================================
 * CÔNG TY TNHH KT XANH THÁI NGUYÊN - DYNAMIC ANIMATIONS & MICRO-INTERACTIONS
 * 1. Animated Counter Numbers: Đếm số tăng dần khi cuộn vào tầm mắt
 * 2. Scroll Progress Bar: Thanh tiến trình đọc trang ở đỉnh màn hình
 * 3. Back to Top Button: Nút cuộn về đầu trang kèm vòng tròn tiến trình SVG
 * 4. Scroll Reveal: Hiệu ứng trượt xuất hiện mềm mại cho các phần tử
 * ==============================================================================
 */

export function initDynamicAnimations() {
  initScrollProgressBar();
  initBackToTopButton();
  initCounterAnimation();
  initScrollReveal();
}

/**
 * 1. Thanh tiến trình cuộn trang ở mép đỉnh màn hình
 */
function initScrollProgressBar() {
  let bar = document.getElementById('scrollProgressBar');
  if (!bar) {
    bar = document.createElement('div');
    bar.id = 'scrollProgressBar';
    bar.className = 'scroll-progress-bar';
    document.body.prepend(bar);
  }

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = `${scrollPercent}%`;
  }, { passive: true });
}

/**
 * 2. Nút cuộn về đầu trang với vòng tròn tiến trình SVG
 */
function initBackToTopButton() {
  let btn = document.getElementById('backToTopBtn');
  if (!btn) {
    btn = document.createElement('button');
    btn.id = 'backToTopBtn';
    btn.className = 'back-to-top-btn';
    btn.setAttribute('aria-label', 'Cuộn về đầu trang');
    btn.innerHTML = `
      <svg class="progress-ring" viewBox="0 0 44 44">
        <circle class="progress-ring-bg" cx="22" cy="22" r="18"/>
        <circle class="progress-ring-circle" id="progressRingCircle" cx="22" cy="22" r="18"/>
      </svg>
      <svg class="arrow-up-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    `;
    document.body.appendChild(btn);
  }

  const circle = document.getElementById('progressRingCircle');
  const circumference = 2 * Math.PI * 18; // ~113.1

  if (circle) {
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = `${circumference}`;
  }

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;

    // Hiển thị nút khi cuộn quá 350px
    if (scrollTop > 350) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }

    if (circle) {
      const offset = circumference - scrollPercent * circumference;
      circle.style.strokeDashoffset = `${offset}`;
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/**
 * 3. Hiệu ứng nhảy số tăng dần (Counter Numbers)
 */
function initCounterAnimation() {
  const counterElements = document.querySelectorAll('.stat-number, .profile-stat-number');
  if (!counterElements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counterElements.forEach(el => observer.observe(el));

  function animateCounter(el) {
    const rawText = el.textContent.trim();
    // Tách phần số và phần hậu tố (ví dụ: "20+", "110kV", "100%", "11")
    const match = rawText.match(/^(\d+)(.*)$/);
    if (!match) return;

    const targetNumber = parseInt(match[1], 10);
    const suffix = match[2] || '';
    const duration = 1400; // ms
    const startTime = performance.now();

    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Easing out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.round(targetNumber * easeOut);

      el.textContent = `${currentVal}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = rawText;
      }
    }

    requestAnimationFrame(update);
  }
}

/**
 * 4. Hiệu ứng Scroll Reveal (Trượt nhẹ lên khi cuộn tới)
 */
function initScrollReveal() {
  const revealElements = document.querySelectorAll(
    '.pillar-card, .service-card, .workflow-step-card, .about-profile-card, .contact-card, .section-header'
  );

  if (!revealElements.length) return;

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealElements.forEach((el, index) => {
    el.classList.add('reveal-on-scroll');
    // Stagger delay nhẹ nhàng theo thứ tự
    const delay = (index % 4) * 0.08;
    el.style.transitionDelay = `${delay}s`;
    revealObserver.observe(el);
  });
}
