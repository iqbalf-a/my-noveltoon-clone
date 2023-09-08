export default defineEventHandler((event) => {
  const data = [
    {
      id: 1,
      title: "Cinta Sejati",
      author: "Anna Johnson",
      comments: 25,
      likes: 120,
      imageUrl: "https://picsum.photos/id/204/24",
      synopsis:
        "Kisah cinta antara Sarah dan David, dua jiwa yang terikat oleh takdir. Meskipun rintangan datang, cinta mereka tetap kuat. Mereka menghadapi ujian-ujian kehidupan bersama-sama, dan kisah cinta mereka menginspirasi banyak orang.",
    },
    {
      id: 2,
      title: "Melodi Malam",
      author: "Michael Brown",
      comments: 30,
      likes: 98,
      imageUrl: "https://picsum.photos/id/202/24",
      synopsis:
        "Sebuah malam yang penuh dengan musik, bintang, dan kenangan yang tak terlupakan. Suara musik memenuhi udara, membawa perasaan ke dalam hati semua yang hadir. Malam itu, mereka merasakan keajaiban sejati.",
    },
    {
      id: 3,
      title: "Hujan Terakhir",
      author: "Emily White",
      comments: 15,
      likes: 75,
      imageUrl: "https://picsum.photos/id/201/24",
      synopsis:
        "Kisah seorang wanita yang mengenang kisah cinta yang hilang selama hujan yang terakhir kali mereka habiskan bersama. Hujan yang turun membawa kenangan manis tentang pertemuan mereka, tetesan-tetesan air yang menghapus luka di hatinya.",
    },
    {
      id: 4,
      title: "Petualangan di Pantai",
      author: "David Black",
      comments: 18,
      likes: 110,
      imageUrl: "https://picsum.photos/id/232/24",
      synopsis:
        "Liburan di pantai yang berubah menjadi petualangan tak terlupakan. Mereka menemukan harta karun yang hilang bertahun-tahun lamanya, tetapi juga menghadapi badai yang menakutkan.",
    },
    {
      id: 5,
      title: "Misteri Hutan",
      author: "Sophia Williams",
      comments: 12,
      likes: 88,
      imageUrl: "https://picsum.photos/id/233/24",
      synopsis:
        "Sebuah ekspedisi ke dalam hutan yang menemukan misteri kuno yang tersembunyi. Mereka menemukan reruntuhan kota kuno yang terkubur di tengah hutan lebat, dan misteri apa yang mungkin terjadi di sana.",
    },
    {
      id: 6,
      title: "Rahasia Perpustakaan",
      author: "John Doe",
      comments: 22,
      likes: 150,
      imageUrl: "https://picsum.photos/id/232/24",
      synopsis:
        "Seorang pengunjung perpustakaan menemukan buku tua yang mengubah hidupnya. Buku itu berisi rahasia-rahasia luar biasa yang tidak pernah dia bayangkan sebelumnya.",
    },
    {
      id: 7,
      title: "Pergi ke Luar Angkasa",
      author: "Laura Davis",
      comments: 28,
      likes: 135,
      imageUrl: "https://picsum.photos/id/235/24",
      synopsis:
        "Petualangan luar angkasa yang membawa seorang astronot ke galaksi yang belum pernah terjamah sebelumnya. Dia menyaksikan keindahan luar angkasa yang memukau dan menemukan kehidupan di tempat yang tak terduga.",
    },
    {
      id: 8,
      title: "Kota yang Hilang",
      author: "Alan Reynolds",
      comments: 19,
      likes: 92,
      imageUrl: "https://picsum.photos/id/236/24",
      synopsis:
        "Kisah tentang persahabatan yang tak tergantikan antara dua teman selama bertahun-tahun. Mereka mengalami semua perjalanan hidup bersama-sama, berbagi tawa dan tangis, dan menjadi dukungan yang tak tergantikan satu sama lain.",
    },
    {
      id: 9,
      title: "Kisah Sahabat",
      author: "Ella Robinson",
      comments: 24,
      likes: 128,
      imageUrl: "https://picsum.photos/id/237/24",
      synopsis:
        "Kisah tentang persahabatan yang tak tergantikan antara dua teman selama bertahun-tahun. Mereka mengalami semua perjalanan hidup bersama-sama, berbagi tawa dan tangis, dan menjadi dukungan yang tak tergantikan satu sama lain.",
    },
    {
      id: 10,
      title: "Malam Terakhir di Paris",
      author: "Olivia White",
      comments: 20,
      likes: 105,
      imageUrl: "https://picsum.photos/id/238/24",
      synopsis:
        "Sebuah malam terakhir di Paris yang penuh dengan keajaiban, seni, dan cinta. Mereka menjelajahi jalan-jalan kota yang indah, menikmati kuliner klasik, dan merasakan pesona kota cahaya yang tak terlupakan.",
    },
  ];

  return data;
});
