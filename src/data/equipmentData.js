export const PUMP_SPECS_TABLE = [
  { psi: '45,000', bar: '3,103', gpm: '5.0', lpm: '22.75', application: 'Ultra-High Pressure Surface Stripping, Polymer Removal, Concrete Hydro-demolition' },
  { psi: '30,000', bar: '2,068', gpm: '6.0', lpm: '27.30', application: 'Hard Scale, Coke, Paint Removal & Hydro-cutting Support' },
  { psi: '20,000', bar: '1,379', gpm: '7.0', lpm: '31.85', application: 'General Heat Exchanger Tube Cleaning, Marine Growth Removal' },
  { psi: '20,000', bar: '1,379', gpm: '14.0', lpm: '63.70', application: 'High Flow Bundle Cleaning & Large Diameter Process Lines' },
  { psi: '15,000', bar: '1,034', gpm: '10.0', lpm: '45.50', application: 'Boiler Tube Cleaning & Internal Pipework Flushing' },
  { psi: '12,500', bar: '862', gpm: '15.0', lpm: '68.25', application: 'Slurry Pumping, Marine Vessel Washing & Pipeline Descaling' },
  { psi: '12,500', bar: '862', gpm: '30.0', lpm: '136.50', application: 'High Flow Tank Washing & Large Volume Pipe Flushing' },
  { psi: '8,500', bar: '586', gpm: '30.0', lpm: '136.50', application: 'High Volume Cleaning, Pipeline Pigging Support & Hydrotesting' },
];

