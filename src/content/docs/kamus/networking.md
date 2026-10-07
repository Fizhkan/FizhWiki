---
title: Kamus Jaringan (Networking Glossary)
description: Kumpulan istilah dasar hingga lanjutan di bidang jaringan komputer.
---

Kamus istilah penting seputar protokol, perangkat, dan konsep routing & switching. Gunakan `Ctrl + F` atau `Ctrl + K` untuk pencarian cepat.

---

### ARP (Address Resolution Protocol)
* **Layer**: Layer 2 (Data Link) / Layer 3 (Network)
* **Definisi**: Protokol yang bertugas memetakan (resolving) IP Address (Layer 3) ke MAC Address (Layer 2) pada jaringan lokal (LAN).
* **Cara Kerja**: Komputer mengirim *ARP Request* via broadcast (*"Siapa yang punya IP 192.168.1.1? Kasih tahu MAC addressmu ke aku!"*), lalu pemilik IP merespons dengan *ARP Reply* via unicast.
* **Command Penting**:
  ```bash
  # Melihat tabel ARP cache di Linux / Windows
  arp -a
  # Menghapus ARP cache di Linux
  ip -s -s neigh flush all
  ```

---

### Broadcast Domain
* **Layer**: Layer 2
* **Definisi**: Area jaringan di mana sebuah frame broadcast yang dikirim oleh satu host akan diterima oleh semua host lain di dalam area tersebut.
* **Catatan Penting**:
  * **Switch Layer 2** *meneruskan* broadcast (berada di 1 broadcast domain yang sama kecuali dibagi VLAN).
  * **Router / Layer 3 Switch** *memutus* (membatasi) broadcast domain antar subnet.

---

### CIDR (Classless Inter-Domain Routing)
* **Layer**: Layer 3
* **Definisi**: Metode pengalamatan dan alokasi IP address yang menggantikan sistem kelas (Class A, B, C) tradisional menggunakan notasi slash prefix (`/24`, `/28`, dll.) untuk efisiensi ruang alamat.
* **Contoh**: `192.168.1.0/26` memiliki subnet mask `255.255.255.192` dan menyediakan 62 host valid.

---

### Default Gateway
* **Layer**: Layer 3
* **Definisi**: Alamat IP interface router lokal yang menjadi pintu gerbang keluar bagi host lokal ketika ingin mengirim paket ke jaringan luar (subnet yang berbeda atau Internet).
* **Command Penting**:
  ```bash
  # Cek default gateway di Linux
  ip route show | grep default
  ```

---

### MTU (Maximum Transmission Unit)
* **Layer**: Layer 2 / Layer 3
* **Definisi**: Ukuran paket data terbesar (dalam satuan byte) yang dapat ditransmisikan melalui interface jaringan tanpa mengalami fragmentasi (*packet fragmentation*).
* **Standar**: Default Ethernet MTU adalah **1500 bytes**. Jika paket melebihi batas ini dan bit *Don't Fragment (DF)* aktif, paket akan di-drop dan router mengirim ICMP *Fragmentation Needed*.

---

### SVI (Switch Virtual Interface)
* **Layer**: Layer 3
* **Definisi**: Interface virtual berbasis VLAN yang dibuat di dalam Layer 3 Switch (Multilayer Switch) untuk berfungsi sebagai default gateway bagi perangkat yang berada di dalam VLAN tersebut.
* **Contoh Konfigurasi (Cisco IOS)**:
  ```text
  Switch(config)# interface vlan 10
  Switch(config-if)# ip address 192.168.10.1 255.255.255.0
  Switch(config-if)# no shutdown
  ```

---

### Trunk Port (IEEE 802.1Q)
* **Layer**: Layer 2
* **Definisi**: Port switch yang dikonfigurasi untuk melewatkan traffic dari banyak VLAN sekaligus antar switch atau antara switch dan router (*Router on a Stick*).
* **Mekanisme**: Setiap frame Ethernet disisipkan header tambahan 4-byte (disebut *VLAN Tag*) yang berisi nomor VLAN ID (1–4094).

---

### Wildcard Mask
* **Layer**: Layer 3
* **Definisi**: Nilai kebalikan (invers) dari Subnet Mask yang digunakan dalam konfigurasi Access Control List (ACL) dan protokol routing seperti OSPF.
* **Rumus Cepat**: `255.255.255.255 - Subnet Mask = Wildcard Mask`.
  * Contoh: Subnet `/24` (`255.255.255.0`) → Wildcard: `0.0.0.255`.
  * Contoh: Subnet `/28` (`255.255.255.240`) → Wildcard: `0.0.0.15`.
