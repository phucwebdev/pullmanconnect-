/**
 * PULLMAN CONNECT - Complete Multi-Language Internationalization (i18n)
 * Supported Languages:
 *  - 'vi': Tiếng Việt (Vietnamese - Default)
 *  - 'en': English (Global)
 *  - 'cn': 中文 (Chinese)
 */

const I18N_DICTIONARY = {
  vi: {
    label: 'Tiếng Việt',
    // Header & Nav
    hotline: 'HOTLINE: 0942512234 (Mr Cường)',
    navHome: '🏠 TRANG CHỦ',
    navAbout: 'VỀ CHÚNG TÔI ▾',
    navAboutIntro: 'Giới Thiệu Về Pullman Connect',
    navAboutVision: 'Tầm Nhìn - Sứ Mệnh - Giá Trị Cốt Lõi',
    navAboutCommit: 'Cam Kết Chất Lượng Dịch Vụ',
    navAboutNetwork: 'Mạng Lưới Chi Nhánh Toàn Cầu',
    navServices: 'DỊCH VỤ CỐT LÕI ▾',
    navPillar1: '1. Dịch Vụ Vận Tải (Transportation Services)',
    navPillar2: '2. Kho Bãi & Phân Phối (Warehousing & Distribution)',
    navPillar3: '3. Đại Lý & Giao Nhận Hải Quan (Forwarding & Customs)',
    navPillar4: '4. Chuỗi Cung Ứng 3PL/4PL & Logistics Chuyên Biệt',
    navPillar5: '5. Cung Ứng Vật Tư & Máy Móc Thiết Bị Công Nghiệp',
    navCalculator: 'DỰ TOÁN CƯỚC',
    navContact: 'LIÊN HỆ',
    navQuoteBtn: 'GỬI YÊU CẦU BÁO GIÁ (ENQUIRY)',

    // Slider
    slide1Heading: 'SEA FREIGHT WORLDWIDE',
    slide1Sub: '- FCL / - LCL',
    slide1Btn1: 'XEM DỊCH VỤ VẬN TẢI',
    slide1Btn2: 'NHẬN BÁO GIÁ CƯỚC',

    slide2Heading: 'AIR FREIGHT WORLDWIDE',
    slide2Sub: '- GSA / - Hàng Đặc Thù (DG, Lạnh) / - Express',
    slide2Btn1: 'XEM DỊCH VỤ HÀNG KHÔNG',
    slide2Btn2: 'NHẬN BÁO GIÁ CƯỚC',

    slide3Heading: 'ROAD & MULTIMODAL FREIGHT',
    slide3Sub: '- Cross Border / - Xe Đầu Kéo / - Đường Sắt Liên Vận',
    slide3Btn1: 'XEM DỊCH VỤ ĐƯỜNG BỘ',
    slide3Btn2: 'NHẬN BÁO GIÁ CƯỚC',

    slide4Heading: 'MATERIAL & INDUSTRIAL SUPPLY',
    slide4Sub: '- Vật Tư Sản Xuất / - Cơ Điện & Tủ Bảng / - Thiết Bị Thực Phẩm & Y Tế',
    slide4Btn1: 'XEM DANH MỤC VẬT TƯ',
    slide4Btn2: 'NHẬN BÁO GIÁ THẦU',

    // Pillars Header
    pillarsBadge: 'HỆ SINH THÁI DỊCH VỤ TOÀN DIỆN',
    pillarsTitle: '5 TRỤ CỘT DỊCH VỤ <span>CỐT LÕI</span>',
    pillarsDesc: 'Pullman Connect cung cấp giải pháp chuỗi cung ứng khép kín, tối ưu hóa chi phí và đảm bảo dòng chảy thương mại xuyên suốt từ nhà máy đến tay người tiêu dùng cuối cùng.',

    // Pillar 1
    p1Badge: 'TRỤ CỘT 1',
    p1Title: 'DỊCH VỤ VẬN TẢI (TRANSPORTATION SERVICES)',
    p1Desc: 'Mảng kinh doanh cốt lõi kết nối mạng lưới thương mại quốc tế và nội địa',
    p1Sub1Title: '🚢 VẬN TẢI BIỂN (OCEAN FREIGHT)',
    p1Sub1_1: 'Vận tải container đường biển quốc tế và nội địa (chặng Bắc - Nam).',
    p1Sub1_2: 'Gom hàng lẻ (LCL) và vận tải nguyên container (FCL).',
    p1Sub1_3: 'Thuê tàu chuyến/tàu định hạn cho hàng rời, hàng dự án.',
    p1Sub2Title: '✈️ VẬN TẢI HÀNG KHÔNG (AIR FREIGHT)',
    p1Sub2_1: 'Dịch vụ gom hàng không, đại lý bán cước hàng không (GSA/General Sales Agent).',
    p1Sub2_2: 'Chuyển phát nhanh quốc tế và nội địa.',
    p1Sub2_3: 'Vận chuyển hàng đặc thù: Hàng nguy hiểm (DG), hàng tươi sống, hàng đông lạnh (dược phẩm/vắc xin).',
    p1Sub3Title: '🚛 ĐƯỜNG BỘ & ĐA PHƯƠNG THỨC',
    p1Sub3_1: 'Vận chuyển container bằng xe đầu kéo từ cảng/ICD về kho khách hàng.',
    p1Sub3_2: 'Xe tải nguyên chuyến, dịch vụ gom hàng đường bộ, phân phối hàng hóa từ các hệ thống cảng biển và sân bay quốc tế tới các khu công nghiệp, các trung tâm phân phối trên toàn lãnh thổ Việt Nam.',
    p1Sub3_3: 'Vận tải xuyên biên giới (Cross-border trucking) kết nối Việt Nam với Trung Quốc, Lào, Campuchia, Thái Lan.',
    p1Sub4Title: '🚂 VẬN TẢI ĐƯỜNG SẮT (RAIL FREIGHT)',
    p1Sub4_1: 'Kết nối các ga trọng điểm nội địa Bắc - Trung - Nam.',
    p1Sub4_2: 'Tuyến đường sắt liên vận quốc tế (Việt Nam - Trung Quốc - Châu Âu / Eurasia Rail Corridor).',
    p1Sub4_3: 'Tối ưu thời gian so với đường biển và tiết kiệm chi phí so với hàng không.',

    // Pillar 2
    p2Badge: 'TRỤ CỘT 2',
    p2Title: 'DỊCH VỤ KHO BÃI & PHÂN PHỐI (WAREHOUSING & DISTRIBUTION)',
    p2Desc: 'Giải pháp lưu trữ và quản lý chuỗi cung ứng cho DN sản xuất, bán lẻ và e-Commerce',
    p2Sub1Title: '🏭 QUẢN LÝ KHO BÃI TIÊU CHUẨN',
    p2Sub1_1: '<strong>Kho thường (General Warehouse):</strong> Lưu trữ hàng tiêu dùng, nguyên vật liệu sản xuất.',
    p2Sub1_2: '<strong>Kho lạnh/Kho mát (Cold Storage):</strong> Lưu trữ thực phẩm, thủy hải sản, dược phẩm (-20°C đến +8°C).',
    p2Sub1_3: '<strong>Kho ngoại quan (Bonded Warehouse):</strong> Lưu trữ hàng chưa làm thủ tục thông quan hoặc hàng quá cảnh.',
    p2Sub1_4: '<strong>Kho CFS (Container Freight Station):</strong> Điểm gom/tách hàng lẻ cho xuất nhập khẩu.',
    p2Sub2Title: '📦 DỊCH VỤ GIÁ TRỊ GIA TĂNG (VAS)',
    p2Sub2_1: 'Đóng gói, dán tem nhãn phụ (labeling), chia chọn (sorting), đo kiểm, đóng pallet tiêu chuẩn ISPM 15.',
    p2Sub2_2: 'Quản lý tồn kho (Inventory Management) bằng hệ thống WMS thông minh, mã vạch Barcode/QR Code.',
    p2Sub2_3: 'Thực hiện đơn hàng thương mại điện tử (e-Commerce Fulfillment Services): Pick & Pack, giao hàng thu tiền COD.',

    // Pillar 3
    p3Badge: 'TRỤ CỘT 3',
    p3Title: 'ĐẠI LÝ & GIAO NHẬN HẢI QUAN (FREIGHT FORWARDING & CUSTOMS)',
    p3Desc: 'Tổ chức và xử lý trọn gói các thủ tục pháp lý, chứng từ thông quan thông suốt',
    p3Sub1Title: '📑 ĐẠI LÝ LÀM THỦ TỤC HẢI QUAN',
    p3Sub1_1: '<strong>Khai báo hải quan điện tử:</strong> Cho các loại hình Kinh doanh, Gia công, Sản xuất xuất khẩu, Chế xuất, Bưu chính chuyển phát nhanh.',
    p3Sub1_2: '<strong>Xin giấy phép chuyên ngành:</strong> Kiểm tra chất lượng, kiểm dịch động/thực vật, chứng nhận hợp quy/hợp chuẩn.',
    p3Sub1_3: '<strong>Chứng nhận xuất xứ (C/O):</strong> Xin cấp C/O các form A, B, D, E, AK, AJ, VJ, EUR.1 hưởng ưu đãi thuế quan 0%.',
    p3Sub1_4: '<strong>Tư vấn hải quan:</strong> Tra cứu mã HS code, tính thuế xuất nhập khẩu và xác định giá trị tính thuế chính xác.',
    p3Sub2Title: '🛡️ ĐẠI LÝ GIAO NHẬN & CHỨNG TỪ',
    p3Sub2_1: 'Phát hành vận đơn quốc tế chính thức: House Bill of Lading (HBL) / House Airway Bill (HAWB).',
    p3Sub2_2: 'Làm đại lý tàu biển (Shipping Agency) và đại lý quản lý container chuyên nghiệp.',
    p3Sub2_3: 'Xử lý manifest điện tử và chứng từ giao nhận đa phương thức.',

    // Pillar 4
    p4Badge: 'TRỤ CỘT 4',
    p4Title: 'CHUỖI CUNG ỨNG 3PL / 4PL & LOGISTICS CHUYÊN BIỆT',
    p4Desc: 'Cung cấp giải pháp logistics trọn gói, độ phức tạp cao theo yêu cầu riêng của từng ngành',
    p4Sub1Title: '🔄 LOGISTICS CHUỖI CUNG ỨNG (3PL/4PL)',
    p4Sub1_1: 'Tích hợp trọn gói từ khâu thu mua nguyên liệu đầu vào, quản lý kho bãi, thông quan đến phân phối tới người tiêu dùng cuối cùng.',
    p4Sub1_2: 'Mô hình Control Tower giám sát hiệu suất vận hành toàn diện.',
    p4Sub2Title: '🏗️ HÀNG DỰ ÁN & SIÊU TRƯỜNG SIÊU TRỌNG',
    p4Sub2_1: 'Vận chuyển thiết bị máy móc công trình nặng, kết cấu quá khổ quá tải (OOG / Breakbulk).',
    p4Sub2_2: 'Logistics cho các dự án năng lượng: Nhà máy điện gió, cánh quạt tuabin, trạm biến áp, điện mặt trời.',
    p4Sub3Title: '⚓ DỊCH VỤ CẢNG & ICD (PORT & DEPOT)',
    p4Sub3_1: 'Kinh doanh và khai thác cảng biển, cảng sông nội địa.',
    p4Sub3_2: 'Dịch vụ bãi container (Depot), nâng hạ, kiểm đếm, vệ sinh và sửa chữa vỏ container theo chuẩn quốc tế IICL.',

    // Pillar 5
    p5Badge: 'TRỤ CỘT 5',
    p5Title: 'CUNG ỨNG VẬT TƯ & THẦU MÁY MÓC THIẾT BỊ CÔNG NGHIỆP',
    p5Desc: 'Cung ứng trọn gói vật tư đa ngành và tổng thầu máy móc thiết bị công nghiệp chất lượng cao, đúng tiến độ',
    p5Sub1Title: '🏗️ VẬT TƯ & NGUYÊN LIỆU ĐA NGÀNH',
    p5Sub1_1: '<strong>Vật tư xây dựng & hạ tầng:</strong> Cung cấp một loạt các vật tư và nguyên liệu phục vụ xây dựng, cơ khí chế tạo và kết cấu công trình.',
    p5Sub1_2: '<strong>Nguyên liệu sản xuất:</strong> Cung ứng vật tư, nguyên phụ liệu cho nhiều lĩnh vực sản xuất công nghiệp, da giày, dệt may và phụ trợ.',
    p5Sub1_3: '<strong>Vật tư ngành y tế:</strong> Hóa chất xét nghiệm, vật tư tiêu hao phòng sạch và trang thiết bị bảo hộ y tế đạt chuẩn quốc tế.',
    p5Sub1_4: '<strong>Nguyên liệu thực phẩm:</strong> Phụ gia thực phẩm an toàn, bao bì bảo quản chuyên dụng phục vụ ngành chế biến thực phẩm.',
    p5Sub2Title: '⚙️ THẦU MÁY MÓC & THIẾT BỊ CÔNG NGHIỆP',
    p5Sub2_1: '<strong>Dịch vụ tổng thầu thiết bị:</strong> Cung cấp trọn gói máy móc, dây chuyền sản xuất tự động hóa phục vụ nhu cầu sản xuất kinh doanh.',
    p5Sub2_2: '<strong>Thiết bị công nghiệp nặng:</strong> Nhập khẩu và bàn giao máy gia công CNC, máy ép cơ khí chính xác, thiết bị nâng hạ nhà xưởng.',
    p5Sub2_3: '<strong>Thiết bị chuyên dụng:</strong> Cung ứng thiết bị cơ điện và máy móc chuyên ngành theo đúng tiêu chuẩn kỹ thuật của khách hàng.',
    p5Sub3Title: '🛡️ CAM KẾT CHẤT LƯỢNG & TIẾN ĐỘ',
    p5Sub3_1: '<strong>Thiết bị chất lượng cao:</strong> Cam kết 100% thiết bị đạt tiêu chuẩn chất lượng cao, có đầy đủ chứng chỉ kiểm định xuất xứ CO/CQ.',
    p5Sub3_2: '<strong>Đảm bảo đúng tiến độ:</strong> Quy trình giao hàng, kiểm định và lắp đặt đồng bộ, đảm bảo tiến độ và hiệu quả vận hành tối đa.',
    p5Sub3_3: '<strong>Tối ưu chi phí đầu tư:</strong> Giải pháp đấu thầu và cung ứng trọn gói giúp doanh nghiệp tối ưu chi phí và nâng cao hiệu suất.',

    // Stats
    statUpdating: 'Đang cập nhật',
    stat1Caption: 'NHÂN SỰ LOGISTICS CHUYÊN SÂU',
    stat2Caption: 'VĂN PHÒNG & CHI NHÁNH ĐIỀU HÀNH',
    stat3Caption: 'TẤN HÀNG KHÔNG XỬ LÝ / NĂM',
    stat4Caption: 'TEUS VẬN TẢI CONTAINER / NĂM',

    // Calculator
    calcBadge: 'DỰ TOÁN CƯỚC PHÍ TỰ ĐỘNG',
    calcTitle: 'TÍNH CƯỚC VẬN TẢI & ĐĂNG KÝ BÁO GIÁ (ENQUIRY)',
    calcDesc: 'Nhận bảng dự toán chi phí vận chuyển quốc tế minh bạch, cam kết giữ chỗ và thời gian giao hàng đúng hạn.',
    calcParamsTitle: 'Thông Số Lô Hàng Của Bạn',
    calcOriginLabel: 'Cảng / Sân Bay Đi (Origin):',
    calcDestLabel: 'Cảng / Sân Bay Đến (Dest):',
    calcWeightLabel: 'Tổng Trọng Lượng (Gross Weight - KG):',
    calcVolumeLabel: 'Tổng Thể Tích (Volume - CBM):',
    calcCargoLabel: 'Phân Loại Hàng Hóa:',
    calcAutoQuoteTitle: 'BÁO GIÁ CƯỚC TỰ ĐỘNG CHUYÊN TUYẾN',
    calcEstTotal: 'Ước tính cước trọn gói:',
    calcBaseCost: 'Cước gốc cơ bản:',
    calcFuelCost: 'Phụ phí nhiên liệu:',
    calcInsuranceCost: 'Bảo hiểm All-Risk:',
    calcCustomsCost: 'Thủ tục hải quan:',
    calcBookBtn: 'ĐẶT CHỖ & NHẬN BÁO GIÁ CHÍNH THỨC',

    // Footer
    footerCopyright: 'Bản quyền © 2026 <strong>PULLMAN CONNECT CORPORATION.</strong> Bảo lưu toàn bộ quyền.',
    footerHeadOffice: '🏠 <strong>TRỤ SỞ CHÍNH (HEAD OFFICE)</strong>: 152 Nguyễn Văn Đậu, Tân Định, TP. Hồ Chí Minh, Việt Nam',
    footerEmail: '✉️ <strong>Email điều hành</strong>: <a href="mailto:pullmanconnect35@gmail.com" style="color:#ffffff; text-decoration: underline;">pullmanconnect35@gmail.com</a>',
    footerPhone: '📞 <strong>Điện thoại</strong>: <a href="tel:0942512234" style="color:#ffffff; text-decoration: underline;">0942512234 (Mr Cường)</a> | 📠 <strong>Fax</strong>: (Đang cập nhật)',
    footerAssociation: 'Hội viên chính thức của Hiệp hội Doanh nghiệp Dịch vụ Logistics Việt Nam (VLA), IATA, FIATA, WCA ID: #88241.',
    footerMoit: '✓ ĐÃ THÔNG BÁO BỘ CÔNG THƯƠNG',

    // Floating Widget & Toast
    floatZalo: 'Chat Zalo (Mr Cường)',
    floatHotline: 'Hotline: 0942512234 (Mr Cường)',
    floatWhatsapp: 'WhatsApp (Quốc Tế)',
    floatEmailQuote: 'Báo Giá Nhanh (Email)',
    toastLangSwitched: 'Đã chuyển sang ngôn ngữ: Tiếng Việt'
  },

  en: {
    label: 'English',
    // Header & Nav
    hotline: 'HOTLINE: (+84) 942512234 (Mr Cuong)',
    navHome: '🏠 HOME',
    navAbout: 'ABOUT US ▾',
    navAboutIntro: 'About Pullman Connect',
    navAboutVision: 'Vision - Mission - Core Values',
    navAboutCommit: 'Quality Service Commitments',
    navAboutNetwork: 'Global Branch Network',
    navServices: 'CORE SERVICES ▾',
    navPillar1: '1. Transportation Services',
    navPillar2: '2. Warehousing & Distribution',
    navPillar3: '3. Freight Forwarding & Customs Clearance',
    navPillar4: '4. 3PL/4PL Supply Chain & Specialized Logistics',
    navPillar5: '5. Material Supply & Industrial Equipment Procurement',
    navCalculator: 'RATE ESTIMATE',
    navContact: 'CONTACT US',
    navQuoteBtn: 'REQUEST A QUOTE (ENQUIRY)',

    // Slider
    slide1Heading: 'SEA FREIGHT WORLDWIDE',
    slide1Sub: '- FCL / - LCL Direct Lines',
    slide1Btn1: 'EXPLORE SEA FREIGHT',
    slide1Btn2: 'GET FREIGHT QUOTE',

    slide2Heading: 'AIR FREIGHT WORLDWIDE',
    slide2Sub: '- GSA / - Special Cargo (DG, Pharma) / - Express',
    slide2Btn1: 'EXPLORE AIR FREIGHT',
    slide2Btn2: 'GET FREIGHT QUOTE',

    slide3Heading: 'ROAD & MULTIMODAL FREIGHT',
    slide3Sub: '- Cross Border / - Heavy Haul Fleet / - Eurasia Rail',
    slide3Btn1: 'EXPLORE ROAD FREIGHT',
    slide3Btn2: 'GET FREIGHT QUOTE',

    slide4Heading: 'MATERIAL & MACHINERY SUPPLY',
    slide4Sub: '- Industrial Supplies / - Electrical & Automation / - Food & Medical Equip',
    slide4Btn1: 'EXPLORE SUPPLIES',
    slide4Btn2: 'REQUEST PROCUREMENT QUOTE',

    // Pillars Header
    pillarsBadge: 'COMPREHENSIVE SERVICE ECOSYSTEM',
    pillarsTitle: '5 CORE SERVICES & <span>SUPPLY PILLARS</span>',
    pillarsDesc: 'Pullman Connect delivers end-to-end supply chain solutions, optimizing costs and ensuring seamless trade flow from factory floor to end consumers.',

    // Pillar 1
    p1Badge: 'PILLAR 1',
    p1Title: 'TRANSPORTATION SERVICES',
    p1Desc: 'Core business connecting international and domestic multimodal trade networks',
    p1Sub1Title: '🚢 OCEAN FREIGHT',
    p1Sub1_1: 'International and domestic coastal container shipping (North - South corridors).',
    p1Sub1_2: 'Less-than-Container Load (LCL) consolidation & Full Container Load (FCL).',
    p1Sub1_3: 'Voyage and time chartering for bulk commodities and project cargo.',
    p1Sub2Title: '✈️ AIR FREIGHT',
    p1Sub2_1: 'Air freight consolidation & General Sales Agent (GSA) airline representation.',
    p1Sub2_2: 'Worldwide international express courier and priority domestic deliveries.',
    p1Sub2_3: 'Specialized cargo: Dangerous Goods (DG), perishables, and cold-chain pharma/vaccines.',
    p1Sub3Title: '🚛 ROAD & MULTIMODAL FREIGHT',
    p1Sub3_1: 'Container drayage and heavy trucking from seaports/ICDs to customer warehouses.',
    p1Sub3_2: 'Full truckload (FTL), road consolidation (LTL), and cargo distribution from seaports and international airports to industrial zones and distribution centers across Vietnam.',
    p1Sub3_3: 'Cross-border trucking connecting Vietnam with China, Laos, Cambodia, and Thailand.',
    p1Sub4Title: '🚂 RAIL FREIGHT',
    p1Sub4_1: 'Connecting major domestic railway cargo terminals across Vietnam.',
    p1Sub4_2: 'International intermodal freight train service (Vietnam - China - Europe / Eurasia Rail Corridor).',
    p1Sub4_3: 'Optimized transit times compared to ocean freight and lower costs than air cargo.',

    // Pillar 2
    p2Badge: 'PILLAR 2',
    p2Title: 'WAREHOUSING & DISTRIBUTION',
    p2Desc: 'Storage and supply chain fulfillment solutions for manufacturers, retailers & e-Commerce',
    p2Sub1Title: '🏭 STANDARD WAREHOUSE MANAGEMENT',
    p2Sub1_1: '<strong>General Warehouse:</strong> Modern storage for FMCG, retail goods and industrial raw materials.',
    p2Sub1_2: '<strong>Cold / Chill Storage:</strong> Temperature-controlled storage for seafood, food & pharma (-20°C to +8°C).',
    p2Sub1_3: '<strong>Bonded Warehouse:</strong> Storage for uncleared customs goods and international transit shipments.',
    p2Sub1_4: '<strong>CFS (Container Freight Station):</strong> Consolidation, deconsolidation & sorting for LCL import/export.',
    p2Sub2Title: '📦 VALUE-ADDED SERVICES (VAS)',
    p2Sub2_1: 'Packaging, secondary labeling, sorting, inspection, and ISPM 15 standard palletizing.',
    p2Sub2_2: 'Smart WMS inventory management with real-time barcode & QR Code scanning.',
    p2Sub2_3: 'e-Commerce Fulfillment Services: Pick & Pack, order dispatch and cash-on-delivery (COD).',

    // Pillar 3
    p3Badge: 'PILLAR 3',
    p3Title: 'FREIGHT FORWARDING & CUSTOMS CLEARANCE',
    p3Desc: 'Comprehensive customs legal compliance, paperwork, and smooth cargo clearance',
    p3Sub1Title: '📑 CUSTOMS BROKERAGE SERVICES',
    p3Sub1_1: '<strong>Electronic EDI Customs Declaration:</strong> For Commercial, Processing, Export Manufacturing, EPE and Courier.',
    p3Sub1_2: '<strong>Specialized Permits:</strong> Quality inspection, animal/plant quarantine, and conformity certifications.',
    p3Sub1_3: '<strong>Certificate of Origin (C/O):</strong> Issuing Forms A, B, D, E, AK, AJ, VJ, EUR.1 for 0% preferential tariffs.',
    p3Sub1_4: '<strong>Customs Consultancy:</strong> HS code classification, tariff computation and accurate customs valuation.',
    p3Sub2Title: '🛡️ FREIGHT FORWARDING & DOCUMENTATION',
    p3Sub2_1: 'Issuance of official international bills of lading: House B/L (HBL) & House AWB (HAWB).',
    p3Sub2_2: 'Professional Shipping Agency representation and dedicated container fleet management.',
    p3Sub2_3: 'Electronic manifest filing and multimodal transit documentation.',

    // Pillar 4
    p4Badge: 'PILLAR 4',
    p4Title: '3PL / 4PL SUPPLY CHAIN & SPECIALIZED LOGISTICS',
    p4Desc: 'Turnkey, high-complexity logistics engineered for industry-specific demands',
    p4Sub1Title: '🔄 3PL / 4PL SUPPLY CHAIN INTEGRATION',
    p4Sub1_1: 'End-to-end integration: raw material procurement, warehousing, customs clearance to final delivery.',
    p4Sub1_2: 'Control Tower model providing complete visibility and performance analytics.',
    p4Sub2Title: '🏗️ PROJECT CARGO & BREAKBULK',
    p4Sub2_1: 'Heavy-lift, oversized and out-of-gauge (OOG / Breakbulk) industrial plant machinery transport.',
    p4Sub2_2: 'Renewable energy logistics: Wind turbines, transformer stations, solar power equipment.',
    p4Sub3Title: '⚓ PORT & INLAND CONTAINER DEPOT (ICD)',
    p4Sub3_1: 'Operation and stevedoring at seaports and inland waterway container terminals.',
    p4Sub3_2: 'Container depot services: handling, surveying, washing, and IICL standard repairs.',

    // Pillar 5
    p5Badge: 'PILLAR 5',
    p5Title: 'MATERIAL SUPPLY & INDUSTRIAL MACHINERY PROCUREMENT',
    p5Desc: 'Comprehensive multi-industry raw material supply and turnkey industrial machinery & equipment procurement',
    p5Sub1Title: '🏗️ MULTI-INDUSTRY RAW MATERIALS & SUPPLIES',
    p5Sub1_1: '<strong>Construction & Infrastructure:</strong> Supplying a wide range of materials and raw supplies for construction and structural engineering.',
    p5Sub1_2: '<strong>Manufacturing Inputs:</strong> Providing raw materials for diverse manufacturing industries, textiles, footwear, and components.',
    p5Sub1_3: '<strong>Healthcare & Medical:</strong> Medical-grade supplies, laboratory chemicals, and certified personal protective equipment (PPE).',
    p5Sub1_4: '<strong>Food Industry Materials:</strong> Certified food ingredients, additives, and specialized protective packaging materials.',
    p5Sub2Title: '⚙️ INDUSTRIAL MACHINERY & EPC PROCUREMENT',
    p5Sub2_1: '<strong>Turnkey Equipment Contracting:</strong> Supplying modern machinery and integrated production lines tailored to business operations.',
    p5Sub2_2: '<strong>Heavy & Precision Machinery:</strong> Importing and delivering precision CNC machines, heavy industrial apparatus, and lifting gear.',
    p5Sub2_3: '<strong>Customized Machinery:</strong> Tailored equipment procurement strictly adhering to specific engineering specifications and client demands.',
    p5Sub3Title: '🛡️ QUALITY COMMITMENT & TIMELY DELIVERY',
    p5Sub3_1: '<strong>Certified High Quality:</strong> Committed to 100% top-grade equipment with full international CO/CQ certification.',
    p5Sub3_2: '<strong>Strict Schedule Adherence:</strong> Guaranteed on-time delivery, professional commissioning, and seamless project execution.',
    p5Sub3_3: '<strong>Maximum Cost Efficiency:</strong> Complete turnkey procurement delivering optimal CAPEX savings and long-term operational ROI.',

    // Stats
    statUpdating: 'Updating',
    stat1Caption: 'LOGISTICS SPECIALISTS',
    stat2Caption: 'OFFICES & OPERATING HUBS',
    stat3Caption: 'TONS AIR FREIGHT / YEAR',
    stat4Caption: 'TEUS CONTAINER / YEAR',

    // Calculator
    calcBadge: 'AUTOMATED RATE ESTIMATOR',
    calcTitle: 'ESTIMATE FREIGHT & REQUEST FORMAL QUOTE',
    calcDesc: 'Get transparent international freight calculations with guaranteed vessel space & on-time transit.',
    calcParamsTitle: 'Your Shipment Specifications',
    calcOriginLabel: 'Port / Airport of Origin:',
    calcDestLabel: 'Port / Airport of Destination:',
    calcWeightLabel: 'Total Gross Weight (KG):',
    calcVolumeLabel: 'Total Volume (CBM):',
    calcCargoLabel: 'Cargo Classification:',
    calcAutoQuoteTitle: 'AUTOMATED ROUTE FREIGHT ESTIMATE',
    calcEstTotal: 'Estimated All-In Freight:',
    calcBaseCost: 'Base Ocean/Air Freight:',
    calcFuelCost: 'Bunker/Fuel Surcharge:',
    calcInsuranceCost: 'All-Risk Insurance:',
    calcCustomsCost: 'Customs Clearance Fee:',
    calcBookBtn: 'BOOK SPACE & REQUEST FORMAL QUOTE',

    // Footer
    footerCopyright: 'Copyright © 2026 <strong>PULLMAN CONNECT CORPORATION.</strong> All rights reserved.',
    footerHeadOffice: '🏠 <strong>HEAD OFFICE</strong>: 152 Nguyen Van Dau, Tan Dinh, Ho Chi Minh City, Vietnam',
    footerEmail: '✉️ <strong>Operations Email</strong>: <a href="mailto:pullmanconnect35@gmail.com" style="color:#ffffff; text-decoration: underline;">pullmanconnect35@gmail.com</a>',
    footerPhone: '📞 <strong>Phone</strong>: <a href="tel:0942512234" style="color:#ffffff; text-decoration: underline;">(+84) 942512234 (Mr Cuong)</a> | 📠 <strong>Fax</strong>: (Updating)',
    footerAssociation: 'Official Member of Vietnam Logistics Association (VLA), IATA, FIATA, WCA ID: #88241.',
    footerMoit: '✓ REGISTERED WITH MINISTRY OF INDUSTRY AND TRADE',

    // Floating Widget & Toast
    floatZalo: 'Chat Zalo (Mr Cuong)',
    floatHotline: 'Hotline: 0942512234 (Mr Cuong)',
    floatWhatsapp: 'WhatsApp (Global)',
    floatEmailQuote: 'Instant Quote (Email)',
    toastLangSwitched: 'Switched language to: English'
  },

  cn: {
    label: '中文',
    // Header & Nav
    hotline: '服务热线: 0942512234 (Mr Cường)',
    navHome: '🏠 首页',
    navAbout: '关于我们 ▾',
    navAboutIntro: '关于 Pullman Connect',
    navAboutVision: '企业愿景 - 使命 - 核心价值观',
    navAboutCommit: '高品质服务承诺',
    navAboutNetwork: '全球服务网络',
    navServices: '核心物流服务 ▾',
    navPillar1: '1. 综合运输服务 (Transportation)',
    navPillar2: '2. 仓储与供应链配送 (Warehousing)',
    navPillar3: '3. 国际货代与报关清关 (Forwarding & Customs)',
    navPillar4: '4. 3PL/4PL 供应链与特种工程物流',
    navPillar5: '5. 原材料物资与工业设备总包 (Supply & Equipment)',
    navCalculator: '运费估算',
    navContact: '联系我们',
    navQuoteBtn: '获取运费报价 (询价)',

    // Slider
    slide1Heading: '全球海运物流服务',
    slide1Sub: '- 整箱 FCL / - 拼箱 LCL 直拼',
    slide1Btn1: '查看海运服务',
    slide1Btn2: '获取运费报价',

    slide2Heading: '全球航空货运代理',
    slide2Sub: '- 主拼包舱 / - 特种冷链 (DG, 医药) / - 国际快递',
    slide2Btn1: '查看空运服务',
    slide2Btn2: '获取运费报价',

    slide3Heading: '公路及多式联运',
    slide3Sub: '- 跨境卡航 / - 自营集装箱车队 / - 中欧班列',
    slide3Btn1: '查看公路运输',
    slide3Btn2: '获取运费报价',

    slide4Heading: '工业物资与机械设备总包',
    slide4Sub: '- 工业原材料集采 / - 智能电气自控 / - 食品加工与医疗设备',
    slide4Btn1: '查看物资目录',
    slide4Btn2: '获取总包报价',

    // Pillars Header
    pillarsBadge: '全方位物流生态系统',
    pillarsTitle: '五大核心服务与 <span>供应链支柱</span>',
    pillarsDesc: 'Pullman Connect 提供全流程供应链闭环服务，有效降低物流成本，保障从源头工厂到终端客户的货物通畅流转。',

    // Pillar 1
    p1Badge: '支柱一',
    p1Title: '综合运输服务 (TRANSPORTATION SERVICES)',
    p1Desc: '连接国际与越南国内贸易网络的核心基石业务',
    p1Sub1Title: '🚢 国际海运 (OCEAN FREIGHT)',
    p1Sub1_1: '国际海运集装箱进出口及越南南北沿海内贸集装箱运输。',
    p1Sub1_2: '海运散货拼箱 (LCL) 直拼集运与整箱 (FCL) 订舱服务。',
    p1Sub1_3: '散杂货、重大件工程设备租船与程租/期租业务。',
    p1Sub2Title: '✈️ 航空货运 (AIR FREIGHT)',
    p1Sub2_1: '航空主拼服务、航空公司客货机包舱及总销售代理 (GSA)。',
    p1Sub2_2: '国际特快专递与国内特快急件派送。',
    p1Sub2_3: '特种货物运输：危险品 (DG)、鲜活水产、恒温医药及疫苗冷链。',
    p1Sub3Title: '🚛 公路运输与多式联运',
    p1Sub3_1: '港口/内陆堆场至客户工厂保税集装箱拖车集卡运输。',
    p1Sub3_2: '整车运输 (FTL)、公路拼车集运 (LTL)，以及从海港和国际机场至越南全境各工业园区与分拨中心的配送服务。',
    p1Sub3_3: '连接越南与中国、老挝、柬埔寨、泰国的跨境卡车陆运。',
    p1Sub4Title: '🚂 铁路货运 (RAIL FREIGHT)',
    p1Sub4_1: '连接越南南北重要铁路货运站枢纽。',
    p1Sub4_2: '国际铁路联运专线（越南 - 中国 - 欧洲中欧班列）。',
    p1Sub4_3: '兼具海运经济性与空运高时效性的高性价比选择。',

    // Pillar 2
    p2Badge: '支柱二',
    p2Title: '仓储与供应链配送 (WAREHOUSING & DISTRIBUTION)',
    p2Desc: '为制造型企业、大型商超及跨境电商打造的高标准仓配一体化方案',
    p2Sub1Title: '🏭 标准仓储与库内管理',
    p2Sub1_1: '<strong>普通仓库 (General Warehouse):</strong> 消费品、电子产品及工业原材料安全存储。',
    p2Sub1_2: '<strong>冷链/恒温库 (Cold Storage):</strong> 冷冻海鲜、果蔬食品及医药冷藏（-20°C 至 +8°C）。',
    p2Sub1_3: '<strong>保税仓库 (Bonded Warehouse):</strong> 暂未完税进口货物、转口贸易货物保税仓储。',
    p2Sub1_4: '<strong>CFS 拼箱仓库:</strong> 进出口拼箱货物集拼、拆箱与理货中心。',
    p2Sub2Title: '📦 增值物流服务 (VAS)',
    p2Sub2_1: '二次包装、加贴中文/外文标签、分拣质检、ISPM 15 标准打托缠膜。',
    p2Sub2_2: '智能 WMS 系统库存精细化管理，支持条形码与二维码实时盘点。',
    p2Sub2_3: '跨境电商一件代发 (e-Commerce Fulfillment): 拣货打包与代收货款 (COD)。',

    // Pillar 3
    p3Badge: '支柱三',
    p3Title: '国际货代与报关清关 (FREIGHT FORWARDING & CUSTOMS)',
    p3Desc: '全流程进出口法务合规申报，确保货物高效快速通关',
    p3Sub1Title: '📑 进出口代理报关服务',
    p3Sub1_1: '<strong>电子 EDI 报关:</strong> 一般贸易、进料加工、来料加工、加工贸易及快递监管申报。',
    p3Sub1_2: '<strong>商检与专案许可:</strong> 动植物检疫、法检商检、产品认证及合规批文代办。',
    p3Sub1_3: '<strong>原产地证 (C/O):</strong> 申请 Form A/B/D/E/AK/AJ/VJ/EUR.1 享 0% 优惠关税待遇。',
    p3Sub1_4: '<strong>海关咨询:</strong> HS 编码智能归类、进出口关税核算与审价指导。',
    p3Sub2Title: '🛡️ 货运代理与官方单证',
    p3Sub2_1: '签发正规国际货运分提单 (HBL) 及航空分运单 (HAWB)。',
    p3Sub2_2: '专业船舶代理 (Shipping Agency) 及自备箱集装箱运营管理。',
    p3Sub2_3: '电子舱单申报及多式联运全程单证服务。',

    // Pillar 4
    p4Badge: '支柱四',
    p4Title: '3PL / 4PL 供应链与特种工程物流',
    p4Desc: '根据行业特定需求提供高复杂度、高附加值的一站式交钥匙物流服务',
    p4Sub1Title: '🔄 3PL / 4PL 一体化供应链',
    p4Sub1_1: '从原材料采购、干线运输、库内存储、进出口报关到终端派送的全链条打通。',
    p4Sub1_2: 'Control Tower 数字化控制塔全景可视化与关键指标监控。',
    p4Sub2Title: '🏗️ 重大件与工程项目物流',
    p4Sub2_1: '大型成套工业设备、超重超限 (OOG / Breakbulk) 货物专业运输。',
    p4Sub2_2: '新能源项目物流：风电风机叶片、变压器、光伏电站成套设备运输。',
    p4Sub3Title: '⚓ 港口码头与内陆集装箱堆场 (ICD)',
    p4Sub3_1: '海港及内河港口码头装卸、堆存与水水中转运营。',
    p4Sub3_2: '集装箱堆场 (Depot): 吊装堆存、验箱、洗箱及 IICL 标准修箱服务。',

    // Pillar 5
    p5Badge: '支柱五',
    p5Title: '原材料物资供应与工业机械设备总包 (SUPPLY & EQUIPMENT)',
    p5Desc: '提供多行业工业原材料物资集采及高品质工业机械设备交钥匙总包供应服务',
    p5Sub1Title: '🏗️ 跨行业工业原材料与物资供应',
    p5Sub1_1: '<strong>建筑与工程物资:</strong> 为建筑工程、机械制造与基础设施提供全套优质原材料和施工物资。',
    p5Sub1_2: '<strong>生产制造原材料:</strong> 为工业制造、纺织服装、鞋业及电子元器件提供稳定原材料集采。',
    p5Sub1_3: '<strong>医疗与健康物资:</strong> 提供医疗防护装备 (PPE)、实验室试剂及符合国际医疗标准的耗材物资。',
    p5Sub1_4: '<strong>食品工业原料:</strong> 供应合规食品添加剂、生产配料及食品级保鲜包装材料。',
    p5Sub2Title: '⚙️ 工业机械与智能设备总承包',
    p5Sub2_1: '<strong>成套设备总包:</strong> 提供现代化工业机械设备及自动化生产线交钥匙工程，赋能企业生产运营。',
    p5Sub2_2: '<strong>重型工业设备:</strong> 进口并交付高精度数控机床、液压冲压设备、重型吊装及厂房装卸机械。',
    p5Sub2_3: '<strong>定制化设备采购:</strong> 严格依照客户特定工艺图纸与产能需求提供定向设备采购与调试。',
    p5Sub3Title: '🛡️ 高品质承诺与交付保障',
    p5Sub3_1: '<strong>高品质设备保证:</strong> 承诺提供 100% 正品优质设备，附带完整原厂 CO/CQ 质量检测证书。',
    p5Sub3_2: '<strong>确保工期进度:</strong> 严格把控生产、运输、清关与现场安装节点，确保项目按时投产交付。',
    p5Sub3_3: '<strong>降本增效保障:</strong> 一体化总包集采方案，有效降低客户投资成本，保障长期运营效益。',

    // Stats
    statUpdating: '更新中',
    stat1Caption: '专业物流人才',
    stat2Caption: '办事处及运营中心',
    stat3Caption: '年空运处理吨位',
    stat4Caption: '年集装箱承运 TEU',

    // Calculator
    calcBadge: '自动运费估算系统',
    calcTitle: '国际运费试算与询价申请 (ENQUIRY)',
    calcDesc: '获取透明清晰的国际货运预估费用，享受舱位保障与准时交付承诺。',
    calcParamsTitle: '填写您的货物参数',
    calcOriginLabel: '起运港 / 起运机场 (Origin):',
    calcDestLabel: '目的港 /目的机场 (Dest):',
    calcWeightLabel: '货物毛重 (Gross Weight - KG):',
    calcVolumeLabel: '货物体积 (Volume - CBM):',
    calcCargoLabel: '货物类型分类:',
    calcAutoQuoteTitle: '航线自动运费预估',
    calcEstTotal: '预估全包总运费:',
    calcBaseCost: '基础海/空运费:',
    calcFuelCost: '燃油附加费:',
    calcInsuranceCost: '全险保费:',
    calcCustomsCost: '报关服务费:',
    calcBookBtn: '立即订舱并获取正式报价单',

    // Footer
    footerCopyright: '版权所有 © 2026 <strong>PULLMAN CONNECT CORPORATION.</strong> 保留所有权利。',
    footerHeadOffice: '🏠 <strong>总部地址 (HEAD OFFICE)</strong>: 152 Nguyen Van Dau, Tan Dinh, Ho Chi Minh City, Vietnam',
    footerEmail: '✉️ <strong>运营邮箱</strong>: <a href="mailto:pullmanconnect35@gmail.com" style="color:#ffffff; text-decoration: underline;">pullmanconnect35@gmail.com</a>',
    footerPhone: '📞 <strong>联系电话</strong>: <a href="tel:0942512234" style="color:#ffffff; text-decoration: underline;">0942512234 (Mr Cường)</a> | 📠 <strong>传真</strong>: (更新中)',
    footerAssociation: '越南物流企业协会 (VLA), IATA, FIATA, WCA 官方认证会员 ID: #88241。',
    footerMoit: '✓ 已在越南工贸部完成合规备案',

    // Floating Widget & Toast
    floatZalo: 'Zalo 在线咨询 (Mr Cường)',
    floatHotline: '服务热线: 0942512234 (Mr Cường)',
    floatWhatsapp: 'WhatsApp (国际客服)',
    floatEmailQuote: '快速询价 (邮件)',
    toastLangSwitched: '已切换至语言: 中文 (Chinese)'
  }
};

