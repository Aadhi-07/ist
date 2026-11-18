export const SERVICES_LIST = [
  {
    id: 'high-pressure-water-jetting',
    title: 'High Pressure Water Jetting',
    tagline: 'Precision cleaning up to 45,000 PSI (3,100 bar)',
    shortDesc: 'Cleaning heat exchanger tubes, manless tube bundles, boiler tubes, pipework, tanks, underwater applications, and pre-commissioning.',
    heroImg: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
    overview: `High pressure and ultra-high pressure (UHP) water jetting is one of I.S.T.'s core competencies. Utilizing pressures ranging from 8,500 PSI to 45,000 PSI, we deliver powerful, non-destructive cleaning that strips severe scale, polymers, coke, hard deposits, and corrosion without damaging base metal substrates.`,
    applications: [
      'Heat Exchanger Tube Cleaning (Shell & Tube bundles, U-tubes)',
      'Manless Automated Tube Cleaning Systems (enhancing operator safety & uniform velocity)',
      'Boiler Waterwall & Superheater Tube Descaling',
      'Internal & External Process Pipework Cleaning & Flushing',
      'Crude Oil & Chemical Storage Tank Decontamination',
      'Marine Growth Removal from Vessel Hulls, Legs & Subsea Assets',
      'Pre-Commissioning Flushing of Newly Fabricated Lines'
    ],
    features: [
      { title: 'Pressures Up to 45,000 PSI', desc: 'Capable of removing the hardest vulcanized polymers, baked carbon, and metallic scale.' },
      { title: 'Automated Feeders', desc: 'Remote-controlled multi-lance feeding systems remove technicians from the high-pressure splash zone.' },
      { title: 'Zero Substrate Damage', desc: 'Pure water cleaning eliminates the mechanical gouging or wall thinning caused by drilling or reaming.' },
      { title: 'Environmental Integrity', desc: 'Uses fresh water without harsh chemical residues or hazardous disposal footprints.' }
    ]
  },
  {
    id: 'surface-preparation-coating',
    title: 'Surface Preparation & Protective Coating',
    tagline: 'Abrasive blasting, hydro-blasting, and industrial protective coatings',
    shortDesc: 'Comprehensive surface profiling and multi-layer coating systems for storage tanks, internal/external pipework, structural steel, and marine hulls.',
    heroImg: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
    overview: `Proper surface preparation is responsible for over 80% of coating longevity. I.S.T. provides comprehensive surface preparation techniques—including dry abrasive blasting (garnet, copper slag, steel grit), slurry blasting, and ultra-high pressure water jetting (WJ-1 / WJ-2 standards)—followed by precision application of marine and industrial protective coatings.`,
    applications: [
      'Storage Tank Internal Lining & External Shell Painting',
      'Process Piping & Spool Piece Surface Treatment',
      'Offshore Platform Topsides, Splash Zones & Flare Booms',
      'Shipyard Marine Vessel Hulls, Decks & Ballast Tanks',
      'Structural Steel Corrosion Protection in Chemical Complexes'
    ],
    features: [
      { title: 'SSPC & NACE Compliance', desc: 'Inspected by certified coating specialists to ensure surface profiles and wet/dry film thicknesses meet exact standards.' },
      { title: 'Dustless / Wet Blasting Options', desc: 'Mitigates dust clouds in operating plants where particulate contamination must be prevented.' },
      { title: 'Specialized Tank Linings', desc: 'Epoxy novolac, polyurethane, and vinyl ester linings resistant to aggressive hydrocarbons and acidic chemistries.' }
    ]
  },
  {
    id: 'cctv-inspection',
    title: 'Closed-Circuit Television (CCTV) Inspection',
    tagline: 'Remote optical visual inspection for inaccessible piping and vessels',
    shortDesc: 'High-definition optical surveys, internal process pipe inspection, boiler tube checks, and certified video reporting.',
    heroImg: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    overview: `I.S.T. provides state-of-the-art C.C.T.V. inspection systems to examine the internal condition of process pipelines, heat exchangers, boiler headers, and drainage networks without destructive disassembly. Equipped with pan-and-tilt zoom heads, distance encoders, and explosion-proof housings, our cameras deliver clear diagnostic imaging.`,
    applications: [
      'Process Pipeline Internal Condition Assessments',
      'Boiler Header & Steam Line Internal Inspection',
      'Verification of Post-Cleaning Cleanliness Standards',
      'Foreign Object Retrieval & Blockage Pinpointing',
      'Weld Root Inspection & Internal Corrosion Profiling'
    ],
    features: [
      { title: 'Tough Robotic Crawlers', desc: 'Motorized wheeled and tracked crawlers navigating lines from 4" up to 48" diameter.' },
      { title: 'Digital Video Recording & Reporting', desc: 'Time-stamped, distance-encoded HD footage with comprehensive engineering defect logs.' },
      { title: 'Explosion-Proof Ratings', desc: 'Certified for deployment in Zone 1 hazardous petroleum process environments.' }
    ]
  },
  {
    id: 'cold-cutting',
    title: 'Cold Cutting Systems',
    tagline: 'Spark-free abrasive water jet cutting for hazardous zones',
    shortDesc: 'Remote cold cutting of pipelines, concrete, tanks, and structural piles without hot-work permits or explosion risks.',
    heroImg: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    overview: `In active refineries, petrochemical facilities, and offshore hydrocarbon installations, traditional flame or torch cutting presents catastrophic ignition risks. I.S.T. utilizes the Jetcut cold cutting system—mixing ultra-high pressure water with garnet abrasive—to slice through steel, composite pipelines, reinforced concrete, and heavy casings with zero sparks or heat-affected zones.`,
    applications: [
      'Live Plant Pipeline Severing & Tie-In Prep',
      'Explosive Atmosphere Storage Tank Shell Removal',
      'Offshore Jacket Leg, Well Conductor & Pile Cutting',
      'Underwater / Subsea Structural Cutting down to 1,000m',
      'Reinforced Concrete Demolition & Slicing'
    ],
    features: [
      { title: '100% Spark-Free Operation', desc: 'No flame, heat, or volatile gas generation, eliminating expensive shutdowns and gas-freeing delays.' },
      { title: 'Precision Beveled Edges', desc: 'Cuts pipe with exact weld-ready bevel angles (30°, 37.5°, 45°), reducing subsequent machining time.' },
      { title: 'Remote Hydraulic Clamping', desc: 'Operators control cutting operations from safe stand-off distances.' }
    ]
  },
  {
    id: 'chemical-cleaning',
    title: 'Chemical Cleaning & Decontamination',
    tagline: 'Circulation cleaning, pickling, passivation, and pipeline pigging',
    shortDesc: 'Specialized chemical formulations, high-volume flushing, pipeline pigging, pressure testing, and dry air drying.',
    heroImg: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    overview: `For complex process loops, intricate cooling systems, and long-distance pipelines where mechanical tools cannot reach, chemical cleaning delivers thorough, uniform decontamination. I.S.T. designs bespoke chemical circuits to dissolve magnetite, scale, oils, and biofouling, followed by chemical passivation to prevent flash oxidation.`,
    applications: [
      'Pre-Commissioning Degreasing, Acid Pickling & Passivation',
      'Lube Oil Flushing to NAS / ISO Cleanliness Standards',
      'Long-Distance Pipeline Pigging (Batching, Dewatering, Gauging)',
      'Boiler Chemical Descaling & Neutralization',
      'Hydrostatic Pressure Testing & Nitrogen / Dry Air Purging'
    ],
    features: [
      { title: 'Custom Chemical Chemistry', desc: 'Inhibited organic and mineral acids, biodegradable degreasers, and neutralizing passivators tailored to metallurgy.' },
      { title: 'High Volume Circulation Loops', desc: 'Dedicated temporary skid pumps providing turbulent flow rates to lift and suspend dislodged particles.' },
      { title: 'On-Site Analytical Monitoring', desc: 'Real-time pH, iron concentration, and turbidity titrations to track reaction completion.' }
    ]
  },
  {
    id: 'catalyst-transfer',
    title: 'Catalyst Transfer & Extraction',
    tagline: 'Safe reactor loading, unloading, and vacuum extraction',
    shortDesc: 'Complete catalyst management, dense phase loading, inert atmosphere operations, and dust-free catalyst handling.',
    heroImg: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1200&q=80',
    overview: `Catalyst handling in petrochemical and refinery hydrotreaters, reformers, and reactors requires strict safety and material care. I.S.T. provides turnkey catalyst unloading, vacuum extraction, screening, and dense loading services under both air and inert nitrogen conditions.`,
    applications: [
      'Reactor Catalyst Unloading via Vacuum or Gravity Dump',
      'Inert Atmosphere (N2) Reactor Entry for Emergency Interventions',
      'Dense Phase & Sock Loading for Uniform Bed Density',
      'Catalyst Screening, Drumming, Weighing & Waste Handling',
      'Internal Reactor Cleaning & Hardware Inspection'
    ],
    features: [
      { title: 'High-Capacity Vacuum Units', desc: 'Industrial suction units equipped with cyclone separators to eliminate catalyst breakage and dust emissions.' },
      { title: 'Life Support Systems (LSS)', desc: 'Full nitrogen atmosphere life support trailers with backup air banks, communications, and emergency extraction.' },
      { title: 'Dense Loading Uniformity', desc: 'Proprietary dense loaders prevent channeling and optimize reactor throughput and cycle life.' }
    ]
  },
  {
    id: 'leak-detection',
    title: 'Leak Detection & Pre-Commissioning',
    tagline: 'Helium leak testing, pressure verification, and pipe drying',
    shortDesc: 'Helium mass spectrometer leak testing, hydrostatic/pneumatic pressure testing, hot oil flushing, and steam blowing.',
    heroImg: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1200&q=80',
    overview: `Prior to startup, verifying leak tightness in systems handling toxic or flammable hydrocarbons is mandatory. I.S.T. delivers sensitive helium leak detection capable of discovering minute leaks undetectable by hydrostatic or soap bubble methods, ensuring safe, delay-free plant commissioning.`,
    applications: [
      'Pre-Startup Helium Mass Spectrometry Leak Testing',
      'Flange Joint Integrity Verification during Construction',
      'High-Pressure Hydrostatic & Pneumatic Testing',
      'Hot Oil Flushing & Particle Counting',
      'Superheated Steam Blowing & Target Plate Analysis',
      'Dry Air Dewpoint Reduction (down to -40°C)'
    ],
    features: [
      { title: 'Microscopic Sensitivity', desc: 'Detects leak rates as minute as 1 x 10^-6 mbar.l/s using 1%–10% helium in nitrogen tracer gas.' },
      { title: 'Zero Startup Leaks', desc: 'Prevents hazardous hydrocarbon release and avoids emergency plant trip-offs during initial commissioning.' },
      { title: 'Full Certificate Packages', desc: 'Detailed joint-by-joint test logs and engineering compliance documentation.' }
    ]
  },
  {
    id: 'friction-welding',
    title: 'Friction Stud Welding',
    tagline: 'Hydromarine solid-phase forge welding in air and subsea to 1,000m',
    shortDesc: 'Cold process stud welding for sacrificial anode attachments and structural fixings in explosive atmospheres and underwater depths.',
    heroImg: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
    overview: `Friction stud welding is an advanced solid-state joining process that generates coalescence through mechanical friction and forge pressure without melting the base material. Developed in partnership with Dyna-Jet and Hydromarine, this system safely joins studs in combustible refinery atmospheres and subsea down to 1,000 meters.`,
    applications: [
      'Attaching Sacrificial Anodes to Vessel Hulls & Offshore Platforms',
      'Electrical Grounding / Earthing Stud Attachment in Live Plants',
      'Cable Tray, Grating, and Instrumentation Bracket Installation',
      'Pipeline Repair Clamp Fastening without Depressurization',
      'Deepwater Subsea Cathodic Protection Retrofits'
    ],
    features: [
      { title: 'No Molten Pool or Sparking', desc: 'Solid-phase bonding prevents flammable vapor ignition, eliminating hot-work habitat setups.' },
      { title: 'Superior Mechanical Bond', desc: 'Parent-metal strength bond with narrow heat-affected zone, preserving pipe metallography.' },
      { title: 'Subsea Operation to 1,000m', desc: 'Diver-held or ROV-interfaced deployment in deepwater offshore environments.' }
    ]
  }
];
