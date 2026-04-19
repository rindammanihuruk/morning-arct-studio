import paket200 from "@/assets/paket-200.jpg";
import paket300 from "@/assets/paket-300.jpg";
import paket400 from "@/assets/paket-400.jpg";
import paket500 from "@/assets/paket-500.jpg";

export type Package = {
  slug: string;
  num: string;
  type: string;
  price: string;
  tagline: string;
  shortDesc: string;
  longDesc: string;
  image: string;
  features: string[];
  highlights: string[];
  specs: { label: string; value: string }[];
  materials: { num: string; title: string; desc: string }[];
};

export const packages: Package[] = [
  {
    slug: "200jt",
    num: "01",
    type: "Type 36",
    price: "Rp 200 Juta",
    tagline: "Sederhana & Fungsional",
    shortDesc:
      "Rumah mungil yang efisien — 2 kamar tidur, ruang tamu lapang, dan dapur fungsional. Cocok untuk pasangan atau keluarga kecil.",
    longDesc:
      "Setiap meter dirancang teliti agar tidak ada ruang yang terbuang. Denah dibuat lurus dan terbuka antara ruang tamu, dapur, dan area makan agar terasa lebih lapang dari ukuran sebenarnya. Pencahayaan alami menjadi prioritas — bukaan jendela ditempatkan strategis untuk mengurangi kebutuhan listrik di siang hari.",
    image: paket200,
    features: ["2 Kamar Tidur", "1 Kamar Mandi", "Carport Terbuka", "Luas Bangunan ±36m²"],
    highlights: [
      "Denah terbuka ruang tamu–dapur",
      "Ventilasi silang di setiap kamar",
      "Teras kecil dengan kanopi",
      "Material standar dengan finishing rapi",
    ],
    specs: [
      { label: "Luas Bangunan", value: "± 36 m²" },
      { label: "Luas Tanah Min.", value: "60 m²" },
      { label: "Jumlah Lantai", value: "1 Lantai" },
      { label: "Kamar Tidur", value: "2" },
      { label: "Kamar Mandi", value: "1" },
      { label: "Carport", value: "1 Mobil" },
      { label: "Estimasi Pengerjaan", value: "4–5 Bulan" },
      { label: "Gaya", value: "Minimalis Modern" },
    ],
    materials: [
      { num: "01", title: "Dinding", desc: "Bata merah plester aci, cat eksterior weatherproof" },
      { num: "02", title: "Lantai", desc: "Keramik 40×40 cm seri standar" },
      { num: "03", title: "Atap", desc: "Genteng metal pasir, rangka baja ringan" },
      { num: "04", title: "Pintu & Jendela", desc: "Kusen aluminium, pintu utama panel kayu" },
    ],
  },
  {
    slug: "300jt",
    num: "02",
    type: "Type 45",
    price: "Rp 300 Juta",
    tagline: "Lebih Lega & Modern",
    shortDesc:
      "Tambahan ruang dan finishing yang lebih rapi. 2–3 kamar tidur, teras lebih nyaman, dan area servis terpisah.",
    longDesc:
      "Penambahan luas bangunan memungkinkan ruang tamu, ruang makan, dan dapur dipisahkan dengan elegan tanpa kehilangan rasa terbuka. Area servis (cuci-jemur) ditempatkan terpisah untuk menjaga kenyamanan ruang utama. Material naik kelas dengan finishing yang lebih halus.",
    image: paket300,
    features: ["2–3 Kamar Tidur", "2 Kamar Mandi", "Teras Depan", "Luas Bangunan ±45m²"],
    highlights: [
      "Ruang tamu, makan, dan dapur terpisah rapi",
      "Area servis terpisah dari ruang utama",
      "Teras depan lebih luas",
      "Finishing dinding cat premium",
    ],
    specs: [
      { label: "Luas Bangunan", value: "± 45 m²" },
      { label: "Luas Tanah Min.", value: "84 m²" },
      { label: "Jumlah Lantai", value: "1 Lantai" },
      { label: "Kamar Tidur", value: "2–3" },
      { label: "Kamar Mandi", value: "2" },
      { label: "Carport", value: "1 Mobil" },
      { label: "Estimasi Pengerjaan", value: "5–6 Bulan" },
      { label: "Gaya", value: "Minimalis Modern" },
    ],
    materials: [
      { num: "01", title: "Dinding", desc: "Bata merah plester aci halus, cat premium weatherproof" },
      { num: "02", title: "Lantai", desc: "Granit 60×60 cm polished" },
      { num: "03", title: "Atap", desc: "Genteng metal pasir tebal, plafon gypsum" },
      { num: "04", title: "Pintu & Jendela", desc: "Kusen aluminium powder coated, kaca tempered" },
    ],
  },
  {
    slug: "400jt",
    num: "03",
    type: "Type 60",
    price: "Rp 400 Juta",
    tagline: "Nyaman dengan Carport",
    shortDesc:
      "Ruang lebih luas, 3 kamar tidur, desain minimalis elegan dengan aksen kayu. Cocok untuk keluarga kecil-menengah.",
    longDesc:
      "Komposisi massa dan aksen kayu vertikal memberi karakter pada fasad. Tata ruang dirancang untuk privasi keluarga: zona publik (tamu, makan, dapur) dipisah dari zona privat (kamar tidur). Carport tertutup melindungi kendaraan dari panas dan hujan.",
    image: paket400,
    features: ["3 Kamar Tidur", "2 Kamar Mandi", "Carport Tertutup", "Luas Bangunan ±60m²"],
    highlights: [
      "Aksen kayu vertikal pada fasad",
      "Zonasi publik–privat yang jelas",
      "Carport tertutup",
      "Plafon ekspos parsial pada area tamu",
    ],
    specs: [
      { label: "Luas Bangunan", value: "± 60 m²" },
      { label: "Luas Tanah Min.", value: "100 m²" },
      { label: "Jumlah Lantai", value: "1 Lantai" },
      { label: "Kamar Tidur", value: "3" },
      { label: "Kamar Mandi", value: "2" },
      { label: "Carport", value: "1 Mobil (Tertutup)" },
      { label: "Estimasi Pengerjaan", value: "6–7 Bulan" },
      { label: "Gaya", value: "Minimalis Elegan" },
    ],
    materials: [
      { num: "01", title: "Dinding", desc: "Bata merah, plester aci halus, aksen kayu vertikal" },
      { num: "02", title: "Lantai", desc: "Granit 60×60 cm polished, parket pada kamar utama" },
      { num: "03", title: "Atap", desc: "Dak beton kombinasi atap miring, plafon gypsum drop ceiling" },
      { num: "04", title: "Pintu & Jendela", desc: "Kusen aluminium hitam, kaca tempered, pintu engineered wood" },
    ],
  },
  {
    slug: "500jt",
    num: "04",
    type: "Type 70–80",
    price: "Rp 500 Juta",
    tagline: "Mewah & Premium",
    shortDesc:
      "Desain elegan, material berkualitas, taman/teras luas. 3+ kamar tidur dengan nuansa premium meskipun satu lantai.",
    longDesc:
      "Paket premium dengan komposisi material campuran — batu alam, kayu solid, dan kaca lebar — menciptakan kehadiran yang tenang namun berkarakter. Teras luas berfungsi sebagai ruang transisi antara hunian dan taman. Cocok untuk keluarga yang mengutamakan kualitas hidup dan estetika jangka panjang.",
    image: paket500,
    features: ["3+ Kamar Tidur", "3 Kamar Mandi", "Taman & Teras Luas", "Material Premium"],
    highlights: [
      "Fasad batu alam dan kayu solid",
      "Bukaan kaca lebar ke arah taman",
      "Teras luas sebagai ruang transisi",
      "Pencahayaan arsitektural malam hari",
    ],
    specs: [
      { label: "Luas Bangunan", value: "± 70–80 m²" },
      { label: "Luas Tanah Min.", value: "150 m²" },
      { label: "Jumlah Lantai", value: "1 Lantai" },
      { label: "Kamar Tidur", value: "3+" },
      { label: "Kamar Mandi", value: "3" },
      { label: "Carport", value: "1–2 Mobil (Tertutup)" },
      { label: "Estimasi Pengerjaan", value: "7–9 Bulan" },
      { label: "Gaya", value: "Minimalis Premium" },
    ],
    materials: [
      { num: "01", title: "Dinding", desc: "Batu alam ekspos, plester aci halus, cat premium" },
      { num: "02", title: "Lantai", desc: "Marmer atau granit slab besar, parket solid pada kamar utama" },
      { num: "03", title: "Atap", desc: "Dak beton penuh dengan waterproofing premium, plafon kayu" },
      { num: "04", title: "Pintu & Jendela", desc: "Kusen aluminium minimalis, kaca tempered double glazing, pintu kayu solid" },
    ],
  },
];

export const getPackageBySlug = (slug?: string) => packages.find((p) => p.slug === slug);
