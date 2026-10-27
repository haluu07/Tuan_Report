/**
 * CÔNG TY TNHH KT XANH THÁI NGUYÊN
 * Module: Tiện ích dùng chung (Utilities)
 */

export function escapeHTML(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
