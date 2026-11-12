/* ==========================================================================
   GOURAV MEWARA PORTFOLIO — CENTRALIZED DATA STORE (INDIA · INR ₹)
   - 1.5+ Years of Professional Video Editing Experience
   - Real-world Content Pipeline (Dynamic sync with Supabase & Admin Panel)
   - Pricing in Indian Rupees (₹)
   ========================================================================== */

window.PORTFOLIO_DATA = {
  brand: {
    name: "Gourav Mewara",
    initials: "GM",
    title: "Video Editor & Creative Storyteller",
    tagline: "I turn ideas into stories that move people.",
    rolesLine: "Video Editor • Scriptwriter • Graphic Designer • Storyteller",
    email: "gourav.mewara4242@gmail.com",
    phone: "8905564811",
    phoneDisplay: "+91 89055 64811",
    whatsappUrl: "https://wa.me/918905564811",
    linkedinUrl: "https://www.linkedin.com/in/gourav-mewara4811/",
    location: "India · Remote Worldwide (IST)",
    availability: "Available for freelance · India (IST)",
    experience: "1.5+ Years",
    portraitPath: "assests/IMG_0433.jpg",
    socials: [
      { label: "WhatsApp", url: "https://wa.me/918905564811", handle: "+91 89055 64811" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/gourav-mewara4811/", handle: "gourav-mewara4811" },
      { label: "Instagram", url: "https://instagram.com", handle: "@gouravmewara.cuts" },
      { label: "YouTube", url: "https://youtube.com", handle: "Gourav Mewara" }
    ]
  },

  categories: [
    {
      id: "video-editing",
      name: "Video Editing",
      shortDesc: "Rhythmic 9:16 reels, color grading, and narrative pacing for brand films, YouTube essays, and documentaries.",
      tagClass: "tag--video-editing",
      surfaceClass: "surface-video-editing",
      pastelHex: "#C9B8F0",
      page: "video-editing.html",
      icon: "film",
      intro: "From high-retention Instagram Reels and YouTube essays to crisp brand campaigns, every cut is shaped around emotional pacing, sound design, and warm filmic color."
    },
    {
      id: "motion-graphics",
      name: "Motion Graphics",
      shortDesc: "Kinetic typography, modular brand systems, logo reveals, and fluid 2D/3D explainer sequences.",
      tagClass: "tag--motion-graphics",
      surfaceClass: "surface-motion-graphics",
      pastelHex: "#CFE4FA",
      page: "motion-graphics.html",
      icon: "sparkles",
      intro: "Thoughtful motion that clarifies complex ideas without visual noise—built with bespoke easing curves, tactile typography, and seamless brand integration."
    },
    {
      id: "graphic-design",
      name: "Graphic Design",
      shortDesc: "Editorial posters, high-CTR YouTube thumbnails, visual identities, and cohesive social art direction.",
      tagClass: "tag--graphic-design",
      surfaceClass: "surface-graphic-design",
      pastelHex: "#FFD9C7",
      page: "graphic-design.html",
      icon: "palette",
      intro: "Print-inspired layouts, packaging touches, posters, and digital thumbnails crafted with calm typography, balanced negative space, and tactile warmth."
    },
    {
      id: "script-writing",
      name: "Script Writing",
      shortDesc: "Retention-led YouTube & Reel scripts, commercial voiceovers, and narrative treatments written to be heard.",
      tagClass: "tag--script-writing",
      surfaceClass: "surface-script-writing",
      pastelHex: "#FFF1B8",
      page: "script-writing.html",
      icon: "pen-tool",
      intro: "Every unforgettable edit starts on the page. I write hooks that earn attention honestly, visual cues for the edit, and voiceover lines that breathe."
    },
    {
      id: "storytelling",
      name: "Storytelling",
      shortDesc: "End-to-end narrative architecture turning founder journeys and product launches into human stories.",
      tagClass: "tag--storytelling",
      surfaceClass: "surface-storytelling",
      pastelHex: "#CDEBDD",
      page: "storytelling.html",
      icon: "book-open",
      intro: "Story-driven direction across concept, interview structure, visual arc, and sound—designed so audiences feel connected before they ever see a call to action."
    },
    {
      id: "freelance",
      name: "Freelance Projects",
      shortDesc: "Embedded creative partner for Indian & global startups, creators, and D2C brands needing measurable growth.",
      tagClass: "tag--freelance",
      surfaceClass: "surface-freelance",
      pastelHex: "#F7D6E4",
      page: "freelance-projects.html",
      icon: "briefcase",
      intro: "Focused client engagements pairing creative direction with reliable turnaround, clean deliverables, and clear business outcomes."
    }
  ],

  stats: [
    { number: "25+", label: "Projects Completed" },
    { number: "100%", label: "On-Time Delivery" },
    { number: "1.5+", label: "Years Experience" },
    { number: "60+", label: "Videos & Reels Delivered" }
  ],

  process: [
    {
      step: "01",
      title: "Brief",
      desc: "We align on your audience, visual references, tone, and measurable goals.",
      surface: "surface-video-editing"
    },
    {
      step: "02",
      title: "Script",
      desc: "I map the narrative spine—3-second hook, pacing beats, visual cues, and voiceover—before cutting.",
      surface: "surface-script-writing"
    },
    {
      step: "03",
      title: "Edit",
      desc: "Assembly, rhythmic 9:16 or 16:9 cutting, custom motion titles, atmospheric sound, and filmic color.",
      surface: "surface-graphic-design"
    },
    {
      step: "04",
      title: "Deliver",
      desc: "Frame-accurate review rounds, crisp platform-ready exports, and organized project masters.",
      surface: "surface-storytelling"
    }
  ],

  testimonials: [
    {
      quote: "Gourav’s pacing, hook timing, and filmic color grading gave our vertical reels an unmistakable premium feel. Our audience retention consistently exceeds 70%.",
      name: "Collaborative Creator",
      role: "D2C Brand Partner · India",
      surface: "surface-video-editing",
      tag: "9:16 Reels"
    },
    {
      quote: "Remarkable narrative clarity and swift turnaround. He knows how to cut footage to human emotion rather than just following loud trends.",
      name: "Independent Creator",
      role: "YouTube & Narrative Video",
      surface: "surface-script-writing",
      tag: "Video Storytelling"
    }
  ],

  // Real projects list: Starts clean and populates dynamically from Admin Panel & Supabase
  projects: [],

  services: [
    {
      name: "Short-Form Reel Retainer",
      tag: "9:16 Video Editing + Strategy",
      tagClass: "tag--video-editing",
      surface: "surface-video-editing",
      price: "₹18,000",
      period: "/ month",
      turnaround: "48–72 hr per reel",
      desc: "Consistent, tasteful 9:16 vertical storytelling for founders, D2C brands, and creators who refuse loud template edits.",
      includes: [
        "8 custom-edited 9:16 Reels / Shorts per month",
        "Hook scripting & narrative pacing notes",
        "Custom pastel kinetic captions & sound design",
        "2 rounds of frame-accurate revisions",
        "Matching custom cover thumbnails"
      ]
    },
    {
      name: "Brand Film & Narrative Edit",
      tag: "Signature Package",
      tagClass: "tag--storytelling",
      surface: "surface-storytelling",
      price: "₹35,000",
      period: "starting",
      turnaround: "10–14 business days",
      desc: "Flagship 90s–3m hero film for product launches, homepage headers, or founder documentaries.",
      includes: [
        "Creative kickoff + full AV script / story arc",
        "Fine cut editing & rhythmic sound mixing",
        "Filmic color grading in DaVinci Resolve",
        "Bespoke serif title cards & subtle motion",
        "4K master + 9:16 & 4:5 social cutdowns"
      ]
    },
    {
      name: "YouTube Documentary Partner",
      tag: "Script + Edit + Thumbnail",
      tagClass: "tag--script-writing",
      surface: "surface-script-writing",
      price: "₹14,500",
      period: "/ episode",
      turnaround: "5–7 business days",
      desc: "End-to-end editorial packaging for long-form YouTube channels focused on depth and high retention.",
      includes: [
        "Retention-tested script polish or full draft",
        "8–18 minute narrative edit with visual chapters",
        "Custom motion graphics & map/diagram callouts",
        "2 bespoke editorial thumbnail concepts",
        "Multi-track audio cleanup & loudness leveling"
      ]
    },
    {
      name: "Motion Identity & Design Kit",
      tag: "Motion + Graphic Design",
      tagClass: "tag--motion-graphics",
      surface: "surface-motion-graphics",
      price: "₹24,000",
      period: "one-time",
      turnaround: "10 business days",
      desc: "A reusable visual toolkit so your brand’s videos, reels, and social feeds always look unmistakably yours.",
      includes: [
        "Animated logo sting (light & dark variants)",
        "10 reusable Premiere/After Effects title templates",
        "Custom lower-thirds & transition wipes",
        "6 social carousel / poster layout templates",
        "Typography & pastel color usage mini-guide"
      ]
    }
  ],

  faqs: [
    {
      q: "What files do I need to send to start a project?",
      a: "A link to your raw footage (Google Drive, Dropbox, or frame.io), any script or voiceover notes you have, and 1–2 visual references matching the tone you love."
    },
    {
      q: "What editing tools do you use?",
      a: "Adobe Premiere Pro for rhythmic assembly and sound design, DaVinci Resolve Studio for filmic color grading, and After Effects for kinetic typography."
    },
    {
      q: "How do revisions work?",
      a: "Every engagement includes two comprehensive revision rounds with timestamped frame comments to ensure the final master feels right."
    },
    {
      q: "How fast is turnaround?",
      a: "Individual 9:16 reels turn around in 48 to 72 hours. Larger brand films and documentary edits typically take 7 to 14 days."
    }
  ]
};
