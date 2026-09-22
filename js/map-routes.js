/**
 * PULLMAN CONNECT - GLOBAL INTERACTIVE TRADE ROUTE MAP
 * High-tech Canvas Visualization of Global Air & Maritime Corridors (Vietnamese Supported)
 */

class GlobalTradeMap {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.tooltip = document.getElementById('mapHubTooltip');
    this.filterMode = 'all'; // 'all', 'air', 'sea'

    // Logistics Hubs with Coordinates (normalized 0 to 1)
    this.hubs = [
      { id: 'SGN', name: 'TP. Hồ Chí Minh (SGN / Tân Cảng Cát Lái)', x: 0.78, y: 0.52, type: 'dual', flights: '28 chuyến/ngày', teu: '8.4M TEU', status: 'Hoạt động 100%' },
      { id: 'SIN', name: 'Singapore (SIN / Cảng PSA)', x: 0.77, y: 0.58, type: 'dual', flights: '38 chuyến/ngày', teu: '37.5M TEU', status: 'Hoạt động 100%' },
      { id: 'PVG', name: 'Thượng Hải (PVG / Cảng Dương Sơn)', x: 0.81, y: 0.42, type: 'dual', flights: '45 chuyến/ngày', teu: '47.3M TEU', status: 'Hoạt động 100%' },
      { id: 'NRT', name: 'Tokyo (NRT / Cảng Yokohama)', x: 0.86, y: 0.39, type: 'dual', flights: '32 chuyến/ngày', teu: '3.1M TEU', status: 'Hoạt động 100%' },
      { id: 'LAX', name: 'Los Angeles (LAX / Long Beach)', x: 0.19, y: 0.38, type: 'dual', flights: '40 chuyến/ngày', teu: '19.0M TEU', status: 'Hoạt động 100%' },
      { id: 'JFK', name: 'New York (JFK / Cảng Newark)', x: 0.28, y: 0.35, type: 'dual', flights: '35 chuyến/ngày', teu: '8.9M TEU', status: 'Hoạt động 100%' },
      { id: 'FRA', name: 'Frankfurt (FRA CargoCity)', x: 0.51, y: 0.30, type: 'air', flights: '50 chuyến/ngày', teu: 'Trung tâm hàng không', status: 'Hoạt động 100%' },
      { id: 'RTM', name: 'Rotterdam (Đại Cảng RTM)', x: 0.49, y: 0.28, type: 'sea', flights: '12 chuyến/ngày', teu: '14.5M TEU', status: 'Hoạt động 100%' },
      { id: 'DXB', name: 'Dubai (DXB / Cảng Jebel Ali)', x: 0.63, y: 0.44, type: 'dual', flights: '42 chuyến/ngày', teu: '14.0M TEU', status: 'Hoạt động 100%' },
      { id: 'LHR', name: 'London (LHR Gateway)', x: 0.47, y: 0.28, type: 'air', flights: '28 chuyến/ngày', teu: 'Trung tâm hàng không', status: 'Hoạt động 100%' },
      { id: 'GRU', name: 'São Paulo (GRU / Cảng Santos)', x: 0.33, y: 0.74, type: 'dual', flights: '18 chuyến/ngày', teu: '4.8M TEU', status: 'Hoạt động 100%' },
      { id: 'SYD', name: 'Sydney (SYD / Cảng Botany)', x: 0.89, y: 0.78, type: 'dual', flights: '16 chuyến/ngày', teu: '2.7M TEU', status: 'Hoạt động 100%' }
    ];

