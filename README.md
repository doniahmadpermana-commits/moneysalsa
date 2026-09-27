# MoneySalsa 🌶️

Catatan keuangan pribadi yang simpel. Berbentuk **web app (PWA)**, jadi satu aplikasi yang sama
bisa dipasang di **Android** maupun **iPhone** — tanpa Play Store / App Store, dan tetap jalan offline.

## Fitur
- Catat pemasukan & pengeluaran (nominal, kategori, dompet, tanggal, catatan)
- **Dompet** (bank, e-wallet, cash — dibuat sendiri, dengan saldo awal) + saldo tiap dompet di Beranda
- **Transfer antar dompet** (mis. tarik tunai BCA → Cash, top up GoPay) — tidak dihitung sebagai pengeluaran
- **Kategori sendiri** selain kategori bawaan (ubah/hapus di menu Atur)
- Ringkasan per bulan: sisa uang, total masuk, total keluar
- Budget pengeluaran bulanan dengan progress bar
- Riwayat dengan pencarian & filter (jenis & dompet), ketuk transaksi untuk edit/hapus
- Laporan per kategori + rata-rata pengeluaran harian
- Backup / pulihkan (file `.json`) untuk pindah data antar HP, dan export ke Excel (`.csv`)
- **Sinkron otomatis Android ⇄ iPhone** (login sekali, Firebase gratis) — tetap bisa mencatat saat offline
- Mode gelap otomatis

## Setup (sekali saja, semuanya gratis)

### 1. Online-kan website (GitHub Pages)
1. Di GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Buka tab **Actions** → *Deploy ke GitHub Pages* → **Run workflow** (atau push apa saja).
3. Alamatnya: `https://doniahmadpermana-commits.github.io/moneysalsa/`

### 2. Aktifkan sinkron Android ⇄ iPhone (Firebase, gratis tanpa kartu kredit)
1. Buka <https://console.firebase.google.com> → **Create a project** (nama bebas, Google Analytics boleh dimatikan).
2. **Build → Authentication → Get started → Sign-in method → Email/Password → Enable → Save.**
3. **Authentication → Users → Add user** → isi email & password untuk dia. (Akun hanya dibuat dari sini, jadi orang lain tidak bisa daftar sendiri.)
4. **Authentication → Settings → Authorized domains → Add domain** → `doniahmadpermana-commits.github.io`.
5. **Build → Firestore Database → Create database** → lokasi `asia-southeast2 (Jakarta)` → *Start in production mode*.
6. Di Firestore → tab **Rules** → hapus isinya, tempel isi file [`firestore.rules`](firestore.rules) → **Publish**.
7. **Project settings (⚙️) → General → Your apps → ikon `</>` (Web)** → daftarkan app (tanpa Hosting) →
   salin objek `firebaseConfig`, lalu tempel ke file [`firebase-config.js`](firebase-config.js):
   ```js
   window.FIREBASE_CONFIG = { apiKey: "...", authDomain: "...", projectId: "...", storageBucket: "...", messagingSenderId: "...", appId: "..." };
   ```
   Commit → website otomatis ter-update dalam ±1 menit.

> Konfigurasi Firebase memang boleh terlihat publik; yang menjaga data adalah `firestore.rules`
> (setiap akun hanya bisa membaca datanya sendiri).

## Pasang di HP (di kedua HP)
- **Android (Chrome):** buka alamatnya → menu ⋮ → **Install app / Tambahkan ke layar utama**.
- **iPhone (Safari):** buka alamatnya → tombol **Share** ⬆ → **Add to Home Screen**.

Lalu buka dari ikon di layar utama dan **login sekali** dengan akun tadi. Setelah itu dia tinggal
buka & catat — dari HP mana pun, datanya sama. Tanpa internet pun tetap bisa mencatat; data
dikirim otomatis begitu online lagi.

Tanpa langkah 2, aplikasi tetap jalan tapi data hanya di HP masing-masing (bisa dipindah lewat
**Atur → Backup / Pulihkan**).

## Biaya
- GitHub Pages: gratis untuk repo publik.
- Firebase paket Spark: gratis (50.000 baca & 20.000 tulis per hari, 1 GB data) — jauh di atas
  kebutuhan catatan keuangan pribadi.

## Untuk developer
- Kalau mengubah file, naikkan versi `CACHE` di `sw.js` supaya HP mengambil versi terbaru.
- SDK Firebase (v12.19.0) disimpan di `vendor/firebase/` supaya bisa di-cache untuk offline.
- Uji lokal dengan emulator: `firebase emulators:start --project demo-moneysalsa` lalu set
  `window.__MONEYSALSA_EMULATOR__ = true` sebelum aplikasi dimuat.
