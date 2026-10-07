---
title: 01. Model OSI 7-Layer vs TCP/IP
description: Pemahaman komprehensif alur enkapsulasi data dari Application Layer hingga Physical Layer.
---

Model OSI (*Open Systems Interconnection*) dan protokol suite TCP/IP adalah fondasi utama komunikasi komputer di seluruh dunia.

---

## 🏗️ Perbandingan OSI 7-Layer vs Model TCP/IP

```mermaid
graph LR
    subgraph OSI_Model["OSI 7 Layers"]
        L7["7. Application"]
        L6["6. Presentation"]
        L5["5. Session"]
        L4["4. Transport"]
        L3["3. Network"]
        L2["2. Data Link"]
        L1["1. Physical"]
    end

    subgraph TCPIP_Model["TCP/IP 4/5 Layers"]
        T4["Application (HTTP, DNS, SSH)"]
        T3["Transport (TCP, UDP)"]
        T2["Internet (IPv4, IPv6, ICMP)"]
        T1["Network Access (Ethernet, Wi-Fi, MAC)"]
    end

    L7 -.-> T4
    L6 -.-> T4
    L5 -.-> T4
    L4 -.-> T3
    L3 -.-> T2
    L2 -.-> T1
    L1 -.-> T1
```

---

## 📦 Protocol Data Unit (PDU) & Enkapsulasi

Ketika data dikirim dari aplikasi menuju kabel/udara fisik, data dibungkus dengan header secara bertahap (*encapsulation*):

| Lapisan (Layer) | Nama PDU | Elemen Kunci yang Ditambahkan | Contoh Protokol |
|---|---|---|---|
| **Layer 7 (Application)** | **Data** | Payload data aplikasi | HTTP, HTTPS, SSH, DNS, DHCP |
| **Layer 4 (Transport)** | **Segment** | Source Port & Destination Port | TCP, UDP |
| **Layer 3 (Network)** | **Packet** | Source IP & Destination IP | IPv4, IPv6, ICMP, OSPF |
| **Layer 2 (Data Link)** | **Frame** | Source MAC, Destination MAC & FCS | Ethernet (802.3), Wi-Fi (802.11) |
| **Layer 1 (Physical)** | **Bits** | Sinyal listrik, cahaya optik, atau gelombang radio | RJ-45, Fiber Optic, Radio RF |

---

## 🤝 TCP 3-Way Handshake (Koneksi Andal)

Sebelum paket aplikasi (seperti HTTP GET) dikirimkan melalui TCP, koneksi harus dibangun melalui proses 3 langkah:

```mermaid
sequenceDiagram
    autonumber
    actor Client
    actor Server
    Client->>Server: SYN (seq=x) - "Permisi, mau buat koneksi"
    Server->>Client: SYN-ACK (seq=y, ack=x+1) - "Boleh, mari terhubung"
    Client->>Server: ACK (ack=y+1) - "Siap, koneksi terbentuk!"
    Note over Client,Server: ESTABLISHED - Mulai transmisi payload data
```

:::tip[Catatan Analisis Wireshark]
Jika pada filter Wireshark kamu melihat frame `SYN` berulang kali tanpa ada respon `SYN-ACK`, periksa kemungkinan:
1. Port pada server tertutup (*port closed*).
2. Firewall memblokir paket (drop/reject).
3. Terjadi routing loop atau default gateway salah konfigurasi.
:::
