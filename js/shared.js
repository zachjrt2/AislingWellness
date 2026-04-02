// ─── SVG ICONS ────────────────────────────────────────────────────────────────
const ICONS = {
  hands:   `<path d="M8 14s-1-1-1-4V6a1 1 0 0 1 2 0v3M9 6V3a1 1 0 0 1 2 0v5M11 5a1 1 0 0 1 2 0v4M13 6a1 1 0 0 1 2 0v4c0 3-2 5-4 6a6 6 0 0 1-4-1" stroke-linecap="round" stroke-linejoin="round"/>`,
  leaf:    `<path d="M12 2C6 2 3 7 3 12c0 2 1 4 3 5M12 2c6 0 9 5 9 10 0 2-1 4-3 5M12 2v20M7 17l5-5" stroke-linecap="round" stroke-linejoin="round"/>`,
  face:    `<circle cx="12" cy="8" r="5"/><path d="M10 6.5c0 1 .9 1.5 2 1.5s2-.5 2-1.5M9 11c-2 1.5-4 4-4 7h14c0-3-2-5.5-4-7" stroke-linecap="round"/>`,
  body:    `<circle cx="12" cy="5" r="2.5"/><path d="M8 10h8M12 10v8M9 18l-1 4M15 18l1 4" stroke-linecap="round" stroke-linejoin="round"/>`,
  droplet: `<path d="M12 2C8 6 5 10 5 13a7 7 0 0 0 14 0c0-3-3-7-7-11z" stroke-linecap="round"/><path d="M9 14c.5 1.5 2 2.5 3 2.5" stroke-linecap="round"/>`,
  needle:  `<path d="M17 3l4 4-10 10-4-4L17 3zM3 21l4-4M14 7l-4 10" stroke-linecap="round" stroke-linejoin="round"/>`,
  heat:    `<path d="M12 2v4M6 6l2.8 2.8M2 12h4M6 18l2.8-2.8M12 18v4M17.2 15.2L20 18M22 12h-4M17.2 8.8L20 6" stroke-linecap="round"/><circle cx="12" cy="12" r="4"/>`,
  glow:    `<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M16.9 16.9l2.1 2.1M19.1 4.9l-2.1 2.1M7.1 16.9l-2.1 2.1" stroke-linecap="round"/>`,
  star:    `<path d="M12 2l3.1 6.3L22 9.3l-5 4.9 1.2 6.9L12 18l-6.2 3.1L7 14.2 2 9.3l6.9-1L12 2z" stroke-linejoin="round"/>`,
  calendar:`<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18" stroke-linecap="round"/>`,
  location:`<path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>`,
  phone:   `<path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 4.1 5.2 2 2 0 0 1 6.1 3h3a2 2 0 0 1 2 1.7 12.7 12.7 0 0 0 .7 2.8 2 2 0 0 1-.4 2.1L10.1 11a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4 12.7 12.7 0 0 0 2.8.7 2 2 0 0 1 1.7 2z" stroke-linecap="round"/>`,
  clock:   `<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2" stroke-linecap="round"/>`,
  facebook:`<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke-linejoin="round"/>`,
  instagram:`<rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>`,
  menu:    `<path d="M3 6h18M3 12h18M3 18h18" stroke-linecap="round"/>`,
  close:   `<path d="M18 6L6 18M6 6l12 12" stroke-linecap="round"/>`,
};

