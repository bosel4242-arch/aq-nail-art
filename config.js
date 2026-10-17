/* Konfigurasi publik (aman ditaruh di GitHub).
   - Anon key Supabase dan Client Key Midtrans memang dirancang publik.
   - JANGAN PERNAH menaruh Service Role Key atau Server Key Midtrans di file ini. */
window.AQ_CONFIG = {
  SUPABASE_URL: 'https://ISI_PROJECT_REF.supabase.co',
  SUPABASE_ANON_KEY: 'ISI_ANON_PUBLIC_KEY',
  MIDTRANS_CLIENT_KEY: 'ISI_MIDTRANS_CLIENT_KEY',
  MIDTRANS_ENV: 'sandbox' // ganti ke 'production' saat sudah live
};