    // Air and Maritime Trade Routes
    this.routes = [
      // Air Routes (Tuyến hàng không hỏa tốc)
      { from: 'SGN', to: 'LAX', type: 'air', color: '#00d2ff', speed: 0.0035, progress: 0.2 },
      { from: 'SGN', to: 'FRA', type: 'air', color: '#00d2ff', speed: 0.0032, progress: 0.6 },
      { from: 'SGN', to: 'SIN', type: 'air', color: '#00d2ff', speed: 0.005, progress: 0.15 },
      { from: 'PVG', to: 'LAX', type: 'air', color: '#00d2ff', speed: 0.0035, progress: 0.1 },
      { from: 'PVG', to: 'FRA', type: 'air', color: '#00d2ff', speed: 0.003, progress: 0.4 },
      { from: 'SIN', to: 'DXB', type: 'air', color: '#00d2ff', speed: 0.004, progress: 0.7 },
      { from: 'DXB', to: 'LHR', type: 'air', color: '#00d2ff', speed: 0.0038, progress: 0.25 },
      { from: 'FRA', to: 'JFK', type: 'air', color: '#00d2ff', speed: 0.0032, progress: 0.8 },
      { from: 'NRT', to: 'LAX', type: 'air', color: '#00d2ff', speed: 0.0036, progress: 0.55 },
      { from: 'JFK', to: 'GRU', type: 'air', color: '#00d2ff', speed: 0.0034, progress: 0.65 },
      { from: 'SIN', to: 'SYD', type: 'air', color: '#00d2ff', speed: 0.0032, progress: 0.3 },

      // Maritime Sea Lanes (Tuyến đường biển quốc tế)
      { from: 'SGN', to: 'LAX', type: 'sea', color: '#ff8c00', speed: 0.0016, progress: 0.35 },
      { from: 'SGN', to: 'RTM', type: 'sea', color: '#ff8c00', speed: 0.0017, progress: 0.7 },
      { from: 'PVG', to: 'RTM', type: 'sea', color: '#ff8c00', speed: 0.0015, progress: 0.2 },
      { from: 'SIN', to: 'RTM', type: 'sea', color: '#ff8c00', speed: 0.0018, progress: 0.6 },
      { from: 'PVG', to: 'LAX', type: 'sea', color: '#ff8c00', speed: 0.0014, progress: 0.85 },
      { from: 'DXB', to: 'RTM', type: 'sea', color: '#ff8c00', speed: 0.002, progress: 0.5 },
      { from: 'RTM', to: 'JFK', type: 'sea', color: '#ff8c00', speed: 0.0022, progress: 0.1 },
      { from: 'SIN', to: 'SYD', type: 'sea', color: '#ff8c00', speed: 0.0017, progress: 0.75 }
    ];

