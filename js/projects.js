/**
 * ==========================================================================
 * CÔNG TY TNHH KT XANH THÁI NGUYÊN - MODULE DỰ ÁN TIÊU BIỂU (PROJECTS SHOWCASE)
 * Xử lý lọc danh mục dự án, hiển thị Lightbox Modal chi tiết hồ sơ kỹ thuật,
 * điều hướng Prev/Next và liên kết tự động với Form Đặt Lịch Khảo Sát
 * ==========================================================================
 */

(function () {
  'use strict';

  // Cơ sở dữ liệu 6 Dự án tiêu biểu thực tế
  const PROJECTS_DATABASE = [
    {
      id: 'p1',
      title: 'Khảo sát địa hình, địa chất mở rộng KCN Điềm Thụy',
      title_en: 'Topographical & Geotechnical Survey - Diem Thuy IP Expansion',
      category: 'dia-chat',
      categoryName: 'Khảo sát Địa chất - Địa hình',
      categoryName_en: 'Geotechnical & Topographical Survey',
      location: 'KCN Điềm Thụy, Huyện Phú Bình, Tỉnh Thái Nguyên',
      location_en: 'Diem Thuy Industrial Park, Phu Binh, Thai Nguyen',
      scale: '35.000 m² quy hoạch mặt bằng nhà xưởng cao cấp',
      scale_en: '35,000 m² high-tech industrial facility master plot',
      client: 'Ban Quản Lý Các KCN Thái Nguyên & Doanh nghiệp Hạ Tầng',
      client_en: 'Thai Nguyen Industrial Zones Authority & Infrastructure Developers',
      standards: 'TCVN 9362:2012, TCVN 9437:2012, TCVN 4419:1987',
      standards_en: 'TCVN 9362:2012, TCVN 9437:2012, TCVN 4419:1987',
      equipment: 'Máy khoan XY-1, Máy toàn đạc điện tử Leica Flexline TS06, Thí nghiệm cơ lý đất phòng LAS-XD',
      equipment_en: 'XY-1 core drills, Leica Flexline TS06 total stations, LAS-XD certified soil mechanics lab',
      time: 'Tháng 03/2024 - Nghiệm thu hoàn tất',
      time_en: 'March 2024 - Successfully Accepted',
      result: 'Xác lập 24 hố khoan sâu 25–40m, cung cấp đầy đủ thông số địa tầng, mực nước ngầm và chỉ tiêu cơ lý phục vụ móng cọc.',
      result_en: 'Completed 24 exploratory boreholes at 25–40m depths, delivering stratigraphic columns, groundwater levels, and geotechnical engineering parameters.',
      description: 'Dự án thực hiện khảo sát địa chất công trình phục vụ giai đoạn mở rộng khu công nghiệp Điềm Thụy. Đội ngũ kỹ sư KT Xanh đã tiến hành công tác khoan lấy mẫu nguyên dạng, thí nghiệm SPT hiện trường, đo vẽ bình đồ tỷ lệ 1/500 đảm bảo độ tin cậy tuyệt đối cho kết cấu móng nhà máy công nghiệp nặng.',
      description_en: 'Comprehensive geotechnical survey for the expansion phase of Diem Thuy Industrial Park. KT Xanh engineers executed undisturbed soil sampling, field Standard Penetration Tests (SPT), and 1/500 topographical mapping, guaranteeing reliable foundation designs for heavy manufacturing plants.',
      chips: ['TCVN 9362:2012', 'Khoan 24 hố sâu', 'Thí nghiệm SPT', 'Độ chính xác cấp I', 'LAS-XD Độc lập'],
      chips_en: ['TCVN 9362:2012', '24 Deep Boreholes', 'SPT Tests', 'Class I Precision', 'Certified LAS-XD'],
      serviceKey: 'dia-chat',
      image: 'assets/project-p1-diachat.jpg'
    },
    {
      id: 'p2',
      title: 'Tư vấn thiết kế & giám sát Trạm biến áp 110kV KCN Sông Công II',
      title_en: 'Design & Supervision of 110kV Substation - Song Cong II IP',
      category: 'dien-110kv',
      categoryName: 'Trạm Biến Áp & Điện 110kV',
      categoryName_en: 'Substations & 110kV Power Lines',
      location: 'KCN Sông Công II, TP. Sông Công, Tỉnh Thái Nguyên',
      location_en: 'Song Cong II Industrial Park, Song Cong City, Thai Nguyen',
      scale: 'Trạm 110/22kV - Công suất 2x63 MVA, Đường dây 110kV dài 3.8 km',
      scale_en: '110/22kV Substation - Capacity 2x63 MVA, 3.8 km 110kV transmission line',
      client: 'Chủ đầu tư Hạ tầng KCN & Công ty Điện lực Thái Nguyên (EVN)',
      client_en: 'Industrial Park Infrastructure Developer & Thai Nguyen Power Company (EVN)',
      standards: 'QCVN 02:2022/BCT, Quy chuẩn kỹ thuật điện lưới quốc gia, IEC 60076',
      standards_en: 'QCVN 02:2022/BCT, National Grid Technical Codes, IEC 60076',
      equipment: 'Máy biến áp lực 63MVA ABB/Thibidi, Máy cắt khí SF6 110kV, Hệ thống SCADA giám sát từ xa',
      equipment_en: '63MVA power transformers ABB/Thibidi, 110kV SF6 gas circuit breakers, remote SCADA system',
      time: 'Năm 2023 - Đóng điện vận hành thương mại an toàn',
      time_en: 'Year 2023 - Commercial Operation & Energized Safely',
      result: 'Cung cấp nguồn điện ổn định, chất lượng cao cho hơn 20 nhà máy cơ khí, điện tử phụ trợ trong toàn KCN.',
      result_en: 'Delivering robust, high-quality electricity to over 20 advanced manufacturing plants throughout the park.',
      description: 'Công ty TNHH KT Xanh phụ trách lập hồ sơ thiết kế bản vẽ thi công, thẩm định phương án đấu nối điện lưới quốc gia và trực tiếp cử kỹ sư giám sát lắp đặt máy biến áp lực 110kV. Toàn bộ hệ thống bảo vệ rơ-le số và đóng cắt tự động SCADA được nghiệm thu khắt khe theo tiêu chuẩn EVN.',
      description_en: 'KT Xanh was entrusted with construction shop drawing designs, EVN national grid interconnection appraisals, and on-site construction supervision of 110kV transformers. Digital relay protection and automated SCADA switching were certified under EVN standards.',
      chips: ['QCVN 02:2022/BCT', 'Máy biến áp 63MVA', 'Hệ thống SCADA', 'Đóng điện an toàn', 'Tiêu chuẩn EVN'],
      chips_en: ['QCVN 02:2022/BCT', '63MVA Transformer', 'SCADA System', 'Energized Safely', 'EVN Standards'],
      serviceKey: 'dien-110kv',
      image: 'assets/project-p2-tramdien.jpg'
    },
    {
      id: 'p3',
      title: 'Thẩm tra dự toán & hồ sơ kỹ thuật nhà xưởng phụ trợ FDI Samsung Phổ Yên',
      title_en: 'Technical Verification & Cost Estimate Review - FDI Factory in Pho Yen',
      category: 'giam-sat',
      categoryName: 'Thẩm Tra & Giám Sát KCN',
      categoryName_en: 'Verification & Industrial Supervision',
      location: 'KCN Yên Bình, Phường Đồng Tiến, TP. Phổ Yên, Thái Nguyên',
      location_en: 'Yen Binh Industrial Park, Pho Yen City, Thai Nguyen',
      scale: 'Tổ hợp 3 nhà xưởng kết cấu thép tổng diện tích sàn 28.000 m²',
      scale_en: '3-warehouse pre-engineered steel complex, 28,000 m² total floor area',
      client: 'Tổng thầu Xây dựng & Doanh nghiệp FDI Hàn Quốc',
      client_en: 'General Construction Contractor & South Korean FDI Enterprise',
      standards: 'QCVN 01:2021/BXD, QCVN 06:2022/BXD (PCCC), Định mức đơn giá BXD mới nhất',
      standards_en: 'QCVN 01:2021/BXD, QCVN 06:2022/BXD (Fire Safety), Ministry of Construction rates',
      equipment: 'Phần mềm mô phỏng kết cấu SAP2000, ETABS, Dự toán G8 chuyên sâu',
      equipment_en: 'Structural analysis software SAP2000, ETABS, specialized Cost Estimation G8',
      time: 'Tháng 08/2024 - Hoàn thành bàn giao hồ sơ thẩm tra',
      time_en: 'August 2024 - Verification Dossier Delivered',
      result: 'Phát hiện và hiệu chỉnh 14 điểm sai lệch khối lượng, giúp chủ đầu tư tiết giảm 6.8% tổng mức đầu tư dự kiến.',
      result_en: 'Identified and corrected 14 structural discrepancies, saving 6.8% of client projected capital investment.',
      description: 'Công tác thẩm tra bao gồm kiểm tra tính chuẩn xác của khối lượng kết cấu thép vượt nhịp, đánh giá khả năng chịu tải trọng động của cần trục 20 tấn, đối chiếu định mức vật tư xây dựng và nghiệm thu hồ sơ an toàn PCCC, đảm bảo công trình thông qua kiểm tra của Sở Xây Dựng Thái Nguyên ngay từ lần nộp đầu tiên.',
      description_en: 'Comprehensive due diligence on long-span steel structure quantities, dynamic loading of 20-ton overhead cranes, verification of statutory construction rates, and fire safety code compliance.',
      chips: ['QCVN 01:2021/BXD', 'Tiết kiệm 6.8% chi phí', 'Khung thép vượt nhịp', 'An toàn PCCC', 'SAP2000/ETABS'],
      chips_en: ['QCVN 01:2021/BXD', '6.8% Cost Savings', 'Long-span Steel', 'Fire Safety QCVN 06', 'SAP2000/ETABS'],
      serviceKey: 'tham-tra',
      image: 'assets/project-p3-thamtrapk.jpg'
    },
    {
      id: 'p4',
      title: 'Khảo sát & Lắp đặt hệ thống Điện mặt trời áp mái 1.2MWp Nhà máy cơ khí',
      title_en: 'Survey & Installation of 1.2MWp Rooftop Solar System',
      category: 'dien-110kv',
      categoryName: 'Năng Lượng Tái Tạo & Điện Áp Mái',
      categoryName_en: 'Renewable Energy & Rooftop Solar',
      location: 'Cụm Công nghiệp Điềm Thụy, Thái Nguyên',
      location_en: 'Diem Thuy Industrial Cluster, Thai Nguyen',
      scale: 'Công suất lắp đặt 1.2 MWp với 2.180 tấm pin mặt trời hiệu suất cao',
      scale_en: '1.2 MWp installed capacity with 2,180 high-efficiency solar modules',
      client: 'Công ty Cổ phần Cơ khí Chế tạo Máy Thái Nguyên',
      client_en: 'Thai Nguyen Mechanical & Machinery Manufacturing JSC',
      standards: 'Quy chuẩn đấu nối điện áp mái EVN, Tiêu chuẩn IEC 61215 / IEC 61730',
      standards_en: 'EVN Rooftop Solar Connection Code, IEC 61215 / IEC 61730',
      equipment: 'Pin Silicon Mono Half-cell 550W, Inverter chuỗi Huawei Solar 100KTL, Tủ đóng cắt hạ thế AC',
      equipment_en: 'Mono Half-cell 550W panels, Huawei Solar 100KTL string inverters, AC low-voltage switchgear',
      time: 'Tháng 11/2024 - Hòa lưới điện tự dùng',
      time_en: 'November 2024 - Energized for Self-Consumption',
      result: 'Tạo ra 1.450 MWh điện sạch mỗi năm, giảm phát thải 1.160 tấn CO₂/năm, đạt chứng chỉ năng lượng tái tạo I-REC.',
      result_en: 'Generates 1,450 MWh clean electricity annually, offsets 1,160 tons of CO₂/year, awarded I-REC certification.',
      description: 'KT Xanh thực hiện kiểm định tải trọng an toàn tĩnh và động của mái xưởng tôn, tư vấn thiết kế góc nghiêng tối ưu quang năng và trực tiếp thi công giàn đỡ nhôm hợp kim Anodized chống ăn mòn. Dự án trang bị rơ-le chống phát ngược Zero-Export đảm bảo tuân thủ nghiêm chỉnh chính sách phát triển năng lượng xanh.',
      description_en: 'KT Xanh conducted structural roof load-bearing assessments, optimal tilt-angle engineering, and installed corrosion-resistant anodized aluminum mounting frames. Equipped with an EVN Zero-Export reverse power relay.',
      chips: ['1.2 MWp Điện sạch', 'Zero-Export EVN', 'Chứng chỉ I-REC', 'Giảm 1.160 tấn CO₂', 'Inverter Huawei'],
      chips_en: ['1.2 MWp Clean Solar', 'Zero-Export EVN', 'I-REC Certified', '-1,160 Tons CO₂', 'Huawei Inverter'],
      serviceKey: 'dien-mat-troi',
      image: 'assets/project-p4-solar.jpg'
    },
    {
      id: 'p5',
      title: 'Khảo sát trắc địa địa hình & Bay chụp UAV tuyến giao thông liên KCN Sông Công - Nam Tiến',
      title_en: 'Topographical Survey & UAV Photogrammetry - Song Cong - Nam Tien Route',
      category: 'dia-chat',
      categoryName: 'Trắc Địa & Bản Đồ Số Hóa UAV',
      categoryName_en: 'Geodetic Survey & 3D UAV Mapping',
      location: 'Tuyến kết nối KCN Sông Công đến Nam Tiến, Thái Nguyên',
      location_en: 'Corridor connecting Song Cong IP to Nam Tien, Thai Nguyen',
      scale: 'Tuyến giao thông vận tải hàng hóa dài 8.5 km, hành lang đo vẽ 60m',
      scale_en: '8.5 km arterial freight corridor, 60m wide mapping corridor',
      client: 'Ban Quản lý Dự án Đầu tư Xây dựng Công trình Giao thông',
      client_en: 'Traffic Infrastructure Construction Project Management Board',
      standards: 'QCVN 11:2020/BTNMT, Tiêu chuẩn khảo sát đường ô tô TCVN 9832:2013',
      standards_en: 'QCVN 11:2020/BTNMT, Highway Surveying Standards TCVN 9832:2013',
      equipment: 'Máy bay không người lái DJI Matrice 300 RTK gắn Lidar Zenmuse L1, Trạm CORS GNSS 2 tần số',
      equipment_en: 'DJI Matrice 300 RTK with Zenmuse L1 Lidar, dual-frequency GNSS CORS base stations',
      time: 'Năm 2023 - Nghiệm thu bàn giao mô hình 3D',
      time_en: 'Year 2023 - 3D Digital Model Accepted',
      result: 'Xây dựng mô hình số độ cao DEM, mô hình bề mặt DSM sai số mặt phẳng ≤ 2cm, rút ngắn 65% thời gian so với phương pháp đo trắc địa truyền thống.',
      result_en: 'Constructed Digital Elevation Models (DEM) and Surface Models (DSM) with planar error ≤ 2cm, reducing project time by 65%.',
      description: 'Ứng dụng công nghệ bay quét Lidar viễn thám kết hợp trắc địa điểm khống chế mặt đất GCP giúp tái lập không gian 3D địa hình tuyến đường với độ phân giải siêu nét. Cung cấp dữ liệu đám mây điểm (Point Cloud) chính xác phục vụ tính toán khối lượng đào đắp san nền tự động trên Civil 3D.',
      description_en: 'Application of remote Lidar photogrammetry combined with Ground Control Points (GCP) recreated high-precision 3D terrain point clouds for automatic cut-and-fill volume computations on Civil 3D.',
      chips: ['Bay chụp UAV Lidar', 'Sai số ≤ 2cm', 'Mô hình số 3D DEM', 'Rút ngắn 65% thời gian', 'QCVN 11:2020'],
      chips_en: ['UAV Lidar Scanning', 'Planar Error ≤ 2cm', '3D DEM Model', '-65% Lead Time', 'QCVN 11:2020'],
      serviceKey: 'trac-dia',
      image: 'assets/project-p5-uavdrone.jpg'
    },
    {
      id: 'p6',
      title: 'Giám sát thi công toàn diện Hạ tầng kỹ thuật & Trạm xử lý nước thải KCN Sông Công I',
      title_en: 'Construction Supervision of Technical Infrastructure & Wastewater Plant',
      category: 'giam-sat',
      categoryName: 'Giám Sát & Quản Lý Hạ Tầng',
      categoryName_en: 'Infrastructure Supervision & Management',
      location: 'KCN Sông Công I, Phường Bách Quang, TP. Sông Công, Thái Nguyên',
      location_en: 'Song Cong I Industrial Park, Song Cong City, Thai Nguyen',
      scale: 'Trạm XLNT công suất 5.000 m³/ngày đêm và mạng lưới cống ngầm bê tông D1200',
      scale_en: '5,000 m³/day wastewater treatment plant and D1200 concrete culvert network',
      client: 'Công ty Cổ phần Đầu tư Phát triển Hạ tầng KCN',
      client_en: 'Industrial Park Infrastructure Development & Investment JSC',
      standards: 'TCVN 7957:2008, Quy chuẩn nước thải công nghiệp QCVN 40:2011/BTNMT (Cột A)',
      standards_en: 'TCVN 7957:2008, Industrial Wastewater Regulation QCVN 40:2011/BTNMT (Column A)',
      equipment: 'Máy siêu âm mối hàn đường ống, Thiết bị lấy mẫu tự động quan trắc nước thải online',
      equipment_en: 'Pipeline ultrasonic weld testing machines, automated online wastewater sampling systems',
      time: 'Năm 2023 - 2024 - Nghiệm thu đưa vào vận hành',
      time_en: 'Years 2023 - 2024 - Accepted & Put into Operation',
      result: 'Đảm bảo 100% các chỉ tiêu bê tông chống thấm B8, công nghệ sinh học hiếu khí AO vận hành chuẩn mực, không rò rỉ.',
      result_en: '100% compliance with B8 impermeability standards, aerobic biological AO technology operating without leakages.',
      description: 'Kỹ sư giám sát trưởng của KT Xanh túc trực thường xuyên tại công trường để kiểm soát cao độ đặt cống, độ chặt lu lèn nền đất đắp K98, giám sát thi công chống thấm composite bể chứa hóa chất và nghiệm thu hệ thống bơm định lượng tự động, giúp chủ đầu tư bàn giao công trình đạt chuẩn bảo vệ môi trường của Bộ Tài nguyên & Môi trường.',
      description_en: 'Chief supervising engineers supervised culvert invert elevations, K98 earth compaction, composite chemical tank waterproofing, and automated metering pumps, ensuring statutory environmental compliance.',
      chips: ['Trạm XLNT 5.000 m³', 'QCVN 40 Cột A', 'Độ chặt K98', 'Giám sát 24/7', 'Bê tông chống thấm B8'],
      chips_en: ['5,000 m³ WWTP', 'QCVN 40 Column A', 'Compaction K98', '24/7 Supervision', 'Waterproof B8'],
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

      // Khởi tạo bản đồ nếu chưa có instance
      if (!leafletMapInstance) {
        initLeafletGISMap();
      }

      // Kích hoạt tính toán lại kích thước Leaflet container khi hiển thị
      setTimeout(() => {
        if (leafletMapInstance) {
          leafletMapInstance.invalidateSize();
          focusGISLocation('pin-hq', false);
        }
      }, 180);
    });

    // Tự động chuyển sang chế độ bản đồ khi bấm menu "Dự án GIS"
    document.querySelectorAll('a[href="#projects"]').forEach(link => {
      link.addEventListener('click', () => {
        setTimeout(() => {
          if (btnViewMap && !btnViewMap.classList.contains('active')) {
            btnViewMap.click();
          }
        }, 100);
      });
    });
  }

  /**
   * Cơ sở dữ liệu định vị GPS chính xác các điểm dự án & chi nhánh
   */
  const GIS_LOCATIONS_DATABASE = {
    'pin-hq': {
      id: 'pin-hq',
      name: 'Công Ty TNHH KT Xanh Thái Nguyên',
      name_en: 'KT Xanh Thai Nguyen Co., Ltd.',
      tag: 'Trụ Sở Điều Hành',
      tag_en: 'Headquarters & Ops Center',
      category: 'hq',
      coords: [21.5928, 105.8442],
      address: 'Số 13, Tổ 90, P. Phan Đình Phùng, TP. Thái Nguyên',
      address_en: 'No. 13, Group 90, Phan Dinh Phung Ward, Thai Nguyen City',
      scale: 'Văn phòng điều hành & Trung tâm tư vấn kỹ thuật',
      scale_en: 'Executive Office & Technical Engineering Center',
      standards: 'ISO 9001:2015 • Bộ Xây Dựng',
      standards_en: 'ISO 9001:2015 • Ministry of Construction',
      status: 'Hoạt động liên tục từ năm 2004',
      status_en: 'Operating Continuously Since 2004',
      badge: 'Trực Tuyến 24/7',
      badge_en: '24/7 Online Support',
      image: 'assets/banner-kt-xanh.jpg',
      projectId: null,
      iconSvg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>'
    },
    'pin-p2': {
      id: 'pin-p2',
      name: 'Trạm Biến Áp 110kV KCN Sông Công II',
      name_en: '110kV Substation - Song Cong II Industrial Park',
      tag: 'Trạm Biến Áp 110kV',
      tag_en: '110kV Substation EPC',
      category: 'dien',
      coords: [21.4988, 105.8315],
      address: 'KCN Sông Công II, TP. Sông Công, Thái Nguyên',
      address_en: 'Song Cong II Industrial Park, Song Cong City, Thai Nguyen',
      scale: '2x63 MVA • ĐZ 110kV dài 3.8 km',
      scale_en: '2x63 MVA • 3.8 km 110kV Transmission Line',
      standards: 'QCVN 02:2022/BCT • SCADA EVN',
      standards_en: 'QCVN 02:2022/BCT • SCADA EVN National Grid',
      status: 'Đóng điện vận hành an toàn',
      status_en: 'Energized & Operating Reliably',
      badge: 'Đóng Điện 110kV',
      badge_en: 'Energized 110kV',
      image: 'assets/project-p2-tramdien.jpg',
      projectId: 'p2',
      iconSvg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>'
    },
    'pin-p1': {
      id: 'pin-p1',
      name: 'Khảo Sát Địa Chất KCN Điềm Thụy',
      name_en: 'Geological Survey - Diem Thuy Industrial Park',
      tag: 'Khảo Sát Địa Chất',
      tag_en: 'Geological Survey',
      category: 'diachat',
      coords: [21.4647, 105.9080],
      address: 'KCN Điềm Thụy, H. Phú Bình, Thái Nguyên',
      address_en: 'Diem Thuy Industrial Park, Phu Binh District, Thai Nguyen',
      scale: '35.000 m² quy hoạch • 24 hố khoan sâu 40m',
      scale_en: '35,000 m² footprint • 24 boreholes depth 40m',
      standards: 'TCVN 9362:2012 • SPT LAS-XD',
      standards_en: 'TCVN 9362:2012 • SPT In-Situ Testing LAS-XD',
      status: 'Nghiệm thu hoàn tất 100%',
      status_en: '100% Final Inspection Accepted',
      badge: 'Nghiệm Thu 100%',
      badge_en: 'Accepted 100%',
      image: 'assets/project-p1-diachat.jpg',
      projectId: 'p1',
      iconSvg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M2 20h20"></path><path d="m5 20 7-14 7 14"></path></svg>'
    },
    'pin-p4': {
      id: 'pin-p4',
      name: 'Điện Mặt Trời Áp Mái 1.2MWp',
      name_en: '1.2MWp Rooftop Solar System',
      tag: 'Năng Lượng Xanh',
      tag_en: 'Clean Energy EPC',
      category: 'solar',
      coords: [21.4580, 105.9010],
      address: 'Cụm CN Điềm Thụy, H. Phú Bình, Thái Nguyên',
      address_en: 'Diem Thuy Industrial Cluster, Phu Binh District, Thai Nguyen',
      scale: '1.2 MWp • 2.180 tấm pin Half-cell 550W',
      scale_en: '1.2 MWp • 2,180 Half-cell 550W Modules',
      standards: 'IEC 61215 • Rơ-le Zero-Export EVN',
      standards_en: 'IEC 61215 • EVN Zero-Export Relay Code',
      status: 'Chứng chỉ năng lượng xanh I-REC',
      status_en: 'I-REC Green Energy Certified',
      badge: 'Chứng Chỉ I-REC',
      badge_en: 'I-REC Certified',
      image: 'assets/project-p4-solar.jpg',
      projectId: 'p4',
      iconSvg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line></svg>'
    },
    'pin-p3': {
      id: 'pin-p3',
      name: 'Nhà Xưởng Phụ Trợ FDI Samsung KCN Yên Bình',
      name_en: 'FDI Samsung Ancillary Plant - Yen Binh IP',
      tag: 'Thẩm Tra Dự Toán',
      tag_en: 'Tender Cost Verification',
      category: 'thamtra',
      coords: [21.4285, 105.8560],
      address: 'KCN Yên Bình, TP. Phổ Yên, Thái Nguyên',
      address_en: 'Yen Binh Industrial Park, Pho Yen City, Thai Nguyen',
      scale: '28.000 m² sàn kết cấu thép vượt nhịp',
      scale_en: '28,000 m² long-span structural steel workshop',
      standards: 'QCVN 01:2021/BXD • PCCC 06:2022',
      standards_en: 'QCVN 01:2021/BXD • Fire Safety QCVN 06:2022',
      status: 'Tiết giảm 6.8% tổng mức đầu tư',
      status_en: 'Saved 6.8% from Total Capital Outlay',
      badge: 'Tiết Giảm 6.8%',
      badge_en: 'Saved 6.8%',
      image: 'assets/project-p3-thamtrapk.jpg',
      projectId: 'p3',
      iconSvg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>'
    },
    'pin-p5': {
      id: 'pin-p5',
      name: 'Bay Chụp UAV Tuyến Sông Công - Nam Tiến',
      name_en: 'UAV Photogrammetry - Song Cong - Nam Tien Corridor',
      tag: 'Trắc Địa UAV 3D',
      tag_en: '3D UAV Geodetic Survey',
      category: 'uav',
      coords: [21.4720, 105.8280],
      address: 'Tuyến KCN Sông Công đến Nam Tiến, Thái Nguyên',
      address_en: 'Song Cong IP to Nam Tien Corridor, Thai Nguyen',
      scale: 'Tuyến 8.5 km • Lidar 3D Zenmuse DJI Matrice',
      scale_en: '8.5 km corridor • 3D Lidar DJI Matrice Zenmuse L1',
      standards: 'QCVN 11:2020/BTNMT • Sai số ≤ 2cm',
      standards_en: 'QCVN 11:2020/BTNMT • Planar Error ≤ 2cm',
      status: 'Bàn giao mô hình 3D DEM chuẩn xác',
      status_en: 'Handed Over Accurate 3D DEM Terrain Model',
      badge: 'Mô Hình 3D Lidar',
      badge_en: '3D Lidar Model',
      image: 'assets/project-p5-uavdrone.jpg',
      projectId: 'p5',
      iconSvg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line></svg>'
    },
    'pin-p6': {
      id: 'pin-p6',
      name: 'Hạ Tầng Kỹ Thuật & Trạm XLNT KCN Sông Công I',
      name_en: 'Technical Infrastructure & Wastewater Plant - Song Cong I IP',
      tag: 'Giám Sát Hạ Tầng',
      tag_en: 'Infrastructure Supervision',
      category: 'hatang',
      coords: [21.5050, 105.8150],
      address: 'KCN Sông Công I, TP. Sông Công, Thái Nguyên',
      address_en: 'Song Cong I Industrial Park, Song Cong City, Thai Nguyen',
      scale: '5.000 m³/ngày đêm • Cống ngầm D1200',
      scale_en: '5,000 m³/day plant • D1200 Concrete Culvert Network',
      standards: 'QCVN 40:2011/BTNMT • Bê tông B8',
      standards_en: 'QCVN 40:2011/BTNMT • Waterproof Concrete B8',
      status: 'Chứng chỉ nghiệm thu hoàn thành BXD',
      status_en: 'Completion Certification Approved by Dept of Construction',
      badge: 'Chuẩn QCVN 40',
      badge_en: 'QCVN 40 Standard',
      image: 'assets/project-p6-hatang.jpg',
      projectId: 'p6',
      iconSvg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>'
    },
    'pin-branch': {
      id: 'pin-branch',
      name: 'Chi Nhánh Công Ty TNHH KT Xanh Cao Bằng',
      name_en: 'KT Xanh Northern Regional Branch - Cao Bang',
      tag: 'Chi Nhánh Phía Bắc',
      tag_en: 'Northern Branch',
      category: 'branch',
      coords: [22.6667, 106.2625],
      address: 'Tỉnh Cao Bằng • Văn phòng đại diện',
      address_en: 'Cao Bang Province • Permanent Representative Office',
      scale: 'Khảo sát địa chất & tư vấn dự án miền núi',
      scale_en: 'Geological survey & highland project consulting',
      standards: 'TCVN • Tiêu chuẩn Xây Dựng Việt Nam',
      standards_en: 'TCVN • National Construction Codes of Vietnam',
      status: 'Văn phòng đại diện thường trực',
      status_en: 'Permanent Regional Office',
      badge: 'Thường Trực 24/7',
      badge_en: '24/7 Resident Branch',
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
   * Tạo nội dung Popup GIS đa ngôn ngữ theo trạng thái hiện tại
   */
  function getGISPopupHtml(loc) {
    const isEn = (document.documentElement.getAttribute('lang') === 'en');
    const name = isEn && loc.name_en ? loc.name_en : loc.name;
    const tag = isEn && loc.tag_en ? loc.tag_en : loc.tag;
    const badge = isEn && loc.badge_en ? loc.badge_en : loc.badge;
    const address = isEn && loc.address_en ? loc.address_en : loc.address;
    const scale = isEn && loc.scale_en ? loc.scale_en : loc.scale;
    const standards = isEn && loc.standards_en ? loc.standards_en : loc.standards;
    const status = isEn && loc.status_en ? loc.status_en : loc.status;
    const scaleLbl = isEn ? 'Scale:' : 'Quy mô:';
    const stdLbl = isEn ? 'Standards:' : 'Tiêu chuẩn:';
    const statusLbl = isEn ? 'Status:' : 'Trạng thái:';
    const btnViewText = isEn ? 'View Dossier & Drawings' : 'Xem Hồ Sơ & Bản Vẽ Chi Tiết';
    const btnContactText = isEn ? 'Contact Office Directly' : 'Liên Hệ Trực Tiếp Đơn Vị';

    return `
      <div class="gis-popup-card">
        <div class="gis-popup-thumb-wrap">
          <img src="${loc.image}" alt="${name}" class="gis-popup-img">
          <span class="gis-popup-tag">${tag}</span>
          <span class="gis-popup-badge">${badge}</span>
        </div>
        <div class="gis-popup-body">
          <h4 class="gis-popup-title">${name}</h4>
          <div class="gis-popup-location">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            <span>${address}</span>
          </div>
          <div class="gis-popup-specs">
            <div class="gis-spec-row">
              <span class="gis-spec-k">${scaleLbl}</span>
              <span class="gis-spec-v">${scale}</span>
            </div>
            <div class="gis-spec-row">
              <span class="gis-spec-k">${stdLbl}</span>
              <span class="gis-spec-v">${standards}</span>
            </div>
            <div class="gis-spec-row">
              <span class="gis-spec-k">${statusLbl}</span>
              <span class="gis-spec-v" style="color: #22c55e;">${status}</span>
            </div>
          </div>
          ${loc.projectId ? `
            <button type="button" class="gis-popup-btn" data-action="view-project" data-project-id="${loc.projectId}">
              <span>${btnViewText}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
          ` : `
            <button type="button" class="gis-popup-btn" data-action="contact">
              <span>${btnContactText}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
          `}
        </div>
      </div>
    `;
  }

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

      const marker = L.marker(loc.coords, { icon: customDivIcon, title: loc.name });
      marker.bindPopup(() => getGISPopupHtml(loc), { maxWidth: 320, minWidth: 290, className: 'gis-custom-popup' });

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
        const isEn = (document.documentElement.getAttribute('lang') === 'en');
        const promptMsg = isEn ?
          '🔑 CONFIGURE GIS MAP API KEY:\n\n' +
          '• Current Status: ' + (curKey ? 'Using CARTO Voyager (' + curKey.slice(0, 8) + '...)' : 'Using High-Def Google Maps (No Key, No Watermark)') + '\n\n' +
          '• If you have a CARTO API Key, paste it below.\n' +
          '• To revert to Google Maps, leave blank and click OK.' :
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
    const isEn = (document.documentElement.getAttribute('lang') === 'en');
    const prefix = isEn ? 'SATELLITE COORDINATES:' : 'TỌA ĐỘ VỆ TINH:';
    const suffix = isEn ? 'THAI NGUYEN PROVINCE' : 'TỈNH THÁI NGUYÊN';
    coordEl.textContent = `${prefix} ${lat.toFixed(5)}°N, ${lng.toFixed(5)}°E • ${suffix}`;
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
   * Render HTML cho nội dung Modal (Bilingual VIE/ENG)
   */
  function renderModalContent(p) {
    const modalBody = document.getElementById('lightboxBody');
    if (!modalBody) return;

    const isEn = (document.documentElement.getAttribute('lang') === 'en');
    const title = isEn && p.title_en ? p.title_en : p.title;
    const catName = isEn && p.categoryName_en ? p.categoryName_en : p.categoryName;
    const location = isEn && p.location_en ? p.location_en : p.location;
    const scale = isEn && p.scale_en ? p.scale_en : p.scale;
    const client = isEn && p.client_en ? p.client_en : p.client;
    const standards = isEn && p.standards_en ? p.standards_en : p.standards;
    const equipment = isEn && p.equipment_en ? p.equipment_en : p.equipment;
    const time = isEn && p.time_en ? p.time_en : p.time;
    const result = isEn && p.result_en ? p.result_en : p.result;
    const description = isEn && p.description_en ? p.description_en : p.description;
    const chipsList = (isEn && p.chips_en) ? p.chips_en : p.chips;

    const lblScale = isEn ? 'Project Scale' : 'Quy mô công trình';
    const lblClient = isEn ? 'Client / Partner' : 'Chủ đầu tư / Đối tác';
    const lblStd = isEn ? 'Technical Standards' : 'Tiêu chuẩn kỹ thuật';
    const lblEquip = isEn ? 'Equipment & Technology' : 'Thiết bị & Công nghệ';
    const lblTime = isEn ? 'Schedule & Status' : 'Thời gian & Trạng thái';
    const lblResult = isEn ? 'Acceptance Result' : 'Kết quả nghiệm thu';
    const lblSummary = isEn ? 'Scope of Work & Engineering Summary' : 'Tóm tắt giải pháp & Phạm vi triển khai';
    const lblPrev = isEn ? 'Previous Project' : 'Dự Án Trước';
    const lblNext = isEn ? 'Next Project' : 'Dự Án Tiếp';
    const lblConsult = isEn ? 'Consult Similar Project' : 'Tư Vấn Dự Án Tương Tự';

    const chipsHtml = (chipsList || []).map(chip => `<span class="lightbox-chip">${chip}</span>`).join('');

    modalBody.innerHTML = `
      <div class="lightbox-hero-banner">
        <img src="${p.image}" alt="${title}" class="lightbox-hero-img">
        <div class="lightbox-hero-overlay"></div>
        <div class="lightbox-hero-info">
          <span class="lightbox-hero-tag">${catName}</span>
          <h2 class="lightbox-hero-title">${title}</h2>
          <div class="lightbox-hero-sub">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            <span>${location}</span>
          </div>
        </div>
      </div>

      <div class="lightbox-content">
        <!-- Bảng thông số kỹ thuật chi tiết -->
        <table class="lightbox-specs-table">
          <tbody>
            <tr>
              <td class="spec-title-col">${lblScale}</td>
              <td class="spec-val-col">${scale}</td>
            </tr>
            <tr>
              <td class="spec-title-col">${lblClient}</td>
              <td class="spec-val-col">${client}</td>
            </tr>
            <tr>
              <td class="spec-title-col">${lblStd}</td>
              <td class="spec-val-col">${standards}</td>
            </tr>
            <tr>
              <td class="spec-title-col">${lblEquip}</td>
              <td class="spec-val-col">${equipment}</td>
            </tr>
            <tr>
              <td class="spec-title-col">${lblTime}</td>
              <td class="spec-val-col"><strong style="color: #16a34a;">${time}</strong></td>
            </tr>
            <tr>
              <td class="spec-title-col">${lblResult}</td>
              <td class="spec-val-col"><em>${result}</em></td>
            </tr>
          </tbody>
        </table>

        <!-- Tóm tắt giải pháp chuyên môn -->
        <h4 class="lightbox-desc-title">${lblSummary}</h4>
        <p class="lightbox-desc-text">${description}</p>

        <!-- Thẻ chỉ tiêu tiêu chuẩn -->
        <div class="lightbox-chips">
          ${chipsHtml}
        </div>

        <!-- Thanh hành động cuối Modal -->
        <div class="lightbox-actions">
          <div class="lightbox-nav-btns">
            <button type="button" class="lightbox-nav-btn" id="lightboxPrevBtn" aria-label="${lblPrev}">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"></path></svg>
              <span>${lblPrev}</span>
            </button>
            <button type="button" class="lightbox-nav-btn" id="lightboxNextBtn" aria-label="${lblNext}">
              <span>${lblNext}</span>
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
            <span>${lblConsult}</span>
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

  // Lắng nghe sự kiện chuyển đổi ngôn ngữ toàn trang
  window.addEventListener('kt:langchange', () => {
    // 1. Cập nhật nội dung Modal nếu đang mở
    const modal = document.getElementById('projectLightboxModal');
    if (modal && modal.classList.contains('active')) {
      renderModalContent(PROJECTS_DATABASE[currentProjectIndex]);
    }

    // 2. Cập nhật popup bản đồ Leaflet
    if (leafletMapInstance) {
      Object.keys(markersRegistry).forEach(pinId => {
        const marker = markersRegistry[pinId];
        const loc = GIS_LOCATIONS_DATABASE[pinId];
        if (marker && loc && marker.isPopupOpen && marker.isPopupOpen()) {
          marker.setPopupContent(getGISPopupHtml(loc));
        }
      });
      const center = leafletMapInstance.getCenter();
      updateCoordinateDisplay(center.lat, center.lng);
    }
  });

  // Khởi chạy khi DOM sẵn sàng
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProjectsShowcase);
  } else {
    initProjectsShowcase();
  }

  // Export để gọi từ file khác nếu cần
  window.initProjectsShowcase = initProjectsShowcase;

})();
