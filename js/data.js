// ─── SITE DATA ───────────────────────────────────────────────────────────────
// Edit this file to update services, providers, and reviews.
// No build step needed — just save and push.

const CATEGORIES = [
  { id: "massage",      label: "Massage & Body",    serviceIds: ["swedish","deep-tissue","lymphatic","couples"] },
  { id: "laser",        label: "Laser & Skin",      serviceIds: ["alma-harmony","signature-facial","emface","red-light"] },
  { id: "sculpting",    label: "Body Sculpting",    serviceIds: ["emsculpt-neo","emsella","body-composition"] },
  { id: "wellness",     label: "IV & Wellness",     serviceIds: ["iv-therapy","infrared-sauna","foot-detox"] },
  { id: "injectables",  label: "Injectables",       serviceIds: ["botox","dermal-fillers"] },
  { id: "weight",       label: "Weight Management", serviceIds: ["semaglutide","tirzepatide"] },
];

const SERVICES = [
  // ── MASSAGE ──
  { id:"swedish", name:"Swedish Massage", category:"massage", icon:"hands",
    description:"A full-body relaxation massage using long, flowing strokes.",
    fullDescription:"Our Swedish massage is the gold standard of relaxation — a full-body experience using long, fluid effleurage strokes, gentle kneading, and rhythmic tapping to melt away surface tension and quiet the mind. It improves circulation, eases muscle tightness, and leaves you feeling genuinely restored rather than just temporarily unwound.",
    tags:["Relaxation","Circulation","Stress relief","All levels"],
    duration:"60 or 90 min", price:"From $85", area:"Full body",
    providerIds:["teressa","rachel","maria"] },

  { id:"deep-tissue", name:"Deep Tissue Massage", category:"massage", icon:"hands",
    description:"Firm, focused pressure that reaches deeper muscle layers.",
    fullDescription:"Deep tissue massage targets the inner layers of muscle and connective tissue using slow, deliberate strokes and sustained pressure. Particularly effective for chronic pain, stubborn knots, postural tension from desk work, and recovery from physical exertion. Our therapists work methodically and communicate throughout.",
    tags:["Chronic pain","Recovery","Tension release","Therapeutic"],
    duration:"60 or 90 min", price:"From $95", area:"Targeted or full body",
    providerIds:["teressa","maria"] },

  { id:"lymphatic", name:"Lymphatic Drainage", category:"massage", icon:"leaf",
    description:"Gentle rhythmic strokes that stimulate the lymphatic system.",
    fullDescription:"Manual lymphatic drainage uses light, rhythmic pressure to encourage the movement of lymph fluid through the body's natural drainage pathways. The result is reduced puffiness and inflammation, improved immune function, and a feeling of lightness throughout. Excellent after cosmetic procedures, during illness recovery, or as a regular immune-support practice.",
    tags:["Detox","Post-procedure","Immune support","Anti-inflammatory"],
    duration:"60 min", price:"From $110", area:"Full body",
    providerIds:["rachel"] },

  { id:"couples", name:"Couples Massage", category:"massage", icon:"hands",
    description:"Side-by-side massage for two in our dedicated couples suite.",
    fullDescription:"Share the experience in our beautifully appointed couples suite. Two therapists work simultaneously so you and your guest enjoy identical treatments side by side. A meaningful way to celebrate an occasion, decompress together, or simply gift someone an afternoon they won't forget.",
    tags:["Romantic","Gift idea","Relaxation","Side by side"],
    duration:"60 or 90 min", price:"From $170", area:"Full body",
    providerIds:["teressa","rachel","maria"] },

  // ── LASER ──
  { id:"alma-harmony", name:"Alma Harmony Laser", category:"laser", icon:"glow",
    description:"Multi-modal laser platform FDA-cleared for 130+ indications.",
    fullDescription:"The Alma Harmony XL Pro is the most versatile laser system available — FDA-cleared for over 130 clinical indications. It treats pigmentation, sun damage, vascular lesions, acne scarring, hair removal, tattoo removal, and full skin rejuvenation across all Fitzpatrick skin types. Our certified laser technicians customize each session to your specific skin concerns and goals.",
    tags:["Pigmentation","Hair removal","Tattoo removal","All skin types"],
    duration:"30–90 min", price:"From $150", area:"Face or body",
    providerIds:["jordan"] },

  { id:"signature-facial", name:"Signature Facial", category:"laser", icon:"face",
    description:"A fully customized facial tailored to your skin's current needs.",
    fullDescription:"No two signature facials are the same. Your esthetician begins with a thorough skin analysis, then builds a treatment using the best combination of cleansing, enzyme exfoliation, extractions, masking, and targeted serums for your skin on that particular day. Our most beloved service.",
    tags:["Hydration","Customized","Glow","Anti-aging"],
    duration:"60 min", price:"From $90", area:"Face & neck",
    providerIds:["jordan","ashley"] },

  { id:"emface", name:"EMFACE", category:"laser", icon:"face",
    description:"Needle-free facial lifting using synchronized RF and HIFES energy.",
    fullDescription:"EMFACE is the first FDA-cleared device to simultaneously treat facial skin and the underlying muscles — all without injections. It combines radiofrequency energy (which tightens and smooths skin) with HIFES electrical stimulation (which strengthens and lifts facial muscles). No downtime. No needles.",
    tags:["Non-invasive","Lifting","Muscle toning","No downtime"],
    duration:"20 min per session", price:"From $300/session", area:"Face",
    providerIds:["jordan"] },

  { id:"red-light", name:"Red Light Therapy", category:"laser", icon:"glow",
    description:"Low-level light therapy for skin, inflammation, and cellular repair.",
    fullDescription:"Red and near-infrared light at specific wavelengths penetrates the skin to stimulate collagen production, accelerate cellular repair, and reduce inflammation. Sessions are deeply relaxing. Effective for skin rejuvenation, wound healing, joint pain, and overall wellness. Can be combined with other treatments.",
    tags:["Collagen","Anti-inflammatory","Skin health","Cellular repair"],
    duration:"20–30 min", price:"From $45", area:"Full body or face",
    providerIds:["ashley"] },

  // ── SCULPTING ──
  { id:"emsculpt-neo", name:"EmSculpt Neo", category:"sculpting", icon:"body",
    description:"The only device that simultaneously builds muscle and reduces fat.",
    fullDescription:"EmSculpt Neo combines HIFEM+ electromagnetic energy (which induces powerful muscle contractions impossible through voluntary exercise) with synchronized RF heating (which destroys fat cells). Clinical studies show an average of 25% more muscle and 30% less fat in the treatment area after a full protocol.",
    tags:["Fat reduction","Muscle building","Non-invasive","No downtime"],
    duration:"30 min per session", price:"From $750/session", area:"Abdomen, glutes, arms, calves",
    providerIds:["jordan","ashley"] },

  { id:"emsella", name:"EMSELLA", category:"sculpting", icon:"body",
    description:"FDA-cleared pelvic floor treatment for incontinence and confidence.",
    fullDescription:"EMSELLA uses high-intensity focused electromagnetic energy to stimulate deep pelvic floor muscles — the equivalent of 11,000 Kegel exercises in a single 28-minute session. FDA-cleared for urinary incontinence and pelvic floor strengthening. Patients remain fully clothed throughout.",
    tags:["Women's health","Pelvic floor","FDA-cleared","Incontinence"],
    duration:"28 min", price:"From $300/session", area:"Pelvic floor",
    providerIds:["jordan"] },

  { id:"body-composition", name:"3D Body Composition", category:"sculpting", icon:"body",
    description:"Precise full-body measurements to set and track your goals.",
    fullDescription:"Our 3D body composition scan provides a comprehensive picture of your body — muscle mass, body fat percentage, visceral fat, and precise measurements at every point. The foundation for any body-change goal, whether you're doing EmSculpt Neo, weight management, or simply want an honest baseline.",
    tags:["Body composition","Goal setting","Baseline","Tracking"],
    duration:"30 min", price:"From $75", area:"Full body",
    providerIds:["ashley"] },

  // ── WELLNESS ──
  { id:"iv-therapy", name:"IV Therapy", category:"wellness", icon:"droplet",
    description:"Direct nutrient delivery for hydration, energy, and recovery.",
    fullDescription:"IV therapy bypasses the digestive system entirely, delivering vitamins, minerals, and hydration directly into the bloodstream for 100% absorption. Our clinical team offers a menu of formulas for hydration, immune support, energy, athletic recovery, and beauty (biotin, glutathione). Sessions are relaxing — settle in and let your body absorb what it needs.",
    tags:["Hydration","Immunity","Energy","Recovery"],
    duration:"45–60 min", price:"From $120", area:"Intravenous",
    providerIds:["dr-nguyen"] },

  { id:"infrared-sauna", name:"Infrared Sauna", category:"wellness", icon:"heat",
    description:"Deep-penetrating heat for detoxification and relaxation.",
    fullDescription:"Unlike traditional saunas, infrared saunas emit light absorbed directly by the body — warming you from within at a comfortable ambient temperature. This promotes detoxification through sweat, improves cardiovascular circulation, relieves muscle soreness, and produces profound relaxation. Often combined with red light therapy.",
    tags:["Detox","Circulation","Relaxation","Muscle recovery"],
    duration:"30–45 min", price:"From $45", area:"Full body",
    providerIds:["ashley"] },

  { id:"foot-detox", name:"Foot Detox", category:"wellness", icon:"droplet",
    description:"Ionic foot bath to draw out impurities and restore energy flow.",
    fullDescription:"An ionic foot bath uses a gentle electrical current to ionize the water, drawing toxins and impurities out through the pores of the feet. The session is completely painless and deeply relaxing — a grounding, restorative complement to any wellness visit.",
    tags:["Detox","Relaxation","Holistic","Grounding"],
    duration:"30 min", price:"From $35", area:"Feet",
    providerIds:["ashley"] },

  // ── INJECTABLES ──
  { id:"botox", name:"Neurotoxin (Botox / Dysport / Xeomin)", category:"injectables", icon:"needle",
    description:"Precise muscle relaxation for a smooth, natural, refreshed look.",
    fullDescription:"Our injectable practitioners have a refined, conservative philosophy: the goal is always to look like yourself — just more rested. Neurotoxins are placed with precision in the forehead, glabella, and crow's feet to relax overactive muscles without sacrificing expression. We carry Botox, Dysport, and Xeomin.",
    tags:["Anti-aging","Natural results","No downtime","Wrinkle relaxer"],
    duration:"30 min", price:"From $12/unit", area:"Face",
    providerIds:["dr-nguyen"] },

  { id:"dermal-fillers", name:"Dermal Fillers", category:"injectables", icon:"needle",
    description:"Hyaluronic acid fillers to restore volume and contour gracefully.",
    fullDescription:"Dermal fillers use hyaluronic acid to restore lost volume, soften deep lines, and refine facial contours. Common areas include lips, nasolabial folds, cheeks, under-eyes, and jawline. Results are immediate and can last 9–18 months. Our practitioners prioritize balance and proportion — results should enhance your features, not redefine them.",
    tags:["Volume","Contouring","Natural","Immediate results"],
    duration:"45–60 min", price:"From $650/syringe", area:"Face",
    providerIds:["dr-nguyen"] },

  // ── WEIGHT ──
  { id:"semaglutide", name:"Semaglutide Program", category:"weight", icon:"body",
    description:"Medical weight loss with weekly GLP-1 injections and clinical support.",
    fullDescription:"Semaglutide is a GLP-1 receptor agonist that regulates appetite and blood sugar. Our program includes an initial consultation and lab work, personalized dosing, weekly injections, and ongoing clinical monitoring. Most patients experience meaningful weight loss within the first 4–8 weeks. Requires consultation prior to starting.",
    tags:["Medical weight loss","GLP-1","Clinically supervised","Appetite regulation"],
    duration:"Ongoing program", price:"Consultation required", area:"Systemic",
    providerIds:["dr-nguyen"] },

  { id:"tirzepatide", name:"Tirzepatide Program", category:"weight", icon:"body",
    description:"Dual GIP/GLP-1 agonist — the next generation of medical weight loss.",
    fullDescription:"Tirzepatide acts on two separate hormone receptors (GIP and GLP-1) to more powerfully regulate appetite, blood sugar, and metabolism. Clinical trials show 15–20% body weight loss over treatment. Our program wraps the medication in comprehensive clinical support and goal tracking.",
    tags:["Medical weight loss","Dual agonist","Clinically supervised","Advanced"],
    duration:"Ongoing program", price:"Consultation required", area:"Systemic",
    providerIds:["dr-nguyen"] },
];

