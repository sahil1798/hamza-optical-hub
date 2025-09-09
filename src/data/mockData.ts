export interface Product {
  id: string;
  name: string;
  category: 'frames' | 'sunglasses' | 'lenses' | 'accessories';
  price: number;
  moq: number;
  image: string;
  description: string;
  model: string;
  material?: string;
  color?: string;
}

export interface LedgerEntry {
  id: string;
  invoiceNumber: string;
  date: string;
  amount: number;
  status: 'paid' | 'pending' | 'overdue';
  items: { productId: string; quantity: number; price: number }[];
  downloadUrl?: string;
}

export const products: Product[] = [
  // Frames
  {
    id: 'F001',
    name: 'Classic Metal Frame',
    model: 'CM-2024',
    category: 'frames',
    price: 45,
    moq: 12,
    image: '/placeholder.svg',
    description: 'Premium metal frames with adjustable nose pads',
    material: 'Titanium Alloy',
    color: 'Black/Gold'
  },
  {
    id: 'F002',
    name: 'Acetate Square Frame',
    model: 'AS-1205',
    category: 'frames',
    price: 32,
    moq: 24,
    image: '/placeholder.svg',
    description: 'Lightweight acetate frames, modern design',
    material: 'Acetate',
    color: 'Tortoise/Clear'
  },
  {
    id: 'F003',
    name: 'Rimless Titanium Frame',
    model: 'RT-3401',
    category: 'frames',
    price: 78,
    moq: 6,
    image: '/placeholder.svg',
    description: 'Ultra-light rimless titanium frames',
    material: 'Pure Titanium',
    color: 'Silver'
  },
  {
    id: 'F004',
    name: 'Vintage Round Frame',
    model: 'VR-8820',
    category: 'frames',
    price: 28,
    moq: 36,
    image: '/placeholder.svg',
    description: 'Retro round frames with spring hinges',
    material: 'Metal Alloy',
    color: 'Rose Gold'
  },

  // Sunglasses
  {
    id: 'S001',
    name: 'Aviator Sunglasses',
    model: 'AV-5501',
    category: 'sunglasses',
    price: 55,
    moq: 12,
    image: '/placeholder.svg',
    description: 'Classic aviator design with UV400 protection',
    material: 'Metal',
    color: 'Gold/Brown'
  },
  {
    id: 'S002',
    name: 'Wayfarer Sunglasses',
    model: 'WF-7722',
    category: 'sunglasses',
    price: 42,
    moq: 18,
    image: '/placeholder.svg',
    description: 'Iconic wayfarer style with polarized lenses',
    material: 'Acetate',
    color: 'Black/Grey'
  },
  {
    id: 'S003',
    name: 'Sport Sunglasses',
    model: 'SP-9901',
    category: 'sunglasses',
    price: 68,
    moq: 12,
    image: '/placeholder.svg',
    description: 'Performance sunglasses with wrap-around design',
    material: 'TR90',
    color: 'Matte Black'
  },
  {
    id: 'S004',
    name: 'Cat Eye Sunglasses',
    model: 'CE-4455',
    category: 'sunglasses',
    price: 38,
    moq: 24,
    image: '/placeholder.svg',
    description: 'Feminine cat-eye design with gradient lenses',
    material: 'Acetate',
    color: 'Tortoise/Brown'
  },

  // Lenses
  {
    id: 'L001',
    name: 'Single Vision Lens',
    model: 'SV-CR39',
    category: 'lenses',
    price: 15,
    moq: 50,
    image: '/placeholder.svg',
    description: 'CR-39 single vision lenses with anti-reflective coating',
    material: 'CR-39'
  },
  {
    id: 'L002',
    name: 'Progressive Lens',
    model: 'PG-1.67',
    category: 'lenses',
    price: 85,
    moq: 20,
    image: '/placeholder.svg',
    description: 'High-index progressive lenses, ultra-thin',
    material: '1.67 High Index'
  },
  {
    id: 'L003',
    name: 'Photochromic Lens',
    model: 'PC-1.61',
    category: 'lenses',
    price: 125,
    moq: 12,
    image: '/placeholder.svg',
    description: 'Transition lenses that adapt to light conditions',
    material: '1.61 Mid Index'
  },
  {
    id: 'L004',
    name: 'Blue Light Filter Lens',
    model: 'BL-CR39',
    category: 'lenses',
    price: 25,
    moq: 48,
    image: '/placeholder.svg',
    description: 'Blue light blocking lenses for digital protection',
    material: 'CR-39 + Blue Filter'
  },

  // Accessories
  {
    id: 'A001',
    name: 'Microfiber Cleaning Cloth',
    model: 'MC-15x15',
    category: 'accessories',
    price: 2.5,
    moq: 100,
    image: '/placeholder.svg',
    description: 'Premium microfiber cleaning cloths',
    color: 'Assorted'
  },
  {
    id: 'A002',
    name: 'Lens Cleaning Solution',
    model: 'LS-250ML',
    category: 'accessories',
    price: 8,
    moq: 24,
    image: '/placeholder.svg',
    description: 'Professional lens cleaning solution, 250ml',
  },
  {
    id: 'A003',
    name: 'Optical Screwdriver Set',
    model: 'OS-7PC',
    category: 'accessories',
    price: 12,
    moq: 12,
    image: '/placeholder.svg',
    description: '7-piece precision screwdriver set for optical repairs',
  },
  {
    id: 'A004',
    name: 'Glasses Case',
    model: 'GC-HARD',
    category: 'accessories',
    price: 6,
    moq: 50,
    image: '/placeholder.svg',
    description: 'Hard protective glasses case with cleaning cloth',
    color: 'Black/Brown'
  }
];

