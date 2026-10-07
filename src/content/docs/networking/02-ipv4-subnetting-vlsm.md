---
title: 02. Subnetting IPv4 & Rumus VLSM
description: Panduan praktis menghitung subnet mask, jumlah host valid, network ID, dan pembagian blok VLSM.
---

Subnetting adalah teknik membagi satu blok jaringan besar menjadi beberapa sub-jaringan yang lebih kecil dan efisien untuk mencegah pemborosan IP address.

---

## 🧮 Rumus Inti Subnetting

Dalam IPv4, alamat terdiri dari **32 bit** yang dibagi menjadi dua porsi: **Network Bit (`n`)** dan **Host Bit (`h`)**.

```text
Total Bit IPv4 = Network Bit (n) + Host Bit (h) = 32 bit
```

1. **Jumlah Total Subnet Baru yang Terbentuk**:  
   `2^s`  
   *(di mana `s` adalah jumlah bit network yang dipinjam dari porsi host)*.

2. **Jumlah Total IP Address per Subnet**:  
   `2^h`  
   *(di mana `h` adalah sisa bit host, yaitu: `32 - prefix`)*.

3. **Jumlah Host Valid (Usable IP / IP yang Bisa Dipakai PC)**:  
   `(2^h) - 2`  
   *(dikurangi 2 karena IP pertama dialokasikan sebagai **Network ID** dan IP terakhir dialokasikan sebagai **Broadcast ID**)*.

---

## 📊 Tabel Referensi Cepat Prefix (/24 s.d. /30)

| Prefix | Subnet Mask | Wildcard Mask | Total IP (`2^h`) | Usable Host (`(2^h) - 2`) | Penggunaan Umum |
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

### Penyelesaian Langkah Demi Langkah:

#### 1. Subnet 1 - IT (Kebutuhan: 50 host)
* Cari nilai bit host (`h`) terkecil yang memenuhi rumus `(2^h) - 2 >= 50`:
  * Jika `h = 5`: `(2^5) - 2 = 32 - 2 = 30` *(kurang)*
  * Jika `h = 6`: `(2^6) - 2 = 64 - 2 = 62 host` *(cukup dan efisien!)*
* Prefix baru: `32 - h = 32 - 6 = /26` (Subnet Mask: `255.255.255.192`).
* **Network ID**: `192.168.10.0/26`
* **Rentang IP Usable**: `192.168.10.1` s.d. `192.168.10.62`
* **Broadcast ID**: `192.168.10.63`

#### 2. Subnet 2 - HR (Kebutuhan: 25 host)
* Cari nilai bit host (`h`) terkecil yang memenuhi rumus `(2^h) - 2 >= 25`:
  * Jika `h = 4`: `(2^4) - 2 = 16 - 2 = 14` *(kurang)*
  * Jika `h = 5`: `(2^5) - 2 = 32 - 2 = 30 host` *(cukup dan efisien!)*
* Prefix baru: `32 - h = 32 - 5 = /27` (Subnet Mask: `255.255.255.224`).
* Network ID dimulai dari IP setelah Broadcast ID milik IT:
  * **Network ID**: `192.168.10.64/27`
* **Rentang IP Usable**: `192.168.10.65` s.d. `192.168.10.94`
* **Broadcast ID**: `192.168.10.95`

#### 3. Subnet 3 - Point-to-Point Link (Kebutuhan: 2 host)
* Cari nilai bit host (`h`) terkecil yang memenuhi rumus `(2^h) - 2 >= 2`:
  * Jika `h = 2`: `(2^2) - 2 = 4 - 2 = 2 host` *(sempurna!)*
* Prefix baru: `32 - h = 32 - 2 = /30` (Subnet Mask: `255.255.255.252`).
* Network ID dimulai dari IP setelah Broadcast ID milik HR:
  * **Network ID**: `192.168.10.96/30`
* **Rentang IP Usable**: `192.168.10.97` s.d. `192.168.10.98`
* **Broadcast ID**: `192.168.10.99`
