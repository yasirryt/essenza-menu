// ============================================================
//  ESSENZA — MENÜ VERİLERİ · LARA, ANTALYA
//  Bu dosyayı GitHub'dan düzenleyerek menüyü güncelleyebilirsin.
//  index.html dosyasına hiç dokunmana gerek yok.
// ============================================================

const MENU_DATA = {

  // ── GENEL BİLGİLER ─────────────────────────────────────────
  eyebrow:    'Restaurant',
  heroSub:    'Antalya · Lara',
  footerLogo: 'Essenza',
  footerAddr: 'Lara Sahil Caddesi, Antalya<br><br>Salı — Pazar arası açık · 19:30 – 23:30<br>Rezervasyon zorunludur',

  // ── NAV YAZILARI ────────────────────────────────────────────
  navLabels: ['Tadım Menüsü', 'Başlangıçlar', 'Birinci Yemekler', 'Ana Yemekler', 'Tatlılar', 'İçecekler'],

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
  dolciTitle:     'Dolci',
  viniLabel:      'Mahzenimiz',
  viniTitle:      'İçecekler',

  // ── PARA BİRİMİ ─────────────────────────────────────────────
  currency: '₺',

  // ── DUYURU BANDI ────────────────────────────────────────────
  bannerActive: false,
  bannerText:   'Bu hafta özel: Şefin degustasyon menüsünde %10 indirim — Salı & Çarşamba geçerlidir.',

  // ── REZERVASYON BUTONU ──────────────────────────────────────
  reservationActive: true,
  reservationLabel:  'Rezervasyon',
  reservationLink:   'https://wa.me/905321590514',

  // ── SOSYAL MEDYA ────────────────────────────────────────────
  socialInstagram: '',
  socialFacebook:  '',

  // ── MENÜ ROZET VE BİLGİ GÖSTERİMİ ─────────────────────────
  showChefBadge:  true,
  showVeganIcons: true,
  showAllergens:  true,
  showCalories:   false,

  // ── TADIM MENÜSÜ — 8 KURS ───────────────────────────────────
  deguBadge:  '★ Yasir Şefin İmzası ★',
  deguName:   'Terra & Mare',
  deguSub:    '8 kurs · YZ destekli şarap eşleştirmesi mevcut',
  deguPrice:  '8500',
  pairingBtn: 'YZ Destekli Şarap Önerisi',

  courses: [
    { num: 'I',    name: 'Şefin Amuse-Bouche\'u',       desc: 'Mutfaktan hoş geldin — dört unsurlu küçük lokma: kefir köpüğü, bottarga, zeytin jeli, narenciye kabuğu' },
    { num: 'II',   name: 'Fine de Claire İstiridye & Oscietra Havyarı', desc: 'Canlı istiridye, Oscietra havyarı, şampanya granitas, dereotu yağı, deniz tuzu köpüğü' },
    { num: 'III',  name: 'Mazara Kırmızı Karidesi Crudo', desc: 'Çiğ Mazara karidesi, Sicilya narenciyesi, yuzu dressing, taze wasabi, yenilebilir çiçekler' },
    { num: 'IV',   name: 'Milanese Risotto',              desc: 'Carnaroli, L\'Aquila DOP safranı, dana ilik, monte tereyağı, 36 aylık parmesan, yenilebilir altın' },
    { num: 'V',    name: 'Açık Raviolo — Trüf & Yumurta', desc: '63°C confit yumurta sarısı, Val d\'Aosta fontina fondüsü, Norcia siyah trüfü, frenk soğanı yağı' },
    { num: 'VI',   name: 'Tuzda Yabani Levrek',           desc: 'Akdeniz yabani levrekleri, deniz tuzu & narenciye kabuğu kıtırı, salsa vierge, tarhun yağı' },
    { num: 'VII',  name: 'Ön Tatlı',                      desc: 'Amalfi limon sorbesi, taze nane granitas, gül suyu, verbena çiçekleri' },
    { num: 'VIII', name: 'Çikolata & Fındık',             desc: 'Valrhona Guanaja %70, Piemonte IGP fındık pralinesi, tuzlu karamel, süt dondurması, altın granül' },
  ],

  // ── BAŞLANGIÇLAR — 5 ÇEŞIT ──────────────────────────────────
  antipasti: [
    {
      name: 'Dana Carpaccio', sub: 'Fassona Piemontese',
      desc: 'Bıçakla dövülmüş Fassona, parmesan jeli, yabani roka, 24 aylık Grana Padano dilimleri, rendelenmiş siyah trüf, limon sızma yağı',
      tags: 'İmza', price: '980',
      hidden: false, chefPick: true, vegetarian: false, vegan: false,
      calories: '', allergens: 'Süt, Gluten',
    },
    {
      name: 'Mazara Kırmızı Karidesi', sub: 'Crudo',
      desc: 'Çiğ Mazara karidesi, tütsülenmiş tereyağı, San Marzano domates granitas, Pantelleria kapari tozu, limon kabuğu yağı',
      tags: 'Mevsimlik, Çiğ', price: '1.100',
      hidden: false, chefPick: false, vegetarian: false, vegan: false,
      calories: '', allergens: 'Kabuklu deniz ürünleri',
    },
    {
      name: 'Foie Gras', sub: 'Venedik Usulü',
      desc: 'Ördek ciğeri terrinesi, Marsala\'lı karamelize soğan, tereyağlı brioche, Modena geleneksel balzamik sirkesi, portakal konfiti',
      tags: 'Klasik', price: '1.200',
      hidden: false, chefPick: false, vegetarian: false, vegan: false,
      calories: '', allergens: 'Gluten, Süt, Yumurta',
    },
    {
      name: 'Andria Burratası', sub: '',
      desc: 'Günlük taze burrata, közlenmiş hurma domates, Bronte Antep fıstığı pestu, Taggiasca sızma zeytinyağı, hodan çiçekleri, deniz tuzu',
      tags: 'Vejetaryen', price: '720',
      hidden: false, chefPick: false, vegetarian: true, vegan: false,
      calories: '', allergens: 'Süt, Fındık',
    },
    {
      name: 'Fine de Claire İstiridye', sub: '3 Adet',
      desc: 'Fransız Fine de Claire istiridyeler, şalot-şeri sirkesi mignonette, limon, taze yaban turpu — saf deniz lezzeti',
      tags: 'Çiğ, Deniz', price: '950',
      hidden: false, chefPick: false, vegetarian: false, vegan: false,
      calories: '', allergens: 'Yumuşakça',
    },
  ],

  // ── BİRİNCİ YEMEKLER — 5 ÇEŞIT ──────────────────────────────
  primi: [
    {
      name: 'Safran Risotto', sub: 'Şefin Yorumu',
      desc: 'Carnaroli Riserva San Massimo, L\'Aquila DOP safranı, dana ilik, monte tereyağı, 36 aylık parmesan, yenilebilir altın',
      tags: 'İmza, Glutensiz', price: '1.100',
      hidden: false, chefPick: true, vegetarian: false, vegan: false,
      calories: '', allergens: 'Süt',
    },
    {
      name: 'Beyaz Trüflü Tagliolini', sub: 'Alba',
      desc: 'Taze yumurtalı tagliolini, çiftlik tereyağı, Alba beyaz trüfü masada rendelenir, 36 aylık parmesan — Ekim–Ocak arası',
      tags: 'Mevsimlik', price: '1.800',
      hidden: false, chefPick: true, vegetarian: true, vegan: false,
      calories: '', allergens: 'Gluten, Yumurta, Süt',
    },
    {
      name: 'Açık Raviolo', sub: 'Confit Yumurta & Trüf',
      desc: 'İrmik raviolosu, 63°C confit yumurta sarısı, Val d\'Aosta fontina fondüsü, Norcia siyah trüfü, frenk soğanı',
      tags: 'Vejetaryen', price: '980',
      hidden: false, chefPick: false, vegetarian: true, vegan: false,
      calories: '', allergens: 'Gluten, Yumurta, Süt',
    },
    {
      name: 'Deniz Kestaneli Spaghetti', sub: '',
      desc: 'Bronz kalıplı spaghetti, Sardunya deniz kestanesi kreması, kefal balığı bottargası, confit kiraz domates, rendelenmiş limon',
      tags: 'Deniz', price: '1.050',
      hidden: false, chefPick: false, vegetarian: false, vegan: false,
      calories: '', allergens: 'Gluten, Balık',
    },
    {
      name: 'Pappardelle al Ragù', sub: 'Yabani Domuz',
      desc: 'El açması geniş pappardelle, 6 saat pişen yabani domuz ragùsu, kırmızı şarap redüksiyonu, taze biberiye, pecorino romano',
      tags: 'Ev Yapımı', price: '920',
      hidden: false, chefPick: false, vegetarian: false, vegan: false,
      calories: '', allergens: 'Gluten, Süt',
    },
  ],

  // ── ANA YEMEKLER — 5 ÇEŞIT ───────────────────────────────────
  secondi: [
    {
      name: 'Bresse Güvercini', sub: 'İki Pişirme Tekniği',
      desc: 'Kestane balıyla lake pembemsi göğüs, çıtır confit but, kırmızı şarap sosu, yakılmış soğan püresi, yabani pazı',
      tags: 'İmza', price: '1.600',
      hidden: false, chefPick: true, vegetarian: false, vegan: false,
      calories: '', allergens: 'Süt',
    },
    {
      name: 'Tuzda Yabani Levrek', sub: '',
      desc: 'Akdeniz yabani levrekleri, deniz tuzu ve narenciye kabuğu kıtırı — masada kırılır. Salsa vierge, közlenmiş rezene, tarhun yağı',
      tags: 'Deniz', price: '1.500',
      hidden: false, chefPick: false, vegetarian: false, vegan: false,
      calories: '', allergens: 'Balık',
    },
    {
      name: 'Wagyu A4 Kontrfile', sub: '',
      desc: 'Japon Wagyu A4 kontrfile, kavrulmuş Wagyu yağı, kemik iliği, Périgueux sosu, Robuchon usulü patates püresi, bebek ıspanak',
      tags: 'Premium', price: '2.400',
      hidden: false, chefPick: false, vegetarian: false, vegan: false,
      calories: '', allergens: 'Süt, Gluten',
    },
    {
      name: 'Dana Uykuluğu', sub: 'Altın Rengi',
      desc: 'Kahverengi tereyağında sote uykuluk, ilkbahar bezelyeleri, kızarmış kapari, azaltılmış dana suyu, şekerlenmiş limon',
      tags: 'Klasik', price: '1.350',
      hidden: false, chefPick: false, vegetarian: false, vegan: false,
      calories: '', allergens: 'Süt',
    },
    {
      name: 'Costata Fiorentina', sub: 'Chianina IGP · ~600g',
      desc: 'Chianina T-bone, sadece kor ateş ve kaya tuzu. Rosmarino-sarımsak yağı, ızgara kuşkonmaz, cannellini fasulyesi',
      tags: 'Paylaşımlık', price: '3.200',
      hidden: false, chefPick: false, vegetarian: false, vegan: false,
      calories: '', allergens: 'Süt',
    },
  ],

  // ── DOLCİ — 5 ÇEŞIT ──────────────────────────────────────────
  dolci: [
    {
      name: 'Tiramisu', sub: 'Yeniden Yorumlanan',
      desc: 'Trevisano maskarponesi kreması, specialty kahve köpüğü, ev yapımı savoiardo, São Tomé %100 kakao, rom dondurması',
      tags: 'İmza', price: '580',
      hidden: false, chefPick: true, vegetarian: true, vegan: false,
      calories: '', allergens: 'Gluten, Yumurta, Süt',
    },
    {
      name: 'Guanaja Çikolata & Fındık', sub: '',
      desc: 'Valrhona %70 bitter fondant, Piemonte IGP fındık pralinesi, tereyağlı tuzlu karamel, fleur de sel, süt dondurması, altın granül',
      tags: 'Glutensiz', price: '540',
      hidden: false, chefPick: false, vegetarian: true, vegan: false,
      calories: '', allergens: 'Süt, Fındık',
    },
    {
      name: 'Limoncello Sufle', sub: '',
      desc: 'Sıcak sufle, Sorrento limoncellosu, Yunan fesleğeni sorbesi, limon yağı, verbena çiçekleri — yemeğin başında sipariş edilmelidir',
      tags: 'Siparişe Özel', price: '620',
      hidden: false, chefPick: false, vegetarian: true, vegan: false,
      calories: '', allergens: 'Gluten, Yumurta, Süt',
    },
    {
      name: 'Panna Cotta al Pistacchio', sub: 'Bronte',
      desc: 'Bronte fıstığı kreması panna cotta, limoncello & biberiyeyle marine çilek, çıtır amaretti unu, nane yağı',
      tags: 'Glutensiz', price: '500',
      hidden: false, chefPick: false, vegetarian: true, vegan: false,
      calories: '', allergens: 'Süt, Fındık',
    },
    {
      name: 'Küçük Pastacılık Tabağı', sub: 'Mignardises',
      desc: 'Şefin kapanış jesti: macaronlar, çikolata trüfleri, karamel bonbonlar, mini Sicilya kanolları, portakal kabuğu şekeri',
      tags: 'İki Kişilik', price: '480',
      hidden: false, chefPick: false, vegetarian: true, vegan: false,
      calories: '', allergens: 'Gluten, Süt, Fındık',
    },
  ],

  // ── İÇECEKLER — ŞARAPLAR & KOKTEYLLer ───────────────────────
  // glass: kadeh fiyatı — boş bırakırsan kadeh seçeneği çıkmaz
  // bottle: şişe fiyatı
  wineCats: [
    {
      title: 'Şampanya & Köpüklü',
      wines: [
        { name: 'Krug Grande Cuvée',                    info: 'Champagne, Fransa · Çok yıllık assemblage · Pinot Noir, Chardonnay, Meunier', glass: '850',  bottle: '6.800' },
        { name: 'Franciacorta Riserva Vittorio Moretti', info: 'Lombardiya · Bellavista · Chardonnay, Pinot Nero · 2015',                    glass: '480',  bottle: '3.600' },
        { name: 'Billecart-Salmon Blanc de Blancs',      info: 'Champagne, Fransa · Grand Cru Chardonnay · Prestige Cuvée',                  glass: '',     bottle: '5.200' },
      ],
    },
    {
      title: 'Seçkin Beyazlar',
      wines: [
        { name: 'Gaia & Rey Chardonnay',             info: 'Langhe DOC · Gaja · Piemonte · 2020',                           glass: '620',  bottle: '4.800' },
        { name: 'Chablis Premier Cru — Montée de Tonnerre', info: 'Domaine Vocoret · Burgundy, Fransa · 2021',              glass: '480',  bottle: '3.200' },
        { name: 'Vernaccia di San Gimignano Riserva', info: 'DOCG · Montenidoli · Toskana · 2019',                           glass: '320',  bottle: '1.800' },
        { name: 'Cloudy Bay Sauvignon Blanc',         info: 'Marlborough, Yeni Zelanda · 2023',                              glass: '380',  bottle: '2.400' },
      ],
    },
    {
      title: 'Roze',
      wines: [
        { name: 'Whispering Angel Rosé',    info: 'Château d\'Esclans · Provence, Fransa · 2023',          glass: '520',  bottle: '3.800' },
        { name: 'Cerasuolo d\'Abruzzo DOC', info: 'Valentini · Abruzzo · Montepulciano · Solgun Roze',      glass: '380',  bottle: '2.600' },
      ],
    },
    {
      title: 'Önemli Kırmızılar',
      wines: [
        { name: 'Barolo Brunate',             info: 'DOCG · Roberto Voerzio · Nebbiolo · 2018',                  glass: '920',  bottle: '8.400' },
        { name: 'Sassicaia',                  info: 'Bolgheri Sassicaia DOC · Tenuta San Guido · 2019',          glass: '1.200', bottle: '11.000' },
        { name: 'Amarone della Valpolicella', info: 'DOCG · Dal Forno Romano · Veneto · 2015',                   glass: '1.050', bottle: '9.200' },
        { name: 'Chianti Classico Gran Selezione', info: 'Antinori Badia a Passignano · Toskana · 2019',         glass: '480',  bottle: '4.200' },
        { name: 'Primitivo di Manduria DOC',  info: 'Feudi di San Marzano · Puglia · Kadifemsi, Meyvesel · 2020', glass: '320',  bottle: '2.200' },
      ],
    },
    {
      title: 'Tatlı Şaraplar & Digestif',
      wines: [
        { name: 'Passito di Pantelleria Ben Ryé', info: 'DOC · Donnafugata · Sicilya · Zibibbo · 2021',  glass: '420',  bottle: '2.200' },
        { name: 'Vin Santo del Chianti',           info: 'Isole e Olena · Toskana · Cantucci ile',       glass: '380',  bottle: '' },
        { name: 'Grappa di Brunello',              info: 'Biondi-Santi · Montalcino · Sangiovese Grosso posası', glass: '620', bottle: '' },
        { name: 'Amaro Montenegro',                info: 'Bologna · 40 botanik · Sindirim için',         glass: '280',  bottle: '' },
        { name: 'Limoncello di Capri',             info: 'Campania · Limon kabuğu · Soğuk servis',       glass: '220',  bottle: '' },
      ],
    },
    {
      title: 'Signature Cocktails',
      wines: [
        { name: 'Essenza Negroni',       info: 'Monkey 47 Gin · Campari · Carpano Antica · Portakal · Koca buz küresi',          glass: '680',  bottle: '' },
        { name: 'Amalfi Coast Sour',     info: 'Limoncello di Capri · Pisco · Taze limon · Gül suyu · Aquafaba köpük',            glass: '620',  bottle: '' },
        { name: 'Antalya Bellini',       info: 'Taze Akdeniz şeftali püresi · Franciacorta · Taze zencefil · Yenilebilir altın',  glass: '580',  bottle: '' },
        { name: 'Truffle Martini',       info: 'Grey Goose Vodka · Kuru Vermouth · Beyaz truffle damlası · Yeşil zeytin',         glass: '720',  bottle: '' },
        { name: 'Aperol Spritz di Lara', info: 'Aperol · Franciacorta · Bitter narenciye · Rosmarino dalı',                       glass: '480',  bottle: '' },
      ],
    },
    {
      title: 'Alkolsüz & Soft',
      wines: [
        { name: 'San Pellegrino',   info: 'İtalyan maden suyu · 750ml',          glass: '',     bottle: '180' },
        { name: 'Acqua Panna',      info: 'İtalyan kaynak suyu · 750ml',          glass: '',     bottle: '180' },
        { name: 'Taze Sıkılmış',    info: 'Portakal, nar veya greyfurt · Mevsimlik', glass: '160', bottle: '' },
        { name: 'Essenza Limonata', info: 'Taze limon · Nane · Zencefil · Bal',   glass: '200',  bottle: '' },
      ],
    },
  ],

  // ── ŞARAP EŞLEŞTİRME KURALLARI ─────────────────────────────
  pairingRules: [
    {
      keywords: ['istiridye','ostrica','kabuk','deniz','caviale','havyar','crudo','çiğ','karides','gambero','hamsi','ton'],
      wineProfile: 'sparkling',
      reasons: [
        'Deniz ürünlerinin iyot ve mineral notaları köpüklü şarapların asidik yapısıyla mükemmel denge kuruyor.',
        'Kabukluların tuzlu deniz aroması, köpüklü şarabın ince balonlarıyla zarif bir uyum sağlıyor.',
        'Şampanyanın mineralli ve asidik karakteri bu hafif deniz lezzetini taze tutuyor.',
      ],
    },
    {
      keywords: ['balık','branzino','levrek','ricciola','salmone','sogliola','orata','calamari','polpo','ahtapot','ıstakoz'],
      wineProfile: 'white_mineral',
      reasons: [
        'Balığın narin yapısı, beyaz şarabın mineral ve asidik notalarıyla harika bir armoni oluşturuyor.',
        'Bu deniz yemeğinin yumuşak dokusu, beyaz şarabın ferahlığıyla mükemmel eşleşiyor.',
        'Beyaz şarabın asidik karakteri balığın yağlılığını dengeleyen ideal bir tamamlayıcı.',
      ],
    },
    {
      keywords: ['risotto','pasta','makarna','raviolo','tagliolini','spaghetti','pappardelle','uovo','yumurta','burro','tereyağ','parmigiano','parmesan','fonduta','fondü','trüf','tartufo'],
      wineProfile: 'white_full',
      reasons: [
        'Yemekteki kremamsı doku ve zengin aromalar, tam gövdeli beyaz şarabın yağlı yapısıyla uyum içinde.',
        'Şarabın mineral notaları makarna ve risottodaki nişastalı yapıyı dengelerken lezzeti tamamlıyor.',
        'Bu zengin kursu hafifletmek için ferah asidiyetli bir beyaz ideal tercih.',
      ],
    },
    {
      keywords: ['kümes','ördek','anatra','piccione','güvercin','quaglia','bıldırcın','animelle','uykuluk','prosciutto'],
      wineProfile: 'rose_or_light_red',
      reasons: [
        'Kümes hayvanlarının yumuşak etli yapısı hem rosé hem de hafif kırmızı şaraplarla dengeleniyor.',
        'Bu yemeğin narin protein yapısı, çok ağır olmayan kırmızı şarapların meyveli tanenleriyle uyum sağlıyor.',
        'Ettin yağlılığı şarabın tanenli yapısıyla temizlenirken aromalar birbirini tamamlıyor.',
      ],
    },
    {
      keywords: ['manzo','dana','sığır','bistecca','biftek','wagyu','kontrfile','fiorentina','agnello','kuzu','cinghiale','yaban domuzu','selvaggina','av','costata'],
      wineProfile: 'red_full',
      reasons: [
        'Etin güçlü protein yapısı ve yağlılığı, Barolo\'nun ağır tanen yapısıyla mükemmel denge kuruyor.',
        'Bu zengin et yemeği, tam gövdeli kırmızıların kompleks meyve ve toprak notalarını en iyi şekilde ortaya çıkarıyor.',
        'Şarabın uzun bitiş süresi ve tanenleri etin yoğunluğunu dengeleyerek olağanüstü bir kombinasyon oluşturuyor.',
      ],
    },
    {
      keywords: ['dolce','tatlı','dessert','cioccolato','çikolata','tiramisù','tiramisu','panna cotta','gelato','dondurma','nocciola','fındık','caramello','karamel','soufflé','sufle','pasticceria','fondant'],
      wineProfile: 'sweet',
      reasons: [
        'Tatlı şarabın bal ve kuru meyve notaları tatlının zengin lezzetini zarif biçimde tamamlıyor.',
        'Bu tatlının yoğun aroması, şarabın doğal tatlılığıyla aynı yoğunlukta buluşup mükemmel uyum sağlıyor.',
        'Şarabın asidiyeti tatlının şekerliğini dengeleyerek son kursu ferah bir notayla tamamlıyor.',
      ],
    },
    {
      keywords: ['foie','ciğer','terrine','burrata','carpaccio'],
      wineProfile: 'white_full',
      reasons: [
        'Zengin ve yağlı yapı, beyaz şarabın asidiyeti ile dengeleniyor.',
        'Şarabın mineral notaları zengin başlangıcın ağırlığını hafifletiyor.',
        'Bu lüks başlangıç için şarabın karmaşık aromatik yapısı ideal eşlikçi.',
      ],
    },
  ],

  // ── ŞARAP PROFİLLERİ ────────────────────────────────────────
  wineProfiles: {
    sparkling:         ['Şampanya', 'Köpüklü', 'Bollicine', 'Franciacorta', 'Prosecco', 'Cava', 'Crémant', 'Krug', 'Billecart'],
    white_mineral:     ['Vernaccia', 'Soave', 'Greco', 'Fiano', 'Vermentino', 'Pinot Grigio', 'Gavi', 'Sauvignon', 'Chablis', 'Riesling', 'Cloudy'],
    white_full:        ['Chardonnay', 'Gaia', 'Viognier', 'White Burgundy', 'Beyaz'],
    rose_or_light_red: ['Rosé', 'Rosato', 'Whispering', 'Cerasuolo', 'Pinot Nero', 'Pinot Noir', 'Bardolino', 'Valpolicella'],
    red_full:          ['Barolo', 'Barbaresco', 'Brunello', 'Amarone', 'Sassicaia', 'Bolgheri', 'Chianti', 'Nebbiolo', 'Cabernet', 'Syrah', 'Primitivo', 'Montepulciano'],
    sweet:             ['Passito', 'Vin Santo', 'Moscato', 'Sauternes', 'Dessert', 'Tatlı', 'Recioto'],
  },

  // ── ASİSTAN ÖNERİLERİ ───────────────────────────────────────
  assistantSuggestions: {

    'Wagyu A4 Kontrfile': {
      intro:   'Wagyu A4 yoğun ve derin aromalarıyla akşamın en güçlü kursu — başlangıcın hafif ve temiz olması şart.',
      starter: 'Dana Carpaccio',
      reason:  'Carpaccionun ince dilimleri ve parmesan ferahlığı, Wagyu\'nun zengin yağlılığına mükemmel bir kontrast oluşturur.',
    },

    'Bresse Güvercini': {
      intro:   'İki teknikle pişirilmiş Bresse Güvercini kompleks aromalara sahip — başlangıcın umami notlarını desteklemesi gerekir.',
      starter: 'Foie Gras',
      reason:  'Foie Gras\'ın zengin kadifemsi yapısı, güvercinin derin et aromalarına açılan en zarif kapıdır.',
    },

    'Tuzda Yabani Levrek': {
      intro:   'Tuzda pişen yabani levrek saf ve temiz bir deniz lezzeti — başlangıcın da aynı ferahlıkta olması gerekir.',
      starter: 'Fine de Claire İstiridye',
      reason:  'İstiridyenin saf deniz iyotu, levreğin narin aromasına zemin hazırlayan en doğal açılıştır.',
    },

    'Dana Uykuluğu': {
      intro:   'Altın rengi dana uykuluğu narin ama belirgin bir lezzet — başlangıcın damağı nazikçe uyandırması gerekir.',
      starter: 'Andria Burratası',
      reason:  'Burratanın kremalı yapısı, uykuluğun nüanslı aromasını bastırmadan damağı mükemmel biçimde hazırlar.',
    },

    'Costata Fiorentina': {
      intro:   'Chianina Fiorentina akşamın en güçlü, en ikonik seçimi — başlangıcın sadeliği bu yemeğe alan açar.',
      starter: 'Dana Carpaccio',
      reason:  'Aynı Chianina ırkından gelen carpaccio, büyük bifteğe hafif ama tutarlı bir giriş yapar.',
    },

  },

};
