---
title: 02. Pemindaian Port dengan Nmap
description: Teknik pemindaian port TCP/UDP, deteksi servis & OS, serta tips stealth scanning.
---

Nmap (*Network Mapper*) adalah tool open-source esensial untuk audit inventaris jaringan dan pengujian kerentanan port.

---

## ⚡ Perbedaan Teknik Scan Utama

### 1. SYN Stealth Scan (`-sS`) — Default & Cepat
* **Mekanisme**: Nmap mengirim paket `SYN`. Jika target membalas `SYN-ACK`, port dianggap **OPEN**. Nmap segera membalas dengan paket `RST` untuk memutus koneksi sebelum *handshake* selesai sepenuhnya.
* **Keuntungan**: Tidak tercatat di level log aplikasi server tradisional. Butuh hak akses `root/sudo`.

### 2. TCP Connect Scan (`-sT`)
* **Mekanisme**: Membuka koneksi TCP 3-way handshake penuh hingga `ESTABLISHED`.
* **Karakteristik**: Digunakan jika user tidak memiliki hak akses raw socket/root. Lebih berisik dan tercatat di firewall log server.

---

## 🛠️ Command Nmap Paling Berguna di Lab

```bash
# 1. Quick Discovery (Cek host yang hidup di subnet tanpa port scan)
sudo nmap -sn 192.168.1.0/24

# 2. Fast Port Scan (Hanya 100 port paling umum)
sudo nmap -F 192.168.1.10

# 3. Comprehensive Service & Version Detection
sudo nmap -sV -sC -O -T4 192.168.1.10

# 4. Scan Port Spesifik (misal SSH, HTTP, HTTPS)
sudo nmap -p 22,80,443 192.168.1.10

# 5. Full 65535 Port Scan
sudo nmap -p- -T4 192.168.1.10
```

:::warning[Etika & Keamanan]
Hanya lakukan scanning pada jaringan lokal lab milikmu sendiri atau lingkungan yang memiliki izin tertulis (seperti lab TryHackMe atau mesin virtual lokalmu).
:::
