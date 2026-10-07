---
title: 02. Manajemen Servis & Daemon dengan systemd
description: Mengontrol lifecycle daemon Linux, membuat custom service unit, dan troubleshooting log via journalctl.
---

`systemd` mengontrol semua proses latar belakang yang berjalan di sistem Linux modern.

---

## ⚡ Manajemen Service dengan `systemctl`

```bash
# Menjalankan service sekarang
sudo systemctl start sshd

# Menghentikan service
sudo systemctl stop sshd

# Mengaktifkan service agar otomatis jalan saat boot
sudo systemctl enable sshd

# Mengaktifkan sekaligus langsung menjalankan saat ini juga (one-liner)
sudo systemctl enable --now ufw

# Melihat status aktif, PID proses, dan cuplikan log terakhir
systemctl status sshd
```

---

## 📝 Membuat Custom Service Unit Sendiri

Jika kamu membuat script otomatisasi jaringan dan ingin script tersebut berjalan sebagai background service:

Buat file di `/etc/systemd/system/network-monitor.service`:

```ini
[Unit]
Description=Custom Network Interface Telemetry Monitor
After=network.target

[Service]
Type=simple
User=root
ExecStart=/usr/local/bin/network-monitor.sh
Restart=on-failure
RestartSec=5s

[Install]
WantedBy=multi-user.target
```

Setelah membuat file unit, jalankan:
```bash
sudo systemctl daemon-reload
sudo systemctl enable --now network-monitor
```
