export interface DummyData {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
}

export interface DummyDataOrderDetail {
  id: number;
  amount: number;
  price_at_order: number;
  order_id: number;
  item_id: number;
  item: DummyData;
}

export interface DummyDataOrder {
  id: number;
  address: string;
  total_price: number;
  status: "process" | "success" | "cancel" | "ship";
  payment_method: "transfer" | "cod";
  payment_status: boolean;
  transfer_proof_url?: string;
  user_id: number;
  created_at: string;
  order_detail: DummyDataOrderDetail;
}

export const DataOrder: DummyDataOrder[] = [
  {
    id: 1,
    address: "Jl. Merdeka No. 10, Jakarta Pusat",
    total_price: 25500000,
    status: "success",
    payment_method: "transfer",
    payment_status: true,
    transfer_proof_url: "https://example.com/proofs/proof_1.jpg",
    user_id: 101,
    created_at: "2025-08-20T14:30:00Z",
    order_detail: {
      id: 1,
      amount: 1,
      price_at_order: 25500000,
      order_id: 1,
      item_id: 10,
      item: {
        id: 10,
        name: "Laptop Pro Max 16 inch",
        description: "Laptop bertenaga tinggi untuk para profesional.",
        price: 25500000,
        stock: 15,
      },
    },
  },
  {
    id: 2,
    address: "Jl. Sudirman Kav. 52-53, Bandung",
    total_price: 750000,
    status: "ship",
    payment_method: "cod",
    payment_status: false,
    user_id: 102,
    created_at: "2025-08-21T10:05:00Z",
    order_detail: {
      id: 2,
      amount: 2,
      price_at_order: 375000,
      order_id: 2,
      item_id: 15,
      item: {
        id: 15,
        name: "Mechanical Keyboard K8",
        description: "Keyboard mekanikal dengan RGB backlit.",
        price: 375000,
        stock: 50,
      },
    },
  },
  {
    id: 3,
    address: "Jl. Gajah Mada No. 1, Surabaya",
    total_price: 1200000,
    status: "process",
    payment_method: "transfer",
    payment_status: false,
    user_id: 103,
    created_at: "2025-08-22T09:00:00Z",
    order_detail: {
      id: 3,
      amount: 1,
      price_at_order: 1200000,
      order_id: 3,
      item_id: 21,
      item: {
        id: 21,
        name: "Gaming Headset H5",
        description: "Headset dengan surround sound 7.1.",
        price: 1200000,
        stock: 30,
      },
    },
  },
  {
    id: 4,
    address: "Jl. Pahlawan No. 25, Semarang",
    total_price: 250000,
    status: "cancel",
    payment_method: "transfer",
    payment_status: false,
    user_id: 101,
    created_at: "2025-08-19T11:45:00Z",
    order_detail: {
      id: 4,
      amount: 1,
      price_at_order: 250000,
      order_id: 4,
      item_id: 33,
      item: {
        id: 33,
        name: "Wireless Mouse G-Series",
        description: "Mouse nirkabel ergonomis.",
        price: 250000,
        stock: 120,
      },
    },
  },
  {
    id: 5,
    address: "Jl. Diponegoro No. 8, Yogyakarta",
    total_price: 6000000,
    status: "success",
    payment_method: "cod",
    payment_status: true,
    user_id: 104,
    created_at: "2025-08-18T16:20:00Z",
    order_detail: {
      id: 5,
      amount: 1,
      price_at_order: 6000000,
      order_id: 5,
      item_id: 45,
      item: {
        id: 45,
        name: "4K Monitor 27 inch",
        description: "Monitor resolusi tinggi untuk desain grafis.",
        price: 6000000,
        stock: 22,
      },
    },
  },
  {
    id: 6,
    address: "Jl. Asia Afrika No. 15, Bandung",
    total_price: 400000,
    status: "ship",
    payment_method: "transfer",
    payment_status: true,
    transfer_proof_url: "https://example.com/proofs/proof_6.jpg",
    user_id: 102,
    created_at: "2025-08-22T11:10:00Z",
    order_detail: {
      id: 6,
      amount: 2,
      price_at_order: 200000,
      order_id: 6,
      item_id: 50,
      item: {
        id: 50,
        name: "USB-C Hub 8-in-1",
        description: "Multi-port adapter untuk konektivitas lengkap.",
        price: 200000,
        stock: 80,
      },
    },
  },
];

