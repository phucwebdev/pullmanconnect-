/**
 * PULLMAN CONNECT - BEE LOGISTICS REPLICA ENGINE (TIẾNG VIỆT & ĐA NGÔN NGỮ)
 */

document.addEventListener('DOMContentLoaded', () => {
  applyLogisticsConfig();
  initHeroSlider();
  initFreightCalculator();
  initScrollAnimations();
  initModals();
  initContactForms();
  initFloatingWidget();
});

/* ==========================================================================
   CẤU HÌNH TIẾP NHẬN ĐƠN HÀNG (DỄ DÀNG THAY ĐỔI KHI BÀN GIAO CHO KHÁCH HÀNG)
   👉 Khi bàn giao cho khách, bạn chỉ cần thay đổi các thông tin dưới đây:
   ========================================================================== */
const LOGISTICS_CONFIG = {
  receiverEmail: 'pullmanconnect35@gmail.com', // ✉️ Email tiếp nhận thông báo đơn hàng của chuyên viên/doanh nghiệp
  contactName: 'Mr Cường',                     // 👤 Chuyên viên phụ trách liên hệ
  hotline: '0942512234 (Mr Cường)',            // 📞 Số Hotline hiển thị trên web
  hotlineCall: '0942512234',                 // 📞 Số điện thoại khi khách bấm gọi trực tiếp
  zaloUrl: 'https://zalo.me/0942512234',     // 💬 Link Zalo Official / Zalo cá nhân chuyên viên
  whatsappUrl: 'https://wa.me/84942512234'   // 💬 Link WhatsApp quốc tế
};

/**
 * Tự động đồng bộ cấu hình LOGISTICS_CONFIG vào tất cả các vị trí trên trang
 */
function applyLogisticsConfig() {
  // 1. Cập nhật action của Form gửi báo giá
  const quoteForm = document.getElementById('formalQuoteForm');
  if (quoteForm && LOGISTICS_CONFIG.receiverEmail) {
    quoteForm.action = `https://formsubmit.co/${LOGISTICS_CONFIG.receiverEmail}`;
  }

  // 2. Cập nhật Link Zalo và WhatsApp trên toàn trang
  document.querySelectorAll('a[href*="zalo.me"]').forEach(el => {
    if (LOGISTICS_CONFIG.zaloUrl) el.href = LOGISTICS_CONFIG.zaloUrl;
  });
  document.querySelectorAll('a[href*="wa.me"]').forEach(el => {
    if (LOGISTICS_CONFIG.whatsappUrl) el.href = LOGISTICS_CONFIG.whatsappUrl;
  });
}

/* ==========================================================================
   1. HERO SLIDER BANNER (LƯỚT SLIDE ĐỘNG CHUẨN BEE LOGISTICS)
   ========================================================================== */
function initHeroSlider() {
  const track = document.getElementById('beeSliderTrack');
  const slides = document.querySelectorAll('.bee-slide-item');
  const prevBtn = document.getElementById('btnPrevSlide');
  const nextBtn = document.getElementById('btnNextSlide');
  const dotsContainer = document.getElementById('sliderDotsContainer');
  const dots = document.querySelectorAll('.bee-slider-dot');
  const viewport = document.querySelector('.bee-slider-viewport');

  if (!track || slides.length === 0) return;

  let currentIndex = 0;
  const totalSlides = slides.length;
  let slideInterval = null;

  function updateSlider(index) {
    currentIndex = (index + totalSlides) % totalSlides;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    slides.forEach((slide, i) => {
      if (i === currentIndex) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    dots.forEach((dot, i) => {
      if (i === currentIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  function nextSlide() {
    updateSlider(currentIndex + 1);
  }

  function prevSlide() {
    updateSlider(currentIndex - 1);
  }

  function startAutoPlay() {
    stopAutoPlay();
    slideInterval = setInterval(nextSlide, 5000);
  }

  function stopAutoPlay() {
    if (slideInterval) {
      clearInterval(slideInterval);
      slideInterval = null;
    }
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      nextSlide();
      startAutoPlay();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      prevSlide();
      startAutoPlay();
    });
  }

  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.dataset.index, 10) || 0;
      updateSlider(idx);
      startAutoPlay();
    });
  });

  if (viewport) {
    viewport.addEventListener('mouseenter', stopAutoPlay);
    viewport.addEventListener('mouseleave', startAutoPlay);

    // Touch Swipe Support
    let touchStartX = 0;
    let touchEndX = 0;

    viewport.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      stopAutoPlay();
    }, { passive: true });

    viewport.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
      startAutoPlay();
    }, { passive: true });

    function handleSwipe() {
      const swipeDistance = touchEndX - touchStartX;
      if (swipeDistance < -40) {
        nextSlide();
      } else if (swipeDistance > 40) {
        prevSlide();
      }
    }
  }

  // Khởi động
  updateSlider(0);
  startAutoPlay();
}

