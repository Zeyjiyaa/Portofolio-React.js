// ===== SEMUA KONTEN DIEDIT DI FILE INI =====
// Foto profil: taruh di public/foto.jpg
// Screenshot proyek: taruh di folder public/proyek/, lalu tulis path-nya di bawah

export const profile = {
  name: "Zey",
  role: "Lulusan Teknik Informatika, membuat chatbot WhatsApp dan sistem berbasis Google Apps Script",
  intro:
    "Saya mengerjakan chatbot WhatsApp dan sistem administrasi sederhana dengan Google Apps Script, Google Sheets, dan Fonnte.",
  photo: "/foto.jpg",
  about:
    "Lulusan S1 Teknik Informatika Universitas STEKOM. Pada masa magang di Kecamatan Tuntang, saya membuat chatbot WhatsApp dan sistem pengajuan cuti. Sebelum kuliah saya bersekolah di SMK N 2 Salatiga jurusan Teknik Kendaraan Ringan dan pernah bekerja sebagai mekanik dan operator.",
  // Tambah atau hapus baris sesuai kebutuhan
  details: [
    { label: "Nama lengkap", value: "Tegar Diyan Sandika" },
    { label: "Pendidikan", value: "S1 Teknik Informatika (lulus)" },
    { label: "Kampus", value: "Universitas STEKOM, Semarang" },
    { label: "Domisili", value: "Semarang, Jawa Tengah" },
    { label: "Email", value: "tegardian74@gmail.com" },
  ],
  contacts: [
    { label: "Email", href: "mailto:tegardian74@gmail.com", text: "tegardian74@gmail.com" },
    { label: "GitHub", href: "https://github.com/Zeyjiyaa", text: "github.com/Zeyjiyaa" },
  ],
};

export const experiences = [
  {
    role: "Kerja Praktek",
    org: "Kecamatan Tuntang",
    period: "April-Juni 2026",
    points: [
      "Membuat chatbot WhatsApp dengan Fonnte, Google Apps Script, dan Google Sheets.",
      "Membuat sistem pengajuan cuti dengan Google Forms, Google Sheets, dan Apps Script.",
    ],
  },
];

export const skills = {
  Otomasi: ["Google Apps Script", "Google Sheets", "Fonnte"],
  Web: ["JavaScript", "Java", "PHP" ,"HTML & CSS"],
};

export const projects = [
  {
    slug: "chatbot-kecamatan-tuntang",
    title: "Chatbot WhatsApp Kecamatan Tuntang",
    summary:
      "Chatbot WhatsApp gratis untuk membantu menjawab pertanyaan warga Kecamatan Tuntang. Pengguna mengetik menu, lalu memilih nomor layanan.",
    role: "Pengembang",
    period: "Mei 2026",
    tech: ["Google Apps Script", "Google Sheets", "Fonnte"],
    overview:
      "Chatbot ini dibuat untuk Kecamatan Tuntang, Kabupaten Semarang. Layanannya gratis, tidak seperti WhatsApp Business yang berbayar, dan membantu menjawab pertanyaan warga karena belum ada petugas yang khusus menanganinya.",
    how: "Pengguna mengirim pesan lewat WhatsApp. Pesan diterima melalui Fonnte dan diproses oleh Google Apps Script. Pengguna mengetik menu untuk melihat pilihan, lalu mengetik nomor pilihan, misalnya 1. Google Sheets digunakan sebagai tempat data.",
    features: [
      "Menu berbasis perintah: ketik menu, lalu pilih nomor",
      "Gratis, tanpa biaya seperti WhatsApp Business",
      "Membantu menjawab pertanyaan warga tanpa petugas khusus",
      "Berjalan di Google Apps Script dan Google Sheets",
    ],
    results: [],
    // Ilustrasi saja: sesuaikan dengan teks menu asli chatbot kamu
    chat: [
      { from: "user", text: "menu" },
      { from: "bot", text: "Selamat datang. Balas dengan nomor pilihan:\n1. Layanan surat\n2. Jam pelayanan" },
      { from: "user", text: "1" },
      { from: "bot", text: "Anda memilih menu 1." },
    ],
    screenshots: [
      { src: "/proyek/chatbot-kecamatan-tuntang/whatsapp.jpg", caption: "Percakapan chatbot di WhatsApp" },
      { src: "/proyek/chatbot-kecamatan-tuntang/database.jpg", caption: "Database" },
      { src: "/proyek/chatbot-kecamatan-tuntang/kode.jpg", caption: "Kode Google Apps Script" },
    ],
    links: { demo: "", repo: "" },
  },
  {
    slug: "sistem-persetujuan-cuti",
    title: "Sistem Persetujuan Cuti",
    summary:
      "Sistem pengajuan cuti dengan Google Forms, Google Sheets, dan Apps Script.",
    role: "Pengembang",
    period: "Juni 2026",
    tech: ["Google Forms", "Google Sheets", "Google Apps Script"],
    overview:
      "Sistem untuk mengajukan dan menyetujui cuti pegawai.",
    how: "Pemohon mengisi Google Form. Tautan persetujuan otomatis dikirim ke email atasan sesuai data pemohon. pemohon mendapat pemberitahuan ke email setelah ada keputusan.",
    features: [
      "Pengajuan lewat Google Forms",
      "Pengiriman ke email atasan sesuai data pemohon",
      "Pemberitahuan ke pemohon",
      "Ada rekap data persetujuan cuti",
    ],
    results: [],
    chat: null,
    screenshots: [
      { src: "/proyek/chatbot-kecamatan-tuntang/form-permintaan-pemberian-cuti/tampilan.jpg", caption: "Tampilan formulir pengajuan cuti" },
      { src: "/proyek/chatbot-kecamatan-tuntang/form-permintaan-pemberian-cuti/email-di-pimpinan.jpg", caption: "Email permohonan yang diterima atasan" },
      { src: "/proyek/chatbot-kecamatan-tuntang/form-permintaan-pemberian-cuti/kode.jpg", caption: "Kode Google Apps Script" },
    ],
    links: { demo: "", repo: "" },
  },
];