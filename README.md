# FizhWiki

Catatan belajar mandiri jaringan, keamanan, dan Linux oleh Siraj (Hafidz Sirajuddin), calon *Network & Security Engineer*. Berisi ringkasan konsep, cheatsheet perintah, glosarium teknis, dan rancangan lab.

[![License: MIT](https://img.shields.io/badge/License-MIT-amber)](LICENSE)

**[Buka FizhWiki](https://fizhwiki.vercel.app/)** • **[Portofolio FizhTank](https://fizhtank.vercel.app/)**

---

## Isi Wiki

- **Kamus Istilah**: Glosarium teknis untuk Networking, Security, dan Linux dengan contoh perintah dan konteks praktis.
- **Networking**: Model OSI & TCP/IP, subnetting VLSM/CIDR, VLAN 802.1Q, dan inter-VLAN routing (SVI).
- **Network Security**: Display filter Wireshark, pemindaian port Nmap, dan manajemen firewall (UFW/iptables).
- **Linux & Homelab**: Panduan dasar Arch Linux/EndeavourOS, manajemen service `systemd`, dan otomasi Bash.
- **Labs**: Rencana dan dokumentasi write-up lab Packet Tracer dan homelab.
- **Sertifikasi**: Checklist silabus persiapan CCNA 200-301 dan CompTIA Security+ (SY0-701).
- **Resource Hub**: Kurasi tautan latihan interaktif (NetAcad, TryHackMe, PortSwigger) dan referensi teknis.

---

## Fitur

- 🔍 **Pencarian Instan (`Ctrl + K`)**: Pencarian teks lengkap di sisi klien menggunakan Pagefind tanpa database eksternal.
- 📊 **Diagram Mermaid.js**: Topologi jaringan dan alur handshake digambar langsung dari teks Markdown.
- 📱 **Progressive Web App (PWA)**: Dapat dipasang langsung di desktop maupun smartphone untuk akses offline/cepat.
- ⚡ **Astro + Starlight**: Performa statis ultra-cepat dengan tipografi IBM Plex Sans, IBM Plex Mono, dan Newsreader.

---

## Menjalankan di Komputer Lokal

Butuh Node.js 18 atau lebih baru.

```bash
# Clone repository
git clone https://github.com/Fizhkan/FizhWiki.git
cd FizhWiki

# Install dependensi
npm install

# Jalankan development server (http://localhost:4321)
npm run dev

# Build produksi
npm run build

# Preview hasil build
npm run preview
```

---

## Menambah Catatan Baru

Cukup buat file Markdown baru (`.md`) di dalam folder yang sesuai di `src/content/docs/`:

```text
src/content/docs/
├── kamus/           # Istilah glosarium baru (networking, security, linux)
├── networking/      # Catatan konsep jaringan & routing
├── security/        # Catatan keamanan & analisis traffic
├── linux/           # Catatan administrasi sistem & script
├── labs/            # Rencana dan write-up lab
├── certifications/  # Pelacak silabus sertifikasi
└── resources/       # Tautan belajar & bookmark
```

Indeks pencarian (*Pagefind*) dan sidebar navigasi akan **otomatis mendeteksi dan mengindeks judul file baru** saat build dijalankan.

---

## Stack

[Astro](https://astro.build/) & [Starlight](https://starlight.astro.build/), [Mermaid.js](https://mermaid.js.org/), Pagefind. Di-deploy ke Vercel.

---

## Lisensi

[MIT](LICENSE)
