export default defineEventHandler((event) => {
  const data = [
    {
      id: 1,
      title: "Pencarian Harta Karun Misterius",
      author: "Amanda Walker",
      release_date: "2022-08-20",
      rating: 4.5,
      synopsis:
        "Seorang petualang berani memulai pencarian hartanya yang penuh misteri. Dalam perjalanan ini, dia akan menghadapi bahaya, teka-teki, dan rintangan yang menantang.",
      total_episode: 12,
      episode: [
        {
          id: 1,
          episode_title: "Permulaan Petualangan",
          paragraph:
            "Di episode pertama, petualang kita memulai pencarian harta karun misteriusnya dengan petunjuk pertama yang ditemukan di sebuah peta kuno.",
        },
        {
          id: 2,
          episode_title: "Jejak Harta Karun",
          paragraph:
            "Episode kedua mengikuti jejak petualang kita saat dia mengunjungi lokasi-lokasi bersejarah yang terkait dengan harta karun legendaris.",
        },
        {
          id: 3,
          episode_title: "Tantangan Hutan Belantara",
          paragraph:
            "Petualangan berlanjut ke episode ketiga, di mana dia harus menavigasi hutan belantara yang penuh dengan bahaya dan misteri.",
        },
        {
          id: 4,
          episode_title: "Kemunculan Musuh",
          paragraph:
            "Di episode keempat, musuh utama muncul, berusaha menghalangi petualang dalam mencapai tujuannya.",
        },
        {
          id: 5,
          episode_title: "Pertarungan Melawan Waktu",
          paragraph:
            "Episode kelima adalah pertarungan melawan waktu saat petualang harus memecahkan teka-teki kompleks sebelum saingan lainnya.",
        },
        {
          id: 6,
          episode_title: "Misteri Pulau Tersembunyi",
          paragraph:
            "Pada episode ini, petualang tiba di pulau tersembunyi yang berisi rahasia penting tentang harta karun.",
        },
        {
          id: 7,
          episode_title: "Bahaya Lautan Dalam",
          paragraph:
            "Petualangan beralih ke laut dalam yang berbahaya, di mana petualang harus menghadapi monster laut dan teka-teki bawah air.",
        },
        {
          id: 8,
          episode_title: "Penemuan Terbesar",
          paragraph:
            "Episode kedelapan menyajikan penemuan terbesar petualang, mendekat pada harta karun yang dicari.",
        },
        {
          id: 9,
          episode_title: "Konflik Antara Teman",
          paragraph:
            "Di episode ini, konflik timbul antara petualang dan teman setimnya, mengancam kesuksesan misi mereka.",
        },
        {
          id: 10,
          episode_title: "Pertempuran Akhir",
          paragraph:
            "Episode terakhir adalah pertempuran akhir untuk mencapai harta karun dan mengungkap rahasia di baliknya.",
        },
        {
          id: 11,
          episode_title: "Penyelesaian Rahasia",
          paragraph:
            "Episode terakhir adalah penyelesaian dari semua rahasia yang telah diungkapkan selama perjalanan detektif di kota terlarang.",
        },
        {
          id: 12,
          episode_title: "Kebangkitan Kejahatan",
          paragraph:
            "Di episode ini, kejahatan kembali muncul dan detektif harus memutuskan apakah akan melanjutkan perjuangan melawan kejahatan.",
        },
      ],
    },
    {
      id: 2,
      title: "Rahasia Kota Terlarang",
      author: "Jane Smith",
      release_date: "2022-09-20",
      rating: 4.6,
      synopsis:
        "Seorang detektif yang ulung memasuki kota terlarang yang penuh dengan misteri dan kejahatan. Dia harus mengungkap rahasia kota itu sambil menghindari bahaya yang mengintainya.",
      total_episode: 14,
      episode: [
        {
          id: 1,
          episode_title: "Kedatangan di Kota Terlarang",
          paragraph:
            "Pada episode pertama, detektif memasuki kota terlarang dengan harapan menemukan petunjuk tentang hilangnya seorang teman.",
        },
        {
          id: 2,
          episode_title: "Rahasia Gelap",
          paragraph:
            "Di episode kedua, dia mulai menggali rahasia gelap yang mengitari kota terlarang. Dia menemukan konspirasi besar yang melibatkan pejabat kota.",
        },
        {
          id: 3,
          episode_title: "Perburuan Berbahaya",
          paragraph:
            "Episode ketiga membawa detektif ke dalam perburuan berbahaya saat dia mengungkap kebenaran yang mengancam nyawanya.",
        },
        {
          id: 4,
          episode_title: "Pertarungan Terakhir",
          paragraph:
            "Di episode terakhir, detektif harus menghadapi musuh utama yang bertanggung jawab atas semua kejahatan di kota terlarang. Kepahlawanan dan keberanian akhirnya diuji hingga batas.",
        },
        {
          id: 5,
          episode_title: "Konflik Kriminal",
          paragraph:
            "Episode kelima mengungkap konflik antara kelompok kriminal yang beroperasi di kota terlarang, dan detektif yang mencoba menghentikan mereka.",
        },
        {
          id: 6,
          episode_title: "Rahasia Labirin Bawah Tanah",
          paragraph:
            "Detektif menjelajahi labirin bawah tanah kota terlarang, mengungkap rahasia yang tersembunyi di sana.",
        },
        {
          id: 7,
          episode_title: "Dibalik Tirai Kabut",
          paragraph:
            "Pada episode ini, detektif harus mengungkap misteri di balik tirai kabut yang mencegah mereka keluar dari kota terlarang.",
        },
        {
          id: 8,
          episode_title: "Pertarungan di Atas Gedung",
          paragraph:
            "Detektif terlibat dalam pertarungan yang menegangkan di atas gedung pencakar langit kota terlarang.",
        },
        {
          id: 9,
          episode_title: "Pergolakan Kekuasaan",
          paragraph:
            "Episode ini menggambarkan pergolakan kekuasaan di kota terlarang, dengan detektif berada di tengah-tengahnya.",
        },
        {
          id: 10,
          episode_title: "Pertemuan Penentu",
          paragraph:
            "Detektif bertemu dengan tokoh kunci yang memiliki jawaban atas semua misteri yang mengelilingi kota terlarang.",
        },
        {
          id: 11,
          episode_title: "Penyelesaian Rahasia",
          paragraph:
            "Episode terakhir adalah penyelesaian dari semua rahasia yang telah diungkapkan selama perjalanan detektif di kota terlarang.",
        },
        {
          id: 12,
          episode_title: "Kebangkitan Kejahatan",
          paragraph:
            "Di episode ini, kejahatan kembali muncul dan detektif harus memutuskan apakah akan melanjutkan perjuangan melawan kejahatan.",
        },
        {
          id: 13,
          episode_title: "Pertarungan Terakhir",
          paragraph:
            "Pertarungan akhir detektif melawan kejahatan mencapai puncaknya, menghadirkan ketegangan dan aksi yang tak terduga.",
        },
        {
          id: 14,
          episode_title: "Akhir yang Mengharukan",
          paragraph:
            "Episode terakhir mengeksplorasi akhir cerita dengan momen yang mengharukan dan memuaskan.",
        },
      ],
    },
    {
      id: 3,
      title: "Kisah Cinta Abadi",
      author: "Alice Johnson",
      release_date: "2022-07-10",
      rating: 4.9,
      synopsis:
        "Sebuah kisah cinta yang mengharukan tentang dua jiwa yang terhubung selama berabad-abad. Mereka melewati berbagai kehidupan untuk bersatu kembali.",
      total_episode: 10,
      episode: [
        {
          id: 1,
          episode_title: "Pertemuan Pertama",
          paragraph:
            "Pada episode pertama, dua jiwa gemilang pertama kali bertemu di Roma Kuno. Mereka merasa saling kenal sejak awal.",
        },
        {
          id: 2,
          episode_title: "Perpisahan yang Menyakitkan",
          paragraph:
            "Di episode kedua, kedua jiwa tersebut dipisahkan oleh peristiwa tragis. Mereka merindukan satu sama lain dalam kehidupan berikutnya.",
        },
        {
          id: 3,
          episode_title: "Reinkarnasi",
          paragraph:
            "Episode ketiga mengikuti reinkarnasi mereka ke dalam kehidupan yang berbeda. Mereka mencoba untuk kembali bersatu meskipun dalam wujud yang berbeda.",
        },
        {
          id: 4,
          episode_title: "Cinta yang Abadi",
          paragraph:
            "Di episode keempat, mereka akhirnya menemukan cara untuk bersatu kembali di tengah-tengah kesulitan. Kisah cinta mereka menjadi abadi.",
        },
        {
          id: 5,
          episode_title: "Ujian Akhir",
          paragraph:
            "Episode kelima adalah ujian terakhir bagi kisah cinta mereka. Mereka harus mengatasi rintangan besar untuk tetap bersama selamanya.",
        },
        {
          id: 6,
          episode_title: "Kesatuan Akhir",
          paragraph:
            "Di episode terakhir, jiwa-jiwa tersebut akhirnya bersatu dalam kehidupan abadi yang bahagia. Mereka hidup bahagia selamanya.",
        },
        {
          id: 7,
          episode_title: "Kisah Cinta di Abad Pertengahan",
          paragraph:
            "Petualangan cinta melintasi waktu dan ruang, membawa mereka ke Abad Pertengahan dalam pencarian kebahagiaan bersama.",
        },
        {
          id: 8,
          episode_title: "Kehidupan dalam Kekaisaran",
          paragraph:
            "Episode ini menjelajahi kehidupan mereka di bawah kekuasaan seorang kaisar yang kuat, dengan cinta sebagai pelindung mereka.",
        },
        {
          id: 9,
          episode_title: "Perjalanan Lintas Benua",
          paragraph:
            "Detik-detik terpisah membawa mereka ke berbagai benua dalam upaya mencari satu sama lain.",
        },
        {
          id: 10,
          episode_title: "Akhir yang Bahagia",
          paragraph:
            "Episode terakhir mengeksplorasi akhir cerita dengan pertemuan akhir yang membahagiakan dan menyentuh hati.",
        },
      ],
    },
    {
      id: 4,
      title: "Misteri Pergi Malam",
      author: "David Wilson",
      release_date: "2022-06-25",
      rating: 4.3,
      synopsis:
        "Seorang detektif dengan naluri tajam harus memecahkan serangkaian misteri yang terjadi selama pergi malam di kota. Setiap malam membawa petualangan yang berbeda.",
      total_episode: 12,
      episode: [
        {
          id: 1,
          episode_title: "Malam Pertama",
          paragraph:
            "Pada episode pertama, detektif memulai petualangannya dengan menyelidiki kasus misterius yang terjadi selama malam pertama di kota.",
        },
        {
          id: 2,
          episode_title: "Pergi ke Kafe Misterius",
          paragraph:
            "Episode kedua membawa detektif ke kafe misterius yang menjadi pusat peristiwa aneh setiap malam.",
        },
        {
          id: 3,
          episode_title: "Keajaiban di Taman Malam",
          paragraph:
            "Di episode ketiga, detektif menemukan taman malam yang memiliki keajaiban sendiri yang terungkap hanya pada malam hari.",
        },
        {
          id: 4,
          episode_title: "Pertarungan dengan Hantu",
          paragraph:
            "Episode keempat membawa detektif ke pertarungan melawan hantu yang menakutkan di rumah berhantu kota.",
        },
        {
          id: 5,
          episode_title: "Teka-teki Penyihir Malam",
          paragraph:
            "Detektif harus memecahkan teka-teki penyihir misterius yang bertanggung jawab atas peristiwa aneh di kota setiap malam.",
        },
        {
          id: 6,
          episode_title: "Kembalinya Penjahat Lama",
          paragraph:
            "Episode keenam membawa kembalinya seorang penjahat lama yang menjadi musuh detektif dalam petualangan kali ini.",
        },
        {
          id: 7,
          episode_title: "Pertarungan di Gudang Terbengkalai",
          paragraph:
            "Detektif terlibat dalam pertarungan sengit di gudang terbengkalai yang menjadi tempat rahasia para penjahat.",
        },
        {
          id: 8,
          episode_title: "Pergi ke Dunia Gelap",
          paragraph:
            "Episode ini membawa detektif ke dalam dunia gelap yang tersembunyi di balik kota.",
        },
        {
          id: 9,
          episode_title: "Pertarungan di Atas Bangunan Tertinggi",
          paragraph:
            "Detektif terlibat dalam pertarungan epik di atas bangunan tertinggi kota dengan penjahat utama.",
        },
        {
          id: 10,
          episode_title: "Penyelesaian Misteri Malam",
          paragraph:
            "Episode terakhir adalah penyelesaian dari semua misteri yang terjadi selama pergi malam di kota.",
        },
        {
          id: 11,
          episode_title: "Pergi Malam Terakhir",
          paragraph:
            "Detektif menghadapi pergi malam terakhir, mengungkap rahasia terbesar dan menghadapi bahaya terakhir.",
        },
        {
          id: 12,
          episode_title: "Akhir yang Mengejutkan",
          paragraph:
            "Episode terakhir mengeksplorasi akhir yang tidak terduga dari petualangan detektif di kota pada malam-malam yang misterius.",
        },
      ],
    },
    {
      id: 5,
      title: "Petualangan Ruang Angkasa",
      author: "Michael Turner",
      release_date: "2022-10-15",
      rating: 4.7,
      synopsis:
        "Sebuah petualangan epik di galaksi yang jauh. Seorang kru kapal ruang angkasa berusaha untuk menyelamatkan galaksi dari ancaman yang tak terbayangkan.",
      total_episode: 11,
      episode: [
        {
          id: 1,
          episode_title: "Kedatangan di Planet Asing",
          paragraph:
            "Pada episode pertama, kru kapal ruang angkasa tiba di planet asing yang mengancam kehidupan di seluruh galaksi.",
        },
        {
          id: 2,
          episode_title: "Pertemuan dengan Alien",
          paragraph:
            "Di episode kedua, mereka memiliki pertemuan pertama dengan alien yang memiliki informasi kunci untuk menyelamatkan galaksi.",
        },
        {
          id: 3,
          episode_title: "Pencarian Artefak Misterius",
          paragraph:
            "Episode ketiga adalah pencarian artefak misterius yang dapat mengubah segalanya. Kru harus bersaing dengan faksi-faksi jahat untuk menemukannya.",
        },
        {
          id: 4,
          episode_title: "Konspirasi Antariksa",
          paragraph:
            "Pada episode keempat, kru menemukan konspirasi besar di antara bangsa-bangsa antariksa yang mengancam perdamaian galaksi.",
        },
        {
          id: 5,
          episode_title: "Pertempuran di Asteroid",
          paragraph:
            "Episode kelima adalah pertempuran sengit di asteroid yang membawa kru dekat pada kehancuran.",
        },
        {
          id: 6,
          episode_title: "Penemuan Planet Tersembunyi",
          paragraph:
            "Kru menemukan planet tersembunyi yang memiliki teknologi luar biasa, namun, mereka harus menjaga rahasianya.",
        },
        {
          id: 7,
          episode_title: "Misi Menyelamatkan Tawanan",
          paragraph:
            "Pada episode ini, kru melakukan misi berbahaya untuk menyelamatkan tawanan yang memiliki informasi vital.",
        },
        {
          id: 8,
          episode_title: "Pertempuran di Luar Angkasa",
          paragraph:
            "Episode ini adalah pertempuran epik di luar angkasa yang menentukan nasib galaksi.",
        },
        {
          id: 9,
          episode_title: "Pencarian Terakhir",
          paragraph:
            "Kru harus melakukan pencarian terakhir untuk mengumpulkan semua elemen yang dibutuhkan untuk menghentikan ancaman galaksi.",
        },
        {
          id: 10,
          episode_title: "Pertempuran Akhir",
          paragraph:
            "Episode terakhir adalah pertempuran akhir yang menentukan kelangsungan hidup galaksi dan nasib kru kapal ruang angkasa.",
        },
        {
          id: 11,
          episode_title: "Kemenangan dan Pengorbanan",
          paragraph:
            "Episode terakhir mengeksplorasi kemenangan dan pengorbanan yang diperlukan untuk menyelamatkan galaksi dalam petualangan yang epik ini.",
        },
      ],
    },
  ];

  return data;
});
