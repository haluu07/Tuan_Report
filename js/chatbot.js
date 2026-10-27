/**
 * CÔNG TY TNHH KT XANH THÁI NGUYÊN
 * Module: Trợ lý Chatbot tự động (Floating Chatbot Controller)
 */

import { escapeHTML } from './utils.js';

export function initChatbotWidget() {
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
        chatInput?.focus();
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

    chatMessages?.appendChild(bubble);
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
    chatMessages?.appendChild(typingBubble);
    scrollChatToBottom();
  }

  function removeTypingIndicator() {
    const typing = document.getElementById('botTyping');
    if (typing) typing.remove();
  }

  function scrollChatToBottom() {
    if (chatMessages) {
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  }

  function sendBotGreeting() {
    showTypingIndicator();
    setTimeout(() => {
      removeTypingIndicator();
      appendMessage('bot', 'Kính chào Quý khách! Em là Trợ lý Kỹ thuật của Công ty TNHH KT Xanh Thái Nguyên.\nQuý khách đang quan tâm đến lĩnh vực khảo sát, thiết kế, giám sát công trình hay đường dây trạm biến áp đến 110kV và điện mặt trời ạ?');
    }, 600);
  }

  // Tri thức trả lời tự động cập nhật đúng chuẩn thông tin doanh nghiệp
  function getBotResponse(userMsg) {
    const msg = userMsg.toLowerCase().trim();

    // 1. Hỏi về dịch vụ, lĩnh vực hoạt động
    if (msg.includes('dịch vụ') || msg.includes('lĩnh vực') || msg.includes('làm gì') || msg.includes('hoạt động')) {
      return 'KT Xanh Thái Nguyên chuyên sâu 11 lĩnh vực kỹ thuật xây dựng & hạ tầng:\n1. Giám sát công trình (dân dụng, công nghiệp, hạ tầng, ĐZ & TBA, giao thông)\n2. Thiết kế kỹ thuật & thông tin liên lạc\n3. Khảo sát địa hình – Khảo sát địa chất\n4. Kiểm định xây dựng\n5. Quản lý chi phí đầu tư\n6. Lập dự án đầu tư\n7. Tư vấn đấu thầu, HSMT\n8. Thiết kế kiến trúc, tổng mặt bằng\n9. Thẩm tra dự án, dự toán\n10. Tư vấn tạo mẫu biển quảng cáo\n11. Khảo sát, thiết kế, giám sát ĐZ & TBA đến 110kV; Điện mặt trời.';
    }

    // 2. Hỏi về đường dây và trạm biến áp 110kV, điện mặt trời
    if (msg.includes('110') || msg.includes('trạm biến áp') || msg.includes('đường dây') || msg.includes('mặt trời') || msg.includes('solar') || msg.includes('điện')) {
      return 'KT Xanh có năng lực chuyên môn cao trong khảo sát, thiết kế, giám sát thi công công trình đường dây và trạm biến áp cấp điện áp đến 110 kV, đồng thời triển khai điện năng lượng mặt trời công nghiệp áp mái đạt chuẩn kỹ thuật EVN và an toàn lưới điện.';
    }

    // 3. Hỏi về khảo sát địa hình, địa chất, kiểm định
    if (msg.includes('địa hình') || msg.includes('địa chất') || msg.includes('kiểm định') || msg.includes('khoan') || msg.includes('đo')) {
      return 'Đội ngũ kỹ sư KT Xanh sử dụng thiết bị toàn đạc, GPS RTK hiện đại và phòng thí nghiệm hợp chuẩn LAS-XD, chuyên đo vẽ địa hình 1/500, khoan khảo sát địa chất công trình và kiểm định an toàn chịu lực công trình.';
    }

    // 4. Hỏi về địa chỉ, trụ sở, văn phòng
    if (msg.includes('địa chỉ') || msg.includes('ở đâu') || msg.includes('văn phòng') || msg.includes('trụ sở')) {
      return 'Trụ sở chính: Số 13, Tổ 90, Phường Phan Đình Phùng, TP. Thái Nguyên, Tỉnh Thái Nguyên.\nĐơn vị còn có Chi nhánh tại Tỉnh Cao Bằng phục vụ các dự án hạ tầng khu vực Đông Bắc.';
    }

    // 5. Hỏi về pháp lý, mã số thuế, giám đốc, năm thành lập
    if (msg.includes('pháp lý') || msg.includes('mã số thuế') || msg.includes('mst') || msg.includes('giám đốc') || msg.includes('thành lập')) {
      return 'Thông tin pháp lý Công ty TNHH KT Xanh:\n• Tên quốc tế: KT GREEN CO.,LTD\n• Mã số thuế: 4600361446\n• Ngày hoạt động: 19/08/2004 (Hơn 20 năm kinh nghiệm)\n• Người đại diện / Giám đốc: Ông Trần Văn Vinh\n• Khẩu hiệu: TẬN TÂM - CHUYÊN NGHIỆP - BỀN VỮNG.';
    }

    // 6. Hỏi về giờ làm việc, hotline
    if (msg.includes('giờ') || msg.includes('thời gian') || msg.includes('hotline') || msg.includes('liên hệ') || msg.includes('sđt')) {
      return 'Thông tin liên hệ & Giờ làm việc:\n• Giờ làm việc: 08:00 - 17:30 (Thứ 2 đến Thứ 7)\n• Hotline kỹ sư trưởng: 0988.123.456\n• Email: lienhe@ktxanh.vn\nKỹ sư luôn sẵn sàng tư vấn trực tiếp tận nơi!';
    }

    // 7. Đặt lịch khảo sát
    if (msg.includes('đặt lịch') || msg.includes('khảo sát') || msg.includes('hẹn') || msg.includes('tư vấn')) {
      return 'Dạ vâng! Quý khách có thể kéo xuống mục "Đặt Lịch Khảo Sát" trên website để điền phiếu thông tin công trình, hoặc gọi trực tiếp Hotline 0988.123.456 để kỹ sư KT Xanh xếp lịch khảo sát hiện trường sớm nhất!';
    }

    return 'Cảm ơn Quý khách! Để nhận được tư vấn kỹ thuật chính xác nhất theo quy mô công trình, Quý khách vui lòng để lại số điện thoại hoặc gọi ngay Hotline 0988.123.456. KT Xanh Thái Nguyên luôn sẵn sàng phục vụ!';
  }

  function handleSendMessage(text) {
    const userText = text.trim();
    if (!userText) return;

    appendMessage('user', userText);
    if (chatInput) chatInput.value = '';

    showTypingIndicator();

    setTimeout(() => {
      removeTypingIndicator();
      const botReply = getBotResponse(userText);
      appendMessage('bot', botReply);
    }, 750);
  }

  chatForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    if (chatInput) handleSendMessage(chatInput.value);
  });

  quickChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const question = chip.getAttribute('data-question');
      if (question) handleSendMessage(question);
    });
  });
}
