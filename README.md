# Cinestrokee

Official portfolio and studio showcase for **Gourav Mewara** — Lead Video Editor, Storyteller, Scriptwriter, and Graphic Designer based in India.

![Cinestrokee Studio](assests/IMG_0433.jpg)

---

## 🎬 Overview

Cinestrokee is an editorial-grade, high-performance portfolio crafted for filmmakers, creators, and D2C brands. Built around intentional pacing, quiet emotion, and filmic color grading, the platform features:

- **9:16 Fixed-Ratio Reel Showcase**: Frame-accurate vertical player with direct HTML5 video rendering, metadata previews (`#t=0.001`), and hover playback.
- **Director's Showreel**: Full-screen master player with 4K streaming and custom cover frames.
- **Dedicated Discipline Hubs**:
  - Video Editing (9:16 Brand Films & Commercials)
  - Motion Graphics (Kinetic Typography & Brand Systems)
  - Graphic Design (Editorial Posters & YouTube Thumbnails)
  - Script Writing (AV Scripts & Narrative Treatments)
  - Storytelling (Documentary & Case Studies)
  - Freelance Collaboration & Retainers
- **Studio Admin Suite (`Shift + Ctrl + A`)**:
  - **Firebase Authentication**: Single-admin Google Sign-In (`gourav.mewara4242@gmail.com`).
  - **Cloudinary Video Engine**: Direct video hosting (`dxhew9qpk`) with strict $\le 100\text{ MB}$ client-side validation.
  - **Supabase Cloud Sync**: Realtime database synchronization (`projects` table) for live inventory management.
  - **Showreel & Hero Manager**: Dedicated tabs for updating the homepage hero portrait, badges, copy, and director's showreel.

---

## 🛠️ Tech Stack

- **Frontend**: Pure Semantic HTML5, Modern CSS (Design Tokens, KaTeX, Responsive Grid & Flexbox), Vanilla ES6+ JavaScript.
- **Video Delivery**: Cloudinary REST API (`dxhew9qpk`) with unsigned preset routing.
- **Authentication**: Google Firebase Auth SDK v10.
- **Database**: Supabase PostgreSQL (`cigphrvgzalovxyvyvah`).
- **Typography**: Fraunces & DM Sans (Self-hosted Google Fonts).

---

## 🚀 Getting Started

1. Clone or download the repository:
   ```bash
   git clone https://github.com/gouravmewara4242-lab/Cinestrokee.git
   cd Cinestrokee
   ```

2. Serve locally with any static web server:
   ```powershell
   # Using PowerShell
   powershell -ExecutionPolicy Bypass -File server.ps1 -Port 3000
   ```
   Or using Python:
   ```bash
   python -m http.server 3000
   ```

3. Open in your browser:
   - **Portfolio**: [http://localhost:3000](http://localhost:3000)
   - **Studio Admin**: [http://localhost:3000/admin.html](http://localhost:3000/admin.html) or press `Shift + Ctrl + A` from any page.

---

## 📄 License & Attribution

Designed and developed for Gourav Mewara. All rights reserved.
