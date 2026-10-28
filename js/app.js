/**
 * CÔNG TY TNHH KT XANH THÁI NGUYÊN
 * Master App Script (ES Modules)
 * Khởi tạo toàn bộ các module giao diện, 3D WebGL & tương tác
 */

import { initTheme } from './theme.js';
import { initI18n } from './i18n.js';
import { initNavigation } from './navigation.js';
import { initServiceCardActions, initServiceFilter } from './services.js';
import { initBookingForm } from './booking.js';
import { initChatbotWidget } from './chatbot.js';
import { initModal } from './modal.js';
import { initHero3DScene } from './three-scene.js';
import { init3DTiltEffects } from './tilt-effects.js';
import { initDynamicAnimations } from './animations.js';

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // 0. Khởi tạo hệ thống Chuyển đổi Ngôn ngữ (VIE / ENG) & Chế độ Sáng / Tối (Theme System)
  initI18n();
  initTheme();

  // 1. Khởi chạy các khối tương tác cốt lõi
  initNavigation();
  initServiceCardActions();
  initServiceFilter();
  initBookingForm();
  initChatbotWidget();
  initModal();

  // 2. Khởi tạo không gian 3D nền tinh tế (Constellation WebGL)
  initHero3DScene();

  // 3. Kích hoạt hiệu ứng nghiêng 3D Perspective Tilt & Spotlight Sheen trên các thẻ
  init3DTiltEffects();

  // 4. Kích hoạt hiệu ứng động sinh động (Scroll Bar, Back to top SVG, Counter Numbers, Scroll Reveal)
  initDynamicAnimations();
});
