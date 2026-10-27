# 📘 Pengantar Teknologi Informasi

Website pembelajaran interaktif untuk mata kuliah **Pengantar Teknologi Informasi**: 14 pertemuan materi yang dimuat dinamis dari file JSON, dengan mode gelap/terang dan tampilan responsif. Dibangun dengan HTML, CSS, dan JavaScript murni tanpa framework.

**Demo:** https://faranzanoo.github.io/Pengantar-TI/

---

## ✨ Fitur

- **Materi dinamis** — isi 15 halaman (General + Pertemuan 1–14) dimuat dari `data/materi.json`, berpindah tanpa memuat ulang halaman
- **Mode gelap / terang** — pilihan tema tersimpan di `localStorage` dan dipulihkan saat halaman dibuka lagi
- **Sidebar yang bisa dilipat** untuk memberi ruang baca lebih luas
- **Tampilan responsif** — breakpoint untuk desktop, tablet, dan ponsel (`css/responsive.css`)
- **Bisa dioperasikan dengan keyboard** — daftar pertemuan dapat dipilih dengan `Tab` + `Enter`/`Spasi`, dengan indikator fokus yang jelas
- **Penanda aksesibilitas dasar** — label untuk tombol ikon, `aria-current` pada pertemuan aktif, dan `aria-expanded` pada tombol menu
- **Tahan terhadap kegagalan** — pesan error yang jelas jika materi gagal dimuat, dan tema tetap berfungsi walau `localStorage` tidak tersedia

---

## 📁 Struktur Proyek

```
.
├── index.html            # Halaman utama
├── css/
│   ├── style.css         # Gaya utama (tema terang/gelap, layout, sidebar)
│   └── responsive.css    # Media query untuk berbagai ukuran layar
├── js/
│   └── script.js         # Memuat materi, navigasi, sidebar, dan tema
├── data/
│   └── materi.json       # Isi materi (judul + konten HTML per pertemuan)
├── img/
│   └── logo.png          # Logo
└── README.md
```

---

## 🛠️ Teknologi

| Bagian | Yang dipakai |
|---|---|
| Struktur | HTML5 semantik |
| Tampilan | CSS3 (Flexbox, media query) |
| Logika | JavaScript ES6 (tanpa dependensi) |
| Data | JSON |
| Penyimpanan | `localStorage` (hanya untuk preferensi tema) |

---

## 🚀 Menjalankan Secara Lokal

Materi dimuat dengan `fetch()`, jadi halaman harus dibuka lewat **web server lokal**. Membuka `index.html` langsung dari file (`file://`) akan membuat materi gagal dimuat karena dibatasi browser.

```bash
git clone https://github.com/Faranzanoo/Pengantar-TI.git
cd Pengantar-TI
```

Lalu jalankan salah satu:

```bash
npx serve .                    # Node.js
python -m http.server 8000     # Python  ->  http://localhost:8000
```

Atau pakai ekstensi **Live Server** di VS Code.

---

## 🧩 Mengelola Konten

Isi materi ada di `data/materi.json`, berupa array berisi objek `title` dan `content` (HTML):

```json
[
  {
    "title": "Pertemuan 1: Judul Materi",
    "content": "<h3>Sub Judul</h3><p>Isi materi...</p>"
  }
]
```

Untuk menambah pertemuan baru:

1. Tambahkan objek baru di akhir `data/materi.json`.
2. Tambahkan item di sidebar pada `index.html`. Nilai `data-index` harus sama dengan urutan objek di JSON (dimulai dari 0):

```html
<li data-index="15" tabindex="0"><span aria-hidden="true">📖</span><span>Pertemuan 15</span></li>
```

> `materi.json` dimasukkan ke halaman sebagai HTML, jadi hanya gunakan konten yang kamu tulis sendiri atau yang dipercaya.

### Mengubah warna tema

Edit `css/style.css`:

```css
body      { background: #e2e8f0; color: #1e293b; }   /* terang */
body.dark { background: #0f172a; color: #f1f5f9; }   /* gelap  */
```

### Breakpoint responsif

| Lebar layar | Penyesuaian |
|---|---|
| ≤ 1024px | Tablet |
| ≤ 768px | Ponsel landscape |
| ≤ 480px | Ponsel portrait |
| ≤ 320px | Layar sangat kecil |

---

## 🌐 Deploy ke GitHub Pages

1. Push kode ke repository GitHub.
2. Buka **Settings → Pages**.
3. Pada *Build and deployment*, pilih **Deploy from a branch**, branch `main`, folder `/ (root)`.
4. Simpan dan tunggu proses selesai. Situs tersedia di `https://faranzanoo.github.io/Pengantar-TI/`.

---

## ⚠️ Keterbatasan

- Konten bersifat statis; belum ada pencarian, penanda progres, atau kuis.
- Daftar pertemuan di sidebar ditulis manual di `index.html` dan harus disamakan dengan isi `materi.json`.
- Belum ada pengujian otomatis.

---

## 📝 Catatan

Website ini dibuat sebagai tugas **UAS mata kuliah Pemrograman Web I** di **Universitas Pamulang**, dengan materi Pengantar Teknologi Informasi sebagai isinya. Konten ditujukan untuk keperluan belajar. Logo universitas dipakai untuk keperluan akademik tersebut dan hak atasnya tetap milik Universitas Pamulang.

Terima kasih kepada dosen mata kuliah Pemrograman Web I atas bimbingannya.

---

© 2025 Titan Faranzano. Source code ditampilkan untuk dilihat dan dipelajari; penggunaan ulang tidak diizinkan tanpa izin tertulis.
