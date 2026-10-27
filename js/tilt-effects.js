/**
 * ==============================================================================
 * CÔNG TY TNHH KT XANH THÁI NGUYÊN - 3D INTERACTIVE TILT & SPOTLIGHT SHEEN
 * Hiệu ứng nghiêng 3D theo con trỏ chuột (3D Perspective Tilt)
 * và ánh sáng vệt quét phản chiếu (Dynamic Spotlight Sheen)
 * Cho các thẻ: 5 Trụ cột, 11 Dịch vụ, Bảng năng lực, Thẻ Hero
 * ==============================================================================
 */

export function init3DTiltEffects() {
  // Chỉ kích hoạt trên thiết bị có chuột (không kích hoạt trên cảm ứng nhỏ để tránh giật lag)
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const targetCards = document.querySelectorAll(
    '.pillar-card, .service-card, .project-card, .about-profile-card, .poster-display-card, .stat-box'
  );

  targetCards.forEach(card => {
    // Kích hoạt perspective trên thẻ cha
    card.style.transformStyle = 'preserve-3d';
    card.style.willChange = 'transform';

    let bounds;

    function updateBounds() {
      bounds = card.getBoundingClientRect();
    }

    card.addEventListener('mouseenter', () => {
      updateBounds();
      card.style.transition = 'transform 0.12s ease-out, box-shadow 0.25s ease-out';
    });

    card.addEventListener('mousemove', (e) => {
      if (!bounds) updateBounds();

      const mouseX = e.clientX - bounds.left;
      const mouseY = e.clientY - bounds.top;

      const xPct = (mouseX / bounds.width - 0.5);
      const yPct = (mouseY / bounds.height - 0.5);

      // Góc xoay 3D tinh tế (tối đa 7 độ)
      const rotateX = -yPct * 12;
      const rotateY = xPct * 14;

      card.style.transform = `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(6px)`;

      // Tọa độ vệt sáng spotlight theo chuột
      const glowX = (mouseX / bounds.width) * 100;
      const glowY = (mouseY / bounds.height) * 100;
      card.style.setProperty('--glow-x', `${glowX}%`);
      card.style.setProperty('--glow-y', `${glowY}%`);
    });

    card.addEventListener('mouseleave', () => {
      card.style.transition = 'transform 0.45s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.45s ease-out';
      card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    });
  });
}
