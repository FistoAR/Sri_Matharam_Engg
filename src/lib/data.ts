import { Product, Category } from '@/types';

export interface MedicalProduct extends Product {
  materialDetails: string;
  availableSizes?: string;
  relatedProductSlugs?: string[];
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
    id: 'electric-icu-bed',
    slug: 'electric-icu-bed',
    name: 'Multi-Function Electric ICU Bed',
    tagline: 'Advanced motorized ICU bed with Trendelenburg & cardiac chair positions.',
    category: 'Hospital Beds',
    description: 'Motorized ICU bed equipped with 4 quiet Linak actuators, ABS tuck-away side rails, and central braking system.',
    fullDescription: 'Sri Mathurams Electric ICU Bed is engineered specifically for critical care patient monitoring. Built from high-grade ERW steel tubes treated with anti-bacterial epoxy powder coating, this bed features motorized backrest, knee-rest, height adjustment, and Trendelenburg/Reverse Trendelenburg positioning controlled via patient remote & nurse control panel.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80',
    ],
    materialDetails: 'High-grade ERW Tubular Steel Frame with Molded ABS Head & Foot Boards and ABS Collapsible Side Rails.',
    availableSizes: 'Overall Dim: 2180mm L x 1020mm W x 500-750mm H (Adjustable)',
    specifications: [
      { label: 'Actuators', value: '4 Motorized Heavy-Duty Actuators' },
      { label: 'Safe Working Load', value: '250 kg' },
      { label: 'Castors', value: '125mm Dia Central Braking Castors' },
      { label: 'Finish', value: '7-Tank Processed Anti-Bacterial Epoxy Powder Coating' },
      { label: 'Positions', value: 'Backrest (0-75°), Kneerest (0-45°), Trendelenburg (±12°)' },
    ],
    features: [
      'Nurse Control Panel with lock-out safety function',
      'CPR quick release handle for emergency resuscitation',
      'Molded ABS head and foot boards easily removable',
      'Integrated IV pole sockets at all 4 corners'
    ],
    applications: [
      'Intensive Care Units (ICU)',
      'High Dependency Units (HDU)',
      'Specialized Cardiac Surgery Recovery Wards'
    ],
    relatedProductSlugs: ['bedside-locker', 'overbed-table', 'iv-stand-ss'],
    featured: true,
  },
  {
    id: 'hydraulic-emergency-stretcher',
    slug: 'hydraulic-emergency-stretcher',
    name: 'Hydraulic Emergency Patient Transfer Stretcher',
    tagline: 'Smooth hydraulic height adjustment with X-ray translucent top.',
    category: 'Stretchers',
    description: 'Heavy-duty patient transfer stretcher trolley with dual hydraulic foot pumps, direction locking castors, and drop-down side rails.',
    fullDescription: 'Designed for fast-paced emergency trauma wards, our Hydraulic Emergency Stretcher allows seamless patient transport and quick X-ray imaging without transferring the patient off the trolley.',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80'
    ],
    materialDetails: 'Heavy-duty steel frame with radiolucent Bakelite X-ray mattress deck and full stainless steel side safety guards.',
    availableSizes: '2100mm L x 750mm W x 580-900mm H',
    specifications: [
      { label: 'Height Adjustment', value: 'Hydraulic Foot Pump System (580 to 900mm)' },
      { label: 'Backrest Adjustment', value: 'Gas-Spring Assisted (0 to 80°)' },
      { label: 'Braking System', value: 'Central Locking Castors with 5th Wheel Steering' },
      { label: 'Weight Capacity', value: '200 kg' }
    ],
    features: [
      'Full length radiolucent X-ray cassette deck',
      'Collapsible stainless steel safety side rails',
      'Oxygen cylinder holder and utility tray underneath',
      'Telescopic height adjustable IV pole included'
    ],
    applications: [
      'Emergency & Trauma Care Units',
      'Post-Operative Recovery Rooms',
      'Ambulance Patient Reception Areas'
    ],
    relatedProductSlugs: ['electric-icu-bed', 'emergency-crash-cart'],
    featured: true,
  },
  {
    id: 'emergency-crash-cart',
    slug: 'emergency-crash-cart',
    name: 'Modular Resuscitation Emergency Crash Cart',
    tagline: 'Quick-access color coded drawers for life-saving resuscitation medicines.',
    category: 'Medical Trolleys',
    description: 'Premium stainless steel and ABS crash cart featuring central breakaway seal lock, cardiac defibrillator shelf, and oxygen tank holder.',
    fullDescription: 'Built to meet international emergency resuscitation protocols, the Sri Mathurams Emergency Crash Cart ensures immediate access to life-saving drugs and equipment during cardiac emergencies.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80'
    ],
    materialDetails: 'High-grade 304 Stainless Steel frame with impact-resistant molded ABS modular drawers.',
    availableSizes: '750mm L x 480mm W x 960mm H',
    specifications: [
      { label: 'Drawer Configuration', value: '5 Color-Coded Drawers with Dividers' },
      { label: 'Locking Mechanism', value: 'Central Keyed Lock & Breakaway Security Seals' },
      { label: 'Accessories', value: 'Defibrillator Shelf, CPR Board, IV Pole, Dust Bins' },
      { label: 'Wheel Base', value: '100mm Swivel Castors (2 with Brakes)' }
    ],
    features: [
      'Swiveling defibrillator tray mounted at eye level',
      'Extendable sliding writing flap for nurse documentation',
      'Transparent medicine drawer dividers for easy inventory',
      'Integrated IV pole and CPR Cardiac Board'
    ],
    applications: [
      'ICU & Operation Theatres',
      'Emergency Wards & Cardiac Clinics',
      'General Hospital Wards'
    ],
    relatedProductSlugs: ['electric-icu-bed', 'hydraulic-emergency-stretcher'],
    featured: true,
  },
  {
    id: 'blood-donor-chair',
    slug: 'blood-donor-chair',
    name: 'Motorized Blood Donor Recliner Chair',
    tagline: 'Ergonomic plush recliner with smooth motorized head-down positioning.',
    category: 'Donor Chairs',
    description: 'Motorized blood collection donor chair with adjustable padded armrests, vasovagal shock position control, and stain-resistant upholstery.',
    fullDescription: 'Specifically engineered for blood banks and apheresis centers, our donor recliner provides maximum comfort during donation and instant motorized head-down tilt in case of fainting or donor distress.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80'
    ],
    materialDetails: 'Heavy gauge steel frame with anti-microbial medical grade seamless leatherette cushioning.',
    availableSizes: 'Reclined: 1750mm L x 850mm W x 600mm H',
    specifications: [
      { label: 'Recline Control', value: 'Dual Linear Actuator Motorized Remote' },
      { label: 'Upholstery', value: 'Stain-Resistant Fire Retardant Medical Vinyl' },
      { label: 'Armrests', value: 'Multi-Directional Height & Angle Adjustable' },
      { label: 'Load Capacity', value: '180 kg' }
    ],
    features: [
      'Vasovagal syncope shock tilt position controlled via hand remote',
      'Dual wide padded arm supports for blood sampling',
      'Seamless smooth leatherette easy to disinfect',
      'Heavy sturdy base preventing tipping during entry/exit'
    ],
    applications: [
      'Hospital Blood Banks',
      'Voluntary Blood Donation Camps',
      'Dialysis & Infusion Therapy Centers'
    ],
    relatedProductSlugs: ['iv-stand-ss', 'bedside-locker'],
    featured: false,
  },
  {
    id: 'surgical-scrub-sink',
    slug: 'surgical-scrub-sink',
    name: 'Stainless Steel Hands-Free OT Scrub Sink',
    tagline: 'Sensor-operated & knee-touch 304 grade stainless steel scrub station.',
    category: 'Surgical Sinks',
    description: 'Single and multi-bay surgical OT scrub station sink with infrared sensor faucets, thermostatic water mixing valves, and digital timer displays.',
    fullDescription: 'Our Surgical Scrub Stations are designed to maintain highest sterile conditions outside Operation Theatres. Built entirely from heavy gauge 304 grade stainless steel with seamless rounded inner corners.',
    image: 'https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&w=1200&q=80'
    ],
    materialDetails: '1.5mm thick Satin Finish 304 Grade Stainless Steel construction.',
    availableSizes: 'Single Bay: 800mm W | Double Bay: 1500mm W | Triple Bay: 2100mm W',
    specifications: [
      { label: 'Operation Type', value: 'Infrared Automatic Sensor / Knee Push Panel' },
      { label: 'Water Heater', value: 'Integrated Thermostatic Temperature Controller' },
      { label: 'Soap Dispenser', value: 'Automatic Sensor Operated Liquid Soap Pump' },
      { label: 'Drainage', value: 'Deep Sloped Deep Sink Basin to Prevent Water Splashing' }
    ],
    features: [
      'Digital LED scrub timer display for standard 3-minute hand scrub',
      'Deep trough design prevents water splash onto surgical gowns',
      'Built-in inline water filtration unit option',
      'Heavy duty wall-mounting brackets included'
    ],
    applications: [
      'Operation Theatre Scrub Rooms',
      'Sterile Processing Departments (CSSD)',
      'High Level Cleanrooms & Laboratories'
    ],
    relatedProductSlugs: ['emergency-crash-cart', 'iv-stand-ss'],
    featured: false,
  },
  {
    id: 'iv-stand-ss',
    slug: 'iv-stand-ss',
    name: 'Heavy Base Stainless Steel IV Stand',
    tagline: 'Stable 5-castor weighted base with smooth spring-assisted height adjustment.',
    category: 'IV Stands',
    description: 'Corrosion-resistant stainless steel IV infusion pole featuring 4 stainless steel hooks, weighted cast iron heavy base, and non-marking castors.',
    fullDescription: 'Designed to prevent accidental tipping when carrying multiple infusion pumps and IV bags, the Sri Mathurams IV Stand features a low center of gravity weighted base.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80'
    ],
    materialDetails: '304 Grade Stainless Steel Pipe with Cast Iron Heavy Base Enclosure.',
    availableSizes: 'Height Adjustable: 1350mm to 2350mm',
    specifications: [
      { label: 'Hooks', value: '4 Stainless Steel Rams-Horn Hooks' },
      { label: 'Base', value: '5-Star Heavy Duty Cast Iron Base with Polyurethane Cover' },
      { label: 'Castors', value: '50mm Twin Wheel Swivel Castors' },
      { label: 'Max Load per Hook', value: '5 kg' }
    ],
    features: [
      'One-touch screw lock height adjustment mechanism',
      'Low center of gravity prevents tipping during patient walking',
      'Smooth non-marking silent castors',
      'Compatible with IV infusion pump mounting clamps'
    ],
    applications: [
      'General Hospital Wards',
      'ICU & Post-Op Recovery',
      'Chemotherapy & Infusion Clinics'
    ],
    relatedProductSlugs: ['electric-icu-bed', 'bedside-locker'],
    featured: false,
  },
  {
    id: 'bedside-locker',
    slug: 'bedside-locker',
    name: 'Premium ABS Bedside Patient Locker',
    tagline: 'Durable anti-corrosive bedside locker with concealed drawer & towel rail.',
    category: 'Hospital Furniture',
    description: 'High-impact molded ABS bedside cabinet featuring top slide-out dining tray, utensil drawer, lower cupboard, and side towel hooks.',
    fullDescription: 'Essential for patient room convenience, our ABS Bedside Locker offers easy-to-clean hygienic surfaces, smooth silent drawer rollers, and built-in shoes shelf.',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80'
    ],
    materialDetails: 'High-Impact ABS Plastic Body with Steel Internal Reinforcements.',
    availableSizes: '480mm L x 480mm W x 860mm H',
    specifications: [
      { label: 'Compartments', value: 'Top Tray, 1 Drawer, 1 Lower Storage Cupboard' },
      { label: 'Features', value: 'Hideaway Side Towel Rack & Shoe Shelf Base' },
      { label: 'Castors', value: '50mm Swivel Wheels (2 Brakes)' },
      { label: 'Color', value: 'Medical Light Blue / Cream White' }
    ],
    features: [
      'Rust-proof 100% washable ABS construction',
      'Concealed slide-out dining tray extension',
      'Rounded safe corners preventing patient injury',
      'Side hooks for hanging water bottles or towels'
    ],
    applications: [
      'Private Patient Rooms & Deluxe Wards',
      'General Patient Wards',
      'Nursing Homes & Rehab Centers'
    ],
    relatedProductSlugs: ['electric-icu-bed', 'overbed-table'],
    featured: false,
  },
  {
    id: 'overbed-table',
    slug: 'overbed-table',
    name: 'Pneumatic Height Adjustable Overbed Table',
    tagline: 'Smooth gas-spring lift mechanism for easy patient dining & reading.',
    category: 'Hospital Furniture',
    description: 'Laminated wooden top overbed table with low-profile U-base designed to slide seamlessly under hospital beds.',
    fullDescription: 'Provides maximum convenience for bedridden patients during meals or reading. Features smooth gas-spring assisted height adjustment controlled with a single lift lever.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80'
    ],
    materialDetails: 'Membrane pressed wooden top with raised edges and powder-coated steel tubular base frame.',
    availableSizes: 'Top Deck: 820mm L x 420mm W | Height: 720-1050mm',
    specifications: [
      { label: 'Height Adjustment', value: 'Pneumatic Gas Spring Lever (720 to 1050mm)' },
      { label: 'Top Surface', value: 'Waterproof Membrane Laminated Board with Spill Guard' },
      { label: 'Base Design', value: 'Low Profile U-Shape Base with 50mm Castors' },
      { label: 'Load Rating', value: '25 kg' }
    ],
    features: [
      'Raised wooden deck rim prevents liquid spills onto bed linen',
      'Low profile base easily fits under low ICU beds',
      'Gas spring mechanism allows one-handed upward adjustment',
      'Smooth easy-to-disinfect laminated finish'
    ],
    applications: [
      'Hospital Inpatient Wards',
      'ICU Recovery Bays',
      'Home Healthcare & Elderly Care'
    ],
    relatedProductSlugs: ['electric-icu-bed', 'bedside-locker'],
    featured: false,
  }
];

