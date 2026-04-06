// ─── SITE DATA ───────────────────────────────────────────────────────────────
// Edit this file to update services, providers, and reviews.
// No build step needed — just save and push.

const CATEGORIES = [
  {
    id: "massage",
    label: "Massage & Body",
    subCategories: [
      { label: "Therapeutic Massage", serviceIds: ["swedish", "deep-tissue", "lymphatic", "couples"] }
    ]
  },

  {
    id: "laser",
    label: "Laser & Skin",
    subCategories: [
      { 
        label: "Clinical Facials", 
        serviceIds: [
          "signature-facial", "signature-glow-enzyme", "european-facial", "express-facial", 
          "not-sure-facial", "mini-facial", "back-treatment", "mama-mia", "swich-dermal", 
          "firming-peptide", "lymphatic-facial", "oxygen-rx", "oxygen-rx-express", "ultimate-glow"
        ] 
      },
      { 
        label: "Advanced Resurfacing", 
        serviceIds: [
          "alma-harmony", "emface", "microneedling", "nanoneedling", "nanoneedling-exosomes", 
          "microdermabrasion", "dermaplane-facial", "dermaplane-only"
        ] 
      },
      { 
        label: "Chemical Peels", 
        serviceIds: ["chemical-peel", "tca-peel", "acne-peel", "micro-peel", "herbal-peel"] 
      }
    ]
  },

  {
    id: "sculpting",
    label: "Body Sculpting",
    subCategories: [
      { label: "Non-Invasive Sculpting", serviceIds: ["emsculpt-neo", "emsella", "body-composition"] }
    ]
  },

  {
    id: "wellness",
    label: "IV & Wellness",
    subCategories: [
      { 
        label: "Clinical & Functional", 
        serviceIds: ["iv-therapy", "gut-health", "health-optimization", "consultation-skin", "consultation-full"] 
      },
      { label: "Detox & Recovery", serviceIds: ["infrared-sauna", "foot-detox"] }
    ]
  },

  {
    id: "injectables",
    label: "Injectables",
    subCategories: [
      { label: "Aesthetic Injectables", serviceIds: ["botox", "neurotoxin-daxxify", "dermal-fillers", "prf-injections"] }
    ]
  },

  {
    id: "weight",
    label: "Weight Management",
    subCategories: [
      { label: "Medical Weight Loss", serviceIds: ["semaglutide", "tirzepatide", "metabolic-reset"] }
    ]
  },

  {
    id: "hormone",
    label: "Hormone & Functional Health",
    subCategories: [
      { label: "Functional Medicine", serviceIds: ["bhrt", "pcos"] }
    ]
  },

  { 
    id: "acne",
    label: "Acne Clinic",
    subCategories: [
      { label: "Face Reality Program", serviceIds: ["acne-consult-treatment", "acne-fr-current"] }
    ]
  },

  { 
    id: "headspa",
    label: "Holistic Headspa",
    subCategories: [
      { label: "Scalp Rituals", serviceIds: ["wax-relax", "tranquility-touch", "headspa-harmony", "crown-clarity"] }
    ]
  },

  {
    id: "hair",
    label: "Hair Restoration",
    subCategories: [
      { label: "Regenerative Therapy", serviceIds: ["prf-hair"] }
    ]
  },

  {
    id: "lashes",
    label: "Lashes & Brows",
    subCategories: [
      { label: "Lash & Brow Artistry", serviceIds: ["lash-lift", "brow-lamination", "lash-dye", "brow-dye"] }
    ]
  },

  {
    id: "waxing",
    label: "Waxing",
    subCategories: [
      { 
        label: "Facial Waxing", 
        serviceIds: ["wax-brow", "wax-lip", "wax-chin", "wax-sideburn", "wax-nose", "wax-neck", "wax-face", "wax-hairline", "wax-ear"] 
      },
      { 
        label: "Body Waxing", 
        serviceIds: [
          "wax-underarm", "wax-brazilian", "wax-full-bikini", "wax-bikini-line", "wax-full-butt", 
          "wax-stomach-strip", "wax-full-stomach", "wax-inner-thigh", "wax-upper-leg", "wax-lower-leg", 
          "wax-full-leg", "wax-shoulders", "wax-upper-back", "wax-lower-back", "wax-full-back", "wax-chest"
        ] 
      }
    ]
  }
];
const SERVICES = [
  // ── MASSAGE ──
  {
    id: "swedish", name: "Swedish Massage", category: "massage", icon: "hands",
    description: "A full-body relaxation massage using long, flowing strokes.",
    fullDescription: "Our Swedish massage is the gold standard of relaxation — a full-body experience using long, fluid effleurage strokes, gentle kneading, and rhythmic tapping to melt away surface tension and quiet the mind. It improves circulation, eases muscle tightness, and leaves you feeling genuinely restored rather than just temporarily unwound.",
    tags: ["Relaxation", "Circulation", "Stress relief", "All levels"],
    duration: "60 or 90 min", price: "From $85", area: "Full body",
    providerIds: ["teressa", "rachel", "maria"]
  },

  {
    id: "deep-tissue", name: "Deep Tissue Massage", category: "massage", icon: "hands",
    description: "Firm, focused pressure that reaches deeper muscle layers.",
    fullDescription: "Deep tissue massage targets the inner layers of muscle and connective tissue using slow, deliberate strokes and sustained pressure. Particularly effective for chronic pain, stubborn knots, postural tension from desk work, and recovery from physical exertion. Our therapists work methodically and communicate throughout.",
    tags: ["Chronic pain", "Recovery", "Tension release", "Therapeutic"],
    duration: "60 or 90 min", price: "From $95", area: "Targeted or full body",
    providerIds: ["teressa", "maria"]
  },

  {
    id: "lymphatic", name: "Lymphatic Drainage", category: "massage", icon: "leaf",
    description: "Gentle rhythmic strokes that stimulate the lymphatic system.",
    fullDescription: "Manual lymphatic drainage uses light, rhythmic pressure to encourage the movement of lymph fluid through the body's natural drainage pathways. The result is reduced puffiness and inflammation, improved immune function, and a feeling of lightness throughout. Excellent after cosmetic procedures, during illness recovery, or as a regular immune-support practice.",
    tags: ["Detox", "Post-procedure", "Immune support", "Anti-inflammatory"],
    duration: "60 min", price: "From $110", area: "Full body",
    providerIds: ["rachel"]
  },

  {
    id: "couples", name: "Couples Massage", category: "massage", icon: "hands",
    description: "Side-by-side massage for two in our dedicated couples suite.",
    fullDescription: "Share the experience in our beautifully appointed couples suite. Two therapists work simultaneously so you and your guest enjoy identical treatments side by side. A meaningful way to celebrate an occasion, decompress together, or simply gift someone an afternoon they won't forget.",
    tags: ["Romantic", "Gift idea", "Relaxation", "Side by side"],
    duration: "60 or 90 min", price: "From $170", area: "Full body",
    providerIds: ["teressa", "rachel", "maria"]
  },

  // ── LASER ──
  {
    id: "alma-harmony", name: "Alma Harmony Laser", category: "laser", icon: "glow",
    description: "Multi-modal laser platform FDA-cleared for 130+ indications.",
    fullDescription: "The Alma Harmony XL Pro is the most versatile laser system available — FDA-cleared for over 130 clinical indications. It treats pigmentation, sun damage, vascular lesions, acne scarring, hair removal, tattoo removal, and full skin rejuvenation across all Fitzpatrick skin types. Our certified laser technicians customize each session to your specific skin concerns and goals.",
    tags: ["Pigmentation", "Hair removal", "Tattoo removal", "All skin types"],
    duration: "30–90 min", price: "From $150", area: "Face or body",
    providerIds: ["jordan"]
  },

  {
    id: "signature-facial", name: "Signature Facial", category: "laser", icon: "face",
    description: "A fully customized facial tailored to your skin's current needs.",
    fullDescription: "No two signature facials are the same. Your esthetician begins with a thorough skin analysis, then builds a treatment using the best combination of cleansing, enzyme exfoliation, extractions, masking, and targeted serums for your skin on that particular day. Our most beloved service.",
    tags: ["Hydration", "Customized", "Glow", "Anti-aging"],
    duration: "60 min", price: "From $90", area: "Face & neck",
    providerIds: ["jordan", "ashley", "kasden", "marci", "jaime"]
  },

  { id:"signature-glow-enzyme", name:"Signature Glow + Enzyme", category:"laser", icon:"face",
    description:"Brightening facial using botanical enzymes for a smooth, radiant glow.",
    fullDescription:"Our Signature Glow + Enzyme treatment uses advanced botanical enzymes to gently dissolve dead skin cells while nourishing the skin. It focuses on brightening, smoothing texture, and restoring a healthy, youthful radiance without the downtime of stronger peels.",
    tags:["Brightening","Botanical","Enzymes","Glow"],
    duration:"60 min", price:"$135", area:"Face & neck",
    providerIds:["jaime"] },

  { id:"dermaglow-facial", name:"Dermaglow Dermaplaning Facial", category:"laser", icon:"face",
    description:"A specialized dermaplaning session combined with an enzyme glow.",
    fullDescription:"The ultimate manual exfoliation. This facial combines clinical dermaplaning to remove vellus hair and dead skin with a customized enzyme treatment for maximum glow and product penetration.",
    tags:["Exfoliation","Glow","Smooth skin","Clinical"],
    duration:"60 min", price:"$145", area:"Face & neck",
    providerIds:["jaime"] },

  { id:"swich-dermal", name:"Swich Dermal Series", category:"laser", icon:"face",
    description:"High-performance anti-aging treatment that activates cellular repair.",
    fullDescription:"Swich is an alternative to chemical peels that works from the inside out. It utilizes your body's natural healing response to revitalize and firm the skin without significant surface peeling. Excellent for mature skin.",
    tags:["Anti-aging","Cellular repair","Firming","No-peel"],
    duration:"45 min", price:"$75", area:"Face",
    providerIds:["jaime"] },

  { id:"firming-peptide", name:"Firming Peptide Facial", category:"laser", icon:"face",
    description:"Advanced firming treatment using targeted peptides and antioxidants.",
    fullDescription:"This high-performance facial utilizes a blend of firming peptides to tighten and lift the skin. It stimulates collagen production and provides intense antioxidant protection against environmental damage.",
    tags:["Lifting","Peptides","Anti-aging","Firming"],
    duration:"60 min", price:"$169", area:"Face & neck",
    providerIds:["jaime"] },

  { id:"lymphatic-facial", name:"Lymphatic Facial", category:"laser", icon:"leaf",
    description:"Specialized drainage technique to reduce puffiness and detoxify.",
    fullDescription:"Using gentle, rhythmic pressure, this treatment stimulates the lymphatic system to remove toxins, reduce inflammation, and decrease puffiness. Excellent for facial contouring and boosting immune function.",
    tags:["Detox","Contouring","Anti-inflammatory","Gentle"],
    duration:"60 min", price:"$165", area:"Face",
    providerIds:["jaime"] },

  { id:"oxygen-rx", name:"Oxygen Rx Facial", category:"laser", icon:"glow",
    description:"Professional oxygen infusion for immediate brightening and calming.",
    fullDescription:"Oxygen Rx is an effective treatment for acne, rosacea, and dull skin. It delivers a controlled amount of oxygen directly to the skin, which helps to kill bacteria, calm redness, and brighten the complexion instantly.",
    tags:["Brightening","Acne","Rosacea","Calming"],
    duration:"60 min", price:"$175", area:"Face",
    providerIds:["jaime"] },

  { id:"oxygen-rx-express", name:"Oxygen Rx Express", category:"laser", icon:"glow",
    description:"A quick, targeted oxygen boost for problematic skin.",
    fullDescription:"The express version of our Oxygen Rx treatment. Focused on delivering the antibacterial and brightening benefits of oxygen in half the time.",
    tags:["Quick refresh","Acne","Brightening","Efficient"],
    duration:"30 min", price:"$150", area:"Face",
    providerIds:["jaime"] },

  { id:"ultimate-glow", name:"Ultimate Glow Facial", category:"laser", icon:"glow",
    description:"Our most comprehensive glow-inducing treatment for ultimate radiance.",
    fullDescription:"This premium facial combines multiple modalities — including double cleansing, enzyme exfoliation, and high-concentration serums — to deliver a profound, lasting glow. Designed for clients seeking maximum radiance.",
    tags:["Max radiance","Premium","Nourishing","Glow"],
    duration:"75 min", price:"$175", area:"Face & neck",
    providerIds:["jaime"] },

  { id:"mama-mia", name:"Mama Mia Facial", category:"laser", icon:"leaf",
    description:"Safe, soothing clinical facial for expecting or nursing mothers.",
    fullDescription:"Specially curated using only pregnancy and nursing-safe ingredients. Addresses common hormonal skin changes while providing a relaxing, clinical-grade skin boost for new and expecting moms.",
    tags:["Safe","Pregnancy-safe","Soothing","Hormonal support"],
    duration:"60 min", price:"$135", area:"Face",
    providerIds:["jaime"] },

  // ── ACNE CLINIC ──
  { id:"acne-consult-treatment", name:"Face Reality Acne Consultation + Treatment", category:"acne", icon:"face",
    description:"Comprehensive acne analysis followed by your first Face Reality treatment.",
    fullDescription:"Required for all new acne clients. Includes a thorough skin analysis, sensitivity testing, and an initial treatment. We'll also design your customized home care routine and discuss lifestyle factors that may be contributing to your breakouts.",
    tags:["Acne","Consultation","First -time clients","Results-driven"],
    duration:"90 min", price:"$150", area:"Face",
    providerIds:["jaime"] },

  { id:"acne-fr-current", name:"Face Reality Acne Treatment", category:"acne", icon:"face",
    description:"Maintenance acne treatment for established Face Reality clients.",
    fullDescription:"For current clients enrolled in our acne program. Includes a check-in on your progress, deep cleansing, exfoliation or a light chemical peel depending on your skin's needs, and expert extractions to keep your clear skin journey on track.",
    tags:["Acne","Maintenance","Clearing","Professional care"],
    duration:"45 min", price:"$95", area:"Face",
    providerIds:["jaime"] },

  {
    id: "european-facial", name: "European Facial", category: "laser", icon: "face",
    description: "Classic, comprehensive facial treatment for deep cleansing and relaxation.",
    fullDescription: "Our European Facial is a thorough, results-driven treatment designed to deep-clean pores, improve circulation, and deeply relax the facial muscles. Includes double cleansing, exfoliation, extractions, a custom mask, and a therapeutic face, neck, and shoulder massage.",
    tags: ["Deep cleansing", "Relaxation", "Classic", "Nourishing"],
    duration: "60 min", price: "$85", area: "Face, neck & shoulders",
    providerIds: ["marci"]
  },

  {
    id: "express-facial", name: "Express Facial", category: "laser", icon: "face",
    description: "A quick, results-oriented facial for a visible glow on the go.",
    fullDescription: "Perfect for those with limited time but seeking a professional skin boost. This concentrated treatment focuses on efficiency without compromising results, including cleansing, targeted exfoliation, and high-performance serums.",
    tags: ["Quick refresh", "Efficiency", "Glow", "On-the-go"],
    duration: "30 min", price: "$60", area: "Face",
    providerIds: ["marci"]
  },

  {
    id: "not-sure-facial", name: "Not Sure Facial", category: "laser", icon: "face",
    description: "Consultation combined with a customized facial to find what's best for you.",
    fullDescription: "Unsure of what your skin needs? This hybrid session begins with a comprehensive consultation and analysis with Marci, followed by a personalized facial treatment tailored to your skin's immediate condition. Perfect for first-time clients.",
    tags: ["Consultation", "Customized", "New clients", "Analysis"],
    duration: "75 min", price: "$100", area: "Face & neck",
    providerIds: ["marci"]
  },

  {
    id: "back-treatment", name: "Back Treatment", category: "laser", icon: "body",
    description: "A facial for your back — addressing congestion, dryness, and tension.",
    fullDescription: "Our back treatment addresses hard-to-reach skin concerns. Includes deep cleansing, exfoliation with steam, extractions where needed, and a restorative mask. Leaves the skin on your back clear, smooth, and revitalized.",
    tags: ["Body care", "Cleansing", "Smooth skin", "Hard-to-reach"],
    duration: "60 min", price: "$125", area: "Full back",
    providerIds: ["marci"]
  },

  {
    id: "microdermabrasion", name: "Microdermabrasion Facial", category: "laser", icon: "face",
    description: "Mechanical exfoliation for a smoother, clearer complexion.",
    fullDescription: "Microdermabrasion uses a specialized device to gently sand away the thick outer layer of the skin. This non-invasive treatment is used to rejuvenate the skin and treat light scarring, discoloration, sun damage, and stretch marks.",
    tags: ["Exfoliation", "Resurfacing", "Glow", "Anti-aging"],
    duration: "60 min", price: "From $130", area: "Face & neck",
    providerIds: ["kasden", "marci"]
  },

  {
    id: "dermaplane-facial", name: "Dermaplane Facial", category: "laser", icon: "face",
    description: "A deep exfoliation combined with our signature facial treatments.",
    fullDescription: "This treatment includes a medical-grade dermaplane to remove dead skin cells and vellus hair, followed by a customized facial protocol (cleansing, masking, and hydration) to leave your skin exceptionally smooth and radiant.",
    tags: ["Exfoliation", "Glow", "Hydration", "Customized"],
    duration: "60 min", price: "From $130", area: "Face & neck",
    providerIds: ["kasden", "marci"]
  },

  {
    id: "mini-facial", name: "Mini Facial", category: "laser", icon: "face",
    description: "Quick, effective skin refresh for those on the go.",
    fullDescription: "Our mini facial is designed to give you a clinical skin boost in half the time. Includes double cleansing, light exfoliation, and targeted serum application. Perfect as a maintenance treatment between full sessions.",
    tags: ["Quick refresh", "Maintenance", "Hydration", "On-the-go"],
    duration: "30 min", price: "$75", area: "Face",
    providerIds: ["kasden"]
  },

  {
    id: "dermaplane-only", name: "Dermaplane Only", category: "laser", icon: "face",
    description: "Specialized exfoliation to remove dead skin and vellus hair.",
    fullDescription: "A focused 30-minute session dedicated entirely to dermaplaning. This treatment removes the 'peach fuzz' and dead skin cells that can trap oil and dull your complexion, allowing for better product penetration and smoother makeup application.",
    tags: ["Exfoliation", "Smooth skin", "Product absorption"],
    duration: "30 min", price: "From $65", area: "Face",
    providerIds: ["kasden", "marci", "jaime"]
  },

  {
    id: "herbal-peel", name: "Herbal Peel", category: "laser", icon: "face",
    description: "Natural botanical peel to resurface and revitalize the skin.",
    fullDescription: "An alternative to traditional chemical peels, our herbal peel uses botanical extracts to stimulate cellular turnover and address texture, tone, and clarity without several days of harsh peeling.",
    tags: ["Natural", "Resurfacing", "Revitalizing", "Botanical"],
    duration: "45 min", price: "$150", area: "Face",
    providerIds: ["kasden"]
  },

  {
    id: "nanoneedling", name: "Nanoneedling", category: "laser", icon: "face",
    description: "Gentle infusion therapy for enhanced product absorption and skin glow.",
    fullDescription: "Nanoneedling uses microscopic silicone tips to create temporary channels in the skin, allowing targeted serums to penetrate 97% deeper. Ideal for those seeking the benefits of microneedling with zero downtime.",
    tags: ["Infusion", "Glow", "No downtime", "Hydration"],
    duration: "45 min", price: "From $125", area: "Face",
    providerIds: ["kasden"]
  },

  {
    id: "nanoneedling-exosomes", name: "Nanoneedling with Exosomes", category: "laser", icon: "face",
    description: "Advanced regenerative therapy combining nanoneedling with potent exosomes.",
    fullDescription: "This premium nanoneedling treatment uses clinical-grade exosomes — powerful signaling molecules that boost cellular repair and rejuvenation. Improves skin quality, texture, and radiance dramatically.",
    tags: ["Regenerative", "Exosomes", "Advanced", "Glow"],
    duration: "60 min", price: "$150", area: "Face",
    providerIds: ["kasden"]
  },

  {
    id: "emface", name: "EMFACE", category: "laser", icon: "face",
    description: "Needle-free facial lifting using synchronized RF and HIFES energy.",
    fullDescription: "EMFACE is the first FDA-cleared device to simultaneously treat facial skin and the underlying muscles — all without injections. It combines radiofrequency energy (which tightens and smooths skin) with HIFES electrical stimulation (which strengthens and lifts facial muscles). No downtime. No needles.",
    tags: ["Non-invasive", "Lifting", "Muscle toning", "No downtime"],
    duration: "20 min per session", price: "From $300/session", area: "Face",
    providerIds: ["jordan"]
  },

  {
    id: "red-light", name: "Red Light Therapy", category: "laser", icon: "glow",
    description: "Low-level light therapy for skin, inflammation, and cellular repair.",
    fullDescription: "Red and near-infrared light at specific wavelengths penetrates the skin to stimulate collagen production, accelerate cellular repair, and reduce inflammation. Sessions are deeply relaxing. Effective for skin rejuvenation, wound healing, joint pain, and overall wellness. Can be combined with other treatments.",
    tags: ["Collagen", "Anti-inflammatory", "Skin health", "Cellular repair"],
    duration: "20–30 min", price: "From $45", area: "Full body or face",
    providerIds: ["ashley"]
  },

  {
    id: "microneedling", name: "Microneedling", category: "laser", icon: "face",
    description: "Collagen-inducing treatment that improves tone, texture, and firmness naturally.",
    fullDescription: "During the procedure, ultra-fine needles create controlled micro-injuries in the skin, stimulating your body's natural healing response and boosting collagen and elastin production. This process helps smooth fine lines, reduce acne scars, minimize pores, and restore a healthy, youthful glow. We use advanced medical-grade microneedling devices to ensure precision, safety, and visible results. Treatments can also be enhanced with PRF (Platelet-Rich Fibrin) for even greater rejuvenation through your body's own growth factors. Common treatment areas include face, neck, décolletage, and scalp. Downtime: mild redness for 24–48 hours, with smoother, brighter skin emerging over the following week.",
    tags: ["Collagen", "Acne scars", "Skin texture", "Anti-aging"],
    duration: "30–60 min", price: "From $60", area: "Face, neck, décolletage, scalp",
    providerIds: ["jordan", "ashley", "regan", "kasden", "marci", "jaime"]
  },

  {
    id: "tca-peel", name: "TCA Chemical Peel", category: "laser", icon: "face",
    description: "Medical-grade TCA peel for deep resurfacing and correction.",
    fullDescription: "Trichloroacetic acid (TCA) peels are ideal for addressing sun damage, hyperpigmentation, fine lines, and acne scarring. This treatment provides more intense correction than superficial peels, resulting in significant rejuvenation and smoother skin texture.",
    tags: ["Resurfacing", "Pigmentation", "Anti-aging", "Correction"],
    duration: "45 min", price: "From $300", area: "Face & neck",
    providerIds: ["marci"]
  },

  {
    id: "acne-peel", name: "Acne Peel", category: "laser", icon: "face",
    description: "Targeted chemical exfoliation to clear congestion and calm inflammation.",
    fullDescription: "Our Acne Peel uses specialized acids to penetrate pores, dissolve oil, and kill acne-causing bacteria. It helps to clear active breakouts and prevent future congestion while calming redness and improving skin clarity.",
    tags: ["Acne", "Clearing", "Anti-inflammatory", "Deep-clean"],
    duration: "45 min", price: "$150", area: "Face",
    providerIds: ["marci"]
  },

  {
    id: "micro-peel", name: "Micro Peel", category: "laser", icon: "face",
    description: "A gentle, two-step exfoliation combining mechanical and chemical peeling.",
    fullDescription: "Our Micro Peel is a 30-minute procedure that combines dermaplaning or microdermabrasion with a light chemical peel. It's the perfect 'lunchtime' treatment for those seeking smoother, brighter skin with minimal down time.",
    tags: ["Glow", "Exfoliation", "Minimal downtime", "Lifting"],
    duration: "30 min", price: "$75", area: "Face",
    providerIds: ["marci"]
  },

  {
    id: "chemical-peel", name: "Chemical Peel — Sensi Peel", category: "laser", icon: "face",
    description: "Medical-grade exfoliating peel for smoother, brighter, more even skin.",
    fullDescription: "Our Sensi Peel uses a medical-grade blend of exfoliating acids to gently remove dull, damaged surface cells — revealing smoother texture, improved clarity, and a brighter, more even complexion. Each peel is selected based on your unique skin type and goals, whether addressing acne, pigmentation, fine lines, or overall rejuvenation. Treatments are quick, with minimal downtime and visible radiance within days.",
    tags: ["Exfoliation", "Pigmentation", "Acne", "Brightening"],
    duration: "30–60 min", price: "From $155", area: "Face",
    providerIds: ["jordan", "ashley", "regan", "jaime"]
  },

  // ── SCULPTING ──
  {
    id: "emsculpt-neo", name: "EmSculpt Neo", category: "sculpting", icon: "body",
    description: "The only device that simultaneously builds muscle and reduces fat.",
    fullDescription: "EmSculpt Neo combines HIFEM+ electromagnetic energy (which induces powerful muscle contractions impossible through voluntary exercise) with synchronized RF heating (which destroys fat cells). Clinical studies show an average of 25% more muscle and 30% less fat in the treatment area after a full protocol.",
    tags: ["Fat reduction", "Muscle building", "Non-invasive", "No downtime"],
    duration: "30 min per session", price: "From $750/session", area: "Abdomen, glutes, arms, calves",
    providerIds: ["jordan", "ashley", "kasden"]
  },

  {
    id: "emsella", name: "EMSELLA", category: "sculpting", icon: "body",
    description: "FDA-cleared pelvic floor treatment for incontinence and confidence.",
    fullDescription: "EMSELLA uses high-intensity focused electromagnetic energy to stimulate deep pelvic floor muscles — the equivalent of 11,000 Kegel exercises in a single 28-minute session. FDA-cleared for urinary incontinence and pelvic floor strengthening. Patients remain fully clothed throughout.",
    tags: ["Women's health", "Pelvic floor", "FDA-cleared", "Incontinence"],
    duration: "28 min", price: "From $300/session", area: "Pelvic floor",
    providerIds: ["jordan"]
  },

  {
    id: "body-composition", name: "3D Body Composition", category: "sculpting", icon: "body",
    description: "Precise full-body measurements to set and track your goals.",
    fullDescription: "Our 3D body composition scan provides a comprehensive picture of your body — muscle mass, body fat percentage, visceral fat, and precise measurements at every point. The foundation for any body-change goal, whether you're doing EmSculpt Neo, weight management, or simply want an honest baseline.",
    tags: ["Body composition", "Goal setting", "Baseline", "Tracking"],
    duration: "30 min", price: "From $75", area: "Full body",
    providerIds: ["ashley"]
  },

  // ── WELLNESS ──
  {
    id: "iv-therapy", name: "IV Therapy", category: "wellness", icon: "droplet",
    description: "Direct nutrient delivery for hydration, energy, and recovery.",
    fullDescription: "IV therapy bypasses the digestive system entirely, delivering vitamins, minerals, and hydration directly into the bloodstream for 100% absorption. Our clinical team offers a menu of formulas for hydration, immune support, energy, athletic recovery, and beauty (biotin, glutathione). Sessions are relaxing — settle in and let your body absorb what it needs.",
    tags: ["Hydration", "Immunity", "Energy", "Recovery"],
    duration: "45–60 min", price: "From $120", area: "Intravenous",
    providerIds: ["dr-nguyen"]
  },

  {
    id: "infrared-sauna", name: "Infrared Sauna", category: "wellness", icon: "heat",
    description: "Deep-penetrating heat for detoxification and relaxation.",
    fullDescription: "Unlike traditional saunas, infrared saunas emit light absorbed directly by the body — warming you from within at a comfortable ambient temperature. This promotes detoxification through sweat, improves cardiovascular circulation, relieves muscle soreness, and produces profound relaxation. Often combined with red light therapy.",
    tags: ["Detox", "Circulation", "Relaxation", "Muscle recovery"],
    duration: "30–45 min", price: "From $45", area: "Full body",
    providerIds: ["ashley"]
  },

  {
    id: "foot-detox", name: "Foot Detox", category: "wellness", icon: "droplet",
    description: "Ionic foot bath to draw out impurities and restore energy flow.",
    fullDescription: "An ionic foot bath uses a gentle electrical current to ionize the water, drawing toxins and impurities out through the pores of the feet. The session is completely painless and deeply relaxing — a grounding, restorative complement to any wellness visit.",
    tags: ["Detox", "Relaxation", "Holistic", "Grounding"],
    duration: "30 min", price: "From $35", area: "Feet",
    providerIds: ["ashley"]
  },

  {
    id: "gut-health", name: "Gut Health", category: "wellness", icon: "leaf",
    description: "Root-cause, functional approach to restoring digestive balance and overall wellness.",
    fullDescription: "Gut health plays a central role in overall wellness — including digestion, energy, immune function, hormone balance, and inflammation. When the gut is out of balance, it can contribute to symptoms such as bloating, reflux, constipation, diarrhea, brain fog, skin issues, and difficulty with weight or hormones. We take a root-cause, functional approach — looking beyond symptoms to identify underlying imbalances such as dysbiosis, inflammation, infections, or impaired digestion. Our structured, stepwise process restores gut health by removing triggers, replacing digestive support, repairing the gut lining, reinoculating beneficial bacteria, and rebalancing the microbiome for long-term function.",
    tags: ["Gut health", "Digestion", "Inflammation", "Functional medicine"],
    duration: "Ongoing program", price: "Consultation required", area: "Systemic",
    providerIds: ["dr-nguyen", "regan"]
  },

  {
    id: "health-optimization", name: "Health Optimization", category: "wellness", icon: "heat",
    description: "Proactive, prevention-focused approach to long-term health and longevity.",
    fullDescription: "Our health optimization appointments take a proactive, prevention-focused approach to your long-term health. During your initial consultation, we complete a comprehensive review of your history, symptoms, lifestyle, and goals. Based on your evaluation, we may recommend advanced lab testing to assess hormones, metabolism, nutrient status, and overall function. From there, we create a personalized plan that may include targeted lifestyle changes, nutrition, peptide therapy, and vitamin and mineral supplementation to optimize your health, energy, and longevity.",
    tags: ["Longevity", "Prevention", "Peptides", "Lab testing"],
    duration: "60–90 min (initial)", price: "Consultation required", area: "Systemic",
    providerIds: ["dr-nguyen", "regan"]
  },

  {
    id: "consultation-skin", name: "Regular Skin Consultation", category: "wellness", icon: "face",
    description: "In-depth analysis to build your personalized skincare roadmap.",
    fullDescription: "A dedicated session to analyze your skin concern, current routine, and goals. We'll create a customized treatment plan and product recommendations tailored specifically to your skin type and budget.",
    tags: ["Consultation", "Planning", "Skincare", "Analysis"],
    duration: "30 min", price: "$30", area: "Face",
    providerIds: ["kasden"]
  },

  {
    id: "consultation-full", name: "Full Panel Consultation", category: "wellness", icon: "face",
    description: "Comprehensive clinical assessment for deep-rooted skin and health goals.",
    fullDescription: "A detailed panel-style consultation looking at both external skin health and supporting internal factors. Best for new clients seeking major transformations or addressing chronic concerns.",
    tags: ["Comprehensive", "Consultation", "Advanced", "Clinical"],
    duration: "60 min", price: "$60", area: "Face & systemic",
    providerIds: ["kasden"]
  },

  // ── LASHES & BROWS ──
  {
    id: "lash-lift", name: "Lash Lift", category: "lashes", icon: "glow",
    description: "Sem-permanent curl for your natural eyelashes.",
    fullDescription: "A lash lift gives your natural lashes a beautiful, upward curl that lasts for weeks. It makes your lashes appear longer and opens up the eyes without the need for extensions or daily curling.",
    tags: ["Lashes", "Low maintenance", "Eyes", "Natural beauty"],
    duration: "45 min", price: "$65", area: "Eyelashes",
    providerIds: ["kasden"]
  },

  {
    id: "brow-lamination", name: "Brow Lamination", category: "lashes", icon: "face",
    description: "Achieve fuller, perfectly groomed eyebrows that stay in place.",
    fullDescription: "Brow lamination is a process of restructuring the brow hairs to keep them in a desired shape. It's the ultimate solution for eyebrows that lack symmetry or where the hairs follow a different pattern.",
    tags: ["Brows", "Grooming", "Fullness", "Symmetry"],
    duration: "45 min", price: "$60", area: "Eyebrows",
    providerIds: ["kasden", "marci"]
  },

  {
    id: "lash-dye", name: "Lash Dye", category: "lashes", icon: "glow",
    description: "Semi-permanent tint to darken and define your natural eyelashes.",
    fullDescription: "Lash dyeing provides a darker, fuller look to your natural lashes without the need for mascara. Perfect for those with lighter lashes or anyone seeking a low-maintenance, everyday defined look.",
    tags: ["Lashes", "Low maintenance", "Definition", "Natural beauty"],
    duration: "30 min", price: "$25", area: "Eyelashes",
    providerIds: ["marci"]
  },

  {
    id: "brow-dye", name: "Brow Dye", category: "lashes", icon: "face",
    description: "Define and enhance your eyebrow shape with semi-permanent tint.",
    fullDescription: "Brow dyeing enhances the color and shape of your eyebrows, filling in sparser areas and providing structure to the face. Ideal for achieving a groomed, balanced look that lasts for weeks.",
    tags: ["Brows", "Structure", "Grooming", "Enhanced shape"],
    duration: "30 min", price: "$15", area: "Eyebrows",
    providerIds: ["marci"]
  },

  // ── WAXING ──
  { id:"wax-brow", name:"Brow Wax", category:"waxing", icon:"face",
    description:"Precision eyebrow shaping using high-quality wax.",
    fullDescription:"Professional brow waxing and shaping to define your arch and maintain a clean, polished look that complements your facial features.",
    tags:["Brows","Grooming","Symmetry","Precision"],
    duration:"20 min", price:"From $20", area:"Eyebrows",
    providerIds:["marci", "hannah", "lauren"] },

  { id:"wax-lip", name:"Lip Wax", category:"waxing", icon:"face",
    description:"Quick removal of unwanted hair from the upper lip.",
    fullDescription:"Gentle hair removal for the upper lip area, providing a smooth finish for weeks.",
    tags:["Quick","Smooth","Maintenance"],
    duration:"10 min", price:"From $10", area:"Upper lip",
    providerIds:["marci", "hannah", "lauren"] },

  { id:"wax-chin", name:"Chin Wax", category:"waxing", icon:"face",
    description:"Focused hair removal for the chin area.",
    fullDescription:"Removal of unwanted hair from the chin, ensuring a clean and smooth profile.",
    tags:["Focused","Smooth","Maintenance"],
    duration:"10 min", price:"From $10", area:"Chin",
    providerIds:["marci", "hannah", "lauren"] },

  { id:"wax-underarm", name:"Underarm Wax", category:"waxing", icon:"body",
    description:"Quick and effective hair removal for smoother underarms.",
    fullDescription:"Long-lasting hair removal for the underarms, reducing the need for daily shaving and promoting smoother skin.",
    tags:["Body care","Smooth skin","Long-lasting"],
    duration:"20 min", price:"$25", area:"Underarms",
    providerIds:["marci", "hannah", "lauren"] },

  { id:"wax-sideburn", name:"Sideburn Wax", category:"waxing", icon:"face",
    description:"Clean removal of hair from the sideburn area.",
    fullDescription:"Precise hair removal for the sideburns, providing a cleaner hairline and smoother complexion.",
    tags:["Face","Smooth","Grooming"],
    duration:"15 min", price:"From $10", area:"Sideburns",
    providerIds:["marci", "hannah", "lauren"] },

  { id:"wax-nose", name:"Nose Wax", category:"waxing", icon:"face",
    description:"Quick removal of visible hair from the nostrils.",
    fullDescription:"Safely and efficiently removes visible hair from just inside the nostrils for a clean, groomed appearance.",
    tags:["Quick","Grooming","Precision"],
    duration:"15 min", price:"From $10", area:"Nose",
    providerIds:["marci", "hannah", "lauren"] },

  { id:"wax-neck", name:"Neck Wax", category:"waxing", icon:"face",
    description:"Removal of unwanted hair from the neck area.",
    fullDescription:"Cleaning up the neck area for a tidier, smoother look. Often combined with hair or facial services.",
    tags:["Neck","Grooming","Smooth"],
    duration:"15 min", price:"From $12", area:"Neck",
    providerIds:["marci", "hannah", "lauren"] },

  { id:"wax-face", name:"Full Face Wax", category:"waxing", icon:"face",
    description:"Comprehensive hair removal for the entire facial area.",
    fullDescription:"A thorough hair removal session including lip, chin, cheeks, and sideburns (brows separate). Leaves the entire face incredibly smooth and facilitates better makeup application.",
    tags:["Comprehensive","Face","Smooth skin","Deep removal"],
    duration:"45 min", price:"From $45", area:"Full face",
    providerIds:["marci", "hannah", "lauren"] },

  { id:"wax-hairline", name:"Hairline Wax", category:"waxing", icon:"face",
    description:"Smoothing and cleaning up the natural hairline.",
    fullDescription:"A focused service to clean up baby hairs or create a more defined forehead/temple hairline.",
    tags:["Face","Precision","Grooming"],
    duration:"15 min", price:"$10", area:"Hairline",
    providerIds:["hannah", "lauren"] },

  { id:"wax-brazilian", name:"Brazilian Wax", category:"waxing", icon:"body",
    description:"Complete hair removal for the intimate area.",
    fullDescription:"A full Brazilian wax removes hair from the front, back, and everything in between. We use high-quality wax designed for sensitive areas to ensure the most comfortable experience possible.",
    tags:["Intimate","Smooth skin","Long-lasting","Clinical"],
    duration:"30 min", price:"$60", area:"Intimate area",
    providerIds:["hannah", "lauren"] },

  { id:"wax-full-bikini", name:"Full Bikini", category:"waxing", icon:"body",
    description:"Comprehensive bikini wax removing hair from the labia and top.",
    fullDescription:"The full bikini wax removes as much or as little hair as you like from the front and labia area (does not include the back/thong area). Personalized to your comfort level.",
    tags:["Bikini","Smooth","Customized"],
    duration:"30 min", price:"$50", area:"Bikini area",
    providerIds:["hannah", "lauren"] },

  { id:"wax-bikini-line", name:"Bikini Line", category:"waxing", icon:"body",
    description:"Clean hair removal from the areas outside a standard bikini bottom.",
    fullDescription:"Focuses on the hair visible outside a standard bikini line. A quick and effective clean-up for the beach or everyday comfort.",
    tags:["Quick","Bikini","Beach-ready"],
    duration:"30 min", price:"$30", area:"Bikini line",
    providerIds:["hannah", "lauren"] },

  { id:"wax-full-butt", name:"Full Butt Wax", category:"waxing", icon:"body",
    description:"Smooth hair removal for the entire gluteal area.",
    fullDescription:"Removes unwanted hair from the entire surface of the buttocks, including the between-the-cheeks area if desired. Provides a clean and smooth feel.",
    tags:["Body","Smooth skin","Complete"],
    duration:"15 min", price:"$25", area:"Gluteal area",
    providerIds:["hannah", "lauren"] },

  { id:"wax-stomach-strip", name:"Stomach Strip", category:"waxing", icon:"body",
    description:"Removal of the 'happy trail' or vertical line of hair on the stomach.",
    fullDescription:"A quick session focused on the vertical strip of hair leading from the navel to the bikini line.",
    tags:["Focused","Quick","Aesthetic"],
    duration:"10 min", price:"$12", area:"Lower stomach",
    providerIds:["hannah", "lauren"] },

  { id:"wax-full-stomach", name:"Full Stomach", category:"waxing", icon:"body",
    description:"Hair removal for the entire abdominal area.",
    fullDescription:"Removes all unwanted hair from the lower ribs down to the bikini line for a perfectly smooth abdominal surface.",
    tags:["Abdominal","Smooth","Long-lasting"],
    duration:"20 min", price:"$30", area:"Abdomen",
    providerIds:["hannah", "lauren"] },

  { id:"wax-inner-thigh", name:"Inner Thigh Wax", category:"waxing", icon:"body",
    description:"Focused hair removal for the inner thigh area.",
    fullDescription:"Addresses hair on the very inner part of the thighs, often requested alongside bikini services for a seamless look.",
    tags:["Legs","Bikini complement","Smooth"],
    duration:"15 min", price:"$14", area:"Inner thighs",
    providerIds:["hannah", "lauren"] },

  { id:"wax-upper-leg", name:"Upper Leg Wax", category:"waxing", icon:"body",
    description:"Hair removal from the hips down to just above the knee.",
    fullDescription:"Provides smooth skin for the entire upper half of the legs, stopping right at the kneecap.",
    tags:["Legs","Smooth skin","Half-leg"],
    duration:"25 min", price:"$40", area:"Upper legs",
    providerIds:["hannah", "lauren"] },

  { id:"wax-lower-leg", name:"Lower Leg Wax", category:"waxing", icon:"body",
    description:"Hair removal from the knee down to the ankles.",
    fullDescription:"The most popular leg service. Removes hair from the kneecap down to the ankle bone for silky smooth shins and calves.",
    tags:["Legs","Popular","Smooth skin"],
    duration:"25 min", price:"$40", area:"Lower legs",
    providerIds:["hannah", "lauren"] },

  { id:"wax-full-leg", name:"Full Leg Wax", category:"waxing", icon:"body",
    description:"Comprehensive hair removal from hip to ankle.",
    fullDescription:"A full leg session covering both upper and lower halves. Leaves your entire legs smooth and hair-free for weeks.",
    tags:["Legs","Complete","Smooth"],
    duration:"45 min", price:"$80", area:"Full legs",
    providerIds:["hannah", "lauren"] },

  { id:"wax-shoulders", name:"Shoulder Wax", category:"waxing", icon:"body",
    description:"Removal of unwanted hair from the tops of the shoulders.",
    fullDescription:"Cleans up the shoulder area for a smoother look, often requested to blend with back or chest waxing.",
    tags:["Body","Grooming","Clean lines"],
    duration:"15 min", price:"$20", area:"Shoulders",
    providerIds:["hannah", "lauren"] },

  { id:"wax-upper-back", name:"Upper Back Wax", category:"waxing", icon:"body",
    description:"Hair removal for the top half of the back.",
    fullDescription:"Addresses hair from the base of the neck down to the mid-back area.",
    tags:["Back","Grooming","Half-back"],
    duration:"15 min", price:"$35", area:"Upper back",
    providerIds:["hannah", "lauren"] },

  { id:"wax-lower-back", name:"Lower Back Wax", category:"waxing", icon:"body",
    description:"Hair removal for the bottom half of the back.",
    fullDescription:"Addresses hair from the mid-back down to the top of the gluteal line.",
    tags:["Back","Grooming","Half-back"],
    duration:"15 min", price:"$35", area:"Lower back",
    providerIds:["hannah", "lauren"] },

  { id:"wax-full-back", name:"Full Back Wax", category:"waxing", icon:"body",
    description:"Comprehensive hair removal for the entire back surface.",
    fullDescription:"A complete session covering the entire back area, from the base of the neck to the waistline.",
    tags:["Back","Complete","Grooming"],
    duration:"30 min", price:"$60", area:"Full back",
    providerIds:["hannah", "lauren"] },

  { id:"wax-chest", name:"Full Chest Wax", category:"waxing", icon:"body",
    description:"Comprehensive hair removal for the chest and pectoral area.",
    fullDescription:"Removes all unwanted hair from the collarbone down to the top of the stomach for a smooth, defined chest.",
    tags:["Body","Grooming","Smooth"],
    duration:"30 min", price:"$40", area:"Chest",
    providerIds:["hannah", "lauren"] },

  // ── HOLISTIC HEADSPA ──
  { id:"wax-relax", name:"Wax & Relax: Self-love Special", category:"headspa", icon:"glow",
    description:"Signature Brazilian wax followed by a calming Holistic Headspace session.",
    fullDescription:"The ultimate self-care combination. Begin with a 30-minute Brazilian wax for complete smoothness, then transition into a 30-minute 'Holistic Headspace' ritual to fully unwind and reset your mind. A $130 value.",
    tags:["Self-care","Signature combo","Smoothing","Relaxation"],
    duration:"1 hr", price:"$95", area:"Intimate & Scalp",
    providerIds:["hannah", "lauren"] },

  { id:"tranquility-touch", name:"Tranquility Touch Headspa", category:"headspa", icon:"glow",
    description:"Restorative scalp ritual using natural oils and a soothing head massage.",
    fullDescription:"Sink into a full-body massage bed for this restorative scalp experience. Includes a detailed before-and-after scalp analysis, a nourishing oil treatment to awaken roots, and a gentle cleanse with all-natural products. Ends with a tension-melting head massage.",
    tags:["Scalp health","Relaxation","Natural","Ritual"],
    duration:"1 hr", price:"$90", area:"Scalp & hair",
    providerIds:["hannah", "lauren"] },

  { id:"headspa-harmony", name:"Headspa Harmony", category:"headspa", icon:"glow",
    description:"Advanced scalp therapeutic session with steam and herbal rinses.",
    fullDescription:"Our most comprehensive scalp treatment. Includes scalp analysis, a 10-minute steam to open pores, oil massage on a full-body massage bed, plant-based cleansing, and a customized herbal rinse for soft, healthy hair and scalp.",
    tags:["Therapeutic","Steam","Nourishing","Complete care"],
    duration:"1 hr 30 mins", price:"$125", area:"Scalp & hair",
    providerIds:["hannah", "lauren"] },

  { id:"crown-clarity", name:"Crown Clarity", category:"headspa", icon:"glow",
    description:"Nourishing scalp cleanse and massage for mental clarity and balance.",
    fullDescription:"Indulge in a restorative scalp experience designed to bring clarity. Includes scalp analysis, a holistic all-natural cleanse, and a soothing massage that restores balance and melts away tension.",
    tags:["Focus","Balance","Cleanse","Massage"],
    duration:"45 mins", price:"$70", area:"Scalp & hair",
    providerIds:["hannah", "lauren"] },

  { id:"wax-ear", name:"Ear Wax", category:"waxing", icon:"face",
    description:"Removal of unwanted hair from the ears.",
    fullDescription:"Safe removal of hair from the outer ear and ear lobes for a clean, professional finish.",
    tags:["Grooming","Quick","Precision"],
    duration:"15 min", price:"$20", area:"Ears",
    providerIds:["marci", "hannah", "lauren"] },

  // ── INJECTABLES ──
  {
    id: "botox", name: "Neurotoxin (Botox / Dysport / Xeomin)", category: "injectables", icon: "needle",
    description: "Precise muscle relaxation for a smooth, natural, refreshed look.",
    fullDescription: "Our injectable practitioners have a refined, conservative philosophy: the goal is always to look like yourself — just more rested. Neurotoxins are placed with precision in the forehead, glabella, and crow's feet to relax overactive muscles without sacrificing expression. We carry Botox, Dysport, and Xeomin.",
    tags: ["Anti-aging", "Natural results", "No downtime", "Wrinkle relaxer"],
    duration: "30 min", price: "From $12/unit", area: "Face",
    providerIds: ["dr-nguyen"]
  },

  {
    id: "neurotoxin-daxxify", name: "Neurotoxin (Daxxify / Jeuveau)", category: "injectables", icon: "needle",
    description: "Next-generation neurotoxins for longer-lasting wrinkle relaxation.",
    fullDescription: "We also offer Daxxify and Jeuveau for patients seeking alternatives to traditional neurotoxins. Daxxify is notable for its extended duration — clinical data shows results lasting up to 6 months or more in many patients. Jeuveau is a modern, highly purified formulation optimized for aesthetic use. Your provider will recommend the best option based on your goals, anatomy, and treatment history. Initial consult includes assessment of facial features and personalized unit dosing recommendations.",
    tags: ["Anti-aging", "Long-lasting", "Daxxify", "Jeuveau"],
    duration: "30–60 min", price: "Consultation required", area: "Face",
    providerIds: ["dr-nguyen", "regan"]
  },

  {
    id: "dermal-fillers", name: "Dermal Fillers", category: "injectables", icon: "needle",
    description: "Hyaluronic acid fillers to restore volume and contour gracefully.",
    fullDescription: "Dermal fillers use hyaluronic acid to restore lost volume, soften deep lines, and refine facial contours. Common areas include lips, nasolabial folds, cheeks, under-eyes, and jawline. Results are immediate and can last 9–18 months. Our practitioners prioritize balance and proportion — results should enhance your features, not redefine them.",
    tags: ["Volume", "Contouring", "Natural", "Immediate results"],
    duration: "45–60 min", price: "From $650/syringe", area: "Face",
    providerIds: ["dr-nguyen"]
  },

  {
    id: "prf-injections", name: "Platelet Rich Fibrin (PRF) Injections", category: "injectables", icon: "needle",
    description: "Your body's own growth factors to stimulate collagen and restore a youthful appearance.",
    fullDescription: "Platelet-Rich Fibrin (PRF) injections use your body's own growth factors to stimulate collagen production, improve skin texture, and restore a more youthful appearance. This natural, additive-free treatment helps soften fine lines, improve elasticity, and enhance skin quality over time with minimal downtime. Ideal for the face, under-eyes, and areas of skin thinning or volume loss.",
    tags: ["Natural", "Collagen", "Under-eyes", "Skin quality"],
    duration: "30–60 min", price: "Consultation required", area: "Face, under-eyes",
    providerIds: ["dr-nguyen", "regan"]
  },

  // ── WEIGHT ──
  {
    id: "semaglutide", name: "Semaglutide Program", category: "weight", icon: "body",
    description: "Medical weight loss with weekly GLP-1 injections and clinical support.",
    fullDescription: "Semaglutide is a GLP-1 receptor agonist that regulates appetite and blood sugar. Our program includes an initial consultation and lab work, personalized dosing, weekly injections, and ongoing clinical monitoring. Most patients experience meaningful weight loss within the first 4–8 weeks. Requires consultation prior to starting.",
    tags: ["Medical weight loss", "GLP-1", "Clinically supervised", "Appetite regulation"],
    duration: "Ongoing program", price: "Consultation required", area: "Systemic",
    providerIds: ["dr-nguyen"]
  },

  {
    id: "tirzepatide", name: "Tirzepatide Program", category: "weight", icon: "body",
    description: "Dual GIP/GLP-1 agonist — the next generation of medical weight loss.",
    fullDescription: "Tirzepatide acts on two separate hormone receptors (GIP and GLP-1) to more powerfully regulate appetite, blood sugar, and metabolism. Clinical trials show 15–20% body weight loss over treatment. Our program wraps the medication in comprehensive clinical support and goal tracking.",
    tags: ["Medical weight loss", "Dual agonist", "Clinically supervised", "Advanced"],
    duration: "Ongoing program", price: "Consultation required", area: "Systemic",
    providerIds: ["dr-nguyen"]
  },

  {
    id: "metabolic-reset", name: "Metabolic Reset & Weight Loss", category: "weight", icon: "body",
    description: "Comprehensive, evidence-based weight loss combining nutrition, exercise, and metabolic support.",
    fullDescription: "Our medical weight loss programs are designed to help you achieve sustainable results through a comprehensive, evidence-based approach. Each plan combines nutrition counseling, exercise guidance, and — when appropriate — metabolic or peptide support to optimize fat loss, muscle preservation, and overall health. We focus on creating realistic, personalized strategies that fit your lifestyle. You'll receive one-on-one support, ongoing progress monitoring, and education to build lasting habits for improved energy, body composition, and confidence.",
    tags: ["Nutrition", "Lifestyle", "Peptides", "Sustainable results"],
    duration: "60–90 min (initial)", price: "Consultation required", area: "Systemic",
    providerIds: ["dr-nguyen", "regan"]
  },

  // ── HORMONE & FUNCTIONAL HEALTH ──
  {
    id: "bhrt", name: "Bioidentical Hormone Replacement (BHRT)", category: "hormone", icon: "droplet",
    description: "Personalized hormone restoration using molecules identical to those your body produces.",
    fullDescription: "Hormones play a vital role in regulating mood, metabolism, energy, sleep, and sexual health. Over time, natural hormone levels decline — often beginning in your 30s or 40s — leading to symptoms that can significantly impact quality of life. Bioidentical Hormone Replacement Therapy (BHRT) uses hormones that are molecularly identical to those your body produces, restoring balance and supporting long-term wellness. At Regan Aesthetics & Health, each BHRT plan is based on your unique lab values, symptoms, and goals, using precise doses of estrogen, progesterone, testosterone, DHEA, and thyroid support when appropriate. We take a functional, preventative approach — addressing the root cause of imbalance while optimizing overall health and vitality.",
    tags: ["Hormones", "Energy", "Mood", "Longevity"],
    duration: "60–90 min (initial)", price: "Consultation required", area: "Systemic",
    providerIds: ["dr-nguyen", "regan"]
  },

  {
    id: "pcos", name: "PCOS Management", category: "hormone", icon: "leaf",
    description: "Root-cause, individualized care for polycystic ovary syndrome.",
    fullDescription: "Polycystic Ovary Syndrome (PCOS) is a complex hormonal and metabolic condition that can affect cycles, weight, energy, skin, and fertility. At Regan Aesthetics & Health, we take a root-cause, individualized approach to managing PCOS — focusing on balancing hormones, improving metabolic health, and supporting long-term wellness. Treatment may include targeted nutrition, exercise guidance, supplementation, and when appropriate, medication support to improve insulin sensitivity, regulate cycles, and reduce symptoms.",
    tags: ["Women's health", "Hormones", "Metabolic health", "Fertility"],
    duration: "Ongoing program", price: "Consultation required", area: "Systemic",
    providerIds: ["dr-nguyen", "regan"]
  },

  // ── HAIR RESTORATION ──
  {
    id: "prf-hair", name: "Hair Restoration (PRF)", category: "hair", icon: "leaf",
    description: "Regenerative PRF therapy to stimulate dormant follicles and restore fuller, healthier hair.",
    fullDescription: "Restore fuller, healthier hair naturally with Platelet-Rich Fibrin (PRF) therapy. This regenerative treatment uses your body's own growth factors to stimulate dormant follicles, improve scalp circulation, and strengthen hair at the root — without synthetic additives. Over a series of treatments, PRF helps reduce shedding and encourages new growth for thicker, denser hair. Enhance your results with peptide therapy add-ons, which support follicle activity, boost collagen production, and extend the growth phase of your hair cycle from within. Together, PRF and peptides provide a powerful, inside-out approach to lasting hair restoration.",
    tags: ["Hair loss", "PRF", "Peptides", "Scalp health"],
    duration: "60–90 min", price: "Consultation required", area: "Scalp",
    providerIds: ["dr-nguyen", "regan"]
  },
];

