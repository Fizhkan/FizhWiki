---
title: Lab 03 - Firewall Gateway & Homelab Hardening
description: Membangun firewall gateway lokal dengan UFW, isolasi interface, dan port audit Nmap.
---

Catatan pembangunan mesin gateway firewall homelab mandiri berbasis Linux.

---

## 🎯 Sasaran Lab
1. Menyiapkan kebijakan firewall ketat: *Default Deny Incoming*.
2. Membuka akses remote SSH khusus dengan key Ed25519 dan rate limiting.
3. Melakukan port scanning dari mesin client menggunakan Nmap untuk menguji apakah port lain benar-benar tertutup (*filtered*).

---

## ⚙️ Eksekusi Perintah Terminal

```bash
# Set policy
sudo ufw default deny incoming
sudo ufw default allow outgoing

# Izinkan SSH dengan limit (mencegah brute force)
sudo ufw limit 22/tcp comment 'Rate-limited SSH'

# Nyalakan firewall
sudo ufw enable
```

---

## 🔍 Hasil Verifikasi Pemindaian Nmap

Dijalankan dari komputer penguji (`192.168.1.150`):

```bash
nmap -p 21,22,80,443,3306 192.168.1.10
```

**Hasil Audit**:
```text
PORT     STATE    SERVICE
21/tcp   filtered ftp
22/tcp   open     ssh
80/tcp   filtered http
443/tcp  filtered https
3306/tcp filtered mysql

Nmap done: 1 IP address (1 host up) scanned in 2.14 seconds
```

Port yang tidak diizinkan masuk dalam status `filtered` (paket di-drop secara senyap tanpa balasan TCP RST), yang membuktikan bahwa firewall berfungsi sebagaimana mestinya.
