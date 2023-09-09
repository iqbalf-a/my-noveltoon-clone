function generateRandom(min = 0, max = 500) {
  // find diff
  let difference = max - min;

  // generate random number
  let rand = Math.random();

  // multiply with difference
  rand = Math.floor(rand * difference);

  // add with min value
  rand = rand + min;

  return rand;
}

export default defineEventHandler((event) => {
  const data = [
    {
      id: 1,
      name: "Petualangan Kerajaan yang Hilang",
      category: "Fantasi",
      imageUrl: "https://picsum.photos/id/" + generateRandom() + "/120/160",
      author: "John Doe",
      rating: 4.5,
      synopsis:
        "Ikuti kisah epik dalam pencarian untuk merebut kembali kerajaan yang hilang, Eldoria. Ikuti para pahlawan berani kami saat mereka menjelajahi tanah berbahaya, menghadapi makhluk mitos, dan mengungkap misteri kuno. Akankah mereka berhasil dalam misi mereka, ataukah Eldoria akan tetap hilang selamanya?",
      likes: 1200,
      reads: 85000,
      episodes: 20,
      tags: "petualangan | fantasi | mitos",
    },
    {
      id: 2,
      name: "Gema Kekal",
      category: "Fiksi Ilmiah",
      imageUrl: "https://picsum.photos/id/" + generateRandom() + "/120/160",
      author: "Jane Smith",
      rating: 4.2,
      synopsis:
        "Di masa depan yang jauh, di mana manipulasi waktu adalah kenyataan, ikuti kisah Max, seorang penjelajah waktu dalam misi untuk mencegah peristiwa bencana. Saat Max menghadapi paradoks temporal dan konsekuensi tak terduga, nasib alam semesta bergantung pada keseimbangan.",
      likes: 800,
      reads: 72000,
      episodes: 18,
      tags: "fiksi ilmiah | petualangan | waktu",
    },
    {
      id: 3,
      name: "Hatiku Mekar",
      category: "Romantis",
      imageUrl: "https://picsum.photos/id/104/120/160",
      author: "Emily Johnson",
      rating: 4.8,
      synopsis:
        "Cinta mekar di kota kecil Willowbrook. Temui Emma dan Daniel, dua jiwa dari dunia yang berbeda yang dibawa bersama oleh takdir. Kisah cinta mereka penuh tawa, air mata, dan kekuatan cinta yang abadi.",
      likes: 1500,
      reads: 98000,
      episodes: 25,
      tags: "romantis | cinta | kota kecil",
    },
    {
      id: 4,
      name: "Hutan yang Dihuni Kekuatan Gaib",
      category: "Fantasi",
      imageUrl: "https://picsum.photos/id/106/120/160",
      author: "Samuel Adams",
      rating: 3.9,
      synopsis:
        "Berani menghadapi perjalanan ke Hutan yang Dihuni Kekuatan Gaib, tempat di mana sihir berkuasa dan makhluk mitos berkeliaran bebas. Ikuti perjalanan Lily, seorang penyihir muda, saat dia menemukan kekuatan tersembunyi dan melawan kekuatan gelap yang mengancam keseimbangan alam.",
      likes: 950,
      reads: 62000,
      episodes: 22,
      tags: "fantasi | sihir | makhluk mitos",
    },
    {
      id: 5,
      name: "Belokan Tak Terduga",
      category: "Drama",
      imageUrl: "https://picsum.photos/id/127/120/160",
      author: "Sophia Williams",
      rating: 4.1,
      synopsis:
        "Pertemuan kebetulan mengubah hidup dua orang asing, Sarah dan James. Saat mereka menavigasi kompleksitas takdir, cinta, dan nasib, kisah mereka yang terjalin membawa pada belokan tak terduga dan peristiwa mengejutkan.",
      likes: 1100,
      reads: 75000,
      episodes: 19,
      tags: "drama | cinta | nasib",
    },
    {
      id: 6,
      name: "Mansion Hollow yang Angker",
      category: "Horor",
      imageUrl: "https://picsum.photos/id/108/120/160",
      author: "David Black",
      rating: 3.7,
      synopsis:
        "Mansion Hollow terkutuk, dan rahasia gelapnya menunggu untuk diungkapkan. Ikuti sekelompok penyelidik paranormal saat mereka menghabiskan malam di rumah berhantu. Apa yang mereka temukan akan membuat mereka ketakutan melebihi imajinasi.",
      likes: 750,
      reads: 58000,
      episodes: 17,
      tags: "horor | hantu | paranormal",
    },
    {
      id: 7,
      name: "Pencarian Relik Suci",
      category: "Petualangan",
      imageUrl: "https://picsum.photos/id/109/120/160",
      author: "Olivia White",
      rating: 4.6,
      synopsis:
        "Bergabunglah dengan penjelajah tak kenal takut, Sarah, dalam pencariannya untuk menemukan Relik Suci yang telah lama hilang. Dengan bahaya di setiap tikungan dan penjahat penjarah harta saingan di jejaknya, petualangan Sarah membawanya ke ujung bumi dalam pencarian hadiah utama.",
      likes: 1800,
      reads: 110000,
      episodes: 30,
      tags: "petualangan | penjelajahan | harta",
    },
    {
      id: 8,
      name: "Terbahak-Bahak",
      category: "Komedi",
      imageUrl: "https://picsum.photos/id/110/120/160",
      author: "Michael Brown",
      rating: 4.0,
      synopsis:
        "Siap-siap untuk melihat rollercoaster tawa yang menghibur, saat Anda mengikuti kesialan Alex dan kelompok teman-temannya yang unik. Dari lelucon yang membuat terbahak-bahak hingga momen yang menyentuh hati, novel komedi ini memiliki semuanya.",
      likes: 1600,
      reads: 90000,
      episodes: 24,
      tags: "petualangan | penjelajahan | harta",
    },
    {
      id: 9,
      name: "Misteri Gulungan Kuno",
      category: "Misteri",
      imageUrl: "https://picsum.photos/id/111/120/160",
      author: "Ella Robinson",
      rating: 4.3,
      synopsis:
        "Peceburkan rahasia misterius yang tersembunyi dalam gulungan-gulungan kuno. Bergabunglah dengan arkeolog Alex saat dia menguraikan pesan-pesan kriptik, melawan kekuatan gelap, dan memulai petualangan mendebarkan di seluruh dunia.",
      likes: 1400,
      reads: 78000,
      episodes: 21,
      tags: "misteri | arkeologi | petualangan",
    },
    {
      id: 10,
      name: "Cinta di Kota",
      category: "Romantis",
      imageUrl: "https://picsum.photos/id/112/120/160",
      author: "Sophia Williams",
      rating: 4.5,
      synopsis:
        "Kisah cinta mekar di pusat kota yang sibuk. Ikuti kisah Asmara dan Ryan, dua orang yang bertemu dalam situasi yang tak terduga. Meskipun terpisah oleh perbedaan dan rintangan, cinta mereka bersemangat dan menggetarkan.",
      likes: 1300,
      reads: 71000,
      episodes: 23,
      tags: "romantis | cinta | kota besar",
    },
    {
      id: 11,
      name: "Petualangan Ruang Angkasa",
      category: "Fiksi Ilmiah",
      imageUrl: "https://picsum.photos/id/113/120/160",
      author: "Alan Reynolds",
      rating: 4.7,
      synopsis:
        "Jelajahi galaksi dalam petualangan luar angkasa epik. Ikuti kru kapal luar angkasa dalam misi yang mengharuskan mereka menghadapi alien misterius, asteroid mematikan, dan konflik antarbintang. Apakah mereka akan berhasil mencapai tujuan mereka?",
      likes: 1900,
      reads: 88000,
      episodes: 28,
      tags: "fiksi ilmiah | petualangan | ruang angkasa",
    },
    {
      id: 12,
      name: "Kisah Perang Besar",
      category: "Sejarah",
      imageUrl: "https://picsum.photos/id/114/120/160",
      author: "Helen Turner",
      rating: 4.4,
      synopsis:
        "Kisah dramatis tentang perang besar yang mengguncang dunia. Dari medan perang hingga kabinet perundingan, ikuti kisah para pahlawan, pemimpin, dan warga sipil yang terlibat dalam peristiwa penting ini yang mengubah sejarah.",
      likes: 1700,
      reads: 92000,
      episodes: 26,
      tags: "sejarah | perang | dramatis",
    },
    {
      id: 13,
      name: "Pulau Misteri",
      category: "Petualangan",
      imageUrl: "https://picsum.photos/id/115/120/160",
      author: "Laura Davis",
      rating: 4.1,
      synopsis:
        "Petualangan yang mendebarkan di pulau misterius yang tersembunyi dari dunia luar. Ikuti eksplorasi Rachel dan Tim saat mereka mengungkap misteri yang menyelimuti pulau ini, termasuk harta terpendam dan makhluk aneh.",
      likes: 1200,
      reads: 86000,
      episodes: 24,
      tags: "petualangan | pulau | misteri",
    },
    {
      id: 14,
      name: "Rahasia Laboratorium",
      category: "Thriller",
      imageUrl: "https://picsum.photos/id/116/120/160",
      author: "Mark Johnson",
      rating: 4.6,
      synopsis:
        "Mengungkapkan rahasia mengerikan di laboratorium rahasia. Saksikan ketegangan yang memuncak saat protagonis berusaha untuk menghentikan rencana jahat yang dapat mengancam seluruh dunia. Waktu berjalan cepat dan nyawa berada di ujung pisau.",
      likes: 1500,
      reads: 79000,
      episodes: 22,
      tags: "thriller | rahasia | kejahatan",
    },
    {
      id: 15,
      name: "Pelayaran Legendaris",
      category: "Petualangan",
      imageUrl: "https://picsum.photos/id/117/120/160",
      author: "Sophie Anderson",
      rating: 4.3,
      synopsis:
        "Pelayaran epik melintasi lautan yang belum dijelajahi. Bersama dengan kapten dan kru kapal, saksikan penjelajahan mereka dalam mencari daratan baru dan harta karun yang legendaris. Tantangan besar menanti mereka di setiap sudut samudra.",
      likes: 1400,
      reads: 75000,
      episodes: 20,
      tags: "petualangan | pelayaran | legendaris",
    },
  ];

  return data;
});