const PROVIDERS = [
  {
    id: "teressa", name: "Teressa M.", title: "Licensed Massage Therapist", credentials: "LMT", years: 8,
    avatarInitials: "TM", avatarBg: "rgba(45,74,40,0.2)", avatarColor: "#2d4a28",
    bio: "Teressa is the warm heartbeat of Aisling — the person who greets you at the door and makes you feel at home before a single treatment begins. Her massage work is fluid, intuitive, and deeply attentive. She reads the body with years of trained instinct and has a gift for knowing exactly what each client needs, often before they say it.",
    specialties: ["Swedish massage", "Deep tissue", "Couples massage", "Prenatal massage"],
    bookingUrl: "https://aislingwellnesscenter.com/book",
    serviceIds: ["swedish", "deep-tissue", "couples"]
  },

  {
    id: "rachel", name: "Rachel K.", title: "LMT, Certified Aromatherapist", credentials: "LMT, CA", years: 5,
    avatarInitials: "RK", avatarBg: "rgba(61,48,32,0.2)", avatarColor: "#3d3020",
    bio: "Rachel brings a multi-sensory dimension to her practice — a licensed massage therapist and certified aromatherapist who creates custom scent blends for each session. She's particularly beloved for her lymphatic drainage work and her clients often report sleeping better for days afterward.",
    specialties: ["Lymphatic drainage", "Aromatherapy massage", "Swedish massage", "Stress relief"],
    bookingUrl: "https://aislingwellnesscenter.com/book",
    serviceIds: ["swedish", "lymphatic", "couples"]
  },

  {
    id: "maria", name: "Maria L.", title: "Licensed Massage Therapist", credentials: "LMT", years: 3,
    avatarInitials: "ML", avatarBg: "rgba(30,48,64,0.2)", avatarColor: "#1e3040",
    bio: "Maria's approach is defined by presence and gentleness. She's an exceptional therapist for clients new to massage, recovering from injury, or who prefer a lighter, more mindful touch. Don't mistake gentle for ineffective — her sessions produce lasting results through precise technique.",
    specialties: ["Gentle Swedish", "Relaxation", "New client introductions", "Sensitivity care"],
    bookingUrl: "https://aislingwellnesscenter.com/book",
    serviceIds: ["swedish", "deep-tissue", "couples"]
  },

  {
    id: "regan",
    name: "Regan Bednorz",
    title: "Physician Assistant & Founder",
    credentials: "PA-C, MPAS",
    years: 10, // adjust if needed
    avatarInitials: "RB",
    avatarBg: "rgba(45,74,40,0.2)",
    avatarColor: "#2d4a28",

    bio: "Regan is a West Texas native and the founder of Regan Aesthetics and Health. As a dedicated Physician Assistant, she takes a personalized, root-cause approach to helping patients optimize their health and achieve their goals. Her background spans nutritional sciences, sports nutrition, oncology, emergency medicine, and family medicine, shaping her belief in proactive, preventative care rather than reactive treatment. Regan combines functional medicine with advanced aesthetic training to deliver natural, individualized results that support both internal health and outward confidence. Outside of her practice, she enjoys traveling, weight lifting, spending time outdoors, and cheering on Texas Tech with her family.",

    specialties: [
      "Bioidentical Hormone Replacement Therapy (BHRT)",
      "Metabolic Reset & Medical Weight Loss",
      "PCOS Management",
      "Gut Health & Functional Medicine",
      "Health Optimization & Preventative Care",
      "Neurotoxin Injections (Daxxify, Jeuveau)",
      "Platelet-Rich Fibrin (PRF) Injections",
      "Microneedling",
      "Chemical Peels",
      "Hair Restoration (PRF)"
    ],

    bookingUrl: "https://www.optimantra.com/optimus/patient/patientaccess/servicesall?pid=SG1SbVp0cUZpMGdJWVFQMWV3Yks0UT09&lid=eHdZUUptN2daRFhBdFYxRUdTUitGQT09",

    serviceIds: [
      "bhrt",
      "metabolic-reset",
      "pcos",
      "gut-health",
      "health-optimization",
      "neurotoxin-daxxify",
      "prf-injections",
      "microneedling",
      "chemical-peel",
      "prf-hair"
    ]
  },

  {
    id: "jordan", name: "Jordan P.", title: "Medical Aesthetician & Laser Tech", credentials: "LE, CLT", years: 6,
    avatarInitials: "JP", avatarBg: "rgba(42,32,64,0.2)", avatarColor: "#2a2040",
    bio: "Jordan is our technology specialist — trained on every device in the Aisling suite and certified in laser therapy across all Fitzpatrick skin types. She approaches aesthetic treatments with a clinical mindset and an artist's eye, always prioritizing natural, proportionate results.",
    specialties: ["Alma Harmony laser", "EmSculpt Neo", "EMFACE", "EMSELLA", "Skin analysis"],
    bookingUrl: "https://aislingwellnesscenter.com/book",
    serviceIds: ["alma-harmony", "signature-facial", "emface", "emsculpt-neo", "emsella"]
  },

  {
    id: "ashley", name: "Ashley R.", title: "Licensed Esthetician", credentials: "LE", years: 4,
    avatarInitials: "AR", avatarBg: "rgba(61,32,48,0.2)", avatarColor: "#3d2030",
    bio: "Ashley is a skin-care purist who believes the foundation of great aesthetics is great skin health. She customizes every facial to what the skin is doing that day, and her clients trust her completely. Also certified in red light therapy and body composition analysis.",
    specialties: ["Signature facial", "Red light therapy", "Infrared sauna", "3D body composition", "Foot detox"],
    bookingUrl: "https://aislingwellnesscenter.com/book",
    serviceIds: ["signature-facial", "red-light", "infrared-sauna", "foot-detox", "body-composition", "emsculpt-neo"]
  },

  {
    id: "dr-nguyen", name: "Dr. Linh Nguyen", title: "Medical Director, NP-C", credentials: "NP-C, MSN", years: 12,
    avatarInitials: "LN", avatarBg: "rgba(26,48,40,0.2)", avatarColor: "#1a3028",
    bio: "Dr. Nguyen oversees all medical treatments at Aisling with the precision and warmth that defines everything we do. Over a decade of experience in medical aesthetics and functional wellness, with a philosophy of treating the whole person. Her injectable work is known for its restraint and natural results.",
    specialties: ["Neurotoxins", "Dermal fillers", "IV therapy", "Semaglutide", "Tirzepatide", "Medical oversight"],
    bookingUrl: "https://aislingwellnesscenter.com/book",
    serviceIds: ["botox", "dermal-fillers", "iv-therapy", "semaglutide", "tirzepatide"]
  },

  {
    id: "kasden",
    name: "Kasden Davis",
    title: "Licensed Aesthetician & Owner",
    credentials: "LE",
    years: 5,
    avatarInitials: "KD",
    avatarBg: "rgba(154, 184, 138, 0.2)",
    avatarColor: "#6b8560",
    bio: "Kasden Davis is the owner of Kasden Aesthetics in Lubbock, Texas, and has been a licensed aesthetician since 2019. Specializing in dermaplaning, microneedling, and customized facials, she focuses on creating personalized skincare experiences that address each client’s unique needs. Living in a dry climate, she emphasizes hydration and skin barrier support to restore glow and maintain healthy, radiant skin year-round. Her goal is to provide results-driven treatments in a relaxing, supportive environment.",
    specialties: ["Dermaplaning", "Microneedling", "Customized Facials", "Lash Lift", "Brow Lamination"],
    bookingUrl: "https://aislingwellnesscenter.com/book",
    serviceIds: [
      "microneedling",
      "signature-facial",
      "emsculpt-neo",
      "microdermabrasion",
      "dermaplane-facial",
      "mini-facial",
      "dermaplane-only",
      "herbal-peel",
      "nanoneedling",
      "nanoneedling-exosomes",
      "lash-lift",
      "brow-lamination",
      "consultation-skin",
      "consultation-full"
    ]
  },
  {
    id: "marci",
    name: "Marci Puryear",
    title: "Licensed Esthetician",
    credentials: "LE",
    years: 15,
    avatarInitials: "MP",
    avatarBg: "rgba(30, 48, 64, 0.2)",
    avatarColor: "#1e3040",
    bio: "While working in the social work field, Marci realized her passion for helping people was best expressed on an individual level. As a licensed esthetician since 2010, she helps clients feel great about their skin while boosting their self-esteem. Marci's reputation is built on 15 years of experience, ethical practices, and a commitment to delivering outstanding, result-driven outcomes. She specializes in chemical peels, microneedling, and holistic techniques like facial cupping and lymphatic drainage.",
    specialties: ["TCA Peels", "Microneedling", "European Facials", "Waxing", "Lymphatic Drainage"],
    bookingUrl: "https://aislingwellnesscenter.com/book",
    serviceIds: [
      "microneedling",
      "signature-facial",
      "european-facial",
      "express-facial",
      "not-sure-facial",
      "back-treatment",
      "microdermabrasion",
      "dermaplane-facial",
      "dermaplane-only",
      "tca-peel",
      "acne-peel",
      "micro-peel",
      "lash-dye",
      "brow-dye",
      "wax-brow",
      "wax-lip",
      "wax-chin",
      "wax-underarm",
      "wax-sideburn",
      "wax-nose",
      "wax-neck",
      "wax-face",
      "wax-ear"
    ]
  },

  { 
    id: "jaime",
    name: "Jaime Revilla",
    title: "Licensed Esthetician",
    credentials: "LE",
    years: 22,
    avatarInitials: "JR",
    avatarBg: "rgba(122, 158, 104, 0.2)",
    avatarColor: "#7a9e68",
    bio: "Jaime brings a uniquely holistic and science-driven approach to skincare, cultivated through 22 years as an Occupational Therapist. As a Face Reality Acne Expert, she specializes in transformative acne treatments and anti-aging corrective skincare. Her deep knowledge of anatomy, physiology, and therapeutic modalities allows her to tailor personalized treatment plans that address the root causes of skin concerns, ensuring measurable, science-based results and radiant skin.",
    specialties: ["Face Reality Acne Expert", "Anti-Aging Corrective Skincare", "Lymphatic Facial", "Oxygen Rx", "Holistic Health"],
    bookingUrl: "https://aislingwellnesscenter.com/book",
    serviceIds: [
      "acne-consult-treatment",
      "acne-fr-current",
      "signature-glow-enzyme",
      "dermaglow-facial",
      "swich-dermal",
      "firming-peptide",
      "lymphatic-facial",
      "oxygen-rx",
      "oxygen-rx-express",
      "ultimate-glow",
      "mama-mia",
      "microneedling",
      "dermaplane-only",
      "chemical-peel"
    ]
  },

  { 
    id: "hannah",
    name: "Hannah Lowrey",
    title: "Co-Owner of Smooth Daze Waxing & Full Body Wax Specialist",
    credentials: "LMT",
    years: 7,
    avatarInitials: "HL",
    avatarBg: "rgba(107, 133, 96, 0.2)",
    avatarColor: "#6b8560",
    bio: "Hannah is the Co-Owner of Smooth Daze Waxing and a specialist in full-body hair removal with 7 years of experience. She is passionate about building meaningful connections with her guests and helping them discover what works best for their unique skin needs. A leap of faith led her to start Smooth Daze, allowing her to balance a fulfilling career with quality time spent outdoors and road-tripping with her daughter.",
    specialties: ["Full Body Waxing", "Brazilian Waxing", "Holistic Headspa", "Scalp Health"],
    bookingUrl: "https://smooth-daze.square.site/",
    serviceIds: [
      "tranquility-touch",
      "headspa-harmony",
      "crown-clarity",
      "wax-relax",
      "wax-brazilian",
      "wax-full-bikini",
      "wax-bikini-line",
      "wax-full-butt",
      "wax-stomach-strip",
      "wax-full-stomach",
      "wax-inner-thigh",
      "wax-upper-leg",
      "wax-lower-leg",
      "wax-full-leg",
      "wax-shoulders",
      "wax-upper-back",
      "wax-lower-back",
      "wax-full-back",
      "wax-hairline",
      "wax-chest",
      "wax-underarm",
      "wax-face",
      "wax-brow",
      "wax-lip",
      "wax-nose",
      "wax-chin",
      "wax-neck",
      "wax-sideburn",
      "wax-ear"
    ]
  },

  { 
    id: "lauren",
    name: "Lauren Gomez",
    title: "Full Body Wax Specialist & Co-Owner of Smooth Daze",
    credentials: "LE",
    years: 6,
    avatarInitials: "LG",
    avatarBg: "rgba(61, 48, 32, 0.2)",
    avatarColor: "#3d3020",
    bio: "Lauren is a Full Body Wax Specialist and Co-Owner of Smooth Daze Waxing. Licensed in cosmetology since 2018, she specializes in providing precise, high-quality hair removal from head to toe. She takes great pride in creating a comfortable, relaxing experience that leaves clients feeling smooth and refreshed. Outside of the studio, Lauren enjoys creative arts at Clay Café and singing along to her favorite music.",
    specialties: ["Full Body Waxing", "Precision Face Waxing", "Brazilian Waxing", "Smooth Skin Maintenance"],
    bookingUrl: "https://smooth-daze.square.site/",
    serviceIds: [
      "wax-relax",
      "tranquility-touch",
      "headspa-harmony",
      "crown-clarity",
      "wax-brazilian",
      "wax-full-bikini",
      "wax-bikini-line",
      "wax-full-butt",
      "wax-underarm",
      "wax-chest",
      "wax-stomach-strip",
      "wax-full-stomach",
      "wax-inner-thigh",
      "wax-upper-leg",
      "wax-lower-leg",
      "wax-full-leg",
      "wax-shoulders",
      "wax-upper-back",
      "wax-lower-back",
      "wax-full-back",
      "wax-face",
      "wax-brow",
      "wax-lip",
      "wax-nose",
      "wax-chin",
      "wax-neck",
      "wax-sideburn",
      "wax-ear",
      "wax-hairline"
    ]
  },
];

