// ============================================================
//  ESSENZA — MENÜ VERİLERİ
//  Bu dosyayı GitHub'dan düzenleyerek menüyü güncelleyebilirsin.
//  index.html dosyasına dokunmana gerek yok.
// ============================================================

const MENU_DATA = {

  // ── GENEL BİLGİLER ─────────────────────────────────────────
  eyebrow:  'Restaurant',
  heroSub:  'Antalya · Lara',
  footerLogo: 'Essenza',
  footerAddr: 'Via Monte Napoleone 12, Milano 20121<br>+39 02 1234 5678 · info@essenzaristorante.it<br><br>Salı — Cumartesi arası açık · 19:30 – 23:00<br>Rezervasyon zorunludur',

  // ── NAV YAZILARI ────────────────────────────────────────────
  navLabels: ['Tadım Menüsü','Başlangıçlar','Birinci Yemekler','Ana Yemekler','Tatlılar','Şaraplar'],

  // ── BÖLÜM BAŞLIKLARI ────────────────────────────────────────
  deguLabel:      'Tam Deneyim',
  deguTitle:      'Tadım Menüsü',
  antipastiLabel: 'Başlangıç İçin',
  antipastiTitle: 'Başlangıçlar',
  primiLabel:     'Birinci Yemekler',
  primiTitle:     'Primi',
  secondiLabel:   'Ana Yemekler',
  secondiTitle:   'Secondi',
  dolciLabel:     'Yemek Sonu',
  dolciTitle:     'Tatlılar',
  viniLabel:      'Mahzenimiz',
  viniTitle:      'Şaraplar',

  // ── PARA BİRİMİ (€ $ ₺ £) ───────────────────────────────────
  currency: '€',

  // ── DUYURU BANDI ────────────────────────────────────────────
  // Aktif etmek için: bannerActive: true
  bannerActive: true,
  bannerText: 'Bu hafta özel: Şefin degustasyon menüsünde %10 indirim — Pazartesi & Salı geçerlidir.',

  // ── REZERVASYON BUTONU ──────────────────────────────────────
  // WhatsApp için: 'https://wa.me/905001234567'
  reservationActive: true,
  reservationLabel:  'Rezervasyon',
  reservationLink:   'https://wa.me/905321590514',

  // ── SOSYAL MEDYA (boş bırakırsan görünmez) ──────────────────
  socialInstagram: '',
  socialFacebook:  '',

  // ── MENÜ ROZET / BİLGİ AYARLARI ────────────────────────────
  showChefBadge:  true,   // ★ Şef rozeti
  showVeganIcons: true,   // V / VG ikonları
  showAllergens:  true,   // Alerjen bilgisi
  showCalories:   false,  // Kalori bilgisi

  // ── TADIM MENÜSÜ ────────────────────────────────────────────
  deguBadge: '★ Yasir Şefin İmzası ★',
  deguName:  'Terra & Mare',
  deguSub:   '8 kurs · Şarap eşleştirmesi mevcut',
  deguPrice: '240',
  pairingBtn: 'YZ Destekli Şarap Önerisi',

  courses: [
    { num:'I',    name:'Şef\'in Amuse-Bouche\'u',   desc:'Mutfaktan hoş geldin — dört mevsimlik küçük lokma' },
    { num:'II',   name:'İstiridye ve Havyar',        desc:'Fine de Claire istiridye, Oscietra havyarı, şampanya jeli, dereotu' },
    { num:'III',  name:'Çiğ Sarı Kuyruk Balığı',    desc:'Yabani sarı kuyruk balığı, Sicilya narenciyesi, fesleğen yağı, yenilebilir çiçekler' },
    { num:'IV',   name:'Milanese Risotto',           desc:'Safran DOP, ilik, 36 aylık parmesan, yenilebilir altın' },
    { num:'V',    name:'Taze Makarna — Açık Raviolo',desc:'Confit yumurta sarısı, siyah trüf, çiftlik tereyağı, adaçayı' },
    { num:'VI',   name:'Bresse Güvercini',           desc:'Pembemsi göğüs, çıtır but confit, kırmızı şarap sosu, karamelize soğan' },
    { num:'VII',  name:'Ön Tatlı',                   desc:'Amalfi limon sorbesi, taze nane, gül suyu' },
    { num:'VIII', name:'Tatlı — Çikolata & Fındık',  desc:'Valrhona Guanaja %70, Piemonte IGP fındığı, tuzlu karamel, süt dondurması' },
  ],

  // ── BAŞLANGIÇLAR ────────────────────────────────────────────
  // hidden: true  → yemek menüde görünmez (silmeden gizler)
  // chefPick: true → ★ Şef rozeti çıkar
  // vegetarian/vegan: true → V / VG ikonu çıkar
  antipasti: [
    {
      name: 'Dana Carpaccio', sub: 'Fassona',
      desc: 'Bıçakla dövülmüş Fassona Piemontese, parmesan jeli, yabani roka, 24 aylık Grana Padano dilimleri, rendelenmiş siyah trüf',
      tags: 'İmza', price: '38',
      hidden: false, chefPick: true, vegetarian: false, vegan: false,
      calories: '', allergens: 'Süt, Gluten',
    },
    {
      name: 'Mazara Kırmızı Karidesi', sub: '',
      desc: 'Çiğ, tütsülenmiş tereyağı, San Marzano domates granitas, Pantelleria kapari tozu',
      tags: 'Mevsimlik, Çiğ', price: '52',
      hidden: false, chefPick: false, vegetarian: false, vegan: false,
      calories: '', allergens: 'Kabuklu deniz ürünleri',
    },
    {
      name: 'Foie Gras', sub: 'Venedik Usulü',
      desc: 'Ördek ciğeri terrinesi, Marsala\'lı karamelize soğan, tereyağlı brioche, Modena geleneksel balzamik sirkesi',
      tags: 'Klasik', price: '46',
      hidden: false, chefPick: false, vegetarian: false, vegan: false,
      calories: '', allergens: 'Gluten, Süt, Yumurta',
    },
    {
      name: 'Andria Burratası', sub: '',
      desc: 'Taze burrata, közlenmiş hurma domates, Bronte Antep fıstığı pestu, Taggiasca sızma zeytinyağı, hodan çiçekleri',
      tags: 'Vejetaryen', price: '28',
      hidden: false, chefPick: false, vegetarian: true, vegan: false,
      calories: '', allergens: 'Süt, Fındık',
    },
  ],

  // ── BİRİNCİ YEMEKLER ────────────────────────────────────────
  primi: [
    {
      name: 'Safran Risotto', sub: 'Şefin Yorumu',
      desc: 'Carnaroli Riserva San Massimo, L\'Aquila DOP safranı, dana ilik, monte tereyağı, yenilebilir altın',
      tags: 'İmza, Glutensiz', price: '44',
      hidden: false, chefPick: true, vegetarian: false, vegan: false,
      calories: '', allergens: 'Süt',
    },
    {
      name: 'Beyaz Trüflü Tagliolini', sub: '',
      desc: 'Taze yumurtalı makarna, çiftlik tereyağı, Alba beyaz trüfü (anında), 36 aylık parmesan — Ekim/Ocak arası mevcut',
      tags: 'Mevsimlik', price: '68',
      hidden: false, chefPick: true, vegetarian: true, vegan: false,
      calories: '', allergens: 'Gluten, Yumurta, Süt',
    },
    {
      name: 'Açık Raviolo', sub: 'Yumurtalı',
      desc: 'İrmik raviolosu, 63°C confit yumurta sarısı, Val d\'Aosta fontina fondüsü, Norcia siyah trüfü, frenk soğanı',
      tags: 'Vejetaryen', price: '38',
      hidden: false, chefPick: false, vegetarian: true, vegan: false,
      calories: '', allergens: 'Gluten, Yumurta, Süt',
    },
    {
      name: 'Deniz Kestaneli Spaghetti', sub: '',
      desc: 'Bronz kalıplı spaghetti, Sardunya deniz kestanesi kreması, kefal balığı bottargası, confit kiraz domates, rendelenmiş limon',
      tags: 'Deniz', price: '42',
      hidden: false, chefPick: false, vegetarian: false, vegan: false,
      calories: '', allergens: 'Gluten, Balık',
    },
  ],

  // ── ANA YEMEKLER ─────────────────────────────────────────────
  secondi: [
    {
      name: 'Bresse Güvercini', sub: 'İki Pişirme Tekniği',
      desc: 'Kestane balıyla lake pembemsi göğüs, çıtır confit but, kırmızı şarap sosu, yakılmış soğan püresi, yabani pazı',
      tags: 'İmza, Kara', price: '62',
      hidden: false, chefPick: true, vegetarian: false, vegan: false,
      calories: '', allergens: 'Süt',
    },
    {
      name: 'Tuzda Yabani Levrek', sub: '',
      desc: 'Adriyatik levrekleri, deniz tuzu ve narenciye kabuğu kıtırı, salsa vierge, çiğ ve közlenmiş rezene, tarhun yağı',
      tags: 'Deniz', price: '58',
      hidden: false, chefPick: false, vegetarian: false, vegan: false,
      calories: '', allergens: 'Balık',
    },
    {
      name: 'Wagyu A4 Kontrfile', sub: '',
      desc: 'Japon Wagyu A4, kavrulmuş Wagyu yağı, ilik, Périgueux sosu, Robuchon usulü patates püresi, bebek ıspanak',
      tags: 'Premium', price: '95',
      hidden: false, chefPick: false, vegetarian: false, vegan: false,
      calories: '', allergens: 'Süt, Gluten',
    },
    {
      name: 'Dana Uykuluğu', sub: 'Altın Rengi',
      desc: 'Kahverengi tereyağında sote uykuluk, ilkbahar bezelyeleri, kızarmış kaperi, azaltılmış dana suyu, şekerlenmiş limon',
      tags: 'Klasik', price: '48',
      hidden: false, chefPick: false, vegetarian: false, vegan: false,
      calories: '', allergens: 'Süt',
    },
  ],

  // ── TATLILAR ─────────────────────────────────────────────────
  dolci: [
    {
      name: 'Tiramisu', sub: 'Yeniden Yorumlanan',
      desc: 'Trevisano maskarponesi kreması, specialty kahve köpüğü, ev yapımı savoiardo, São Tomé %100 kakao, rom dondurması',
      tags: 'İmza', price: '24',
      hidden: false, chefPick: true, vegetarian: true, vegan: false,
      calories: '', allergens: 'Gluten, Yumurta, Süt',
    },
    {
      name: 'Guanaja Çikolata & Fındık', sub: '',
      desc: 'Valrhona %70 bitter, Piemonte IGP fındık pralinesi, tereyağlı tuzlu karamel, süt dondurması, altın granül',
      tags: 'Glutensiz', price: '22',
      hidden: false, chefPick: false, vegetarian: true, vegan: false,
      calories: '', allergens: 'Süt, Fındık',
    },
    {
      name: 'Limoncello Sufle', sub: '',
      desc: 'Sıcak sufle, Sorrento limoncellosu, Yunan fesleğeni sorbesi, limon yağı, verbena çiçekleri — yemeğin başında sipariş edilmelidir',
      tags: 'Siparişe Özel', price: '26',
      hidden: false, chefPick: false, vegetarian: true, vegan: false,
      calories: '', allergens: 'Gluten, Yumurta, Süt',
    },
    {
      name: 'Küçük Pastacılık Tabağı', sub: '',
      desc: 'Şefin mignardises seçkisi: macaronlar, çikolata trüfleri, karamel bonbonlar, mini Sicilya kanolları',
      tags: 'İki Kişilik', price: '18',
      hidden: false, chefPick: false, vegetarian: true, vegan: false,
      calories: '', allergens: 'Gluten, Süt, Fındık',
    },
  ],

  // ── ŞARAPLAR ─────────────────────────────────────────────────
  // glass: kadeh fiyatı (boş bırakırsan kadeh seçeneği çıkmaz)
  // bottle: şişe fiyatı
  wineCats: [
    {
      title: 'Şampanya & Köpüklü',
      wines: [
        { name: 'Krug Grande Cuvée',                   info: 'Champagne, Fransa · Çok yıllık assemblage · Pinot Noir, Chardonnay, Meunier', glass: '38', bottle: '320' },
        { name: 'Franciacorta Riserva Vittorio Moretti', info: 'Lombardiya · Bellavista · Chardonnay, Pinot Nero · 2015',                   glass: '22', bottle: '165' },
      ],
    },
    {
      title: 'Seçkin Beyazlar',
      wines: [
        { name: 'Gaia & Rey Chardonnay',              info: 'Langhe DOC · Gaja · Piemonte · 2020',           glass: '28', bottle: '210' },
        { name: 'Vernaccia di San Gimignano Riserva',  info: 'DOCG · Montenidoli · Toskana · 2019',           glass: '16', bottle: '95'  },
      ],
    },
    {
      title: 'Önemli Kırmızılar',
      wines: [
        { name: 'Barolo Brunate',             info: 'DOCG · Roberto Voerzio · Nebbiolo · 2018',           glass: '42', bottle: '380' },
        { name: 'Sassicaia',                  info: 'Bolgheri Sassicaia DOC · Tenuta San Guido · 2019',    glass: '55', bottle: '490' },
        { name: 'Amarone della Valpolicella', info: 'DOCG · Dal Forno Romano · Veneto · 2015',             glass: '48', bottle: '420' },
      ],
    },
    {
      title: 'Tatlı Şaraplar',
      wines: [
        { name: 'Passito di Pantelleria Ben Ryé', info: 'DOC · Donnafugata · Sicilya · Zibibbo · 2021', glass: '18', bottle: '95' },
      ],
    },
  ],

};
