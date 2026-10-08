# The One Clothing - Retail POS & Billing

Independent React, Vite, and Supabase billing administration for The One Clothing.

## Local setup

1. Create a new, separate Supabase project for this shop (never reuse another shop's project).
2. Copy `.env.example` to `.env` and fill in your Supabase project URL, anon key, and service role key (see "Environment variables" below).
3. Apply the database migrations:
   - Run `npm run migrate:db <your_db_password>` OR paste `supabase/all_migrations_consolidated.sql` in your Supabase SQL Editor.
4. Sync store branding and categories:
   - Run `npm run sync:brand`
5. Run `npm install`.
6. Run `npm run dev`.

## Split payments (cash + QR)

POS bills, advance-order deposits and advance-order final payments can be paid with the **Split** option. Enter how much was
collected by cash and QR; the amounts must add up to the bill / deposit / final amount. The analytics dashboard shows
**Cash Collected**, **QR Collected** and **Card Collected** KPI cards that count split payments by their parts.
Advance-order split payments need migration `20260930_0023_split_payments.sql` (already included in
`supabase/all_migrations_consolidated.sql`). If your database already ran migrations 1-22, run only that file.

## Environment variables

| Variable | Purpose |
| --- | --- |
| `VITE_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` / `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | Supabase anon (public) key |
| `SUPABASE_SERVICE_ROLE_KEY` | Service role key (scripts only - never expose in the browser, never commit) |
| `VITE_WHATSAPP_NUMBER` | Store WhatsApp number (`916385368479`) |
| `VITE_ADMIN_ID` / `VITE_ADMIN_PASSWORD` | Admin login credentials |
| `VITE_STAFF_ID` / `VITE_STAFF_PASSWORD` | Staff login credentials |
| `VITE_API_URL` | Optional API base URL |

## Brand Identity & Contact

- **Store Name:** The One Clothing
- **Address:** 174, Brazzer Street, Opp. Apollo Medical, Ammoor, Ranipet - 632 501
- **Owner:** Santhosh B
- **Phone:** +91 63853 68479 / +91 95858 17191
- **WhatsApp:** 916385368479
- **Email:** theoneclothing2026@gmail.com
- **Instagram:** @theone_clothing.in (https://www.instagram.com/theone_clothing.in/)

Brand values live in `src/lib/brand.ts`, `src/constants/business.ts` and `scripts/sync-the-one.cjs`.

## Logo

The logo is the single file `public/the-one-logo.png` (The One Clothing gold "TC" needle monogram + wordmark on black).
To use the real logo, replace that file (keep the same name), then run `npm run generate:icons` to regenerate the
PWA icons, favicons and the print/PDF logo (`src/lib/logoBase64.ts`; the shipped print logo has a transparent background, so regenerate it only when you change the logo). No code changes are required.
