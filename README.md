# 🐟 FizhWiki

**Personal Knowledge Base, Network & Security Lab Notes, and Technical Glossary.**

Platform dokumentasi dan catatan belajar mandiri untuk calon Network & Security Engineer. Dibangun menggunakan arsitektur modern **Astro + Starlight**, diagram **Mermaid.js**, pencarian offline instan **Pagefind**, dan dukungan **PWA**.

---

## ✨ Fitur Utama

- 📖 **Kamus Istilah Teknis**: Glosarium terorganisir untuk Networking, Security, dan Linux Systems.
- 🌐 **Networking Core**: Catatan mendalam OSI, TCP/IP, Subnetting VLSM, VLAN Trunking, dan Inter-VLAN Routing.
- 🛡️ **Network Security**: Panduan filter Wireshark, pemindaian port Nmap, dan hardening firewall UFW.
- 🐧 **Linux & Homelab**: Cheatsheet Arch Linux, pacman, manajemen daemon `systemd`, dan skrip otomatisasi Bash.
- 🔬 **Lab Notes & Write-ups**: Dokumentasi pengerjaan lab nyata lengkap dengan diagram topologi dan kendala/troubleshooting.
- 🎯 **Certification Tracker**: Checklist silabus resmi ujian CCNA 200-301 dan CompTIA Security+.
- 🔗 **Resource Hub**: Bookmark platform latihan interaktif (NetAcad, TryHackMe, PortSwigger) dan alat bantu online.
- 📊 **Diagram Mermaid.js Native**: Diagram topologi dan alur handshake digambar langsung dari teks Markdown.
- 📱 **Progressive Web App (PWA)**: Dapat di-install langsung di Desktop (Chrome/Edge) dan layar utama HP.
- 🔍 **Instant Search (`Ctrl + K`)**: Pencarian instan seluruh teks tanpa database eksternal.

---

## 🚀 Menjalankan di Komputer Lokal

Masuk ke folder `FizhWiki`:

```bash
cd FizhWiki
```

Jalankan server pengembangan:

```bash
npm run dev
```

Buka browser di `http://localhost:4321`. Setiap perubahan file `.md` akan otomatis ter-update secara instan (*Hot Reload*).

---

## ✍️ Cara Menambah Catatan Baru

Cukup buat file Markdown baru (`.md`) di dalam folder yang sesuai di `src/content/docs/`:

- `src/content/docs/kamus/` $\rightarrow$ Istilah kamus baru
- `src/content/docs/networking/` $\rightarrow$ Materi jaringan baru
- `src/content/docs/security/` $\rightarrow$ Materi keamanan baru
- `src/content/docs/linux/` $\rightarrow$ Materi Linux baru
- `src/content/docs/labs/` $\rightarrow$ Catatan pengerjaan lab baru

Navigasi sidebar dan indeks pencarian akan **otomatis mendeteksi dan menampilkan judul file barumu** tanpa perlu mengubah konfigurasi apa pun!

---

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) & [Starlight](https://starlight.astro.build/)
- **Theme**: Indigo / Violet Clean Minimalist Docs
- **Diagrams**: [Mermaid.js](https://mermaid.js.org/) via `astro-mermaid`
- **Search Engine**: Pagefind (Client-side offline search)
- **Deployment**: Vercel Ready (`vercel.json`)