const REVIEWS = [
  {
    id: "r1", author: "Sarah M.", initials: "SM", rating: 5, date: "January 2025",
    text: "Such a beautiful place with great services and a fabulous boutique. An amazing experience with exceptional service and a welcoming atmosphere. I will be back again and again."
  },
  {
    id: "r2", author: "Jennifer L.", initials: "JL", rating: 5, date: "February 2025",
    text: "What a warm, inviting, encouraging environment. They go far and beyond with the many services they offer. All staff were so friendly and informative. I will recommend this place to everyone!"
  },
  {
    id: "r3", author: "Donna T.", initials: "DT", rating: 5, date: "December 2024",
    text: "I have had the opportunity to enjoy services from almost everyone at Aisling and everyone did a fantastic job! I love how you are greeted upon entering by Teressa. She makes you feel so welcome."
  },
  {
    id: "r4", author: "Michelle R.", initials: "MR", rating: 5, date: "March 2025",
    text: "Absolutely love this place. The EmSculpt Neo results have been incredible — I was skeptical at first but the before and after photos speak for themselves. The whole team is professional and warm."
  },
  {
    id: "r5", author: "Carolyn B.", initials: "CB", rating: 5, date: "November 2024",
    text: "Aisling is unlike anything else in Lubbock. The space itself is stunning — those green walls and the antiques create an atmosphere that feels both luxurious and deeply calming."
  },
  {
    id: "r6", author: "Patricia W.", initials: "PW", rating: 5, date: "February 2025",
    text: "Dr. Nguyen is exceptional. She took so much time with me during our consultation and the results from my fillers are so natural — exactly what I wanted. This is the only place I trust for injectables."
  },
];

const CREDENTIALS = [
  "Licensed specialists", "FDA-cleared technology", "CareCredit accepted",
  "5-star rated in Lubbock", "Medical director on staff", "West Texas's premier med spa",
];

const HOME_SERVICES = [
  { id: "massage", name: "Massage therapy", desc: "Swedish, deep tissue, lymphatic drainage, aromatherapy, and couples.", icon: "hands" },
  { id: "laser", name: "Laser & skin", desc: "Alma Harmony, EMFACE, signature facials, and red light therapy.", icon: "glow" },
  { id: "sculpting", name: "Body sculpting", desc: "EmSculpt Neo, EMSELLA, and 3D body composition analysis.", icon: "body" },
  { id: "wellness", name: "IV & wellness", desc: "IV therapy, infrared sauna, foot detox, and holistic treatments.", icon: "droplet" },
  { id: "injectables", name: "Injectables", desc: "Botox, Dysport, Xeomin, and dermal fillers — natural results.", icon: "needle" },
  { id: "weight", name: "Weight management", desc: "Semaglutide, tirzepatide, and medically guided programs.", icon: "leaf" },
];