export const ledgerEntries: LedgerEntry[] = [
  {
    id: 'INV-2024-001',
    invoiceNumber: 'HO-2024-0001',
    date: '2024-01-15',
    amount: 2340,
    status: 'paid',
    items: [
      { productId: 'F001', quantity: 24, price: 45 },
      { productId: 'S001', quantity: 12, price: 55 },
      { productId: 'L001', quantity: 50, price: 15 }
    ],
    downloadUrl: '#'
  },
  {
    id: 'INV-2024-002',
    invoiceNumber: 'HO-2024-0002',
    date: '2024-01-28',
    amount: 1580,
    status: 'paid',
    items: [
      { productId: 'F002', quantity: 36, price: 32 },
      { productId: 'A001', quantity: 200, price: 2.5 }
    ],
    downloadUrl: '#'
  },
  {
    id: 'INV-2024-003',
    invoiceNumber: 'HO-2024-0003',
    date: '2024-02-10',
    amount: 3250,
    status: 'pending',
    items: [
      { productId: 'L002', quantity: 20, price: 85 },
      { productId: 'F003', quantity: 12, price: 78 },
      { productId: 'S003', quantity: 12, price: 68 }
    ],
    downloadUrl: '#'
  },
  {
    id: 'INV-2024-004',
    invoiceNumber: 'HO-2024-0004',
    date: '2024-02-22',
    amount: 890,
    status: 'overdue',
    items: [
      { productId: 'S002', quantity: 18, price: 42 },
      { productId: 'A002', quantity: 24, price: 8 }
    ],
    downloadUrl: '#'
  },
  {
    id: 'INV-2024-005',
    invoiceNumber: 'HO-2024-0005',
    date: '2024-03-05',
    amount: 4680,
    status: 'paid',
    items: [
      { productId: 'L003', quantity: 24, price: 125 },
      { productId: 'F001', quantity: 36, price: 45 }
    ],
    downloadUrl: '#'
  }
];

export const categoryFilters = [
  { value: 'all', label: 'All Products' },
  { value: 'frames', label: 'Frames' },
  { value: 'sunglasses', label: 'Sunglasses' },
  { value: 'lenses', label: 'Lenses' },
  { value: 'accessories', label: 'Accessories' }
];