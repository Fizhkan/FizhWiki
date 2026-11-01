---
title: Lab 02 - Packet Capture & Inspeksi Kredensial
description: Eksperimen menangkap paket login cleartext vs sesi HTTPS TLS 1.3 menggunakan Wireshark.
---

Catatan eksperimen untuk membuktikan bahwa data yang dikirim tanpa enkripsi bisa dibaca siapa saja di jaringan lokal.

---

## Sasaran Lab
1. Menangkap sampel traffic autentikasi HTTP form login di port 80.
2. Melakukan *TCP Stream Reassembly* untuk merekonstruksi credential plaintext.
3. Membandingkan dengan traffic sesi enkripsi HTTPS (port 443) dengan TLS 1.3.

---

## Langkah Eksperimen & Filter Wireshark

### 1. Filter Permintaan HTTP POST
```text
http.request.method == "POST"
```
* Buka frame yang tertangkap, lihat pada layer **Hypertext Transfer Protocol**.
* Terbaca parameter `POST` body: `user=admin&pass=PasswordBocors123`.

### 2. Evaluasi Sesi TLS 1.3
```text
tls && tcp.port == 443
```
* Paket `Client Hello` dan `Server Hello` terlihat menegosiasikan cipher suite `TLS_AES_256_GCM_SHA384`.
* Paket setelah handshake tercatat sebagai `Application Data Protocol: http-over-tls`. Isi payload terenkripsi secara kriptografis dan tidak dapat dibaca oleh sniffer.

---

## Kesimpulan Analisis
Protokol plaintext di jaringan terbuka mudah disadap lewat sniffing, apalagi bila digabung dengan ARP spoofing. HTTPS/TLS 1.3 melindungi kerahasiaan dan keutuhan data, jadi layanan yang membawa login sebaiknya tidak lagi memakai HTTP.
