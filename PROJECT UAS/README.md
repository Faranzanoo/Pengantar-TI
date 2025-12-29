# Pengantar Teknologi Informasi

Website pembelajaran interaktif untuk mata kuliah Pengantar Teknologi Informasi dengan fitur modern dan responsive design.

## Deskripsi

Platform pembelajaran berbasis web yang dirancang untuk mendukung perkuliahan Pengantar Teknologi Informasi. Website ini menyediakan navigasi intuitif, konten dinamis, dan pengalaman pengguna yang optimal di berbagai perangkat.

## Fitur Utama

**User Interface**
- Modern dan minimalist design dengan clean layout
- Dark/Light mode toggle dengan preferensi tersimpan
- Smooth animations dan interactive hover effects
- Collapsible sidebar untuk navigasi yang efisien

**Responsiveness**
- Fully responsive untuk desktop, tablet, dan mobile devices
- Adaptive layout untuk berbagai ukuran layar
- Optimized breakpoints untuk pengalaman pengguna terbaik

**Functionality**
- Dynamic content loading menggunakan JSON data
- Theme preference persistence dengan localStorage
- Smooth navigation tanpa page reload
- Active state indication untuk menu navigasi

**Security**
- Content protection system untuk mencegah plagiarisme
- Copy-paste restriction pada konten
- Watermark system untuk screenshot protection
- View source restriction

## Demo

Live preview: [https://username.github.io/repo-name](https://username.github.io/repo-name)

*Catatan: Ganti dengan URL GitHub Pages aktual*

## Struktur Proyek

```
project/
│
├── index.html              # Main HTML file
├── css/
│   ├── style.css          # Core styling
│   └── responsive.css     # Media queries
├── js/
│   └── script.js          # JavaScript functionality
├── data/
│   └── materi.json        # Content data
├── img/
│   └── logo.png           # Institution logo
└── README.md              # Project documentation
```

## Teknologi

- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with Flexbox
- **JavaScript (ES6)** - Vanilla JS, no dependencies
- **JSON** - Data management
- **LocalStorage API** - Client-side data persistence

## Instalasi dan Penggunaan

### Instalasi Lokal

```bash
# Clone repository
git clone https://github.com/username/repo-name.git

# Navigate to directory
cd repo-name

# Open in browser
open index.html
```

Atau gunakan Live Server di VS Code untuk development.

### Konfigurasi Konten

Edit file `data/materi.json` untuk mengubah konten pembelajaran:

```json
[
  {
    "title": "Judul Materi",
    "content": "<h3>Sub Judul</h3><p>Konten dalam format HTML</p>"
  }
]
```

### Kustomisasi Logo

Replace file `img/logo.png` dengan logo institusi (recommended size: 48x48px untuk optimal display).

## Sistem Keamanan

Website dilengkapi dengan content protection system yang disesuaikan untuk keperluan akademik.

### Akses untuk Evaluator

Dosen dan evaluator memiliki akses penuh untuk:
- Inspect Element (Right Click → Inspect)
- Developer Tools (F12, Ctrl+Shift+I)
- Responsive Design Mode
- Console logging

### Proteksi Konten

Sistem proteksi aktif untuk:
- Copy text (Ctrl+C)
- Cut text (Ctrl+X)
- Select all (Ctrl+A)
- View page source (Ctrl+U)
- Text drag selection
- Screenshot watermarking

### Developer Mode

Untuk keperluan development, ketik `dev` untuk toggle developer mode yang akan menonaktifkan sementara sistem proteksi.

## Kustomisasi

### Skema Warna

Edit `css/style.css` untuk mengubah color scheme:

```css
/* Light Mode Colors */
body {
  background: #e2e8f0;
  color: #1e293b;
}

/* Dark Mode Colors */
body.dark {
  background: #0f172a;
  color: #f1f5f9;
}
```

### Menambah Konten Menu

1. Tambahkan menu item di `index.html`:
```html
<li onclick="loadMateri(15)">
  <span>📖</span>
  <span>Pertemuan 15</span>
</li>
```

2. Tambahkan data corresponding di `data/materi.json`

### Responsive Breakpoints

```css
Desktop:           > 1024px
Tablet:            768px - 1024px
Mobile Landscape:  481px - 768px
Mobile Portrait:   320px - 480px
Extra Small:       < 320px
```

## Deployment

### GitHub Pages

1. Push code ke GitHub repository
2. Navigate ke Settings → Pages
3. Pilih source: Deploy from a branch
4. Select branch: main, folder: / (root)
5. Save dan tunggu deployment selesai
6. Website akan tersedia di `https://username.github.io/repo-name`

## Browser Compatibility

| Browser          | Minimum Version |
|------------------|-----------------|
| Google Chrome    | 90+             |
| Mozilla Firefox  | 88+             |
| Safari           | 14+             |
| Microsoft Edge   | 90+             |
| Opera            | 76+             |

## Known Limitations

- Screenshot protection menggunakan watermark, tidak dapat mencegah 100% screenshot
- Text selection disabled dapat memengaruhi accessibility
- LocalStorage bergantung pada browser permission
- Developer mode bypass tersedia untuk development purposes

## Changelog

### Version 1.0.0

**Initial Release**
- Implemented core functionality
- Added dark/light theme toggle
- Created responsive design for all devices
- Integrated content protection system
- Added dynamic content loading
- Implemented watermark system
- Added developer mode for development

## Author

**Titan Faranzano**

- GitHub: [@your-username](https://github.com/your-username)

## License and Copyright

### © 2025 Titan Faranzano. All Rights Reserved.

**HAK CIPTA DILINDUNGI UNDANG-UNDANG**

Proyek ini dilindungi oleh hak cipta Indonesia. Penggunaan, reproduksi, modifikasi, atau distribusi tanpa izin tertulis dari pemilik hak cipta adalah ilegal dan dapat dituntut secara hukum.

### Pembatasan Penggunaan

**DILARANG:**
- Menyalin atau menduplikasi source code untuk proyek lain
- Mendistribusikan atau mempublikasikan ulang dengan atau tanpa modifikasi
- Menggunakan sebagai template untuk proyek komersial
- Mengklaim kepemilikan atau authorship
- Menghapus atau mengubah atribusi copyright

**DIIZINKAN:**
- Melihat source code untuk tujuan pembelajaran pribadi
- Fork repository untuk referensi pribadi non-publik
- Memberikan star pada repository

### Lisensi Komersial

Untuk penggunaan komersial, modifikasi signifikan, atau redistribusi, silakan hubungi pemilik untuk mendapatkan lisensi tertulis.

### Dasar Hukum

Perlindungan hak cipta ini berdasarkan:
- Undang-Undang Republik Indonesia Nomor 28 Tahun 2014 tentang Hak Cipta
- Pasal 113 ayat (3): Pelanggaran hak cipta dapat dikenai pidana penjara maksimal 4 tahun dan/atau denda maksimal Rp 1.000.000.000,00 (satu miliar rupiah)

### Disclaimer

Website ini dibuat untuk keperluan akademik. Konten yang tersedia ditujukan untuk tujuan pembelajaran dan edukasi. Pemilik tidak bertanggung jawab atas penggunaan informasi di luar konteks pendidikan.

## Acknowledgments

Terima kasih kepada:
- Dosen pembimbing mata kuliah Pemrograman WEB I
- Universitas Pamulang
- Komunitas open-source untuk inspirasi dan best practices

---

**Made with dedication by Titan Faranzano**

*If this project helps you, please consider giving it a star ⭐*