const PROVIDERS = [
  { id:"teressa", name:"Teressa M.", title:"Licensed Massage Therapist", credentials:"LMT", years:8,
    avatarInitials:"TM", avatarBg:"rgba(45,74,40,0.2)", avatarColor:"#2d4a28",
    bio:"Teressa is the warm heartbeat of Aisling — the person who greets you at the door and makes you feel at home before a single treatment begins. Her massage work is fluid, intuitive, and deeply attentive. She reads the body with years of trained instinct and has a gift for knowing exactly what each client needs, often before they say it.",
    specialties:["Swedish massage","Deep tissue","Couples massage","Prenatal massage"],
    bookingUrl:"https://aislingwellnesscenter.com/book",
    serviceIds:["swedish","deep-tissue","couples"] },

  { id:"rachel", name:"Rachel K.", title:"LMT, Certified Aromatherapist", credentials:"LMT, CA", years:5,
    avatarInitials:"RK", avatarBg:"rgba(61,48,32,0.2)", avatarColor:"#3d3020",
    bio:"Rachel brings a multi-sensory dimension to her practice — a licensed massage therapist and certified aromatherapist who creates custom scent blends for each session. She's particularly beloved for her lymphatic drainage work and her clients often report sleeping better for days afterward.",
    specialties:["Lymphatic drainage","Aromatherapy massage","Swedish massage","Stress relief"],
    bookingUrl:"https://aislingwellnesscenter.com/book",
    serviceIds:["swedish","lymphatic","couples"] },

  { id:"maria", name:"Maria L.", title:"Licensed Massage Therapist", credentials:"LMT", years:3,
    avatarInitials:"ML", avatarBg:"rgba(30,48,64,0.2)", avatarColor:"#1e3040",
    bio:"Maria's approach is defined by presence and gentleness. She's an exceptional therapist for clients new to massage, recovering from injury, or who prefer a lighter, more mindful touch. Don't mistake gentle for ineffective — her sessions produce lasting results through precise technique.",
    specialties:["Gentle Swedish","Relaxation","New client introductions","Sensitivity care"],
    bookingUrl:"https://aislingwellnesscenter.com/book",
    serviceIds:["swedish","deep-tissue","couples"] },

  { id:"jordan", name:"Jordan P.", title:"Medical Aesthetician & Laser Tech", credentials:"LE, CLT", years:6,
    avatarInitials:"JP", avatarBg:"rgba(42,32,64,0.2)", avatarColor:"#2a2040",
    bio:"Jordan is our technology specialist — trained on every device in the Aisling suite and certified in laser therapy across all Fitzpatrick skin types. She approaches aesthetic treatments with a clinical mindset and an artist's eye, always prioritizing natural, proportionate results.",
    specialties:["Alma Harmony laser","EmSculpt Neo","EMFACE","EMSELLA","Skin analysis"],
    bookingUrl:"https://aislingwellnesscenter.com/book",
    serviceIds:["alma-harmony","signature-facial","emface","emsculpt-neo","emsella"] },

  { id:"ashley", name:"Ashley R.", title:"Licensed Esthetician", credentials:"LE", years:4,
    avatarInitials:"AR", avatarBg:"rgba(61,32,48,0.2)", avatarColor:"#3d2030",
    bio:"Ashley is a skin-care purist who believes the foundation of great aesthetics is great skin health. She customizes every facial to what the skin is doing that day, and her clients trust her completely. Also certified in red light therapy and body composition analysis.",
    specialties:["Signature facial","Red light therapy","Infrared sauna","3D body composition","Foot detox"],
    bookingUrl:"https://aislingwellnesscenter.com/book",
    serviceIds:["signature-facial","red-light","infrared-sauna","foot-detox","body-composition","emsculpt-neo"] },

  { id:"dr-nguyen", name:"Dr. Linh Nguyen", title:"Medical Director, NP-C", credentials:"NP-C, MSN", years:12,
    avatarInitials:"LN", avatarBg:"rgba(26,48,40,0.2)", avatarColor:"#1a3028",
    bio:"Dr. Nguyen oversees all medical treatments at Aisling with the precision and warmth that defines everything we do. Over a decade of experience in medical aesthetics and functional wellness, with a philosophy of treating the whole person. Her injectable work is known for its restraint and natural results.",
    specialties:["Neurotoxins","Dermal fillers","IV therapy","Semaglutide","Tirzepatide","Medical oversight"],
    bookingUrl:"https://aislingwellnesscenter.com/book",
    serviceIds:["botox","dermal-fillers","iv-therapy","semaglutide","tirzepatide"] },
];