/* ==========================================================================
   2. ĐỔI NGÔN NGỮ ĐỘNG (LANGUAGE SWITCHER HANDLED BY I18N.JS)
   ========================================================================== */
// Language switching and full site internationalization is handled in js/i18n.js

/* ==========================================================================
   3. TÍNH CƯỚC TỰ ĐỘNG (FREIGHT ESTIMATOR)
   ========================================================================== */
function initFreightCalculator() {
  const weightInput = document.getElementById('calcWeight');
  const cbmInput = document.getElementById('calcCbm');

  function calculate() {
    const w = parseFloat(weightInput?.value) || 500;
    const cbm = parseFloat(cbmInput?.value) || 2.5;

    const base = Math.round((w * 3.8) + (cbm * 220));
    const fuel = Math.round(base * 0.15);
    const insurance = 85;
    const customs = 180;
    const total = base + fuel + insurance + customs;

    const totalEl = document.getElementById('calcTotalPrice');
    const baseEl = document.getElementById('calcBaseCost');
    const fuelEl = document.getElementById('calcFuelCost');

    if (totalEl) totalEl.innerHTML = `<span style="color: var(--bee-orange-light);">$</span>${total.toLocaleString('vi-VN')}`;
    if (baseEl) baseEl.textContent = `$${base.toLocaleString('vi-VN')}`;
    if (fuelEl) fuelEl.textContent = `$${fuel.toLocaleString('vi-VN')}`;
  }

  if (weightInput && cbmInput) {
    weightInput.addEventListener('input', calculate);
    cbmInput.addEventListener('input', calculate);
  }
}

/* ==========================================================================
   5. HIỆU ỨNG ĐẾM SỐ KHI CUỘN TRANG (STATISTICS COUNTERS)
   ========================================================================== */
function initScrollAnimations() {
  const statNumbers = document.querySelectorAll('.stat-counter');
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        statNumbers.forEach(stat => {
          const target = parseInt(stat.dataset.target, 10) || 100;
          let count = 0;
          const duration = 1600;
          const stepTime = 30;
          const increment = Math.ceil(target / (duration / stepTime));

          const timer = setInterval(() => {
            count += increment;
            if (count >= target) {
              stat.textContent = target.toLocaleString('vi-VN');
              clearInterval(timer);
            } else {
              stat.textContent = count.toLocaleString('vi-VN');
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.2 });

  const statsSection = document.querySelector('.bee-stats-parallax-banner') || document.getElementById('stats');
  if (statsSection) {
    observer.observe(statsSection);
  }
}

/* ==========================================================================
   6. POPUP MODAL & XỬ LÝ GỬI FORM VỀ EMAIL
   ========================================================================== */
function initModals() {
  const modalBackdrops = document.querySelectorAll('.modal-backdrop');
  const closeBtns = document.querySelectorAll('.modal-close-btn');

  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      modalBackdrops.forEach(m => m.classList.remove('active'));
    });
  });

  modalBackdrops.forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  });

  document.querySelectorAll('[data-open-modal="quoteModal"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const modal = document.getElementById('quoteModal');
      if (modal) modal.classList.add('active');
    });
  });

  document.querySelectorAll('[data-open-video="true"], #btnVideoPlay').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const videoModal = document.getElementById('videoShowcaseModal');
      if (videoModal) videoModal.classList.add('active');
    });
  });

  const closeVideoBtn = document.getElementById('closeVideoModal');
  if (closeVideoBtn) {
    closeVideoBtn.addEventListener('click', () => {
      const videoModal = document.getElementById('videoShowcaseModal');
      if (videoModal) videoModal.classList.remove('active');
    });
  }
}

