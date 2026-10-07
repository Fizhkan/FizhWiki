---
title: Lab 02 - Packet Capture & Inspeksi Kredensial
description: Eksperimen menangkap paket login cleartext vs sesi HTTPS TLS 1.3 menggunakan Wireshark.
---

Dokumentasi eksperimen analisis keamanan paket: membuktikan bahaya transmisi tanpa enkripsi di jaringan lokal.

---

## 🎯 Sasaran Lab
1. Menangkap sampel traffic autentikasi HTTP form login di port 80.
2. Melakukan *TCP Stream Reassembly* untuk merekonstruksi credential plaintext.
3. Membandingkan dengan traffic sesi enkripsi HTTPS (port 443) dengan TLS 1.3.

---

## 🔬 Langkah Eksperimen & Filter Wireshark

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

## 📝 Kesimpulan Analisis
Penggunaan protokol plaintext di jaringan terbuka sangat rentan terhadap serangan sniffing ARP spoofing. Implementasi HTTPS/TLS 1.3 adalah standar wajib untuk melindungi privasi data dan integritas payload.
