---
title: 03. Otomasi & Skrip Bash untuk Jaringan
description: Template skrip bash praktis untuk ping sweep, parsing IP, dan pemantauan konektivitas.
---

Bash scripting adalah keterampilan wajib bagi network & security engineer untuk mengotomasi tugas repetitif di terminal.

---

## 🔍 Skrip Sederhana 1: Subnet Ping Sweep

Skrip cepat untuk mengecek IP mana saja yang sedang online di subnet `/24`:

```bash
#!/usr/bin/env bash
# File: pingsweep.sh
# Penggunaan: ./pingsweep.sh 192.168.1

PREFIX="$1"

if [ -z "$PREFIX" ]; then
    echo "Penggunaan: $0 <3 oktet pertama IP, misal: 192.168.1>"
    exit 1
fi

echo "[*] Memulai pemindaian pada subnet ${PREFIX}.0/24 ..."

for ip in $(seq 1 254); do
    ping -c 1 -W 1 "${PREFIX}.${ip}" > /dev/null 2>&1 && \
    echo "[+] Host AKTIF: ${PREFIX}.${ip}" &
done

wait
echo "[*] Pemindaian selesai."
```

Beri izin eksekusi sebelum dijalankan:
```bash
chmod +x pingsweep.sh
./pingsweep.sh 192.168.1
```

---

## 🛡️ Best Practices Penulisan Skrip Bash

1. **Selalu sertakan Shebang**: `#!/usr/bin/env bash` di baris pertama.
2. **Gunakan `set -euo pipefail`** di awal skrip produksi agar script otomatis berhenti jika ada variabel kosong atau perintah yang gagal (*fail-fast*).
3. **Kutip variabel dengan tanda petik ganda**: Selalu gunakan `"$VARIABEL"` untuk mencegah *word splitting* atau *globbing*.
