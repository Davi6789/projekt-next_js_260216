export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Keyboard",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=400&h=300&fit=crop",
    description: "Ergonomische kabellose Tastatur mit RGB‑Beleuchtung.",
    category: "Electronics",
  },
  {
    id: 2,
    name: "Premium Coffee Mug",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop",
    description: "Keramik‑Becher für 400ml, spülmaschinenfest.",
    category: "Home",
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
    description: "Atmungsaktive Laufschuhe mit Dämpfung.",
    category: "Sports",
  },
  {
    id: 4,
    name: "Notebook",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
    description: "Liniertes Notizbuch A5, 120 Seiten.",
    category: "Stationery",
  },
];
