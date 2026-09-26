/**
 * Wash & Clean Up — shared icon set
 * Small inline-SVG helpers so every screen (landing, student, admin) draws
 * the washer / iron / wrench / chat / etc. glyphs identically.
 */

const WcuIcon = {
  // ==========================================
  // 1. ไอคอนเครื่องซักผ้า
  // ==========================================
  washer: (cls = "", status = "default") => {
    if (status === "busy") {
      // (กำลังทำงาน) ปิดฝา + ถังซักหมุน
      return `<svg class="${cls}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <style>@keyframes spin-drum { 100% { transform: rotate(360deg); } }</style>
        <rect x="4" y="3" width="40" height="42" rx="8" fill="currentColor" fill-opacity="0.08"/>
        <rect x="4" y="3" width="40" height="42" rx="8" stroke="currentColor" stroke-width="2"/>
        <circle cx="10" cy="8" r="1.4" fill="currentColor"/>
        <circle cx="15" cy="8" r="1.4" fill="currentColor"/>
        <circle cx="24" cy="27" r="12" fill="#fff" stroke="currentColor" stroke-width="2"/>
        <g style="transform-origin: 24px 27px; animation: spin-drum 1.5s linear infinite;">
          <circle cx="24" cy="27" r="8" stroke="currentColor" stroke-width="2"/>
          <path d="M19 24.5c1.5 2 3.5 2 5 0s3.5-2 5 0" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
          <path d="M19 29.5c1.5 2 3.5 2 5 0s3.5-2 5 0" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
        </g>
      </svg>`;
    } 
    else if (status === "available") {
      // (ว่าง) นิ่งๆ เปิดฝาไว้ + ประกายวิ้ง 1 ดวง (ไม่กะพริบ)
      return `<svg class="${cls}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="3" width="40" height="42" rx="8" fill="currentColor" fill-opacity="0.08"/>
        <rect x="4" y="3" width="40" height="42" rx="8" stroke="currentColor" stroke-width="2"/>
        <circle cx="10" cy="8" r="1.4" fill="currentColor"/>
        <circle cx="15" cy="8" r="1.4" fill="currentColor"/>
        
        <!-- รูด้านในถังซัก (สีเทาอ่อน) -->
        <circle cx="26" cy="27" r="10" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2"/>
        <!-- ฝาเครื่องที่เปิดออกด้านซ้าย -->
        <ellipse cx="12" cy="27" rx="4.5" ry="11" fill="#fff" stroke="currentColor" stroke-width="2"/>
        
        <!-- ประกายวิ้งๆ มุมขวาบน (แบบนิ่ง) -->
        <path d="M38 12l1 2 2 1-2 1-1 2-1-2-2-1 2-1z" fill="currentColor" opacity="0.45"/>
      </svg>`;
    } 
    else if (status === "broken") {
      // (พัง) กากบาททับ
      return `<svg class="${cls}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="3" width="40" height="42" rx="8" fill="currentColor" fill-opacity="0.08"/>
        <rect x="4" y="3" width="40" height="42" rx="8" stroke="currentColor" stroke-width="2"/>
        <circle cx="10" cy="8" r="1.4" fill="currentColor"/>
        <circle cx="15" cy="8" r="1.4" fill="currentColor"/>
        <circle cx="24" cy="27" r="12" fill="#fff" stroke="currentColor" stroke-width="2"/>
        <path d="M16 19l16 16M32 19L16 35" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      </svg>`;
    } 
    else {
      // (ค่าเริ่มต้น)
      return `<svg class="${cls}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="3" width="40" height="42" rx="8" fill="currentColor" fill-opacity="0.08"/>
        <rect x="4" y="3" width="40" height="42" rx="8" stroke="currentColor" stroke-width="2"/>
        <circle cx="10" cy="8" r="1.4" fill="currentColor"/>
        <circle cx="15" cy="8" r="1.4" fill="currentColor"/>
        <circle cx="24" cy="27" r="12" fill="#fff" stroke="currentColor" stroke-width="2"/>
        <circle cx="24" cy="27" r="7.5" stroke="currentColor" stroke-width="2"/>
        <path d="M20 25c1.2 2 2.8 2 4 0s2.8-2 4 0" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
      </svg>`;
    }
  },

  // ==========================================
  // 2. ไอคอนเตารีด (ดีไซน์ใหม่)
  // ==========================================
  iron: (cls = "", status = "default") => {
    if (status === "busy") {
      // (กำลังทำงาน) ไถไปมา + พ่นไอน้ำ + ไฟแดง
      return `<svg class="${cls}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <style>
          @keyframes iron-slide { 0%, 100% { transform: translateX(-2px); } 50% { transform: translateX(4px); } }
          @keyframes steam-puff { 0% { transform: translateY(-2px); opacity: 0; } 50% { opacity: 0.8; } 100% { transform: translateY(4px); opacity: 0; } }
        </style>
        <!-- โต๊ะรองรีด -->
        <path d="M2 42h44" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        
        <!-- ตัวเตารีดเคลื่อนที่ -->
        <g style="animation: iron-slide 1.5s ease-in-out infinite;">
          <!-- หูจับ -->
          <path d="M8 18v-8c0-6 26-6 26 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/>
          <!-- โครงเครื่อง -->
          <path d="M8 38h32 A 20 20 0 0 0 20 18 H 8 Z" fill="#fff" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
          <!-- แผ่นความร้อน -->
          <path d="M8 32h29.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          <!-- หน้าปัด -->
          <circle cx="16" cy="25" r="4" stroke="currentColor" stroke-width="2"/>
          <path d="M16 25l2.5-2.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          <!-- ไฟสถานะทำงาน (สีแดง) -->
          <circle cx="26" cy="25" r="2" fill="#e2534a"/>
          
          <!-- ไอน้ำพ่นลง -->
          <path d="M12 40v4 M20 40v6 M28 40v4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" style="animation: steam-puff 1s infinite;"/>
        </g>
      </svg>`;
    } 
    else if (status === "available") {
      // (ว่าง) ตั้งนิ่งๆ + ไฟเขียวกะพริบช้าๆ + ประกายวิ้ง 1 ดวง
      return `<svg class="${cls}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <style>
          @keyframes ready-pulse { 0%, 100% { opacity: 0.3; } 50% { opacity: 1; } }
        </style>
        <!-- โต๊ะรองรีด -->
        <path d="M2 42h44" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        
        <!-- หูจับ -->
        <path d="M8 18v-8c0-6 26-6 26 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/>
        <!-- โครงเครื่อง -->
        <path d="M8 38h32 A 20 20 0 0 0 20 18 H 8 Z" fill="#fff" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
        <!-- แผ่นความร้อน -->
        <path d="M8 32h29.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        <!-- หน้าปัด -->
        <circle cx="16" cy="25" r="4" stroke="currentColor" stroke-width="2"/>
        <path d="M16 25l2.5-2.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        <!-- ไฟสถานะว่าง (สีเขียว กะพริบหรี่ๆ) -->
        <circle cx="26" cy="25" r="2" fill="#3ebd6e" style="animation: ready-pulse 2.5s ease-in-out infinite;"/>

        <!-- ประกายวิ้งๆ มุมขวาบน -->
        <path d="M38 12l1 2 2 1-2 1-1 2-1-2-2-1 2-1z" fill="currentColor" opacity="0.45"/>
      </svg>`;
    } 
    else if (status === "broken") {
      // (พัง) กากบาททับใหญ่
      return `<svg class="${cls}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 42h44" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        <path d="M8 18v-8c0-6 26-6 26 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/>
        <path d="M8 38h32 A 20 20 0 0 0 20 18 H 8 Z" fill="#f8fafc" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
        <path d="M8 32h29.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        <circle cx="16" cy="25" r="4" stroke="currentColor" stroke-width="2"/>
        <path d="M16 25l2.5-2.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        
        <!-- กากบาททับ -->
        <path d="M14 16l16 16M30 16L14 32" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
      </svg>`;
    } 
    else {
      // (ค่าเริ่มต้น สำหรับโชว์ในแถบเมนูด้านล่าง)
      return `<svg class="${cls}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 42h44" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        <path d="M8 18v-8c0-6 26-6 26 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/>
        <path d="M8 38h32 A 20 20 0 0 0 20 18 H 8 Z" fill="#fff" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
        <path d="M8 32h29.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        <circle cx="16" cy="25" r="4" stroke="currentColor" stroke-width="2"/>
        <path d="M16 25l2.5-2.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>`;
    }
  },

  // ==========================================
  // 3. ไอคอนอื่นๆ ในระบบ
  // ==========================================
  wrench: (cls = "") => `<svg class="${cls}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a4 4 0 0 0-5.4 4.9L4 16.5V20h3.5l5.3-5.3a4 4 0 0 0 4.9-5.4l-2.6 2.6-2-2z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/></svg>`,
  chat: (cls = "") => `<svg class="${cls}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8A2.5 2.5 0 0 1 17.5 16H10l-4.5 4v-4H6.5A2.5 2.5 0 0 1 4 13.5v-8z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="8.5" cy="9.5" r="1" fill="currentColor"/><circle cx="12" cy="9.5" r="1" fill="currentColor"/><circle cx="15.5" cy="9.5" r="1" fill="currentColor"/></svg>`,
  back: (cls = "") => `<svg class="${cls}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 5 7 12l7.5 7" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  plus: (cls = "") => `<svg class="${cls}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>`,
  check: (cls = "") => `<svg class="${cls}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9.2" stroke="currentColor" stroke-width="1.8"/><path d="M8 12.3l2.5 2.5L16 9.5" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  cross: (cls = "") => `<svg class="${cls}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9.2" stroke="currentColor" stroke-width="1.8"/><path d="M9 9l6 6M15 9l-6 6" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/></svg>`,
  trash: (cls = "") => `<svg class="${cls}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 7h14M9.5 7V5.5a1.5 1.5 0 0 1 1.5-1.5h2a1.5 1.5 0 0 1 1.5 1.5V7M7 7l.8 12a2 2 0 0 0 2 1.9h4.4a2 2 0 0 0 2-1.9L17 7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.2 10.5v6M13.8 10.5v6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
  person: (cls = "") => `<svg class="${cls}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8.3" r="3.3" stroke="currentColor" stroke-width="1.8"/><path d="M5 19c1-3.6 4-5.4 7-5.4s6 1.8 7 5.4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  bubble: (cls = "") => `<svg class="${cls}" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"/></svg>`
};