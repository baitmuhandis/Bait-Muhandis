const productData = {
    // Fire Fighting - Fire Extinguishers
    'extinguisher-bavaria-phoenix': {
        name: 'Bavaria Phoenix Fire Extinguisher',
        code: 'FE-BAV-PHX',
        description: 'Bavaria Phoenix is a premium ABC dry powder fire extinguisher, designed for high-performance firefighting. It is suitable for fires involving wood, paper, textiles, flammable liquids, and electrical equipment. The Phoenix model features a high-grade discharge valve and durable German-standard construction.',
        images: [
            'images/fire-fighting/extinguisher.png',
            'images/fire-fighting/extinguisher-datasheet-1.png',
            'images/fire-fighting/extinguisher-datasheet-2.png'
        ],
        datasheetImage: 'images/fire-fighting/extinguisher-datasheet-1.png',
        pdf: 'pdf/phoenix.pdf',
        specs: [
            { label: 'Capacity', value: '4kg / 6kg' },
            { label: 'Agent', value: 'Bavaria Superlative ABC Powder' },
            { label: 'Fire Rating', value: 'Up to 43A 233B C' },
            { label: 'Temperature Range', value: '-30°C to +60°C' },
            { label: 'Operating Pressure', value: '15 bar' },
            { label: 'Certification', value: 'EN3, CE, TUV, Egypt GS' }
        ],
        features: [
            'Premium German-origin powder agent',
            'High-grade steel cylinder with pure polyester coating',
            'Solid brass valve with internal pressure relief',
            'Easy-to-read pressure gauge with test valve',
            'Maintenance-friendly design with internal siphon tube',
            'Standard wall bracket included'
        ],
        options: [
            { 
                label: 'BAVARIA SIGMA 6 CO2', 
                value: '6kg CO2 Fire Extinguisher Add-on', 
                image: 'images/fire-fighting/extinguishers/sigma6-main.png',
                images: [
                    'images/fire-fighting/extinguishers/sigma6-main.png',
                    'images/fire-fighting/extinguishers/sigma6-datasheet-ar-1.png',
                    'images/fire-fighting/extinguishers/sigma6-datasheet-ar-2.png'
                ],
                description: 'The BAVARIA SIGMA 6 CO2 extinguisher is often paired with the Phoenix series for comprehensive protection, especially in areas with sensitive electrical equipment.',
                specs: [
                    { label: 'Capacity', value: '6kg' },
                    { label: 'Agent', value: 'Pure CO2 Gas' },
                    { label: 'Fire Rating', value: '89B' }
                ],
                features: [
                    'Clean agent - no residue',
                    'Safe for electrical fires',
                    'High quality seamless cylinder'
                ]
            }
        ]
    },
    'extinguisher-abc': {
        name: 'Bavaria Firesearch Modular System',
        code: 'FE-ABC-001',
        description: `
            <div class="datasheet-preview">
                <h5>Common Agent Container Capacities</h5>
                <img src="images/fire-fighting/extinguishers/abc/abc-firesearch-capacities.png" alt="Container Capacities" style="max-width: 100%; height: auto; border-radius: 8px; margin-bottom: 20px;">
            </div>
            Bavaria Firesearch is a pre-engineered, modular firefighting system designed for rapid suppression in high-risk areas. It features both direct and indirect release systems, making it ideal for protecting electrical cabinets, server rooms, vehicle engines, and various industrial applications. The system is automatic, self-contained, and requires no external power source.`,
        images: [
            'images/fire-fighting/extinguishers/abc/abc-firesearch-1.png',
            'images/fire-fighting/extinguishers/abc/abc-firesearch-2.png',
            'images/fire-fighting/extinguishers/abc/abc-firesearch-3.png',
            'images/fire-fighting/extinguishers/abc/abc-firesearch-4.png',
            'images/fire-fighting/extinguishers/abc/abc-firesearch-ds-1.png',
            'images/fire-fighting/extinguishers/abc/abc-firesearch-ds-2.png',
            'images/fire-fighting/extinguishers/abc/abc-firesearch-ds-3.png',
            'images/fire-fighting/extinguishers/abc/abc-firesearch-capacities.png'
        ],
        datasheetImage: 'images/fire-fighting/extinguishers/abc/abc-firesearch-ds-1.png',
        specs: [
            { label: 'System Type', value: 'Pre-engineered Modular System' },
            { label: 'Agent', value: 'ABC Dry Powder / Clean Agent' },
            { label: 'Release Method', value: 'Direct / Indirect Automatic' },
            { label: 'Applications', value: 'Engines, Servers, Electrical Panels, Gas Stations' },
            { label: 'Certification', value: 'Bavaria Firesearch standards' }
        ],
        features: [
            'Automatic fire detection and suppression in seconds',
            'No electrical power required for operation',
            'Direct and Indirect system configurations available',
            'Easy installation in cramped spaces (e.g., engines, cabinets)',
            'Reliable protection for sensitive equipment',
            'Comprehensive range of applications'
        ]
    },
    'extinguisher-co2': {
        name: 'BAVARIA SIGMA 6 CO2 Fire Extinguisher',
        code: 'FE-CO2-002',
        description: `
            <div class="datasheet-preview">
                <h5>Technical Datasheet</h5>
                <img src="images/fire-fighting/extinguishers/sigma6-datasheet-ar-1.png" alt="SIGMA 6 Technical Datasheet" style="max-width: 100%; height: auto; border-radius: 8px; margin-bottom: 20px;">
                <h5>Technical Layout & Materials</h5>
                <img src="images/fire-fighting/extinguishers/sigma6-datasheet-ar-2.png" alt="SIGMA 6 Technical Layout & Materials" style="max-width: 100%; height: auto; border-radius: 8px; margin-bottom: 20px;">
            </div>
            Bavaria SIGMA 6 is a premium stored-pressure CO2 fire extinguisher designed for high-hazard electrical and flammable liquid environments. It leaves no residue behind, making it the perfect choice for server rooms, laboratories, and sensitive equipment areas.`,
        images: [
            'images/fire-fighting/extinguishers/sigma6-main.png',
            'images/fire-fighting/extinguishers/sigma6-datasheet-ar-1.png',
            'images/fire-fighting/extinguishers/sigma6-datasheet-ar-2.png'
        ],
        datasheetImage: 'images/fire-fighting/extinguishers/sigma6-datasheet-ar-1.png',
        specs: [
            { label: 'Model', value: 'SIGMA 6' },
            { label: 'Capacity', value: '6kg' },
            { label: 'Agent', value: 'Pure CO2 Gas' },
            { label: 'Fire Rating', value: '89B' },
            { label: 'Temperature Range', value: '-30°C to +60°C' },
            { label: 'Operating Pressure', value: '57 bar @ 15°C' },
            { label: 'Discharge Time', value: '10-30 seconds' },
            { label: 'Certification', value: 'EN3, CE, LPCB' }
        ],
        features: [
            'Clean agent - no residue after discharge',
            'Non-conductive - safe for electrical equipment',
            'Dielectric strength tested to 35kV',
            'Seamless steel cylinder for maximum safety',
            'Freeze-proof discharge horn with handle',
            'Ideal for server rooms and electrical panels'
        ]
    },
    'extinguisher-foam': {
        name: 'Bavaria TORNADO-F Wheeled Foam Extinguisher',
        code: 'FE-FOAM-003',
        description: 'Bavaria TORNADO-F is a high-performance wheeled foam fire extinguisher featuring a stainless steel bright elegant shape. It is optimum for use in petrol stations, boiler rooms, and high-hazard areas. The system uses a pre-mixed AFFF 3% foam concentrate and features an external nitrogen pressure cylinder for immediate readiness.',
        images: [
            'images/fire-fighting/extinguishers/foam/foam-tornado-1.png',
            'images/fire-fighting/extinguishers/foam/foam-tornado-ds-1.png',
            'images/fire-fighting/extinguishers/foam/foam-tornado-ds-2.png'
        ],
        datasheetImage: 'images/fire-fighting/extinguishers/foam/foam-tornado-ds-2.png',
        specs: [
            { label: 'Capacity', value: '45L / 90L' },
            { label: 'Agent', value: 'BAVARIA Typhoon AFFF 3%' },
            { label: 'Shell Material', value: 'Stainless Steel' },
            { label: 'Testing Pressure', value: '35 bar' },
            { label: 'Propellant Gas', value: 'N2 (External Cylinder)' },
            { label: 'Certification', value: 'DIN/EN 1866, TUV Approved' }
        ],
        features: [
            'Supreme extinguishing performance rating IA/IA',
            'External pressure cylinder for maximum reliability',
            'Easy to maneuver on a carriage with rollers',
            'Equipped with reinforced rubber hose for control',
            'Chrome-plated valve head with safety valve',
            'Optimum for petrol stations and boiler rooms'
        ]
    },

    'cabinet-taurus': {
        name: 'BAVARIA TAURUS Fire Cabinet',
        code: 'FC-BAV-TAU',
        description: 'High-hazard 6 stars series steel fire cabinet with 100% electrostatic pure polyester red coating. Designed for demanding industrial environments and professional firefighting use.',
        images: [
            'images/fire-fighting/taurus-cabinet.png',
            'images/fire-fighting/taurus-datasheet-1.png'
        ],
        specs: [
            { label: 'Dimensions', value: '800 x 800 x 300 mm' },
            { label: 'Material', value: '1.5mm Cold Rolled Steel' },
            { label: 'Finish', value: 'Electrostatic Polyester (Red)' },
            { label: 'Type', value: 'Wall-Mounted / Recessed' },
            { label: 'Stars Rating', value: '6 Stars Series' }
        ],
        features: [
            'Corrosion resistant coating',
            'Reinforced door hinges',
            'Clear safety glass or solid door options',
            'Pre-punched holes for easy piping',
            'Optional in FC-BAV-TAU: Fire Hose Reel & Delivery Hosereel'
        ],
        options: [
            { 
                label: 'Fire Hose Reel', 
                value: 'Automatic swing-out reel', 
                description: '30m high-quality rubber hose on a manual or automatic swing-out reel system.',
                image: 'images/fire-fighting/options/fire-hose-reel-red.png'
            },
            { 
                label: 'Delivery Hosereel', 
                value: 'Reinforced Rubber Hose (19mm / 25mm)', 
                description: 'European-made reinforced rubber delivery hose reel. Standard components for fire cabinets with 19 mm (¾ inch) x 30 m / 25 mm (1 inch) x 30 m. Built for up to 12 bar working pressure and fully EN694 approved.',
                image: 'images/fire-fighting/options/delivery-hosereel-product.png',
                images: [
                    'images/fire-fighting/options/delivery-hosereel-product.png',
                    'images/fire-fighting/options/delivery-hosereel-ds.png'
                ],
                specs: [
                    { label: 'Country of Origin', value: 'European made' },
                    { label: 'Hose Diameter and Length', value: '19 mm (¾ inch) x 30 m / 25 mm (1 inch) x 30 m' },
                    { label: 'Fabrication', value: 'Reinforced Rubber hose' },
                    { label: 'Max. Working Pressure Range', value: '12 bar' },
                    { label: 'Hose Bursting Pressure', value: 'Over 42 bar' },
                    { label: 'Hose Connection', value: 'Bosch pressed collet' },
                    { label: 'Approval', value: 'EN694' }
                ]
            },
            { 
                label: 'Landing Valve', 
                value: '34° Outlet for 25mm Hose', 
                description: '34° Outlet Landing Valve (fire valve) designed for 25 mm (1 inch) hose diameters.',
                image: 'images/fire-fighting/options/landing-valve-34.png',
                images: [
                    'images/fire-fighting/options/landing-valve-34.png',
                    'images/fire-fighting/options/landing-valve-34-ds.png'
                ],
                specs: [
                    { label: 'Inlet thread', value: 'G 1' },
                    { label: 'Outlet male', value: 'G 1 - Brass Nipple - for 25 mm (1 inch) crimped' },
                    { label: 'Weight', value: '0.450 kg' }
                ]
            },
            { 
                label: 'Angle Hose Valve', 
                value: '1.5" or 2.5" inch', 
                description: 'Forged brass finished valve used as a Fire Dept. outlet connection. Available in multiple diameters with UL/FM approval.',
                image: 'images/fire-fighting/options/angle-hose-valve.png',
                images: [
                    'images/fire-fighting/options/angle-hose-valve.png',
                    'images/fire-fighting/options/angle-hose-valve-ds.png'
                ],
                specs: [
                    { label: 'Hose Diameter', value: '3/4 inch to 2 1/2 inch' },
                    { label: 'Material', value: 'Brass' },
                    { label: 'Material Type', value: '(RB) Rough Brass / (PB) Polished Brass' },
                    { label: 'Inlet / Outlet', value: '1 1/2" / 2 1/2"' },
                    { label: 'Connection Type', value: 'Double Female / Female x Male' },
                    { label: 'Approval', value: 'UL and FM' }
                ]
            },
            {
                label: 'Multipurpose Water Nozzle', 
                value: 'Jet and spray nozzle (19mm / 25mm)', 
                description: 'BAVARIA Multipurpose water nozzle for hose diameter 19 mm (3/4 inch) / 25 mm (1 inch) with jet and spray operation mode.',
                image: 'images/fire-fighting/options/bavaria-water-nozzle.png',
                images: [
                    'images/fire-fighting/options/bavaria-water-nozzle.png',
                    'images/fire-fighting/options/bavaria-water-nozzle-ds.png'
                ],
                specs: [
                    { label: 'Type', value: 'BAVARIA' },
                    { label: 'Origin', value: 'German made' },
                    { label: 'Material', value: 'Copper alloy, external polymer cover, rubber impact ring' },
                    { label: 'Operation Mode', value: 'Multipurpose (jet and spray) nozzle' },
                    { label: 'Flow Rate', value: 'up to 72 l/min at 6 bar' },
                    { label: 'Max Working Pressure', value: '16 bar' },
                    { label: 'Max Throw Range', value: '21 m at 6 bar, at full jet' },
                    { label: 'Hose Tail', value: '1 inch' }
                ]
            },
            {
                label: 'UL/FM Hose Rack', 
                value: '1.5 inch (38mm) / 30m', 
                description: 'U.S.A. made hose rack equipped with flat nylon hose with internal rubber lining (UL & FM approved).',
                image: 'images/fire-fighting/options/hose-rack-ul-fm.png',
                images: [
                    'images/fire-fighting/options/hose-rack-ul-fm.png',
                    'images/fire-fighting/options/hose-rack-ul-fm-ds.png'
                ],
                specs: [
                    { label: 'Type', value: 'HRk-1.5' },
                    { label: 'Rack Swinging Range', value: '0° - 90°' },
                    { label: 'Hose Diameter / Length', value: '1.5 inch (38 mm) / 30 m' },
                    { label: 'Working Pressure Range', value: 'Optimum 5-12 bar' },
                    { label: 'Hose Testing Pressure', value: 'Over 17 bar (250 PSI)' },
                    { label: 'Discharge Fitting', value: 'Multipurpose water branchpipe nozzle 1.5 inch (38 mm)' },
                    { label: 'Accessories', value: 'Angle valve 1.5 inch (38 mm)' },
                    { label: 'Approval', value: 'UL & FM' }
                ]
            },
            {
                label: 'Adjustable Fog Nozzle', 
                value: '1.5" or 2.5" inch', 
                description: 'Forged brass finished nozzle with adjustable fog, straight-stream and shut-off feature, protected by a bumper.',
                image: 'images/fire-fighting/options/fog-nozzle-ul.png',
                images: [
                    'images/fire-fighting/options/fog-nozzle-ul.png',
                    'images/fire-fighting/options/fog-nozzle-ul-ds.png'
                ],
                specs: [
                    { label: 'Hose Diameter', value: '1.5 inch / 2.5 inch' },
                    { label: 'Material', value: 'Brass' },
                    { label: 'Material Type', value: '(RB) Rough Brass (standard) / (PB) Polished Brass (option)' },
                    { label: 'Inlet / Outlet', value: '1.5 / 2.5 inch' },
                    { label: 'Approval', value: 'UL and FM' }
                ]
            },
            {
                label: 'Bavaria Typhoon Nozzle', 
                value: 'TYPHOON-230', 
                description: 'Professional German-made variable flow nozzle with adjustable patterns and protective bumper.',
                image: 'images/fire-fighting/options/typhoon-230-nozzle.png',
                images: [
                    'images/fire-fighting/options/typhoon-230-nozzle.png',
                    'images/fire-fighting/options/typhoon-230-nozzle-ds.png'
                ],
                specs: [
                    { label: 'Model', value: 'TYPHOON-230' },
                    { label: 'Origin', value: 'Germany' },
                    { label: 'Operation Modes', value: 'Full jet, spray and water curtain' },
                    { label: 'Flow Rate', value: '140 to 230 l/min (Variable)' },
                    { label: 'Spray Angle', value: '0° to 120°' },
                    { label: 'Dimensions', value: '258 x 100 x 233 mm' },
                    { label: 'Weight', value: '1.5 kg' },
                    { label: 'Inlet Fitting', value: 'Tail ND 27.5 mm' }
                ]
            },
            {
                label: 'Gate Valve', 
                value: '1.5" or 2.5" inch', 
                description: 'Forged brass finished gate valve used as a Fire Dept. outlet connection. UL/FM approved.',
                image: 'images/fire-fighting/options/gate-valve.jpg',
                images: [
                    'images/fire-fighting/options/gate-valve.jpg',
                    'images/fire-fighting/options/gate-valve-ds.jpg'
                ],
                specs: [
                    { label: 'Material', value: 'Brass' },
                    { label: 'Material Type', value: '(RB) Rough Brass / (PB) Polished Brass' },
                    { label: 'Sizes', value: '1.5" / 2.5"' },
                    { label: 'Connection', value: 'Double Female (Female x Female)' },
                    { label: 'Threads', value: 'NPT or BSP' },
                    { label: 'Approval', value: 'UL and FM' }
                ]
            }
        ]
    },
    'cabinet-taurus-double-act': {
        name: 'BAVARIA TAURUS Double Act Fire Cabinet',
        code: 'FC-BAV-TAUD',
        description: 'The TAURUS Double Act is a professional high-hazard fire cabinet featuring a vertical design with a single long lid. It is specifically engineered to accommodate two hose reels—one in the upper section and one below—making it ideal for large industrial and commercial spaces. Constructed from 1.5mm steel with a durable 100% electrostatic red polyester finish.',
        images: [
            'images/fire-fighting/taurus-double-act-main.png',
            'images/fire-fighting/taurus-double-act-ds.png',
            'images/fire-fighting/taurus-double-act-specs.png'
        ],
        datasheetImage: 'images/fire-fighting/taurus-double-act-ds.png',
        specs: [
            { label: 'Dimensions (WxHxD)', value: '800 x 1600 x 300 mm' },
            { label: 'Cabinet Material', value: '1.5 mm Cold Rolled Steel' },
            { label: 'Door Hinges', value: 'Concealed Galvanized Steel Axial' },
            { label: 'Paint Finish', value: '100% Electrostatic Pure Polyester (Red)' },
            { label: 'Opening Door', value: 'Right (Standard) or Left (Option), with glass openings' },
            { label: 'Door Swing', value: 'Up to 180° enabled by axial hinges' },
            { label: 'Steel Thickness', value: '1.5 mm' }
        ],
        features: [
            'Double fire cabinet with one long lid for dual hose reels',
            'Solid wall-mounted design (800 x 1600 x 300 mm)',
            'Concealed axial hinges for 180° swing rotation',
            'Long built-in handle with two latching points',
            'Four inlet holes (2 upper / 2 lower) for water feeding pipes',
            'Equipped with photo luminescent sign for emergency visibility'
        ],
        options: [
            { 
                label: 'Fire Hose Reel', 
                value: 'Automatic swing-out reel', 
                description: '30m high-quality rubber hose on a manual or automatic swing-out reel system.',
                image: 'images/fire-fighting/options/fire-hose-reel-red.png'
            },
            {
                label: 'Delivery Hosereel',
                value: 'Reinforced Rubber Hose (19mm / 25mm)',
                description: 'European-made reinforced rubber delivery hose reel. Standard components for fire cabinets with 19 mm (¾ inch) x 30 m / 25 mm (1 inch) x 30 m. Built for up to 12 bar working pressure and fully EN694 approved.',
                image: 'images/fire-fighting/options/delivery-hosereel-product.png',
                images: [
                    'images/fire-fighting/options/delivery-hosereel-product.png',
                    'images/fire-fighting/options/delivery-hosereel-ds.png'
                ],
                specs: [
                    { label: 'Country of Origin', value: 'European made' },
                    { label: 'Hose Diameter and Length', value: '19 mm (¾ inch) x 30 m / 25 mm (1 inch) x 30 m' },
                    { label: 'Fabrication', value: 'Reinforced Rubber hose' },
                    { label: 'Max. Working Pressure Range', value: '12 bar' },
                    { label: 'Hose Bursting Pressure', value: 'Over 42 bar' },
                    { label: 'Hose Connection', value: 'Bosch pressed collet' },
                    { label: 'Approval', value: 'EN694' }
                ]
            },
            { 
                label: 'Landing Valve', 
                value: '34° Outlet for 25mm Hose', 
                description: '34° Outlet Landing Valve (fire valve) designed for 25 mm (1 inch) hose diameters.',
                image: 'images/fire-fighting/options/landing-valve-34.png',
                images: [
                    'images/fire-fighting/options/landing-valve-34.png',
                    'images/fire-fighting/options/landing-valve-34-ds.png'
                ],
                specs: [
                    { label: 'Inlet thread', value: 'G 1' },
                    { label: 'Outlet male', value: 'G 1 - Brass Nipple - for 25 mm (1 inch) crimped' },
                    { label: 'Weight', value: '0.450 kg' }
                ]
            },
            { 
                label: 'Angle Hose Valve', 
                value: '1.5" or 2.5" inch', 
                description: 'Forged brass finished valve used as a Fire Dept. outlet connection. Available in multiple diameters with UL/FM approval.',
                image: 'images/fire-fighting/options/angle-hose-valve.png',
                images: [
                    'images/fire-fighting/options/angle-hose-valve.png',
                    'images/fire-fighting/options/angle-hose-valve-ds.png'
                ],
                specs: [
                    { label: 'Hose Diameter', value: '3/4 inch to 2 1/2 inch' },
                    { label: 'Material', value: 'Brass' },
                    { label: 'Material Type', value: '(RB) Rough Brass / (PB) Polished Brass' },
                    { label: 'Inlet / Outlet', value: '1 1/2" / 2 1/2"' },
                    { label: 'Connection Type', value: 'Double Female / Female x Male' },
                    { label: 'Approval', value: 'UL and FM' }
                ]
            },
            {
                label: 'Multipurpose Water Nozzle', 
                value: 'Jet and spray nozzle (19mm / 25mm)', 
                description: 'BAVARIA Multipurpose water nozzle for hose diameter 19 mm (3/4 inch) / 25 mm (1 inch) with jet and spray operation mode.',
                image: 'images/fire-fighting/options/bavaria-water-nozzle.png',
                images: [
                    'images/fire-fighting/options/bavaria-water-nozzle.png',
                    'images/fire-fighting/options/bavaria-water-nozzle-ds.png'
                ],
                specs: [
                    { label: 'Type', value: 'BAVARIA' },
                    { label: 'Origin', value: 'German made' },
                    { label: 'Material', value: 'Copper alloy, external polymer cover, rubber impact ring' },
                    { label: 'Operation Mode', value: 'Multipurpose (jet and spray) nozzle' },
                    { label: 'Flow Rate', value: 'up to 72 l/min at 6 bar' },
                    { label: 'Max Working Pressure', value: '16 bar' },
                    { label: 'Max Throw Range', value: '21 m at 6 bar, at full jet' },
                    { label: 'Hose Tail', value: '1 inch' }
                ]
            },
            {
                label: 'UL/FM Hose Rack', 
                value: '1.5 inch (38mm) / 30m', 
                description: 'U.S.A. made hose rack equipped with flat nylon hose with internal rubber lining (UL & FM approved).',
                image: 'images/fire-fighting/options/hose-rack-ul-fm.png',
                images: [
                    'images/fire-fighting/options/hose-rack-ul-fm.png',
                    'images/fire-fighting/options/hose-rack-ul-fm-ds.png'
                ],
                specs: [
                    { label: 'Type', value: 'HRk-1.5' },
                    { label: 'Rack Swinging Range', value: '0° - 90°' },
                    { label: 'Hose Diameter / Length', value: '1.5 inch (38 mm) / 30 m' },
                    { label: 'Working Pressure Range', value: 'Optimum 5-12 bar' },
                    { label: 'Hose Testing Pressure', value: 'Over 17 bar (250 PSI)' },
                    { label: 'Discharge Fitting', value: 'Multipurpose water branchpipe nozzle 1.5 inch (38 mm)' },
                    { label: 'Accessories', value: 'Angle valve 1.5 inch (38 mm)' },
                    { label: 'Approval', value: 'UL & FM' }
                ]
            },
            {
                label: 'Adjustable Fog Nozzle', 
                value: '1.5" or 2.5" inch', 
                description: 'Forged brass finished nozzle with adjustable fog, straight-stream and shut-off feature, protected by a bumper.',
                image: 'images/fire-fighting/options/fog-nozzle-ul.png',
                images: [
                    'images/fire-fighting/options/fog-nozzle-ul.png',
                    'images/fire-fighting/options/fog-nozzle-ul-ds.png'
                ],
                specs: [
                    { label: 'Hose Diameter', value: '1.5 inch / 2.5 inch' },
                    { label: 'Material', value: 'Brass' },
                    { label: 'Material Type', value: '(RB) Rough Brass (standard) / (PB) Polished Brass (option)' },
                    { label: 'Inlet / Outlet', value: '1.5 / 2.5 inch' },
                    { label: 'Approval', value: 'UL and FM' }
                ]
            },
            {
                label: 'Bavaria Typhoon Nozzle', 
                value: 'TYPHOON-230', 
                description: 'Professional German-made variable flow nozzle with adjustable patterns and protective bumper.',
                image: 'images/fire-fighting/options/typhoon-230-nozzle.png',
                images: [
                    'images/fire-fighting/options/typhoon-230-nozzle.png',
                    'images/fire-fighting/options/typhoon-230-nozzle-ds.png'
                ],
                specs: [
                    { label: 'Model', value: 'TYPHOON-230' },
                    { label: 'Origin', value: 'Germany' },
                    { label: 'Operation Modes', value: 'Full jet, spray and water curtain' },
                    { label: 'Flow Rate', value: '140 to 230 l/min (Variable)' },
                    { label: 'Spray Angle', value: '0° to 120°' },
                    { label: 'Dimensions', value: '258 x 100 x 233 mm' },
                    { label: 'Weight', value: '1.5 kg' },
                    { label: 'Inlet Fitting', value: 'Tail ND 27.5 mm' }
                ]
            },
            {
                label: 'Gate Valve', 
                value: '1.5" or 2.5" inch', 
                description: 'Forged brass finished gate valve used as a Fire Dept. outlet connection. UL/FM approved.',
                image: 'images/fire-fighting/options/gate-valve.jpg',
                images: [
                    'images/fire-fighting/options/gate-valve.jpg',
                    'images/fire-fighting/options/gate-valve-ds.jpg'
                ],
                specs: [
                    { label: 'Material', value: 'Brass' },
                    { label: 'Material Type', value: '(RB) Rough Brass / (PB) Polished Brass' },
                    { label: 'Sizes', value: '1.5" / 2.5"' },
                    { label: 'Connection', value: 'Double Female (Female x Female)' },
                    { label: 'Threads', value: 'NPT or BSP' },
                    { label: 'Approval', value: 'UL and FM' }
                ]
            }
        ]
    },
    'hose-bavaria-1': {
        name: 'Bavaria Delivery Hose Type 1',
        code: 'FH-BAV-T1',
        description: 'Professional flat nylon delivery hose with internal rubber lining. Optimized for 17 bar working pressure with high burst resistance.',
        images: ['images/fire-fighting/bavaria-hose.png'],
        specs: [
            { label: 'Diameter', value: '38mm (1.5") / 64mm (2.5")' },
            { label: 'Length', value: '30 meters' },
            { label: 'Working Pressure', value: '17 Bar' },
            { label: 'Test Pressure', value: '25 Bar' },
            { label: 'Material', value: 'Nylon Yarn + Rubber Lining' }
        ],
        features: [
            'Lightweight and easy to handle',
            'Weather and ozone resistant',
            'Smooth lining for low friction loss',
            'High abrasion resistance',
            'Maintenance free'
        ],
        options: [
            { 
                label: 'Branchpipe', 
                value: 'Standard delivery nozzle', 
                description: 'Classic branchpipe nozzle for direct jet fire fighting.',
                image: 'images/fire-fighting/options/branchpipe.png'
            },
            {
                label: 'Multipurpose Water Nozzle', 
                value: 'Jet and spray nozzle (19mm / 25mm)', 
                description: 'BAVARIA Multipurpose water nozzle for hose diameter 19 mm (3/4 inch) / 25 mm (1 inch) with jet and spray operation mode.',
                image: 'images/fire-fighting/options/bavaria-water-nozzle.png',
                images: [
                    'images/fire-fighting/options/bavaria-water-nozzle.png',
                    'images/fire-fighting/options/bavaria-water-nozzle-ds.png'
                ],
                specs: [
                    { label: 'Type', value: 'BAVARIA' },
                    { label: 'Origin', value: 'German made' },
                    { label: 'Material', value: 'Copper alloy, external polymer cover, rubber impact ring' },
                    { label: 'Operation Mode', value: 'Multipurpose (jet and spray) nozzle' },
                    { label: 'Flow Rate', value: 'up to 72 l/min at 6 bar' },
                    { label: 'Max Working Pressure', value: '16 bar' },
                    { label: 'Max Throw Range', value: '21 m at 6 bar, at full jet' },
                    { label: 'Hose Tail', value: '1 inch' }
                ]
            },
            {
                label: 'UL/FM Hose Rack', 
                value: '1.5 inch (38mm) / 30m', 
                description: 'U.S.A. made hose rack equipped with flat nylon hose with internal rubber lining (UL & FM approved).',
                image: 'images/fire-fighting/options/hose-rack-ul-fm.png',
                images: [
                    'images/fire-fighting/options/hose-rack-ul-fm.png',
                    'images/fire-fighting/options/hose-rack-ul-fm-ds.png'
                ],
                specs: [
                    { label: 'Type', value: 'HRk-1.5' },
                    { label: 'Rack Swinging Range', value: '0° - 90°' },
                    { label: 'Hose Diameter / Length', value: '1.5 inch (38 mm) / 30 m' },
                    { label: 'Working Pressure Range', value: 'Optimum 5-12 bar' },
                    { label: 'Hose Testing Pressure', value: 'Over 17 bar (250 PSI)' },
                    { label: 'Discharge Fitting', value: 'Multipurpose water branchpipe nozzle 1.5 inch (38 mm)' },
                    { label: 'Accessories', value: 'Angle valve 1.5 inch (38 mm)' },
                    { label: 'Approval', value: 'UL & FM' }
                ]
            },
            {
                label: 'Adjustable Fog Nozzle', 
                value: '1.5" or 2.5" inch', 
                description: 'Forged brass finished nozzle with adjustable fog, straight-stream and shut-off feature, protected by a bumper.',
                image: 'images/fire-fighting/options/fog-nozzle-ul.png',
                images: [
                    'images/fire-fighting/options/fog-nozzle-ul.png',
                    'images/fire-fighting/options/fog-nozzle-ul-ds.png'
                ],
                specs: [
                    { label: 'Hose Diameter', value: '1.5 inch / 2.5 inch' },
                    { label: 'Material', value: 'Brass' },
                    { label: 'Material Type', value: '(RB) Rough Brass (standard) / (PB) Polished Brass (option)' },
                    { label: 'Inlet / Outlet', value: '1.5 / 2.5 inch' },
                    { label: 'Approval', value: 'UL and FM' }
                ]
            },
            {
                label: 'Bavaria Typhoon Nozzle', 
                value: 'TYPHOON-230', 
                description: 'Professional German-made variable flow nozzle with adjustable patterns and protective bumper.',
                image: 'images/fire-fighting/options/typhoon-230-nozzle.png',
                images: [
                    'images/fire-fighting/options/typhoon-230-nozzle.png',
                    'images/fire-fighting/options/typhoon-230-nozzle-ds.png'
                ],
                specs: [
                    { label: 'Model', value: 'TYPHOON-230' },
                    { label: 'Origin', value: 'Germany' },
                    { label: 'Operation Modes', value: 'Full jet, spray and water curtain' },
                    { label: 'Flow Rate', value: '140 to 230 l/min (Variable)' },
                    { label: 'Spray Angle', value: '0° to 120°' },
                    { label: 'Dimensions', value: '258 x 100 x 233 mm' },
                    { label: 'Weight', value: '1.5 kg' },
                    { label: 'Inlet Fitting', value: 'Tail ND 27.5 mm' }
                ]
            },
            { 
                label: 'Angle Hose Valve', 
                value: '1.5" or 2.5" inch', 
                description: 'Forged brass finished valve used as a Fire Dept. outlet connection. Available in multiple diameters with UL/FM approval.',
                image: 'images/fire-fighting/options/angle-hose-valve.png',
                images: [
                    'images/fire-fighting/options/angle-hose-valve.png',
                    'images/fire-fighting/options/angle-hose-valve-ds.png'
                ],
                specs: [
                    { label: 'Hose Diameter', value: '3/4 inch to 2 1/2 inch' },
                    { label: 'Material', value: 'Brass' },
                    { label: 'Material Type', value: '(RB) Rough Brass / (PB) Polished Brass' },
                    { label: 'Inlet / Outlet', value: '1 1/2" / 2 1/2"' },
                    { label: 'Connection Type', value: 'Double Female / Female x Male' },
                    { label: 'Approval', value: 'UL and FM' }
                ]
            },
            {
                label: 'Gate Valve', 
                value: '1.5" or 2.5" inch', 
                description: 'Forged brass finished gate valve used as a Fire Dept. outlet connection. UL/FM approved.',
                image: 'images/fire-fighting/options/gate-valve.jpg',
                images: [
                    'images/fire-fighting/options/gate-valve.jpg',
                    'images/fire-fighting/options/gate-valve-ds.jpg'
                ],
                specs: [
                    { label: 'Material', value: 'Brass' },
                    { label: 'Material Type', value: '(RB) Rough Brass / (PB) Polished Brass' },
                    { label: 'Sizes', value: '1.5" / 2.5"' },
                    { label: 'Connection', value: 'Double Female (Female x Female)' },
                    { label: 'Threads', value: 'NPT or BSP' },
                    { label: 'Approval', value: 'UL and FM' }
                ]
            }
        ]
    },

    // Fire Solutions - Sprinkler Systems
    'sprinkler-wet': {
        name: 'Wet Pipe Sprinkler System',
        code: 'SS-WET-001',
        description: 'Wet pipe sprinkler systems are the most widely used automatic fire suppression system. Water is maintained in the pipes at all times, allowing for immediate discharge when a sprinkler head activates. This system offers the fastest response time and is ideal for buildings where freezing is not a concern.',
        specs: [
            { label: 'Response Time', value: 'Immediate' },
            { label: 'Operating Temperature', value: 'Above 4°C' },
            { label: 'Pipe Material', value: 'Schedule 40 Steel / CPVC' },
            { label: 'Sprinkler Temperature', value: '68°C / 72°C standard' },
            { label: 'Water Pressure', value: '0.5 - 12 bar' },
            { label: 'Coverage Area', value: 'Up to 21m² per head' }
        ],
        features: [
            'Fastest response time of all sprinkler types',
            'Simple design with minimal components',
            'Low installation and maintenance costs',
            'Reliable performance in heated buildings',
            'Compatible with various sprinkler heads',
            'NFPA 13 compliant'
        ]
    },
    'sprinkler-dry': {
        name: 'Dry Pipe Sprinkler System',
        code: 'SS-DRY-002',
        description: 'Dry pipe systems are designed for unheated areas where water in pipes could freeze. The pipes are filled with pressurized air or nitrogen, which holds back the water at a valve. When a sprinkler activates, the air pressure drops and water flows into the system.',
        specs: [
            { label: 'Response Time', value: '60 seconds max' },
            { label: 'Operating Temperature', value: 'Below 4°C' },
            { label: 'Air Pressure', value: '0.5 - 1.5 bar' },
            { label: 'Pipe Material', value: 'Schedule 40 Steel' },
            { label: 'Max Capacity', value: '750 gallons' },
            { label: 'Certification', value: 'FM, UL, LPCB' }
        ],
        features: [
            'Freeze protection for unheated spaces',
            'Automatic air maintenance system',
            'Quick-opening devices available',
            'Corrosion-resistant components',
            'Suitable for parking garages and warehouses',
            'Nitrogen generator compatible'
        ]
    },
    'sprinkler-preaction': {
        name: 'Pre-Action Sprinkler System',
        code: 'SS-PRE-003',
        description: 'Pre-action systems combine features of wet and dry systems, requiring both detection system activation and sprinkler head operation before water is released. This dual-action approach minimizes the risk of accidental water discharge, making them ideal for data centers, museums, and archives.',
        specs: [
            { label: 'Response Type', value: 'Double Interlock' },
            { label: 'Detection Method', value: 'Smoke/Heat Detectors' },
            { label: 'Pipe Condition', value: 'Air-filled (supervised)' },
            { label: 'Activation', value: 'Electric/Pneumatic' },
            { label: 'Release Time', value: '< 60 seconds' },
            { label: 'Applications', value: 'Data Centers, Museums' }
        ],
        features: [
            'Prevents accidental water discharge',
            'Early warning fire detection',
            'Protects sensitive equipment and artifacts',
            'Single and double interlock options',
            'Cross-zoning capability',
            'BMS integration ready'
        ]
    },
    'sprinkler-deluge': {
        name: 'Deluge Sprinkler System',
        code: 'SS-DEL-004',
        description: 'Deluge systems use open sprinkler heads connected to a water supply through a valve that is held closed by a detection system. When fire is detected, the valve opens and water flows through all sprinkler heads simultaneously, providing rapid, comprehensive coverage for high-hazard areas.',
        specs: [
            { label: 'Flow Rate', value: 'High volume discharge' },
            { label: 'Coverage', value: 'Simultaneous all heads' },
            { label: 'Detection', value: 'Smoke/Heat/Flame' },
            { label: 'Valve Type', value: 'Deluge valve' },
            { label: 'Applications', value: 'Industrial hazards' },
            { label: 'Response', value: 'Immediate full coverage' }
        ],
        features: [
            'Instant full-area coverage',
            'Ideal for high-hazard occupancies',
            'Suitable for flammable liquid storage',
            'Aircraft hangar approved',
            'Chemical processing facilities',
            'Power generation facilities'
        ]
    },

    // Fire Solutions - Fire Alarm Systems
    'alarm-smoke': {
        name: 'Smoke Detector - Ionization',
        code: 'FA-SMK-001',
        description: 'Ionization smoke detectors use a small amount of radioactive material to ionize air in a sensing chamber. When smoke enters, it disrupts the ion flow, triggering the alarm. These detectors are particularly sensitive to fast-flaming fires and invisible combustion particles.',
        specs: [
            { label: 'Technology', value: 'Ionization' },
            { label: 'Power Supply', value: '10-Year Sealed Battery' },
            { label: 'Sensitivity', value: '0.9% - 4%/ft obs' },
            { label: 'Alarm Level', value: '85dB at 3m' },
            { label: 'Operating Temp', value: '4°C to 38°C' },
            { label: 'Interconnection', value: 'Up to 40 units' }
        ],
        features: [
            '10-year sealed lithium battery',
            'Hush button to silence unwanted alarms',
            'LED status indicator',
            'End-of-life warning',
            'Easy wall or ceiling mount',
            'EN14604 certified'
        ]
    },
    'alarm-heat': {
        name: 'Heat Detector - Fixed Temperature',
        code: 'FA-HT-002',
        description: 'Fixed temperature heat detectors activate when the ambient temperature reaches a predetermined level. They are ideal for areas where smoke detectors might cause false alarms, such as kitchens, garages, and dusty environments.',
        specs: [
            { label: 'Alarm Temperature', value: '57°C / 88°C options' },
            { label: 'Rate-of-Rise', value: '8°C to 11°C per minute' },
            { label: 'Power Supply', value: 'Hardwired 9-33V DC' },
            { label: 'Current Draw', value: '100μA standby' },
            { label: 'Operating Humidity', value: '10% - 93% RH' },
            { label: 'IP Rating', value: 'IP44' }
        ],
        features: [
            'Dual sensing - fixed and rate-of-rise',
            'Thermistor-based temperature sensing',
            'Self-diagnostic circuitry',
            'Remote LED indicator compatible',
            'Dust and insect resistant',
            '5-year warranty'
        ]
    },
    'alarm-panel': {
        name: 'Fire Alarm Control Panel - 4 Zone',
        code: 'FA-PNL-003',
        description: 'A conventional 4-zone fire alarm control panel designed for small to medium-sized buildings. Each zone can monitor multiple detectors and call points, with clear LED indication showing which zone has been activated. Features include silenced control, fault monitoring, and remote signaling capability.',
        specs: [
            { label: 'Zones', value: '4 (expandable to 8)' },
            { label: 'Devices per Zone', value: 'Up to 32' },
            { label: 'Display', value: 'LCD with backlight' },
            { label: 'Power Supply', value: '230V AC + 24V DC backup' },
            { label: 'Battery', value: '12V 7Ah (included)' },
            { label: 'Outputs', value: 'Bell, Sounder, Relay' }
        ],
        features: [
            'Clear zone identification display',
            'Silence and reset controls',
            '24-hour standby battery',
            'Fault monitoring and indication',
            'Remote monitoring capability',
            'EN54 Part 2 & 4 compliant'
        ]
    },
    'alarm-addressable': {
        name: 'Addressable Fire Alarm Panel',
        code: 'FA-ADR-004',
        description: 'An intelligent addressable fire alarm system that provides precise location identification for each device on the loop. The touch screen interface offers easy programming and monitoring, while BACnet integration allows seamless building management system connectivity.',
        specs: [
            { label: 'Loop Capacity', value: '127 devices per loop' },
            { label: 'Display', value: '7" Color Touch Screen' },
            { label: 'Loops', value: '1-10 expandable' },
            { label: 'Protocol', value: 'CLIP / ANALOG' },
            { label: 'Connectivity', value: 'BACnet, Modbus, Ethernet' },
            { label: 'Event History', value: '10,000 events' }
        ],
        features: [
            'Precise device-level identification',
            'Analog sensor values display',
            'Auto-configuration of devices',
            'Remote programming capability',
            'Graphical user interface',
            'Multiple user access levels'
        ]
    },

    // Fire Solutions - Fire Doors & Barriers
    'door-steel': {
        name: 'Steel Fire Door - FD60',
        code: 'FD-STL-001',
        description: '60-minute fire-rated single or double leaf steel doors with intumescent seals that expand when heated to prevent smoke and fire spread. Galvanized steel construction with powder-coated finish provides durability and corrosion resistance.',
        specs: [
            { label: 'Fire Rating', value: '60 Minutes (FD60)' },
            { label: 'Material', value: 'Galvanized Steel 1.2mm' },
            { label: 'Core', value: 'Mineral Wool' },
            { label: 'Seals', value: 'Intumescent + Smoke' },
            { label: 'Sizes', value: 'Custom made to order' },
            { label: 'Finish', value: 'Powder coated any RAL' }
        ],
        features: [
            'Self-closing mechanism included',
            'Certified hardware set',
            'Fire-rated vision panels available',
            'Anti-finger trap design option',
            'Acoustic insulation available',
            'BS 476 Part 22 tested'
        ],
        options: [
            { 
                label: 'Fire-Rated Self-Closer', 
                value: 'Overhead automatic door closer', 
                image: 'https://images.unsplash.com/photo-1517646288020-9cb08ef9b25b?w=400&h=300&fit=crop',
                description: 'A high-performance overhead door closer tested and certified for use on fire-rated steel and glass doors.',
                specs: [
                    { label: 'Strength Size', value: 'EN 2-4' },
                    { label: 'Max Door Width', value: '1100 mm' }
                ],
                features: [
                    'Adjustable closing speed',
                    'Adjustable latch action',
                    'Silver finish'
                ]
            },
            { 
                label: 'Panic Bar', 
                value: 'Single point emergency push bar', 
                image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?w=400&h=300&fit=crop',
                description: 'An emergency exit panic bar for single leaf fire doors, providing rapid egress in emergency situations.',
                specs: [
                    { label: 'Material', value: 'Aluminium / Steel' },
                    { label: 'Rating', value: 'EN 1125' }
                ],
                features: [
                    'Easy push operation',
                    'Anti-thrust mechanism',
                    'Compatible with outside access devices'
                ]
            }
        ]
    },
    'door-glass': {
        name: 'Fire-Rated Glass Door',
        code: 'FD-GLS-002',
        description: 'Aesthetic fire-rated glass doors that combine safety with modern architectural design. Using advanced ceramic glass technology, these doors provide fire protection while maintaining visibility and natural light transmission.',
        specs: [
            { label: 'Fire Rating', value: '30/60 Minutes' },
            { label: 'Glass Type', value: 'Ceramic Fire Glass' },
            { label: 'Frame', value: 'Stainless Steel 304/316' },
            { label: 'Thickness', value: '60mm system' },
            { label: 'Glazing', value: 'Double or Single' },
            { label: 'Transparency', value: 'Up to 75%' }
        ],
        features: [
            'Maintains integrity and insulation',
            'Impact resistant ceramic glass',
            'Brushed or polished finish options',
            'Custom sizes available',
            'Can be combined with solid panels',
            'EW30/EI60 classified'
        ]
    },
    'damper': {
        name: 'Fire Damper',
        code: 'FD-DMP-003',
        description: 'HVAC fire dampers automatically close when triggered by heat, preventing fire and smoke from spreading through ventilation ducts. Available in various sizes and configurations for rectangular and circular ductwork.',
        specs: [
            { label: 'Fire Rating', value: '2 Hours (120 min)' },
            { label: 'Activation', value: '72°C Fusible Link' },
            { label: 'Closure', value: 'Spring-loaded blades' },
            { label: 'Sizes', value: '200mm x 200mm to 2000mm x 2000mm' },
            { label: 'Material', value: 'Galvanized Steel' },
            { label: 'Pressure', value: 'Up to 1200Pa' }
        ],
        features: [
            'Automatic thermal release',
            'Manual reset capability',
            'Position indicator switch',
            'Low leakage rating',
            'Suitable for vertical and horizontal',
            'EN 15650 certified'
        ]
    },
    'curtain': {
        name: 'Fire Curtain System',
        code: 'FD-CRT-004',
        description: 'Motorized fire curtains provide flexible fire compartmentation for large openings, atriums, and architectural features. When activated, the curtain descends to create a fire barrier, protecting escape routes and limiting fire spread.',
        specs: [
            { label: 'Fire Rating', value: '2-4 Hours' },
            { label: 'Operation', value: 'Motorized with backup' },
            { label: 'Speed', value: '150mm/second' },
            { label: 'Max Size', value: '15m width x 10m height' },
            { label: 'Fabric', value: 'Fiberglass + Silicone' },
            { label: 'Control', value: '24V DC with battery backup' }
        ],
        features: [
            'Invisible when retracted',
            'Multiple activation methods',
            'Two-stage descent option',
            'Integration with BMS',
            'Custom shapes available',
            'BS 8524-1 certified'
        ]
    },

    // Cables - Power Plugs
    'power-plug-eu': {
        name: 'European Power Plug (Round Cord Design) / Flat Type C',
        code: 'PP-EU-C',
        description: 'European Power Cord Flat C Type (Round Cord Design), 2.5 A - 250 Volt, CEE 7/16, Europlug (4.0 mm), 2 Pole (Non-ground), stripped ends, black jacket, RoHS.',
        images: [
            'images/cables/power-plug-eu.png',
            'images/cables/power-plug-eu-datasheet.jpg'
        ],
        datasheetImage: 'images/cables/power-plug-eu-datasheet.jpg',
        specs: [
            { label: 'Voltage & Current', value: '2.5 A - 250 Volt' },
            { label: 'Plug Type', value: 'CEE 7/16, Europlug (4.0 mm)' },
            { label: 'Poles', value: '2 Pole (Non-ground)' },
            { label: 'Color', value: 'Black, White, Grey' },
            { label: 'Length', value: 'Customized' },
            { label: 'Conductor', value: 'Copper stranded, class 5 acc. to EN 60228 (brown, blue)' },
            { label: 'Standards', value: 'IEC 60884, EN 50075' }
        ],
        features: [
            'Designed for appliances that do not require a ground connection',
            'Suitable for household appliances, computers, monitors, printers, laptops',
            'Stripped ends with black jacket',
            'RoHS compliant',
            'Round Cord Design'
        ]
    },

    // Cables - Power Plugs (Type E/F)
    'power-plug-eu-ef': {
        name: 'European Power Plug (Round Cord Design) / Type E/F',
        code: 'PP-EU-EF',
        description: 'European Power Plug, Contour Type, CEE 7/7 Schuko 16 A - 250 V Power supply cord [4.0 mm], 2 Pole [Non-ground], stripped ends, black jacket, RoHS',
        images: [
            'images/cables/power-plug-eu-ef.png',
            'images/cables/power-plug-eu-ef-datasheet.png'
        ],
        datasheetImage: 'images/cables/power-plug-eu-ef-datasheet.png',
        specs: [
            { label: 'Voltage & Current', value: '16 A - 250 V' },
            { label: 'Plug Type', value: 'CEE 7/7 Schuko [4.0 mm]' },
            { label: 'Poles', value: '2 Pole [Non-ground]' },
            { label: 'Color', value: 'Black, White, Grey' },
            { label: 'Length', value: 'Customized' },
            { label: 'Conductor', value: 'Copper stranded, class 5 acc. to EN 60228. (brown, blue)' },
            { label: 'Standards', value: 'IEC 60227, CEE7/17' }
        ],
        features: [
            'Designed for appliances that do not require a ground connection',
            'Suitable for household appliances, computers, monitors, printers, laptops',
            'Stripped ends with black jacket',
            'RoHS compliant',
            'Contour Type, Round Cord Design'
        ]
    },

    // Cables - Power Plugs (Type E/F Angle)
    'power-plug-eu-ef-angle': {
        name: 'European Power Plug (Round Cord Design) / Type E/F Angle',
        code: 'PP-EU-EF-ANG',
        description: 'European Power Plug, CEE 7/7 Schuko 16 A - 250 V Power supply cord, Angle plug, Europlug [4.0 mm], 2 Pole [Non-ground], stripped ends, black jacket, RoHS',
        images: [
            'images/cables/power-plug-eu-ef-angle.png',
            'images/cables/power-plug-eu-ef-angle-datasheet.png'
        ],
        datasheetImage: 'images/cables/power-plug-eu-ef-angle-datasheet.png',
        specs: [
            { label: 'Voltage & Current', value: '16 A - 250 V' },
            { label: 'Plug Type', value: 'Angle plug, CEE 7/7 Schuko [4.0 mm]' },
            { label: 'Poles', value: '2 Pole [Non-ground]' },
            { label: 'Color', value: 'Black, White, Grey' },
            { label: 'Length', value: 'Customized' },
            { label: 'Conductor', value: 'Copper stranded, class 5 acc. to EN 60228. (brown, blue)' },
            { label: 'Standards', value: 'IEC 60227, CEE7/7' }
        ],
        features: [
            'Designed for appliances that do not require a ground connection',
            'Suitable for household appliances, computers, monitors, printers, laptops',
            'Stripped ends with black jacket',
            'RoHS compliant',
            'Angle plug with Round Cord Design'
        ]
    },

    // Cables - Power Plugs (Type E/F Angle 3 Pole)
    'power-plug-eu-ef-angle-3pole': {
        name: 'European Power Plug (Round Cord Design) / Type E/F',
        code: 'PP-EU-EF-ANG-3P',
        description: 'European Power Plug, Angle Type, CEE 7/7 Schuko 16 A - 250 V Power supply cord, Angle Plug, 3 Pole, stripped ends, black jacket, RoHS',
        images: [
            'images/cables/power-plug-eu-ef-angle-3pole.png',
            'images/cables/power-plug-eu-ef-angle-3pole-datasheet.png'
        ],
        datasheetImage: 'images/cables/power-plug-eu-ef-angle-3pole-datasheet.png',
        specs: [
            { label: 'Voltage & Current', value: '16 A - 250 V' },
            { label: 'Plug Type', value: 'Angle Type, CEE 7/7 Schuko' },
            { label: 'Poles', value: '3 Pole' },
            { label: 'Color', value: 'Black, White, Grey' },
            { label: 'Length', value: 'Customized' },
            { label: 'Conductor', value: 'Copper stranded, class 5 acc. to EN 60228. (brown, blue, green/yellow)' },
            { label: 'Standards', value: 'IEC 60884, CEE7/17' }
        ],
        features: [
            'Angle Plug design',
            'Suitable for household appliances, computers, monitors, printers, laptops',
            'Stripped ends with black jacket',
            'RoHS compliant',
            'Round Cord Design'
        ]
    },

    // Cables - Power Plugs (Type E/F Straight)
    'power-plug-eu-ef-straight': {
        name: 'European Power Plug (Round Cord Design) / Type E/F',
        code: 'PP-EU-EF-STR',
        description: 'European Power Plug, Straight Type, CEE 7/7 Schuko 16 A - 250 V Power supply cord, 3 Poles, stripped ends, black jacket, RoHS',
        images: [
            'images/cables/power-plug-eu-ef-straight.png',
            'images/cables/power-plug-eu-ef-straight-datasheet.png'
        ],
        datasheetImage: 'images/cables/power-plug-eu-ef-straight-datasheet.png',
        specs: [
            { label: 'Voltage & Current', value: '16 A - 250 V' },
            { label: 'Plug Type', value: 'Straight Type, CEE 7/7 Schuko' },
            { label: 'Poles', value: '3 Poles' },
            { label: 'Color', value: 'Black, White, Grey' },
            { label: 'Length', value: 'Customized' },
            { label: 'Conductor', value: 'Copper stranded, class 5 acc. to EN 60228. (brown, blue)' },
            { label: 'Standards', value: 'IEC 60884, CEE7/7' }
        ],
        features: [
            'Straight Plug design',
            'Suitable for household appliances, computers, monitors, printers, laptops',
            'Stripped ends with black jacket',
            'RoHS compliant',
            'Round Cord Design'
        ]
    },

    // Cables - Power Cables
    'cable-lv': {
        name: 'LV Power Cable - XLPE Insulated',
        code: 'PC-LV-001',
        description: 'Low voltage power cables with cross-linked polyethylene (XLPE) insulation for superior thermal and electrical performance. Suitable for fixed installation in industrial, commercial, and infrastructure applications.',
        images: [
            'images/cables/power-cable-strands.jpg',
            'images/cables/power-cable-spool.jpg'
        ],
        datasheetImage: 'images/cables/power-datasheet.png',
        specs: [
            { label: 'Voltage Rating', value: '0.6/1kV' },
            { label: 'Conductor', value: 'Copper/Aluminum' },
            { label: 'Insulation', value: 'XLPE' },
            { label: 'Sheath', value: 'PVC/LSZH' },
            { label: 'Temperature', value: '90°C continuous' },
            { label: 'Cores', value: '1, 2, 3, 4, 5 core' }
        ],
        features: [
            'Excellent thermal stability',
            'High current carrying capacity',
            'Chemical and oil resistant',
            'UV resistant for outdoor use',
            'Flame retardant',
            'IEC 60502-1 compliant'
        ]
    },
    'cable-hv': {
        name: 'HV Power Cable - 33kV',
        code: 'PC-HV-002',
        description: 'High voltage underground power cables designed for utility distribution networks and large industrial facilities. XLPE insulation with copper wire screen provides excellent electrical performance and reliability.',
        images: [
            'images/cables/power-cable-spool.jpg',
            'images/cables/power-cable-strands.jpg'
        ],
        datasheetImage: 'images/cables/power-datasheet.png',
        specs: [
            { label: 'Voltage Rating', value: '11kV, 22kV, 33kV' },
            { label: 'Conductor', value: 'Compact Copper' },
            { label: 'Insulation', value: 'XLPE (Dry Cured)' },
            { label: 'Screen', value: 'Copper Wire + Tape' },
            { label: 'Sheath', value: 'HDPE' },
            { label: 'Test Voltage', value: '3.5U0 for 5 min' }
        ],
        features: [
            'Partial discharge tested',
            'Water blocking system',
            'Corrosion resistant',
            'Direct burial suitable',
            'Long service life',
            'IEC 60840 compliant'
        ]
    },
    'cable-armored': {
        name: 'Steel Wire Armored Cable',
        code: 'PC-SWA-003',
        description: 'Steel wire armored (SWA) cables provide mechanical protection for underground installation and industrial power distribution. The galvanized steel wire armor offers excellent protection against impact and rodent damage.',
        images: [
            'images/cables/power-cable-strands.jpg',
            'images/cables/power-cable-spool.jpg'
        ],
        datasheetImage: 'images/cables/power-datasheet.png',
        specs: [
            { label: 'Voltage Rating', value: '600/1000V' },
            { label: 'Conductor', value: 'Copper Class 2' },
            { label: 'Insulation', value: 'XLPE' },
            { label: 'Armor', value: 'Galvanized Steel Wire' },
            { label: 'Sheath', value: 'PVC/LSZH' },
            { label: 'Cores', value: '2, 3, 4, 5 core' }
        ],
        features: [
            'Superior mechanical protection',
            'Suitable for direct burial',
            'Cable cleat compatible',
            'Excellent earthing via armor',
            'Chemical resistant',
            'BS 5467 / IEC 60502'
        ]
    },
    'cable-flexible': {
        name: 'Flexible Power Cable',
        code: 'PC-FLX-004',
        description: 'Highly flexible rubber cables designed for portable equipment, temporary power, and industrial applications requiring frequent movement. The rubber compound provides excellent flexibility even in cold conditions.',
        images: [
            'images/cables/power-cable-spool.jpg',
            'images/cables/power-cable-strands.jpg'
        ],
        datasheetImage: 'images/cables/power-datasheet.png',
        specs: [
            { label: 'Voltage Rating', value: '450/750V' },
            { label: 'Conductor', value: 'Fine Stranded Copper' },
            { label: 'Insulation', value: 'EPR Rubber' },
            { label: 'Sheath', value: 'PCP Rubber' },
            { label: 'Temperature', value: '-40°C to +85°C' },
            { label: 'Flexing', value: 'Continuous movement' }
        ],
        features: [
            'Excellent flexibility',
            'Oil and chemical resistant',
            'Abrasion resistant',
            'Flame retardant',
            'UV and weather resistant',
            'VDE 0282 compliant'
        ]
    },

    // Cables - Ethernet Cables (CAT 6)
    'cable-cat6-uutp': {
        name: 'CAT 6 U/UTP Network Cable',
        code: 'EU6L-0423-WH',
        description: 'Cat 6 U/UTP, 4 twisted pairs, Solid Copper 23 AWG with LSZH Sheathing, White. Packaging: 305 m - Coil in Box.',
        images: [
            'images/ethernet-cable-structure.jpg',
            'images/ethernet/cat6-purple-detail.png',
            'images/ethernet/cat6-cross-section.png',
            'images/ethernet/cat6-grey-coil.png',
            'images/ethernet/cat6-drum.png'
        ],
        specs: [
            { label: 'Conductor', value: '23 AWG Solid Copper' },
            { label: 'Insulation', value: 'HDPE' },
            { label: 'Shielding', value: 'U/UTP (Unshielded)' },
            { label: 'Sheath', value: 'LSZH, White' },
            { label: 'Frequency', value: '250 MHz' },
            { label: 'Packaging', value: '305 m - Coil in Box' }
        ],
        features: [
            'Compliance: ISO/IEC 11801, EN 50173, TIA/EIA 568 C.2',
            'Flame Test: IEC 60332-1, IEC 60332-3C',
            'Supports 10/100/1000 BASE-T (Gigabit Ethernet)',
            'Pass fluke > 90 m, Fluke Test 8000',
            'Operating Temp: -20°C to 70°C',
            'Low smoke zero halogen (LSZH) construction'
        ]
    },
    'cable-cat6-futp': {
        name: 'CAT 6 F/UTP Network Cable',
        code: 'EFU6L-0423-WH',
        description: 'Cat 6 F/UTP, 4 twisted pairs, Solid Copper 23 AWG with foil cover, LSZH Sheathing, White. Packaging: 500 m - Coil in Box.',
        images: [
            'images/ethernet/cat6-futp-infographic.png',
            'images/ethernet-cable-structure.jpg',
            'images/ethernet/cat6-purple-detail.png',
            'images/ethernet/cat6-cross-section.png',
            'images/ethernet/cat6-grey-coil.png',
            'images/ethernet/cat6-drum.png'
        ],
        specs: [
            { label: 'Conductor', value: '23 AWG Solid Copper (99.9999% purity)' },
            { label: 'Insulation', value: 'HDPE, diameter 1.02 mm' },
            { label: 'Shielding', value: 'Foil skin underneath sheathing' },
            { label: 'Drain Wire', value: 'TC Drain Wire' },
            { label: 'Sheath', value: 'LSZH, 0.55 mm thick, White' },
            { label: 'Outer Diameter', value: '6.5 mm' }
        ],
        features: [
            'Compliance: ISO/IEC 11801, EN 50173, TIA/EIA 568 C.2',
            'Flame Test: IEC 60332-1, IEC 60332-3C',
            'Supports 10/100/1000 BASE-T (Gigabit Ethernet)',
            'PoE and 1.2 Gb/s ATM compatible',
            'Pass fluke > 90 m, Fluke Test 8000',
            'Low smoke zero halogen (LSZH) construction'
        ]
    },
    'cable-cat6-sfutp': {
        name: 'CAT 6 SF/UTP Network Cable',
        code: 'ESFU6L-0423-WH',
        description: 'Cat 6 SF/UTP, 4 twisted pairs, Solid Copper 23 AWG, Aluminium cover, Shield, LSZH Sheathing, White. Packaging: 500 m - Coil in Box.',
        images: [
            'images/ethernet/cat6-sfutp-infographic.png',
            'images/ethernet-cable-structure.jpg',
            'images/ethernet/cat6-purple-detail.png',
            'images/ethernet/cat6-cross-section.png',
            'images/ethernet/cat6-grey-coil.png',
            'images/ethernet/cat6-drum.png'
        ],
        specs: [
            { label: 'Conductor', value: '23 AWG Solid Copper (99.9999% purity)' },
            { label: 'Insulation', value: 'HDPE, diameter 1.02 mm' },
            { label: 'Shielding', value: 'Foil + Braid (SF/UTP)' },
            { label: 'Drain Wire', value: 'TC Drain Wire' },
            { label: 'Outer Diameter', value: '6.8 mm' },
            { label: 'Jacket', value: 'LSZH, White' }
        ],
        features: [
            'Maximum EMI/RFI protection',
            'Dual-layer shielding (Braid + Foil)',
            'Compliance: ISO/IEC 11801, EN 50173',
            'Flame Test: IEC 60332-1, IEC 60332-3C',
            'Supports 10/100/1000 BASE-T (Gigabit Ethernet)',
            'Industrial and High-Noise environment ready'
        ]
    },

    // Cables - Ethernet Cables (CAT 6A)
    'cable-cat6a-uutp': {
        name: 'CAT 6A U/UTP Network Cable',
        code: 'EU6AL-0423-WH',
        description: 'Cat 6A U/UTP, 4 twisted pairs, Solid Copper 23 AWG with LSZH Sheathing, White. Packaging: 305 m - Coil in Box.',
        images: [
            'images/ethernet-cable-structure.jpg',
            'images/ethernet/cat6-purple-detail.png',
            'images/ethernet/cat6-cross-section.png',
            'images/ethernet/cat6-grey-coil.png',
            'images/ethernet/cat6-drum.png'
        ],
        specs: [
            { label: 'Conductor', value: '23 AWG Solid Copper' },
            { label: 'Category', value: 'Cat 6A U/UTP' },
            { label: 'Packaging', value: '305 m - Coil in Box' },
            { label: 'Jacket', value: 'LSZH, White' },
            { label: 'Frequency', value: '500 MHz' },
            { label: 'Speed', value: '10 Gbps up to 100m' }
        ],
        features: [
            'Supports 10G BASE-T (10 Gigabit Ethernet)',
            'Optimized for high-density data centers',
            'Reduced alien crosstalk (AXT)',
            'Compliance: ISO/IEC 11801, EN 50173',
            'Flame Test: IEC 60332-1, IEC 60332-3C',
            'Pass fluke > 90 m, Fluke Test 8000'
        ]
    },
    'cable-cat6a-uftp': {
        name: 'CAT 6A U/FTP Network Cable',
        code: 'EUF6AL-0423-WH',
        description: 'Cat 6A U/FTP, 4 foil-covered twisted pairs, with tinned Copper drain wire LSZH Sheathing, White. Packaging: 500 m - Coil on Drum.',
        images: [
            'images/ethernet-cable-structure.jpg',
            'images/ethernet/cat6-purple-detail.png',
            'images/ethernet/cat6-cross-section.png',
            'images/ethernet/cat6-grey-coil.png',
            'images/ethernet/cat6-drum.png'
        ],
        specs: [
            { label: 'Conductor', value: '23 AWG Solid Copper' },
            { label: 'Insulation', value: 'Skin-Foam-Skin' },
            { label: 'Shielding', value: 'Individual Foil (U/FTP)' },
            { label: 'Drain Wire', value: 'Tinned Copper' },
            { label: 'Jacket', value: 'LSZH, White' },
            { label: 'Packaging', value: '500 m - Coil on Drum' }
        ],
        features: [
            'Compliance: ISO/IEC 11801, EN 50173, TIA/EIA 568 C.2',
            'Flame Test: IEC 60332-1, IEC 60332-3C',
            'Supports 10G BASE-T (10 Gigabit Ethernet)',
            'PoE and PoE+ compatible',
            'Pass fluke > 90 m, Fluke Test 8000',
            'Operating Temp: -20°C to 70°C'
        ]
    },
    'cable-cat6a-sftp': {
        name: 'CAT 6A S/FTP Network Cable',
        code: 'ESF6AL-0423-WH',
        description: 'Cat 6A S/FTP, 4 foil-covered twisted pairs, with tinned Copper drain wire, Shield, LSZH Sheathing, White. Packaging: 500 m - Coil on Drum.',
        images: [
            'images/ethernet-cable-structure.jpg',
            'images/ethernet/cat6-purple-detail.png',
            'images/ethernet/cat6-cross-section.png',
            'images/ethernet/cat6-grey-coil.png',
            'images/ethernet/cat6-drum.png'
        ],
        specs: [
            { label: 'Conductor', value: '23 AWG Solid Copper (99.9999% purity)' },
            { label: 'Insulation', value: 'Compressed foam PE, 1.38 mm' },
            { label: 'Shielding', value: 'Foil per pair + TC Braid shield' },
            { label: 'Drain Wire', value: 'Rip Cord included' },
            { label: 'Outer Diameter', value: '7.8 mm' },
            { label: 'Jacket', value: 'LSZH, White' }
        ],
        features: [
            'Maximum noise immunity for Data Centres',
            'Supports 10G BASE-T up to 500 MHz',
            'PoE and PoE+ compatible (IEEE 802.3at)',
            'Compliance: ISO/IEC 11801, EN 50173',
            'Operating Temp: -20°C to 70°C',
            'HVAC and Industrial environment ready'
        ]
    },
    'cable-cat6a-fftp': {
        name: 'CAT 6A F/FTP Network Cable',
        code: 'EFF6AL-0423-WH',
        description: 'Cat 6A F/FTP, 4 foil-covered twisted pairs, with tinned copper drain wire, Aluminium cover, LSZH Sheath, White. Packaging: 500 m - Coil on Drum.',
        images: [
            'images/ethernet-cable-structure.jpg',
            'images/ethernet/cat6-purple-detail.png',
            'images/ethernet/cat6-cross-section.png',
            'images/ethernet/cat6-grey-coil.png',
            'images/ethernet/cat6-drum.png'
        ],
        specs: [
            { label: 'Conductor', value: '23 AWG Solid Copper (99.9999% purity)' },
            { label: 'Insulation', value: 'Skin foam skin, 1.02 mm' },
            { label: 'Shielding', value: 'Aluminium foil skin underneath sheathing' },
            { label: 'Pairs', value: '4 Twisted Pairs with Aluminium foil screen' },
            { label: 'Outer Diameter', value: '7.8 mm' },
            { label: 'Jacket', value: 'LSZH, White' }
        ],
        features: [
            'Dual-layer foil protection for 10G performance',
            'Supports 10G BASE-T (10 Gigabit Ethernet)',
            'Compliance: ISO/IEC 11801, TIA/EIA 568 C.2',
            'Flame Test: IEC 60332-1, IEC 60332-3C',
            'Reduced alien crosstalk (AXT)',
            'Industrial grade LSZH construction'
        ]
    },

    // Cables - Ethernet Cables (CAT 7 & 7A)
    'cable-cat7-sftp': {
        name: 'CAT 7 S/FTP Network Cable',
        code: 'ESF7L-0423-WH',
        description: 'Cat 7 S/FTP, 4 foil-covered twisted pairs, with tinned Copper drain wire, Tinned Copper Shield, LSZH Sheath, White. Packaging: 305/500 m - Coil on Drum.',
        images: [
            'images/ethernet-cable-structure.jpg',
            'images/ethernet/cat6-purple-detail.png',
            'images/ethernet/cat6-cross-section.png',
            'images/ethernet/cat6-grey-coil.png',
            'images/ethernet/cat6-drum.png'
        ],
        specs: [
            { label: 'Conductor', value: '23 AWG Solid Copper (99.9999% purity)' },
            { label: 'Insulation', value: 'Compressed foam PE, 1.38 mm' },
            { label: 'Shielding', value: 'Individual Foil + Inner TC Braid' },
            { label: 'Outer Diameter', value: '8.0 mm' },
            { label: 'Jacket', value: 'LSZH, 0.55 mm thick, White' },
            { label: 'Frequency', value: '600 MHz' }
        ],
        features: [
            '10G BASE-T (10 Gigabit) up to 90m',
            '40 Gigabit (40 Gbps) up to 50m',
            'PoE, PoE+, PoE++ compatible',
            'Compliance: ISO/IEC 11801, EN 50173',
            'Industrial, Data Centres, and Smart Home ready',
            'Flame Test: IEC 60332-1, IEC 60332-3C'
        ]
    },
    'cable-cat7a-fftp': {
        name: 'CAT 7A F/FTP Network Cable',
        code: 'EFF7AL-0423-WH',
        description: 'Cat 7A F/FTP, 4 foil-covered twisted pairs, with tinned Copper drain wire, Aluminium cover, LSZH Sheath, White. Packaging: 305/500 m - Coil on Drum.',
        images: [
            'images/ethernet-cable-structure.jpg',
            'images/ethernet/cat6-purple-detail.png',
            'images/ethernet/cat6-cross-section.png',
            'images/ethernet/cat6-grey-coil.png',
            'images/ethernet/cat6-drum.png'
        ],
        specs: [
            { label: 'Conductor', value: '23 AWG Solid Copper (99.9999% purity)' },
            { label: 'Insulation', value: 'Compressed Foam PE' },
            { label: 'Shielding', value: 'Aluminium foil underneath sheathing' },
            { label: 'Drain Wire', value: 'TC Drain Wire' },
            { label: 'Outer Diameter', value: '8 mm' },
            { label: 'Jacket', value: 'LSZH, 0.55 mm thick, White' }
        ],
        features: [
            '40 Gigabit (40G) and 100 Gigabit (100G) ready',
            'Support for frequencies up to 1000 MHz',
            'PoE, PoE+, PoE++, 4PPOE (100W) compatible',
            'Compliance: ISO/IEC 11801, EN 50173',
            'Industrial and Data Center optimized',
            'Operating Temp: -20°C to 70°C'
        ]
    },
    'cable-fiber': {
        name: 'Single Mode Fiber Optic Cable',
        code: 'DC-FIB-003',
        description: 'OS2 single mode fiber optic cable for long-distance, high-bandwidth data transmission. Ideal for telecommunications, campus backbones, and metropolitan area networks.',
        specs: [
            { label: 'Fiber Type', value: 'OS2 Single Mode' },
            { label: 'Core/Cladding', value: '9/125μm' },
            { label: 'Wavelength', value: '1310nm / 1550nm' },
            { label: 'Attenuation', value: '0.4/0.3 dB/km' },
            { label: 'Distance', value: 'Up to 40km' },
            { label: 'Fiber Count', value: '2 - 144 fibers' }
        ],
        features: [
            'Low attenuation for long distances',
            'Loose tube construction',
            'Water-blocking gel',
            'Armored option available',
            'Indoor/outdoor rated',
            'IEC 60793-2-50 compliant'
        ]
    },
    'cable-thermo': {
        name: 'Thermo Cable ETH-(2/3)C-PVC',
        code: 'ETH-(2/3)C-PVC',
        description: 'Thermo cables are designed for high-temperature applications with a flexible PVC jacket and 2 or 3 cores of flexible copper. Suitable for indoor wiring in mobile and lightweight households, HVAC systems, control and automation, and sensor wiring.',
        images: [
            'images/cables/thermo-cable-structure.png',
            'images/cables/thermo-cable-datasheet.png',
            'images/cables/thermo-cable-datasheet-2.png'
        ],
        specs: [
            { label: 'Voltage Rating', value: '300 V / 500 V' },
            { label: 'Conductor', value: 'Flexible Copper Class 5 (IEC 60228)' },
            { label: 'Cores', value: '2C (Blue, Brown) or 3C (Blue, Brown, Green/Yellow)' },
            { label: 'Cross Section', value: '0.5 / 0.75 / 1.0 / 1.5 mm²' },
            { label: 'Insulation', value: 'PVC (color coded)' },
            { label: 'Outer Sheath', value: 'PVC' },
            { label: 'Operating Temp.', value: '-20°C to +70°C' },
            { label: 'Packaging', value: '100 / 150 / 200 m Drums (on request)' }
        ],
        features: [
            'Flexible Copper Class 5 conductor (IEC 60228)',
            'RoHS compliant — free from hazardous substances',
            'Suitable for indoor wiring in mobile and lightweight household',
            'Used in control and automation systems',
            'Ideal for HVAC systems and sensor wiring',
            'Computer and office equipment, radios and music centers'
        ]
    },
    'cable-power-wire': {
        name: 'Power Wire PW-1x-ST.C-PVC',
        code: 'PW-1x-ST.C-PVC',
        description: 'Electrical single-core power wire with 7 stranded copper conductors and PVC insulation. Available in Red, Yellow, Blue, Black and Yellow-Green. Suitable for low to medium power distribution in residential, commercial, and industrial facilities.',
        images: [
            'images/cables/power-wire-structure.png',
            'images/cables/power-wire-datasheet.png'
        ],
        specs: [
            { label: 'Conductor', value: 'Class 2 Stranded Copper (IEC 60228)' },
            { label: 'Insulation', value: 'PVC (color coded)' },
            { label: 'Cross Sections', value: '1 / 2.5 / 3 / 4 / 6 mm²' },
            { label: 'Colors', value: 'Red, Yellow, Blue, Black, Y-G (on request)' },
            { label: 'Nom. Insulation Thickness', value: '0.6 – 0.8 mm' },
            { label: 'Insulation Resistance', value: '≥ 10 MΩ.km' },
            { label: 'Standard', value: 'IEC 60228 Class 2, RoHS Compliant' },
            { label: 'Packaging', value: '100 / 150 / 200 m Rolls, Drums on request' }
        ],
        features: [
            'Class 2 Stranded Copper conductor (IEC 60228)',
            'RoHS compliant — free from hazardous substances',
            'Used in distribution boards, panel wiring, and load connections',
            'Ideal for internal wiring: lighting circuits, sockets, control panels',
            'Suitable for water pumps, heaters, ACs, and 3-phase motors',
            'Good for installation in conduits, ducts, or compact spaces'
        ]
    },
    'cable-coaxial': {
        name: 'Coaxial RG 6 Cable (RG-6/U)',
        code: 'EUCA-6SC-WH',
        description: 'High-performance 75-ohm coaxial cable with a solid copper conductor and dual-layer shielding (Aluminium Foil + AL Braid). Engineered for superior signal integrity in satellite, cable television, and high-frequency broadband applications.',
        images: [
            'images/cables/coaxial-rg6-structure.png',
            'images/cables/coaxial-rg6-datasheet.png'
        ],
        specs: [
            { label: 'Impedance', value: '75 +/- 3 Ohm' },
            { label: 'Conductor', value: '1.02 mm (18 AWG) Solid Copper' },
            { label: 'Shielding', value: 'Foil (100%) + AL Braid (64x0.12mm)' },
            { label: 'Capacitance', value: '16.2 Pf/Ft' },
            { label: 'Velocity of Prop.', value: '83%' },
            { label: 'Min. Bending Radius', value: '7 cm' },
            { label: 'Outer Diameter', value: '6.80 mm PVC (White)' },
            { label: 'Standard', value: 'IEC 61196, EN 50117' }
        ],
        features: [
            'Solid Annealed Copper core (99.99% purity)',
            'Dual-layer shielding for EMI/RFI protection',
            'Optimized for CCTV and satellite signals',
            'Durable and 100% rust-proof construction',
            'Low attenuation at high frequencies',
            'White PVC Jacket with meter markings'
        ]
    },
    'cable-coaxial-rg11': {
        name: 'Coaxial RG 11 Cable (RG-11/U)',
        code: 'EUCA-11SC-WH',
        description: 'Heavy-duty 75-ohm coaxial cable with a 1.63mm (14 AWG) solid copper conductor and high-density shielding. Specifically designed for long-range high-frequency signal transmission up to 100m in satellite and broadband infrastructures.',
        images: [
            'images/cables/coaxial-rg11-structure.png',
            'images/cables/coaxial-rg11-datasheet.png'
        ],
        specs: [
            { label: 'Impedance', value: '75 +/- 3 Ohm' },
            { label: 'Conductor', value: '1.63 mm (14 AWG) Solid Copper' },
            { label: 'Shielding', value: 'Foil (100%) + AL Braid (64x0.16mm)' },
            { label: 'Capacitance', value: '16.2 Pf/Ft' },
            { label: 'Velocity of Prop.', value: '85%' },
            { label: 'Min. Bending Radius', value: '12 cm' },
            { label: 'Outer Diameter', value: '10.20 mm PVC (White)' },
            { label: 'Standard', value: 'IEC 61196, EN 50117' }
        ],
        features: [
            'Solid Annealed Copper core (99.99% purity)',
            'Exceptional mechanical strength (120KG breaking point)',
            'Extended transmission range up to 100m',
            'Dual-layer high-density shielding',
            'Low attenuation for backbone connections',
            'Robust 10.20mm outer diameter'
        ]
    },
    'cable-fire-alarm': {
        name: 'Fire Alarm Cable (EUFA-2C2.5-RE)',
        code: 'EUFA-2C2.5-RE',
        description: 'Fire Alarm Cable designed for power-limited fire alarm and signal circuits. Features pairs of stranded BC 2.5mm copper conductors with PVC insulation, AL Foil, and a PVC jacket — Fire Resistant, Red. Compliant with NEC Article 760 and IEC standards.',
        images: [
            'images/cables/fire-alarm-cable-structure.png',
            'images/cables/fire-alarm-cable-datasheet.png'
        ],
        specs: [
            { label: 'Voltage Rating', value: '300 V' },
            { label: 'Conductor', value: '48 Stranded BC 0.254mm (99.99% purity)' },
            { label: 'Insulation', value: '0.5mm PVC (Flame-retardant), Black & Red' },
            { label: 'Shielding', value: 'AL/PET Foil + Drain Wire (1TC 0.8mm)' },
            { label: 'Jacket', value: '1.20mm 105°C PVC Red (Fire Resistant)' },
            { label: 'Outer Diameter', value: '8.80 +/- 0.5 mm' },
            { label: 'Standard', value: 'IEC 60332-1-2, IEC 60228' },
            { label: 'Packaging', value: '500 m Wooden Drum' }
        ],
        features: [
            'Flame-retardant PVC insulation (IEC 60332-1-2)',
            'Designed for permanent installation within buildings',
            'Meets NEC Article 760 power-limited circuit requirements',
            'NEC Article 725 Class 2 & 3 compliant',
            'Operating temperature: -20°C to +105°C',
            'Fire-resistant Red PVC jacket for easy identification'
        ]
    },
    'cable-fire-alarm-1-5mm': {
        name: 'Fire Alarm Cable 2C* 1.5 mm²',
        code: 'EUFA-2C1.5-RE',
        description: 'Fire Alarm Cable with pairs of stranded BC 1.5mm copper conductors, PVC insulation, AL Foil shielding and a Fire-Resistant Red PVC jacket. Designed for power-limited fire alarm circuits, compliant with NEC Article 760 and IEC standards.',
        images: [
            'images/cables/fire-alarm-1-5mm-structure.png',
            'images/cables/fire-alarm-1-5mm-datasheet.png'
        ],
        specs: [
            { label: 'Voltage Rating', value: '300 V' },
            { label: 'Conductor', value: '48 Stranded BC 0.20mm (99.99% purity)' },
            { label: 'Insulation', value: '0.44mm PVC (Flame-retardant) 2.55mm dia, Black & Red' },
            { label: 'Shielding', value: 'AL/PET Foil + Drain Wire (1TC 0.8mm)' },
            { label: 'Jacket', value: '1.20mm 105°C PVC Red (Fire Resistant)' },
            { label: 'Outer Diameter', value: '7.70 +/- 0.4 mm' },
            { label: 'Standard', value: 'IEC 60332-1-2, IEC 60228' },
            { label: 'Packaging', value: '500 m Wooden Drum' }
        ],
        features: [
            'Flame-retardant PVC insulation (IEC 60332-1-2)',
            'Designed for permanent installation within buildings',
            'Meets NEC Article 760 power-limited circuit requirements',
            'NEC Article 725 Class 2 & 3 compliant',
            'Operating temperature: -20°C to +105°C',
            'Fire-resistant Red PVC jacket for easy identification'
        ]
    },
    'patch-cord-cat6-1m': {
        name: 'Patch Cord - Cat 6 U/UTP (1m)',
        code: 'PC-6UTP-1M',
        description: 'High-performance Category 6 U/UTP patch cord featuring stranded 24 AWG copper conductors and a Low Smoke Zero Halogen (LSZH) jacket. Designed for reliable network connections in structured cabling systems, providing superior signal integrity and safety.',
        images: [
            'images/patch-cords/cat6-patch-cord-white.png',
            'images/patch-cords/cat6-patch-cord-datasheet.png'
        ],
        datasheetImage: 'images/patch-cords/cat6-patch-cord-datasheet.png',
        specs: [
            { label: 'Category', value: 'Cat 6 U/UTP' },
            { label: 'Conductor', value: 'Stranded 24 AWG Copper' },
            { label: 'Jacket Material', value: 'LSZH (Low Smoke Zero Halogen)' },
            { label: 'Length', value: '1 Meter' },
            { label: 'Color', value: 'White' },
            { label: 'Compliance', value: 'TIA/EIA 568-C.2, ISO/IEC 11801' }
        ],
        features: [
            'Snagless boot protects the connector clip',
            'Stranded conductors for high flexibility',
            'LSZH jacket for minimal smoke and toxic fumes in case of fire',
            '100% factory tested for performance',
            'Ideal for high-density environments',
            'Supports Gigabit and 10-Gigabit Ethernet applications'
        ]
    },
    'patch-cord-cat6-3m': {
        name: 'Patch Cord - Cat 6 U/UTP (3m)',
        code: 'PC-6UTP-3M',
        description: 'High-performance Category 6 U/UTP patch cord featuring stranded 24 AWG copper conductors and a Low Smoke Zero Halogen (LSZH) jacket. Designed for reliable network connections in structured cabling systems, providing superior signal integrity and safety.',
        images: [
            'images/patch-cords/cat6-patch-cord-white.png',
            'images/patch-cords/cat6-patch-cord-white.png',
            'images/patch-cords/cat6-patch-cord-datasheet.png'
        ],
        datasheetImage: 'images/patch-cords/cat6-patch-cord-datasheet.png',
        specs: [
            { label: 'Category', value: 'Cat 6 U/UTP' },
            { label: 'Conductor', value: 'Stranded 24 AWG Copper' },
            { label: 'Jacket Material', value: 'LSZH (Low Smoke Zero Halogen)' },
            { label: 'Length', value: '3 Meters' },
            { label: 'Color', value: 'White' },
            { label: 'Compliance', value: 'TIA/EIA 568-C.2, ISO/IEC 11801' }
        ],
        features: [
            'Snagless boot protects the connector clip',
            'Stranded conductors for high flexibility',
            'LSZH jacket for minimal smoke and toxic fumes in case of fire',
            '100% factory tested for performance',
            'Ideal for high-density environments',
            'Supports Gigabit and 10-Gigabit Ethernet applications'
        ]
    },
    'patch-cord-cat6a-utp-0.5m': {
        name: 'Patch Cord - Cat 6A U/UTP (0.5m)',
        code: 'PC-6AUTP-0.5M',
        description: 'High-speed Category 6A U/UTP patch cord designed for 10 Gigabit Ethernet (10Gbps) performance. Features stranded 24 AWG copper conductors and a Low Smoke Zero Halogen (LSZH) jacket, ensuring maximum data throughput and safety in data center and enterprise environments.',
        images: [
            'images/patch-cords/cat6a-patch-cord-white.png',
            'images/patch-cords/cat6a-patch-cord-datasheet.png'
        ],
        datasheetImage: 'images/patch-cords/cat6a-patch-cord-datasheet.png',
        specs: [
            { label: 'Category', value: 'Cat 6A U/UTP' },
            { label: 'Speed', value: '10 Gbps / 500 MHz' },
            { label: 'Conductor', value: 'Stranded 24 AWG Copper' },
            { label: 'Jacket Material', value: 'LSZH (Low Smoke Zero Halogen)' },
            { label: 'Length', value: '0.5 Meter' },
            { label: 'Color', value: 'White' }
        ],
        features: [
            '10Gbps high-performance data transfer',
            'Snagless boot for clip protection',
            'LSZH jacket for fire safety compliance',
            'Strictly tested for near-end crosstalk (NEXT)',
            'PoE, PoE+, and PoE++ compatible',
            'Ideal for high-density networking'
        ]
    },
    'patch-cord-cat6a-utp-1m': {
        name: 'Patch Cord - Cat 6A U/UTP (1m)',
        code: 'PC-6AUTP-1M',
        description: 'High-speed Category 6A U/UTP patch cord designed for 10 Gigabit Ethernet (10Gbps) performance. Features stranded 24 AWG copper conductors and a Low Smoke Zero Halogen (LSZH) jacket, ensuring maximum data throughput and safety in data center and enterprise environments.',
        images: [
            'images/patch-cords/cat6a-patch-cord-white.png',
            'images/patch-cords/cat6a-patch-cord-datasheet.png'
        ],
        datasheetImage: 'images/patch-cords/cat6a-patch-cord-datasheet.png',
        specs: [
            { label: 'Category', value: 'Cat 6A U/UTP' },
            { label: 'Speed', value: '10 Gbps / 500 MHz' },
            { label: 'Conductor', value: 'Stranded 24 AWG Copper' },
            { label: 'Jacket Material', value: 'LSZH (Low Smoke Zero Halogen)' },
            { label: 'Length', value: '1 Meter' },
            { label: 'Color', value: 'White' }
        ],
        features: [
            '10Gbps high-performance data transfer',
            'Snagless boot for clip protection',
            'LSZH jacket for fire safety compliance',
            'Strictly tested for near-end crosstalk (NEXT)',
            'PoE, PoE+, and PoE++ compatible',
            'Ideal for high-density networking'
        ]
    },
    'patch-cord-cat6a-utp-3m': {
        name: 'Patch Cord - Cat 6A U/UTP (3m)',
        code: 'PC-6AUTP-3M',
        description: 'High-speed Category 6A U/UTP patch cord designed for 10 Gigabit Ethernet (10Gbps) performance. Features stranded 24 AWG copper conductors and a Low Smoke Zero Halogen (LSZH) jacket, ensuring maximum data throughput and safety in data center and enterprise environments.',
        images: [
            'images/patch-cords/cat6a-patch-cord-white.png',
            'images/patch-cords/cat6a-patch-cord-datasheet.png'
        ],
        datasheetImage: 'images/patch-cords/cat6a-patch-cord-datasheet.png',
        specs: [
            { label: 'Category', value: 'Cat 6A U/UTP' },
            { label: 'Speed', value: '10 Gbps / 500 MHz' },
            { label: 'Conductor', value: 'Stranded 24 AWG Copper' },
            { label: 'Jacket Material', value: 'LSZH (Low Smoke Zero Halogen)' },
            { label: 'Length', value: '3 Meters' },
            { label: 'Color', value: 'White' }
        ],
        features: [
            '10Gbps high-performance data transfer',
            'Snagless boot for clip protection',
            'LSZH jacket for fire safety compliance',
            'Strictly tested for near-end crosstalk (NEXT)',
            'PoE, PoE+, and PoE++ compatible',
            'Ideal for high-density networking'
        ]
    },
    'patch-cord-cat6a-ftp-1m': {
        name: 'Patch Cord - Cat 6A U/FTP (1m)',
        code: 'PC-6AFTP-1M',
        description: 'High-performance shielded Category 6A U/FTP patch cord specifically engineered for high-noise environments and critical 10 Gigabit Ethernet (10Gbps) links. Features individually foil-shielded pairs and stranded 26 AWG copper conductors with a Low Smoke Zero Halogen (LSZH) jacket for maximum performance and safety.',
        images: [
            'images/patch-cords/cat6a-ftp-patch-cord-white.png',
            'images/patch-cords/cat6a-ftp-patch-cord-datasheet.png'
        ],
        datasheetImage: 'images/patch-cords/cat6a-ftp-patch-cord-datasheet.png',
        specs: [
            { label: 'Category', value: 'Cat 6A U/FTP' },
            { label: 'Shielding', value: 'Individual Foil Shielded Pairs' },
            { label: 'Speed', value: '10 Gbps / 500 MHz' },
            { label: 'Conductor', value: 'Stranded 26 AWG Copper' },
            { label: 'Jacket Material', value: 'LSZH (Low Smoke Zero Halogen)' },
            { label: 'Length', value: '1 Meter' },
            { label: 'Color', value: 'White' }
        ],
        features: [
            'Individual foil shield for EMI/RFI protection',
            '10Gbps high-performance data transfer',
            'Stranded 26 AWG for maximum flexibility in racks',
            'Snagless boot protects the latch',
            'LSZH jacket for fire safety compliance',
            'Fully compatible with PoE, PoE+, and PoE++'
        ]
    },
    'patch-cord-cat6a-ftp-3m': {
        name: 'Patch Cord - Cat 6A U/FTP (3m)',
        code: 'PC-6AFTP-3M',
        description: 'High-performance shielded Category 6A U/FTP patch cord specifically engineered for high-noise environments and critical 10 Gigabit Ethernet (10Gbps) links. Features individually foil-shielded pairs and stranded 26 AWG copper conductors with a Low Smoke Zero Halogen (LSZH) jacket for maximum performance and safety.',
        images: [
            'images/patch-cords/cat6a-ftp-patch-cord-white.png',
            'images/patch-cords/cat6a-ftp-patch-cord-datasheet.png'
        ],
        datasheetImage: 'images/patch-cords/cat6a-ftp-patch-cord-datasheet.png',
        specs: [
            { label: 'Category', value: 'Cat 6A U/FTP' },
            { label: 'Shielding', value: 'Individual Foil Shielded Pairs' },
            { label: 'Speed', value: '10 Gbps / 500 MHz' },
            { label: 'Conductor', value: 'Stranded 26 AWG Copper' },
            { label: 'Jacket Material', value: 'LSZH (Low Smoke Zero Halogen)' },
            { label: 'Length', value: '3 Meters' },
            { label: 'Color', value: 'White' }
        ],
        features: [
            'Individual foil shield for EMI/RFI protection',
            '10Gbps high-performance data transfer',
            'Stranded 26 AWG for maximum flexibility in racks',
            'Snagless boot protects the latch',
            'LSZH jacket for fire safety compliance',
            'Fully compatible with PoE, PoE+, and PoE++'
        ]
    },

    // Keystone Jacks
    'keystone-utp': {
        name: 'CAT 6 UTP Keystone Jack',
        code: 'KJ-UTP-001',
        description: 'Premium CAT 6 unshielded keystone jack for reliable network connections. Features a tool-less design for quick and easy installation in patch panels and wall plates.',
        specs: [
            { label: 'Category', value: 'CAT 6' },
            { label: 'Shielding', value: 'Unshielded (UTP)' },
            { label: 'Termination', value: 'Tool-less 180 Degree' },
            { label: 'Contact Plating', value: '50μ Gold' },
            { label: 'Housing', value: 'Flame Retardant Plastic' },
            { label: 'Wiring', value: 'T568A / T568B' }
        ],
        features: [
            'Tool-less termination design',
            'High-quality gold plated contacts',
            'Color-coded wiring label',
            'Slim profile for high density',
            'RoHS compliant',
            'Exceeds TIA/EIA 568-C.2'
        ]
    },
    'keystone-ftp': {
        name: 'CAT 6A FTP Keystone Jack',
        code: 'KJ-FTP-002',
        description: 'High-performance CAT 6A shielded keystone jack designed for high-noise environments and 10Gbps applications. Zinc alloy housing provides 360-degree shielding against EMI/RFI.',
        specs: [
            { label: 'Category', value: 'CAT 6A' },
            { label: 'Shielding', value: 'Shielded (FTP)' },
            { label: 'Housing', value: 'Zinc Alloy Die-Cast' },
            { label: 'Frequency', value: '500 MHz' },
            { label: 'Data Rate', value: '10 Gbps' },
            { label: 'Standard', value: 'ISO/IEC 11801' }
        ],
        features: [
            'Full metal shielding for EMI/RFI',
            'Tool-less IDC termination',
            'Supports PoE, PoE+, and PoE++',
            'Robust die-cast construction',
            '360 degree grounding',
            'GHMT certified'
        ]
    },

    // Tools
    'tool-crimper': {
        name: 'Professional Network Crimper',
        code: 'TL-CRM-001',
        description: 'Professional-grade RJ45/RJ11 crimping tool with built-in wire stripper and cutter. Ratchet mechanism ensures a consistent, high-quality crimp every time.',
        specs: [
            { label: 'Connectors', value: 'RJ45, RJ11, RJ12' },
            { label: 'Mechanism', value: 'Ratchet Safety Release' },
            { label: 'Material', value: 'Hardened Carbon Steel' },
            { label: 'Handles', value: 'Ergonomic Non-slip TPR' },
            { label: 'Length', value: '200 mm' },
            { label: 'Weight', value: '0.5 kg' }
        ],
        features: [
            'All-in-one cut, strip, and crimp',
            'Precision ground crimping dies',
            'Ratchet mechanism for full cycle',
            'Built-in wire cutter with guard',
            'Ergonomic grip for comfort',
            'Durable steel construction'
        ]
    },
    'tool-tester': {
        name: 'Digital Network Cable Tester',
        code: 'TL-TST-002',
        description: 'Advanced network cable tester with LCD display for identifying wiring faults, measuring cable length, and tracing cables. Supports RJ45, RJ11, and BNC connectors.',
        specs: [
            { label: 'Connectors', value: 'RJ45, RJ11, BNC' },
            { label: 'Display', value: 'Backlit LCD' },
            { label: 'Functions', value: 'Wiremap, Length, Trace' },
            { label: 'Power', value: '9V Battery' },
            { label: 'Length Accuracy', value: '± 5%' },
            { label: 'Distance', value: 'Up to 1000m' }
        ],
        features: [
            'Graphical wiremap display',
            'TDR technology for length',
            'Identify opens, shorts, crosses',
            'Tone generator for tracing',
            'Low battery indicator',
            'Auto power-off function'
        ]
    },

    // Racks & Cabinets
    'modular-rack-system': {
        name: 'Modular High-Perforation Server Rack System',
        code: 'RK-MOD-SYS',
        description: 'Professional 19-inch high-perforation export server rack featuring a modular knock-down system for maximum versatility. A comprehensive solution supporting a full range of sizes from 4U wall-mount to 47U floor-standing cabinets, built with 2.0mm electro-galvanized steel for superior durability.',
        images: [
            'images/racks/modular-rack-group.png',
            'images/racks/modular-rack-ds-1.png',
            'images/racks/modular-rack-ds-2.png',
            'images/racks/modular-rack-ds-3.png',
            'images/racks/modular-rack-close-up.png'
        ],
        datasheetImage: 'images/racks/modular-rack-ds-2.png',
        specs: [
            { label: 'Capacity Range', value: '4U to 47U' },
            { label: 'Standard', value: 'ANSI/EIA-310 D-1992, IEC 60297' },
            { label: 'Material', value: '2.0 mm Electro-Galvanized Steel' },
            { label: 'Load Capacity', value: 'Up to 1,200 kg' },
            { label: 'Ventilation', value: 'Perforated Roof (1-4 Fans)' },
            { label: 'Grounding', value: 'Integrated Earth Cable Kit' }
        ],
        features: [
            'Modular knock-down system for easy assembly',
            '19" High Perforation Export design',
            'Adjustable depth to accommodate all rack equipment',
            'Durable and 100% rust-proof construction',
            'Supports standard 1.5U 16A PDU (6/8/9 outlets)',
            'Compliance: BS 5954: Part 2, DIN 41494'
        ]
    },

    // Patch Panels
    'patch-24p': {
        name: '24-Port CAT 6 Patch Panel',
        code: 'PP-CAT6-24',
        description: '1U 24-port unshielded CAT 6 patch panel with integrated cable management. Features clear numbering and labeling fields for professional cable organization.',
        specs: [
            { label: 'Ports', value: '24 Ports' },
            { label: 'Category', value: 'CAT 6' },
            { label: 'Height', value: '1U (19 inch Rack)' },
            { label: 'Termination', value: 'Dual Type IDC' },
            { label: 'Material', value: 'Carbon Steel' },
            { label: 'Wiring', value: 'T568A / T568B' }
        ],
        features: [
            'Rear cable management bar',
            'Universal IDC termination',
            'Clear port numbering',
            'Write-on labeling fields',
            'Standard 19" rack mount',
            'Gold plated contacts'
        ]
    },
    'patch-48p': {
        name: '48-Port CAT 6 Patch Panel',
        code: 'PP-CAT6-48',
        description: '2U 48-port high-density CAT 6 patch panel for large network installations. Robust steel construction and high-quality IDC blocks ensure long-term reliability.',
        specs: [
            { label: 'Ports', value: '48 Ports' },
            { label: 'Category', value: 'CAT 6' },
            { label: 'Height', value: '2U (19 inch Rack)' },
            { label: 'Termination', value: 'LSA / 110 Dual IDC' },
            { label: 'Material', value: 'Cold Rolled Steel' },
            { label: 'Color', value: 'Black' }
        ],
        features: [
            'High density 48-port design',
            'Integrated strain relief bar',
            'TIA/EIA 568 compliant',
            'Supports Gigabit Ethernet',
            'Durable powder coat finish',
            'Includes mounting hardware'
        ]
    },
    'patch-panel-blank': {
        name: 'Multi-functional Modular Patch Panel - 24',
        code: 'PP-24P-BU',
        description: 'Professional 1U 19-inch empty screened modular patch panel designed for maximum versatility. It features a robust steel outer frame and an integrated label holder, accepting up to 24 Cat.6, Cat.6a, or Cat.7 keystone jacks for customized high-density network configurations.',
        images: [
            'images/patch-panels/modular-patch-panel-24.png',
            'images/patch-panels/modular-patch-panel-24-datasheet.png'
        ],
        datasheetImage: 'images/patch-panels/modular-patch-panel-24-datasheet.png',
        specs: [
            { label: 'Type', value: 'Modular / Empty / Screened' },
            { label: 'Ports', value: '24 Ports' },
            { label: 'Height', value: '1U (19 inch Rack)' },
            { label: 'Compatibility', value: 'Cat.6 / Cat.6a / Cat.7 Keystone Jacks' },
            { label: 'Material', value: 'Entire Steel Outer Frame' },
            { label: 'Labeling', value: 'Integrated Label Holder' },
            { label: 'Color', value: 'Black' }
        ],
        features: [
            'Multi-functional modular design',
            'Supports high-speed shielded and unshielded links',
            'Entire steel frame for superior durability and grounding',
            'Easy installation with standard 19-inch rack mounting',
            'Flexible port configuration'
        ]
    },
    'patch-panel-integrated': {
        name: 'FTP Integrated Patch Panel - 24',
        code: 'PP-24P6A-7-FTP-PCB',
        description: 'Professional 1U 19-inch integrated shielded patch panel featuring 24 Cat 6A FTP modules and an integrated earth cable for reliable grounding. Designed for high-performance screened network environments, providing superior signal integrity and EMI protection.',
        images: [
            'images/patch-panels/integrated-patch-panel-24.png',
            'images/patch-panels/integrated-patch-panel-24-datasheet.png'
        ],
        datasheetImage: 'images/patch-panels/integrated-patch-panel-24-datasheet.png',
        specs: [
            { label: 'Type', value: 'Integrated Modular / Screened' },
            { label: 'Ports', value: '24 Ports' },
            { label: 'Modules', value: '24 Cat 6A FTP Modules' },
            { label: 'Height', value: '1U (19 inch Rack)' },
            { label: 'Grounding', value: 'Integrated Earth Cable' },
            { label: 'Finish', value: 'Silver' }
        ],
        features: [
            'Full Cat 6A FTP performance',
            'Screened design for maximum EMI/RFI protection',
            'Integrated earth cable for safe grounding',
            'High-density 24-port 1U configuration',
            'Robust silver metallic finish',
            'Standard 19-inch rack mounting'
        ]
    },
    'cable-manager-space': {
        name: '1U Space Panel / Cable Organizer',
        code: 'CMP-1U',
        description: 'Professional 1U 19-inch space panel and plastic cable organizer designed for efficient rack management. It includes a front duct for clean cable routing and protection, ensuring a tidy and professional installation in high-density server environments.',
        images: [
            'images/patch-panels/space-panel-1u.png',
            'images/patch-panels/space-panel-1u-datasheet.png'
        ],
        datasheetImage: 'images/patch-panels/space-panel-1u-datasheet.png',
        specs: [
            { label: 'Type', value: 'Space Panel / Cable Organizer' },
            { label: 'Height', value: '1U (19 inch Rack)' },
            { label: 'Material', value: 'High-Quality Durable Plastic' },
            { label: 'Design', value: 'Integrated Front Duct' },
            { label: 'Application', value: 'Cable Management & Routing' },
            { label: 'Color', value: 'Black' }
        ],
        features: [
            '1U standard rack mountable',
            'Includes front duct for cable organization',
            'Prevents cable strain and tangling',
            'Maintains optimal airflow by organizing cables',
            'Durable construction for long-term use',
            'Easy installation with standard hardware'
        ]
    },
    'faceplate-us': {
        name: 'US Style Faceplate',
        code: 'FPW-70120-2P',
        description: 'Dual Port 70x120 mm US Type Faceplate, Shuttered. Designed for clean, professional keystone jack and network installations. Features high-quality off-white finish.',
        images: [
            'images/patch-panels/us-style-faceplate.png',
            'images/patch-panels/us-style-faceplate-ds.png',
            'images/patch-panels/back-box-uk.png'
        ],
        datasheetImage: 'images/patch-panels/us-style-faceplate-ds.png',
        specs: [
            { label: 'Part No.', value: 'FPW-70120-2P' },
            { label: 'Type', value: 'US Style Faceplate' },
            { label: 'Ports', value: 'Dual Port' },
            { label: 'Dimensions', value: '70x120 mm' },
            { label: 'Features', value: 'Shuttered' },
            { label: 'Colours', value: 'Off-white' }
        ],
        features: [
            'US Type 70x120 mm form factor',
            'Dual Port with shuttered design',
            'Compatible with standard keystone jacks',
            'Durable construction for professional use',
            'Clean off-white finish blends with walls'
        ]
    },
    'faceplate-uk': {
        name: 'UK Style Faceplate',
        code: 'FP86-A25',
        description: 'Single Gang, Horizontal Faceplates, UK Style, Shuttered, Accepts 2 Modules. Designed for clean, professional keystone jack and network installations. Features high-quality white finish.',
        images: [
            'images/patch-panels/uk-style-faceplate.png',
            'images/patch-panels/uk-style-faceplate-ds.png',
            'images/patch-panels/back-box-uk.png'
        ],
        datasheetImage: 'images/patch-panels/uk-style-faceplate-ds.png',
        specs: [
            { label: 'Part No.', value: 'FP86-A25' },
            { label: 'Type', value: 'UK Style Faceplate' },
            { label: 'Format', value: 'Single Gang, Horizontal' },
            { label: 'Modules', value: 'Accepts 2 Modules' },
            { label: 'Features', value: 'Shuttered' },
            { label: 'Colours', value: 'White' }
        ],
        features: [
            'UK Style Single Gang Horizontal design',
            'Accepts 2 keystone modules',
            'Shuttered ports for dust protection',
            'Compatible with standard UK wall boxes',
            'High-quality durable construction'
        ]
    }
};