/**
 * Switch Website Language Function
 * Updates ALL text across the entire DOM, selects, placeholders, and stores state in localStorage.
 */
function applyLanguage(lang) {
  const currentLang = I18N_DICTIONARY[lang] ? lang : 'vi';
  const t = I18N_DICTIONARY[currentLang];

  // Save to localStorage
  localStorage.setItem('pullman_language', currentLang);

  // Update current language indicator badge
  const labelEl = document.getElementById('currentLangLabel');
  if (labelEl) {
    labelEl.textContent = t.label;
  }

  // Update elements with data-i18n
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t[key];
      } else {
        el.innerHTML = t[key];
      }
    }
  });

  // Update specific slider texts if active
  const slide1Head = document.querySelector('.slide-sea .bee-slide-heading');
  const slide1Sub = document.querySelector('.slide-sea .bee-slide-subheading');
  if (slide1Head) slide1Head.textContent = t.slide1Heading;
  if (slide1Sub) slide1Sub.textContent = t.slide1Sub;

  const slide2Head = document.querySelector('.slide-air .bee-slide-heading');
  const slide2Sub = document.querySelector('.slide-air .bee-slide-subheading');
  if (slide2Head) slide2Head.textContent = t.slide2Heading;
  if (slide2Sub) slide2Sub.textContent = t.slide2Sub;

  const slide3Head = document.querySelector('.slide-road .bee-slide-heading');
  const slide3Sub = document.querySelector('.slide-road .bee-slide-subheading');
  if (slide3Head) slide3Head.textContent = t.slide3Heading;
  if (slide3Sub) slide3Sub.textContent = t.slide3Sub;

  const slide4Head = document.querySelector('.slide-supply .bee-slide-heading');
  const slide4Sub = document.querySelector('.slide-supply .bee-slide-subheading');
  if (slide4Head) slide4Head.textContent = t.slide4Heading;
  if (slide4Sub) slide4Sub.textContent = t.slide4Sub;

  // Show Toast
  if (typeof showToast === 'function') {
    showToast(t.toastLangSwitched, 'success');
  }
}

// Global expose
window.switchLanguage = function(lang) {
  applyLanguage(lang);
};

// Initialize language from localStorage on load & set up toggle listeners
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('pullman_language') || 'vi';
  applyLanguage(savedLang);

  const langMenu = document.getElementById('beeLangMenu');
  if (langMenu) {
    langMenu.addEventListener('click', (e) => {
      if (!e.target.closest('.bee-lang-dropdown-list')) {
        langMenu.classList.toggle('active');
      }
    });

    document.addEventListener('click', (e) => {
      if (!langMenu.contains(e.target)) {
        langMenu.classList.remove('active');
      }
    });
  }
});
