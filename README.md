# MoneySalsa 🌶️

Catatan keuangan pribadi yang simpel. Berbentuk **web app (PWA)**, jadi satu aplikasi yang sama
bisa dipasang di **Android** maupun **iPhone** — tanpa Play Store / App Store, dan tetap jalan offline.

## Fitur
- Catat pemasukan & pengeluaran (nominal, kategori, tanggal, catatan)
- Ringkasan per bulan: sisa uang, total masuk, total keluar
- Budget pengeluaran bulanan dengan progress bar
- Riwayat dengan pencarian & filter, ketuk transaksi untuk edit/hapus
- Laporan per kategori + rata-rata pengeluaran harian
- Backup / pulihkan (file `.json`) untuk pindah data antar HP, dan export ke Excel (`.csv`)
- Mode gelap otomatis, bisa dipakai offline

## Online-kan (sekali saja)
1. Merge branch ini ke `main`.
2. Di GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Tunggu workflow *Deploy ke GitHub Pages* selesai. Alamatnya:
   `https://<username>.github.io/moneysalsa/`

## Pasang di HP
- **Android (Chrome):** buka alamatnya → menu ⋮ → **Install app / Tambahkan ke layar utama**.
- **iPhone (Safari):** buka alamatnya → tombol **Share** ⬆ → **Add to Home Screen**.

## Tentang data & 2 HP
Data disimpan **di masing-masing HP** (tidak dikirim ke server mana pun), jadi privat.
Konsekuensinya, Android dan iPhone tidak sinkron otomatis. Untuk menyamakan:
**Atur → Backup data** di HP A → kirim file-nya ke HP B (WA/email/Drive) →
di HP B **Atur → Pulihkan / gabung dari backup**. Pilih *gabungkan* supaya data di kedua HP digabung.

Tips: sebaiknya pakai satu HP sebagai "HP utama" untuk mencatat, dan rutin backup.

## Update aplikasi
Kalau mengubah file, naikkan versi `CACHE` di `sw.js` supaya HP mengambil versi terbaru.
