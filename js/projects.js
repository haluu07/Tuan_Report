/**
 * ==========================================================================
 * CÔNG TY TNHH KT XANH THÁI NGUYÊN - MODULE DỰ ÁN TIÊU BIỂU (PROJECTS SHOWCASE)
 * Xử lý lọc danh mục dự án, hiển thị Lightbox Modal chi tiết hồ sơ kỹ thuật,
 * điều hướng Prev/Next và liên kết tự động với Form Đặt Lịch Khảo Sát
 * ==========================================================================
 */

(function () {
  'use strict';

  // Cơ sở dữ liệu thông tin chi tiết các công trình tiêu biểu
  const PROJECTS_DATABASE = [
    {
      id: 'p1',
      title: 'Khảo sát địa hình, địa chất mở rộng KCN Điềm Thụy',
      category: 'dia-chat',
      categoryName: 'Khảo sát Địa chất - Địa hình',
      location: 'KCN Điềm Thụy, Huyện Phú Bình, Tỉnh Thái Nguyên',
      scale: '35.000 m² quy hoạch mặt bằng nhà xưởng cao cấp',
      client: 'Ban Quản Lý Các KCN Thái Nguyên & Doanh nghiệp Hạ Tầng',
      standards: 'TCVN 9362:2012, TCVN 9437:2012, TCVN 4419:1987',
      equipment: 'Máy khoan XY-1, Máy toàn đạc điện tử Leica Flexline TS06, Thí nghiệm cơ lý đất phòng LAS-XD',
      time: 'Tháng 03/2024 - Nghiệm thu hoàn tất',
      result: 'Xác lập 24 hố khoan sâu 25–40m, cung cấp đầy đủ thông số địa tầng, mực nước ngầm và chỉ tiêu cơ lý phục vụ móng cọc.',
      description: 'Dự án thực hiện khảo sát địa chất công trình phục vụ giai đoạn mở rộng khu công nghiệp Điềm Thụy. Đội ngũ kỹ sư KT Xanh đã tiến hành công tác khoan lấy mẫu nguyên dạng, thí nghiệm SPT hiện trường, đo vẽ bình đồ tỷ lệ 1/500 đảm bảo độ tin cậy tuyệt đối cho kết cấu móng nhà máy công nghiệp nặng.',
      chips: ['TCVN 9362:2012', 'Khoan 24 hố sâu', 'Thí nghiệm SPT', 'Độ chính xác cấp I', 'LAS-XD Độc lập'],
      serviceKey: 'dia-chat',
      image: 'assets/project-p1-diachat.jpg'
    },
    {
      id: 'p2',
      title: 'Tư vấn thiết kế & giám sát Trạm biến áp 110kV KCN Sông Công II',
      category: 'dien-110kv',
      categoryName: 'Trạm Biến Áp & Điện 110kV',
      location: 'KCN Sông Công II, TP. Sông Công, Tỉnh Thái Nguyên',
      scale: 'Trạm 110/22kV - Công suất 2x63 MVA, Đường dây 110kV dài 3.8 km',
      client: 'Chủ đầu tư Hạ tầng KCN & Công ty Điện lực Thái Nguyên (EVN)',
      standards: 'QCVN 02:2022/BCT, Quy chuẩn kỹ thuật điện lưới quốc gia, IEC 60076',
      equipment: 'Máy biến áp lực 63MVA ABB/Thibidi, Máy cắt khí SF6 110kV, Hệ thống SCADA giám sát từ xa',
      time: 'Năm 2023 - Đóng điện vận hành thương mại an toàn',
      result: 'Cung cấp nguồn điện ổn định, chất lượng cao cho hơn 20 nhà máy cơ khí, điện tử phụ trợ trong toàn KCN.',
      description: 'Công ty TNHH KT Xanh phụ trách lập hồ sơ thiết kế bản vẽ thi công, thẩm định phương án đấu nối điện lưới quốc gia và trực tiếp cử kỹ sư giám sát lắp đặt máy biến áp lực 110kV. Toàn bộ hệ thống bảo vệ rơ-le số và đóng cắt tự động SCADA được nghiệm thu khắt khe theo tiêu chuẩn EVN.',
      chips: ['QCVN 02:2022/BCT', 'Máy biến áp 63MVA', 'Hệ thống SCADA', 'Đóng điện an toàn', 'Tiêu chuẩn EVN'],
      serviceKey: 'dien-110kv',
      image: 'assets/project-p2-tramdien.jpg'
    },
    {
      id: 'p3',
      title: 'Thẩm tra dự toán & hồ sơ kỹ thuật nhà xưởng phụ trợ FDI Samsung Phổ Yên',
      category: 'giam-sat',
      categoryName: 'Thẩm Tra & Giám Sát KCN',
      location: 'KCN Yên Bình, Phường Đồng Tiến, TP. Phổ Yên, Thái Nguyên',
      scale: 'Tổ hợp 3 nhà xưởng kết cấu thép tổng diện tích sàn 28.000 m²',
      client: 'Tổng thầu Xây dựng & Doanh nghiệp FDI Hàn Quốc',
      standards: 'QCVN 01:2021/BXD, QCVN 06:2022/BXD (PCCC), Định mức đơn giá BXD mới nhất',
      equipment: 'Phần mềm mô phỏng kết cấu SAP2000, ETABS, Dự toán G8 chuyên sâu',
      time: 'Tháng 08/2024 - Hoàn thành bàn giao hồ sơ thẩm tra',
      result: 'Phát hiện và hiệu chỉnh 14 điểm sai lệch khối lượng, giúp chủ đầu tư tiết giảm 6.8% tổng mức đầu tư dự kiến.',
      description: 'Công tác thẩm tra bao gồm kiểm tra tính chuẩn xác của khối lượng kết cấu thép vượt nhịp, đánh giá khả năng chịu tải trọng động của cần trục 20 tấn, đối chiếu định mức vật tư xây dựng và nghiệm thu hồ sơ an toàn PCCC, đảm bảo công trình thông qua kiểm tra của Sở Xây Dựng Thái Nguyên ngay từ lần nộp đầu tiên.',
      chips: ['QCVN 01:2021/BXD', 'Tiết kiệm 6.8% chi phí', 'Khung thép vượt nhịp', 'An toàn PCCC', 'SAP2000/ETABS'],
      serviceKey: 'tham-tra',
      image: 'assets/project-p3-thamtrapk.jpg'
    },
    {
      id: 'p4',
      title: 'Khảo sát & Lắp đặt hệ thống Điện mặt trời áp mái 1.2MWp Nhà máy cơ khí',
      category: 'dien-110kv',
      categoryName: 'Năng Lượng Tái Tạo & Điện Áp Mái',
      location: 'Cụm Công nghiệp Điềm Thụy, Thái Nguyên',
      scale: 'Công suất lắp đặt 1.2 MWp với 2.180 tấm pin mặt trời hiệu suất cao',
      client: 'Công ty Cổ phần Cơ khí Chế tạo Máy Thái Nguyên',
      standards: 'Quy chuẩn đấu nối điện áp mái EVN, Tiêu chuẩn IEC 61215 / IEC 61730',
      equipment: 'Pin Silicon Mono Half-cell 550W, Inverter chuỗi Huawei Solar 100KTL, Tủ đóng cắt hạ thế AC',
      time: 'Tháng 11/2024 - Hòa lưới điện tự dùng',
      result: 'Tạo ra 1.450 MWh điện sạch mỗi năm, giảm phát thải 1.160 tấn CO₂/năm, đạt chứng chỉ năng lượng tái tạo I-REC.',
      description: 'KT Xanh thực hiện kiểm định tải trọng an toàn tĩnh và động của mái xưởng tôn, tư vấn thiết kế góc nghiêng tối ưu quang năng và trực tiếp thi công giàn đỡ nhôm hợp kim Anodized chống ăn mòn. Dự án trang bị rơ-le chống phát ngược Zero-Export đảm bảo tuân thủ nghiêm chỉnh chính sách phát triển năng lượng xanh.',
      chips: ['1.2 MWp Điện sạch', 'Zero-Export EVN', 'Chứng chỉ I-REC', 'Giảm 1.160 tấn CO₂', 'Inverter Huawei'],
      serviceKey: 'dien-mat-troi',
      image: 'assets/project-p4-solar.jpg'
    },
    {
      id: 'p5',
      title: 'Khảo sát trắc địa địa hình & Bay chụp UAV tuyến giao thông liên KCN Sông Công - Nam Tiến',
      category: 'dia-chat',
      categoryName: 'Trắc Địa & Bản Đồ Số Hóa UAV',
      location: 'Tuyến kết nối KCN Sông Công đến Nam Tiến, Thái Nguyên',
      scale: 'Tuyến giao thông vận tải hàng hóa dài 8.5 km, hành lang đo vẽ 60m',
      client: 'Ban Quản lý Dự án Đầu tư Xây dựng Công trình Giao thông',
      standards: 'QCVN 11:2020/BTNMT, Tiêu chuẩn khảo sát đường ô tô TCVN 9832:2013',
      equipment: 'Máy bay không người lái DJI Matrice 300 RTK gắn Lidar Zenmuse L1, Trạm CORS GNSS 2 tần số',
      time: 'Năm 2023 - Nghiệm thu bàn giao mô hình 3D',
      result: 'Xây dựng mô hình số độ cao DEM, mô hình bề mặt DSM sai số mặt phẳng ≤ 2cm, rút ngắn 65% thời gian so với phương pháp đo trắc địa truyền thống.',
      description: 'Ứng dụng công nghệ bay quét Lidar viễn thám kết hợp trắc địa điểm khống chế mặt đất GCP giúp tái lập không gian 3D địa hình tuyến đường với độ phân giải siêu nét. Cung cấp dữ liệu đám mây điểm (Point Cloud) chính xác phục vụ tính toán khối lượng đào đắp san nền tự động trên Civil 3D.',
      chips: ['Bay chụp UAV Lidar', 'Sai số ≤ 2cm', 'Mô hình số 3D DEM', 'Rút ngắn 65% thời gian', 'QCVN 11:2020'],
      serviceKey: 'trac-dia',
      image: 'assets/project-p5-uavdrone.jpg'
    },
    {
      id: 'p6',
      title: 'Giám sát thi công toàn diện Hạ tầng kỹ thuật & Trạm xử lý nước thải KCN Sông Công I',
      category: 'giam-sat',
      categoryName: 'Giám Sát & Quản Lý Hạ Tầng',
      location: 'KCN Sông Công I, Phường Bách Quang, TP. Sông Công, Thái Nguyên',
      scale: 'Trạm XLNT công suất 5.000 m³/ngày đêm và mạng lưới cống ngầm bê tông D1200',
      client: 'Công ty Cổ phần Đầu tư Phát triển Hạ tầng KCN',
      standards: 'TCVN 7957:2008, Quy chuẩn nước thải công nghiệp QCVN 40:2011/BTNMT (Cột A)',
      equipment: 'Máy siêu âm mối hàn đường ống, Thiết bị lấy mẫu tự động quan trắc nước thải online',
      time: 'Năm 2023 - 2024 - Nghiệm thu đưa vào vận hành',
      result: 'Đảm bảo 100% các chỉ tiêu bê tông chống thấm B8, công nghệ sinh học hiếu khí AO vận hành chuẩn mực, không rò rỉ.',
      description: 'Kỹ sư giám sát trưởng của KT Xanh túc trực thường xuyên tại công trường để kiểm soát cao độ đặt cống, độ chặt lu lèn nền đất đắp K98, giám sát thi công chống thấm composite bể chứa hóa chất và nghiệm thu hệ thống bơm định lượng tự động, giúp chủ đầu tư bàn giao công trình đạt chuẩn bảo vệ môi trường của Bộ Tài nguyên & Môi trường.',
      chips: ['Trạm XLNT 5.000 m³', 'QCVN 40 Cột A', 'Độ chặt K98', 'Giám sát 24/7', 'Bê tông chống thấm B8'],
      serviceKey: 'giam-sat-xay-dung',
      image: 'assets/project-p6-hatang.jpg'
    }
  ];

  let currentProjectIndex = 0;

  /**
   * Khởi tạo module Dự án tiêu biểu
   */
  function initProjectsShowcase() {
    const projectsSection = document.getElementById('projects');
    if (!projectsSection) return;

    setupCategoryFilter();
    setupLightboxModal();
    setupProjectCardClick();
    setupViewModeToggle();
    initLeafletGISMap();
  }

  /**
   * 1. Xử lý chuyển đổi chế độ xem: Dạng Card vs Dạng Bản Đồ Số GPS
   */
  function setupViewModeToggle() {
    const btnViewGrid = document.getElementById('btnViewGrid');
    const btnViewMap = document.getElementById('btnViewMap');
    const projectsGrid = document.getElementById('projectsGrid');
    const projectFilterTabs = document.getElementById('projectFilterTabs');
    const projectsMapView = document.getElementById('projectsMapView');

    if (!btnViewGrid || !btnViewMap || !projectsGrid || !projectsMapView) return;

    btnViewGrid.addEventListener('click', () => {
      btnViewGrid.classList.add('active');
      btnViewGrid.setAttribute('aria-selected', 'true');
      btnViewMap.classList.remove('active');
      btnViewMap.setAttribute('aria-selected', 'false');

      projectsGrid.style.display = 'grid';
      if (projectFilterTabs) projectFilterTabs.style.display = 'flex';
      projectsMapView.classList.add('is-hidden');
      projectsMapView.setAttribute('aria-hidden', 'true');
    });

    btnViewMap.addEventListener('click', () => {
      btnViewMap.classList.add('active');
      btnViewMap.setAttribute('aria-selected', 'true');
      btnViewGrid.classList.remove('active');
      btnViewGrid.setAttribute('aria-selected', 'false');

      projectsGrid.style.display = 'none';
      if (projectFilterTabs) projectFilterTabs.style.display = 'none';
      projectsMapView.classList.remove('is-hidden');
      projectsMapView.setAttribute('aria-hidden', 'false');

      // Kích hoạt tính toán lại kích thước Leaflet container khi hiển thị
      setTimeout(() => {
        if (leafletMapInstance) {
          leafletMapInstance.invalidateSize();
          focusGISLocation('pin-hq', false);
        }
      }, 180);
    });
  }

  /**
   * Cơ sở dữ liệu định vị GPS chính xác các điểm dự án & chi nhánh
   */
  const GIS_LOCATIONS_DATABASE = {
    'pin-hq': {
      id: 'pin-hq',
      name: 'Công Ty TNHH KT Xanh Thái Nguyên',
      tag: 'Trụ Sở Điều Hành',
      category: 'hq',
      coords: [21.5928, 105.8442],
      address: 'Số 13, Tổ 90, P. Phan Đình Phùng, TP. Thái Nguyên',
      scale: 'Văn phòng điều hành & Trung tâm tư vấn kỹ thuật',
      standards: 'ISO 9001:2015 • Bộ Xây Dựng',
      status: 'Hoạt động liên tục từ năm 2004',
      badge: 'Trực Tuyến 24/7',
      image: 'assets/banner-kt-xanh.jpg',
      projectId: null,
      iconSvg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>'
    },
    'pin-p2': {
      id: 'pin-p2',
      name: 'Trạm Biến Áp 110kV KCN Sông Công II',
      tag: 'Trạm Biến Áp 110kV',
      category: 'dien',
      coords: [21.4988, 105.8315],
      address: 'KCN Sông Công II, TP. Sông Công, Thái Nguyên',
      scale: '2x63 MVA • ĐZ 110kV dài 3.8 km',
      standards: 'QCVN 02:2022/BCT • SCADA EVN',
      status: 'Đóng điện vận hành an toàn',
      badge: 'Đóng Điện 110kV',
      image: 'assets/project-p2-tramdien.jpg',
      projectId: 'p2',
      iconSvg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>'
    },
    'pin-p1': {
      id: 'pin-p1',
      name: 'Khảo Sát Địa Chất KCN Điềm Thụy',
      tag: 'Khảo Sát Địa Chất',
      category: 'diachat',
      coords: [21.4647, 105.9080],
      address: 'KCN Điềm Thụy, H. Phú Bình, Thái Nguyên',
      scale: '35.000 m² quy hoạch • 24 hố khoan sâu 40m',
      standards: 'TCVN 9362:2012 • SPT LAS-XD',
      status: 'Nghiệm thu hoàn tất 100%',
      badge: 'Nghiệm Thu 100%',
      image: 'assets/project-p1-diachat.jpg',
      projectId: 'p1',
      iconSvg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M2 20h20"></path><path d="m5 20 7-14 7 14"></path></svg>'
    },
    'pin-p4': {
      id: 'pin-p4',
      name: 'Điện Mặt Trời Áp Mái 1.2MWp',
      tag: 'Năng Lượng Xanh',
      category: 'solar',
      coords: [21.4580, 105.9010],
      address: 'Cụm CN Điềm Thụy, H. Phú Bình, Thái Nguyên',
      scale: '1.2 MWp • 2.180 tấm pin Half-cell 550W',
      standards: 'IEC 61215 • Rơ-le Zero-Export EVN',
      status: 'Chứng chỉ năng lượng xanh I-REC',
      badge: 'Chứng Chỉ I-REC',
      image: 'assets/project-p4-solar.jpg',
      projectId: 'p4',
      iconSvg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line></svg>'
    },
    'pin-p3': {
      id: 'pin-p3',
      name: 'Nhà Xưởng Phụ Trợ FDI Samsung KCN Yên Bình',
      tag: 'Thẩm Tra Dự Toán',
      category: 'thamtra',
      coords: [21.4285, 105.8560],
      address: 'KCN Yên Bình, TP. Phổ Yên, Thái Nguyên',
      scale: '28.000 m² sàn kết cấu thép vượt nhịp',
      standards: 'QCVN 01:2021/BXD • PCCC 06:2022',
      status: 'Tiết giảm 6.8% tổng mức đầu tư',
      badge: 'Tiết Giảm 6.8%',
      image: 'assets/project-p3-thamtrapk.jpg',
      projectId: 'p3',
      iconSvg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>'
    },
    'pin-p5': {
      id: 'pin-p5',
      name: 'Bay Chụp UAV Tuyến Sông Công - Nam Tiến',
      tag: 'Trắc Địa UAV 3D',
      category: 'uav',
      coords: [21.4720, 105.8280],
      address: 'Tuyến KCN Sông Công đến Nam Tiến, Thái Nguyên',
      scale: 'Tuyến 8.5 km • Lidar 3D Zenmuse DJI Matrice',
      standards: 'QCVN 11:2020/BTNMT • Sai số ≤ 2cm',
      status: 'Bàn giao mô hình 3D DEM chuẩn xác',
      badge: 'Mô Hình 3D Lidar',
      image: 'assets/project-p5-uavdrone.jpg',
      projectId: 'p5',
      iconSvg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line></svg>'
    },
    'pin-p6': {
      id: 'pin-p6',
      name: 'Hạ Tầng Kỹ Thuật & Trạm XLNT KCN Sông Công I',
      tag: 'Giám Sát Hạ Tầng',
      category: 'hatang',
      coords: [21.5050, 105.8150],
      address: 'KCN Sông Công I, TP. Sông Công, Thái Nguyên',
      scale: '5.000 m³/ngày đêm • Cống ngầm D1200',
      standards: 'QCVN 40:2011/BTNMT • Bê tông B8',
      status: 'Chứng chỉ nghiệm thu hoàn thành BXD',
      badge: 'Chuẩn QCVN 40',
      image: 'assets/project-p6-hatang.jpg',
      projectId: 'p6',
      iconSvg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>'
    },
    'pin-branch': {
      id: 'pin-branch',
      name: 'Chi Nhánh Công Ty TNHH KT Xanh Cao Bằng',
      tag: 'Chi Nhánh Phía Bắc',
      category: 'branch',
      coords: [22.6667, 106.2625],
      address: 'Tỉnh Cao Bằng • Văn phòng đại diện',
      scale: 'Khảo sát địa chất & tư vấn dự án miền núi',
      standards: 'TCVN • Tiêu chuẩn Xây Dựng Việt Nam',
      status: 'Văn phòng đại diện thường trực',
      badge: 'Thường Trực 24/7',
      image: 'assets/banner-kt-xanh.jpg',
      projectId: null,
      iconSvg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>'
    }
  };

  let leafletMapInstance = null;
  let streetTileLayer = null;
  let satelliteTileLayer = null;
  let activeTileLayerType = 'street';
  const markersRegistry = {};

  /**
   * CẤU HÌNH API KEY VÀ NGUỒN TILES BẢN ĐỒ GIS:
   * - Carto API Key: Có thể đặt qua window.CARTO_API_KEY hoặc lưu trong localStorage 'KT_CARTO_API_KEY'
   * - Mặc định khi chưa có API Key: Bản đồ tự động dùng nguồn Google Maps (Đường bộ & Vệ tinh Hybrid tiếng Việt)
   *   cực kỳ sắc nét, chính xác các tuyến đường Thái Nguyên và HOÀN TOÀN KHÔNG BỊ WATERMARK "API KEY REQUIRED".
   */
  function getMapApiKey() {
    if (typeof window === 'undefined') return '';
    return window.CARTO_API_KEY || localStorage.getItem('KT_CARTO_API_KEY') || '';
  }

  // Hàm toàn cục để lập trình viên hoặc người dùng có thể đổi Key bất cứ lúc nào
  if (typeof window !== 'undefined') {
    window.setMapApiKey = function(apiKey) {
      if (apiKey === undefined || apiKey === null) return;
      const cleanKey = apiKey.trim();
      if (cleanKey) {
        localStorage.setItem('KT_CARTO_API_KEY', cleanKey);
        alert('Đã cập nhật CARTO API Key thành công! Bản đồ đang tải lại...');
      } else {
        localStorage.removeItem('KT_CARTO_API_KEY');
        alert('Đã xóa API Key! Bản đồ sẽ dùng nguồn Google Maps tiếng Việt sắc nét không watermark.');
      }
      window.location.reload();
    };
  }

  /**
   * 2. Khởi tạo Bản Đồ Số GIS chuyên nghiệp sử dụng Leaflet
   */
  function initLeafletGISMap() {
    const mapContainer = document.getElementById('realLeafletMap');
    if (!mapContainer) return;

    if (typeof L === 'undefined') {
      console.warn('[KT Xanh GIS] Leaflet library chưa được nạp!');
      return;
    }

    if (leafletMapInstance) return; // Đã khởi tạo

    // Trung tâm bản đồ bao quát toàn bộ tỉnh Thái Nguyên
    const initialCenter = [21.52, 105.86];
    const initialZoom = 11;

    leafletMapInstance = L.map('realLeafletMap', {
      center: initialCenter,
      zoom: initialZoom,
      zoomControl: true,
      scrollWheelZoom: true
    });

    const activeApiKey = getMapApiKey();

    // 2.1 Layer Giao thông: Nếu có CARTO API Key thì dùng CARTO Voyager bản quyền,
    // ngược lại tự động dùng Google Maps Road sạch đẹp 100% không watermark
    if (activeApiKey) {
      streetTileLayer = L.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png?api_key=${encodeURIComponent(activeApiKey)}`, {
        maxZoom: 19,
        subdomains: 'abcd',
        attribution: '&copy; <a href="https://carto.com/">CARTO</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      });
    } else {
      streetTileLayer = L.tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
        attribution: '&copy; Google Maps'
      });
    }

    // 2.2 Layer Vệ tinh thực tế kết hợp nhãn đường & địa danh tiếng Việt (Google Hybrid)
    satelliteTileLayer = L.tileLayer('https://{s}.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
      attribution: '&copy; Google Maps Vệ Tinh (Hybrid)'
    });

    // Mặc định nạp layer Giao thông
    streetTileLayer.addTo(leafletMapInstance);

    // 2.3 Tạo các Marker tùy biến với Radar Pulse & Icon chuyên dụng
    Object.keys(GIS_LOCATIONS_DATABASE).forEach(pinId => {
      const loc = GIS_LOCATIONS_DATABASE[pinId];

      const markerHtml = `
        <div class="custom-leaflet-marker-wrap" data-pin-id="${pinId}">
          <span class="gis-marker-pulse pulse-${loc.category}"></span>
          <div class="gis-marker-pin marker-${loc.category}">
            ${loc.iconSvg}
          </div>
        </div>
      `;

      const customDivIcon = L.divIcon({
        className: 'leaflet-custom-marker-container',
        html: markerHtml,
        iconSize: [44, 44],
        iconAnchor: [22, 22],
        popupAnchor: [0, -20]
      });

      const popupHtml = `
        <div class="gis-popup-card">
          <div class="gis-popup-thumb-wrap">
            <img src="${loc.image}" alt="${loc.name}" class="gis-popup-img">
            <span class="gis-popup-tag">${loc.tag}</span>
            <span class="gis-popup-badge">${loc.badge}</span>
          </div>
          <div class="gis-popup-body">
            <h4 class="gis-popup-title">${loc.name}</h4>
            <div class="gis-popup-location">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <span>${loc.address}</span>
            </div>
            <div class="gis-popup-specs">
              <div class="gis-spec-row">
                <span class="gis-spec-k">Quy mô:</span>
                <span class="gis-spec-v">${loc.scale}</span>
              </div>
              <div class="gis-spec-row">
                <span class="gis-spec-k">Tiêu chuẩn:</span>
                <span class="gis-spec-v">${loc.standards}</span>
              </div>
              <div class="gis-spec-row">
                <span class="gis-spec-k">Trạng thái:</span>
                <span class="gis-spec-v" style="color: #22c55e;">${loc.status}</span>
              </div>
            </div>
            ${loc.projectId ? `
              <button type="button" class="gis-popup-btn" data-action="view-project" data-project-id="${loc.projectId}">
                <span>Xem Hồ Sơ & Bản Vẽ Chi Tiết</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
            ` : `
              <button type="button" class="gis-popup-btn" data-action="contact">
                <span>Liên Hệ Trực Tiếp Đơn Vị</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
            `}
          </div>
        </div>
      `;

      const marker = L.marker(loc.coords, { icon: customDivIcon, title: loc.name });
      marker.bindPopup(popupHtml, { maxWidth: 320, minWidth: 290, className: 'gis-custom-popup' });

      marker.on('click', () => {
        highlightSidebarItem(pinId);
        updateCoordinateDisplay(loc.coords[0], loc.coords[1]);
      });

      marker.addTo(leafletMapInstance);
      markersRegistry[pinId] = marker;
    });

    // 2.4 Cập nhật tọa độ Live khi di chuột trên bản đồ
    leafletMapInstance.on('mousemove', (e) => {
      updateCoordinateDisplay(e.latlng.lat, e.latlng.lng);
    });

    // 2.5 Bắt sự kiện chuyển đổi Layer: Giao thông vs Vệ tinh
    const btnLayerStreet = document.getElementById('btnLayerStreet');
    const btnLayerSatellite = document.getElementById('btnLayerSatellite');

    if (btnLayerStreet && btnLayerSatellite) {
      btnLayerStreet.addEventListener('click', () => {
        if (activeTileLayerType !== 'street') {
          leafletMapInstance.removeLayer(satelliteTileLayer);
          leafletMapInstance.addLayer(streetTileLayer);
          activeTileLayerType = 'street';
          btnLayerStreet.classList.add('active');
          btnLayerSatellite.classList.remove('active');
        }
      });

      btnLayerSatellite.addEventListener('click', () => {
        if (activeTileLayerType !== 'satellite') {
          leafletMapInstance.removeLayer(streetTileLayer);
          leafletMapInstance.addLayer(satelliteTileLayer);
          activeTileLayerType = 'satellite';
          btnLayerSatellite.classList.add('active');
          btnLayerStreet.classList.remove('active');
        }
      });
    }

    // 2.6 Nút Cài đặt API Key bản đồ & Nút Reset góc nhìn toàn cảnh Thái Nguyên
    const btnApiKey = document.getElementById('btnConfigMapApiKey');
    if (btnApiKey) {
      btnApiKey.addEventListener('click', () => {
        const curKey = localStorage.getItem('KT_CARTO_API_KEY') || '';
        const promptMsg = 
          '🔑 CẤU HÌNH API KEY BẢN ĐỒ GIS:\n\n' +
          '• Trạng thái hiện tại: ' + (curKey ? 'Đang dùng CARTO Voyager (' + curKey.slice(0, 8) + '...)' : 'Đang dùng Google Maps siêu nét (Không cần Key, Không Watermark)') + '\n\n' +
          '• Nếu có CARTO API Key: Hãy dán key vào ô bên dưới.\n' +
          '• Nếu muốn dùng Google Maps tiếng Việt sạch không watermark: Hãy xóa trống ô bên dưới rồi bấm OK.';
        const newKey = prompt(promptMsg, curKey);
        if (newKey !== null) {
          window.setMapApiKey(newKey);
        }
      });
    }

    const btnReset = document.getElementById('mapReset');
    if (btnReset) {
      btnReset.addEventListener('click', () => {
        leafletMapInstance.flyTo(initialCenter, initialZoom, { duration: 1.0 });
        leafletMapInstance.closePopup();
        highlightSidebarItem('pin-hq');
        updateCoordinateDisplay(initialCenter[0], initialCenter[1]);
      });
    }

    // 2.7 Bắt sự kiện click vào Sidebar Items
    const locItems = document.querySelectorAll('.map-loc-item');
    locItems.forEach(item => {
      item.addEventListener('click', () => {
        const pinId = item.getAttribute('data-pin-id');
        focusGISLocation(pinId, true);
      });
    });

    // 2.8 Bắt sự kiện click vào nút bên trong Popup
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.gis-popup-btn');
      if (!btn) return;
      const action = btn.getAttribute('data-action');
      if (action === 'view-project') {
        const pId = btn.getAttribute('data-project-id');
        if (pId) openProjectModal(pId);
      } else if (action === 'contact') {
        const contactSec = document.getElementById('contact');
        if (contactSec) contactSec.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  /**
   * Focus bản đồ bay đến một vị trí và mở Popup
   */
  function focusGISLocation(pinId, shouldFly = true) {
    const loc = GIS_LOCATIONS_DATABASE[pinId];
    if (!loc || !leafletMapInstance) return;

    highlightSidebarItem(pinId);
    updateCoordinateDisplay(loc.coords[0], loc.coords[1]);

    const marker = markersRegistry[pinId];
    if (marker) {
      if (shouldFly) {
        leafletMapInstance.flyTo(loc.coords, 14, { duration: 1.2 });
      }
      setTimeout(() => {
        marker.openPopup();
      }, shouldFly ? 600 : 50);
    }
  }

  /**
   * Cập nhật trạng thái active cho danh sách bên Sidebar
   */
  function highlightSidebarItem(pinId) {
    document.querySelectorAll('.map-loc-item').forEach(item => {
      if (item.getAttribute('data-pin-id') === pinId) {
        item.classList.add('active');
        item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      } else {
        item.classList.remove('active');
      }
    });
  }

  /**
   * Cập nhật hiển thị tọa độ chuẩn WGS84
   */
  function updateCoordinateDisplay(lat, lng) {
    const coordEl = document.getElementById('mapCoordDisplay');
    if (!coordEl) return;
    coordEl.textContent = `TỌA ĐỘ VỆ TINH: ${lat.toFixed(5)}°N, ${lng.toFixed(5)}°E • TỈNH THÁI NGUYÊN`;
  }

  /**
   * Thiết lập bộ lọc danh mục dự án
   */
  function setupCategoryFilter() {
    const filterButtons = document.querySelectorAll('.project-filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (!filterButtons.length || !projectCards.length) return;

    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filterVal = button.getAttribute('data-filter') || 'all';

        // Cập nhật trạng thái active của nút
        filterButtons.forEach(btn => {
          btn.classList.remove('active');
          btn.setAttribute('aria-selected', 'false');
        });
        button.classList.add('active');
        button.setAttribute('aria-selected', 'true');

        // Lọc hiển thị card với hiệu ứng mượt
        projectCards.forEach(card => {
          const cardCategory = card.getAttribute('data-category');
          if (filterVal === 'all' || cardCategory === filterVal) {
            card.classList.remove('is-hidden');
            card.style.opacity = '0';
            card.style.transform = 'translateY(16px)';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 50);
          } else {
            card.classList.add('is-hidden');
          }
        });
      });
    });
  }

  /**
   * Bắt sự kiện click vào các Card dự án để mở Modal Lightbox
   */
  function setupProjectCardClick() {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
      card.addEventListener('click', (e) => {
        const projectId = card.getAttribute('data-project-id');
        openProjectModal(projectId);
      });
    });
  }

  /**
   * Mở Modal Lightbox với nội dung dự án tương ứng
   */
  function openProjectModal(projectId) {
    const modal = document.getElementById('projectLightboxModal');
    const modalBody = document.getElementById('lightboxBody');
    if (!modal || !modalBody) return;

    const projectIdx = PROJECTS_DATABASE.findIndex(p => p.id === projectId);
    if (projectIdx === -1) return;

    currentProjectIndex = projectIdx;
    renderModalContent(PROJECTS_DATABASE[currentProjectIndex]);

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Ngăn cuộn trang ngoài

    // Focus vào nút close
    const closeBtn = document.getElementById('lightboxCloseBtn');
    if (closeBtn) closeBtn.focus();
  }

  /**
   * Render HTML cho nội dung Modal
   */
  function renderModalContent(p) {
    const modalBody = document.getElementById('lightboxBody');
    if (!modalBody) return;

    const chipsHtml = (p.chips || []).map(chip => `<span class="lightbox-chip">${chip}</span>`).join('');

    modalBody.innerHTML = `
      <div class="lightbox-hero-banner">
        <img src="${p.image}" alt="${p.title}" class="lightbox-hero-img">
        <div class="lightbox-hero-overlay"></div>
        <div class="lightbox-hero-info">
          <span class="lightbox-hero-tag">${p.categoryName}</span>
          <h2 class="lightbox-hero-title">${p.title}</h2>
          <div class="lightbox-hero-sub">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            <span>${p.location}</span>
          </div>
        </div>
      </div>

      <div class="lightbox-content">
        <!-- Bảng thông số kỹ thuật chi tiết -->
        <table class="lightbox-specs-table">
          <tbody>
            <tr>
              <td class="spec-title-col">Quy mô công trình</td>
              <td class="spec-val-col">${p.scale}</td>
            </tr>
            <tr>
              <td class="spec-title-col">Chủ đầu tư / Đối tác</td>
              <td class="spec-val-col">${p.client}</td>
            </tr>
            <tr>
              <td class="spec-title-col">Tiêu chuẩn kỹ thuật</td>
              <td class="spec-val-col">${p.standards}</td>
            </tr>
            <tr>
              <td class="spec-title-col">Thiết bị & Công nghệ</td>
              <td class="spec-val-col">${p.equipment}</td>
            </tr>
            <tr>
              <td class="spec-title-col">Thời gian & Trạng thái</td>
              <td class="spec-val-col"><strong style="color: #16a34a;">${p.time}</strong></td>
            </tr>
            <tr>
              <td class="spec-title-col">Kết quả nghiệm thu</td>
              <td class="spec-val-col"><em>${p.result}</em></td>
            </tr>
          </tbody>
        </table>

        <!-- Tóm tắt giải pháp chuyên môn -->
        <h4 class="lightbox-desc-title">Tóm tắt giải pháp & Phạm vi triển khai</h4>
        <p class="lightbox-desc-text">${p.description}</p>

        <!-- Thẻ chỉ tiêu tiêu chuẩn -->
        <div class="lightbox-chips">
          ${chipsHtml}
        </div>

        <!-- Thanh hành động cuối Modal -->
        <div class="lightbox-actions">
          <div class="lightbox-nav-btns">
            <button type="button" class="lightbox-nav-btn" id="lightboxPrevBtn" aria-label="Dự án trước">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"></path></svg>
              <span>Dự Án Trước</span>
            </button>
            <button type="button" class="lightbox-nav-btn" id="lightboxNextBtn" aria-label="Dự án tiếp theo">
              <span>Dự Án Tiếp</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"></path></svg>
            </button>
          </div>

          <button type="button" class="btn btn-primary" id="lightboxBookingCtaBtn" data-service-key="${p.serviceKey}">
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <span>Tư Vấn Dự Án Tương Tự</span>
          </button>
        </div>
      </div>
    `;

    // Gắn sự kiện cho các nút điều hướng bên trong Modal
    setupModalInnerActions();
  }

  /**
   * Gắn sự kiện cho các nút điều hướng bên trong modal
   */
  function setupModalInnerActions() {
    const prevBtn = document.getElementById('lightboxPrevBtn');
    const nextBtn = document.getElementById('lightboxNextBtn');
    const bookingCtaBtn = document.getElementById('lightboxBookingCtaBtn');

    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentProjectIndex = (currentProjectIndex - 1 + PROJECTS_DATABASE.length) % PROJECTS_DATABASE.length;
        renderModalContent(PROJECTS_DATABASE[currentProjectIndex]);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentProjectIndex = (currentProjectIndex + 1) % PROJECTS_DATABASE.length;
        renderModalContent(PROJECTS_DATABASE[currentProjectIndex]);
      });
    }

    if (bookingCtaBtn) {
      bookingCtaBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const serviceKey = bookingCtaBtn.getAttribute('data-service-key');
        closeProjectModal();

        // Cuộn xuống form đặt lịch
        const bookingSection = document.getElementById('booking');
        if (bookingSection) {
          bookingSection.scrollIntoView({ behavior: 'smooth' });

          // Tự động chọn dịch vụ trong form nếu có
          const serviceSelect = document.getElementById('service');
          if (serviceSelect && serviceKey) {
            // Tìm option gần khớp
            for (let i = 0; i < serviceSelect.options.length; i++) {
              const opt = serviceSelect.options[i];
              if (
                (serviceKey === 'dien-110kv' && opt.value.includes('110')) ||
                (serviceKey === 'dia-chat' && (opt.value.includes('địa chất') || opt.value.includes('đo đạc'))) ||
                (serviceKey === 'tham-tra' && opt.value.includes('thẩm tra')) ||
                (serviceKey === 'giam-sat-xay-dung' && opt.value.includes('giám sát')) ||
                (serviceKey === 'dien-mat-troi' && opt.value.includes('mặt trời'))
              ) {
                serviceSelect.selectedIndex = i;
                break;
              }
            }
          }
        }
      });
    }
  }

  /**
   * Thiết lập đóng Modal
   */
  function setupLightboxModal() {
    const modal = document.getElementById('projectLightboxModal');
    const backdrop = document.getElementById('lightboxBackdrop');
    const closeBtn = document.getElementById('lightboxCloseBtn');

    if (!modal) return;

    if (backdrop) backdrop.addEventListener('click', closeProjectModal);
    if (closeBtn) closeBtn.addEventListener('click', closeProjectModal);

    // Đóng bằng phím Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeProjectModal();
      }
      // Phím mũi tên trái/phải để chuyển dự án khi modal đang mở
      if (modal.classList.contains('active')) {
        if (e.key === 'ArrowLeft') {
          currentProjectIndex = (currentProjectIndex - 1 + PROJECTS_DATABASE.length) % PROJECTS_DATABASE.length;
          renderModalContent(PROJECTS_DATABASE[currentProjectIndex]);
        } else if (e.key === 'ArrowRight') {
          currentProjectIndex = (currentProjectIndex + 1) % PROJECTS_DATABASE.length;
          renderModalContent(PROJECTS_DATABASE[currentProjectIndex]);
        }
      }
    });
  }

  /**
   * Đóng Modal
   */
  function closeProjectModal() {
    const modal = document.getElementById('projectLightboxModal');
    if (!modal) return;

    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Khởi chạy khi DOM sẵn sàng
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProjectsShowcase);
  } else {
    initProjectsShowcase();
  }

  // Export để gọi từ file khác nếu cần
  window.initProjectsShowcase = initProjectsShowcase;

})();
