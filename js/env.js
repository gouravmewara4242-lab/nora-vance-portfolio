/**
 * ==============================================================================
 * Gourav Mewara Portfolio — Global Environment & Cloud Service Variables
 * ==============================================================================
 * Centralized configuration for Firebase Google Auth, Supabase Cloud Storage,
 * and Cloudinary Video Delivery (videos strictly under 100 MB).
 */
(function () {
  "use strict";

  // Base environment defaults as requested
  const BASE_ENV = {
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
      tableName: "projects",
      reelsTable: "reels"
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

  // Merge any runtime overrides saved via the Admin Cloud Settings tab
  let storedOverrides = {};
  try {
    const raw = localStorage.getItem("gourav_env_overrides");
    if (raw) storedOverrides = JSON.parse(raw);
  } catch (e) {
    console.warn("Could not read env overrides from localStorage:", e);
  }

  const mergedEnv = {
    AUTH: Object.assign({}, BASE_ENV.AUTH, storedOverrides.AUTH || {}),
    FIREBASE: Object.assign({}, BASE_ENV.FIREBASE, storedOverrides.FIREBASE || {}),
    SUPABASE: Object.assign({}, BASE_ENV.SUPABASE, storedOverrides.SUPABASE || {}),
    CLOUDINARY: Object.assign({}, BASE_ENV.CLOUDINARY, storedOverrides.CLOUDINARY || {})
  };

  // Helper method to retrieve values
  function getEnv(path) {
    if (!path) return mergedEnv;
    const parts = path.split(".");
    let curr = mergedEnv;
    for (let p of parts) {
      if (curr && typeof curr === "object" && p in curr) {
        curr = curr[p];
      } else {
        return undefined;
      }
    }
    return curr;
  }

  // Method to persist overrides from Admin UI
  function updateEnvOverrides(newOverrides) {
    try {
      const existingRaw = localStorage.getItem("gourav_env_overrides");
      const existing = existingRaw ? JSON.parse(existingRaw) : {};
      const updated = Object.assign({}, existing, newOverrides);
      localStorage.setItem("gourav_env_overrides", JSON.stringify(updated));
      return true;
    } catch (e) {
      console.error("Failed to save env overrides:", e);
      return false;
    }
  }

  // Clear overrides back to default
  function resetEnvOverrides() {
    try {
      localStorage.removeItem("gourav_env_overrides");
      return true;
    } catch (e) {
      return false;
    }
  }

  // Mount to global window
  window.__ENV__ = mergedEnv;
  window.getEnv = getEnv;
  window.updateEnvOverrides = updateEnvOverrides;
  window.resetEnvOverrides = resetEnvOverrides;

  console.log("Studio Admin Environment Initialized:", {
    adminEmail: mergedEnv.AUTH.adminEmail,
    firebaseProject: mergedEnv.FIREBASE.projectId,
    supabaseUrl: mergedEnv.SUPABASE.url,
    cloudinaryCloud: mergedEnv.CLOUDINARY.cloudName,
    maxVideoLimit: `${mergedEnv.CLOUDINARY.maxVideoMB} MB`
  });
})();