const REVIEWS = [
  { id:"r1", author:"Sarah M.", initials:"SM", rating:5, date:"January 2025",
    text:"Such a beautiful place with great services and a fabulous boutique. An amazing experience with exceptional service and a welcoming atmosphere. I will be back again and again." },
  { id:"r2", author:"Jennifer L.", initials:"JL", rating:5, date:"February 2025",
    text:"What a warm, inviting, encouraging environment. They go far and beyond with the many services they offer. All staff were so friendly and informative. I will recommend this place to everyone!" },
  { id:"r3", author:"Donna T.", initials:"DT", rating:5, date:"December 2024",
    text:"I have had the opportunity to enjoy services from almost everyone at Aisling and everyone did a fantastic job! I love how you are greeted upon entering by Teressa. She makes you feel so welcome." },
  { id:"r4", author:"Michelle R.", initials:"MR", rating:5, date:"March 2025",
    text:"Absolutely love this place. The EmSculpt Neo results have been incredible — I was skeptical at first but the before and after photos speak for themselves. The whole team is professional and warm." },
  { id:"r5", author:"Carolyn B.", initials:"CB", rating:5, date:"November 2024",
    text:"Aisling is unlike anything else in Lubbock. The space itself is stunning — those green walls and the antiques create an atmosphere that feels both luxurious and deeply calming." },
  { id:"r6", author:"Patricia W.", initials:"PW", rating:5, date:"February 2025",
    text:"Dr. Nguyen is exceptional. She took so much time with me during our consultation and the results from my fillers are so natural — exactly what I wanted. This is the only place I trust for injectables." },
];

const CREDENTIALS = [
  "Licensed specialists","FDA-cleared technology","CareCredit accepted",
  "5-star rated in Lubbock","Medical director on staff","West Texas's premier med spa",
];

const HOME_SERVICES = [
  { id:"massage",     name:"Massage therapy",  desc:"Swedish, deep tissue, lymphatic drainage, aromatherapy, and couples.", icon:"hands"  },
  { id:"laser",       name:"Laser & skin",      desc:"Alma Harmony, EMFACE, signature facials, and red light therapy.",     icon:"glow"   },
  { id:"sculpting",   name:"Body sculpting",   desc:"EmSculpt Neo, EMSELLA, and 3D body composition analysis.",            icon:"body"   },
  { id:"wellness",    name:"IV & wellness",    desc:"IV therapy, infrared sauna, foot detox, and holistic treatments.",    icon:"droplet"},
  { id:"injectables", name:"Injectables",      desc:"Botox, Dysport, Xeomin, and dermal fillers — natural results.",       icon:"needle" },
  { id:"weight",      name:"Weight management",desc:"Semaglutide, tirzepatide, and medically guided programs.",            icon:"leaf"   },
];
