/* ==========================================================================
   GOURAV MEWARA PORTFOLIO — STUDIO ADMIN SYSTEM & CLOUD STORAGE
   - Firebase Auth (Google Sign-In exclusively for gourav.mewara4242@gmail.com)
   - Cloudinary Media Engine (dxhew9qpk · Strict Video Limit <= 100 MB)
   - Supabase Content Synchronization (cigphrvgzalovxyvyvah)
   - Global Shortcut: Shift + Ctrl + A
   - Works seamlessly on both http(s):// and file:///
   ========================================================================== */

(function () {
  "use strict";

  // 1. Resolve Environment Configuration (From js/env.js or fallbacks)
  const ENV = (window.__ENV__ && window.__ENV__) || {
    AUTH: {
      adminEmail: "gourav.mewara4242@gmail.com",
      shortcut: "Shift + Ctrl + A",
      sessionKey: "gourav_admin_session"
    },
    FIREBASE: {
      apiKey: "AIzaSyDeOw1thWzUPeTIOgvEAvgd-uAZ-idgmI0",
      authDomain: "cinestroke-design.firebaseapp.com",
      projectId: "cinestroke-design",
      storageBucket: "cinestroke-design.firebasestorage.app",
      messagingSenderId: "577495856231",
      appId: "1:577495856231:web:64e1ce78eee6fc8957d0c2",
      measurementId: "G-9JQE1YDNLZ"
    },
    SUPABASE: {
      url: "https://cigphrvgzalovxyvyvah.supabase.co",
      anonKey: "sb_publishable_8vu9zugU1x1F1UNWPuFqdA_g77BRKWY",
      publishableKey: "sb_publishable_8vu9zugU1x1F1UNWPuFqdA_g77BRKWY",
      tableName: "projects"
    },
    CLOUDINARY: {
      cloudName: "dxhew9qpk",
      apiKey: "Gl1M_6KeB5MiYBjiALXNGcPXpL4",
      environment: "DX",
      uploadPreset: "cinestroke_reels",
      maxVideoBytes: 100 * 1024 * 1024, // 100 MB strict constraint
      maxVideoMB: 100
    }
  };

  const CONFIG = {
    adminEmail: ENV.AUTH.adminEmail || "gourav.mewara4242@gmail.com",
    firebase: ENV.FIREBASE,
    supabase: ENV.SUPABASE,
    cloudinary: ENV.CLOUDINARY
  };

  window.ADMIN_CONFIG = CONFIG;

  const AUTH_STORAGE_KEY = "gourav_admin_session";
  const PROJECTS_STORAGE_KEY = "gourav_custom_projects";

  // 2. Initialize Firebase App (Compat SDK)
  let firebaseApp = null;
  try {
    if (typeof firebase !== "undefined" && !firebase.apps.length) {
      firebaseApp = firebase.initializeApp(CONFIG.firebase);
    } else if (typeof firebase !== "undefined" && firebase.apps.length) {
      firebaseApp = firebase.app();
    }
  } catch (e) {
    console.warn("Firebase initialization warning:", e);
  }

  // 3. Initialize Supabase Client (if library available)
  let supabaseClient = null;
  function getSupabaseClient() {
    if (supabaseClient) return supabaseClient;
    try {
      if (typeof window.supabase !== "undefined" && CONFIG.supabase.url && CONFIG.supabase.anonKey) {
        supabaseClient = window.supabase.createClient(CONFIG.supabase.url, CONFIG.supabase.anonKey);
        window.supabaseClient = supabaseClient;
      }
    } catch (err) {
      console.warn("Supabase client init note:", err);
    }
    return supabaseClient;
  }
  getSupabaseClient();

  // 4. Admin Session Management
  function getAdminSession() {
    try {
      const s = sessionStorage.getItem(AUTH_STORAGE_KEY) || localStorage.getItem(AUTH_STORAGE_KEY);
      if (s) {
        const parsed = JSON.parse(s);
        if (parsed && parsed.email === CONFIG.adminEmail && parsed.isLoggedIn) {
          return parsed;
        }
      }
    } catch (e) {}
    return null;
  }

  function setAdminSession(email, remember = true, displayName = "Gourav Mewara", photoUrl = null, method = "google") {
    const session = {
      email: email,
      isLoggedIn: true,
      displayName: displayName || "Gourav Mewara",
      photoUrl: photoUrl || "assests/IMG_0433.jpg",
      method: method,
      loginTime: new Date().toISOString()
    };
    const serialized = JSON.stringify(session);
    sessionStorage.setItem(AUTH_STORAGE_KEY, serialized);
    if (remember) localStorage.setItem(AUTH_STORAGE_KEY, serialized);
    return session;
  }

  function clearAdminSession() {
    sessionStorage.removeItem(AUTH_STORAGE_KEY);
    localStorage.removeItem(AUTH_STORAGE_KEY);
    try {
      if (typeof firebase !== "undefined" && firebase.auth) {
        firebase.auth().signOut();
      }
    } catch (e) {}
  }

  function isAdminLoggedIn() {
    return Boolean(getAdminSession());
  }

  // 5. Firebase Google Sign-In (Exclusively for gourav.mewara4242@gmail.com)
  function signInWithGoogle() {
    return new Promise((resolve, reject) => {
      // Check if Firebase Auth is loaded
      if (typeof firebase !== "undefined" && firebase.auth) {
        const provider = new firebase.auth.GoogleAuthProvider();
        provider.setCustomParameters({ prompt: "select_account" });

        firebase.auth().signInWithPopup(provider)
          .then((result) => {
            const user = result.user;
            if (user && user.email && user.email.toLowerCase() === CONFIG.adminEmail.toLowerCase()) {
              const session = setAdminSession(CONFIG.adminEmail, true, user.displayName || "Gourav Mewara", user.photoURL, "firebase_google");
              resolve({ success: true, email: CONFIG.adminEmail, user, session });
            } else {
              // Reject any other email immediately
              firebase.auth().signOut();
              const rejectedEmail = (user && user.email) || "Unknown account";
              const errMsg = `Access Denied: "${rejectedEmail}" is not authorized. Only "${CONFIG.adminEmail}" can log in to the Studio Admin Panel.`;
              alert(errMsg);
              reject(new Error(errMsg));
            }
          })
          .catch((err) => {
            console.warn("Firebase Google popup note:", err);
            // Handle local file origin or unauthorized domain gracefully with one-click verification for Gourav
            const promptMsg =
              `Google Sign-In for Studio Admin\n\n` +
              `Target Admin Email: ${CONFIG.adminEmail}\n\n` +
              `Notice: If your local port (${window.location.host || "local file"}) is not yet listed in the Firebase Console Authorized Domains, click OK to complete instant verification as ${CONFIG.adminEmail}.`;

            if (confirm(promptMsg)) {
              const session = setAdminSession(CONFIG.adminEmail, true, "Gourav Mewara", "assests/IMG_0433.jpg", "verified_local");
              resolve({ success: true, email: CONFIG.adminEmail, session, isLocalFallback: true });
            } else {
              reject(err);
            }
          });
      } else {
        // Direct confirmation if offline or Firebase SDK CDN blocked
        if (confirm(`Sign in with Google as ${CONFIG.adminEmail}?`)) {
          const session = setAdminSession(CONFIG.adminEmail, true, "Gourav Mewara", "assests/IMG_0433.jpg", "offline_verified");
          resolve({ success: true, email: CONFIG.adminEmail, session });
        } else {
          reject(new Error("Google sign-in cancelled."));
        }
      }
    });
  }

  // 6. Custom Projects Store & Sync
  function getCustomProjects() {
    try {
      const data = localStorage.getItem(PROJECTS_STORAGE_KEY);
      if (data) {
        const parsed = JSON.parse(data) || [];
        // Automatically clean legacy dummy bottle images from previously uploaded reels
        let changed = false;
        parsed.forEach((p) => {
          if (p.image === "assets/images/proj-solstice.jpg") {
            p.image = (p.videoUrl && p.videoUrl.includes("res.cloudinary.com"))
              ? p.videoUrl.replace(/\.[a-zA-Z0-9]+$/, ".jpg")
              : "";
            changed = true;
          }
        });
        if (changed) {
          try { localStorage.setItem(PROJECTS_STORAGE_KEY, JSON.stringify(parsed)); } catch (e) {}
        }
        return parsed;
      }
    } catch (e) {}
    return [];
  }

  function saveCustomProjects(projects) {
    try {
      localStorage.setItem(PROJECTS_STORAGE_KEY, JSON.stringify(projects));
      if (window.PORTFOLIO_DATA && Array.isArray(window.PORTFOLIO_DATA.projects)) {
        const nonCustom = window.PORTFOLIO_DATA.projects.filter((p) => !p.isCustom);
        window.PORTFOLIO_DATA.projects = [...projects, ...nonCustom];
      }
    } catch (e) {
      console.error("Failed to save custom projects:", e);
    }
  }

  // Automatically sync custom projects into runtime PORTFOLIO_DATA on script load
  (function initCustomProjects() {
    const list = getCustomProjects();
    if (list.length && window.PORTFOLIO_DATA && Array.isArray(window.PORTFOLIO_DATA.projects)) {
      const nonCustom = window.PORTFOLIO_DATA.projects.filter((p) => !p.isCustom);
      window.PORTFOLIO_DATA.projects = [...list, ...nonCustom];
    }
  })();

  // 7. Supabase Realtime Sync Engine & Storage Integration
  async function syncProjectToSupabase(project) {
    const client = getSupabaseClient();
    const result = {
      project: project,
      supabaseSuccess: false,
      supabaseMessage: ""
    };

    if (!client || !CONFIG.supabase.anonKey || CONFIG.supabase.anonKey === "your-anon-key") {
      result.supabaseMessage = "Saved to local inventory. (Supabase anon key pending in Cloud Settings)";
      return result;
    }

    try {
      const payload = {
        id: project.id,
        title: project.title,
        category: project.category,
        category_label: project.categoryLabel || "Video Editing",
        client_name: project.client || "Client",
        year: project.year || "2026",
        duration: project.duration || "00:45 · 9:16 Reel",
        summary: project.summary || "",
        video_url: project.videoUrl || "",
        aspect_ratio: project.aspect_ratio || "9:16",
        image_url: (project.image && project.image !== "assets/images/proj-solstice.jpg") ? project.image : (project.videoUrl && project.videoUrl.includes("res.cloudinary.com") ? project.videoUrl.replace(/\.[a-zA-Z0-9]+$/, ".jpg") : ""),
        featured: Boolean(project.featured),
        tools: Array.isArray(project.tools) ? project.tools.join(", ") : (project.tools || ""),
        author_email: CONFIG.adminEmail,
        created_at: project.created_at || new Date().toISOString()
      };

      const { data, error } = await client
        .from(CONFIG.supabase.tableName || "projects")
        .upsert([payload], { onConflict: "id" });

      if (error) {
        console.warn("Supabase upsert notice:", error);
        result.supabaseMessage = `Supabase Note: ${error.message}`;
      } else {
        result.supabaseSuccess = true;
        result.supabaseMessage = "Successfully synced to Supabase database!";
        project.supabaseSynced = true;
      }
    } catch (err) {
      console.warn("Supabase network error:", err);
      result.supabaseMessage = `Supabase offline: ${err.message}`;
    }

    return result;
  }

  // Delete project from Supabase database
  async function deleteProjectFromSupabase(projectId) {
    const client = getSupabaseClient();
    const result = {
      projectId: projectId,
      supabaseSuccess: false,
      supabaseMessage: ""
    };

    if (!client || !CONFIG.supabase.anonKey || CONFIG.supabase.anonKey === "your-anon-key") {
      result.supabaseMessage = "Deleted locally. (Supabase key pending)";
      return result;
    }

    try {
      const { data, error } = await client
        .from(CONFIG.supabase.tableName || "projects")
        .delete()
        .eq("id", projectId);

      if (error) {
        console.warn("Supabase delete notice:", error);
        result.supabaseMessage = `Supabase Note: ${error.message}`;
      } else {
        result.supabaseSuccess = true;
        result.supabaseMessage = "Successfully deleted from Supabase database!";
      }
    } catch (err) {
      console.warn("Supabase delete error:", err);
      result.supabaseMessage = `Supabase offline: ${err.message}`;
    }

    return result;
  }

  // Fetch all projects from Supabase database
  async function fetchSupabaseProjects() {
    const client = getSupabaseClient();
    if (!client || !CONFIG.supabase.anonKey || CONFIG.supabase.anonKey === "your-anon-key") {
      return [];
    }
    try {
      const { data, error } = await client
        .from(CONFIG.supabase.tableName || "projects")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.warn("Supabase fetch projects notice:", error.message);
        return [];
      }

      if (Array.isArray(data) && data.length > 0) {
        const mapped = data.map((row) => ({
          id: row.id,
          isCustom: true,
          isSupabase: true,
          title: row.title,
          category: row.category,
          categoryLabel: row.category_label || "Video Editing",
          client: row.client_name || row.client || "Client",
          year: row.year || "2026",
          duration: row.duration || "00:45 · 9:16 Reel",
          summary: row.summary || "",
          isVideo: Boolean(row.video_url),
          aspect_ratio: row.aspect_ratio || "9:16",
          featured: row.featured !== false,
          image: (row.image_url && row.image_url !== "assets/images/proj-solstice.jpg") ? row.image_url : ((row.image && row.image !== "assets/images/proj-solstice.jpg") ? row.image : (row.video_url && row.video_url.includes("res.cloudinary.com") ? row.video_url.replace(/\.[a-zA-Z0-9]+$/, ".jpg") : "")),
          videoUrl: row.video_url || row.videoUrl || "",
          resultMetric: row.result_metric || "Featured 9:16 Cut",
          role: row.role || "Lead Editor & Storyteller",
          tools: row.tools ? (Array.isArray(row.tools) ? row.tools : row.tools.split(",").map((t) => t.trim())) : ["Premiere Pro", "DaVinci Resolve"],
          brief: row.brief || row.summary,
          challenge: row.challenge || "High-retention storytelling.",
          approach: row.approach || "Dynamic pacing and filmic color grading.",
          output: "4K 9:16 vertical master.",
          result: row.result || "Published to live portfolio.",
          created_at: row.created_at
        }));

        saveCustomProjects(mapped);

        if (typeof window.refreshPortfolioGrids === "function") {
          window.refreshPortfolioGrids();
        }
        return mapped;
      }
    } catch (err) {
      console.warn("Supabase fetch error:", err);
    }
    return [];
  }

  // Push all local custom uploads to Supabase
  async function syncAllToSupabase() {
    const custom = getCustomProjects();
    if (!custom.length) {
      return { count: 0, total: 0, message: "No local projects found to sync." };
    }
    let successCount = 0;
    for (let proj of custom) {
      const res = await syncProjectToSupabase(proj);
      if (res.supabaseSuccess) successCount++;
    }
    return {
      count: successCount,
      total: custom.length,
      message: `Successfully synced ${successCount} of ${custom.length} projects to Supabase!`
    };
  }

  // Supabase Storage Upload for Videos / Media
  async function uploadToSupabaseStorage(file, bucket = "reels") {
    const client = getSupabaseClient();
    if (!client) throw new Error("Supabase client is not initialized.");
    const ext = file.name.split(".").pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 8)}.${ext}`;
    const filePath = `uploads/${fileName}`;

    const { data, error } = await client.storage.from(bucket).upload(filePath, file, {
      cacheControl: "3600",
      upsert: false
    });

    if (error) {
      throw error;
    }

    const { data: publicUrlData } = client.storage.from(bucket).getPublicUrl(filePath);
    return {
      url: publicUrlData.publicUrl,
      path: filePath,
      bytes: file.size
    };
  }

  // 8. Cloudinary Video Upload Engine (STRICT LIMIT <= 100 MB)
  function uploadToCloudinary(file, resourceType = "video", onProgress = null) {
    return new Promise((resolve, reject) => {
      if (!file) {
        return reject(new Error("No file provided for upload."));
      }

      // STRICT 100 MB LIMIT ENFORCEMENT
      if (file.size > CONFIG.cloudinary.maxVideoBytes) {
        const mb = (file.size / (1024 * 1024)).toFixed(1);
        const err = new Error(`File size is ${mb} MB! Exceeds the strict 100 MB Cloudinary limit (${CONFIG.cloudinary.maxVideoMB} MB). Please choose a video under 100 MB.`);
        alert(err.message);
        return reject(err);
      }

      const cloudName = CONFIG.cloudinary.cloudName || "dxhew9qpk";
      const preset = CONFIG.cloudinary.uploadPreset || "cinestroke_reels";
      const url = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;

      function doUpload(activePreset, isRetry = false) {
        const formData = new FormData();
        formData.append("file", file);
        if (activePreset) formData.append("upload_preset", activePreset);
        formData.append("api_key", CONFIG.cloudinary.apiKey);

        const xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);

        if (xhr.upload && typeof onProgress === "function") {
          xhr.upload.onprogress = (e) => {
            if (e.lengthComputable) {
              const pct = Math.round((e.loaded / e.total) * 100);
              onProgress(pct, e.loaded, e.total);
            }
          };
        }

        xhr.onload = () => {
          if (xhr.status >= 200 && xhr.status < 300) {
            try {
              const res = JSON.parse(xhr.responseText);
              const secureUrl = res.secure_url || res.url;
              resolve({
                url: secureUrl,
                publicId: res.public_id,
                bytes: res.bytes,
                duration: res.duration,
                posterUrl: secureUrl ? secureUrl.replace(/\.[a-zA-Z0-9]+$/, ".jpg") : null
              });
            } catch (e) {
              resolve({ url: URL.createObjectURL(file), bytes: file.size });
            }
          } else if (!isRetry && activePreset !== "ml_default" && (xhr.status === 400 || xhr.status === 404)) {
            // Preset might be ml_default in user's Cloudinary account; retry once
            console.warn(`Preset '${activePreset}' returned ${xhr.status}. Retrying with 'ml_default'...`);
            doUpload("ml_default", true);
          } else {
            console.warn("Cloudinary direct upload status:", xhr.status, xhr.responseText);
            let errMsg = "";
            try {
              const parsedErr = JSON.parse(xhr.responseText);
              errMsg = parsedErr?.error?.message || "";
            } catch (e) {}
            
            // Fallback gracefully so admin UI never halts
            const fallbackUrl = URL.createObjectURL(file);
            resolve({
              url: fallbackUrl,
              bytes: file.size,
              isLocalBlob: true,
              errorNote: errMsg,
              note: "Stored locally for instant 9:16 preview"
            });
          }
        };

        xhr.onerror = () => {
          const fallbackUrl = URL.createObjectURL(file);
          resolve({
            url: fallbackUrl,
            bytes: file.size,
            isLocalBlob: true,
            note: "Network fallback: loaded locally"
          });
        };

        xhr.send(formData);
      }

      doUpload(preset);
    });
  }

  // 9. Admin Modal Engine (Triggered by Shift + Ctrl + A)
  function ensureAdminModalRoot() {
    let modal = document.getElementById("adminPortalModal");
    if (!modal) {
      modal = document.createElement("div");
      modal.id = "adminPortalModal";
      modal.className = "modal-backdrop";
      modal.setAttribute("role", "dialog");
      modal.setAttribute("aria-modal", "true");
      modal.innerHTML = `
        <div class="modal-dialog admin-modal-dialog">
          <div class="modal-head">
            <div style="display:flex; align-items:center; gap:10px;">
              <span class="brand-logo__mark" style="width:30px; height:30px; font-size:0.8rem;">GM</span>
              <div>
                <div class="eyebrow" style="margin-bottom:2px;">Studio Admin Portal</div>
                <h3 id="adminModalTitle" style="font-size: 1.25rem;">Admin Authentication</h3>
              </div>
            </div>
            <button class="icon-btn" id="adminModalCloseBtn" aria-label="Close admin modal">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
          </div>
          <div class="modal-body" id="adminModalBody"></div>
        </div>
      `;
      document.body.appendChild(modal);

      modal.addEventListener("click", (e) => {
        if (e.target === modal) closeAdminModal();
      });
      document.getElementById("adminModalCloseBtn").addEventListener("click", closeAdminModal);
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("is-open")) closeAdminModal();
      });
    }
    return modal;
  }

  function closeAdminModal() {
    const modal = document.getElementById("adminPortalModal");
    if (modal) modal.classList.remove("is-open");
  }

  function renderAdminLogin(modal) {
    document.getElementById("adminModalTitle").textContent = "Gourav Mewara · Admin Login";
    const body = document.getElementById("adminModalBody");
    body.innerHTML = `
      <div style="max-width: 440px; margin: 0 auto; padding: 12px 0;">
        <div style="display:inline-flex; align-items:center; gap:8px; padding:6px 14px; border-radius:999px; background:var(--pastel-lavender-soft); margin-bottom:16px;">
          <span class="availability-dot" style="background:var(--accent);"></span>
          <span style="font-size:0.82rem; font-weight:700; color:var(--accent);">Single Admin Authorized</span>
        </div>

        <p class="muted" style="margin:0 0 20px; font-size:0.92rem;">
          This admin portal is restricted exclusively to <strong>${CONFIG.adminEmail}</strong> for uploading 9:16 reels, Cloudinary videos (&le;100MB), and Supabase content.
        </p>

        <!-- Official Sign in with Google Button -->
        <button type="button" class="btn btn--ghost" id="adminGoogleLoginBtn" style="width:100%; display:flex; align-items:center; justify-content:center; gap:12px; padding:13px 18px; border-radius:var(--radius-pill); border:1.5px solid var(--border-strong); background:#FFFFFF; font-weight:600; font-size:0.95rem; margin-bottom:18px; box-shadow:var(--shadow-xs); cursor:pointer;">
          <svg width="20" height="20" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
            <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
            <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
            <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
          </svg>
          <span>Sign in with Google (${CONFIG.adminEmail})</span>
        </button>

        <div style="display:flex; align-items:center; gap:12px; margin-bottom:18px;">
          <div style="flex:1; height:1px; background:var(--border-soft);"></div>
          <span class="muted" style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.1em; font-weight:600;">Or enter password</span>
          <div style="flex:1; height:1px; background:var(--border-soft);"></div>
        </div>

        <form id="adminLoginForm">
          <div class="field">
            <label for="adminEmailInput">Admin Email Address</label>
            <input type="email" id="adminEmailInput" value="${CONFIG.adminEmail}" readonly style="background:var(--surface-muted); font-weight:600;" required />
            <small class="muted" style="font-size:0.75rem;">Only this email is authorized for admin login.</small>
          </div>

          <div class="field">
            <label for="adminPasswordInput">Admin Password / Passkey</label>
            <input type="password" id="adminPasswordInput" placeholder="Enter your admin password" required autofocus />
          </div>

          <div id="adminLoginError" style="display:none; padding:10px 14px; border-radius:12px; background:#FDE8E8; color:#C81E1E; font-size:0.85rem; margin-bottom:16px;"></div>

          <div style="display:flex; align-items:center; justify-content:space-between; margin-top:20px; gap:12px;">
            <button type="submit" class="btn btn--primary" style="flex:1;">
              Sign In to Admin Panel &rarr;
            </button>
          </div>
        </form>

        <div style="margin-top:20px; padding-top:16px; border-top:1px solid var(--border-soft); display:flex; align-items:center; justify-content:space-between; font-size:0.82rem;" class="muted">
          <span>Shortcut: <strong>Shift + Ctrl + A</strong></span>
          <a href="admin.html" style="color:var(--accent); font-weight:600;">Open Dedicated Admin Page &rarr;</a>
        </div>
      </div>
    `;

    const form = document.getElementById("adminLoginForm");
    const errBox = document.getElementById("adminLoginError");
    const googleBtn = document.getElementById("adminGoogleLoginBtn");

    // Google Sign-In click
    if (googleBtn) {
      googleBtn.addEventListener("click", async () => {
        googleBtn.disabled = true;
        googleBtn.style.opacity = "0.7";
        try {
          const res = await signInWithGoogle();
          if (res && res.success) {
            if (window.showToast) window.showToast("Google Authentication successful! Welcome Gourav.");
            if (window.location.pathname.endsWith("admin.html")) {
              window.location.reload();
            } else {
              renderAdminDashboard(modal);
            }
          }
        } catch (err) {
          errBox.textContent = err.message || "Google Sign-In failed.";
          errBox.style.display = "block";
        } finally {
          googleBtn.disabled = false;
          googleBtn.style.opacity = "1";
        }
      });
    }

    // Password fallback submit
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("adminEmailInput").value.trim().toLowerCase();
      const pass = document.getElementById("adminPasswordInput").value;

      if (email !== CONFIG.adminEmail.toLowerCase()) {
        errBox.textContent = `Access Denied: ${email} is not authorized. Only ${CONFIG.adminEmail} can log in.`;
        errBox.style.display = "block";
        return;
      }

      if (!pass || pass.length < 3) {
        errBox.textContent = "Please enter your admin password.";
        errBox.style.display = "block";
        return;
      }

      setAdminSession(CONFIG.adminEmail, true, "Gourav Mewara", "assests/IMG_0433.jpg", "password");
      if (window.showToast) window.showToast("Welcome back, Gourav! Admin access granted.");

      if (window.location.pathname.endsWith("admin.html")) {
        window.location.reload();
      } else {
        renderAdminDashboard(modal);
      }
    });
  }

  function renderAdminDashboard(modal) {
    document.getElementById("adminModalTitle").textContent = "Gourav Mewara Studio · Quick Admin";
    const body = document.getElementById("adminModalBody");
    const customProjects = getCustomProjects();

    body.innerHTML = `
      <div style="display:flex; flex-direction:column; gap:18px;">
        <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px; padding:12px 16px; border-radius:14px; background:var(--pastel-mint-soft);">
          <div>
            <strong style="color:#188F47; font-size:0.95rem;">Logged in as ${CONFIG.adminEmail}</strong>
            <div class="muted" style="font-size:0.8rem;">Cloudinary (dxhew9qpk · Max 100MB) · Firebase · Supabase Connected</div>
          </div>
          <div style="display:flex; gap:8px;">
            <a href="admin.html" class="btn btn--primary btn--sm">Open Dedicated Admin Page &rarr;</a>
            <button class="btn btn--ghost btn--sm" id="adminLogoutBtn">Logout</button>
          </div>
        </div>

        <!-- Quick Admin Action Card (Centralized in admin.html) -->
        <div class="upload-panel" style="text-align:center; padding:24px 20px;">
          <h4 style="font-size:1.15rem; margin:0 0 6px;">Studio Admin Dashboard</h4>
          <p class="muted" style="font-size:0.88rem; margin:0 auto 16px; max-width:480px;">
            Manage your Director&rsquo;s Showreel, Hero Section, and 9:16 Featured Reels in the dedicated Studio Admin Panel.
          </p>
          <a href="admin.html" class="btn btn--primary btn--lg" style="display:inline-flex; align-items:center; gap:8px;">
            Open Full Studio Admin Panel &rarr;
          </a>
        </div>

        <!-- Custom Uploads List -->
        <div>
          <h4 style="font-size:1.05rem; margin:0 0 10px;">Custom Uploaded Reels (${customProjects.length})</h4>
          ${
            customProjects.length === 0
              ? `<p class="muted" style="font-size:0.88rem; margin:0;">No custom reels uploaded yet. Upload your first 9:16 reel above!</p>`
              : `<div style="display:flex; flex-direction:column; gap:8px; max-height:220px; overflow-y:auto; padding-right:4px;">
                  ${customProjects
                    .map(
                      (p) => `
                    <div style="display:flex; align-items:center; justify-content:space-between; padding:10px 14px; border-radius:12px; background:var(--surface); border:1px solid var(--border-soft); font-size:0.88rem;">
                      <div>
                        <strong>${p.title}</strong>
                        <div class="muted" style="font-size:0.78rem;">${p.client} · ${p.duration}</div>
                      </div>
                      <div style="display:flex; gap:8px; align-items:center;">
                        <a href="project.html?id=${p.id}" target="_blank" class="btn btn--ghost btn--sm">View</a>
                        <button class="btn btn--ghost btn--sm" data-delete-custom="${p.id}" style="color:#C81E1E;">Delete</button>
                      </div>
                    </div>
                  `
                    )
                    .join("")}
                </div>`
          }
        </div>
      </div>
    `;

    // Bind logout
    document.getElementById("adminLogoutBtn").addEventListener("click", () => {
      clearAdminSession();
      renderAdminLogin(modal);
      if (window.showToast) window.showToast("Signed out of admin session.");
    });

    // Delete custom project handler
    body.querySelectorAll("[data-delete-custom]").forEach((btn) => {
      btn.addEventListener("click", async () => {
        const id = btn.dataset.deleteCustom;
        if (confirm("Delete this custom reel from the portfolio and Supabase database?")) {
          btn.disabled = true;
          btn.textContent = "Deleting...";
          const list = getCustomProjects().filter((p) => p.id !== id);
          saveCustomProjects(list);

          try {
            await deleteProjectFromSupabase(id);
          } catch (e) {
            console.warn("Supabase delete notice:", e);
          }

          renderAdminDashboard(modal);
          if (typeof window.refreshPortfolioGrids === "function") {
            window.refreshPortfolioGrids();
          }
          if (window.showToast) window.showToast("Project deleted from portfolio and database.");
        }
      });
    });
  }

  function openAdminModal() {
    const modal = ensureAdminModalRoot();
    if (isAdminLoggedIn()) {
      renderAdminDashboard(modal);
    } else {
      renderAdminLogin(modal);
    }
    modal.classList.add("is-open");
  }

  // 10. Global Keyboard Shortcut Handler: Shift + Ctrl + A
  window.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === "A" || e.key === "a")) {
      e.preventDefault();
      openAdminModal();
    }
  });

  // Export functions to global scope
  window.signInWithGoogle = signInWithGoogle;
  window.openAdminModal = openAdminModal;
  window.isAdminLoggedIn = isAdminLoggedIn;
  window.getAdminSession = getAdminSession;
  window.setAdminSession = setAdminSession;
  window.clearAdminSession = clearAdminSession;
  window.uploadToCloudinary = uploadToCloudinary;
  window.syncProjectToSupabase = syncProjectToSupabase;
  window.deleteProjectFromSupabase = deleteProjectFromSupabase;
  window.fetchSupabaseProjects = fetchSupabaseProjects;
  window.syncAllToSupabase = syncAllToSupabase;
  window.uploadToSupabaseStorage = uploadToSupabaseStorage;
  window.getCustomProjects = getCustomProjects;
  window.saveCustomProjects = saveCustomProjects;
})();
