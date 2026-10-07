---
title: 01. Dasar Arch Linux & Manajemen Paket
description: Panduan praktis pengoperasian harian Arch Linux, pacman, dan repositori AUR.
---

Arch Linux adalah distribusi Linux berbasis rolling-release yang mengedepankan prinsip kesederhanaan teknis (*Keep It Simple, Stupid* - KISS), kontrol penuh user, dan paket software terbaru.

---

## 📦 Cheatsheet Pacman (Package Manager Utama)

Perintah wajib untuk pemeliharaan sistem di Arch Linux:

```bash
# 1. Update seluruh database repositori & upgrade sistem (Wajib rutin)
sudo pacman -Syu

# 2. Instal paket baru
sudo pacman -S wireshark-qt nmap tcpdump

# 3. Cari paket di repositori
pacman -Ss ufw

# 4. Hapus paket beserta dependensi yang sudah tidak terpakai
sudo pacman -Rns <nama-paket>

# 5. Bersihkan cache instalasi paket lama untuk hemat kapasitas disk
sudo pacman -Sc
```

---

## 🛠️ Manajemen Jaringan di Arch Linux (`iproute2` & `NetworkManager`)

Distro modern Arch menggunakan toolset `iproute2` (menggantikan `ifconfig` dan `route` yang sudah deprecated):

```bash
# Menampilkan semua interface jaringan & alamat IP
ip -br addr show

# Menampilkan tabel routing kernel
ip route show

# Menyalakan atau mematikan interface
sudo ip link set dev eth0 up
sudo ip link set dev eth0 down

# Restart servis NetworkManager
sudo systemctl restart NetworkManager
```
