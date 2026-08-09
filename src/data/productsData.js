export const PRODUCT_CATEGORIES = [
  { id: 'all', name: 'All Export Offerings' },
  { id: 'beef', name: 'Prime Beef' },
  { id: 'lamb-mutton', name: 'Lamb & Mutton' },
  { id: 'meat', name: 'Specialty Meats' },
  { id: 'vegetables', name: 'Fresh Vegetables' },
  { id: 'fruits', name: 'Premium Fruits' },
];

export const PRODUCTS = [
  {
    id: 'beef-cuts-prime',
    category: 'beef',
    name: 'Prime Export Cut Beef',
    subtitle: 'Chilled & Frozen Vacuum-Sealed Whole & Retail Cuts',
    image: '/assets/beef_export.jpg',
    description: 'Premium quality beef sourced from pasture-raised, grass-fed and grain-finished cattle. Handled under stringent HACCP and cold-chain temperature control for international distribution.',
    specs: [
      { label: 'Temperature', value: '-18°C Frozen / 0°C - 2°C Chilled' },
      { label: 'Packaging', value: 'Multi-layer Vacuum Sealed & Master Carton' },
      { label: 'Shelf Life', value: '24 Months (Frozen) / 90 Days (Chilled)' },
      { label: 'Cut Specifications', value: 'Ribeye, Striploin, Tenderloin, Chuck Roll' }
    ],
    features: [
      'Strict cold-chain integrity from farm to port',
      'Traceable herd origin and sanitary clearance',
      'Customized weight grading and master box packaging',
      'Compliant with international food import standards'
    ]
  },
  {
    id: 'lamb-mutton-premium',
    category: 'lamb-mutton',
    name: 'Premium Lamb & Mutton',
    subtitle: 'Chilled Loin, Rack & Carcass Cuts',
    image: '/assets/lamb_mutton.jpg',
    description: 'Select tender lamb racks, loins, leg cuts, and mutton carcasses. Specially processed to maintain optimal freshness, texture, and export-grade presentation.',
    specs: [
      { label: 'Temperature', value: '-18°C Frozen / -1.5°C Chilled' },
      { label: 'Packaging', value: 'IVP (Individual Vacuum Pack) & Poly-lined Cartons' },
      { label: 'Shelf Life', value: '24 Months (Frozen)' },
      { label: 'Cuts Available', value: '6-Rib Rack, Saddle, Boneless Leg, Carcass' }
    ],
    features: [
      'Sourced from grass-fed mountain pastures',
      'Strict quality grading by certified inspectors',
      'Zero chemical additive processing',
      'Custom B2B cut portioning for commercial distributors'
    ]
  },
  {
    id: 'specialty-meat-assortment',
    category: 'meat',
    name: 'Assorted Specialty Meats',
    subtitle: 'Industrial & Foodservice Bulk Supply',
    image: '/assets/meat_cuts.jpg',
    description: 'Comprehensive wholesale meat selections tailored for hotel chains, institutional caterers, and food processing plants worldwide.',
    specs: [
      { label: 'Temperature', value: '-18°C Deep Frozen' },
      { label: 'Packaging', value: 'Industrial Bulk Block / Poly Wrapped' },
      { label: 'Shelf Life', value: '18 - 24 Months' },
      { label: 'Supply Volume', value: 'Full Container Loads (FCL 20ft / 40ft Reefer)' }
    ],
    features: [
      'High operational consistency across large shipments',
      'Palletized and containerized for sea freight efficiency',
      'Full shipping documentation & health certificates included',
      'Flexible contract schedules for annual supply agreements'
    ]
  },
  {
    id: 'farm-fresh-vegetables',
    category: 'vegetables',
    name: 'Farm-Fresh Vegetables',
    subtitle: 'Air & Sea Freight Fresh Produce',
    image: '/assets/vegetables_export.jpg',
    description: 'Harvested at peak freshness, pre-cooled immediately post-harvest, and packed in modified atmosphere packaging for global export.',
    specs: [
      { label: 'Temperature', value: '+2°C to +4°C Controlled Atmosphere' },
      { label: 'Packaging', value: 'Ventilated Export Cartons & RPC Crates' },
      { label: 'Shelf Life', value: '14 - 30 Days (Route dependent)' },
      { label: 'Varieties', value: 'Bell Peppers, Broccoli, Carrots, Onions, Garlic' }
    ],
    features: [
      'Strict residue monitoring & GAP compliance',
      'Hydro-cooled immediately after farm harvest',
      'Rapid air freight & temperature-controlled sea reefer shipping',
      'Minimum handling to preserve crisp texture & nutrients'
    ]
  },
  {
    id: 'premium-harvest-fruits',
    category: 'fruits',
    name: 'Selected Export Fruits',
    subtitle: 'Global Citrus, Apples, Berries & Tropical Selection',
    image: '/assets/fruits_export.jpg',
    description: 'High-grade fresh fruits sorted by size, color index, and Brix sweetness level. Exported with maximum care to maintain vineyard and orchard fresh flavor.',
    specs: [
      { label: 'Temperature', value: '+0.5°C to +6°C (Variety Specific)' },
      { label: 'Packaging', value: 'Telescopic Fiberboard Box with Sock/Tray Liner' },
      { label: 'Quality Standard', value: 'Extra Class / Class 1 Export Grade' },
      { label: 'Brix / Sugar Index', value: 'Calibrated for Optimal Ripeness' }
    ],
    features: [
      'Calibrated for uniform size and color',
      'Brix level verified prior to container loading',
      'Ethylene monitoring during transit',
      'Delivered directly to destination fresh markets & distribution hubs'
    ]
  }
];
