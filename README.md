# ERP-KopiCore-BE

Struktur dasar proyek API untuk Enterprise Resource Planning (ERP).

Quickstart:
- Salin `.env.example` ke `.env` dan isi.
- Install dependencies: `npm install`.
- Inisialisasi Prisma: `npx prisma migrate dev` (jika menggunakan database) dan `npx prisma generate`.
- Jalankan server: `node src/index.js`.

Folder utama:
- `src/` - kode sumber
- `prisma/` - skema Prisma
- `docs/` - dokumentasi API
- `tests/` - tes unit/integrasi

Lihat dokumentasi internal untuk detail modul.