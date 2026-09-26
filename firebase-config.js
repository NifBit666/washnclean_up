/* ============================================================
 * ตั้งค่า Firebase ของ Wash & Clean Up
 * ------------------------------------------------------------
 * 1) วาง firebaseConfig จาก Firebase Console แทน null ด้านล่าง
 *    (Project settings → General → Your apps → Web app → SDK setup and configuration → Config)
 *    ต้องมีบรรทัด databaseURL ด้วย (ได้มาหลังจากสร้าง Realtime Database แล้ว)
 * 2) อีเมลแอดมินใน WCU_ADMIN_EMAILS ต้องตรงกับบัญชีที่สร้างใน Authentication
 *    และตรงกับอีเมลในไฟล์ database.rules.json
 *
 * ถ้าปล่อย WCU_FIREBASE_CONFIG เป็น null เว็บจะทำงานแบบเดิม
 * (เก็บข้อมูลใน localStorage ของเครื่องนี้เท่านั้น ล็อกอินด้วย admin / admin1234)
 *
 * หมายเหตุ: apiKey ของ Firebase ฝั่งเว็บเปิดเผยได้ตามปกติ ความปลอดภัยของข้อมูลอยู่ที่ database.rules.json
 * ============================================================ */

window.WCU_FIREBASE_CONFIG = {
  apiKey: "AIzaSyB6HqbQGRMb5Pqx5D4c5cOn6TSttQKmGx4",
  authDomain: "washncleanup.firebaseapp.com",
  // ★ ต้องตรงกับ URL ที่แสดงด้านบนแท็บ Data ของ Realtime Database (ค่านี้คือกรณีเลือก Singapore)
  databaseURL: "https://washncleanup-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "washncleanup",
  storageBucket: "washncleanup.firebasestorage.app",
  messagingSenderId: "893233756503",
  appId: "1:893233756503:web:822cd593c8051f1556e612",
  measurementId: "G-B7E5WR29BX",
};
/* ตัวอย่าง:
window.WCU_FIREBASE_CONFIG = {
  apiKey: "AIza...",
  authDomain: "washnclean-up.firebaseapp.com",
  databaseURL: "https://washnclean-up-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "washnclean-up",
  storageBucket: "washnclean-up.firebasestorage.app",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef",
};
*/

// พิมพ์แค่ "admin" ในหน้าเข้าสู่ระบบได้เลย ระบบจะเติมเป็น admin@washnclean.app ให้
window.WCU_ADMIN_EMAILS = ["admin@washnclean.app"];