export const TIMELINE_EVENTS = [
  {
    year: '1997',
    title: 'Founded in Coimbatore',
    description: 'Established Sri Mathurams Medical Engineering in Peelamedu, Coimbatore as a specialized hospital furniture workshop.'
  },
  {
    year: '2005',
    title: 'Manufacturing Unit Expansion',
    description: 'Upgraded to a 25,000 sq. ft. modern manufacturing facility with automated tube bending, hydraulic presses, and powder coating lines.'
  },
  {
    year: '2014',
    title: 'Product Line Diversification',
    description: 'Introduced electric ICU beds, motorized donor recliners, and stainless steel surgical scrub stations to our catalogue.'
  },
  {
    year: 'Present',
    title: 'Trusted Partner across Tamil Nadu',
    description: 'Supplied over 500+ hospital projects, 100+ medical equipment SKUs, and served 1000+ satisfied healthcare institutions across Tamil Nadu.'
  }
];

export const WHY_CHOOSE_ITEMS = [
  {
    title: '25+ Years of Industry Experience',
    desc: 'Deep domain expertise in medical engineering standards since 1997.'
  },
  {
    title: 'Quality Manufacturing',
    desc: 'High-grade ERW steel, 304 stainless steel, and anti-bacterial epoxy coating.'
  },
  {
    title: 'ISO Certified Products',
    desc: 'Manufactured adhering to ISO 9001:2015 and medical device quality standards.'
  },
  {
    title: 'Custom Hospital Solutions',
    desc: 'Tailored dimensions, color schemes, and accessories for hospital requirements.'
  },
  {
    title: 'Reliable After-Sales Support',
    desc: 'Dedicated technicians for prompt maintenance and spare parts availability.'
  },
  {
    title: 'Fast Delivery Across Tamil Nadu',
    desc: 'Direct factory transport ensuring safe and quick delivery to all districts.'
  }
];
