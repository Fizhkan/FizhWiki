---
title: 02. Subnetting IPv4 & Rumus VLSM
description: Panduan praktis menghitung subnet mask, jumlah host valid, network ID, dan pembagian blok VLSM.
---

Subnetting adalah teknik membagi satu blok jaringan besar menjadi beberapa sub-jaringan yang lebih kecil dan efisien untuk mencegah pemborosan IP address.

---

## 🧮 Rumus Inti Subnetting

Dalam IPv4, alamat terdiri dari **32 bit** yang dibagi menjadi dua bagian: **Network Bits ($n$)** dan **Host Bits ($h$)**.

$$\text{Panjang Total Bit} = n + h = 32$$

1. **Jumlah Total Subnet**:  
   $$2^s$$ (di mana $s$ adalah jumlah bit network yang dipinjam).
2. **Jumlah Total IP per Subnet**:  
   $$2^h$$ (di mana $h = 32 - \text{prefix}$).
3. **Jumlah Host Valid (Usable Hosts)**:  
   $$2^h - 2$$  
   *(Dikurangi 2 karena IP pertama adalah **Network ID** dan IP terakhir adalah **Broadcast ID**)*.

---

## 📊 Tabel Referensi Cepat Prefix (/24 s.d. /30)

| Prefix | Subnet Mask | Wildcard Mask | Total IP ($2^h$) | Usable Hosts ($2^h - 2$) | Penggunaan Umum |
|---|---|---|---|---|---|
| **/24** | 255.255.255.0 | 0.0.0.255 | 256 | 254 | Subnet LAN standar kantor / lab |
| **/25** | 255.255.255.128 | 0.0.0.127 | 128 | 126 | LAN departemen menengah |
| **/26** | 255.255.255.192 | 0.0.0.63 | 64 | 62 | LAN departemen kecil |
| **/27** | 255.255.255.224 | 0.0.0.31 | 32 | 30 | Server farm kecil / DMZ |
| **/28** | 255.255.255.240 | 0.0.0.15 | 16 | 14 | Manajemen switch / printer |
| **/29** | 255.255.255.248 | 0.0.0.7 | 8 | 6 | Blok IP publik ISP / gateway HA |
| **/30** | 255.255.255.252 | 0.0.0.3 | 4 | **2** | Point-to-Point link antar Router |

---

## 🎯 Langkah Menghitung VLSM (Variable Length Subnet Mask)

Prinsip nomor satu dalam menyusun VLSM: **Urutkan kebutuhan host dari yang TERBESAR ke yang TERKECIL** terlebih dahulu!

### Studi Kasus:
Alokasikan blok jaringan `192.168.10.0/24` untuk:
* **Departemen IT**: butuh 50 host
* **Departemen HR**: butuh 25 host
* **Point-to-Point Link Router**: butuh 2 host

### Penyelesaian:
1. **Subnet 1 - IT (50 host)**:
   * Rumus: $2^h - 2 \ge 50 \implies h = 6$ ($2^6 - 2 = 62$).
   * Prefix: $32 - 6 = \mathbf{/26}$ (Mask: `255.255.255.192`).
   * Network ID: `192.168.10.0/26`
   * Rentang Usable: `192.168.10.1` – `192.168.10.62`
   * Broadcast ID: `192.168.10.63`

2. **Subnet 2 - HR (25 host)**:
   * Rumus: $2^h - 2 \ge 25 \implies h = 5$ ($2^5 - 2 = 30$).
   * Prefix: $32 - 5 = \mathbf{/27}$ (Mask: `255.255.255.224`).
   * Network ID dimulai dari IP setelah broadcast IT: `192.168.10.64/27`
   * Rentang Usable: `192.168.10.65` – `192.168.10.94`
   * Broadcast ID: `192.168.10.95`

3. **Subnet 3 - Point-to-Point (2 host)**:
   * Rumus: $2^h - 2 \ge 2 \implies h = 2$ ($2^2 - 2 = 2$).
   * Prefix: $32 - 2 = \mathbf{/30}$ (Mask: `255.255.255.252`).
   * Network ID: `192.168.10.96/30`
   * Rentang Usable: `192.168.10.97` – `192.168.10.98`
   * Broadcast ID: `192.168.10.99`