function icon(name, size = 20, color = 'currentColor') {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="1.5" aria-hidden="true">${ICONS[name] || ''}</svg>`;
}

// ─── NAV ─────────────────────────────────────────────────────────────────────
function renderNav(activePage = '') {
  const links = [
    { href: 'index.html', label: 'Home' },
    { href: 'book.html',  label: 'Services' },
    { href: 'team.html',  label: 'Our team' },
    { href: 'about.html', label: 'About' },
  ];

  document.getElementById('nav').innerHTML = `
    <div class="nav-inner">
      <a href="index.html" class="nav-logo">Aisling <em>Wellness</em></a>
      <nav class="nav-links">
        ${links.map(l => `<a href="${l.href}">${l.label}</a>`).join('')}
        <a href="book.html" class="btn-gold">Book now</a>
      </nav>
      <button class="nav-hamburger" id="hamburger" aria-label="Open menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  `;

  // Scroll behavior
  window.addEventListener('scroll', () => {
    document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  // Hamburger
  document.getElementById('hamburger').addEventListener('click', () => openDrawer());
}

function renderDrawer() {
  document.getElementById('nav-drawer').innerHTML = `
    <button class="drawer-close" id="drawer-close" aria-label="Close menu">×</button>
    <div class="drawer-logo">Aisling <em>Wellness</em></div>
    <nav class="drawer-links">
      <a href="index.html">Home</a>
      <a href="book.html">Services</a>
      <a href="team.html">Our team</a>
      <a href="about.html">About</a>
    </nav>
    <a href="book.html" class="btn-gold drawer-book">Book now</a>
  `;
  document.getElementById('drawer-close').addEventListener('click', closeDrawer);
  document.getElementById('nav-overlay').addEventListener('click', closeDrawer);
}

function openDrawer() {
  document.getElementById('nav-drawer').classList.add('open');
  document.getElementById('nav-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeDrawer() {
  document.getElementById('nav-drawer').classList.remove('open');
  document.getElementById('nav-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ─── FOOTER ──────────────────────────────────────────────────────────────────
function renderFooter() {
  document.getElementById('footer').innerHTML = `
    <div class="footer-gold-line"></div>
    <div class="footer-inner">
      <div class="footer-grid">
        <div>
          <div class="footer-logo">Aisling <em>Wellness</em></div>
          <div class="footer-tagline">A dream of wellness, made real.</div>
          <div class="footer-socials">
            <a href="https://facebook.com/aislingwellnesscenter" target="_blank" rel="noopener" aria-label="Facebook">${icon('facebook', 18)}</a>
            <a href="https://instagram.com/aislingwellnesscenter" target="_blank" rel="noopener" aria-label="Instagram">${icon('instagram', 18)}</a>
          </div>
        </div>
        <div>
          <span class="footer-col-title">Find us</span>
          <div class="footer-info">
            <div class="footer-info-row">${icon('location', 14, '#4a6842')}<span>4620 71st St #87<br>Lubbock, TX 79424</span></div>
            <div class="footer-info-row">${icon('phone', 14, '#4a6842')}<a href="tel:+18067156646">(806) 715-6646</a></div>
            <div class="footer-info-row">${icon('clock', 14, '#4a6842')}<span>Mon–Fri: 9am – 7pm<br>Sat: 9am – 5pm<br>Sun: Closed</span></div>
          </div>
        </div>
        <div>
          <span class="footer-col-title">Explore</span>
          <nav class="footer-links">
            <a href="book.html">Book a treatment</a>
            <a href="team.html">Meet the team</a>
            <a href="about.html">Our story</a>
            <a href="book.html?category=injectables">Injectables</a>
            <a href="book.html?category=sculpting">Body sculpting</a>
            <a href="book.html?category=massage">Massage therapy</a>
          </nav>
        </div>
      </div>
      <div class="footer-bottom">
        <span class="footer-copy">© ${new Date().getFullYear()} Aisling Wellness Center · Lubbock, TX</span>
        <span class="footer-espanol">¡Se habla español!</span>
      </div>
    </div>
  `;
}

// ─── ORNAMENT ─────────────────────────────────────────────────────────────────
function ornament(dark = true) {
  return `<div class="ornament${dark ? '' : ' ornament--light'}"><span>· · ✦ · ·</span></div>`;
}

// ─── STARS ───────────────────────────────────────────────────────────────────
function stars(rating, size = 14) {
  return `<div class="stars">${[1,2,3,4,5].map(i =>
    `<span class="star${i > rating ? ' empty' : ''}" style="font-size:${size}px">★</span>`
  ).join('')}</div>`;
}

// ─── INIT SHARED ─────────────────────────────────────────────────────────────
function initShared(activePage) {
  renderNav(activePage);
  renderDrawer();
  renderFooter();
}