export const EQUIPMENT_LIST = [
  {
    id: 'high-pressure-pumps',
    title: 'High Pressure & Ultra-High Pressure Pumps',
    tagline: 'Versatile pump fleet delivering up to 45,000 PSI for lease or turnkey operations',
    shortDesc: 'Diesel and electric-driven pump units from 8,500 to 45,000 PSI in skid, roll cage, and offshore containerized configurations.',
    heroImg: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
    overview: `I.S.T. maintains one of the region's most versatile fleets of high-pressure and ultra-high-pressure pumps. Configured to withstand continuous duty cycles in severe tropical and offshore conditions, these units can be deployed on a turnkey basis with certified technicians or rented on a dry/wet hire basis.`,
    specs: [
      { label: 'Pressure Range', value: '8,500 PSI to 45,000 PSI (586 to 3,103 BAR)' },
      { label: 'Flow Rates', value: '5.0 GPM to 30.0 GPM (22.8 to 136.5 LTRS/MIN)' },
      { label: 'Drive Types', value: 'Zone 2 Diesel Engine / Flame-Proof Electric Motors' },
      { label: 'Packaging', value: 'Basic Skid, Roll-Cage, DNV 2.7-1 Offshore Container' },
      { label: 'Hire Options', value: 'With or without certified operators and full tooling package' }
    ],
    features: [
      { title: 'Wide Pressure/Flow Range', desc: 'Convertible fluid ends allow quick changes between high pressure/low flow and lower pressure/high flow.' },
      { title: 'Certified Safety Shutdowns', desc: 'Overspeed protection, exhaust spark arrestors, high water temperature and low oil pressure automatic shutdowns.' },
      { title: 'Comprehensive Tooling', desc: 'Supplied with flexible/rigid lances, rotary nozzles, multi-gun divider manifolds, foot valves, and rated hoses.' }
    ],
    tableData: PUMP_SPECS_TABLE
  },
  {
    id: 'dredging-pumps',
    title: 'High Volume & Dredging Pumps',
    tagline: 'Heavy-duty fluid transfer and subsea sediment dredging solutions',
    shortDesc: 'High-capacity pumps engineered for marine dredging, desilting, desludging, slurry transfer, and civil harbor support.',
    heroImg: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
    overview: `When high volumes of fluid or heavy slurries must be moved, I.S.T. provides high-volume centrifugal and submersible dredging pumps. These units are built to handle sand, silt, gravel, drill cuttings, and industrial sludge in marine civil projects and offshore support tasks.`,
    specs: [
      { label: 'Flow Capacities', value: 'Up to 1,200 m³/hr' },
      { label: 'Discharge Diameters', value: '4" to 12" flanged connections' },
      { label: 'Solids Handling', value: 'Spherical passage up to 75mm' },
      { label: 'Power Options', value: 'Hydraulic subsea drive, electric submersible, diesel skid' }
    ],
    features: [
      { title: 'Wear-Resistant Impellers', desc: 'High-chrome alloy wet ends resisting abrasive wear from sand and gravel slurries.' },
      { title: 'Subsea Deployment', desc: 'Hydraulically powered models can be suspended from crane barges or mounted to excavators and ROVs.' },
      { title: 'Rapid Desilting', desc: 'Crucial for dock basin maintenance, cofferdam clearance, and trenching around subsea pipelines.' }
    ]
  },
  {
    id: 'hydraulic-power-packs',
    title: 'Hydraulic Power Packs (HPUs)',
    tagline: 'Robust fluid power for industrial tools, winches, and offshore equipment',
    shortDesc: 'Diesel and electric-driven hydraulic power units available in varied configurations of flows, pressures, and hazardous zone ratings.',
    heroImg: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    overview: `I.S.T. designs, manufactures, and hires out heavy-duty Hydraulic Power Units (HPUs) tailored to drive cutting machines, submersible dredging pumps, tensioners, winches, and subsea tools. Units are engineered with generous cooling capacities for tropical ambient temperatures.`,
    specs: [
      { label: 'Output Pressures', value: 'Up to 350 bar (5,000 PSI)' },
      { label: 'Flow Output', value: '30 L/min to 250 L/min variable displacement' },
      { label: 'Power Source', value: 'Tier 3/4 Diesel or 415V/3ph 50Hz/60Hz Electric' },
      { label: 'Frame Certifications', value: 'DNV 2.7-1 lifting frames with certified 4-leg slings' }
    ],
    features: [
      { title: 'Proportional Flow Controls', desc: 'Sensitive load-sensing hydraulics allowing exact control of cutting speeds and winch pulls.' },
      { title: 'Oil Cooling Radiators', desc: 'High-efficiency heat exchangers preventing oil thermal breakdown during prolonged full-power shifts.' },
      { title: 'Offshore Hazardous Zone Specs', desc: 'Equipped with Chalwyn valves, exhaust flame traps, and intrinsically safe instrumentation.' }
    ]
  },
  {
    id: 'camera-systems',
    title: 'CCTV & Wellhead Camera Systems',
    tagline: 'Explosion-proof visual inspection and wellhead monitoring systems',
    shortDesc: 'Air-powered winches, 1,000 ft armored umbilical cables, telescopic booms, and pan-and-tilt explosion-proof cameras.',
    heroImg: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1200&q=80',
    overview: `For real-time visual inspection in hazardous offshore topside environments, I.S.T. provides complete Wellhead and Borehole Camera Systems. These specialized packages feature pneumatic winches, long-reach armored umbilicals, and explosion-proof pan-tilt-zoom camera heads with high-intensity LED arrays.`,
    specs: [
      { label: 'Umbilical Cable', value: 'Up to 1,000 ft (305m) armored multidirectional cable' },
      { label: 'Boom Reach', value: 'Hydraulically expandable telescopic boom up to 5 meters' },
      { label: 'Camera Capability', value: '360° continuous pan, 180° tilt, 10x optical zoom' },
      { label: 'Hazardous Rating', value: 'ATEX / IECEx Zone 1 certified explosion-proof enclosures' }
    ],
    features: [
      { title: 'Pneumatic Winch Control', desc: 'Air-driven winch with variable speed feed and emergency fail-safe mechanical brake.' },
      { title: 'Dual Light Pods', desc: 'Ultra-bright cold light illumination cutting through dark vessel interiors and mist.' },
      { title: 'Digital Control Station', desc: 'Integrated color screen console with real-time digital recording, distance overlay, and audio logging.' }
    ]
  },
  {
    id: 'acoustic-release',
    title: 'Acoustic Release Systems',
    tagline: 'Reliable subsea deployment and recovery with SWL up to 300 tons',
    shortDesc: 'Heavy-duty acoustic shackles (AR661, ES, E1S, FS, GS, HSR, IS series) from 0.5T to 300T SWL for subsea intervention.',
    heroImg: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
    overview: `Deploying and recovering heavy subsea payloads without divers or ROV intervention saves substantial vessel time and operational cost. I.S.T. supplies heavy-duty Acoustic Release Systems (such as Acoustic Shackles) actuated via secure, encoded acoustic signals from surface dunking transducers.`,
    specs: [
      { label: 'Safe Working Load (SWL)', value: '0.5 tonnes up to 300 tonnes' },
      { label: 'Models Available', value: 'AR661, ES, E1S, FS/FSR, GS/GSR, HSR, IS' },
      { label: 'Operating Depth', value: 'Up to 3,000 meters' },
      { label: 'Acoustic Range', value: 'Up to 5 km horizontal and vertical slant range' }
    ],
    features: [
      { title: 'Secure FSK Signaling', desc: 'Frequency-shift keyed digital acoustic coding prevents accidental release from ocean noise or sonar.' },
      { title: 'Heavy Payload Capacity', desc: 'Rated up to 300 tonnes SWL for structural jacket installations, templates, and subsea manifolds.' },
      { title: 'Battery Life', desc: 'Extended deployment endurance up to 2 years in standby mode with positive confirmation telemetry.' }
    ]
  },
  {
    id: 'cold-cutting-systems',
    title: 'Cold Cutting & Friction Stud Welding Systems',
    tagline: 'Proprietary Jetcut abrasive water cutting & Hydromarine welding machines',
    shortDesc: 'Track-mounted pipe cutters, radius cutters, abrasive metering systems, and friction forge welding equipment.',
    heroImg: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    overview: `Our mechanical cutting and welding fleet features the field-proven Jetcut abrasive water suspension systems and Hydromarine friction stud welding machinery. Engineered for remote and diver-less intervention, this equipment guarantees spark-free, metallurgically pristine connections and severances.`,
    specs: [
      { label: 'Pipe Diameters', value: '4" to 84" outer diameter clamping' },
      { label: 'Cutting Medium', value: 'Garnet mesh mixed with UHP water up to 45,000 PSI' },
      { label: 'Stud Diameters', value: 'M6 to M24 stud sizes for friction welding' },
      { label: 'Operational Environs', value: 'Refineries, offshore platforms, subsea pipelines to 1,000m' }
    ],
    features: [
      { title: 'Modular Track Clamping', desc: 'Hinged guide tracks quickly latch around pipes, caissons, or flat tank walls.' },
      { title: 'Consistent Abrasive Metering', desc: 'Pressurized abrasive delivery vessels ensuring steady garnet flow without nozzle clogging.' },
      { title: 'Hydromarine Friction Head', desc: 'High-torque hydraulic drive delivering rotational speed and forge axial thrust to complete welds in seconds.' }
    ]
  },
  {
    id: 'snark',
    title: 'Snark Crawler Systems',
    tagline: 'Specialized robotic intervention crawler technology',
    shortDesc: 'Automated crawlers for confined pipework, subsea trenching, and internal casing manipulation.',
    heroImg: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1200&q=80',
    overview: `The Snark represents I.S.T.'s specialized robotic crawler technology developed for high-value offshore interventions where human access is impossible. Designed to navigate inside tubulars, pipelines, and caissons, it carries inspection tools, cleaning heads, or cutting manipulators.`,
    specs: [
      { label: 'Pipe Internal Range', value: '10" to 36" internal diameter' },
      { label: 'Drive Mechanism', value: 'Hydraulic wheel drives with variable radial wall clamping' },
      { label: 'Payload Capacity', value: 'Up to 150 kg tooling and sensor packages' },
      { label: 'Control Tether', value: 'Up to 500 meters fiber-optic / power umbilical' }
    ],
    features: [
      { title: 'Tethered Precision Maneuvering', desc: 'Climbs vertical caissons and negotiates horizontal bends while maintaining high tractive effort.' },
      { title: 'Tool Carrier Versatility', desc: 'Mounts high-pressure rotary spray heads, ultrasonic testing sensors, or abrasive cutting arms.' },
      { title: 'Real-Time Sensor Telemetry', desc: 'Onboard attitude sensors, distance encoders, and forward-looking diagnostic cameras.' }
    ]
  }
];
