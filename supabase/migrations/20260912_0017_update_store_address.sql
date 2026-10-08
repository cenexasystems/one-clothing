-- Migration: 20260912_0017_update_store_address.sql
-- Update store address for The One Clothing

BEGIN;

UPDATE public.store_settings
SET address = '174, Brazzer Street, Opp. Apollo Medical, Ammoor, Ranipet - 632 501',
    updated_at = NOW()
WHERE id = 1;

COMMIT;
