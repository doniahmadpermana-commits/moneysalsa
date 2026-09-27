// Isi dengan konfigurasi dari Firebase Console:
// Project settings → General → Your apps → Web app → "SDK setup and configuration" → Config.
// (Nilai-nilai ini memang boleh publik; keamanan data dijaga oleh firestore.rules.)
// Selama masih null, aplikasi berjalan tanpa sinkron (data hanya di HP masing-masing).
window.FIREBASE_CONFIG = null;
/* Contoh:
window.FIREBASE_CONFIG = {
  apiKey: "AIza...",
  authDomain: "moneysalsa-xxxx.firebaseapp.com",
  projectId: "moneysalsa-xxxx",
  storageBucket: "moneysalsa-xxxx.firebasestorage.app",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef"
};
*/
