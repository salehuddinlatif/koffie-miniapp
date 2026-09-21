/* =====================================================================
   KOFFIE JLN. MENTOL — data mini app
   ---------------------------------------------------------------------
   Dibaca terus dari gambar menu rasmi (assets/menu.jpg).
   Harga: panas = harga Hot, sejuk = harga Cold. null = tak ada.
   Harga dikemas kini: 17 Sep 2026 (ikut menu cetak bertanda merah).
   EDIT FAIL INI SAHAJA untuk kemas kini menu / harga / maklumat.
   ===================================================================== */

window.KOFFIE_DATA = {

  SHOP: {
    nama: "KOFFIE",
    logo: "assets/logo.jpg",         // logo rasmi (putih atas hitam)
    tagline: "Local Coffee Shop @ Jalan Mentol, Segamat",
    alamat: "Koffie, Jln. Mentol, Kg. Gubah, 85000 Segamat, Johor",
    buka: "10:00",
    tutup: "24:00",                  // 12 tengah malam
    timezone: 8,                     // MYT (UTC+8)
    verifikasi: "EST. 2021",
    telegramBot: "koffieebot",       // bot yang terima pesanan
    whatsapp: "",                    // contoh: "60123456789" (kosong = butang tak muncul)
    instagram: "https://instagram.com/koffiejlnmentol",
    tiktok: "https://www.tiktok.com/@koffijlnmentol",
    facebook: "https://www.facebook.com/koffiejlnmentol/",
    threads: "https://www.threads.com/@koffiejlnmentol",
    // Platform penghantaran (tampal link penuh; kosong = butang tak muncul)
    foodpanda: "https://www.foodpanda.my/restaurant/w6v8/koffie-jln-mentol",
    shopeefood: "https://shopee.com.my/universal-link/now-food/shop/20330423?deep_and_deferred=1&shareChannel=copy_link",
    grabfood: "",                    // kalau ada
    wazeQuery: "Koffie Jln Mentol, Kg Gubah, 85000 Segamat Johor",
    mapsQuery: "Koffie Jln Mentol Segamat",
    menuImg: "assets/menu-2026-09.jpg",  // gambar menu rasmi (harga Sep 2026)
  },

  /* -------------------------------------------------------------------
     KATEGORI + MENU
     panas = harga Hot, sejuk = harga Cold (null = tiada).
     ------------------------------------------------------------------- */
  MENU: [
    {
      kategori: "SIGNATURE SERIES",
      nota: "All iced · the house favourites",
      item: [
        { nama: "Koffie Shakerato",    panas: null,  sejuk: 14.50, nota: "Espresso + milk + whipped cream", img: "" },
        { nama: "Mentolier Shakerato", panas: null,  sejuk: 13.00, nota: "Koffie shakerato + signature syrup", img: "" },
        { nama: "Espresso Shakerato",  panas: null,  sejuk: 9.50,  nota: "Quadshot of espresso + ice shaken", img: "" },
      ],
    },
    {
      kategori: "KOFFIE",
      nota: "",
      item: [
        { nama: "Espresso",          panas: 5.00,  sejuk: null,  nota: "Espresso + plain water", img: "" },
        { nama: "Americano",         panas: 6.00,  sejuk: 7.00,  nota: "Espresso + hot or iced water", img: "" },
        { nama: "Cold Brew",         panas: null,  sejuk: 9.00,  nota: "24 hours cold steep", img: "" },
        { nama: "Cafe Latte",        panas: 9.00,  sejuk: 10.00, nota: "Espresso + milk + thin foam", img: "" },
        { nama: "Cappucino",         panas: 9.50,  sejuk: null,  nota: "Espresso + milk + thick foam", img: "" },
        { nama: "Cafe Mocha",        panas: 11.00, sejuk: 13.00, nota: "Espresso + milk + chocolate + choc drizzle", img: "" },
        { nama: "Caramel Macchiato", panas: 13.00, sejuk: 14.50, nota: "Espresso + milk + vanilla syrup + caramel drizzle", img: "" },
        { nama: "Flavoured Latte",   panas: 12.50, sejuk: 13.00, nota: "Espresso + milk + flavour syrup", img: "",
          pilihan: [                          /* perisa dipilih dalam sheet minuman */
            { nama: "Vanilla" },
            { nama: "Hazelnut" },
            { nama: "Caramel" },
            { nama: "Salted Caramel" },
            { nama: "Toffee Nut" },
            { nama: "Butterscotch" },
            { nama: "Irish Cream" },
          ] },
        { nama: "Spanish Latte",      panas: 12.00, sejuk: 13.00, nota: "Espresso + milk + sweetened milk", img: "" },
        { nama: "ToffeeNut Biscoff",  panas: null,  sejuk: 15.50, nota: "Espresso + milk + toffee nut syrup + biscoff", img: "" },
        { nama: "Dirty Matcha Latte", panas: null,  sejuk: 15.00, nota: "Espresso + matcha powder + milk", img: "" },
        { nama: "Buttercream Latte",  panas: null,  sejuk: 14.00, nota: "Espresso + buttercreamy cold foam", img: "" },
      ],
    },
    {
      kategori: "NON-KOFFIE",
      nota: "",
      item: [
        { nama: "Chocolate",         panas: 11.00, sejuk: 12.50, nota: "Chocolate powder + milk", img: "" },
        { nama: "Vanilla",           panas: 10.00, sejuk: 11.50, nota: "Vanilla + milk", img: "" },
        { nama: "Double Choc",       panas: 13.50, sejuk: 14.50, nota: "Chocolate powder + choc sauce + milk", img: "" },
        { nama: "Chocolate Mint",    panas: 13.50, sejuk: 14.50, nota: "Chocolate powder + milk + mint syrup", img: "" },
        { nama: "Chocolate Caramel", panas: 13.50, sejuk: 14.50, nota: "Chocolate powder + milk + caramel syrup", img: "" },
        { nama: "Matcha Latte",      panas: 12.00, sejuk: 13.00, nota: "Matcha powder + milk", img: "" },
        { nama: "Flavoured Matcha",  panas: null,  sejuk: 14.50, nota: "Matcha latte + fruit concentrate", img: "",
          pilihan: [                          /* perisa dipilih dalam sheet minuman */
            { nama: "Strawberry" },
            { nama: "Blackcurrant" },
            { nama: "Mango" },
          ] },
      ],
    },
    {
      kategori: "SPARKLING SERIES",
      nota: "All iced",
      item: [
        { nama: "Berry Mango Breeze",    panas: null, sejuk: 11.50, nota: "Strawberry + mango soda", img: "" },
        { nama: "Citrus Berry Sparkler", panas: null, sejuk: 11.50, nota: "Blackcurrant with lemon soda", img: "" },
        { nama: "Guava Casis Crush",     panas: null, sejuk: 11.50, nota: "Guava + blackcurrant soda", img: "" },
        { nama: "Pine Berry Splash",     panas: null, sejuk: 11.50, nota: "Pineapple + strawberry soda", img: "" },
        { nama: "Berry Mint Lemonade",   panas: null, sejuk: 11.50, nota: "Strawberry + mint lemonade soda", img: "" },
      ],
    },
    {
      kategori: "FRAPPE",
      nota: "All iced, topped with whipped cream",
      item: [
        { nama: "Caramel Macchiato Frappe",  panas: null, sejuk: 18.00, nota: "Espresso + milk + vanilla syrup + whipped cream + caramel drizzle", img: "" },
        { nama: "Caramel Cream Frappe",      panas: null, sejuk: 16.00, nota: "Milk + vanilla syrup + whipped cream + caramel syrup + caramel drizzle", img: "" },
        { nama: "Toffee Nut Biscoff Frappe", panas: null, sejuk: 18.50, nota: "Espresso + milk + toffee nut syrup + whipped cream", img: "" },
        { nama: "Mocha Frappe",              panas: null, sejuk: 16.50, nota: "Espresso + milk + milk chocolate + whipped cream", img: "" },
        { nama: "Java Chip Frappe",          panas: null, sejuk: 18.00, nota: "Espresso + milk + chocolate + choc chip + whipped cream", img: "" },
        { nama: "Chocolate Chip Frappe",     panas: null, sejuk: 17.00, nota: "Chocolate powder + choc chip + whipped cream", img: "" },
        { nama: "Chocolate Cookies Frappe",  panas: null, sejuk: 18.00, nota: "Chocolate powder + oreo + choc chip cookies", img: "" },
        { nama: "Vanilla Cream Chip Frappe", panas: null, sejuk: 17.00, nota: "Vanilla powder + milk + choc chip + whipped cream", img: "" },
        { nama: "Vanilla Cookies Frappe",    panas: null, sejuk: 18.00, nota: "Vanilla powder + milk + oreo + choc chip", img: "" },
        { nama: "Matcha Frappe",             panas: null, sejuk: 15.50, nota: "Matcha powder + milk + whipped cream", img: "" },
      ],
    },
    {
      kategori: "ADD-ON",
      nota: "Add to any drink",
      /* item tanpa "pilihan" = kotak semak (boleh pilih banyak).
         item dengan "pilihan" = dropdown (pilih SATU); harga ikut pilihan itu.
         Kategori ini tidak muncul sebagai chip — ia dibaca oleh sheet setiap minuman. */
      item: [
        { nama: "Extra Shot",     panas: 2.00, sejuk: 2.00, nota: "", img: "" },
        { nama: "Upsize",         panas: 3.00, sejuk: 3.00, nota: "", img: "" },
        { nama: "Whipping Cream", panas: 2.00, sejuk: 2.00, nota: "", img: "" },
        { nama: "Oatmilk",        panas: 3.00, sejuk: 3.00, nota: "", img: "" },
        { nama: "Frappe",         panas: 2.00, sejuk: 2.00, nota: "", img: "" },
        { nama: "Topping",        panas: 1.50, sejuk: 1.50, nota: "Pick any", img: "", banyak: true,
          pilihan: [
            { nama: "Chocolate Chip", harga: 1.50 },
            { nama: "Biscoff",        harga: 1.50 },
            { nama: "Oreo",           harga: 1.50 },
            { nama: "Almond",         harga: 1.50 },
          ] },
        { nama: "Drizzle",        panas: 2.00, sejuk: 2.00, nota: "Pick one", img: "",
          pilihan: [
            { nama: "Caramel",   harga: 2.00 },
            { nama: "Chocolate", harga: 2.00 },
          ] },
        { nama: "Upside Down",    panas: 2.00, sejuk: 2.00, nota: "Pick one", img: "",
          pilihan: [
            { nama: "Caramel",   harga: 2.00 },
            { nama: "Chocolate", harga: 2.00 },
          ] },
        { nama: "Syrup",          panas: 2.00, sejuk: 2.00, nota: "Pick one", img: "",
          pilihan: [
            { nama: "Vanilla",        harga: 2.00 },
            { nama: "Caramel",        harga: 2.00 },
            { nama: "Hazelnut",       harga: 2.00 },
            { nama: "Salted Caramel", harga: 2.00 },
            { nama: "Butterscotch",   harga: 2.00 },
            { nama: "Toffee Nut",     harga: 2.00 },
            { nama: "Irish Cream",    harga: 2.00 },
            { nama: "Mint",           harga: 2.00 },
          ] },
      ],
    },
  ],

  /* -------------------------------------------------------------------
     HOME_3D — kad logo 3D berputar di atas gambar Home.
     hidup:false → kad tak muncul langsung (app nampak macam sebelum ini)
     tinggi      → tinggi kad dalam px (lebar ikut skrin telefon)
     arahan      → teks kecil bawah kad (ENGLISH — ini UI customer)
     gambar      → gambar statik fallback bila WebGL gagal / reduced-motion
     ------------------------------------------------------------------- */
  HOME_3D: {
    hidup: true,
    tinggi: 280,
    arahan: "Drag to spin",
    gambar: "assets/hero-3d.jpg",
  },

  /* -------------------------------------------------------------------
     HOME — gambar muka utama app (carousel di tab Home).
     Letak fail dalam assets/home/ dan senaraikan di bawah.
     ------------------------------------------------------------------- */
  HOME: [
    { img: "assets/home/1.jpg", tajuk: "Koffie Jln. Mentol", sari: "Segamat, Johor" },
  ],

  /* -------------------------------------------------------------------
     GALLERY — letak gambar dalam assets/gallery/ dan senaraikan di sini.
     ------------------------------------------------------------------- */
  /* Gallery: gambar penuh lebar, berturutan tanpa jarak — tiada kapsyen.
     Susunan ikut abjad nama fail (01, 02, ...). */
  GALLERY: [
    { img: "assets/gallery/01-iced-latte-pour.jpg" },
    { img: "assets/gallery/02-iced-coffee.jpg" },
    { img: "assets/gallery/03-matcha-to-go.jpg" },
    { img: "assets/gallery/04-coffee-cookies.jpg" },
    { img: "assets/gallery/05-shop-night.jpg" },
    { img: "assets/gallery/06-event-booth.jpg" },
    { img: "assets/gallery/07-merch.jpg" },
    { img: "assets/gallery/08-team.jpg" },
  ],
};