    this.hoveredHub = null;
    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize());

    // Mouse hover detection
    this.canvas.addEventListener('mousemove', (e) => this.handleMouseMove(e));
    this.canvas.addEventListener('mouseleave', () => this.handleMouseLeave());

    // Filter buttons
    const filterBtns = document.querySelectorAll('.map-filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.filterMode = btn.dataset.filter || 'all';
      });
    });

    this.animate();
  }

  resize() {
    const rect = this.canvas.parentElement.getBoundingClientRect();
    this.width = rect.width;
    this.height = Math.max(420, rect.height || 480);
    this.canvas.width = this.width * window.devicePixelRatio;
    this.canvas.height = this.height * window.devicePixelRatio;
    this.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  }

  handleMouseMove(e) {
    const rect = this.canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    let found = null;
    for (const hub of this.hubs) {
      const hubX = hub.x * this.width;
      const hubY = hub.y * this.height;
      const dist = Math.hypot(mouseX - hubX, mouseY - hubY);
      if (dist < 18) {
        found = { ...hub, screenX: hubX, screenY: hubY };
        break;
      }
    }

    this.hoveredHub = found;
    this.updateTooltip(found);
  }

  handleMouseLeave() {
    this.hoveredHub = null;
    if (this.tooltip) this.tooltip.style.display = 'none';
  }

  updateTooltip(hub) {
    if (!this.tooltip) return;
    if (hub) {
      this.tooltip.innerHTML = `
        <div class="tooltip-title">${hub.name}</div>
        <div class="tooltip-stats">✈️ ${hub.flights} | 🚢 ${hub.teu}</div>
        <div style="font-size: 0.72rem; color: #10b981; margin-top: 2px;">● Trạng thái: ${hub.status}</div>
      `;
      this.tooltip.style.display = 'block';
      this.tooltip.style.left = `${hub.screenX}px`;
      this.tooltip.style.top = `${hub.screenY - 12}px`;
    } else {
      this.tooltip.style.display = 'none';
    }
  }

  drawWorldGrid() {
    const ctx = this.ctx;
    ctx.strokeStyle = 'rgba(0, 128, 255, 0.05)';
    ctx.lineWidth = 1;

    const stepX = this.width / 12;
    for (let x = 0; x < this.width; x += stepX) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, this.height);
      ctx.stroke();
    }

    const stepY = this.height / 8;
    for (let y = 0; y < this.height; y += stepY) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(this.width, y);
      ctx.stroke();
    }
  }

  drawContinents() {
    const ctx = this.ctx;
    ctx.fillStyle = 'rgba(0, 210, 255, 0.09)';

    const landmasses = [
      { cx: 0.22, cy: 0.32, rx: 0.12, ry: 0.14 },
      { cx: 0.32, cy: 0.68, rx: 0.08, ry: 0.18 },
      { cx: 0.50, cy: 0.28, rx: 0.08, ry: 0.10 },
      { cx: 0.52, cy: 0.55, rx: 0.09, ry: 0.18 },
      { cx: 0.72, cy: 0.35, rx: 0.16, ry: 0.16 },
      { cx: 0.78, cy: 0.56, rx: 0.08, ry: 0.08 },
      { cx: 0.85, cy: 0.75, rx: 0.08, ry: 0.10 }
    ];

    landmasses.forEach(land => {
      ctx.beginPath();
      ctx.ellipse(land.cx * this.width, land.cy * this.height, land.rx * this.width, land.ry * this.height, 0, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  drawRoutes() {
    const ctx = this.ctx;

    this.routes.forEach(route => {
      if (this.filterMode !== 'all' && route.type !== this.filterMode) return;

      const fromHub = this.hubs.find(h => h.id === route.from);
      const toHub = this.hubs.find(h => h.id === route.to);
      if (!fromHub || !toHub) return;

      const x1 = fromHub.x * this.width;
      const y1 = fromHub.y * this.height;
      const x2 = toHub.x * this.width;
      const y2 = toHub.y * this.height;

      const midX = (x1 + x2) / 2;
      const midY = (y1 + y2) / 2 - (route.type === 'air' ? 50 : 20);

      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.quadraticCurveTo(midX, midY, x2, y2);

      if (route.type === 'air') {
        ctx.strokeStyle = 'rgba(0, 210, 255, 0.35)';
        ctx.setLineDash([4, 4]);
        ctx.lineWidth = 1.5;
      } else {
        ctx.strokeStyle = 'rgba(255, 140, 0, 0.4)';
        ctx.setLineDash([2, 5]);
        ctx.lineWidth = 2;
      }
      ctx.stroke();
      ctx.setLineDash([]);

      route.progress = (route.progress + route.speed) % 1;
      const t = route.progress;
      const curX = Math.pow(1 - t, 2) * x1 + 2 * (1 - t) * t * midX + Math.pow(t, 2) * x2;
      const curY = Math.pow(1 - t, 2) * y1 + 2 * (1 - t) * t * midY + Math.pow(t, 2) * y2;

      ctx.beginPath();
      ctx.arc(curX, curY, route.type === 'air' ? 4 : 3.5, 0, Math.PI * 2);
      ctx.fillStyle = route.type === 'air' ? '#00d2ff' : '#ff6600';
      ctx.shadowColor = route.type === 'air' ? '#00d2ff' : '#ff6600';
      ctx.shadowBlur = 10;
      ctx.fill();
      ctx.shadowBlur = 0;
    });
  }

  drawHubs() {
    const ctx = this.ctx;

    this.hubs.forEach(hub => {
      const x = hub.x * this.width;
      const y = hub.y * this.height;
      const isHovered = this.hoveredHub && this.hoveredHub.id === hub.id;

      ctx.beginPath();
      ctx.arc(x, y, isHovered ? 14 : 9, 0, Math.PI * 2);
      ctx.fillStyle = hub.type === 'sea' ? 'rgba(255, 140, 0, 0.2)' : 'rgba(0, 210, 255, 0.2)';
      ctx.fill();

      ctx.beginPath();
      ctx.arc(x, y, isHovered ? 6 : 4, 0, Math.PI * 2);
      ctx.fillStyle = isHovered ? '#ffffff' : (hub.type === 'sea' ? '#ff8c00' : '#00d2ff');
      ctx.shadowColor = isHovered ? '#ffffff' : '#00d2ff';
      ctx.shadowBlur = isHovered ? 16 : 8;
      ctx.fill();
      ctx.shadowBlur = 0;

      ctx.font = '600 10px "Space Grotesk", sans-serif';
      ctx.fillStyle = isHovered ? '#ffffff' : 'rgba(255, 255, 255, 0.75)';
      ctx.fillText(hub.id, x + 8, y + 3);
    });
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.drawWorldGrid();
    this.drawContinents();
    this.drawRoutes();
    this.drawHubs();

    requestAnimationFrame(() => this.animate());
  }
}

window.GlobalTradeMap = GlobalTradeMap;
