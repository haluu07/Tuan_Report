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
      const isEn = (document.documentElement.getAttribute('lang') === 'en');
      const greeting = isEn ?
        'Welcome! I am the AI Technical Assistant of KT Xanh Thai Nguyen Co., Ltd.\nYou can tap any of the 4 quick prompt chips below (Geotech quote, Cost verification, 110kV Substation, Book survey) or type your inquiry for immediate technical guidance!' :
        'Kính chào Quý khách! Em là Trợ lý Kỹ thuật của Công ty TNHH KT Xanh Thái Nguyên.\nQuý khách có thể bấm nhanh vào 4 câu hỏi gợi ý bên dưới (Báo giá địa chất, Thẩm tra dự toán, Trạm 110kV, Đặt lịch khảo sát) hoặc nhập nội dung để em hỗ trợ ngay ạ!';
      appendMessage('bot', greeting);
    }, 500);
  }

  // Tri thức trả lời tự động cập nhật đúng chuẩn thông tin doanh nghiệp (Bilingual VIE / ENG)
  function getBotResponse(userMsg) {
    const msg = userMsg.toLowerCase().trim();
    const isEn = (document.documentElement.getAttribute('lang') === 'en');

    // 1. Hỏi về Báo giá khảo sát địa chất / Địa hình / Khoan
    if (msg.includes('báo giá') || msg.includes('đơn giá') || msg.includes('chi phí') || msg.includes('địa chất') || msg.includes('khoan') ||
        msg.includes('geotech') || msg.includes('soil') || msg.includes('quote') || msg.includes('quotation') || msg.includes('drilling')) {
      if (isEn) {
        return 'Geotechnical & Topographical Survey Quotation at KT Xanh complies with Circular 12/2021/TT-BXD:\n• Turnkey scope: Field exploratory boreholes, Standard Penetration Test (SPT), soil-rock physicochemical testing at LAS-XD accredited lab.\n• Official Geological Report sealed with Grade II/III capacity certification for direct foundation engineering and statutory construction permits.\n• Delivery timeline: 3 - 5 business days.\nPlease provide your plot location and approximate land area; KT Xanh engineers will deliver a detailed Outline & Quotation within 2 hours via Hotline: +84 988.123.456!';
      }
      return 'Báo giá khảo sát địa chất & địa hình tại KT Xanh căn cứ theo Định mức Thông tư 12/2021/TT-BXD:\n• Trọn gói bao gồm: Khoan khảo sát hiện trường, thí nghiệm SPT, thí nghiệm cơ lý mẫu đất đá tại phòng kiểm định hợp chuẩn LAS-XD.\n• Bàn giao Báo cáo kết quả địa chất có đóng dấu pháp nhân chứng chỉ năng lực hạng II/III, phục vụ trực tiếp thiết kế móng và xin phép xây dựng.\n• Tiến độ hoàn thành: Từ 3 - 5 ngày làm việc.\nQuý khách chỉ cần cung cấp vị trí mặt bằng và diện tích dự án, kỹ sư KT Xanh sẽ gửi Đề cương & Báo giá chi tiết trong 2 giờ qua Hotline: 0988.123.456!';
    }

    // 2. Hỏi về Quy trình thẩm tra dự toán / Thẩm tra dự án
    if (msg.includes('thẩm tra') || msg.includes('dự toán') || msg.includes('quản lý chi phí') ||
        msg.includes('estimate') || msg.includes('verification') || msg.includes('audit') || msg.includes('budget') || msg.includes('cost verify')) {
      if (isEn) {
        return 'Engineering Cost & Design Verification Process at KT Xanh adheres to Government Decrees 10/2021/ND-CP & 15/2021/ND-CP:\n1. Dossier Ingestion: Architectural & structural shop drawings, technical specifications, initial bill of quantities (BOQ).\n2. Quantity & Unit Price Audit: Cross-checked against Ministry of Construction rate norms and Provincial Department of Construction quarterly notices.\n3. Value Engineering: Structural optimization proposals to eliminate budget overruns (saving 5 - 15% capital outlay).\n4. Legally-stamped Independent Verification Report ready for investor statutory approval.\nTurnaround time: 3 - 7 business days. Hotline: +84 988.123.456.';
      }
      return 'Quy trình thẩm tra thiết kế & dự toán tại KT Xanh tuân thủ Nghị định 10/2021/NĐ-CP & Nghị định 15/2021/NĐ-CP:\n1. Tiếp nhận hồ sơ: Bản vẽ thiết kế, thuyết minh và bảng dự toán ban đầu.\n2. Rà soát khối lượng: Đối chiếu định mức, đơn giá nhân công - ca máy theo công bố giá của Sở Xây dựng.\n3. Thẩm định kết cấu & tối ưu: Đề xuất giải pháp kỹ thuật tối ưu chi phí, tránh lãng phí hoặc đội vốn (tiết kiệm từ 5 - 15% ngân sách).\n4. Phát hành Báo cáo kết quả thẩm tra độc lập có dấu pháp nhân, đủ điều kiện trình Chủ đầu tư phê duyệt khởi công.\nThời gian thực hiện nhanh chóng: 3 - 7 ngày làm việc. Hotline: 0988.123.456.';
    }

    // 3. Hỏi về Đường dây & Trạm biến áp 110kV, điện mặt trời
    if (msg.includes('110') || msg.includes('trạm biến áp') || msg.includes('đường dây') || msg.includes('mặt trời') || msg.includes('solar') || msg.includes('điện') ||
        msg.includes('substation') || msg.includes('transmission') || msg.includes('grid') || msg.includes('power')) {
      if (isEn) {
        return 'EPC & Engineering Capabilities for up to 110kV Substations, Transmission Lines & Industrial Solar:\n• Transmission route surveying, topographic grid mapping, power safety corridors.\n• Feasibility Studies (FS), detailed technical shop drawings for 110kV/35kV/22kV substations.\n• EVN Northern Power Corporation (EVNNPC) statutory grid connection agreement consulting.\n• Construction supervision of transformers, SCADA, numerical protection relays & energization commissioning.\n• Turnkey Rooftop Solar EPC with EVN Zero-Export relay integration & I-REC certification.\nContact Chief Electrical Engineer: +84 988.123.456 for an on-site survey!';
      }
      return 'Năng lực tư vấn Đường dây & Trạm biến áp đến 110kV và Điện mặt trời của KT Xanh:\n• Khảo sát hướng tuyến, đo đạc trắc địa mặt bằng trạm biến áp và hành lang an toàn lưới điện.\n• Lập Báo cáo nghiên cứu khả thi (FS), thiết kế bản vẽ thi công trạm 110kV/35kV/22kV.\n• Tư vấn thỏa thuận đấu nối chuyên sâu với Tổng công ty Điện lực miền Bắc (EVNNPC) và PC Thái Nguyên.\n• Giám sát thi công lắp đặt máy biến áp, hệ thống SCADA, rơ-le bảo vệ và thí nghiệm đóng điện bàn giao.\n• Tư vấn giải pháp Điện mặt trời áp mái công nghiệp (Rooftop Solar) giảm phát thải xanh cho nhà xưởng.\nLiên hệ Kỹ sư trưởng chuyên trách điện: 0988.123.456 để được khảo sát thực tế!';
    }

    // 4. Đặt lịch khảo sát
    if (msg.includes('đặt lịch') || msg.includes('khảo sát') || msg.includes('hẹn') || msg.includes('tư vấn') ||
        msg.includes('book') || msg.includes('appointment') || msg.includes('schedule') || msg.includes('visit')) {
      if (isEn) {
        return 'Yes, absolutely! KT Xanh will dispatch licensed engineers equipped with Electronic Total Stations and Dual-frequency RTK GNSS GPS directly to your project site:\n• You can scroll down to the "Book an On-Site Survey" form on this page to register.\n• Or call Chief Engineer Hotline: +84 988.123.456 to schedule a same-day survey appointment!\nOur engineering team will call you back within 15 minutes.';
      }
      return 'Dạ vâng! KT Xanh sẵn sàng cử kỹ sư mang máy toàn đạc điện tử và thiết bị GPS RTK đến khảo sát trực tiếp tại hiện trường công trình:\n• Quý khách có thể kéo xuống mục "Đăng Ký Khảo Sát & Tư Vấn" trên trang web để điền thông tin.\n• Hoặc bấm gọi ngay Hotline Kỹ sư trưởng: 0988.123.456 để xếp lịch hẹn khảo sát trong ngày!\nKỹ sư KT Xanh sẽ liên hệ lại xác nhận trong vòng 15 phút ạ.';
    }

    // 5. Hỏi về dịch vụ, lĩnh vực hoạt động
    if (msg.includes('dịch vụ') || msg.includes('lĩnh vực') || msg.includes('làm gì') || msg.includes('hoạt động') ||
        msg.includes('service') || msg.includes('capability') || msg.includes('scope')) {
      if (isEn) {
        return 'KT Xanh specializes in 11 core technical engineering & construction disciplines:\n1. Construction Supervision (Civil, Industrial, Infrastructure, Substations, Transportation)\n2. Telecommunications & Electrical Technical Design\n3. Topographical & Geotechnical Surveys (LAS-XD)\n4. Structural Quality Inspection & Load-bearing Audits\n5. Investment Cost Management & BOQ\n6. Investment Project Feasibility Formulation\n7. Procurement & Tendering Consultancy\n8. Architectural & Master Site Planning\n9. Technical Design & Cost Verification\n10. Billboard & Architectural Signage Modeling\n11. Up to 110kV Substations, Lines & Industrial Solar EPC.';
      }
      return 'KT Xanh Thái Nguyên chuyên sâu 11 lĩnh vực kỹ thuật xây dựng & hạ tầng:\n1. Giám sát công trình (dân dụng, công nghiệp, hạ tầng, ĐZ & TBA, giao thông)\n2. Thiết kế kỹ thuật & thông tin liên lạc\n3. Khảo sát địa hình – Khảo sát địa chất\n4. Kiểm định xây dựng\n5. Quản lý chi phí đầu tư\n6. Lập dự án đầu tư\n7. Tư vấn đấu thầu, HSMT\n8. Thiết kế kiến trúc, tổng mặt bằng\n9. Thẩm tra dự án, dự toán\n10. Tư vấn tạo mẫu biển quảng cáo\n11. Khảo sát, thiết kế, giám sát ĐZ & TBA đến 110kV; Điện mặt trời.';
    }

    // 6. Hỏi về địa chỉ, trụ sở, văn phòng
    if (msg.includes('địa chỉ') || msg.includes('ở đâu') || msg.includes('văn phòng') || msg.includes('trụ sở') ||
        msg.includes('address') || msg.includes('office') || msg.includes('headquarter') || msg.includes('location')) {
      if (isEn) {
        return 'Head Office: No. 13, Group 90, Phan Dinh Phung Ward, Thai Nguyen City, Vietnam.\nWe also maintain a Northern Regional Branch in Cao Bang Province to serve northeastern infrastructure projects.';
      }
      return 'Trụ sở chính: Số 13, Tổ 90, Phường Phan Đình Phùng, TP. Thái Nguyên, Tỉnh Thái Nguyên.\nĐơn vị còn có Chi nhánh tại Tỉnh Cao Bằng phục vụ các dự án hạ tầng khu vực Đông Bắc.';
    }

    // 7. Hỏi về pháp lý, mã số thuế, giám đốc, năm thành lập
    if (msg.includes('pháp lý') || msg.includes('mã số thuế') || msg.includes('mst') || msg.includes('giám đốc') || msg.includes('thành lập') ||
        msg.includes('tax') || msg.includes('legal') || msg.includes('director') || msg.includes('founded') || msg.includes('license')) {
      if (isEn) {
        return 'Corporate & Legal Credentials of KT Xanh:\n• International Name: KT GREEN CO.,LTD\n• Tax Code: 4600361446\n• Established Date: August 19, 2004 (Over 20 years of experience)\n• Legal Representative / Director: Mr. Tran Van Vinh\n• Corporate Motto: DEDICATION - PROFESSIONALISM - SUSTAINABILITY.';
      }
      return 'Thông tin pháp lý Công ty TNHH KT Xanh:\n• Tên quốc tế: KT GREEN CO.,LTD\n• Mã số thuế: 4600361446\n• Ngày hoạt động: 19/08/2004 (Hơn 20 năm kinh nghiệm)\n• Người đại diện / Giám đốc: Ông Trần Văn Vinh\n• Khẩu hiệu: TẬN TÂM - CHUYÊN NGHIỆP - BỀN VỮNG.';
    }

    // 8. Hỏi về giờ làm việc, hotline
    if (msg.includes('giờ') || msg.includes('thời gian') || msg.includes('hotline') || msg.includes('liên hệ') || msg.includes('sđt') ||
        msg.includes('hour') || msg.includes('contact') || msg.includes('phone') || msg.includes('email')) {
      if (isEn) {
        return 'Contact Information & Office Hours:\n• Working Hours: 08:00 - 17:30 (Monday through Saturday)\n• Chief Engineer Hotline: +84 988.123.456\n• Official Email: lienhe@ktxanh.vn\nOur engineers are always ready to consult directly on site!';
      }
      return 'Thông tin liên hệ & Giờ làm việc:\n• Giờ làm việc: 08:00 - 17:30 (Thứ 2 đến Thứ 7)\n• Hotline kỹ sư trưởng: 0988.123.456\n• Email: lienhe@ktxanh.vn\nKỹ sư luôn sẵn sàng tư vấn trực tiếp tận nơi!';
    }

    if (isEn) {
      return 'Thank you for reaching out! For tailor-made technical advice for your project scale, please leave your contact info or call Hotline +84 988.123.456. KT Xanh Thai Nguyen is at your service!';
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
      const isEn = (document.documentElement.getAttribute('lang') === 'en');
      const question = (isEn && chip.getAttribute('data-question-en')) ? chip.getAttribute('data-question-en') : chip.getAttribute('data-question');
      if (question) handleSendMessage(question);
    });
  });
}
