---
title: Kamus Linux & Sistem (Linux Systems Glossary)
description: Istilah arsitektur sistem operasi Linux, kernel, proses, dan administrasi sistem.
---

Kamus istilah penting untuk memahami operasional sistem Linux dan homelab engineering.

---

### Inode (Index Node)
* **Kategori**: Filesystem
* **Definisi**: Struktur data pada sistem berkas Linux (ext4, xfs) yang menyimpan metadata tentang sebuah file atau folder (ukuran file, hak akses/permission, kepemilikan user/group, timestamp), **kecuali** nama file dan isi datanya yang sebenarnya.
* **Perintah**:
  ```bash
  # Melihat nomor inode suatu file
  ls -i
  # Melihat sisa kapasitas inode disk
  df -i
  ```

---

### systemd & Unit File
* **Kategori**: Init System & Service Manager
* **Definisi**: Sistem inisialisasi PID 1 standar pada sebagian besar distro Linux modern (Arch, Ubuntu, Debian, RHEL) yang bertugas mem-boot sistem dan mengelola siklus hidup proses/daemon latar belakang.
* **File Unit**: Didefinisikan dalam format file `.service`, `.timer`, atau `.socket` (biasanya berada di `/etc/systemd/system/`).
* **Perintah Esensial**:
  ```bash
  sudo systemctl start <service>
  sudo systemctl enable --now <service>
  sudo systemctl status <service>
  ```

---

### journalctl
* **Kategori**: Log Analysis
* **Definisi**: Perintah CLI untuk menginspeksi dan memfilter log biner yang dicatat oleh daemon `systemd-journald`.
* **Contoh Penggunaan**:
  ```bash
  # Melihat log secara real-time (follow)
  journalctl -f
  # Melihat log service tertentu saja (misal sshd)
  journalctl -u sshd -n 50
  # Melihat log boot saat ini saja
  journalctl -b
  ```

---

### Umask (User File-Creation Mode Mask)
* **Kategori**: File Permissions & Security
* **Definisi**: Nilai oktal 4-digit yang menentukan permission default yang akan **dikurangi** ketika user membuat file atau direktori baru.
* **Standar**:
  * Default base permission: file baru `666` (`rw-rw-rw-`), direktori baru `777` (`rwxrwxrwx`).
  * Jika umask `022`: file baru mendapat `644` (`rw-r--r--`), direktori baru mendapat `755` (`rwxr-xr-x`).
