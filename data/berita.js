// ================================================
//  data/berita.js — Database Berita WartaBatangHari
//  Cara tambah berita baru:
//  1. Copy salah satu objek { id:... }
//  2. Ganti semua isinya
//  3. Pastikan id-nya unik (lanjutkan angka terakhir)
// ================================================

var BERITA = [
  {
    id: 1,
    judul: "Pemkab Batang Hari Resmikan Jembatan Baru Penghubung Desa Rantau Puri",
    ringkasan: "Jembatan senilai Rp 4,2 miliar ini menghubungkan dua desa yang selama ini sulit diakses saat musim hujan dan sungai meluap.",
    isi: "<p>Pemerintah Kabupaten Batang Hari resmi meresmikan jembatan baru di Desa Rantau Puri, Kecamatan Maro Sebo Ulu, Minggu (25/5/2026). Jembatan senilai Rp 4,2 miliar ini dibangun menggunakan Dana Alokasi Khusus (DAK) dari pemerintah pusat.</p><p>Bupati Batang Hari dalam sambutannya menyatakan bahwa pembangunan infrastruktur pedesaan menjadi prioritas utama pemerintah daerah tahun ini. Dengan jembatan ini, petani di Desa Rantau Puri tidak lagi kesulitan mengangkut hasil kebun ke pasar.</p><p>Warga setempat menyambut antusias peresmian tersebut. Selama ini, akses jalan menuju desa kerap terputus saat musim hujan akibat sungai yang meluap. Jembatan lama yang terbuat dari kayu sudah tidak layak pakai sejak tiga tahun lalu.</p><p>Kepala Dinas PUPR menyebutkan, proyek ini dikerjakan selama delapan bulan dan menyerap tenaga kerja lokal sebanyak 45 orang. Jembatan baru ini memiliki panjang 32 meter dengan konstruksi beton bertulang.</p>",
    kategori: "Infrastruktur",
    penulis: "Ahmad Fauzi",
    tanggal: "26 Mei 2026",
    img: "https://picsum.photos/seed/bridge1/800/450",
    views: 1240,
    featured: true
  },
  {
    id: 2,
    judul: "Harga Karet Petani Batang Hari Naik Tipis, Tembus Rp 11.500 per Kg",
    ringkasan: "Kenaikan harga karet disambut gembira petani di Kecamatan Mersam dan Bajubang yang mengandalkan komoditas ini sebagai sumber utama penghasilan.",
    isi: "<p>Harga karet rakyat di Kabupaten Batang Hari tercatat naik tipis ke level Rp 11.500 per kilogram dalam sepekan terakhir. Kenaikan ini disambut positif oleh ribuan petani karet yang tersebar di berbagai kecamatan.</p><p>Petani di Kecamatan Mersam mengaku lega dengan perkembangan harga ini. Bulan lalu masih Rp 10.800, sekarang naik lumayan. Semoga bisa terus naik sampai Rp 13.000.</p><p>Dinas Perkebunan Kabupaten Batang Hari mencatat ada sekitar 42.000 hektare lahan karet rakyat yang tersebar di seluruh wilayah kabupaten. Komoditas ini menjadi tulang punggung ekonomi sebagian besar warga pedesaan.</p>",
    kategori: "Ekonomi",
    penulis: "Siti Rahayu",
    tanggal: "25 Mei 2026",
    img: "https://picsum.photos/seed/rubber2/800/450",
    views: 987,
    featured: true
  },
  {
    id: 3,
    judul: "Banjir Rendam Puluhan Rumah di Desa Durian Luncuk, Warga Mengungsi",
    ringkasan: "Hujan lebat semalaman menyebabkan sungai meluap dan merendam kawasan permukiman di Kelurahan Durian Luncuk, Maro Sebo Ulu.",
    isi: "<p>Hujan deras yang mengguyur Kabupaten Batang Hari sejak Sabtu malam menyebabkan banjir merendam puluhan rumah warga di Kelurahan Durian Luncuk, Kecamatan Maro Sebo Ulu, Minggu (24/5/2026) dini hari.</p><p>Ketinggian air dilaporkan mencapai 60-80 sentimeter di beberapa titik pemukiman. Warga terpaksa mengungsi ke masjid dan balai desa setempat yang berada di lokasi lebih tinggi.</p><p>Tim BPBD Kabupaten Batang Hari langsung bergerak ke lokasi untuk mendirikan dapur umum dan mendistribusikan bantuan logistik. Sebanyak 47 kepala keluarga terdampak banjir ini.</p>",
    kategori: "Bencana",
    penulis: "Hendri Putra",
    tanggal: "25 Mei 2026",
    img: "https://picsum.photos/seed/flood3/800/450",
    views: 2341,
    featured: true
  },
  {
    id: 4,
    judul: "Sawit Petani Batang Hari Terancam Hama Ulat Api, Dinas Siapkan Bantuan",
    ringkasan: "Serangan hama ulat api dilaporkan melanda perkebunan kelapa sawit di tiga kecamatan, mengancam produktivitas panen petani.",
    isi: "<p>Dinas Perkebunan Kabupaten Batang Hari menyatakan siap memberikan bantuan pestisida dan pendampingan teknis kepada petani kelapa sawit yang lahannya terserang hama ulat api.</p><p>Serangan hama ini dilaporkan terjadi di Kecamatan Pemayung, Batin XXIV, dan sebagian Bajubang. Jika tidak segera ditangani, ulat api bisa melahap habis daun sawit dan mengganggu produksi Tandan Buah Segar (TBS).</p><p>Petani diminta segera melapor ke PPL setempat agar mendapat penanganan cepat. Dinas juga berencana menggelar pelatihan pengendalian hama terpadu bulan depan.</p>",
    kategori: "Pertanian",
    penulis: "Budiman",
    tanggal: "24 Mei 2026",
    img: "https://picsum.photos/seed/palm4/800/450",
    views: 756,
    featured: false
  },
  {
    id: 5,
    judul: "RSUD H. Hanafie Muara Bulian Tambah Satu Unit Ambulans Baru",
    ringkasan: "Penambahan ambulans ini diharapkan mempercepat respons layanan gawat darurat bagi warga di daerah terpencil Batang Hari.",
    isi: "<p>RSUD H. Hanafie Muara Bulian resmi menerima satu unit ambulans baru yang dilengkapi peralatan medis lengkap, Jumat (22/5/2026). Armada ambulans rumah sakit kini berjumlah empat unit.</p><p>Ini sangat membantu menjangkau pasien dari desa-desa terpencil yang jaraknya bisa 60-80 kilometer dari pusat kota. Ambulans baru dilengkapi peralatan resusitasi, monitor tanda vital portable, dan sistem GPS tracking.</p>",
    kategori: "Kesehatan",
    penulis: "Nurhasanah",
    tanggal: "23 Mei 2026",
    img: "https://picsum.photos/seed/hospital5/800/450",
    views: 634,
    featured: false
  },
  {
    id: 6,
    judul: "Turnamen Sepak Bola Antar Desa Maro Sebo Ulu Resmi Dibuka",
    ringkasan: "Sebanyak 16 tim dari berbagai desa di Kecamatan Maro Sebo Ulu berlaga dalam turnamen yang berlangsung selama dua pekan.",
    isi: "<p>Turnamen sepak bola antardesa Kecamatan Maro Sebo Ulu resmi dibuka pada Sabtu (24/5/2026) di Lapangan Desa Tenam. Sebanyak 16 tim bersaing memperebutkan piala bergilir Camat Maro Sebo Ulu.</p><p>Tim dari Desa Durian Luncuk menjadi salah satu unggulan tahun ini setelah meraih posisi runner-up pada edisi sebelumnya. Turnamen dijadwalkan berlangsung selama dua pekan dengan sistem gugur.</p>",
    kategori: "Olahraga",
    penulis: "Agus Pratama",
    tanggal: "25 Mei 2026",
    img: "https://picsum.photos/seed/football6/800/450",
    views: 891,
    featured: false
  },
  {
    id: 7,
    judul: "Pemkab Dorong UMKM Batang Hari Masuk Platform Digital Nasional",
    ringkasan: "Dinas Koperasi dan UKM menggelar pelatihan e-commerce untuk 200 pelaku usaha kecil agar bisa berjualan di Tokopedia dan Shopee.",
    isi: "<p>Dinas Koperasi dan UKM Kabupaten Batang Hari menggandeng dua platform e-commerce nasional untuk memberikan pelatihan kepada 200 pelaku UMKM lokal. Pelatihan berlangsung selama tiga hari di Gedung Serbaguna Muara Bulian.</p><p>Produk unggulan Batang Hari seperti kerajinan rotan, olahan ikan sungai, dan produk turunan karet menjadi fokus utama. Target 500 UMKM go digital akhir tahun ini.</p>",
    kategori: "Ekonomi",
    penulis: "Dewi Lestari",
    tanggal: "22 Mei 2026",
    img: "https://picsum.photos/seed/market7/800/450",
    views: 543,
    featured: false
  },
  {
    id: 8,
    judul: "SDN 45 Durian Luncuk Raih Juara 1 Lomba Cerdas Cermat Tingkat Kabupaten",
    ringkasan: "Tim siswa SDN 45 Durian Luncuk berhasil mengalahkan 23 sekolah lain dan membawa pulang piala kejuaraan dari Muara Bulian.",
    isi: "<p>Tim cerdas cermat SDN 45 Durian Luncuk, Kecamatan Maro Sebo Ulu, meraih juara pertama dalam Lomba Cerdas Cermat Tingkat Kabupaten Batang Hari yang berlangsung di GOR Muara Bulian, Jumat (22/5/2026).</p><p>Tim yang terdiri dari tiga siswa kelas VI ini berhasil mengungguli 23 sekolah dasar lain dari seluruh penjuru kabupaten. Ini bukti bahwa sekolah di pelosok desa pun mampu berprestasi setara sekolah di kota.</p>",
    kategori: "Pendidikan",
    penulis: "Rosmalina",
    tanggal: "23 Mei 2026",
    img: "https://picsum.photos/seed/school8/800/450",
    views: 1567,
    featured: false
  },
  {
    id: 9,
    judul: "Jalan Poros Desa Muara Tembesi Rusak Parah, Warga Minta Segera Diperbaiki",
    ringkasan: "Jalan sepanjang 4 km yang menghubungkan beberapa desa di Muara Tembesi berlubang dan licin di musim hujan.",
    isi: "<p>Warga di Kecamatan Muara Tembesi mengeluhkan kondisi jalan poros desa yang rusak parah sepanjang kurang lebih 4 kilometer. Jalan ini dipenuhi lubang besar dan kerap membahayakan pengendara.</p><p>Sudah bertahun-tahun kondisinya begini. Warga sudah lapor ke kelurahan dan kecamatan tapi belum ada tindakan. Anggota DPRD menyatakan akan memperjuangkan anggaran perbaikan dalam APBD Perubahan 2026.</p>",
    kategori: "Infrastruktur",
    penulis: "Harun Nasution",
    tanggal: "21 Mei 2026",
    img: "https://picsum.photos/seed/road9/800/450",
    views: 1893,
    featured: false
  },
  {
    id: 10,
    judul: "Festival Budaya Adat Bajubang Tampilkan Tari Sekapur Sirih dan Seloko Jambi",
    ringkasan: "Ratusan warga memadati lapangan Bajubang untuk menyaksikan pertunjukan seni budaya lokal yang digelar Pemkab Batang Hari.",
    isi: "<p>Festival Budaya Adat Kecamatan Bajubang yang digelar selama dua hari, Sabtu-Minggu (24-25/5/2026), berhasil menarik ratusan pengunjung. Acara ini menampilkan berbagai kesenian tradisional Jambi, mulai dari Tari Sekapur Sirih, Seloko Adat, hingga pertunjukan Randai.</p><p>Festival ini juga dimeriahkan bazar produk UMKM lokal, pameran foto sejarah Batang Hari, dan lomba kuliner tradisional. Panitia mencatat lebih dari 800 pengunjung hadir.</p>",
    kategori: "Budaya",
    penulis: "Zulkifli Rahman",
    tanggal: "25 Mei 2026",
    img: "https://picsum.photos/seed/culture10/800/450",
    views: 712,
    featured: false
  }
,{
    id: 11,
    judul: "Tren Investasi Kripto Merambah Warga Batang Hari, Bitcoin Kini Seharga Rp 1,3 Miliar",
    ringkasan: "Sejumlah warga dan pelaku UMKM di Kabupaten Batang Hari mulai melirik investasi aset kripto di tengah fluktuasi harga Bitcoin yang masih bertahan di level tinggi.",
    isi: "<p>Demam investasi aset kripto rupanya sudah merambah hingga ke Kabupaten Batang Hari, Provinsi Jambi. Sejumlah warga dan pelaku usaha mikro kecil menengah (UMKM) di Muara Bulian dan sekitarnya mengaku mulai mencoba peruntungan di pasar aset digital tersebut dalam beberapa bulan terakhir.</p><p>Berdasarkan data Coinmarketcap pada Rabu (27/5/2026), Bitcoin (BTC) — aset kripto terbesar di dunia — diperdagangkan di level USD 75.621 atau setara Rp 1,36 miliar per koin. Meski terkoreksi 1,95 persen dalam 24 jam terakhir, harga tersebut masih terbilang tinggi dibandingkan dua tahun lalu.</p><p>Salah seorang warga Muara Bulian yang enggan disebutkan namanya mengaku mulai berinvestasi kripto sejak awal 2026 dengan modal awal Rp 500.000 melalui aplikasi exchange lokal. Menurutnya, kripto menjadi alternatif investasi selain emas dan tabungan biasa. Saya mulai dari nominal kecil dulu, belajar sambil jalan. Untungnya memang ada, tapi risikonya juga nyata, ujarnya.</p><p>Pengamat ekonomi mengingatkan masyarakat agar berhati-hati dalam berinvestasi kripto. Volatilitas harga yang tinggi bisa menguntungkan sekaligus merugikan dalam waktu singkat. Pastikan hanya menginvestasikan dana yang memang siap untuk hilang, dan pilih platform yang sudah terdaftar di OJK, tegasnya.</p><p>Untuk pemula yang ingin mencoba, beberapa platform exchange kripto legal di Indonesia antara lain Pintu, Tokocrypto, dan Indodax. Ethereum sendiri saat ini berada di harga USD 2.065 atau sekitar Rp 36,5 juta per koin.</p>",
    kategori: "Ekonomi",
    penulis: "Redaksi WartaBatangHari",
    tanggal: "27 Mei 2026",
    img: "https://picsum.photos/seed/kripto11/800/450",
    views: 0,
    featured: false
  }
];

var KATEGORI = ["Semua","Infrastruktur","Ekonomi","Bencana","Pertanian","Kesehatan","Olahraga","Pendidikan","Budaya"];

function getArtikel(id){ return BERITA.find(function(b){ return b.id===parseInt(id); }); }
function getTerpopuler(n){ return BERITA.slice().sort(function(a,b){ return b.views-a.views; }).slice(0,n||5); }
function getFeatured(){ return BERITA.filter(function(b){ return b.featured; }); }
