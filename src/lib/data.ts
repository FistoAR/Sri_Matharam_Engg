import { Product, Category } from '@/types';

export interface MedicalProduct extends Product {
  price?: string;
  moq?: string;
  materialDetails: string;
  availableSizes?: string;
  relatedProductSlugs?: string[];
  tradeInfo?: {
    moq?: string;
    paymentTerms?: string;
    supplyAbility?: string;
    deliveryTime?: string;
    market?: string;
    warranty?: string;
    brand?: string;
  };
  detailedSpec?: Record<string, string>;
  highlights?: string[];
  faqs?: Array<{ question: string; answer: string }>;
  regionalNotice?: string;
}

export const COMPANY_INFO = {
  name: 'Sri Mathurams Medical Engineering',
  legalName: 'Sri Mathurams Medical Engineering Pvt. Ltd.',
  tagline: 'Engineering Healthcare. Delivering Excellence Since 1997.',
  description: 'Premium Hospital Furniture & Medical Equipment Manufacturer trusted by hospitals, clinics, and healthcare institutions across Tamil Nadu.',
  url: 'https://srimathuramsmedical.com',
  email: 'info@srimathuramsmedical.com',
  salesEmail: 'sales@srimathuramsmedical.com',
  phone: '+91 98422 12345',
  address: {
    street: 'Plot No. 85, Industrial Estate, Peelamedu',
    city: 'Coimbatore',
    state: 'Tamil Nadu',
    postalCode: '641004',
    country: 'India',
  },
  serviceArea: 'Tamil Nadu Only',
  social: {
    linkedin: 'https://linkedin.com/company/sri-mathurams-medical',
    twitter: 'https://twitter.com/srimathuramsmed',
  },
  established: 1997,
};

export const CATEGORIES: Category[] = [
  {
    id: 'hospital-beds',
    slug: 'hospital-beds',
    name: 'Hospital Beds',
    description: 'ICU Beds, Electric ICU Beds, Semi-Fowler & Fowler beds designed for patient comfort & safety.',
    icon: 'Bed',
  },
  {
    id: 'stretchers',
    slug: 'stretchers',
    name: 'Stretchers',
    description: 'Emergency patient transfer stretchers, hydraulic recovery trolleys & folding stretchers.',
    icon: 'Activity',
  },
  {
    id: 'wheelchairs',
    slug: 'wheelchairs',
    name: 'Wheelchairs',
    description: 'Heavy-duty chrome-plated & powder-coated folding wheelchairs for patient mobility.',
    icon: 'Accessibility',
  },
  {
    id: 'medical-trolleys',
    slug: 'medical-trolleys',
    name: 'Medical Trolleys',
    description: 'Crash carts, dressing trolleys, medicine distribution carts & instrument trolleys.',
    icon: 'ShoppingBag',
  },
  {
    id: 'donor-chairs',
    slug: 'donor-chairs',
    name: 'Donor Chairs',
    description: 'Ergonomic blood donor recliners with motorized tilt and armrest support.',
    icon: 'HeartPulse',
  },
  {
    id: 'surgical-sinks',
    slug: 'surgical-sinks',
    name: 'Surgical Sinks',
    description: 'Hands-free sensor operated & knee-touch stainless steel OT scrub station sinks.',
    icon: 'Sparkles',
  },
  {
    id: 'iv-stands',
    slug: 'iv-stands',
    name: 'IV Stands',
    description: 'Stainless steel heavy-base height adjustable IV poles with 4-hook tops.',
    icon: 'PlusSquare',
  },
  {
    id: 'hospital-furniture',
    slug: 'hospital-furniture',
    name: 'Hospital Furniture',
    description: 'Bedside lockers, overbed tables, examination couches, stools & visitor seating.',
    icon: 'Armchair',
  },
];