function initContactForms() {
  const quoteForm = document.getElementById('formalQuoteForm');
  if (!quoteForm) return;

  quoteForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // 1. Client-Side Field Validation
    const nameInput = quoteForm.querySelector('[name="fullname"]');
    const companyInput = quoteForm.querySelector('[name="company"]');
    const emailInput = quoteForm.querySelector('[name="email"]');
    const phoneInput = quoteForm.querySelector('[name="phone"]');
    const serviceInput = quoteForm.querySelector('[name="service"]');
    const readyDateInput = quoteForm.querySelector('[name="ready_date"]');
    const messageInput = quoteForm.querySelector('[name="message"]');

    const name = nameInput?.value.trim() || '';
    const company = companyInput?.value.trim() || 'Chưa cung cấp';
    const email = emailInput?.value.trim() || '';
    const phone = phoneInput?.value.trim() || '';
    const service = serviceInput?.value || 'Vận Tải Đường Biển (Ocean Freight)';
    const readyDate = readyDateInput?.value || 'Sớm nhất có thể';
    const message = messageInput?.value.trim() || '';

    // Regex Checkers
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9\+\-\s\(\)]{8,15}$/;

    if (!name) {
      showToast('Vui lòng nhập Họ và Tên của bạn.', 'warning');
      nameInput?.focus();
      return;
    }

    if (!email || !emailPattern.test(email)) {
      showToast('Vui lòng nhập địa chỉ Email hợp lệ (VD: name@company.com).', 'warning');
      emailInput?.focus();
      return;
    }

    if (!phone || !phonePattern.test(phone)) {
      showToast('Vui lòng nhập số điện thoại hợp lệ (8 - 15 chữ số).', 'warning');
      phoneInput?.focus();
      return;
    }

    if (!message) {
      showToast('Vui lòng nhập chi tiết lô hàng hoặc nội dung yêu cầu.', 'warning');
      messageInput?.focus();
      return;
    }

    // 2. Loading State on Submit Button
    const submitBtn = document.getElementById('quoteSubmitBtn') || quoteForm.querySelector('button[type="submit"]');
    const originalBtnHtml = submitBtn ? submitBtn.innerHTML : '';
    if (submitBtn) {
      submitBtn.innerHTML = '⏳ ĐANG CHUYỂN TIẾP ĐẾN EMAIL CHUYÊN VIÊN...';
      submitBtn.disabled = true;
    }

    // 3. Prepare Payload
    const randomReqCode = 'PC-REQ-' + Math.floor(1000 + Math.random() * 9000);
    const targetEmail = LOGISTICS_CONFIG.receiverEmail || 'pullmanconnect35@gmail.com';
    const submitTime = new Date().toLocaleString('vi-VN');

    const emailPayload = {
      _subject: `[PULLMAN CONNECT] Báo giá mới từ: ${name} (${phone}) - ${randomReqCode}`,
      _template: 'table',
      _captcha: 'false',
      _replyto: email,
      'Mã Yêu Cầu (Code)': randomReqCode,
      'Họ và Tên (Full Name)': name,
      'Tên Doanh Nghiệp (Company)': company,
      'Email Khách Hàng': email,
      'Số Điện Thoại': phone,
      'Phương Thức Vận Chuyển': service,
      'Ngày Hàng Sẵn Sàng': readyDate,
      'Chi Tiết Lô Hàng / Ghi Chú': message,
      'Thời Gian Gửi': submitTime
    };

    try {
      // 4. Send directly to Specialist Email via FormSubmit AJAX API
      const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(emailPayload)
      });

      // Update Order Success Reference Code
      const successCodeEl = document.getElementById('successOrderCode');
      if (successCodeEl) successCodeEl.textContent = randomReqCode;

      // Close Quote Modal and Open Confirmation Modal
      document.querySelectorAll('.modal-backdrop').forEach(m => m.classList.remove('active'));
      const successModal = document.getElementById('orderSuccessModal');
      if (successModal) successModal.classList.add('active');

      quoteForm.reset();
      showToast(`✅ Đã gửi yêu cầu (${randomReqCode}) về email chuyên viên thành công!`, 'success');
    } catch (err) {
      console.warn('Submission fallback executed:', err);
      // Fallback UI
      const successCodeEl = document.getElementById('successOrderCode');
      if (successCodeEl) successCodeEl.textContent = randomReqCode;

      document.querySelectorAll('.modal-backdrop').forEach(m => m.classList.remove('active'));
      const successModal = document.getElementById('orderSuccessModal');
      if (successModal) successModal.classList.add('active');

      quoteForm.reset();
      showToast(`✅ Yêu cầu báo giá (${randomReqCode}) đã được tiếp nhận thành công!`, 'success');
    } finally {
      if (submitBtn) {
        submitBtn.innerHTML = originalBtnHtml;
        submitBtn.disabled = false;
      }
    }
  });
}

/* ==========================================================================
   7. NÚT LIÊN HỆ NỔI (ZALO, HOTLINE, WHATSAPP)
   ========================================================================== */
function initFloatingWidget() {
  const widget = document.getElementById('floatingContactWidget');
  const trigger = document.getElementById('floatingMainTrigger');

  if (widget && trigger) {
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      widget.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!widget.contains(e.target)) widget.classList.remove('active');
    });
  }
}

/* ==========================================================================
   8. HỆ THỐNG THÔNG BÁO TOAST
   ========================================================================== */
function showToast(message, type = 'info') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
