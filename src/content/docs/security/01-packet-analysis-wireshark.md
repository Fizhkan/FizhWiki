---
title: 01. Analisis Paket dengan Wireshark
description: Cheatsheet filter tampilan Wireshark, inspeksi stream TCP, dan perbandingan keamanan plaintext vs TLS.
---

Wireshark adalah tool analisis paket jaringan (packet analyzer) standar industri untuk troubleshooting jaringan dan investigasi keamanan forensik.

---

## 🔍 Display Filters yang Paling Sering Digunakan

Gunakan filter ini di bar atas Wireshark untuk menyaring jutaan paket menjadi aliran data yang spesifik:

| Kebutuhan Analisis | Wireshark Display Filter |
|---|---|
| **Filter IP Tertentu** | `ip.addr == 192.168.1.50` |
| **Filter Source & Destination** | `ip.src == 10.0.0.1 && ip.dst == 10.0.0.254` |
| **Filter Port TCP/UDP** | `tcp.port == 443` atau `udp.port == 53` |
| **Hanya Tampilkan DNS Query/Respon** | `dns` |
| **Deteksi Traffic HTTP Unencrypted** | `http.request.method == "POST"` |
| **Deteksi Handshake TCP Bermasalah** | `tcp.flags.reset == 1` atau `tcp.analysis.retransmission` |
| **Inspeksi Handshake TLS** | `tls.handshake.type == 1` *(Client Hello)* |

---

## 🔓 Plaintext (HTTP/FTP) vs Enkripsi (HTTPS/TLS)

### 1. Bukti Kerentanan Plaintext
Pada protokol seperti **HTTP**, **FTP**, atau **Telnet**, kredensial dikirim tanpa enkripsi.  
Jika kamu klik kanan pada paket $\rightarrow$ **Follow $\rightarrow$ TCP Stream**, kamu bisa membaca isi payload secara gamblang:

```http
POST /login.php HTTP/1.1
Host: 192.168.1.100
Content-Type: application/x-www-form-urlencoded

username=admin&password=SuperSecretPassword123!
```

### 2. Proteksi Enkripsi TLS 1.3
Pada **HTTPS (TLS 1.3)**, setelah pertukaran kunci Diffie-Hellman selesai, semua payload aplikasi dienkripsi menjadi data acak biner (`Application Data Protocol: http-over-tls`). Siapa pun yang melakukan sniffing via Wireshark hanya melihat karakter heksadesimal acak yang tidak dapat diuraikan.