// ========================================
// Product Modal Logic
// ========================================

/**
 * Show product details in a modal with 3 tabs: Overview, Technical, Optional
 * @param {string} productId - The ID of the product in productData
 * @param {string} [addonLabel] - Optional label of an accessory item
 */
function showProductModal(productId, addonLabel = null) {
    let product = productData[productId];
    if (!product) return;

    // Handle accessory (addon) selection
    if (addonLabel && product.options) {
        const addon = product.options.find(o => o.label === addonLabel);
        if (addon) {
            product = {
                name: addon.label,
                code: product.code + '-ACC',
                description: addon.description,
                images: addon.images || [addon.image],
                specs: addon.specs || [{ label: 'Type', value: addon.value }],
                features: addon.features || [],
                options: []
            };
        }
    }

    const modal    = document.getElementById('productModal');
    const modalBody = document.getElementById('modalBody');
    if (!modal || !modalBody) return;

    const img = (product.images && product.images.length > 0)
        ? product.images[0]
        : (product.datasheetImage || 'images/fire-fighting/extinguisher.png');

    /* ── Features ──────────────────────────────────────────── */
    const featuresHtml = (product.features || []).map(f => `
        <li><i class="fas fa-check-circle"></i> <span>${f}</span></li>
    `).join('');

    /* ── Technical Specs table ───────────────────────────────── */
    const specsRows = (product.specs || []).map((s, i) => `
        <tr class="${i % 2 === 0 ? 'even' : 'odd'}">
            <td class="spec-label"><i class="fas fa-circle-dot"></i> ${s.label}</td>
            <td class="spec-value">${s.value}</td>
        </tr>
    `).join('');

    const techHtml = specsRows
        ? `<table class="tech-specs-table"><tbody>${specsRows}</tbody></table>`
        : `<p class="no-data-msg" data-en="No technical specifications available." data-ar="لا توجد مواصفات فنية متاحة."><i class="fas fa-info-circle"></i> No technical specifications available.</p>`;

    /* ── Optional / Accessories ─────────────────────────────── */
    const options = product.options || [];
    const optionalHtml = options.length > 0
        ? `<div class="optional-grid">${options.map(o => `
            <div class="optional-card" onclick="showProductModal('${productId}','${o.label}')">
                ${o.image ? `<div class="optional-img"><img src="${o.image}" alt="${o.label}" onerror="this.style.display='none'"></div>` : ''}
                <div class="optional-card-body">
                    <h4>${o.label}</h4>
                    <p>${o.description ? o.description.substring(0, 90) + (o.description.length > 90 ? '…' : '') : o.value}</p>
                    <span class="optional-link" data-en="View details" data-ar="عرض التفاصيل">View details <i class="fas fa-arrow-right"></i></span>
                </div>
            </div>
        `).join('')}</div>`
        : '';

    /* ── Modal HTML ─────────────────────────────────────────── */
    modalBody.innerHTML = `
        <div class="modal-hero">
            <div class="modal-hero-img">
                <img src="${img}" alt="${product.name}" id="modalMainImg">
                ${product.images && product.images.length > 1 ? `
                <div class="modal-thumbnails">
                    ${product.images.map((src, idx) => `
                        <img src="${src}" class="modal-thumb${idx === 0 ? ' active' : ''}"
                             onclick="document.getElementById('modalMainImg').src='${src}';
                                      document.querySelectorAll('.modal-thumb').forEach(t=>t.classList.remove('active'));
                                      this.classList.add('active')"
                             alt="Image ${idx+1}" onerror="this.style.display='none'">
                    `).join('')}
                </div>` : ''}
            </div>
            <div class="modal-hero-info">
                <div class="modal-product-badge"><i class="fas fa-tag"></i> ${product.code}</div>
                <h2 class="modal-product-name" data-en="${product.name}" data-ar="${product.name_ar || product.name}">${product.name}</h2>
                <div class="modal-product-desc" data-en='${product.description}' data-ar='${product.description_ar || product.description}'>${product.description}</div>
                <a href="mailto:baitmuhandis@gmail.com" class="btn btn-primary modal-cta" onclick="closeProductModal()" data-en="Request a Quote" data-ar="طلب عرض سعر">
                    <i class="fas fa-phone"></i> Request a Quote
                </a>
                <a href="${product.pdf ? product.pdf : '#'}" class="btn btn-secondary modal-cta" target="_blank" data-en="Technical PDF" data-ar="ملف فني" style="margin-left: 10px;">
                    <i class="fas fa-file-pdf"></i> Technical PDF
                </a>
            </div>
        </div>

        <!-- Tabs -->
        <div class="modal-tabs">
            <button class="modal-tab active" data-tab="overview" data-en="Overview" data-ar="نظرة عامة">
                <i class="fas fa-info-circle"></i> Overview
            </button>
            <button class="modal-tab" data-tab="technical" data-en="Technical Specs" data-ar="المواصفات الفنية">
                <i class="fas fa-flask"></i> Technical Specs
            </button>
        </div>

        <!-- Tab Panels -->
        <div class="modal-tab-panels">
            <div class="modal-tab-panel active" data-panel="overview">
                ${featuresHtml
                    ? `<ul class="modal-features-list">${featuresHtml}</ul>`
                    : `<p class="no-data-msg" data-en="No feature list available." data-ar="لا توجد قائمة مميزات متاحة."><i class="fas fa-info-circle"></i> No feature list available.</p>`}
                
                ${options.length > 0 ? `
                    <div class="modal-section-divider"></div>
                    <h3 class="modal-section-title" data-en="Optional Accessories" data-ar="ملحقات اختيارية"><i class="fas fa-plus-circle"></i> Optional Accessories</h3>
                    ${optionalHtml}
                ` : ''}
            </div>
            <div class="modal-tab-panel" data-panel="technical">
                ${techHtml}
            </div>
        </div>
    `;

    /* ── Tab switching ──────────────────────────────────────── */
    modalBody.querySelectorAll('.modal-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            modalBody.querySelectorAll('.modal-tab').forEach(t => t.classList.remove('active'));
            modalBody.querySelectorAll('.modal-tab-panel').forEach(p => p.classList.remove('active'));
            tab.classList.add('active');
            modalBody.querySelector(`.modal-tab-panel[data-panel="${tab.dataset.tab}"]`).classList.add('active');
        });
    });

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Re-run translation for dynamic content
    if (typeof switchLanguage === 'function') {
        const savedLang = localStorage.getItem('language') || 'en';
        switchLanguage(savedLang);
    }
}


/**
 * Close the product modal
 */
function closeProductModal() {
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside content
window.addEventListener('click', function(event) {
    const modal = document.getElementById('productModal');
    if (event.target === modal) {
        closeProductModal();
    }
});

// Close modal on escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeProductModal();
    }
});