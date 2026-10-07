---
title: Kamus Keamanan (Security Glossary)
description: Glosarium istilah keamanan siber, analisis ancaman, dan konsep proteksi sistem.
---

Kamus istilah konsep pertahanan, vektor serangan, analisis protokol, dan kriptografi.

---

### ARP Spoofing / ARP Poisoning
* **Kategori**: Serangan Layer 2 / Man-in-the-Middle (MITM)
* **Definisi**: Teknik serangan di mana penyerang mengirimkan pesan *gratuitous ARP* palsu ke jaringan lokal untuk mengelabui tabel ARP korban agar mengarahkan traffic gateway ke MAC address penyerang.
* **Deteksi & Mitigasi**:
  * Mengaktifkan **Dynamic ARP Inspection (DAI)** dan **DHCP Snooping** pada switch.
  * Deteksi Wireshark filter: `arp.duplicate-address-frame`.

---

### Honeypot
* **Kategori**: Defense & Deception Technology
* **Definisi**: Sistem umpan (*decoy*) yang sengaja dibuat rentan dan dipasang di jaringan untuk memancing, mengalihkan perhatian, serta mempelajari taktik dan perilaku penyerang tanpa membahayakan sistem produksi nyata.
* **Contoh**: Cowrie (SSH honeypot), Dionaea (malware capture honeypot).

---

### SYN Flood
* **Kategori**: Denial of Service (DoS / DDoS) - Layer 4
* **Definisi**: Serangan yang memanfaatkan kelemahan mekanisme *TCP 3-Way Handshake* dengan mengirimkan ribuan paket `SYN` tanpa pernah mengirimkan `ACK` balasan, sehingga antrean memori server (*half-open connection backlog*) penuh dan server menolak koneksi user normal.
* **Mitigasi**:
  * Mengaktifkan **SYN Cookies** di kernel Linux:
    ```bash
    sysctl -w net.ipv4.tcp_syncookies=1
    ```
  * Rate-limiting koneksi baru via iptables/firewall.

---

### TLS 1.3 (Transport Layer Security)
* **Kategori**: Cryptography / Transport Security
* **Definisi**: Versi standar protokol enkripsi modern untuk komunikasi web aman (HTTPS). 
* **Keunggulan dibanding TLS 1.2**:
  * Handshake lebih cepat: hanya butuh **1-RTT** (bahkan **0-RTT** dengan mode Resumption).
  * Menghapus cipher suite lawas yang rentan (seperti RC4, CBC mode, 3DES, static RSA key exchange).
  * Menggunakan *Perfect Forward Secrecy (PFS)* secara wajib (ECDHE).

---

### Zero Trust Architecture (ZTA)
* **Kategori**: Security Philosophy & Model
* **Prinsip Utama**: *"Never trust, always verify"* (Jangan pernah percaya, selalu verifikasi).
* **Konsep**: Tidak ada perangkat atau user yang otomatis dipercaya hanya karena mereka berada di dalam jaringan internal / LAN kantor. Setiap permintaan akses harus diotentikasi, diotorisasi, dan dienkripsi secara berkelanjutan.
