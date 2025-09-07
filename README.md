# Website Video Naruto - Dibuat dengan Cinta 🥰💖

## Tentang Website Ini

Website ini adalah platform minimalis untuk menonton video anime Naruto yang dibuat dengan konsep interaktif dan animasi yang menarik. Website ini menampilkan karakter Naruto yang mengikuti gerakan mouse, efek glassmorphism, dan berbagai animasi yang terinspirasi dari dunia ninja.

**Website ini dibuat dengan gratis karena banyak website yang dibuat sengaja dengan iklan yang bertebaran, untuk video anime narutonya akan kami usahakan agar bisa menonton dengan nyaman, lagi nyari cara agar bisa share file encrypt anti download, lalu copyright nya juga, sabar yah kawan.**

## Teknologi yang Digunakan

Website ini dibangun menggunakan teknologi modern:

- **Vite** - Build tool yang cepat dan efisien
- **TypeScript** - JavaScript dengan type safety
- **React** - Library JavaScript untuk membangun UI
- **Tailwind CSS** - Framework CSS utility-first
- **Shadcn-ui** - Komponen UI yang elegant dan modern

Semua komponen shadcn/ui telah diunduh dan tersedia di `@/components/ui`.

## Struktur File

```
├── README.md                    # Dokumentasi website
├── index.html                   # Entry point HTML
├── vite.config.ts              # Konfigurasi Vite
├── tailwind.config.ts          # Konfigurasi Tailwind CSS
├── package.json                # Dependencies dan scripts NPM
├── src/
│   ├── App.tsx                 # Komponen root aplikasi
│   ├── main.tsx                # Entry point aplikasi
│   ├── index.css               # Konfigurasi CSS global
│   ├── pages/
│   │   └── Index.tsx           # Halaman utama website
│   ├── components/
│   │   ├── MouseFollower.tsx   # Animasi Naruto mengikuti mouse
│   │   ├── Navigation.tsx      # Bar navigasi (Home, Video, Author)
│   │   ├── HomeSection.tsx     # Bagian Home dengan GIF dan animasi
│   │   ├── VideoSection.tsx    # Bagian Video dengan panel glassmorphism
│   │   ├── AuthorSection.tsx   # Bagian Author dengan profil dan quotes
│   │   └── ScrollingText.tsx   # Teks motivasi bergerak di bawah
│   ├── styles/
│   │   └── animations.css      # Animasi custom CSS
│   └── components/ui/          # Komponen shadcn/ui
└── public/
    └── gif/                    # Folder untuk file GIF Naruto
```

## Fitur Utama Website

### 🏠 Bagian Home
- **GIF Utama**: Naruto dan Sasuke dengan efek cermin
- **GIF Samping**: Naruto dan Sasuke bergerak maju secara sejajar
- **Tombol Interaktif**: Tombol "Click Me" dengan animasi api yang membuka bagian Video
- **Efek Partikel**: Animasi partikel yang memberikan nuansa magis

### 📺 Bagian Video
- **Background Animasi**: GIF Naruto Shippuden sebagai latar belakang
- **Panel Glassmorphism**: Panel semi-transparan dengan efek blur
- **Border Anime**: Border bergradien dengan efek neon dan glow
- **Informasi**: Pesan "Coming Soon" untuk episode 1-500 dan informasi kontak

### 👤 Bagian Author
- **Background Dinamis**: GIF Naruto marah dengan efek kabut
- **Avatar SVG**: Avatar Naruto custom dalam format SVG
- **Profil Developer**: Informasi tentang x866bash sebagai pembuat
- **Quotes Filosofis**: 5 kutipan inspiratif tentang perjalanan ninja
- **Penjelasan Syntax**: Detail teknologi yang digunakan dalam pembuatan website

### 🎨 Efek Visual
- **Mouse Follower**: Karakter Naruto yang mengikuti gerakan mouse dengan smooth
- **Animasi Smooth**: Transisi halus antar bagian dan hover effects
- **Palette Warna Anime**: Oranye, kuning, merah, dan hijau sesuai tema Naruto
- **Teks Bergerak**: Quote motivasi bergerak horizontal di bagian bawah
- **Font Jepang**: Menggunakan font Noto Sans JP untuk nuansa Jepang yang autentik

## Komponen

### Komponen Utama
- **MouseFollower**: Menangani animasi karakter yang mengikuti mouse
- **Navigation**: Bar navigasi dengan efek hover dan transisi
- **HomeSection**: Menampilkan GIF utama dan tombol interaktif
- **VideoSection**: Panel video dengan efek glassmorphism
- **AuthorSection**: Profil pembuat dengan quotes dan informasi
- **ScrollingText**: Teks motivasi bergerak di bagian bawah

### Komponen UI
- Semua komponen shadcn/ui tersedia di `@/components/ui`
- Komponen dapat diimpor langsung tanpa instalasi tambahan

## Styling

- **Global Styles**: Tambahkan style global di `src/index.css`
- **Custom Animations**: File `src/styles/animations.css` berisi animasi khusus
- **Tailwind Classes**: Gunakan kelas Tailwind untuk styling komponen
- **Glassmorphism**: Efek kaca dengan backdrop-filter dan blur
- **Gradient Borders**: Border bergradien dengan animasi warna

## Development

### Instalasi Dependencies
```shell
pnpm i
```

### Menambah Dependencies Baru
```shell
pnpm add nama_dependency_baru
```

### Menjalankan Development Server
```shell
pnpm run dev
```

### Build untuk Production
```shell
pnpm run build
```

### Linting Code
```shell
pnpm run lint
```

## Catatan Penting

- **Path Alias**: `@/` menunjuk ke direktori `src/`
- **TypeScript**: Jangan re-export types yang sudah diimpor
- **GIF Files**: Letakkan file GIF di folder `public/gif/`
- **Responsive**: Website otomatis menyesuaikan dengan berbagai ukuran layar

## File GIF yang Disimpan

File file gif di simpan di sini `public/gif/`:
- `naruto+sasuke.gif` - GIF utama Naruto dan Sasuke
- `naruto-maju.gif` - Naruto bergerak maju
- `sasuke+maju.gif` - Sasuke bergerak maju  
- `klik+me.gif` - Tombol click me (44x44 piksel)
- `naruto-naruto-shippuden.gif` - Background untuk bagian video
- `naruto+marah.gif` - Background untuk bagian author

## Deployment

Website ini dapat di-deploy ke berbagai platform:
- **Vercel** (Recommended)
- **Netlify**
- **GitHub Pages**
- **Railway**

## Kontribusi

Jika ingin berkontribusi atau melaporkan bug:
📧 Email: x866bash.github@zohomail.com

## Credit

**Dibuat oleh: x866bash - Dibuat dengan cinta 🥰💖**

---

*Dattebayo! Semoga website ini bisa memberikan pengalaman menonton Naruto yang menyenangkan!* 🍜🥷
*Nantiyah video nya COOMING, lagi nyari file share yang gratis dan anti download, soalnya ketat bgt*

---
