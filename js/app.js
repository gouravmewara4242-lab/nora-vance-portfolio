/* ==========================================================================
   GOURAV MEWARA PORTFOLIO — SHARED COMPONENTS, ROUTING & INTERACTIONS
   ========================================================================== */

(function () {
  const DATA = window.PORTFOLIO_DATA;
  if (!DATA) return;

  /* ------------------------------------------------------------------------
     1. Thin-Line Lucide-Style SVG Icons
     ------------------------------------------------------------------------ */
  const ICONS = {
    film: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="3"/><path d="M7 4v16M17 4v16M2 9.5h5M2 14.5h5M17 9.5h5M17 14.5h5"/></svg>`,
    sparkles: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z"/><path d="M5 3v4M3 5h4M19 17v4M17 19h4"/></svg>`,
    palette: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.7-.7 1.7-1.6 0-.4-.2-.8-.4-1.1-.3-.3-.4-.7-.4-1.1 0-.9.7-1.6 1.6-1.6H17c2.8 0 5-2.2 5-5 0-5.2-4.5-9.6-10-9.6z"/></svg>`,
    "pen-tool": `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>`,
    "book-open": `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4h7a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H2V4z"/><path d="M22 4h-7a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h8V4z"/></svg>`,
    briefcase: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="3"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M2 13h20"/></svg>`,
    play: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5-11-6.5z"/></svg>`,
    pause: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>`,
    "arrow-right": `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></svg>`,
    "arrow-left": `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5"/><path d="M11 18l-6-6 6-6"/></svg>`,
    check: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>`,
    plus: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>`,
    menu: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>`,
    close: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>`,
    download: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></svg>`,
    copy: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`,
    message: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5z"/></svg>`,
    whatsapp: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.711 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.414z"/></svg>`,
    upload: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>`,
    link: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`
  };

  function icon(name) {
    return ICONS[name] || "";
  }

  function getCategoryMeta(catId) {
    return DATA.categories.find((c) => c.id === catId) || DATA.categories[0];
  }

  // Get saved custom video for a project from localStorage
  function getProjectCustomVideo(projectId) {
    try {
      const saved = localStorage.getItem(`custom_reel_${projectId}`);
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return null;
  }

  function saveProjectCustomVideo(projectId, data) {
    try {
      localStorage.setItem(`custom_reel_${projectId}`, JSON.stringify(data));
    } catch (e) {}
  }

  function clearProjectCustomVideo(projectId) {
    try {
      localStorage.removeItem(`custom_reel_${projectId}`);
    } catch (e) {}
  }

  /* ------------------------------------------------------------------------
     2. Shared Ambient Blobs, Sticky Header, Mobile Drawer & Footer
     ------------------------------------------------------------------------ */
  function injectChrome() {
    const activePage = document.body.dataset.page || "home";

    // Ambient pastel blobs
    if (!document.querySelector(".ambient-bg")) {
      const bg = document.createElement("div");
      bg.className = "ambient-bg";
      bg.setAttribute("aria-hidden", "true");
      bg.innerHTML = `
        <div class="ambient-blob ambient-blob--1"></div>
        <div class="ambient-blob ambient-blob--2"></div>
        <div class="ambient-blob ambient-blob--3"></div>
      `;
      document.body.prepend(bg);
    }

    // Sticky Minimal Navbar
    const headerMount = document.getElementById("site-header-mount");
    if (headerMount) {
      const isWork = activePage === "work" || activePage.startsWith("category-") || activePage === "project";
      headerMount.innerHTML = `
        <header class="site-header" id="siteHeader">
          <div class="container nav-inner">
            <a href="index.html" class="brand-logo" aria-label="Gourav Mewara Home">
              <span class="brand-logo__mark">GM</span>
              <span>Gourav Mewara</span>
            </a>

            <nav class="nav-right" aria-label="Primary Navigation">
              <ul class="nav-links">
                <li class="nav-item--dropdown">
                  <a href="work.html" class="nav-link ${isWork ? "is-active" : ""}">Work</a>
                  <div class="nav-dropdown" role="menu">
                    <a href="work.html" class="nav-dropdown__item">
                      <span>All Selected Work</span>
                      <span class="nav-dropdown__dot" style="background: var(--accent);"></span>
                    </a>
                    <div class="nav-dropdown__divider"></div>
                    ${DATA.categories
                      .map(
                        (cat) => `
                        <a href="${cat.page}" class="nav-dropdown__item">
                          <span>${cat.name}</span>
                          <span class="nav-dropdown__dot" style="background: ${cat.pastelHex};"></span>
                        </a>`
                      )
                      .join("")}
                  </div>
                </li>
                <li><a href="about.html" class="nav-link ${activePage === "about" ? "is-active" : ""}">About</a></li>
                <li><a href="services.html" class="nav-link ${activePage === "services" ? "is-active" : ""}">Services &amp; Pricing</a></li>
                <li><a href="contact.html" class="nav-link ${activePage === "contact" ? "is-active" : ""}">Contact</a></li>
              </ul>
              <a href="${DATA.brand.whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn btn--whatsapp btn--sm">
                ${icon("whatsapp")} WhatsApp
              </a>
            </nav>

            <button class="mobile-toggle" id="mobileMenuOpen" aria-label="Open menu">
              ${icon("menu")}
            </button>
          </div>
        </header>

        <div class="mobile-drawer" id="mobileDrawer" aria-hidden="true">
          <div class="mobile-drawer__panel">
            <div class="mobile-drawer__head">
              <a href="index.html" class="brand-logo">
                <span class="brand-logo__mark">GM</span>
                <span>Gourav Mewara</span>
              </a>
              <button class="mobile-toggle" id="mobileMenuClose" aria-label="Close menu" style="display:inline-flex;">
                ${icon("close")}
              </button>
            </div>
            <div class="mobile-drawer__links">
              <a href="work.html" class="mobile-drawer__link"><span>Selected Work</span>${icon("arrow-right")}</a>
              <div class="mobile-drawer__cats">
                ${DATA.categories
                  .map(
                    (cat) => `
                    <a href="${cat.page}" class="mobile-drawer__cat ${cat.surfaceClass}">${cat.name}</a>`
                  )
                  .join("")}
              </div>
              <a href="about.html" class="mobile-drawer__link"><span>About Me</span>${icon("arrow-right")}</a>
              <a href="services.html" class="mobile-drawer__link"><span>Services &amp; Pricing (₹)</span>${icon("arrow-right")}</a>
              <a href="contact.html" class="mobile-drawer__link"><span>WhatsApp Contact</span>${icon("arrow-right")}</a>
              <a href="${DATA.brand.whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn btn--whatsapp" style="margin-top: 10px; width: 100%;">
                ${icon("whatsapp")} Chat on WhatsApp (8905564811)
              </a>
            </div>
          </div>
        </div>
      `;
    }

    // Minimal Footer
    const footerMount = document.getElementById("site-footer-mount");
    if (footerMount) {
      footerMount.innerHTML = `
        <footer class="site-footer">
          <div class="container">
            <div class="footer-grid">
              <div class="footer-col">
                <a href="index.html" class="brand-logo" style="margin-bottom: 14px;">
                  <span class="brand-logo__mark">GM</span>
                  <span>Gourav Mewara</span>
                </a>
                <p class="muted" style="max-width: 300px; font-size: 0.92rem; margin: 0 0 14px;">
                  Freelance Video Editor &amp; Creative Storyteller in India crafting emotionally resonant 9:16 reels, brand films, and YouTube documentaries.
                </p>
                <div style="display:flex; flex-direction:column; gap:6px; font-size:0.9rem;">
                  <a href="mailto:${DATA.brand.email}" style="font-weight: 600; color: var(--accent);">${DATA.brand.email}</a>
                  <a href="${DATA.brand.whatsappUrl}" target="_blank" rel="noopener noreferrer" style="font-weight: 600; color: #1FA855;">
                    WhatsApp: ${DATA.brand.phoneDisplay}
                  </a>
                  <a href="${DATA.brand.linkedinUrl}" target="_blank" rel="noopener noreferrer" style="font-weight: 600; color: var(--text-main);">
                    LinkedIn Profile &rarr;
                  </a>
                </div>
              </div>

              <div class="footer-col">
                <h4>Explore</h4>
                <ul class="footer-links">
                  <li><a href="index.html">Home</a></li>
                  <li><a href="work.html">Selected Work</a></li>
                  <li><a href="about.html">About</a></li>
                  <li><a href="services.html">Services &amp; Pricing (₹)</a></li>
                  <li><a href="contact.html">WhatsApp Contact</a></li>
                </ul>
              </div>

              <div class="footer-col">
                <h4>Disciplines</h4>
                <ul class="footer-links">
                  ${DATA.categories.map((c) => `<li><a href="${c.page}">${c.name}</a></li>`).join("")}
                </ul>
              </div>

              <div class="footer-col">
                <h4>Connect</h4>
                <div class="social-pills">
                  <a href="${DATA.brand.whatsappUrl}" target="_blank" rel="noopener noreferrer" class="social-pill" style="color:#1FA855; font-weight:700;">WhatsApp</a>
                  <a href="${DATA.brand.linkedinUrl}" target="_blank" rel="noopener noreferrer" class="social-pill">LinkedIn</a>
                  <a href="mailto:${DATA.brand.email}" class="social-pill">Email</a>
                </div>
                <p class="muted" style="font-size: 0.84rem; margin-top: 16px;">${DATA.brand.location}</p>
              </div>
            </div>

            <div class="footer-bottom">
              <span>&copy; 2026 Gourav Mewara. All rights reserved.</span>
              <div style="display:flex; align-items:center; gap:16px; flex-wrap:wrap;">
                <span>Crafted in India · INR (₹) · Fixed 9:16 Reels</span>
                <a href="admin.html" style="color:var(--text-muted); font-size:0.82rem; text-decoration:underline;" title="Open Studio Admin Panel (or press Shift + Ctrl + A)">Admin Portal (Shift+Ctrl+A)</a>
              </div>
            </div>
          </div>
        </footer>
      `;
    }

    // Header scroll elevation & mobile drawer toggles
    const header = document.getElementById("siteHeader");
    window.addEventListener("scroll", () => {
      if (header) header.classList.toggle("is-scrolled", window.scrollY > 12);
    });

    const openBtn = document.getElementById("mobileMenuOpen");
    const closeBtn = document.getElementById("mobileMenuClose");
    const drawer = document.getElementById("mobileDrawer");
    if (openBtn && drawer && closeBtn) {
      openBtn.addEventListener("click", () => {
        drawer.classList.add("is-open");
        drawer.setAttribute("aria-hidden", "false");
      });
      const closeDrawer = () => {
        drawer.classList.remove("is-open");
        drawer.setAttribute("aria-hidden", "true");
      };
      closeBtn.addEventListener("click", closeDrawer);
      drawer.addEventListener("click", (e) => {
        if (e.target === drawer) closeDrawer();
      });
    }
  }

  /* ------------------------------------------------------------------------
     3. Toast, Custom Cursor & Scroll Reveal
     ------------------------------------------------------------------------ */
  function showToast(msg) {
    let toast = document.getElementById("siteToast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "siteToast";
      toast.className = "toast";
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add("is-visible");
    clearTimeout(window.__toastTimer);
    window.__toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 3000);
  }

  function initCursorAndReveal() {
    // Scroll Reveal
    document.documentElement.classList.add("js-anim");
    const reveals = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window && reveals.length) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.01, rootMargin: "0px 0px 40px 0px" }
      );
      reveals.forEach((el) => io.observe(el));
    } else {
      reveals.forEach((el) => el.classList.add("is-visible"));
    }

    // Subtle Custom Cursor on fine pointer devices
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      const cursor = document.createElement("div");
      cursor.className = "custom-cursor";
      document.body.appendChild(cursor);

      let cx = -100,
        cy = -100,
        tx = -100,
        ty = -100;

      document.addEventListener("mousemove", (e) => {
        tx = e.clientX;
        ty = e.clientY;
        const target = e.target.closest("[data-cursor], a, button");
        if (target && target.dataset.cursor) {
          cursor.textContent = target.dataset.cursor;
          cursor.classList.add("is-labeled");
          cursor.classList.remove("is-pointer");
        } else if (target) {
          cursor.textContent = "";
          cursor.classList.add("is-pointer");
          cursor.classList.remove("is-labeled");
        } else {
          cursor.textContent = "";
          cursor.classList.remove("is-pointer", "is-labeled");
        }
      });

      function tick() {
        cx += (tx - cx) * 0.22;
        cy += (ty - cy) * 0.22;
        cursor.style.left = `${cx}px`;
        cursor.style.top = `${cy}px`;
        requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }
  }

  /* ------------------------------------------------------------------------
     4. 9:16 Fixed Size Reel Card Builder (Requirement 3)
     ------------------------------------------------------------------------ */
  function buildReelCard916(project) {
    const cat = getCategoryMeta(project.category);
    const custom = getProjectCustomVideo(project.id);
    const activeVideo = (custom && (custom.videoUrl || custom.embedUrl)) || project.videoUrl || "";
    const parsed = activeVideo ? parseVideoLink(activeVideo) : null;
    const hasCustomVideo = Boolean(activeVideo);

    // Dynamic Media: Video direct player preview, YouTube dynamic thumbnail, or clean branding card (Strictly NO duplicate dummy bottle thumbnail)
    let mediaHtml = "";
    if (parsed && !parsed.isIframe && parsed.hasEmbed) {
      // Direct video element showing genuine first frame (#t=0.001) and smooth hover preview
      mediaHtml = `
        <video src="${parsed.embedUrl}#t=0.001" preload="metadata" muted playsinline loop style="width:100%; height:100%; object-fit:cover; display:block;" onmouseenter="try{this.play()}catch(e){}" onmouseleave="try{this.pause();this.currentTime=0.001;}catch(e){}"></video>
      `;
    } else if (parsed && parsed.isIframe && parsed.embedUrl && parsed.embedUrl.includes("youtube.com")) {
      const ytIdMatch = activeVideo.match(/(?:shorts\/|v=|youtu\.be\/)([a-zA-Z0-9_-]+)/);
      const ytThumb = ytIdMatch ? `https://img.youtube.com/vi/${ytIdMatch[1]}/hqdefault.jpg` : "";
      if (ytThumb) {
        mediaHtml = `<img src="${ytThumb}" alt="${project.title}" loading="lazy" />`;
      } else {
        mediaHtml = `
          <div class="reel-dynamic-poster" style="width:100%; height:100%; background:linear-gradient(150deg, #181824 0%, #29283b 100%); display:flex; flex-direction:column; justify-content:center; align-items:center; text-align:center; padding:24px; box-sizing:border-box;">
            <span style="font-size:2.8rem; margin-bottom:12px;">🎬</span>
            <h4 style="color:#ffffff; font-family:var(--font-serif); font-size:1.25rem; line-height:1.3; margin:0 0 8px;">${project.title}</h4>
            <span style="display:inline-block; padding:4px 12px; border-radius:999px; background:rgba(255,255,255,0.12); color:var(--pastel-lavender); font-size:0.75rem; font-weight:700; text-transform:uppercase; letter-spacing:0.06em;">${project.categoryLabel || "9:16 Vertical Cut"}</span>
          </div>
        `;
      }
    } else if (project.image && !project.image.includes("proj-solstice.jpg")) {
      mediaHtml = `<img src="${project.image}" alt="${project.title}" loading="lazy" />`;
    } else if (activeVideo) {
      mediaHtml = `
        <video src="${activeVideo}#t=0.001" preload="metadata" muted playsinline loop style="width:100%; height:100%; object-fit:cover; display:block;" onmouseenter="try{this.play()}catch(e){}" onmouseleave="try{this.pause();this.currentTime=0.001;}catch(e){}"></video>
      `;
    } else {
      // Dynamic graphic/poster card showing project title and discipline tag
      mediaHtml = `
        <div class="reel-dynamic-poster" style="width:100%; height:100%; background:linear-gradient(150deg, #16151f 0%, #2a283e 100%); display:flex; flex-direction:column; justify-content:center; align-items:center; text-align:center; padding:24px; box-sizing:border-box;">
          <span style="font-size:2.8rem; margin-bottom:12px;">🎬</span>
          <h4 style="color:#ffffff; font-family:var(--font-serif); font-size:1.25rem; line-height:1.3; margin:0 0 8px;">${project.title}</h4>
          <span style="display:inline-block; padding:4px 12px; border-radius:999px; background:rgba(255,255,255,0.12); color:var(--pastel-lavender); font-size:0.75rem; font-weight:700; text-transform:uppercase; letter-spacing:0.06em;">${project.categoryLabel || "9:16 Reel"}</span>
        </div>
      `;
    }

    return `
      <article class="project-card project-card--reel reveal" data-project-id="${project.id}">
        <div class="project-card__media" data-play-reel="${project.id}" data-cursor="Play">
          ${mediaHtml}
          <span class="project-card__badge-float">${project.duration || "9:16 Reel"}</span>
          <span class="project-card__upload-hint">${hasCustomVideo ? "Watch Reel" : "Click to Play"}</span>
          <span class="project-card__play" aria-hidden="true">${icon("play")}</span>
        </div>
        <div class="project-card__body">
          <div class="project-card__meta">
            <span class="tag ${cat.tagClass}">${project.categoryLabel}</span>
            <span class="project-card__year">${project.year}</span>
          </div>
          <h3 class="project-card__title">${project.title}</h3>
          <p class="project-card__summary">${project.summary}</p>
          <div style="display:flex; align-items:center; justify-content:space-between; gap:8px; margin-top:8px; flex-wrap:wrap;">
            <button class="btn btn--primary btn--sm" data-play-reel="${project.id}">
              ${icon("play")} Play Reel
            </button>
            <a href="project.html?id=${project.id}" class="btn btn--ghost btn--sm">Case Study</a>
          </div>
        </div>
      </article>
    `;
  }

  function buildProjectCard(project, extraClass = "") {
    const cat = getCategoryMeta(project.category);
    const parsed = project.videoUrl ? parseVideoLink(project.videoUrl) : null;
    let mediaHtml = "";

    if (parsed && !parsed.isIframe && parsed.hasEmbed) {
      mediaHtml = `
        <video src="${parsed.embedUrl}#t=0.001" preload="metadata" muted playsinline loop style="width:100%; height:100%; object-fit:cover; display:block;" onmouseenter="try{this.play()}catch(e){}" onmouseleave="try{this.pause();this.currentTime=0.001;}catch(e){}"></video>
      `;
    } else if (parsed && parsed.isIframe && parsed.embedUrl && parsed.embedUrl.includes("youtube.com")) {
      const ytIdMatch = project.videoUrl.match(/(?:shorts\/|v=|youtu\.be\/)([a-zA-Z0-9_-]+)/);
      const ytThumb = ytIdMatch ? `https://img.youtube.com/vi/${ytIdMatch[1]}/hqdefault.jpg` : "";
      if (ytThumb) {
        mediaHtml = `<img src="${ytThumb}" alt="${project.title}" loading="lazy" />`;
      } else {
        mediaHtml = `<div class="reel-dynamic-poster" style="width:100%; height:100%; background:linear-gradient(150deg, #181824 0%, #29283b 100%); display:flex; flex-direction:column; justify-content:center; align-items:center; text-align:center; padding:24px; box-sizing:border-box;"><span style="font-size:2.4rem;">🎬</span><h4 style="color:#ffffff; margin:8px 0 0;">${project.title}</h4></div>`;
      }
    } else if (project.image && !project.image.includes("proj-solstice.jpg")) {
      mediaHtml = `<img src="${project.image}" alt="${project.title}" loading="lazy" />`;
    } else if (project.videoUrl) {
      mediaHtml = `
        <video src="${project.videoUrl}#t=0.001" preload="metadata" muted playsinline loop style="width:100%; height:100%; object-fit:cover; display:block;" onmouseenter="try{this.play()}catch(e){}" onmouseleave="try{this.pause();this.currentTime=0.001;}catch(e){}"></video>
      `;
    } else {
      mediaHtml = `
        <div class="reel-dynamic-poster" style="width:100%; height:100%; background:linear-gradient(150deg, #181824 0%, #29283b 100%); display:flex; flex-direction:column; justify-content:center; align-items:center; text-align:center; padding:24px; box-sizing:border-box;"><span style="font-size:2.4rem;">🎬</span><h4 style="color:#ffffff; margin:8px 0 0;">${project.title}</h4></div>
      `;
    }

    return `
      <a href="project.html?id=${project.id}" class="project-card ${extraClass} reveal" data-cursor="${project.isVideo ? "Play" : "View"}">
        <div class="project-card__media">
          ${mediaHtml}
          ${project.isVideo ? `<span class="project-card__play" aria-hidden="true">${icon("play")}</span>` : ""}
        </div>
        <div class="project-card__body">
          <div class="project-card__meta">
            <span class="tag ${cat.tagClass}">${project.categoryLabel}</span>
            <span class="project-card__year">${project.year}</span>
          </div>
          <h3 class="project-card__title">${project.title}</h3>
          <p class="project-card__summary">${project.summary}</p>
        </div>
      </a>
    `;
  }

  /* ------------------------------------------------------------------------
     5. Interactive Modals (9:16 Reel Player + Upload / Link Customizer)
     ------------------------------------------------------------------------ */
  function ensureModalRoot() {
    let modal = document.getElementById("globalModal");
    if (!modal) {
      modal = document.createElement("div");
      modal.id = "globalModal";
      modal.className = "modal-backdrop";
      modal.setAttribute("role", "dialog");
      modal.setAttribute("aria-modal", "true");
      modal.innerHTML = `
        <div class="modal-dialog">
          <div class="modal-head">
            <div>
              <div class="eyebrow" id="modalEyebrow" style="margin-bottom: 2px;">Preview</div>
              <h3 id="modalTitle" style="font-size: 1.35rem;">Modal</h3>
            </div>
            <button class="icon-btn" id="modalCloseBtn" aria-label="Close modal">${icon("close")}</button>
          </div>
          <div class="modal-body" id="modalBody"></div>
        </div>
      `;
      document.body.appendChild(modal);

      modal.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
      });
      document.getElementById("modalCloseBtn").addEventListener("click", closeModal);
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("is-open")) closeModal();
      });
    }
    return modal;
  }

  let activeReelRaf = null;
  function closeModal() {
    if (activeReelRaf) cancelAnimationFrame(activeReelRaf);
    activeReelRaf = null;
    const modal = document.getElementById("globalModal");
    if (modal) modal.classList.remove("is-open");
  }

  // Parse YouTube, Vimeo, or Direct video links into embed/player friendly URLs
  function parseVideoLink(rawUrl) {
    if (!rawUrl) return { hasEmbed: false };
    const url = rawUrl.trim();

    // YouTube Shorts: https://www.youtube.com/shorts/VIDEO_ID or youtu.be/VIDEO_ID
    const ytShortMatch = url.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]+)/);
    if (ytShortMatch) {
      return { type: "iframe", isIframe: true, embedUrl: `https://www.youtube.com/embed/${ytShortMatch[1]}?autoplay=1&loop=1`, hasEmbed: true };
    }
    const ytStandardMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/);
    if (ytStandardMatch) {
      return { type: "iframe", isIframe: true, embedUrl: `https://www.youtube.com/embed/${ytStandardMatch[1]}?autoplay=1&loop=1`, hasEmbed: true };
    }

    // Vimeo
    const vimeoMatch = url.match(/vimeo\.com\/(?:channels\/(?:\w+\/)?|groups\/(?:[^\/]*)\/videos\/|album\/(?:\d+)\/video\/|video\/|)(\d+)/);
    if (vimeoMatch) {
      return { type: "iframe", isIframe: true, embedUrl: `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1&loop=1`, hasEmbed: true };
    }

    // Direct MP4 / WebM / MOV / Cloudinary / Supabase Storage / Blob / Local file video link
    if (url.includes("res.cloudinary.com") || url.includes("supabase.co/storage") || url.match(/\.(mp4|webm|mov|m4v)(\?.*)?$/i) || url.startsWith("blob:") || url.startsWith("data:")) {
      return { type: "video", isIframe: false, videoUrl: url, embedUrl: url, hasEmbed: true };
    }

    // Generic fallback iframe (e.g. Google Drive preview link)
    if (url.includes("drive.google.com/file/d/")) {
      const driveMatch = url.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
      if (driveMatch) {
        return { type: "iframe", isIframe: true, embedUrl: `https://drive.google.com/file/d/${driveMatch[1]}/preview`, hasEmbed: true };
      }
    }

    return { type: "iframe", isIframe: true, embedUrl: url, hasEmbed: true };
  }

  // 9:16 Video Player with Upload Video / Upload Link support (Requirement 3)
  function openReelUploadModal(projectId) {
    const project = DATA.projects.find((p) => p.id === projectId) || DATA.projects[0];
    const cat = getCategoryMeta(project.category);
    const modal = ensureModalRoot();

    document.getElementById("modalEyebrow").textContent = `Fixed 9:16 Reel Player · ${project.categoryLabel}`;
    document.getElementById("modalTitle").textContent = project.title;

    const custom = getProjectCustomVideo(project.id);
    const body = document.getElementById("modalBody");

    body.innerHTML = `
      <div style="max-width:440px; margin:0 auto; text-align:center;">
        <div class="reel-stage-916" id="reelScreenStage" style="width:100%; aspect-ratio:9/16; max-height:72vh; margin:0 auto; border-radius:20px; overflow:hidden; background:#000; box-shadow:var(--shadow-card); position:relative;">
        </div>
        <div style="display:flex; align-items:center; justify-content:space-between; margin-top:16px; gap:12px; flex-wrap:wrap;">
          <div style="text-align:left;">
            <div style="font-weight:700; font-size:1.05rem; color:var(--text-base);">${project.title}</div>
            <div class="muted" style="font-size:0.85rem; margin-top:2px;">
              <span class="tag ${cat.tagClass}" style="font-size:0.75rem; padding:3px 8px;">${project.categoryLabel}</span>
              ${project.duration ? ` &middot; ${project.duration}` : ""}
            </div>
          </div>
          <div style="display:flex; gap:8px;">
            <a href="contact.html" class="btn btn--secondary btn--sm">Let’s Talk &rarr;</a>
          </div>
        </div>
      </div>
    `;

    modal.classList.add("is-open");

    const stage = document.getElementById("reelScreenStage");

    function renderReelContent(mediaConfig) {
      if (activeReelRaf) {
        cancelAnimationFrame(activeReelRaf);
        activeReelRaf = null;
      }

      if (mediaConfig && mediaConfig.type === "video") {
        stage.innerHTML = `
          <video src="${mediaConfig.videoUrl}" controls autoplay loop playsinline style="width:100%; height:100%; object-fit:cover;"></video>
        `;
      } else if (mediaConfig && mediaConfig.type === "iframe") {
        stage.innerHTML = `
          <iframe src="${mediaConfig.embedUrl}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="width:100%; height:100%; border:none;"></iframe>
        `;
      } else {
        // Fallback: High-resolution animated 9:16 Canvas player with Gourav's branding
        stage.innerHTML = `<canvas id="canvas916" width="540" height="960" style="width:100%; height:100%; display:block;"></canvas>`;
        const canvas = document.getElementById("canvas916");
        const ctx = canvas.getContext("2d");
        const img = new Image();
        img.src = project.image;

        let t = 0;
        function animateCanvas() {
          t += 0.035;
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          // Draw base frame with subtle slow cinematic pan
          if (img.complete && img.naturalWidth > 0) {
            const scale = 1.08 + Math.sin(t * 0.4) * 0.04;
            const w = canvas.width * scale;
            const h = canvas.height * scale;
            ctx.save();
            ctx.drawImage(img, (canvas.width - w) / 2, (canvas.height - h) / 2, w, h);
            ctx.restore();
          } else {
            ctx.fillStyle = "#1E1E26";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
          }

          // Dark cinematic gradient overlay
          const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
          grad.addColorStop(0, "rgba(20, 20, 28, 0.25)");
          grad.addColorStop(0.65, "rgba(20, 20, 28, 0.45)");
          grad.addColorStop(1, "rgba(20, 20, 28, 0.88)");
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, canvas.width, canvas.height);

          // Top Header Pills
          ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
          ctx.beginPath();
          ctx.roundRect(36, 42, 170, 36, 18);
          ctx.fill();
          ctx.fillStyle = "#2B2B35";
          ctx.font = "700 13px 'DM Sans', sans-serif";
          ctx.fillText("9:16 REEL MASTER", 54, 65);

          ctx.fillStyle = "rgba(255, 255, 255, 0.25)";
          ctx.beginPath();
          ctx.roundRect(canvas.width - 150, 42, 114, 36, 18);
          ctx.fill();
          ctx.fillStyle = "#FFFFFF";
          ctx.font = "600 13px 'JetBrains Mono', monospace";
          const sec = String(Math.floor(t) % 60).padStart(2, "0");
          ctx.fillText(`00:${sec} / 00:58`, canvas.width - 138, 65);

          // Center Animated Sound Wave
          ctx.save();
          ctx.strokeStyle = cat.pastelHex || "#C9B8F0";
          ctx.lineWidth = 3.5;
          ctx.beginPath();
          const waveY = canvas.height / 2;
          for (let x = 60; x <= canvas.width - 60; x += 14) {
            const h = Math.sin(t * 3 + x * 0.05) * 28 + Math.cos(t * 2 + x * 0.08) * 16;
            ctx.moveTo(x, waveY - h);
            ctx.lineTo(x, waveY + h);
          }
          ctx.stroke();
          ctx.restore();

          // Bottom Editorial Typography
          ctx.fillStyle = cat.pastelHex || "#C9B8F0";
          ctx.beginPath();
          ctx.roundRect(36, canvas.height - 210, 180, 28, 14);
          ctx.fill();
          ctx.fillStyle = "#2B2B35";
          ctx.font = "700 11px 'DM Sans', sans-serif";
          ctx.fillText(project.categoryLabel.toUpperCase(), 48, canvas.height - 192);

          ctx.fillStyle = "#FFFFFF";
          ctx.font = "700 32px 'Fraunces', Georgia, serif";
          ctx.fillText(project.title.split("—")[0].trim(), 36, canvas.height - 146);

          ctx.fillStyle = "rgba(255, 255, 255, 0.84)";
          ctx.font = "400 15px 'DM Sans', sans-serif";
          ctx.fillText(`Cut by Gourav Mewara · ${project.client}`, 36, canvas.height - 116);

          // Audio meter bar
          ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
          ctx.fillRect(36, canvas.height - 72, canvas.width - 72, 4);
          ctx.fillStyle = cat.pastelHex || "#C9B8F0";
          ctx.fillRect(36, canvas.height - 72, ((Math.floor(t) % 60) / 60) * (canvas.width - 72), 4);

          activeReelRaf = requestAnimationFrame(animateCanvas);
        }
        activeReelRaf = requestAnimationFrame(animateCanvas);
      }
    }

    // Load initial state (Cloudinary / Supabase / local videoUrl, or animated canvas)
    const initialMedia = project.videoUrl ? parseVideoLink(project.videoUrl) : null;
    renderReelContent(initialMedia);
  }

  // Hero & Showreel Dynamic Configuration
  function getHeroConfig() {
    const defaults = {
      heroPortraitUrl: "assests/IMG_0433.jpg",
      heroExpYears: "1.5+ Years",
      heroExpSubtitle: "60+ Reels & Films Cut",
      heroHeadline: "I turn ideas into stories that move people.",
      heroAvailText: "Available for freelance · India (IST)",
      showreelVideoUrl: "",
      showreelCoverUrl: "assets/images/showreel-cover.jpg",
      showreelTitlePill: "2026 Director's Showreel · Gourav Mewara",
      showreelDurationPill: "01:30 · 4K Master",
      showreelHeadline: "Craft, Rhythm & Quiet Emotion",
      showreelSubtext: "Selected highlights from Indian D2C brand films, 9:16 vertical reels, and documentaries."
    };
    try {
      const stored = localStorage.getItem("gourav_hero_config");
      if (stored) return Object.assign({}, defaults, JSON.parse(stored));
    } catch (e) {}
    return defaults;
  }

  function applyHeroConfig() {
    const cfg = getHeroConfig();
    const heroImg = document.getElementById("heroPortraitImg");
    if (heroImg && cfg.heroPortraitUrl) heroImg.src = cfg.heroPortraitUrl;
    const expYears = document.getElementById("heroExpYears");
    if (expYears && cfg.heroExpYears) expYears.textContent = cfg.heroExpYears;
    const expSub = document.getElementById("heroExpSubtitle");
    if (expSub && cfg.heroExpSubtitle) expSub.textContent = cfg.heroExpSubtitle;
    const availText = document.getElementById("heroAvailText");
    if (availText && cfg.heroAvailText) availText.textContent = cfg.heroAvailText;
    const heroTitle = document.querySelector(".hero__title");
    if (heroTitle && cfg.heroHeadline) heroTitle.innerHTML = cfg.heroHeadline;
    const heroRoles = document.querySelector(".hero__roles");
    if (heroRoles && cfg.heroRoles) heroRoles.textContent = cfg.heroRoles;
    const heroLead = document.querySelector(".hero .lead");
    if (heroLead && cfg.heroLead) heroLead.textContent = cfg.heroLead;

    const srCover = document.getElementById("showreelCoverImg");
    if (srCover && cfg.showreelCoverUrl) srCover.src = cfg.showreelCoverUrl;
    const srTitle = document.getElementById("showreelTitlePill");
    if (srTitle && cfg.showreelTitlePill) srTitle.textContent = cfg.showreelTitlePill;
    const srDuration = document.getElementById("showreelDurationPill");
    if (srDuration && cfg.showreelDurationPill) srDuration.textContent = cfg.showreelDurationPill;
    const srHead = document.getElementById("showreelHeadline");
    if (srHead && cfg.showreelHeadline) srHead.textContent = cfg.showreelHeadline;
    const srSub = document.getElementById("showreelSubtext");
    if (srSub && cfg.showreelSubtext) srSub.textContent = cfg.showreelSubtext;

    const editBtn = document.getElementById("heroAdminEditBtn");
    if (editBtn) {
      const isAdmin = (typeof window.isAdminLoggedIn === "function" && window.isAdminLoggedIn()) ||
                      Boolean(localStorage.getItem("gourav_admin_session") || sessionStorage.getItem("gourav_admin_session"));
      if (isAdmin) editBtn.style.display = "inline-flex";
    }
  }

  function openShowreelModal(title, subtitle, coverImage, explicitVideoUrl) {
    const cfg = getHeroConfig();
    const activeTitle = title || cfg.showreelTitlePill || "2026 Director's Showreel";
    const activeSubtitle = subtitle || cfg.showreelSubtext || "Selected highlights from Indian D2C brand films, 9:16 vertical reels, and documentaries.";
    const activeCover = coverImage || cfg.showreelCoverUrl || "assets/images/showreel-cover.jpg";
    const activeVideo = explicitVideoUrl || cfg.showreelVideoUrl || "";

    const modal = ensureModalRoot();
    document.getElementById("modalEyebrow").textContent = "Director's Showreel Player";
    document.getElementById("modalTitle").textContent = activeTitle;
    const body = document.getElementById("modalBody");

    const parsedVideo = parseVideoLink(activeVideo);

    if (parsedVideo.hasEmbed) {
      // Play real uploaded video (Cloudinary, Supabase, YouTube, Vimeo, MP4)
      let playerHtml = "";
      if (parsedVideo.isIframe) {
        playerHtml = `
          <div style="position:relative; width:100%; aspect-ratio:16/9; border-radius:12px; overflow:hidden; background:#000; box-shadow:var(--shadow-card);">
            <iframe src="${parsedVideo.embedUrl}?autoplay=1" style="width:100%; height:100%; border:0;" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
          </div>`;
      } else {
        playerHtml = `
          <div style="position:relative; width:100%; border-radius:12px; overflow:hidden; background:#000; box-shadow:var(--shadow-card);">
            <video src="${parsedVideo.embedUrl}" poster="${activeCover}" controls autoplay playsinline style="width:100%; max-height:75vh; display:block; margin:0 auto;"></video>
          </div>`;
      }

      body.innerHTML = `
        ${playerHtml}
        <div style="display:flex; align-items:center; justify-content:space-between; gap:12px; margin-top:16px; flex-wrap:wrap;">
          <div>
            <h4 style="margin:0 0 4px; font-family:var(--font-serif); font-size:1.15rem;">${cfg.showreelHeadline || "Craft, Rhythm & Quiet Emotion"}</h4>
            <p class="muted" style="margin:0; font-size:0.88rem;">${activeSubtitle} &middot; Mastered by Gourav Mewara.</p>
          </div>
          <div style="display:flex; gap:10px; align-items:center;">
            <a href="admin.html#showreel" class="btn btn--ghost btn--sm">Edit Showreel</a>
            <a href="contact.html" class="btn btn--secondary btn--sm">Let&rsquo;s Talk &rarr;</a>
          </div>
        </div>
      `;
      modal.classList.add("is-open");
      return;
    }

    // Interactive canvas player when no video URL is uploaded yet
    body.innerHTML = `
      <div class="reel-canvas-wrap">
        <canvas id="reelCanvas" width="960" height="540"></canvas>
      </div>
      <div class="reel-controls">
        <div style="display:flex; align-items:center; gap:12px;">
          <button class="btn btn--primary btn--sm" id="reelPlayToggle">${icon("pause")} <span>Pause</span></button>
          <span class="muted" id="reelTimecode" style="font-family:var(--font-mono); font-size:0.86rem;">00:00 / 01:30</span>
        </div>
        <div class="reel-chapters">
          <button class="filter-pill is-active" data-chapter="0">01 Brand Films</button>
          <button class="filter-pill" data-chapter="1">02 Motion Systems</button>
          <button class="filter-pill" data-chapter="2">03 Documentaries</button>
        </div>
      </div>
      <div style="display:flex; align-items:center; justify-content:space-between; gap:12px; margin-top:14px; flex-wrap:wrap;">
        <p class="muted" style="margin:0; font-size: 0.9rem;">${activeSubtitle} — Edited by Gourav Mewara.</p>
        <div style="display:flex; gap:10px; align-items:center;">
          <a href="admin.html#showreel" class="btn btn--ghost btn--sm">Upload Real Video</a>
          <a href="contact.html" class="btn btn--secondary btn--sm">Let&rsquo;s Talk &rarr;</a>
        </div>
      </div>
    `;
    modal.classList.add("is-open");

    const canvas = document.getElementById("reelCanvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = activeCover;

    const chapters = [
      { label: "CHAPTER 01 · 9:16 BRAND REELS", bg: "#C9B8F0", title: "Aranya Morning Ritual", sub: "Tactile Indian Botanical Pacing" },
      { label: "CHAPTER 02 · MOTION SYSTEMS", bg: "#CFE4FA", title: "Kora Pastel Identity", sub: "Spring Physics & Kinetic Serif Type" },
      { label: "CHAPTER 03 · DOCUMENTARIES", bg: "#CDEBDD", title: "Hands of Clay", sub: "Intimate Artisan Storytelling" }
    ];

    let playing = true;
    let t = 0;
    let chapterIdx = 0;

    const toggleBtn = document.getElementById("reelPlayToggle");
    const tcEl = document.getElementById("reelTimecode");
    const chapterBtns = body.querySelectorAll("[data-chapter]");

    toggleBtn.addEventListener("click", () => {
      playing = !playing;
      toggleBtn.innerHTML = playing ? `${icon("pause")} <span>Pause</span>` : `${icon("play")} <span>Play</span>`;
    });

    chapterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        chapterIdx = Number(btn.dataset.chapter);
        t = chapterIdx * 30;
        chapterBtns.forEach((b) => b.classList.toggle("is-active", b === btn));
      });
    });

    function draw() {
      if (playing) t += 0.032;
      const totalSec = Math.floor(t) % 90;
      chapterIdx = Math.floor(totalSec / 30);
      chapterBtns.forEach((b, i) => b.classList.toggle("is-active", i === chapterIdx));

      const mins = String(Math.floor(totalSec / 60)).padStart(2, "0");
      const secs = String(totalSec % 60).padStart(2, "0");
      if (tcEl) tcEl.textContent = `${mins}:${secs} / 01:30`;

      const ch = chapters[chapterIdx];
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (img.complete && img.naturalWidth > 0) {
        const scale = 1.04 + Math.sin(t * 0.5) * 0.03;
        const w = canvas.width * scale;
        const h = canvas.height * scale;
        ctx.save();
        ctx.globalAlpha = 0.86;
        ctx.drawImage(img, (canvas.width - w) / 2, (canvas.height - h) / 2, w, h);
        ctx.restore();
      } else {
        ctx.fillStyle = "#2B2B35";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
      grad.addColorStop(0, "rgba(43,43,53,0.18)");
      grad.addColorStop(1, "rgba(43,43,53,0.72)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.save();
      ctx.fillStyle = ch.bg;
      ctx.globalAlpha = 0.35;
      ctx.beginPath();
      ctx.arc(780 + Math.cos(t) * 26, 130 + Math.sin(t * 0.9) * 18, 64, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      ctx.fillStyle = ch.bg;
      ctx.beginPath();
      ctx.roundRect(48, 360, 280, 32, 16);
      ctx.fill();

      ctx.fillStyle = "#2B2B35";
      ctx.font = "600 12px 'DM Sans', sans-serif";
      ctx.fillText(ch.label, 66, 380);

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "600 38px 'Fraunces', Georgia, serif";
      ctx.fillText(ch.title, 48, 438);

      ctx.fillStyle = "rgba(255,255,255,0.85)";
      ctx.font = "400 17px 'DM Sans', sans-serif";
      ctx.fillText(`${ch.sub} · Gourav Mewara`, 48, 470);

      ctx.fillStyle = "rgba(255,255,255,0.22)";
      ctx.fillRect(48, 504, canvas.width - 96, 4);
      ctx.fillStyle = ch.bg;
      ctx.fillRect(48, 504, ((totalSec / 90) * (canvas.width - 96)), 4);

      activeReelRaf = requestAnimationFrame(draw);
    }
    activeReelRaf = requestAnimationFrame(draw);
  }

  function openLightbox(items, startIndex = 0) {
    const modal = ensureModalRoot();
    let idx = startIndex;

    function renderSlide() {
      const item = items[idx];
      document.getElementById("modalEyebrow").textContent = item.designCategory || "Graphic Design Lightbox";
      document.getElementById("modalTitle").textContent = item.title;
      document.getElementById("modalBody").innerHTML = `
        <div style="border-radius:16px; overflow:hidden; background:var(--bg-cream); border:1px solid var(--border-soft);">
          <img src="${item.image}" alt="${item.title}" style="width:100%; max-height:58vh; object-fit:contain; margin:0 auto;" />
        </div>
        <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:16px; margin-top:18px;">
          <div>
            <p class="muted" style="margin:0 0 6px;">${item.summary}</p>
            <span class="tag tag--graphic-design">${item.client} · ${item.year}</span>
          </div>
          <div style="display:flex; gap:10px;">
            <button class="icon-btn" id="lbPrev" aria-label="Previous image">${icon("arrow-left")}</button>
            <button class="icon-btn" id="lbNext" aria-label="Next image">${icon("arrow-right")}</button>
            <a href="project.html?id=${item.id}" class="btn btn--primary btn--sm">Case Study</a>
          </div>
        </div>
      `;
      document.getElementById("lbPrev").onclick = () => {
        idx = (idx - 1 + items.length) % items.length;
        renderSlide();
      };
      document.getElementById("lbNext").onclick = () => {
        idx = (idx + 1) % items.length;
        renderSlide();
      };
    }
    renderSlide();
    modal.classList.add("is-open");
  }

  function openScriptReader(project) {
    const modal = ensureModalRoot();
    document.getElementById("modalEyebrow").textContent = `Script & Final Film · ${project.client}`;
    document.getElementById("modalTitle").textContent = project.title;
    document.getElementById("modalBody").innerHTML = `
      <div class="script-split">
        <div class="script-excerpt" style="max-height:58vh; overflow-y:auto;">
          ${(project.fullScript || [])
            .map((line) => {
              if (line.type === "slug") return `<div class="script-slugline" style="margin-top:14px;">${line.text}</div>`;
              if (line.type === "visual") return `<p style="margin:6px 0; color:var(--text-muted);">${line.text}</p>`;
              return `<p style="margin:8px 0 14px; padding-left:14px; border-left:3px solid var(--pastel-butter);">${line.text}</p>`;
            })
            .join("")}
        </div>
        <div>
          <div class="showreel-stage" id="scriptFinalPlay" style="aspect-ratio:9/16; max-width:300px; margin:0 auto; border-radius:18px;">
            <img src="${project.image}" alt="${project.title}" />
            <div class="showreel-overlay">
              <span class="showreel-pill">Final Reel (${project.duration})</span>
              <button class="showreel-play-center" style="width:64px; height:64px;" aria-label="Play final cut">${icon("play")}</button>
              <div></div>
            </div>
          </div>
          <div style="margin-top:16px; display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap;">
            <span class="tag tag--script-writing">${project.resultMetric}</span>
            <button class="btn btn--secondary btn--sm" id="scriptOpenReelModalBtn">${icon("play")} Open 9:16 Customizer</button>
          </div>
        </div>
      </div>
    `;
    document.getElementById("scriptFinalPlay").addEventListener("click", () => openReelUploadModal(project.id));
    document.getElementById("scriptOpenReelModalBtn").addEventListener("click", () => openReelUploadModal(project.id));
    modal.classList.add("is-open");
  }

  /* ------------------------------------------------------------------------
     6. Page Initializers
     ------------------------------------------------------------------------ */
  function initHomePage() {
    // Apply dynamic Hero & Showreel custom config if saved
    applyHeroConfig();

    // Showreel click
    const showreelBtn = document.getElementById("homeShowreelTrigger");
    if (showreelBtn) {
      showreelBtn.addEventListener("click", () => openShowreelModal());
      showreelBtn.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openShowreelModal();
        }
      });
    }

    // 6 "What I Do" cards
    const servicesMount = document.getElementById("homeServicesGrid");
    if (servicesMount) {
      servicesMount.innerHTML = DATA.categories
        .map(
          (cat) => `
          <a href="${cat.page}" class="discipline-card reveal">
            <div>
              <div class="discipline-card__icon ${cat.surfaceClass}" style="margin-bottom: 20px;">
                ${icon(cat.icon)}
              </div>
              <h3 class="discipline-card__title">${cat.name}</h3>
              <p class="discipline-card__desc">${cat.shortDesc}</p>
            </div>
            <div class="discipline-card__footer">
              <span>Explore ${cat.name}</span>
              ${icon("arrow-right")}
            </div>
          </a>`
        )
        .join("");
    }

    // 6 Featured 9:16 Reel Cards (Requirement 3: Fixed 9:16 aspect ratio)
    const featuredMount = document.getElementById("homeFeaturedGrid");
    if (featuredMount) {
      const featured = DATA.projects.filter((p) => p.featured).slice(0, 6);
      featuredMount.className = "featured-reel-grid";

      if (featured.length === 0) {
        featuredMount.innerHTML = `
          <div style="grid-column: 1 / -1; text-align: center; padding: 48px 24px; background: var(--surface); border: 1.5px dashed var(--border-strong); border-radius: 20px;">
            <div style="font-size: 2.2rem; margin-bottom: 10px;">🎬</div>
            <h3 style="font-size: 1.35rem; margin-bottom: 8px;">Upload Your First 9:16 Reel</h3>
            <p class="muted" style="max-width: 480px; margin: 0 auto 20px; font-size: 0.95rem;">
              Your portfolio is clean and ready. Upload your real 9:16 video reels and client projects from the Studio Admin Panel to feature them here.
            </p>
            <a href="admin.html" class="btn btn--primary">Open Studio Admin (Shift + Ctrl + A) &rarr;</a>
          </div>
        `;
      } else {
        featuredMount.innerHTML = featured.map((p) => buildReelCard916(p)).join("");
        featuredMount.querySelectorAll("[data-play-reel]").forEach((el) => {
          el.addEventListener("click", (e) => {
            e.preventDefault();
            openReelUploadModal(el.dataset.playReel);
          });
        });
      }
    }

    // Stats strip
    const statsMount = document.getElementById("homeStatsStrip");
    if (statsMount) {
      statsMount.innerHTML = DATA.stats
        .map(
          (s) => `
          <div class="stat-item">
            <div class="stat-item__num">${s.number}</div>
            <div class="stat-item__label">${s.label}</div>
          </div>`
        )
        .join("");
    }

    // Testimonials slider
    const testiMount = document.getElementById("homeTestimonialsTrack");
    if (testiMount) {
      testiMount.innerHTML = DATA.testimonials
        .map(
          (t) => `
          <article class="testimonial-card ${t.surface}">
            <p class="testimonial-card__quote">“${t.quote}”</p>
            <div class="testimonial-card__author">
              <div>
                <div class="testimonial-card__name">${t.name}</div>
                <div class="testimonial-card__role">${t.role}</div>
              </div>
              <span class="tag" style="background: rgba(255,255,255,0.8);">${t.tag}</span>
            </div>
          </article>`
        )
        .join("");

      const prev = document.getElementById("testiPrev");
      const next = document.getElementById("testiNext");
      if (prev && next) {
        prev.addEventListener("click", () => testiMount.scrollBy({ left: -460, behavior: "smooth" }));
        next.addEventListener("click", () => testiMount.scrollBy({ left: 460, behavior: "smooth" }));
      }
    }

    // 4-step Process Timeline
    const processMount = document.getElementById("homeProcessTimeline");
    if (processMount) {
      processMount.innerHTML = DATA.process
        .map(
          (p) => `
          <div class="process-step reveal">
            <div class="process-step__num ${p.surface}">${p.step}</div>
            <h3>${p.title}</h3>
            <p>${p.desc}</p>
          </div>`
        )
        .join("");
    }
  }

  function initWorkPage() {
    const filterMount = document.getElementById("workFilterPills");
    const gridMount = document.getElementById("workProjectsGrid");
    if (!filterMount || !gridMount) return;

    const tabs = [{ id: "all", name: "All" }, ...DATA.categories.map((c) => ({ id: c.id, name: c.name === "Freelance Projects" ? "Freelance" : c.name }))];
    let currentFilter = new URLSearchParams(window.location.search).get("category") || "all";

    function render() {
      filterMount.innerHTML = tabs
        .map(
          (t) => `<button class="filter-pill ${t.id === currentFilter ? "is-active" : ""}" data-cat="${t.id}">${t.name}</button>`
        )
        .join("");

      const list = currentFilter === "all" ? DATA.projects : DATA.projects.filter((p) => p.category === currentFilter);
      if (list.length === 0) {
        gridMount.innerHTML = `
          <div style="grid-column: 1 / -1; text-align: center; padding: 56px 24px; background: var(--surface); border: 1.5px dashed var(--border-strong); border-radius: 20px;">
            <div style="font-size: 2.2rem; margin-bottom: 10px;">📁</div>
            <h3 style="font-size: 1.35rem; margin-bottom: 8px;">No Projects in This Category Yet</h3>
            <p class="muted" style="max-width: 460px; margin: 0 auto 20px; font-size: 0.95rem;">
              Upload your projects from the Studio Admin Panel to feature them here.
            </p>
            <a href="admin.html" class="btn btn--primary">Open Studio Admin &rarr;</a>
          </div>
        `;
      } else {
        gridMount.innerHTML = list.map((p) => buildReelCard916(p)).join("");
        gridMount.querySelectorAll("[data-play-reel]").forEach((el) => {
          el.addEventListener("click", (e) => {
            e.preventDefault();
            openReelUploadModal(el.dataset.playReel);
          });
        });
        gridMount.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
      }

      filterMount.querySelectorAll(".filter-pill").forEach((btn) => {
        btn.addEventListener("click", () => {
          currentFilter = btn.dataset.cat;
          render();
        });
      });
    }
    render();
  }

  function injectCategoryStrip(activeId) {
    const mount = document.getElementById("categoryNavStrip");
    if (!mount) return;
    mount.innerHTML = DATA.categories
      .map(
        (c) => `<a href="${c.page}" class="category-nav-pill ${c.id === activeId ? "is-active" : ""}">${c.name}</a>`
      )
      .join("");
  }

  function initCategoryPage(catId) {
    injectCategoryStrip(catId);
    const items = DATA.projects.filter((p) => p.category === catId);
    const emptyHtml = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 50px 24px; background: var(--surface); border: 1.5px dashed var(--border-strong); border-radius: 20px;">
        <div style="font-size: 2.2rem; margin-bottom: 10px;">✨</div>
        <h3 style="font-size: 1.35rem; margin-bottom: 8px;">No Projects in This Category Yet</h3>
        <p class="muted" style="max-width: 480px; margin: 0 auto 20px; font-size: 0.95rem;">
          Upload your work from the Studio Admin Panel to feature it here.
        </p>
        <a href="admin.html" class="btn btn--primary">Upload via Admin Panel &rarr;</a>
      </div>
    `;

    if (catId === "video-editing") {
      const mount = document.getElementById("videoEditingGrid");
      if (!mount) return;
      if (items.length === 0) {
        mount.innerHTML = emptyHtml;
        return;
      }
      mount.innerHTML = items
        .map(
          (p, i) => `
          <article class="ba-card reveal">
            <div class="ba-viewport" id="baViewport-${i}">
              <div class="ba-layer ba-layer--raw">
                <img src="${p.image}" alt="${p.title} Raw Cut" />
                <span class="ba-badge ba-badge--left">Raw S-Log Cut</span>
              </div>
              <div class="ba-layer ba-layer--graded">
                <img src="${p.image}" alt="${p.title} Graded Edit" />
                <span class="ba-badge ba-badge--right" style="background: var(--pastel-lavender);">Final Grade</span>
              </div>
            </div>
            <div class="project-card__body">
              <div class="ba-controls">
                <span class="tag tag--video-editing">${p.duration} · ${p.year}</span>
                <div class="segmented-toggle" data-target="baViewport-${i}">
                  <button data-mode="raw">Before</button>
                  <button data-mode="split" class="is-active">Split</button>
                  <button data-mode="graded">After</button>
                </div>
              </div>
              <h3 class="project-card__title">${p.title}</h3>
              <p class="project-card__summary">${p.summary}</p>
              <div style="display:flex; gap:10px; flex-wrap:wrap; margin-top:6px;">
                <button class="btn btn--primary btn--sm" data-play-project="${p.id}">${icon("play")} Play / Upload</button>
                <a href="project.html?id=${p.id}" class="btn btn--ghost btn--sm">Case Study</a>
              </div>
            </div>
          </article>`
        )
        .join("");

      mount.querySelectorAll(".segmented-toggle").forEach((group) => {
        const card = document.getElementById(group.dataset.target).closest(".ba-card");
        group.querySelectorAll("button").forEach((btn) => {
          btn.addEventListener("click", () => {
            group.querySelectorAll("button").forEach((b) => b.classList.remove("is-active"));
            btn.classList.add("is-active");
            card.classList.remove("show-raw", "show-graded");
            if (btn.dataset.mode === "raw") card.classList.add("show-raw");
            if (btn.dataset.mode === "graded") card.classList.add("show-graded");
          });
        });
      });

      mount.querySelectorAll("[data-play-project]").forEach((btn) => {
        btn.addEventListener("click", () => openReelUploadModal(btn.dataset.playProject));
      });
    }

    if (catId === "motion-graphics") {
      const mount = document.getElementById("motionGrid");
      if (!mount) return;
      if (items.length === 0) {
        mount.innerHTML = emptyHtml;
        return;
      }
      mount.innerHTML = items
        .map(
          (p) => `
          <article class="project-card reveal">
            <div class="motion-loop-stage surface-motion-graphics">
              <div class="kinetic-orb" style="width:110px; height:110px; background:var(--pastel-lavender); opacity:0.55; top:20px; left:24%;"></div>
              <div class="kinetic-orb" style="width:76px; height:76px; background:var(--pastel-butter); opacity:0.75; bottom:24px; right:22%; animation-duration:6s;"></div>
              <div class="kinetic-word">${p.motionWord || "KINETIC"}</div>
            </div>
            <div class="project-card__body">
              <div class="project-card__meta">
                <span class="tag tag--motion-graphics">${p.motionType || "Motion Loop"}</span>
                <span class="project-card__year">${p.duration}</span>
              </div>
              <h3 class="project-card__title">${p.title}</h3>
              <p class="project-card__summary">${p.summary}</p>
              <div style="display:flex; gap:10px; margin-top:6px;">
                <button class="btn btn--primary btn--sm" data-play-motion="${p.id}">${icon("play")} Preview / Upload</button>
                <a href="project.html?id=${p.id}" class="btn btn--ghost btn--sm">Details</a>
              </div>
            </div>
          </article>`
        )
        .join("");

      mount.querySelectorAll("[data-play-motion]").forEach((btn) => {
        btn.addEventListener("click", () => openReelUploadModal(btn.dataset.playMotion));
      });
    }

    if (catId === "graphic-design") {
      const mount = document.getElementById("designGalleryGrid");
      if (!mount) return;
      if (items.length === 0) {
        mount.innerHTML = emptyHtml;
        return;
      }
      mount.innerHTML = items
        .map(
          (p, index) => `
          <article class="project-card reveal">
            <div class="project-card__media" style="cursor:pointer;" data-lightbox-idx="${index}">
              <img src="${p.image}" alt="${p.title}" />
            </div>
            <div class="project-card__body">
              <div class="project-card__meta">
                <span class="tag tag--graphic-design">${p.designCategory || "Visual Design"}</span>
                <span class="project-card__year">${p.year}</span>
              </div>
              <h3 class="project-card__title">${p.title}</h3>
              <p class="project-card__summary">${p.summary}</p>
              <div style="display:flex; gap:10px; margin-top:6px;">
                <button class="btn btn--secondary btn--sm" data-lightbox-idx="${index}">Open Lightbox</button>
                <a href="project.html?id=${p.id}" class="btn btn--ghost btn--sm">Case Study</a>
              </div>
            </div>
          </article>`
        )
        .join("");

      mount.querySelectorAll("[data-lightbox-idx]").forEach((el) => {
        el.addEventListener("click", () => openLightbox(items, Number(el.dataset.lightboxIdx)));
      });
    }

    if (catId === "script-writing") {
      const mount = document.getElementById("scriptsGrid");
      if (!mount) return;
      if (items.length === 0) {
        mount.innerHTML = emptyHtml;
        return;
      }
      mount.innerHTML = items
        .map(
          (p) => `
          <article class="script-card reveal">
            <div>
              <div class="project-card__meta" style="margin-bottom:12px;">
                <span class="tag tag--script-writing">${p.client}</span>
                <span class="project-card__year">${p.duration} · ${p.year}</span>
              </div>
              <h3 class="project-card__title" style="margin-bottom:8px;">${p.title}</h3>
              <p class="project-card__summary" style="margin-bottom:16px;">${p.summary}</p>
              <div class="script-excerpt">
                <div class="script-slugline">${p.scriptExcerpt.slugline}</div>
                <div style="color:var(--text-muted); margin-bottom:8px;">${p.scriptExcerpt.visual}</div>
                <div style="margin-bottom:8px;">${p.scriptExcerpt.vo}</div>
                <div style="font-size:0.76rem; color:var(--accent);">${p.scriptExcerpt.beat}</div>
              </div>
            </div>
            <div style="display:flex; gap:10px; flex-wrap:wrap;">
              <button class="btn btn--primary btn--sm" data-read-script="${p.id}">Read Script &amp; Watch Film</button>
              <a href="project.html?id=${p.id}" class="btn btn--ghost btn--sm">Case Study</a>
            </div>
          </article>`
        )
        .join("");

      mount.querySelectorAll("[data-read-script]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const p = DATA.projects.find((item) => item.id === btn.dataset.readScript);
          if (p) openScriptReader(p);
        });
      });
    }

    if (catId === "storytelling") {
      const mount = document.getElementById("storytellingList");
      if (!mount) return;
      if (items.length === 0) {
        mount.innerHTML = emptyHtml;
        return;
      }
      mount.innerHTML = items
        .map(
          (p) => `
          <article class="story-case-card reveal">
            <div class="story-case-card__media">
              <img src="${p.image}" alt="${p.title}" />
            </div>
            <div class="story-case-card__body">
              <div class="project-card__meta">
                <span class="tag tag--storytelling">${p.client}</span>
                <span class="project-card__year">${p.duration} · ${p.year}</span>
              </div>
              <h3 style="font-size:1.75rem;">${p.title}</h3>
              <p class="muted" style="margin:0;">${p.summary}</p>
              <div class="arc-steps">
                ${(p.storyArc || []).map((step) => `<span class="arc-step">${step}</span>`).join("")}
              </div>
              <div style="display:flex; gap:10px; flex-wrap:wrap; margin-top:6px;">
                <a href="project.html?id=${p.id}" class="btn btn--primary btn--sm">Read Narrative Study</a>
                <button class="btn btn--ghost btn--sm" data-play-story="${p.id}">${icon("play")} Preview / Upload</button>
              </div>
            </div>
          </article>`
        )
        .join("");

      mount.querySelectorAll("[data-play-story]").forEach((btn) => {
        btn.addEventListener("click", () => openReelUploadModal(btn.dataset.playStory));
      });
    }

    if (catId === "freelance") {
      const mount = document.getElementById("freelanceGrid");
      if (!mount) return;
      if (items.length === 0) {
        mount.innerHTML = emptyHtml;
        return;
      }
      mount.innerHTML = items
        .map(
          (p) => `
          <article class="project-card reveal">
            <div class="project-card__media">
              <img src="${p.image}" alt="${p.title}" />
            </div>
            <div class="project-card__body">
              <div class="project-card__meta">
                <span class="tag tag--freelance">${p.client}</span>
                <span class="project-card__year">${p.year}</span>
              </div>
              <h3 class="project-card__title">${p.title}</h3>
              <p class="project-card__summary">${p.deliverables || p.role} — ${p.summary}</p>
              <div class="result-banner">
                <span style="font-size:0.82rem; font-weight:600; color:var(--text-muted);">Result</span>
                <strong>${p.resultMetric}</strong>
              </div>
              <a href="project.html?id=${p.id}" class="btn btn--ghost btn--sm" style="align-self:flex-start; margin-top:4px;">View Case Study</a>
            </div>
          </article>`
        )
        .join("");
    }
  }

  function initProjectPage() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const idx = Math.max(
      0,
      DATA.projects.findIndex((p) => p.id === id)
    );
    const p = DATA.projects[idx];
    const nextP = DATA.projects[(idx + 1) % DATA.projects.length];
    const cat = getCategoryMeta(p.category);

    document.title = `${p.title} — Gourav Mewara`;
    const mount = document.getElementById("caseStudyMount");
    if (!mount) return;

    mount.innerHTML = `
      <div class="container">
        <a href="${cat.page}" class="btn btn--ghost btn--sm" style="margin-bottom: 24px;">${icon("arrow-left")} Back to ${cat.name}</a>
        <div>
          <span class="tag ${cat.tagClass}" style="margin-bottom: 14px;">${p.categoryLabel}</span>
          <h1 class="display-lg" style="max-width: 900px;">${p.title}</h1>
          <p class="lead" style="max-width: 720px; margin-top: 14px;">${p.summary}</p>
        </div>

        <div class="case-hero-media">
          <div class="case-hero-media__inner" ${p.isVideo && !p.videoUrl ? `id="caseHeroPlay" style="cursor:pointer;"` : ""}>
            ${p.videoUrl ? `<video src="${p.videoUrl}" ${p.image && !p.image.includes("proj-solstice.jpg") ? `poster="${p.image}"` : ""} controls playsinline style="width:100%; height:100%; object-fit:cover; display:block;"></video>` : `<img src="${(p.image && !p.image.includes("proj-solstice.jpg")) ? p.image : 'assets/images/proj-design.jpg'}" alt="${p.title}" />`}
            ${
              p.isVideo && !p.videoUrl
                ? `<div class="showreel-overlay">
                    <span class="showreel-pill">${p.duration}</span>
                    <button class="showreel-play-center" aria-label="Play project preview">${icon("play")}</button>
                    <div></div>
                  </div>`
                : ""
            }
          </div>
        </div>

        <div class="case-meta-grid">
          <div>
            <div class="case-meta-label">Client</div>
            <div class="case-meta-val">${p.client}</div>
          </div>
          <div>
            <div class="case-meta-label">Year</div>
            <div class="case-meta-val">${p.year}</div>
          </div>
          <div>
            <div class="case-meta-label">Role</div>
            <div class="case-meta-val">${p.role}</div>
          </div>
          <div>
            <div class="case-meta-label">Tools Used</div>
            <div style="display:flex; flex-wrap:wrap; gap:6px;">
              ${p.tools.map((t) => `<span class="tag">${t}</span>`).join("")}
            </div>
          </div>
        </div>

        <div class="case-sections">
          <div class="case-block reveal">
            <div class="eyebrow">01 · The Brief</div>
            <h3>Brief</h3>
            <p>${p.brief}</p>
          </div>
          <div class="case-block reveal">
            <div class="eyebrow">02 · The Friction</div>
            <h3>Challenge</h3>
            <p>${p.challenge}</p>
          </div>
          <div class="case-block reveal">
            <div class="eyebrow">03 · Creative Direction</div>
            <h3>My Approach</h3>
            <p>${p.approach}</p>
          </div>
          <div class="case-block reveal">
            <div class="eyebrow">04 · Deliverables</div>
            <h3>Final Output</h3>
            <p>${p.output}</p>
          </div>
          <div class="case-block reveal" style="background: var(--pastel-mint-soft);">
            <div class="eyebrow">05 · Impact</div>
            <h3>Result — ${p.resultMetric}</h3>
            <p>${p.result}</p>
          </div>
        </div>

        <div style="margin-top: 48px;">
          <h3 style="font-size:1.4rem; margin-bottom:20px;">Visual Frames &amp; Gallery</h3>
          <div class="projects-grid-2">
            ${(p.gallery || [p.image])
              .map(
                (src) => `
              <div class="project-card">
                <div class="project-card__media">
                  <img src="${src}" alt="${p.title} frame" />
                </div>
              </div>`
              )
              .join("")}
          </div>
        </div>

        <div style="margin-top: 64px;">
          <a href="project.html?id=${nextP.id}" class="next-project-card">
            <div>
              <div class="eyebrow">Next Project</div>
              <h3 class="display-md">${nextP.title}</h3>
              <p class="muted" style="margin: 6px 0 0;">${nextP.categoryLabel} · ${nextP.client}</p>
            </div>
            <span class="btn btn--primary">${icon("arrow-right")}</span>
          </a>
        </div>
      </div>
    `;

    const heroPlay = document.getElementById("caseHeroPlay");
    if (heroPlay) {
      heroPlay.addEventListener("click", () => openReelUploadModal(p.id));
    }
  }

  function initAboutPage() {
    const dlBtn = document.getElementById("downloadResumeBtn");
    if (dlBtn) {
      dlBtn.addEventListener("click", () => {
        const resumeHtml = `<!doctype html><html><head><meta charset="utf-8"><title>Gourav Mewara — Resume</title><style>body{font-family:Georgia,serif;max-width:740px;margin:48px auto;color:#2B2B35;line-height:1.6;padding:0 24px}h1{margin:0}small{color:#7A7A88;font-family:sans-serif}h2{border-bottom:1px solid #ddd;padding-bottom:6px;margin-top:28px;font-size:1.1rem;font-family:sans-serif;text-transform:uppercase;letter-spacing:.08em;color:#5B4BC4}</style></head><body><h1>Gourav Mewara</h1><small>Freelance Video Editor &amp; Creative Storyteller · India / Remote · gourav.mewara4242@gmail.com · WhatsApp: +91 89055 64811</small><h2>Profile</h2><p>1.5+ years crafting 9:16 vertical reels, brand films, narrative YouTube documentaries, and kinetic motion systems for founders, creators, and D2C brands. 25+ projects completed and 60+ videos delivered.</p><h2>Core Disciplines</h2><p>9:16 Reel Editing · Video Editing (Premiere Pro, DaVinci Resolve) · Motion Graphics (After Effects) · Script Writing · Graphic Design (Illustrator, Photoshop, Figma) · Sound Design</p><h2>Selected Clients &amp; Collaborations</h2><p>Aranya Botanicals (Jaipur), Spaces India, Mitti &amp; Kiln (Udaipur), Kora Design System (Bengaluru), Malnad Roast (Chikmagalur), Prana FinTech (Mumbai).</p></body></html>`;
        const blob = new Blob([resumeHtml], { type: "text/html" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "Gourav-Mewara-Resume-2026.html";
        a.click();
        URL.revokeObjectURL(url);
        showToast("Resume downloaded (Gourav-Mewara-Resume-2026.html)");
      });
    }
  }

  function initServicesPage() {
    const grid = document.getElementById("servicesPricingGrid");
    if (grid) {
      grid.innerHTML = DATA.services
        .map(
          (s) => `
          <article class="service-tier reveal">
            <div>
              <div style="display:flex; align-items:center; justify-content:space-between; gap:10px; margin-bottom:16px; flex-wrap:wrap;">
                <span class="tag ${s.tagClass}">${s.tag}</span>
                <span class="muted" style="font-size:0.84rem; font-weight:600;">Turnaround: ${s.turnaround}</span>
              </div>
              <h3 style="font-size:1.55rem; margin-bottom:8px;">${s.name}</h3>
              <p class="muted" style="margin:0 0 20px;">${s.desc}</p>
              <div style="display:flex; align-items:baseline; gap:6px; margin-bottom:22px;">
                <span class="service-tier__price">${s.price}</span>
                <span class="muted">${s.period}</span>
              </div>
              <ul class="check-list">
                ${s.includes.map((item) => `<li>${icon("check")}<span>${item}</span></li>`).join("")}
              </ul>
            </div>
            <a href="contact.html?service=${encodeURIComponent(s.name)}" class="btn btn--primary" style="margin-top: 12px;">
              Get a Quote &rarr;
            </a>
          </article>`
        )
        .join("");
    }

    const faqMount = document.getElementById("faqAccordion");
    if (faqMount) {
      faqMount.innerHTML = DATA.faqs
        .map(
          (f, i) => `
          <div class="faq-item ${i === 0 ? "is-open" : ""}">
            <button class="faq-trigger" aria-expanded="${i === 0 ? "true" : "false"}">
              <span>${f.q}</span>
              ${icon("plus")}
            </button>
            <div class="faq-panel" style="${i === 0 ? "max-height: 240px;" : ""}">
              <div class="faq-panel__inner">${f.a}</div>
            </div>
          </div>`
        )
        .join("");

      faqMount.querySelectorAll(".faq-trigger").forEach((btn) => {
        btn.addEventListener("click", () => {
          const item = btn.closest(".faq-item");
          const panel = item.querySelector(".faq-panel");
          const isOpen = item.classList.toggle("is-open");
          btn.setAttribute("aria-expanded", String(isOpen));
          panel.style.maxHeight = isOpen ? `${panel.scrollHeight}px` : "0px";
        });
      });
    }
  }

  // Requirement 5: In contact I want only WhatsApp and go to that (8905564811)
  function initContactPage() {
    const copyBtn = document.getElementById("copyEmailBtn");
    if (copyBtn) {
      copyBtn.addEventListener("click", () => {
        if (navigator.clipboard) navigator.clipboard.writeText(DATA.brand.email);
        showToast(`Copied ${DATA.brand.email}`);
      });
    }

    // WhatsApp Message Composer (Submits directly to wa.me/918905564811)
    const form = document.getElementById("contactForm");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const nameEl = document.getElementById("clientName");
        const msgEl = document.getElementById("message");
        const name = nameEl ? nameEl.value.trim() : "Client";
        const message = msgEl ? msgEl.value.trim() : "";

        const text = `Hi Gourav! 👋\n\n*Name:* ${name}\n*Brief / Project Note:* ${message}\n\nI saw your portfolio and would like to discuss working together!`;
        const waUrl = `https://wa.me/918905564811?text=${encodeURIComponent(text)}`;

        window.open(waUrl, "_blank", "noopener,noreferrer");
        showToast("Opening WhatsApp to send your message to 8905564811...");
      });
    }
  }

  /* ------------------------------------------------------------------------
     7. Boot
     ------------------------------------------------------------------------ */
  document.addEventListener("DOMContentLoaded", () => {
    injectChrome();

    const page = document.body.dataset.page || "home";
    if (page === "home") initHomePage();
    if (page === "work") initWorkPage();
    if (page === "category-video-editing") initCategoryPage("video-editing");
    if (page === "category-motion-graphics") initCategoryPage("motion-graphics");
    if (page === "category-graphic-design") initCategoryPage("graphic-design");
    if (page === "category-script-writing") initCategoryPage("script-writing");
    if (page === "category-storytelling") initCategoryPage("storytelling");
    if (page === "category-freelance") initCategoryPage("freelance");
    if (page === "project") initProjectPage();
    if (page === "about") initAboutPage();
    if (page === "services") initServicesPage();
    if (page === "contact") initContactPage();

    initCursorAndReveal();

    // Asynchronously sync projects from Supabase in background
    if (typeof window.fetchSupabaseProjects === "function") {
      window.fetchSupabaseProjects().then(() => {
        refreshPortfolioGrids();
      }).catch((e) => {
        console.warn("Background Supabase sync notice:", e);
      });
    }
  });

  function refreshPortfolioGrids() {
    const page = document.body.dataset.page || "home";
    if (page === "home") {
      const featuredMount = document.getElementById("homeFeaturedGrid");
      if (featuredMount && window.PORTFOLIO_DATA && Array.isArray(window.PORTFOLIO_DATA.projects)) {
        const featured = window.PORTFOLIO_DATA.projects.filter((p) => p.featured).slice(0, 6);
        featuredMount.innerHTML = featured.map((p) => buildReelCard916(p)).join("");
        featuredMount.querySelectorAll("[data-play-reel]").forEach((el) => {
          el.addEventListener("click", (e) => {
            e.preventDefault();
            openReelUploadModal(el.dataset.playReel);
          });
        });
        featuredMount.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
      }
    } else if (page === "work") {
      initWorkPage();
    }
  }
  window.refreshPortfolioGrids = refreshPortfolioGrids;
})();