export const PRODUCTS: MedicalProduct[] = [
  {
    "id": "prod-1",
    "slug": "ot-surgical-scrub-sink",
    "name": "OT Surgical Scrub Sink",
    "tagline": "High quality medical OT Surgical Scrub Sink designed for clinical & hospital use.",
    "category": "Surgical Sinks",
    "description": "Premium hospital-grade OT Surgical Scrub Sink engineered for durability and patient care.",
    "fullDescription": "Sri Mathurams OT Surgical Scrub Sink is manufactured with high grade steel, ergonomic design, and anti-bacterial coating.",
    "image": "/images/Product Assets/SurgicalSink/OT-Surgical-Scrub-Sink.webp",
    "gallery": [
      "/images/Product Assets/SurgicalSink/OT-Surgical-Scrub-Sink.webp"
    ],
    "materialDetails": "High-Grade ERW Steel with Anti-Bacterial Epoxy Powder Coating.",
    "availableSizes": "Standard Hospital Grade Specifications",
    "specifications": [
      {
        "label": "Material",
        "value": "Heavy Duty Steel / ABS"
      },
      {
        "label": "Finish",
        "value": "Anti-Corrosive Powder Coating"
      },
      {
        "label": "Quality Standard",
        "value": "ISO 9001 Certified"
      }
    ],
    "features": [
      "Heavy-duty durable construction",
      "Easy to sanitize anti-bacterial finish",
      "Smooth movement castors"
    ],
    "applications": [
      "Hospitals",
      "Clinics",
      "Nursing Homes"
    ],
    "featured": true
  },
  {
    "id": "prod-2",
    "slug": "blood-donor-chair",
    "name": "Blood Donor Chair",
    "tagline": "High quality medical Blood Donor Chair designed for clinical & hospital use.",
    "category": "Donor Chairs",
    "description": "Premium hospital-grade Blood Donor Chair engineered for durability and patient care.",
    "fullDescription": "Sri Mathurams Blood Donor Chair is manufactured with high grade steel, ergonomic design, and anti-bacterial coating.",
    "image": "/images/Product Assets/DonerChair/Blood-Donor-Chair.webp",
    "gallery": [
      "/images/Product Assets/DonerChair/Blood-Donor-Chair.webp"
    ],
    "materialDetails": "High-Grade ERW Steel with Anti-Bacterial Epoxy Powder Coating.",
    "availableSizes": "Standard Hospital Grade Specifications",
    "specifications": [
      {
        "label": "Material",
        "value": "Heavy Duty Steel / ABS"
      },
      {
        "label": "Finish",
        "value": "Anti-Corrosive Powder Coating"
      },
      {
        "label": "Quality Standard",
        "value": "ISO 9001 Certified"
      }
    ],
    "features": [
      "Heavy-duty durable construction",
      "Easy to sanitize anti-bacterial finish",
      "Smooth movement castors"
    ],
    "applications": [
      "Hospitals",
      "Clinics",
      "Nursing Homes"
    ],
    "featured": true
  },
  {
    "id": "prod-3",
    "slug": "iv-stand",
    "name": "IV Stand",
    "tagline": "High quality medical IV Stand designed for clinical & hospital use.",
    "category": "IV Stands",
    "description": "Premium hospital-grade IV Stand engineered for durability and patient care.",
    "fullDescription": "Sri Mathurams IV Stand is manufactured with high grade steel, ergonomic design, and anti-bacterial coating.",
    "image": "/images/Product Assets/IVStands/-IV-Stand.webp",
    "gallery": [
      "/images/Product Assets/IVStands/-IV-Stand.webp"
    ],
    "materialDetails": "High-Grade ERW Steel with Anti-Bacterial Epoxy Powder Coating.",
    "availableSizes": "Standard Hospital Grade Specifications",
    "specifications": [
      {
        "label": "Material",
        "value": "Heavy Duty Steel / ABS"
      },
      {
        "label": "Finish",
        "value": "Anti-Corrosive Powder Coating"
      },
      {
        "label": "Quality Standard",
        "value": "ISO 9001 Certified"
      }
    ],
    "features": [
      "Heavy-duty durable construction",
      "Easy to sanitize anti-bacterial finish",
      "Smooth movement castors"
    ],
    "applications": [
      "Hospitals",
      "Clinics",
      "Nursing Homes"
    ],
    "featured": true
  },
  {
    "id": "prod-4",
    "slug": "foldable-stretcher",
    "name": "Foldable Stretcher",
    "tagline": "High quality medical Foldable Stretcher designed for clinical & hospital use.",
    "category": "Stretchers",
    "description": "Premium hospital-grade Foldable Stretcher engineered for durability and patient care.",
    "fullDescription": "Sri Mathurams Foldable Stretcher is manufactured with high grade steel, ergonomic design, and anti-bacterial coating.",
    "image": "/images/Product Assets/Stretchers/Foldable-Stretcher.webp",
    "gallery": [
      "/images/Product Assets/Stretchers/Foldable-Stretcher.webp"
    ],
    "materialDetails": "High-Grade ERW Steel with Anti-Bacterial Epoxy Powder Coating.",
    "availableSizes": "Standard Hospital Grade Specifications",
    "specifications": [
      {
        "label": "Material",
        "value": "Heavy Duty Steel / ABS"
      },
      {
        "label": "Finish",
        "value": "Anti-Corrosive Powder Coating"
      },
      {
        "label": "Quality Standard",
        "value": "ISO 9001 Certified"
      }
    ],
    "features": [
      "Heavy-duty durable construction",
      "Easy to sanitize anti-bacterial finish",
      "Smooth movement castors"
    ],
    "applications": [
      "Hospitals",
      "Clinics",
      "Nursing Homes"
    ],
    "featured": true
  },
  {
    "id": "prod-5",
    "slug": "hi-lo-stretcher",
    "name": "Hi Lo Stretcher",
    "tagline": "High quality medical Hi Lo Stretcher designed for clinical & hospital use.",
    "category": "Stretchers",
    "description": "Premium hospital-grade Hi Lo Stretcher engineered for durability and patient care.",
    "fullDescription": "Sri Mathurams Hi Lo Stretcher is manufactured with high grade steel, ergonomic design, and anti-bacterial coating.",
    "image": "/images/Product Assets/Stretchers/Hi-Lo-Stretcher.webp",
    "gallery": [
      "/images/Product Assets/Stretchers/Hi-Lo-Stretcher.webp"
    ],
    "materialDetails": "High-Grade ERW Steel with Anti-Bacterial Epoxy Powder Coating.",
    "availableSizes": "Standard Hospital Grade Specifications",
    "specifications": [
      {
        "label": "Material",
        "value": "Heavy Duty Steel / ABS"
      },
      {
        "label": "Finish",
        "value": "Anti-Corrosive Powder Coating"
      },
      {
        "label": "Quality Standard",
        "value": "ISO 9001 Certified"
      }
    ],
    "features": [
      "Heavy-duty durable construction",
      "Easy to sanitize anti-bacterial finish",
      "Smooth movement castors"
    ],
    "applications": [
      "Hospitals",
      "Clinics",
      "Nursing Homes"
    ],
    "featured": true
  },
  {
    "id": "prod-6",
    "slug": "plain-stretcher",
    "name": "Plain Stretcher",
    "tagline": "High quality medical Plain Stretcher designed for clinical & hospital use.",
    "category": "Stretchers",
    "description": "Premium hospital-grade Plain Stretcher engineered for durability and patient care.",
    "fullDescription": "Sri Mathurams Plain Stretcher is manufactured with high grade steel, ergonomic design, and anti-bacterial coating.",
    "image": "/images/Product Assets/Stretchers/Plain-Stretcher.webp",
    "gallery": [
      "/images/Product Assets/Stretchers/Plain-Stretcher.webp"
    ],
    "materialDetails": "High-Grade ERW Steel with Anti-Bacterial Epoxy Powder Coating.",
    "availableSizes": "Standard Hospital Grade Specifications",
    "specifications": [
      {
        "label": "Material",
        "value": "Heavy Duty Steel / ABS"
      },
      {
        "label": "Finish",
        "value": "Anti-Corrosive Powder Coating"
      },
      {
        "label": "Quality Standard",
        "value": "ISO 9001 Certified"
      }
    ],
    "features": [
      "Heavy-duty durable construction",
      "Easy to sanitize anti-bacterial finish",
      "Smooth movement castors"
    ],
    "applications": [
      "Hospitals",
      "Clinics",
      "Nursing Homes"
    ],
    "featured": true
  },
  {
    "id": "prod-7",
    "slug": "ss-portable-stretcher",
    "name": "SS Portable Stretcher",
    "tagline": "High quality medical SS Portable Stretcher designed for clinical & hospital use.",
    "category": "Stretchers",
    "description": "Premium hospital-grade SS Portable Stretcher engineered for durability and patient care.",
    "fullDescription": "Sri Mathurams SS Portable Stretcher is manufactured with high grade steel, ergonomic design, and anti-bacterial coating.",
    "image": "/images/Product Assets/Stretchers/SS-Portable-Stretcher.webp",
    "gallery": [
      "/images/Product Assets/Stretchers/SS-Portable-Stretcher.webp"
    ],
    "materialDetails": "High-Grade ERW Steel with Anti-Bacterial Epoxy Powder Coating.",
    "availableSizes": "Standard Hospital Grade Specifications",
    "specifications": [
      {
        "label": "Material",
        "value": "Heavy Duty Steel / ABS"
      },
      {
        "label": "Finish",
        "value": "Anti-Corrosive Powder Coating"
      },
      {
        "label": "Quality Standard",
        "value": "ISO 9001 Certified"
      }
    ],
    "features": [
      "Heavy-duty durable construction",
      "Easy to sanitize anti-bacterial finish",
      "Smooth movement castors"
    ],
    "applications": [
      "Hospitals",
      "Clinics",
      "Nursing Homes"
    ],
    "featured": true
  },
  {
    "id": "prod-8",
    "slug": "ecg-trolley",
    "name": "ECG Trolley",
    "tagline": "High quality medical ECG Trolley designed for clinical & hospital use.",
    "category": "Medical Trolleys",
    "description": "Premium hospital-grade ECG Trolley engineered for durability and patient care.",
    "fullDescription": "Sri Mathurams ECG Trolley is manufactured with high grade steel, ergonomic design, and anti-bacterial coating.",
    "image": "/images/Product Assets/ECG Trolley/ECG-Trolley.webp",
    "gallery": [
      "/images/Product Assets/ECG Trolley/ECG-Trolley.webp"
    ],
    "materialDetails": "High-Grade ERW Steel with Anti-Bacterial Epoxy Powder Coating.",
    "availableSizes": "Standard Hospital Grade Specifications",
    "specifications": [
      {
        "label": "Material",
        "value": "Heavy Duty Steel / ABS"
      },
      {
        "label": "Finish",
        "value": "Anti-Corrosive Powder Coating"
      },
      {
        "label": "Quality Standard",
        "value": "ISO 9001 Certified"
      }
    ],
    "features": [
      "Heavy-duty durable construction",
      "Easy to sanitize anti-bacterial finish",
      "Smooth movement castors"
    ],
    "applications": [
      "Hospitals",
      "Clinics",
      "Nursing Homes"
    ],
    "featured": true
  },
  {
    "id": "prod-9",
    "slug": "hospital-mayos-trolley",
    "name": "Hospital Mayos Trolley",
    "tagline": "High quality medical Hospital Mayos Trolley designed for clinical & hospital use.",
    "category": "Medical Trolleys",
    "description": "Premium hospital-grade Hospital Mayos Trolley engineered for durability and patient care.",
    "fullDescription": "Sri Mathurams Hospital Mayos Trolley is manufactured with high grade steel, ergonomic design, and anti-bacterial coating.",
    "image": "/images/Product Assets/ECG Trolley/Hospital-Mayos-Trolley.webp",
    "gallery": [
      "/images/Product Assets/ECG Trolley/Hospital-Mayos-Trolley.webp"
    ],
    "materialDetails": "High-Grade ERW Steel with Anti-Bacterial Epoxy Powder Coating.",
    "availableSizes": "Standard Hospital Grade Specifications",
    "specifications": [
      {
        "label": "Material",
        "value": "Heavy Duty Steel / ABS"
      },
      {
        "label": "Finish",
        "value": "Anti-Corrosive Powder Coating"
      },
      {
        "label": "Quality Standard",
        "value": "ISO 9001 Certified"
      }
    ],
    "features": [
      "Heavy-duty durable construction",
      "Easy to sanitize anti-bacterial finish",
      "Smooth movement castors"
    ],
    "applications": [
      "Hospitals",
      "Clinics",
      "Nursing Homes"
    ],
    "featured": false
  },
  {
    "id": "prod-10",
    "slug": "laparoscopy-trolley",
    "name": "Laparoscopy Trolley",
    "tagline": "High quality medical Laparoscopy Trolley designed for clinical & hospital use.",
    "category": "Medical Trolleys",
    "description": "Premium hospital-grade Laparoscopy Trolley engineered for durability and patient care.",
    "fullDescription": "Sri Mathurams Laparoscopy Trolley is manufactured with high grade steel, ergonomic design, and anti-bacterial coating.",
    "image": "/images/Product Assets/ECG Trolley/Laparoscopy-Trolley.webp",
    "gallery": [
      "/images/Product Assets/ECG Trolley/Laparoscopy-Trolley.webp"
    ],
    "materialDetails": "High-Grade ERW Steel with Anti-Bacterial Epoxy Powder Coating.",
    "availableSizes": "Standard Hospital Grade Specifications",
    "specifications": [
      {
        "label": "Material",
        "value": "Heavy Duty Steel / ABS"
      },
      {
        "label": "Finish",
        "value": "Anti-Corrosive Powder Coating"
      },
      {
        "label": "Quality Standard",
        "value": "ISO 9001 Certified"
      }
    ],
    "features": [
      "Heavy-duty durable construction",
      "Easy to sanitize anti-bacterial finish",
      "Smooth movement castors"
    ],
    "applications": [
      "Hospitals",
      "Clinics",
      "Nursing Homes"
    ],
    "featured": false
  },
  {
    "id": "prod-11",
    "slug": "fowlers-cot-bed",
    "name": "Fowlers Cot Bed",
    "tagline": "High quality medical Fowlers Cot Bed designed for clinical & hospital use.",
    "category": "Hospital Beds",
    "description": "Premium hospital-grade Fowlers Cot Bed engineered for durability and patient care.",
    "fullDescription": "Sri Mathurams Fowlers Cot Bed is manufactured with high grade steel, ergonomic design, and anti-bacterial coating.",
    "image": "/images/Product Assets/ICU CotBed/-Fowlers-Cot-Bed.webp",
    "gallery": [
      "/images/Product Assets/ICU CotBed/-Fowlers-Cot-Bed.webp"
    ],
    "materialDetails": "High-Grade ERW Steel with Anti-Bacterial Epoxy Powder Coating.",
    "availableSizes": "Standard Hospital Grade Specifications",
    "specifications": [
      {
        "label": "Material",
        "value": "Heavy Duty Steel / ABS"
      },
      {
        "label": "Finish",
        "value": "Anti-Corrosive Powder Coating"
      },
      {
        "label": "Quality Standard",
        "value": "ISO 9001 Certified"
      }
    ],
    "features": [
      "Heavy-duty durable construction",
      "Easy to sanitize anti-bacterial finish",
      "Smooth movement castors"
    ],
    "applications": [
      "Hospitals",
      "Clinics",
      "Nursing Homes"
    ],
    "featured": false
  },
  {
    "id": "prod-12",
    "slug": "hospital-nurse-bunker-two-tier-cot-bed",
    "name": "Hospital Nurse Bunker Two Tier Cot Bed",
    "tagline": "High quality medical Hospital Nurse Bunker Two Tier Cot Bed designed for clinical & hospital use.",
    "category": "Hospital Beds",
    "description": "Premium hospital-grade Hospital Nurse Bunker Two Tier Cot Bed engineered for durability and patient care.",
    "fullDescription": "Sri Mathurams Hospital Nurse Bunker Two Tier Cot Bed is manufactured with high grade steel, ergonomic design, and anti-bacterial coating.",
    "image": "/images/Product Assets/ICU CotBed/-Hospital-Nurse-Bunker-Two-Tier-Cot-Bed.webp",
    "gallery": [
      "/images/Product Assets/ICU CotBed/-Hospital-Nurse-Bunker-Two-Tier-Cot-Bed.webp"
    ],
    "materialDetails": "High-Grade ERW Steel with Anti-Bacterial Epoxy Powder Coating.",
    "availableSizes": "Standard Hospital Grade Specifications",
    "specifications": [
      {
        "label": "Material",
        "value": "Heavy Duty Steel / ABS"
      },
      {
        "label": "Finish",
        "value": "Anti-Corrosive Powder Coating"
      },
      {
        "label": "Quality Standard",
        "value": "ISO 9001 Certified"
      }
    ],
    "features": [
      "Heavy-duty durable construction",
      "Easy to sanitize anti-bacterial finish",
      "Smooth movement castors"
    ],
    "applications": [
      "Hospitals",
      "Clinics",
      "Nursing Homes"
    ],
    "featured": false
  },
  {
    "id": "prod-13",
    "slug": "hospital-semi-fowler-cot-bed",
    "name": "Hospital Semi Fowler Cot Bed",
    "tagline": "High quality medical Hospital Semi Fowler Cot Bed designed for clinical & hospital use.",
    "category": "Hospital Beds",
    "description": "Premium hospital-grade Hospital Semi Fowler Cot Bed engineered for durability and patient care.",
    "fullDescription": "Sri Mathurams Hospital Semi Fowler Cot Bed is manufactured with high grade steel, ergonomic design, and anti-bacterial coating.",
    "image": "/images/Product Assets/ICU CotBed/-Hospital-Semi-Fowler-Cot-Bed.webp",
    "gallery": [
      "/images/Product Assets/ICU CotBed/-Hospital-Semi-Fowler-Cot-Bed.webp"
    ],
    "materialDetails": "High-Grade ERW Steel with Anti-Bacterial Epoxy Powder Coating.",
    "availableSizes": "Standard Hospital Grade Specifications",
    "specifications": [
      {
        "label": "Material",
        "value": "Heavy Duty Steel / ABS"
      },
      {
        "label": "Finish",
        "value": "Anti-Corrosive Powder Coating"
      },
      {
        "label": "Quality Standard",
        "value": "ISO 9001 Certified"
      }
    ],
    "features": [
      "Heavy-duty durable construction",
      "Easy to sanitize anti-bacterial finish",
      "Smooth movement castors"
    ],
    "applications": [
      "Hospitals",
      "Clinics",
      "Nursing Homes"
    ],
    "featured": false
  },
  {
    "id": "prod-14",
    "slug": "remote-icu-cot",
    "name": "Remote ICU Cot",
    "tagline": "High quality medical Remote ICU Cot designed for clinical & hospital use.",
    "category": "Hospital Beds",
    "description": "Premium hospital-grade Remote ICU Cot engineered for durability and patient care.",
    "fullDescription": "Sri Mathurams Remote ICU Cot is manufactured with high grade steel, ergonomic design, and anti-bacterial coating.",
    "image": "/images/Product Assets/ICU CotBed/-Remote-ICU-Cot.webp",
    "gallery": [
      "/images/Product Assets/ICU CotBed/-Remote-ICU-Cot.webp"
    ],
    "materialDetails": "High-Grade ERW Steel with Anti-Bacterial Epoxy Powder Coating.",
    "availableSizes": "Standard Hospital Grade Specifications",
    "specifications": [
      {
        "label": "Material",
        "value": "Heavy Duty Steel / ABS"
      },
      {
        "label": "Finish",
        "value": "Anti-Corrosive Powder Coating"
      },
      {
        "label": "Quality Standard",
        "value": "ISO 9001 Certified"
      }
    ],
    "features": [
      "Heavy-duty durable construction",
      "Easy to sanitize anti-bacterial finish",
      "Smooth movement castors"
    ],
    "applications": [
      "Hospitals",
      "Clinics",
      "Nursing Homes"
    ],
    "featured": false
  },
  {
    "id": "prod-15",
    "slug": "ss-attender-cot-bed",
    "name": "SS Attender Cot Bed",
    "tagline": "High quality medical SS Attender Cot Bed designed for clinical & hospital use.",
    "category": "Hospital Beds",
    "description": "Premium hospital-grade SS Attender Cot Bed engineered for durability and patient care.",
    "fullDescription": "Sri Mathurams SS Attender Cot Bed is manufactured with high grade steel, ergonomic design, and anti-bacterial coating.",
    "image": "/images/Product Assets/ICU CotBed/-SS-Attender-Cot-Bed.webp",
    "gallery": [
      "/images/Product Assets/ICU CotBed/-SS-Attender-Cot-Bed.webp"
    ],
    "materialDetails": "High-Grade ERW Steel with Anti-Bacterial Epoxy Powder Coating.",
    "availableSizes": "Standard Hospital Grade Specifications",
    "specifications": [
      {
        "label": "Material",
        "value": "Heavy Duty Steel / ABS"
      },
      {
        "label": "Finish",
        "value": "Anti-Corrosive Powder Coating"
      },
      {
        "label": "Quality Standard",
        "value": "ISO 9001 Certified"
      }
    ],
    "features": [
      "Heavy-duty durable construction",
      "Easy to sanitize anti-bacterial finish",
      "Smooth movement castors"
    ],
    "applications": [
      "Hospitals",
      "Clinics",
      "Nursing Homes"
    ],
    "featured": false
  },
  {
    "id": "prod-16",
    "slug": "icu-cot",
    "name": "ICU Cot",
    "tagline": "High quality medical ICU Cot designed for clinical & hospital use.",
    "category": "Hospital Beds",
    "description": "Premium hospital-grade ICU Cot engineered for durability and patient care.",
    "fullDescription": "Sri Mathurams ICU Cot is manufactured with high grade steel, ergonomic design, and anti-bacterial coating.",
    "image": "/images/Product Assets/ICU CotBed/ICU-Cot.webp",
    "gallery": [
      "/images/Product Assets/ICU CotBed/ICU-Cot.webp"
    ],
    "materialDetails": "High-Grade ERW Steel with Anti-Bacterial Epoxy Powder Coating.",
    "availableSizes": "Standard Hospital Grade Specifications",
    "specifications": [
      {
        "label": "Material",
        "value": "Heavy Duty Steel / ABS"
      },
      {
        "label": "Finish",
        "value": "Anti-Corrosive Powder Coating"
      },
      {
        "label": "Quality Standard",
        "value": "ISO 9001 Certified"
      }
    ],
    "features": [
      "Heavy-duty durable construction",
      "Easy to sanitize anti-bacterial finish",
      "Smooth movement castors"
    ],
    "applications": [
      "Hospitals",
      "Clinics",
      "Nursing Homes"
    ],
    "featured": false
  },
  {
    "id": "prod-17",
    "slug": "hospital-blood-donor-chair",
    "name": "Hospital Blood Donor Chair",
    "tagline": "High quality medical Hospital Blood Donor Chair designed for clinical & hospital use.",
    "category": "Hospital Furniture",
    "description": "Premium hospital-grade Hospital Blood Donor Chair engineered for durability and patient care.",
    "fullDescription": "Sri Mathurams Hospital Blood Donor Chair is manufactured with high grade steel, ergonomic design, and anti-bacterial coating.",
    "image": "/images/Product Assets/Furnitures/Hospital-Blood-Donor-Chair.webp",
    "gallery": [
      "/images/Product Assets/Furnitures/Hospital-Blood-Donor-Chair.webp"
    ],
    "materialDetails": "High-Grade ERW Steel with Anti-Bacterial Epoxy Powder Coating.",
    "availableSizes": "Standard Hospital Grade Specifications",
    "specifications": [
      {
        "label": "Material",
        "value": "Heavy Duty Steel / ABS"
      },
      {
        "label": "Finish",
        "value": "Anti-Corrosive Powder Coating"
      },
      {
        "label": "Quality Standard",
        "value": "ISO 9001 Certified"
      }
    ],
    "features": [
      "Heavy-duty durable construction",
      "Easy to sanitize anti-bacterial finish",
      "Smooth movement castors"
    ],
    "applications": [
      "Hospitals",
      "Clinics",
      "Nursing Homes"
    ],
    "featured": false
  },
  {
    "id": "prod-18",
    "slug": "hospital-foot-stool",
    "name": "Hospital Foot Stool",
    "tagline": "High quality medical Hospital Foot Stool designed for clinical & hospital use.",
    "category": "Hospital Furniture",
    "description": "Premium hospital-grade Hospital Foot Stool engineered for durability and patient care.",
    "fullDescription": "Sri Mathurams Hospital Foot Stool is manufactured with high grade steel, ergonomic design, and anti-bacterial coating.",
    "image": "/images/Product Assets/Furnitures/Hospital-Foot-Stool.webp",
    "gallery": [
      "/images/Product Assets/Furnitures/Hospital-Foot-Stool.webp"
    ],
    "materialDetails": "High-Grade ERW Steel with Anti-Bacterial Epoxy Powder Coating.",
    "availableSizes": "Standard Hospital Grade Specifications",
    "specifications": [
      {
        "label": "Material",
        "value": "Heavy Duty Steel / ABS"
      },
      {
        "label": "Finish",
        "value": "Anti-Corrosive Powder Coating"
      },
      {
        "label": "Quality Standard",
        "value": "ISO 9001 Certified"
      }
    ],
    "features": [
      "Heavy-duty durable construction",
      "Easy to sanitize anti-bacterial finish",
      "Smooth movement castors"
    ],
    "applications": [
      "Hospitals",
      "Clinics",
      "Nursing Homes"
    ],
    "featured": false
  },
  {
    "id": "prod-19",
    "slug": "hospital-linen-trolley",
    "name": "Hospital Linen Trolley",
    "tagline": "High quality medical Hospital Linen Trolley designed for clinical & hospital use.",
    "category": "Hospital Furniture",
    "description": "Premium hospital-grade Hospital Linen Trolley engineered for durability and patient care.",
    "fullDescription": "Sri Mathurams Hospital Linen Trolley is manufactured with high grade steel, ergonomic design, and anti-bacterial coating.",
    "image": "/images/Product Assets/Furnitures/Hospital-Linen-Trolley.webp",
    "gallery": [
      "/images/Product Assets/Furnitures/Hospital-Linen-Trolley.webp"
    ],
    "materialDetails": "High-Grade ERW Steel with Anti-Bacterial Epoxy Powder Coating.",
    "availableSizes": "Standard Hospital Grade Specifications",
    "specifications": [
      {
        "label": "Material",
        "value": "Heavy Duty Steel / ABS"
      },
      {
        "label": "Finish",
        "value": "Anti-Corrosive Powder Coating"
      },
      {
        "label": "Quality Standard",
        "value": "ISO 9001 Certified"
      }
    ],
    "features": [
      "Heavy-duty durable construction",
      "Easy to sanitize anti-bacterial finish",
      "Smooth movement castors"
    ],
    "applications": [
      "Hospitals",
      "Clinics",
      "Nursing Homes"
    ],
    "featured": false
  },
  {
    "id": "prod-20",
    "slug": "hospital-ot-surgical-scrub-sink",
    "name": "Hospital OT Surgical Scrub Sink",
    "tagline": "High quality medical Hospital OT Surgical Scrub Sink designed for clinical & hospital use.",
    "category": "Hospital Furniture",
    "description": "Premium hospital-grade Hospital OT Surgical Scrub Sink engineered for durability and patient care.",
    "fullDescription": "Sri Mathurams Hospital OT Surgical Scrub Sink is manufactured with high grade steel, ergonomic design, and anti-bacterial coating.",
    "image": "/images/Product Assets/Furnitures/Hospital-OT-Surgical-Scrub-Sink.webp",
    "gallery": [
      "/images/Product Assets/Furnitures/Hospital-OT-Surgical-Scrub-Sink.webp"
    ],
    "materialDetails": "High-Grade ERW Steel with Anti-Bacterial Epoxy Powder Coating.",
    "availableSizes": "Standard Hospital Grade Specifications",
    "specifications": [
      {
        "label": "Material",
        "value": "Heavy Duty Steel / ABS"
      },
      {
        "label": "Finish",
        "value": "Anti-Corrosive Powder Coating"
      },
      {
        "label": "Quality Standard",
        "value": "ISO 9001 Certified"
      }
    ],
    "features": [
      "Heavy-duty durable construction",
      "Easy to sanitize anti-bacterial finish",
      "Smooth movement castors"
    ],
    "applications": [
      "Hospitals",
      "Clinics",
      "Nursing Homes"
    ],
    "featured": false
  },
  {
    "id": "prod-21",
    "slug": "hospital-over-bed-table",
    "name": "Hospital Over Bed Table",
    "tagline": "High quality medical Hospital Over Bed Table designed for clinical & hospital use.",
    "category": "Hospital Furniture",
    "description": "Premium hospital-grade Hospital Over Bed Table engineered for durability and patient care.",
    "fullDescription": "Sri Mathurams Hospital Over Bed Table is manufactured with high grade steel, ergonomic design, and anti-bacterial coating.",
    "image": "/images/Product Assets/Furnitures/Hospital-Over-Bed-Table.webp",
    "gallery": [
      "/images/Product Assets/Furnitures/Hospital-Over-Bed-Table.webp"
    ],
    "materialDetails": "High-Grade ERW Steel with Anti-Bacterial Epoxy Powder Coating.",
    "availableSizes": "Standard Hospital Grade Specifications",
    "specifications": [
      {
        "label": "Material",
        "value": "Heavy Duty Steel / ABS"
      },
      {
        "label": "Finish",
        "value": "Anti-Corrosive Powder Coating"
      },
      {
        "label": "Quality Standard",
        "value": "ISO 9001 Certified"
      }
    ],
    "features": [
      "Heavy-duty durable construction",
      "Easy to sanitize anti-bacterial finish",
      "Smooth movement castors"
    ],
    "applications": [
      "Hospitals",
      "Clinics",
      "Nursing Homes"
    ],
    "featured": false
  },
  {
    "id": "prod-22",
    "slug": "hospital-patient-transfer-trolley",
    "name": "Hospital Patient Transfer Trolley",
    "tagline": "High quality medical Hospital Patient Transfer Trolley designed for clinical & hospital use.",
    "category": "Hospital Furniture",
    "description": "Premium hospital-grade Hospital Patient Transfer Trolley engineered for durability and patient care.",
    "fullDescription": "Sri Mathurams Hospital Patient Transfer Trolley is manufactured with high grade steel, ergonomic design, and anti-bacterial coating.",
    "image": "/images/Product Assets/Furnitures/Hospital-Patient-Transfer-Trolley.webp",
    "gallery": [
      "/images/Product Assets/Furnitures/Hospital-Patient-Transfer-Trolley.webp"
    ],
    "materialDetails": "High-Grade ERW Steel with Anti-Bacterial Epoxy Powder Coating.",
    "availableSizes": "Standard Hospital Grade Specifications",
    "specifications": [
      {
        "label": "Material",
        "value": "Heavy Duty Steel / ABS"
      },
      {
        "label": "Finish",
        "value": "Anti-Corrosive Powder Coating"
      },
      {
        "label": "Quality Standard",
        "value": "ISO 9001 Certified"
      }
    ],
    "features": [
      "Heavy-duty durable construction",
      "Easy to sanitize anti-bacterial finish",
      "Smooth movement castors"
    ],
    "applications": [
      "Hospitals",
      "Clinics",
      "Nursing Homes"
    ],
    "featured": false
  },
  {
    "id": "prod-23",
    "slug": "hospital-revolving-stool",
    "name": "Hospital Revolving Stool",
    "tagline": "High quality medical Hospital Revolving Stool designed for clinical & hospital use.",
    "category": "Hospital Furniture",
    "description": "Premium hospital-grade Hospital Revolving Stool engineered for durability and patient care.",
    "fullDescription": "Sri Mathurams Hospital Revolving Stool is manufactured with high grade steel, ergonomic design, and anti-bacterial coating.",
    "image": "/images/Product Assets/Furnitures/Hospital-Revolving-Stool.webp",
    "gallery": [
      "/images/Product Assets/Furnitures/Hospital-Revolving-Stool.webp"
    ],
    "materialDetails": "High-Grade ERW Steel with Anti-Bacterial Epoxy Powder Coating.",
    "availableSizes": "Standard Hospital Grade Specifications",
    "specifications": [
      {
        "label": "Material",
        "value": "Heavy Duty Steel / ABS"
      },
      {
        "label": "Finish",
        "value": "Anti-Corrosive Powder Coating"
      },
      {
        "label": "Quality Standard",
        "value": "ISO 9001 Certified"
      }
    ],
    "features": [
      "Heavy-duty durable construction",
      "Easy to sanitize anti-bacterial finish",
      "Smooth movement castors"
    ],
    "applications": [
      "Hospitals",
      "Clinics",
      "Nursing Homes"
    ],
    "featured": false
  },
  {
    "id": "prod-24",
    "slug": "hospital-wash-basin-stand",
    "name": "Hospital Wash Basin Stand",
    "tagline": "High quality medical Hospital Wash Basin Stand designed for clinical & hospital use.",
    "category": "Hospital Furniture",
    "description": "Premium hospital-grade Hospital Wash Basin Stand engineered for durability and patient care.",
    "fullDescription": "Sri Mathurams Hospital Wash Basin Stand is manufactured with high grade steel, ergonomic design, and anti-bacterial coating.",
    "image": "/images/Product Assets/Furnitures/Hospital-Wash-Basin-Stand.webp",
    "gallery": [
      "/images/Product Assets/Furnitures/Hospital-Wash-Basin-Stand.webp"
    ],
    "materialDetails": "High-Grade ERW Steel with Anti-Bacterial Epoxy Powder Coating.",
    "availableSizes": "Standard Hospital Grade Specifications",
    "specifications": [
      {
        "label": "Material",
        "value": "Heavy Duty Steel / ABS"
      },
      {
        "label": "Finish",
        "value": "Anti-Corrosive Powder Coating"
      },
      {
        "label": "Quality Standard",
        "value": "ISO 9001 Certified"
      }
    ],
    "features": [
      "Heavy-duty durable construction",
      "Easy to sanitize anti-bacterial finish",
      "Smooth movement castors"
    ],
    "applications": [
      "Hospitals",
      "Clinics",
      "Nursing Homes"
    ],
    "featured": false
  },
  {
    "id": "prod-25",
    "slug": "nebulizer-trolley",
    "name": "Nebulizer Trolley",
    "tagline": "High quality medical Nebulizer Trolley designed for clinical & hospital use.",
    "category": "Hospital Furniture",
    "description": "Premium hospital-grade Nebulizer Trolley engineered for durability and patient care.",
    "fullDescription": "Sri Mathurams Nebulizer Trolley is manufactured with high grade steel, ergonomic design, and anti-bacterial coating.",
    "image": "/images/Product Assets/Furnitures/Nebulizer-Trolley.webp",
    "gallery": [
      "/images/Product Assets/Furnitures/Nebulizer-Trolley.webp"
    ],
    "materialDetails": "High-Grade ERW Steel with Anti-Bacterial Epoxy Powder Coating.",
    "availableSizes": "Standard Hospital Grade Specifications",
    "specifications": [
      {
        "label": "Material",
        "value": "Heavy Duty Steel / ABS"
      },
      {
        "label": "Finish",
        "value": "Anti-Corrosive Powder Coating"
      },
      {
        "label": "Quality Standard",
        "value": "ISO 9001 Certified"
      }
    ],
    "features": [
      "Heavy-duty durable construction",
      "Easy to sanitize anti-bacterial finish",
      "Smooth movement castors"
    ],
    "applications": [
      "Hospitals",
      "Clinics",
      "Nursing Homes"
    ],
    "featured": false
  },
  {
    "id": "prod-26",
    "slug": "fixed-wheel-chair",
    "name": "Fixed Wheel Chair",
    "tagline": "High quality medical Fixed Wheel Chair designed for clinical & hospital use.",
    "category": "Wheelchairs",
    "description": "Premium hospital-grade Fixed Wheel Chair engineered for durability and patient care.",
    "fullDescription": "Sri Mathurams Fixed Wheel Chair is manufactured with high grade steel, ergonomic design, and anti-bacterial coating.",
    "image": "/images/Product Assets/WheelChair/Fixed-Wheel-Chair.webp",
    "gallery": [
      "/images/Product Assets/WheelChair/Fixed-Wheel-Chair.webp"
    ],
    "materialDetails": "High-Grade ERW Steel with Anti-Bacterial Epoxy Powder Coating.",
    "availableSizes": "Standard Hospital Grade Specifications",
    "specifications": [
      {
        "label": "Material",
        "value": "Heavy Duty Steel / ABS"
      },
      {
        "label": "Finish",
        "value": "Anti-Corrosive Powder Coating"
      },
      {
        "label": "Quality Standard",
        "value": "ISO 9001 Certified"
      }
    ],
    "features": [
      "Heavy-duty durable construction",
      "Easy to sanitize anti-bacterial finish",
      "Smooth movement castors"
    ],
    "applications": [
      "Hospitals",
      "Clinics",
      "Nursing Homes"
    ],
    "featured": false
  },
  {
    "id": "prod-27",
    "slug": "extra-10410435",
    "name": "extra 10410435",
    "tagline": "High quality medical extra 10410435 designed for clinical & hospital use.",
    "category": "Hospital Furniture",
    "description": "Premium hospital-grade extra 10410435 engineered for durability and patient care.",
    "fullDescription": "Sri Mathurams extra 10410435 is manufactured with high grade steel, ergonomic design, and anti-bacterial coating.",
    "image": "/images/Product Assets/HospitalBedsideLocker/extra-10410435.webp",
    "gallery": [
      "/images/Product Assets/HospitalBedsideLocker/extra-10410435.webp"
    ],
    "materialDetails": "High-Grade ERW Steel with Anti-Bacterial Epoxy Powder Coating.",
    "availableSizes": "Standard Hospital Grade Specifications",
    "specifications": [
      {
        "label": "Material",
        "value": "Heavy Duty Steel / ABS"
      },
      {
        "label": "Finish",
        "value": "Anti-Corrosive Powder Coating"
      },
      {
        "label": "Quality Standard",
        "value": "ISO 9001 Certified"
      }
    ],
    "features": [
      "Heavy-duty durable construction",
      "Easy to sanitize anti-bacterial finish",
      "Smooth movement castors"
    ],
    "applications": [
      "Hospitals",
      "Clinics",
      "Nursing Homes"
    ],
    "featured": false
  },
  {
    "id": "prod-28",
    "slug": "extra-10410436",
    "name": "extra 10410436",
    "tagline": "High quality medical extra 10410436 designed for clinical & hospital use.",
    "category": "Hospital Furniture",
    "description": "Premium hospital-grade extra 10410436 engineered for durability and patient care.",
    "fullDescription": "Sri Mathurams extra 10410436 is manufactured with high grade steel, ergonomic design, and anti-bacterial coating.",
    "image": "/images/Product Assets/HospitalBedsideLocker/extra-10410436.webp",
    "gallery": [
      "/images/Product Assets/HospitalBedsideLocker/extra-10410436.webp"
    ],
    "materialDetails": "High-Grade ERW Steel with Anti-Bacterial Epoxy Powder Coating.",
    "availableSizes": "Standard Hospital Grade Specifications",
    "specifications": [
      {
        "label": "Material",
        "value": "Heavy Duty Steel / ABS"
      },
      {
        "label": "Finish",
        "value": "Anti-Corrosive Powder Coating"
      },
      {
        "label": "Quality Standard",
        "value": "ISO 9001 Certified"
      }
    ],
    "features": [
      "Heavy-duty durable construction",
      "Easy to sanitize anti-bacterial finish",
      "Smooth movement castors"
    ],
    "applications": [
      "Hospitals",
      "Clinics",
      "Nursing Homes"
    ],
    "featured": false
  },
  {
    "id": "prod-29",
    "slug": "extra-10410437",
    "name": "extra 10410437",
    "tagline": "High quality medical extra 10410437 designed for clinical & hospital use.",
    "category": "Hospital Furniture",
    "description": "Premium hospital-grade extra 10410437 engineered for durability and patient care.",
    "fullDescription": "Sri Mathurams extra 10410437 is manufactured with high grade steel, ergonomic design, and anti-bacterial coating.",
    "image": "/images/Product Assets/HospitalBedsideLocker/extra-10410437.webp",
    "gallery": [
      "/images/Product Assets/HospitalBedsideLocker/extra-10410437.webp"
    ],
    "materialDetails": "High-Grade ERW Steel with Anti-Bacterial Epoxy Powder Coating.",
    "availableSizes": "Standard Hospital Grade Specifications",
    "specifications": [
      {
        "label": "Material",
        "value": "Heavy Duty Steel / ABS"
      },
      {
        "label": "Finish",
        "value": "Anti-Corrosive Powder Coating"
      },
      {
        "label": "Quality Standard",
        "value": "ISO 9001 Certified"
      }
    ],
    "features": [
      "Heavy-duty durable construction",
      "Easy to sanitize anti-bacterial finish",
      "Smooth movement castors"
    ],
    "applications": [
      "Hospitals",
      "Clinics",
      "Nursing Homes"
    ],
    "featured": false
  },
  {
    "id": "prod-30",
    "slug": "gynec-deluxe-couch",
    "name": "Gynec Deluxe Couch",
    "tagline": "High quality medical Gynec Deluxe Couch designed for clinical & hospital use.",
    "category": "Hospital Furniture",
    "description": "Premium hospital-grade Gynec Deluxe Couch engineered for durability and patient care.",
    "fullDescription": "Sri Mathurams Gynec Deluxe Couch is manufactured with high grade steel, ergonomic design, and anti-bacterial coating.",
    "image": "/images/Product Assets/HospitalExaminationCouch/Gynec-Deluxe-Couch.webp",
    "gallery": [
      "/images/Product Assets/HospitalExaminationCouch/Gynec-Deluxe-Couch.webp"
    ],
    "materialDetails": "High-Grade ERW Steel with Anti-Bacterial Epoxy Powder Coating.",
    "availableSizes": "Standard Hospital Grade Specifications",
    "specifications": [
      {
        "label": "Material",
        "value": "Heavy Duty Steel / ABS"
      },
      {
        "label": "Finish",
        "value": "Anti-Corrosive Powder Coating"
      },
      {
        "label": "Quality Standard",
        "value": "ISO 9001 Certified"
      }
    ],
    "features": [
      "Heavy-duty durable construction",
      "Easy to sanitize anti-bacterial finish",
      "Smooth movement castors"
    ],
    "applications": [
      "Hospitals",
      "Clinics",
      "Nursing Homes"
    ],
    "featured": false
  },
  {
    "id": "prod-31",
    "slug": "hospital-examination-couch",
    "name": "Hospital Examination Couch",
    "tagline": "High quality medical Hospital Examination Couch designed for clinical & hospital use.",
    "category": "Hospital Furniture",
    "description": "Premium hospital-grade Hospital Examination Couch engineered for durability and patient care.",
    "fullDescription": "Sri Mathurams Hospital Examination Couch is manufactured with high grade steel, ergonomic design, and anti-bacterial coating.",
    "image": "/images/Product Assets/HospitalExaminationCouch/Hospital-Examination-Couch.webp",
    "gallery": [
      "/images/Product Assets/HospitalExaminationCouch/Hospital-Examination-Couch.webp"
    ],
    "materialDetails": "High-Grade ERW Steel with Anti-Bacterial Epoxy Powder Coating.",
    "availableSizes": "Standard Hospital Grade Specifications",
    "specifications": [
      {
        "label": "Material",
        "value": "Heavy Duty Steel / ABS"
      },
      {
        "label": "Finish",
        "value": "Anti-Corrosive Powder Coating"
      },
      {
        "label": "Quality Standard",
        "value": "ISO 9001 Certified"
      }
    ],
    "features": [
      "Heavy-duty durable construction",
      "Easy to sanitize anti-bacterial finish",
      "Smooth movement castors"
    ],
    "applications": [
      "Hospitals",
      "Clinics",
      "Nursing Homes"
    ],
    "featured": false
  },
  {
    "id": "prod-32",
    "slug": "medical-remote-examination-couch",
    "name": "Medical Remote Examination Couch",
    "tagline": "High quality medical Medical Remote Examination Couch designed for clinical & hospital use.",
    "category": "Hospital Furniture",
    "description": "Premium hospital-grade Medical Remote Examination Couch engineered for durability and patient care.",
    "fullDescription": "Sri Mathurams Medical Remote Examination Couch is manufactured with high grade steel, ergonomic design, and anti-bacterial coating.",
    "image": "/images/Product Assets/HospitalExaminationCouch/Medical-Remote-Examination-Couch.webp",
    "gallery": [
      "/images/Product Assets/HospitalExaminationCouch/Medical-Remote-Examination-Couch.webp"
    ],
    "materialDetails": "High-Grade ERW Steel with Anti-Bacterial Epoxy Powder Coating.",
    "availableSizes": "Standard Hospital Grade Specifications",
    "specifications": [
      {
        "label": "Material",
        "value": "Heavy Duty Steel / ABS"
      },
      {
        "label": "Finish",
        "value": "Anti-Corrosive Powder Coating"
      },
      {
        "label": "Quality Standard",
        "value": "ISO 9001 Certified"
      }
    ],
    "features": [
      "Heavy-duty durable construction",
      "Easy to sanitize anti-bacterial finish",
      "Smooth movement castors"
    ],
    "applications": [
      "Hospitals",
      "Clinics",
      "Nursing Homes"
    ],
    "featured": false
  },
  {
    "id": "prod-33",
    "slug": "foot-stool",
    "name": "Foot Stool",
    "tagline": "High quality medical Foot Stool designed for clinical & hospital use.",
    "category": "Hospital Furniture",
    "description": "Premium hospital-grade Foot Stool engineered for durability and patient care.",
    "fullDescription": "Sri Mathurams Foot Stool is manufactured with high grade steel, ergonomic design, and anti-bacterial coating.",
    "image": "/images/Product Assets/Hospital Stool and chair/Foot-Stool.webp",
    "gallery": [
      "/images/Product Assets/Hospital Stool and chair/Foot-Stool.webp"
    ],
    "materialDetails": "High-Grade ERW Steel with Anti-Bacterial Epoxy Powder Coating.",
    "availableSizes": "Standard Hospital Grade Specifications",
    "specifications": [
      {
        "label": "Material",
        "value": "Heavy Duty Steel / ABS"
      },
      {
        "label": "Finish",
        "value": "Anti-Corrosive Powder Coating"
      },
      {
        "label": "Quality Standard",
        "value": "ISO 9001 Certified"
      }
    ],
    "features": [
      "Heavy-duty durable construction",
      "Easy to sanitize anti-bacterial finish",
      "Smooth movement castors"
    ],
    "applications": [
      "Hospitals",
      "Clinics",
      "Nursing Homes"
    ],
    "featured": false
  },
  {
    "id": "prod-34",
    "slug": "hospital-pre-assembled-wash-basin-stand",
    "name": "Hospital Pre Assembled Wash Basin Stand",
    "tagline": "High quality medical Hospital Pre Assembled Wash Basin Stand designed for clinical & hospital use.",
    "category": "Hospital Furniture",
    "description": "Premium hospital-grade Hospital Pre Assembled Wash Basin Stand engineered for durability and patient care.",
    "fullDescription": "Sri Mathurams Hospital Pre Assembled Wash Basin Stand is manufactured with high grade steel, ergonomic design, and anti-bacterial coating.",
    "image": "/images/Product Assets/Hospital Stool and chair/Hospital-Pre-Assembled-Wash-Basin-Stand.webp",
    "gallery": [
      "/images/Product Assets/Hospital Stool and chair/Hospital-Pre-Assembled-Wash-Basin-Stand.webp"
    ],
    "materialDetails": "High-Grade ERW Steel with Anti-Bacterial Epoxy Powder Coating.",
    "availableSizes": "Standard Hospital Grade Specifications",
    "specifications": [
      {
        "label": "Material",
        "value": "Heavy Duty Steel / ABS"
      },
      {
        "label": "Finish",
        "value": "Anti-Corrosive Powder Coating"
      },
      {
        "label": "Quality Standard",
        "value": "ISO 9001 Certified"
      }
    ],
    "features": [
      "Heavy-duty durable construction",
      "Easy to sanitize anti-bacterial finish",
      "Smooth movement castors"
    ],
    "applications": [
      "Hospitals",
      "Clinics",
      "Nursing Homes"
    ],
    "featured": false
  },
  {
    "id": "prod-35",
    "slug": "mild-steel-corrosion-free-iv-stand",
    "name": "Mild Steel Corrosion free IV Stand",
    "tagline": "High quality medical Mild Steel Corrosion free IV Stand designed for clinical & hospital use.",
    "category": "Hospital Furniture",
    "description": "Premium hospital-grade Mild Steel Corrosion free IV Stand engineered for durability and patient care.",
    "fullDescription": "Sri Mathurams Mild Steel Corrosion free IV Stand is manufactured with high grade steel, ergonomic design, and anti-bacterial coating.",
    "image": "/images/Product Assets/Hospital Stool and chair/Mild-Steel-Corrosion-free-IV-Stand.webp",
    "gallery": [
      "/images/Product Assets/Hospital Stool and chair/Mild-Steel-Corrosion-free-IV-Stand.webp"
    ],
    "materialDetails": "High-Grade ERW Steel with Anti-Bacterial Epoxy Powder Coating.",
    "availableSizes": "Standard Hospital Grade Specifications",
    "specifications": [
      {
        "label": "Material",
        "value": "Heavy Duty Steel / ABS"
      },
      {
        "label": "Finish",
        "value": "Anti-Corrosive Powder Coating"
      },
      {
        "label": "Quality Standard",
        "value": "ISO 9001 Certified"
      }
    ],
    "features": [
      "Heavy-duty durable construction",
      "Easy to sanitize anti-bacterial finish",
      "Smooth movement castors"
    ],
    "applications": [
      "Hospitals",
      "Clinics",
      "Nursing Homes"
    ],
    "featured": false
  },
  {
    "id": "prod-36",
    "slug": "revolving-stool",
    "name": "Revolving Stool",
    "tagline": "High quality medical Revolving Stool designed for clinical & hospital use.",
    "category": "Hospital Furniture",
    "description": "Premium hospital-grade Revolving Stool engineered for durability and patient care.",
    "fullDescription": "Sri Mathurams Revolving Stool is manufactured with high grade steel, ergonomic design, and anti-bacterial coating.",
    "image": "/images/Product Assets/Hospital Stool and chair/Revolving-Stool.webp",
    "gallery": [
      "/images/Product Assets/Hospital Stool and chair/Revolving-Stool.webp"
    ],
    "materialDetails": "High-Grade ERW Steel with Anti-Bacterial Epoxy Powder Coating.",
    "availableSizes": "Standard Hospital Grade Specifications",
    "specifications": [
      {
        "label": "Material",
        "value": "Heavy Duty Steel / ABS"
      },
      {
        "label": "Finish",
        "value": "Anti-Corrosive Powder Coating"
      },
      {
        "label": "Quality Standard",
        "value": "ISO 9001 Certified"
      }
    ],
    "features": [
      "Heavy-duty durable construction",
      "Easy to sanitize anti-bacterial finish",
      "Smooth movement castors"
    ],
    "applications": [
      "Hospitals",
      "Clinics",
      "Nursing Homes"
    ],
    "featured": false
  },
  {
    "id": "prod-37",
    "slug": "epoxy-powder-coated-hospital-linen-trolley",
    "name": "Epoxy Powder Coated Hospital Linen Trolley",
    "tagline": "High quality medical Epoxy Powder Coated Hospital Linen Trolley designed for clinical & hospital use.",
    "category": "Medical Trolleys",
    "description": "Premium hospital-grade Epoxy Powder Coated Hospital Linen Trolley engineered for durability and patient care.",
    "fullDescription": "Sri Mathurams Epoxy Powder Coated Hospital Linen Trolley is manufactured with high grade steel, ergonomic design, and anti-bacterial coating.",
    "image": "/images/Product Assets/HospitalTrolley/Epoxy-Powder-Coated-Hospital-Linen-Trolley.webp",
    "gallery": [
      "/images/Product Assets/HospitalTrolley/Epoxy-Powder-Coated-Hospital-Linen-Trolley.webp"
    ],
    "materialDetails": "High-Grade ERW Steel with Anti-Bacterial Epoxy Powder Coating.",
    "availableSizes": "Standard Hospital Grade Specifications",
    "specifications": [
      {
        "label": "Material",
        "value": "Heavy Duty Steel / ABS"
      },
      {
        "label": "Finish",
        "value": "Anti-Corrosive Powder Coating"
      },
      {
        "label": "Quality Standard",
        "value": "ISO 9001 Certified"
      }
    ],
    "features": [
      "Heavy-duty durable construction",
      "Easy to sanitize anti-bacterial finish",
      "Smooth movement castors"
    ],
    "applications": [
      "Hospitals",
      "Clinics",
      "Nursing Homes"
    ],
    "featured": false
  },
  {
    "id": "prod-38",
    "slug": "epoxy-powder-coated-hospital-mayos-trolley",
    "name": "Epoxy Powder Coated Hospital Mayos Trolley",
    "tagline": "High quality medical Epoxy Powder Coated Hospital Mayos Trolley designed for clinical & hospital use.",
    "category": "Medical Trolleys",
    "description": "Premium hospital-grade Epoxy Powder Coated Hospital Mayos Trolley engineered for durability and patient care.",
    "fullDescription": "Sri Mathurams Epoxy Powder Coated Hospital Mayos Trolley is manufactured with high grade steel, ergonomic design, and anti-bacterial coating.",
    "image": "/images/Product Assets/HospitalTrolley/Epoxy-Powder-Coated-Hospital-Mayos-Trolley.webp",
    "gallery": [
      "/images/Product Assets/HospitalTrolley/Epoxy-Powder-Coated-Hospital-Mayos-Trolley.webp"
    ],
    "materialDetails": "High-Grade ERW Steel with Anti-Bacterial Epoxy Powder Coating.",
    "availableSizes": "Standard Hospital Grade Specifications",
    "specifications": [
      {
        "label": "Material",
        "value": "Heavy Duty Steel / ABS"
      },
      {
        "label": "Finish",
        "value": "Anti-Corrosive Powder Coating"
      },
      {
        "label": "Quality Standard",
        "value": "ISO 9001 Certified"
      }
    ],
    "features": [
      "Heavy-duty durable construction",
      "Easy to sanitize anti-bacterial finish",
      "Smooth movement castors"
    ],
    "applications": [
      "Hospitals",
      "Clinics",
      "Nursing Homes"
    ],
    "featured": false
  },
  {
    "id": "prod-39",
    "slug": "hospital-crash-cart-trolley",
    "name": "Hospital Crash Cart Trolley",
    "tagline": "High quality medical Hospital Crash Cart Trolley designed for clinical & hospital use.",
    "category": "Medical Trolleys",
    "description": "Premium hospital-grade Hospital Crash Cart Trolley engineered for durability and patient care.",
    "fullDescription": "Sri Mathurams Hospital Crash Cart Trolley is manufactured with high grade steel, ergonomic design, and anti-bacterial coating.",
    "image": "/images/Product Assets/HospitalTrolley/Hospital-Crash-Cart-Trolley.webp",
    "gallery": [
      "/images/Product Assets/HospitalTrolley/Hospital-Crash-Cart-Trolley.webp"
    ],
    "materialDetails": "High-Grade ERW Steel with Anti-Bacterial Epoxy Powder Coating.",
    "availableSizes": "Standard Hospital Grade Specifications",
    "specifications": [
      {
        "label": "Material",
        "value": "Heavy Duty Steel / ABS"
      },
      {
        "label": "Finish",
        "value": "Anti-Corrosive Powder Coating"
      },
      {
        "label": "Quality Standard",
        "value": "ISO 9001 Certified"
      }
    ],
    "features": [
      "Heavy-duty durable construction",
      "Easy to sanitize anti-bacterial finish",
      "Smooth movement castors"
    ],
    "applications": [
      "Hospitals",
      "Clinics",
      "Nursing Homes"
    ],
    "featured": false
  },
  {
    "id": "prod-40",
    "slug": "hospital-ecg-trolley",
    "name": "Hospital ECG Trolley",
    "tagline": "High quality medical Hospital ECG Trolley designed for clinical & hospital use.",
    "category": "Medical Trolleys",
    "description": "Premium hospital-grade Hospital ECG Trolley engineered for durability and patient care.",
    "fullDescription": "Sri Mathurams Hospital ECG Trolley is manufactured with high grade steel, ergonomic design, and anti-bacterial coating.",
    "image": "/images/Product Assets/HospitalTrolley/Hospital-ECG-Trolley.webp",
    "gallery": [
      "/images/Product Assets/HospitalTrolley/Hospital-ECG-Trolley.webp"
    ],
    "materialDetails": "High-Grade ERW Steel with Anti-Bacterial Epoxy Powder Coating.",
    "availableSizes": "Standard Hospital Grade Specifications",
    "specifications": [
      {
        "label": "Material",
        "value": "Heavy Duty Steel / ABS"
      },
      {
        "label": "Finish",
        "value": "Anti-Corrosive Powder Coating"
      },
      {
        "label": "Quality Standard",
        "value": "ISO 9001 Certified"
      }
    ],
    "features": [
      "Heavy-duty durable construction",
      "Easy to sanitize anti-bacterial finish",
      "Smooth movement castors"
    ],
    "applications": [
      "Hospitals",
      "Clinics",
      "Nursing Homes"
    ],
    "featured": false
  },
  {
    "id": "prod-41",
    "slug": "mild-steel-laparoscopy-trolley-for-hospital",
    "name": "Mild Steel Laparoscopy Trolley for Hospital",
    "tagline": "High quality medical Mild Steel Laparoscopy Trolley for Hospital designed for clinical & hospital use.",
    "category": "Medical Trolleys",
    "description": "Premium hospital-grade Mild Steel Laparoscopy Trolley for Hospital engineered for durability and patient care.",
    "fullDescription": "Sri Mathurams Mild Steel Laparoscopy Trolley for Hospital is manufactured with high grade steel, ergonomic design, and anti-bacterial coating.",
    "image": "/images/Product Assets/HospitalTrolley/Mild-Steel-Laparoscopy-Trolley-for-Hospital.webp",
    "gallery": [
      "/images/Product Assets/HospitalTrolley/Mild-Steel-Laparoscopy-Trolley-for-Hospital.webp"
    ],
    "materialDetails": "High-Grade ERW Steel with Anti-Bacterial Epoxy Powder Coating.",
    "availableSizes": "Standard Hospital Grade Specifications",
    "specifications": [
      {
        "label": "Material",
        "value": "Heavy Duty Steel / ABS"
      },
      {
        "label": "Finish",
        "value": "Anti-Corrosive Powder Coating"
      },
      {
        "label": "Quality Standard",
        "value": "ISO 9001 Certified"
      }
    ],
    "features": [
      "Heavy-duty durable construction",
      "Easy to sanitize anti-bacterial finish",
      "Smooth movement castors"
    ],
    "applications": [
      "Hospitals",
      "Clinics",
      "Nursing Homes"
    ],
    "featured": false
  },
  {
    "id": "prod-42",
    "slug": "rust-proof-mild-steel-ecg-trolley",
    "name": "Rust Proof Mild Steel ECG Trolley",
    "tagline": "High quality medical Rust Proof Mild Steel ECG Trolley designed for clinical & hospital use.",
    "category": "Medical Trolleys",
    "description": "Premium hospital-grade Rust Proof Mild Steel ECG Trolley engineered for durability and patient care.",
    "fullDescription": "Sri Mathurams Rust Proof Mild Steel ECG Trolley is manufactured with high grade steel, ergonomic design, and anti-bacterial coating.",
    "image": "/images/Product Assets/HospitalTrolley/Rust-Proof-Mild-Steel-ECG-Trolley.webp",
    "gallery": [
      "/images/Product Assets/HospitalTrolley/Rust-Proof-Mild-Steel-ECG-Trolley.webp"
    ],
    "materialDetails": "High-Grade ERW Steel with Anti-Bacterial Epoxy Powder Coating.",
    "availableSizes": "Standard Hospital Grade Specifications",
    "specifications": [
      {
        "label": "Material",
        "value": "Heavy Duty Steel / ABS"
      },
      {
        "label": "Finish",
        "value": "Anti-Corrosive Powder Coating"
      },
      {
        "label": "Quality Standard",
        "value": "ISO 9001 Certified"
      }
    ],
    "features": [
      "Heavy-duty durable construction",
      "Easy to sanitize anti-bacterial finish",
      "Smooth movement castors"
    ],
    "applications": [
      "Hospitals",
      "Clinics",
      "Nursing Homes"
    ],
    "featured": false
  },
  {
    "id": "prod-43",
    "slug": "theatre-drug-trolley",
    "name": "Theatre Drug Trolley",
    "tagline": "High quality medical Theatre Drug Trolley designed for clinical & hospital use.",
    "category": "Medical Trolleys",
    "description": "Premium hospital-grade Theatre Drug Trolley engineered for durability and patient care.",
    "fullDescription": "Sri Mathurams Theatre Drug Trolley is manufactured with high grade steel, ergonomic design, and anti-bacterial coating.",
    "image": "/images/Product Assets/HospitalTrolley/Theatre-Drug-Trolley.webp",
    "gallery": [
      "/images/Product Assets/HospitalTrolley/Theatre-Drug-Trolley.webp"
    ],
    "materialDetails": "High-Grade ERW Steel with Anti-Bacterial Epoxy Powder Coating.",
    "availableSizes": "Standard Hospital Grade Specifications",
    "specifications": [
      {
        "label": "Material",
        "value": "Heavy Duty Steel / ABS"
      },
      {
        "label": "Finish",
        "value": "Anti-Corrosive Powder Coating"
      },
      {
        "label": "Quality Standard",
        "value": "ISO 9001 Certified"
      }
    ],
    "features": [
      "Heavy-duty durable construction",
      "Easy to sanitize anti-bacterial finish",
      "Smooth movement castors"
    ],
    "applications": [
      "Hospitals",
      "Clinics",
      "Nursing Homes"
    ],
    "featured": false
  },
  {
    "id": "prod-44",
    "slug": "three-fold-screen-trolley",
    "name": "Three Fold Screen Trolley",
    "tagline": "High quality medical Three Fold Screen Trolley designed for clinical & hospital use.",
    "category": "Medical Trolleys",
    "description": "Premium hospital-grade Three Fold Screen Trolley engineered for durability and patient care.",
    "fullDescription": "Sri Mathurams Three Fold Screen Trolley is manufactured with high grade steel, ergonomic design, and anti-bacterial coating.",
    "image": "/images/Product Assets/HospitalTrolley/Three-Fold-Screen-Trolley.webp",
    "gallery": [
      "/images/Product Assets/HospitalTrolley/Three-Fold-Screen-Trolley.webp"
    ],
    "materialDetails": "High-Grade ERW Steel with Anti-Bacterial Epoxy Powder Coating.",
    "availableSizes": "Standard Hospital Grade Specifications",
    "specifications": [
      {
        "label": "Material",
        "value": "Heavy Duty Steel / ABS"
      },
      {
        "label": "Finish",
        "value": "Anti-Corrosive Powder Coating"
      },
      {
        "label": "Quality Standard",
        "value": "ISO 9001 Certified"
      }
    ],
    "features": [
      "Heavy-duty durable construction",
      "Easy to sanitize anti-bacterial finish",
      "Smooth movement castors"
    ],
    "applications": [
      "Hospitals",
      "Clinics",
      "Nursing Homes"
    ],
    "featured": false
  },
  {
    "id": "prod-45",
    "slug": "robust-double-door-square-shaped-hospital-bedside-locker",
    "name": "Robust Double Door Square Shaped Hospital Bedside Locker",
    "tagline": "High quality medical Robust Double Door Square Shaped Hospital Bedside Locker designed for clinical & hospital use.",
    "category": "Hospital Furniture",
    "description": "Premium hospital-grade Robust Double Door Square Shaped Hospital Bedside Locker engineered for durability and patient care.",
    "fullDescription": "Sri Mathurams Robust Double Door Square Shaped Hospital Bedside Locker is manufactured with high grade steel, ergonomic design, and anti-bacterial coating.",
    "image": "/images/Product Assets/HospitalLocker/Robust-Double-Door-Square-Shaped-Hospital-Bedside-Locker.webp",
    "gallery": [
      "/images/Product Assets/HospitalLocker/Robust-Double-Door-Square-Shaped-Hospital-Bedside-Locker.webp"
    ],
    "materialDetails": "High-Grade ERW Steel with Anti-Bacterial Epoxy Powder Coating.",
    "availableSizes": "Standard Hospital Grade Specifications",
    "specifications": [
      {
        "label": "Material",
        "value": "Heavy Duty Steel / ABS"
      },
      {
        "label": "Finish",
        "value": "Anti-Corrosive Powder Coating"
      },
      {
        "label": "Quality Standard",
        "value": "ISO 9001 Certified"
      }
    ],
    "features": [
      "Heavy-duty durable construction",
      "Easy to sanitize anti-bacterial finish",
      "Smooth movement castors"
    ],
    "applications": [
      "Hospitals",
      "Clinics",
      "Nursing Homes"
    ],
    "featured": false
  },
  {
    "id": "prod-46",
    "slug": "hospital-three-fold-screen",
    "name": "Hospital Three Fold Screen",
    "tagline": "High quality medical Hospital Three Fold Screen designed for clinical & hospital use.",
    "category": "Hospital Furniture",
    "description": "Premium hospital-grade Hospital Three Fold Screen engineered for durability and patient care.",
    "fullDescription": "Sri Mathurams Hospital Three Fold Screen is manufactured with high grade steel, ergonomic design, and anti-bacterial coating.",
    "image": "/images/Product Assets/HospitalScreen/Hospital-Three-Fold-Screen.webp",
    "gallery": [
      "/images/Product Assets/HospitalScreen/Hospital-Three-Fold-Screen.webp"
    ],
    "materialDetails": "High-Grade ERW Steel with Anti-Bacterial Epoxy Powder Coating.",
    "availableSizes": "Standard Hospital Grade Specifications",
    "specifications": [
      {
        "label": "Material",
        "value": "Heavy Duty Steel / ABS"
      },
      {
        "label": "Finish",
        "value": "Anti-Corrosive Powder Coating"
      },
      {
        "label": "Quality Standard",
        "value": "ISO 9001 Certified"
      }
    ],
    "features": [
      "Heavy-duty durable construction",
      "Easy to sanitize anti-bacterial finish",
      "Smooth movement castors"
    ],
    "applications": [
      "Hospitals",
      "Clinics",
      "Nursing Homes"
    ],
    "featured": false
  },
  {
    "id": "prod-47",
    "slug": "attender-cot-bed",
    "name": "Attender Cot Bed",
    "tagline": "High quality medical Attender Cot Bed designed for clinical & hospital use.",
    "category": "Hospital Beds",
    "description": "Premium hospital-grade Attender Cot Bed engineered for durability and patient care.",
    "fullDescription": "Sri Mathurams Attender Cot Bed is manufactured with high grade steel, ergonomic design, and anti-bacterial coating.",
    "image": "/images/Product Assets/Beds/Attender-Cot-Bed.webp",
    "gallery": [
      "/images/Product Assets/Beds/Attender-Cot-Bed.webp"
    ],
    "materialDetails": "High-Grade ERW Steel with Anti-Bacterial Epoxy Powder Coating.",
    "availableSizes": "Standard Hospital Grade Specifications",
    "specifications": [
      {
        "label": "Material",
        "value": "Heavy Duty Steel / ABS"
      },
      {
        "label": "Finish",
        "value": "Anti-Corrosive Powder Coating"
      },
      {
        "label": "Quality Standard",
        "value": "ISO 9001 Certified"
      }
    ],
    "features": [
      "Heavy-duty durable construction",
      "Easy to sanitize anti-bacterial finish",
      "Smooth movement castors"
    ],
    "applications": [
      "Hospitals",
      "Clinics",
      "Nursing Homes"
    ],
    "featured": false
  },
  {
    "id": "prod-48",
    "slug": "gynec-couch-deluxe-bed",
    "name": "Gynec Couch Deluxe Bed",
    "tagline": "High quality medical Gynec Couch Deluxe Bed designed for clinical & hospital use.",
    "category": "Hospital Beds",
    "description": "Premium hospital-grade Gynec Couch Deluxe Bed engineered for durability and patient care.",
    "fullDescription": "Sri Mathurams Gynec Couch Deluxe Bed is manufactured with high grade steel, ergonomic design, and anti-bacterial coating.",
    "image": "/images/Product Assets/Beds/Gynec-Couch-Deluxe-Bed.webp",
    "gallery": [
      "/images/Product Assets/Beds/Gynec-Couch-Deluxe-Bed.webp"
    ],
    "materialDetails": "High-Grade ERW Steel with Anti-Bacterial Epoxy Powder Coating.",
    "availableSizes": "Standard Hospital Grade Specifications",
    "specifications": [
      {
        "label": "Material",
        "value": "Heavy Duty Steel / ABS"
      },
      {
        "label": "Finish",
        "value": "Anti-Corrosive Powder Coating"
      },
      {
        "label": "Quality Standard",
        "value": "ISO 9001 Certified"
      }
    ],
    "features": [
      "Heavy-duty durable construction",
      "Easy to sanitize anti-bacterial finish",
      "Smooth movement castors"
    ],
    "applications": [
      "Hospitals",
      "Clinics",
      "Nursing Homes"
    ],
    "featured": false
  },
  {
    "id": "prod-49",
    "slug": "hospital-electric-bed",
    "name": "Hospital Electric Bed",
    "tagline": "High quality medical Hospital Electric Bed designed for clinical & hospital use.",
    "category": "Hospital Beds",
    "description": "Premium hospital-grade Hospital Electric Bed engineered for durability and patient care.",
    "fullDescription": "Sri Mathurams Hospital Electric Bed is manufactured with high grade steel, ergonomic design, and anti-bacterial coating.",
    "image": "/images/Product Assets/Beds/Hospital-Electric-Bed.webp",
    "gallery": [
      "/images/Product Assets/Beds/Hospital-Electric-Bed.webp"
    ],
    "materialDetails": "High-Grade ERW Steel with Anti-Bacterial Epoxy Powder Coating.",
    "availableSizes": "Standard Hospital Grade Specifications",
    "specifications": [
      {
        "label": "Material",
        "value": "Heavy Duty Steel / ABS"
      },
      {
        "label": "Finish",
        "value": "Anti-Corrosive Powder Coating"
      },
      {
        "label": "Quality Standard",
        "value": "ISO 9001 Certified"
      }
    ],
    "features": [
      "Heavy-duty durable construction",
      "Easy to sanitize anti-bacterial finish",
      "Smooth movement castors"
    ],
    "applications": [
      "Hospitals",
      "Clinics",
      "Nursing Homes"
    ],
    "featured": false
  },
  {
    "id": "prod-50",
    "slug": "hospital-examination-couch-bed",
    "name": "Hospital Examination Couch Bed",
    "tagline": "High quality medical Hospital Examination Couch Bed designed for clinical & hospital use.",
    "category": "Hospital Beds",
    "description": "Premium hospital-grade Hospital Examination Couch Bed engineered for durability and patient care.",
    "fullDescription": "Sri Mathurams Hospital Examination Couch Bed is manufactured with high grade steel, ergonomic design, and anti-bacterial coating.",
    "image": "/images/Product Assets/Beds/Hospital-Examination-Couch-Bed.webp",
    "gallery": [
      "/images/Product Assets/Beds/Hospital-Examination-Couch-Bed.webp"
    ],
    "materialDetails": "High-Grade ERW Steel with Anti-Bacterial Epoxy Powder Coating.",
    "availableSizes": "Standard Hospital Grade Specifications",
    "specifications": [
      {
        "label": "Material",
        "value": "Heavy Duty Steel / ABS"
      },
      {
        "label": "Finish",
        "value": "Anti-Corrosive Powder Coating"
      },
      {
        "label": "Quality Standard",
        "value": "ISO 9001 Certified"
      }
    ],
    "features": [
      "Heavy-duty durable construction",
      "Easy to sanitize anti-bacterial finish",
      "Smooth movement castors"
    ],
    "applications": [
      "Hospitals",
      "Clinics",
      "Nursing Homes"
    ],
    "featured": false
  },
  {
    "id": "prod-51",
    "slug": "hospital-fowler-cot-bed",
    "name": "Hospital Fowler Cot Bed",
    "tagline": "High quality medical Hospital Fowler Cot Bed designed for clinical & hospital use.",
    "category": "Hospital Beds",
    "description": "Premium hospital-grade Hospital Fowler Cot Bed engineered for durability and patient care.",
    "fullDescription": "Sri Mathurams Hospital Fowler Cot Bed is manufactured with high grade steel, ergonomic design, and anti-bacterial coating.",
    "image": "/images/Product Assets/Beds/Hospital-Fowler-Cot-Bed.webp",
    "gallery": [
      "/images/Product Assets/Beds/Hospital-Fowler-Cot-Bed.webp"
    ],
    "materialDetails": "High-Grade ERW Steel with Anti-Bacterial Epoxy Powder Coating.",
    "availableSizes": "Standard Hospital Grade Specifications",
    "specifications": [
      {
        "label": "Material",
        "value": "Heavy Duty Steel / ABS"
      },
      {
        "label": "Finish",
        "value": "Anti-Corrosive Powder Coating"
      },
      {
        "label": "Quality Standard",
        "value": "ISO 9001 Certified"
      }
    ],
    "features": [
      "Heavy-duty durable construction",
      "Easy to sanitize anti-bacterial finish",
      "Smooth movement castors"
    ],
    "applications": [
      "Hospitals",
      "Clinics",
      "Nursing Homes"
    ],
    "featured": false
  },
  {
    "id": "prod-52",
    "slug": "icu-cot-bed",
    "name": "ICU Cot Bed",
    "tagline": "High quality medical ICU Cot Bed designed for clinical & hospital use.",
    "category": "Hospital Beds",
    "description": "Premium hospital-grade ICU Cot Bed engineered for durability and patient care.",
    "fullDescription": "Sri Mathurams ICU Cot Bed is manufactured with high grade steel, ergonomic design, and anti-bacterial coating.",
    "image": "/images/Product Assets/Beds/ICU-Cot-Bed.webp",
    "gallery": [
      "/images/Product Assets/Beds/ICU-Cot-Bed.webp"
    ],
    "materialDetails": "High-Grade ERW Steel with Anti-Bacterial Epoxy Powder Coating.",
    "availableSizes": "Standard Hospital Grade Specifications",
    "specifications": [
      {
        "label": "Material",
        "value": "Heavy Duty Steel / ABS"
      },
      {
        "label": "Finish",
        "value": "Anti-Corrosive Powder Coating"
      },
      {
        "label": "Quality Standard",
        "value": "ISO 9001 Certified"
      }
    ],
    "features": [
      "Heavy-duty durable construction",
      "Easy to sanitize anti-bacterial finish",
      "Smooth movement castors"
    ],
    "applications": [
      "Hospitals",
      "Clinics",
      "Nursing Homes"
    ],
    "featured": false
  },
  {
    "id": "prod-53",
    "slug": "icu-cot-low-bed",
    "name": "ICU Cot Low Bed",
    "tagline": "High quality medical ICU Cot Low Bed designed for clinical & hospital use.",
    "category": "Hospital Beds",
    "description": "Premium hospital-grade ICU Cot Low Bed engineered for durability and patient care.",
    "fullDescription": "Sri Mathurams ICU Cot Low Bed is manufactured with high grade steel, ergonomic design, and anti-bacterial coating.",
    "image": "/images/Product Assets/Beds/ICU-Cot-Low-Bed.webp",
    "gallery": [
      "/images/Product Assets/Beds/ICU-Cot-Low-Bed.webp"
    ],
    "materialDetails": "High-Grade ERW Steel with Anti-Bacterial Epoxy Powder Coating.",
    "availableSizes": "Standard Hospital Grade Specifications",
    "specifications": [
      {
        "label": "Material",
        "value": "Heavy Duty Steel / ABS"
      },
      {
        "label": "Finish",
        "value": "Anti-Corrosive Powder Coating"
      },
      {
        "label": "Quality Standard",
        "value": "ISO 9001 Certified"
      }
    ],
    "features": [
      "Heavy-duty durable construction",
      "Easy to sanitize anti-bacterial finish",
      "Smooth movement castors"
    ],
    "applications": [
      "Hospitals",
      "Clinics",
      "Nursing Homes"
    ],
    "featured": false
  },
  {
    "id": "prod-54",
    "slug": "labour-table-hydraulic-bed",
    "name": "Labour Table Hydraulic Bed",
    "tagline": "High quality medical Labour Table Hydraulic Bed designed for clinical & hospital use.",
    "category": "Hospital Beds",
    "description": "Premium hospital-grade Labour Table Hydraulic Bed engineered for durability and patient care.",
    "fullDescription": "Sri Mathurams Labour Table Hydraulic Bed is manufactured with high grade steel, ergonomic design, and anti-bacterial coating.",
    "image": "/images/Product Assets/Beds/Labour-Table-Hydraulic-Bed.webp",
    "gallery": [
      "/images/Product Assets/Beds/Labour-Table-Hydraulic-Bed.webp"
    ],
    "materialDetails": "High-Grade ERW Steel with Anti-Bacterial Epoxy Powder Coating.",
    "availableSizes": "Standard Hospital Grade Specifications",
    "specifications": [
      {
        "label": "Material",
        "value": "Heavy Duty Steel / ABS"
      },
      {
        "label": "Finish",
        "value": "Anti-Corrosive Powder Coating"
      },
      {
        "label": "Quality Standard",
        "value": "ISO 9001 Certified"
      }
    ],
    "features": [
      "Heavy-duty durable construction",
      "Easy to sanitize anti-bacterial finish",
      "Smooth movement castors"
    ],
    "applications": [
      "Hospitals",
      "Clinics",
      "Nursing Homes"
    ],
    "featured": false
  },
  {
    "id": "prod-55",
    "slug": "over-bed-table",
    "name": "Over Bed Table",
    "tagline": "High quality medical Over Bed Table designed for clinical & hospital use.",
    "category": "Hospital Beds",
    "description": "Premium hospital-grade Over Bed Table engineered for durability and patient care.",
    "fullDescription": "Sri Mathurams Over Bed Table is manufactured with high grade steel, ergonomic design, and anti-bacterial coating.",
    "image": "/images/Product Assets/Beds/Over-Bed-Table.webp",
    "gallery": [
      "/images/Product Assets/Beds/Over-Bed-Table.webp"
    ],
    "materialDetails": "High-Grade ERW Steel with Anti-Bacterial Epoxy Powder Coating.",
    "availableSizes": "Standard Hospital Grade Specifications",
    "specifications": [
      {
        "label": "Material",
        "value": "Heavy Duty Steel / ABS"
      },
      {
        "label": "Finish",
        "value": "Anti-Corrosive Powder Coating"
      },
      {
        "label": "Quality Standard",
        "value": "ISO 9001 Certified"
      }
    ],
    "features": [
      "Heavy-duty durable construction",
      "Easy to sanitize anti-bacterial finish",
      "Smooth movement castors"
    ],
    "applications": [
      "Hospitals",
      "Clinics",
      "Nursing Homes"
    ],
    "featured": false
  },
  {
    "id": "prod-56",
    "slug": "plain-examination-bed",
    "name": "Plain Examination Bed",
    "tagline": "High quality medical Plain Examination Bed designed for clinical & hospital use.",
    "category": "Hospital Beds",
    "description": "Premium hospital-grade Plain Examination Bed engineered for durability and patient care.",
    "fullDescription": "Sri Mathurams Plain Examination Bed is manufactured with high grade steel, ergonomic design, and anti-bacterial coating.",
    "image": "/images/Product Assets/Beds/Plain-Examination-Bed.webp",
    "gallery": [
      "/images/Product Assets/Beds/Plain-Examination-Bed.webp"
    ],
    "materialDetails": "High-Grade ERW Steel with Anti-Bacterial Epoxy Powder Coating.",
    "availableSizes": "Standard Hospital Grade Specifications",
    "specifications": [
      {
        "label": "Material",
        "value": "Heavy Duty Steel / ABS"
      },
      {
        "label": "Finish",
        "value": "Anti-Corrosive Powder Coating"
      },
      {
        "label": "Quality Standard",
        "value": "ISO 9001 Certified"
      }
    ],
    "features": [
      "Heavy-duty durable construction",
      "Easy to sanitize anti-bacterial finish",
      "Smooth movement castors"
    ],
    "applications": [
      "Hospitals",
      "Clinics",
      "Nursing Homes"
    ],
    "featured": false
  },
  {
    "id": "prod-57",
    "slug": "remote-examination-bed",
    "name": "Remote Examination Bed",
    "tagline": "High quality medical Remote Examination Bed designed for clinical & hospital use.",
    "category": "Hospital Beds",
    "description": "Premium hospital-grade Remote Examination Bed engineered for durability and patient care.",
    "fullDescription": "Sri Mathurams Remote Examination Bed is manufactured with high grade steel, ergonomic design, and anti-bacterial coating.",
    "image": "/images/Product Assets/Beds/Remote-Examination-Bed.webp",
    "gallery": [
      "/images/Product Assets/Beds/Remote-Examination-Bed.webp"
    ],
    "materialDetails": "High-Grade ERW Steel with Anti-Bacterial Epoxy Powder Coating.",
    "availableSizes": "Standard Hospital Grade Specifications",
    "specifications": [
      {
        "label": "Material",
        "value": "Heavy Duty Steel / ABS"
      },
      {
        "label": "Finish",
        "value": "Anti-Corrosive Powder Coating"
      },
      {
        "label": "Quality Standard",
        "value": "ISO 9001 Certified"
      }
    ],
    "features": [
      "Heavy-duty durable construction",
      "Easy to sanitize anti-bacterial finish",
      "Smooth movement castors"
    ],
    "applications": [
      "Hospitals",
      "Clinics",
      "Nursing Homes"
    ],
    "featured": false
  },
  {
    "id": "prod-58",
    "slug": "remote-gynec-table-bed",
    "name": "Remote Gynec Table Bed",
    "tagline": "High quality medical Remote Gynec Table Bed designed for clinical & hospital use.",
    "category": "Hospital Beds",
    "description": "Premium hospital-grade Remote Gynec Table Bed engineered for durability and patient care.",
    "fullDescription": "Sri Mathurams Remote Gynec Table Bed is manufactured with high grade steel, ergonomic design, and anti-bacterial coating.",
    "image": "/images/Product Assets/Beds/Remote-Gynec-Table-Bed.webp",
    "gallery": [
      "/images/Product Assets/Beds/Remote-Gynec-Table-Bed.webp"
    ],
    "materialDetails": "High-Grade ERW Steel with Anti-Bacterial Epoxy Powder Coating.",
    "availableSizes": "Standard Hospital Grade Specifications",
    "specifications": [
      {
        "label": "Material",
        "value": "Heavy Duty Steel / ABS"
      },
      {
        "label": "Finish",
        "value": "Anti-Corrosive Powder Coating"
      },
      {
        "label": "Quality Standard",
        "value": "ISO 9001 Certified"
      }
    ],
    "features": [
      "Heavy-duty durable construction",
      "Easy to sanitize anti-bacterial finish",
      "Smooth movement castors"
    ],
    "applications": [
      "Hospitals",
      "Clinics",
      "Nursing Homes"
    ],
    "featured": false
  },
  {
    "id": "prod-59",
    "slug": "remote-icu-cot-low-bed",
    "name": "Remote ICU Cot Low Bed",
    "tagline": "High quality medical Remote ICU Cot Low Bed designed for clinical & hospital use.",
    "category": "Hospital Beds",
    "description": "Premium hospital-grade Remote ICU Cot Low Bed engineered for durability and patient care.",
    "fullDescription": "Sri Mathurams Remote ICU Cot Low Bed is manufactured with high grade steel, ergonomic design, and anti-bacterial coating.",
    "image": "/images/Product Assets/Beds/Remote-ICU-Cot-Low-Bed.webp",
    "gallery": [
      "/images/Product Assets/Beds/Remote-ICU-Cot-Low-Bed.webp"
    ],
    "materialDetails": "High-Grade ERW Steel with Anti-Bacterial Epoxy Powder Coating.",
    "availableSizes": "Standard Hospital Grade Specifications",
    "specifications": [
      {
        "label": "Material",
        "value": "Heavy Duty Steel / ABS"
      },
      {
        "label": "Finish",
        "value": "Anti-Corrosive Powder Coating"
      },
      {
        "label": "Quality Standard",
        "value": "ISO 9001 Certified"
      }
    ],
    "features": [
      "Heavy-duty durable construction",
      "Easy to sanitize anti-bacterial finish",
      "Smooth movement castors"
    ],
    "applications": [
      "Hospitals",
      "Clinics",
      "Nursing Homes"
    ],
    "featured": false
  },
  {
    "id": "prod-60",
    "slug": "rmmote-icu-cot-bed",
    "name": "Rmmote Icu Cot Bed",
    "tagline": "High quality medical Rmmote Icu Cot Bed designed for clinical & hospital use.",
    "category": "Hospital Beds",
    "description": "Premium hospital-grade Rmmote Icu Cot Bed engineered for durability and patient care.",
    "fullDescription": "Sri Mathurams Rmmote Icu Cot Bed is manufactured with high grade steel, ergonomic design, and anti-bacterial coating.",
    "image": "/images/Product Assets/Beds/Rmmote-Icu-Cot-Bed.webp",
    "gallery": [
      "/images/Product Assets/Beds/Rmmote-Icu-Cot-Bed.webp"
    ],
    "materialDetails": "High-Grade ERW Steel with Anti-Bacterial Epoxy Powder Coating.",
    "availableSizes": "Standard Hospital Grade Specifications",
    "specifications": [
      {
        "label": "Material",
        "value": "Heavy Duty Steel / ABS"
      },
      {
        "label": "Finish",
        "value": "Anti-Corrosive Powder Coating"
      },
      {
        "label": "Quality Standard",
        "value": "ISO 9001 Certified"
      }
    ],
    "features": [
      "Heavy-duty durable construction",
      "Easy to sanitize anti-bacterial finish",
      "Smooth movement castors"
    ],
    "applications": [
      "Hospitals",
      "Clinics",
      "Nursing Homes"
    ],
    "featured": false
  },
  {
    "id": "prod-61",
    "slug": "semi-fowler-cot-bed",
    "name": "Semi Fowler Cot Bed",
    "tagline": "High quality medical Semi Fowler Cot Bed designed for clinical & hospital use.",
    "category": "Hospital Beds",
    "description": "Premium hospital-grade Semi Fowler Cot Bed engineered for durability and patient care.",
    "fullDescription": "Sri Mathurams Semi Fowler Cot Bed is manufactured with high grade steel, ergonomic design, and anti-bacterial coating.",
    "image": "/images/Product Assets/Beds/Semi-Fowler-Cot-Bed.webp",
    "gallery": [
      "/images/Product Assets/Beds/Semi-Fowler-Cot-Bed.webp"
    ],
    "materialDetails": "High-Grade ERW Steel with Anti-Bacterial Epoxy Powder Coating.",
    "availableSizes": "Standard Hospital Grade Specifications",
    "specifications": [
      {
        "label": "Material",
        "value": "Heavy Duty Steel / ABS"
      },
      {
        "label": "Finish",
        "value": "Anti-Corrosive Powder Coating"
      },
      {
        "label": "Quality Standard",
        "value": "ISO 9001 Certified"
      }
    ],
    "features": [
      "Heavy-duty durable construction",
      "Easy to sanitize anti-bacterial finish",
      "Smooth movement castors"
    ],
    "applications": [
      "Hospitals",
      "Clinics",
      "Nursing Homes"
    ],
    "featured": false
  },
  {
    "id": "prod-62",
    "slug": "two-tier-cot-bed",
    "name": "Two Tier Cot Bed",
    "tagline": "High quality medical Two Tier Cot Bed designed for clinical & hospital use.",
    "category": "Hospital Beds",
    "description": "Premium hospital-grade Two Tier Cot Bed engineered for durability and patient care.",
    "fullDescription": "Sri Mathurams Two Tier Cot Bed is manufactured with high grade steel, ergonomic design, and anti-bacterial coating.",
    "image": "/images/Product Assets/Beds/Two-Tier-Cot-Bed.webp",
    "gallery": [
      "/images/Product Assets/Beds/Two-Tier-Cot-Bed.webp"
    ],
    "materialDetails": "High-Grade ERW Steel with Anti-Bacterial Epoxy Powder Coating.",
    "availableSizes": "Standard Hospital Grade Specifications",
    "specifications": [
      {
        "label": "Material",
        "value": "Heavy Duty Steel / ABS"
      },
      {
        "label": "Finish",
        "value": "Anti-Corrosive Powder Coating"
      },
      {
        "label": "Quality Standard",
        "value": "ISO 9001 Certified"
      }
    ],
    "features": [
      "Heavy-duty durable construction",
      "Easy to sanitize anti-bacterial finish",
      "Smooth movement castors"
    ],
    "applications": [
      "Hospitals",
      "Clinics",
      "Nursing Homes"
    ],
    "featured": false
  }
];

export const TIMELINE_EVENTS = [
  {
    year: '1997',
    title: 'Company Foundation',
    description: 'Established in Peelamedu, Coimbatore as a specialized hospital furniture workshop.'
  },
  {
    year: '2005',
    title: 'ISO 9001 Certification',
    description: 'Achieved quality certification and expanded production facility to 10,000 sq. ft.'
  },
  {
    year: '2014',
    title: 'Automated Powder Coating Plant',
    description: 'Integrated 7-tank anti-bacterial epoxy coating & tube bending machinery.'
  },
  {
    year: '2024',
    title: 'Statewide Hospital Network',
    description: 'Supplying 500+ hospital projects across all 38 districts of Tamil Nadu.'
  }
];