export const Data: DummyData[] = [
  {
    id: 1,
    name: "Wortel",
    description: "Wortel segar, kaya vitamin A, cocok untuk jus dan masakan.",
    price: 10_000,
    stock: 20,
  },
  {
    id: 2,
    name: "Bayam",
    description: "Bayam hijau, sumber zat besi yang baik, cocok untuk ditumis.",
    price: 8_000,
    stock: 35,
  },
  {
    id: 3,
    name: "Tomat",
    description: "Tomat merah, penuh likopen, sangat baik untuk salad.",
    price: 12_000,
    stock: 50,
  },
  {
    id: 4,
    name: "Kentang",
    description:
      "Kentang, sumber karbohidrat, ideal untuk digoreng atau direbus.",
    price: 9_500,
    stock: 40,
  },
  {
    id: 5,
    name: "Brokoli",
    description: "Brokoli, kaya serat dan vitamin C, bagus untuk kesehatan.",
    price: 15_000,
    stock: 25,
  },
  {
    id: 6,
    name: "Kubis",
    description: "Kubis, dapat diolah menjadi salad atau sop.",
    price: 7_000,
    stock: 30,
  },
  {
    id: 7,
    name: "Mentimun",
    description: "Mentimun segar, kandungan air tinggi, cocok untuk lalapan.",
    price: 6_000,
    stock: 60,
  },
  {
    id: 8,
    name: "Sawi",
    description: "Sawi hijau, sering digunakan dalam masakan tumisan.",
    price: 7_500,
    stock: 45,
  },
  {
    id: 9,
    name: "Terong",
    description: "Terong ungu, cocok untuk digoreng atau dibuat balado.",
    price: 8_500,
    stock: 30,
  },
  {
    id: 10,
    name: "Bawang Merah",
    description: "Bawang merah, bumbu dasar masakan, memberi aroma khas.",
    price: 18_000,
    stock: 50,
  },
  {
    id: 11,
    name: "Bawang Putih",
    description: "Bawang putih, antioksidan alami, bumbu wajib setiap masakan.",
    price: 20_000,
    stock: 55,
  },
  {
    id: 12,
    name: "Cabai Merah",
    description: "Cabai merah, untuk rasa pedas, cocok untuk sambal.",
    price: 25_000,
    stock: 20,
  },
  {
    id: 13,
    name: "Kangkung",
    description: "Kangkung, sayuran daun yang cepat layu, sering ditumis.",
    price: 6_500,
    stock: 40,
  },
  {
    id: 14,
    name: "Jagung",
    description: "Jagung manis, bisa direbus atau dibakar.",
    price: 9_000,
    stock: 30,
  },
  {
    id: 15,
    name: "Labu Siam",
    description: "Labu siam, cocok untuk sayur lodeh.",
    price: 5_000,
    stock: 25,
  },
  {
    id: 16,
    name: "Kacang Panjang",
    description: "Kacang panjang, bisa dimasak tumis atau urap.",
    price: 7_000,
    stock: 35,
  },
  {
    id: 17,
    name: "Daun Bawang",
    description: "Daun bawang, pelengkap masakan berkuah.",
    price: 11_000,
    stock: 28,
  },
  {
    id: 18,
    name: "Seledri",
    description: "Seledri, penambah aroma sup dan masakan.",
    price: 10_500,
    stock: 22,
  },
  {
    id: 19,
    name: "Kembang Kol",
    description: "Kembang kol, mirip brokoli, enak ditumis atau direbus.",
    price: 14_000,
    stock: 18,
  },
  {
    id: 20,
    name: "Paprika Merah",
    description: "Paprika merah, rasa manis, cocok untuk tumisan.",
    price: 22_000,
    stock: 15,
  },
];
