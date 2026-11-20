/* =========================================================================
   SITE CONTENT — edit this file to update the website.
   Everything on index.html and project.html is rendered from here.
   Source of truth for career data: LinkedIn profile export (Nov 2026).
   ========================================================================= */

window.SITE = {
  profile: {
    name: "Paul Poinet",
    handle: "pauldotnet",
    headline: "Product-minded AEC SaaS leader · CDE, openBIM & AI workflows · PhD",
    location: "Paris, France",
    photo: "assets/img/profile.jpg",
    banner: "assets/img/cover.jpg",
    email: "poinetp@gmail.com",
    about: [
      "With over 10 years of experience in design technology and BIM, I've worked in various roles — from R&D to teaching, consulting and customer success — to help AECOO professionals streamline their digital processes, specifically using SaaS products like Common Data Environments.",
      "Today I lead Strategic Customer Advisory at Catenda: I own the voice of the customer for our most complex accounts, turn recurring adoption and workflow patterns into prioritised input for Product Management, and led the French-speaking go-to-market of Catenda AI Connect, our MCP integration with Claude, ChatGPT and Copilot.",
      "Each step of my career has brought me closer to product. In research — at the University of Stuttgart (ICD/ITKE), during a Marie Skłodowska-Curie PhD at CITA, and at UCL's Bartlett — I built tools myself, from multi-scale data models to SpeckleViz, a web app on the Speckle API. Teaching in five countries showed me how people actually adopt new tools. At Trimble Consulting I deployed a CDE and on-site AR across SNCF Réseau — 500+ AR inspections on EOLE helped avoid an estimated €6M in rework — and fed field limitations back to product teams.",
      "The constant: understanding the tools we use to design and build the world around us deeply enough to make them work better — for the people who use them every day."
    ],
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/ppoinet/", icon: "linkedin" },
      { label: "Google Scholar", url: "https://scholar.google.com/citations?user=lW3F1yYAAAAJ", icon: "scholar" },
      { label: "ResearchGate", url: "https://www.researchgate.net/profile/Paul-Poinet", icon: "researchgate" },
      { label: "Vimeo", url: "https://vimeo.com/user15749707", icon: "vimeo" }
    ],
    highlights: [
      { value: "10+", label: "years in design technology & BIM" },
      { value: "12", label: "academic publications" },
      { value: "PhD", label: "Architecture — CITA, Royal Danish Academy" }
    ],
    portfolioPdf: "assets/docs/PaulPoinet_CVPortfolio_lowres.pdf"
  },

  /* Career arc — the through-line shown above the experience list. */
  arc: {
    title: "From building tools to shaping products",
    intro: "Every step has brought me closer to product: first building tools myself, then teaching people to use them, then deploying them at scale in the field — and now turning what customers need into roadmap decisions.",
    stages: [
      { step: "Build", period: "2012 – 2020", text: "Research and prototyping: robotic fabrication, multi-scale data models, and SpeckleViz, a web app built on the Speckle API." },
      { step: "Teach", period: "2015 – 2020", text: "Workshops and studios in five countries — learning first-hand how people adopt (or resist) new tools." },
      { step: "Deploy", period: "2020 – 2024", text: "CDE and AR rollouts at SNCF Réseau and RATP with Trimble, feeding field limitations back to product teams." },
      { step: "Shape", period: "2024 – today", text: "At Catenda: customer discovery, feature validation and go-to-market, turned into prioritised input for Product." }
    ]
  },

  /* Experience — grouped by organisation, LinkedIn-style.
     `lens` = the product angle of each chapter (highlighted line). */
  experience: [
    {
      id: "exp-catenda",
      org: "Catenda",
      logo: "assets/logos/catenda.svg",
      logoPad: true,
      url: "https://catenda.com/",
      location: "Paris, France",
      stage: "Shape",
      lens: "Closest to product: customer discovery → prioritised roadmap input, feature validation with early users, and go-to-market.",
      roles: [
        {
          title: "Director, Strategic Customer Advisory",
          period: "Jul 2026 – Present",
          bullets: [
            "Own the voice of the customer for Catenda's most complex accounts: I run discovery on adoption and workflow blockers and turn recurring patterns into prioritised input for Product Management.",
            "Validate new features with early users on live projects and feed findings back into product iterations.",
            "Led the go-to-market of Catenda AI Connect (MCP integration with Claude, ChatGPT and Copilot) for French-speaking customers, running launch webinars and demos."
          ]
        },
        {
          title: "Customer Success Manager",
          period: "Sep 2024 – Jun 2026",
          bullets: [
            "Managed 50+ accounts in French-speaking markets, driving onboarding, adoption, renewals and expansion — and gaining direct access to user needs for the product team.",
            "Shaped the roadmap from customer feedback — e.g. the French validation workflow, with custom “visa” statuses matching how French AEC teams approve documents.",
            "Represented Customer Success in bi-weekly bug triage, weighing customer impact against engineering effort to prioritise fixes.",
            "Designed KPI dashboards for key accounts across all regions, defining which usage metrics show account health and value.",
            "Owned French localisation of new features at release, and identified expansion opportunities when right for the customer."
          ]
        }
      ]
    },
    {
      id: "exp-trimble",
      org: "Trimble Inc.",
      logo: "assets/logos/trimble.svg",
      url: "https://www.trimble.com/",
      location: "Paris, France",
      stage: "Deploy",
      lens: "Product in the field: deployed CDE and AR at very large scale, and fed software limitations from real users back to Trimble's product teams.",
      roles: [
        {
          title: "Project Consultant — Trimble Consulting",
          period: "Oct 2020 – Sep 2024",
          description: "Owner & Public Sector team (previously Gehry Technologies), supporting clients' digital transformation through BIM for buildings and linear infrastructure. On a three-year contract with SNCF Réseau, I owned the training and support plan for the Connect + Quadri CDE and the deployment of SiteVision (georeferenced AR) and the Trimble XR10 mixed-reality headset.",
          bullets: [
            "Led the rollout of Trimble's CDE at SNCF Réseau: training plans, change management and adoption across a very large organisation.",
            "Drove field deployment of SiteVision AR and XR10 — 500+ AR inspections on EOLE helped avoid an estimated €6M in rework — then scaled SiteVision across all of SNCF's regional engineering clusters.",
            "Built the first successful BIM-based on-site safety briefing and a complete 4D construction sequence for railway track renewal.",
            "Trained 20+ BIM managers at SNCF Réseau and 50+ at RATP Group, and fed software limitations back to the product teams.",
            "Contributed to award-winning teams: TOUS SNCF 2022 (Île-de-France award, EOLE) and TOUS ITIF 2023 (coup de cœur du jury)."
          ],
          note: "Clients: SNCF Réseau, RATP Group, City ID Group, VolkerWessels."
        }
      ]
    },
    {
      id: "exp-ucl",
      org: "UCL — The Bartlett",
      logo: "assets/logos/ucl.png",
      url: "https://www.ucl.ac.uk/bartlett/",
      location: "London, UK",
      stage: "Build",
      lens: "First product work: co-defined a data-exchange spec with six industry partners and shipped a web app prototype to users.",
      roles: [
        {
          title: "Postdoctoral Researcher, Bartlett School of Sustainable Construction",
          period: "Mar 2019 – Jul 2020",
          description: "AEC Delta Mobility project, funded by InnovateUK (£1M grant).",
          bullets: [
            "Co-defined the AEC Delta data-exchange specification with Arup, BuroHappold, HOK, Atkins, 3D Repo and Rhomberg — gathering requirements across competing stakeholders.",
            "Built SpeckleViz, a web app prototype visualising AEC data exchanges with the Speckle API.",
            "Presented the research at SimAUD, ICCCBE, CAADRIA and DC I/O."
          ]
        },
        {
          title: "Design Tutor, Bartlett School of Architecture",
          period: "Oct 2019 – Sep 2020",
          description: "Taught computational design (Rhino-Grasshopper, Python, C#) and collaborative tools (Speckle) to master's students — Urban Design studio (B-Pro), Research Cluster 11."
        }
      ]
    },
    {
      id: "exp-cita",
      org: "Royal Danish Academy — CITA",
      logo: "assets/logos/kadk.svg",
      url: "https://royaldanishacademy.com/en/cita",
      location: "Copenhagen, Denmark",
      stage: "Build",
      lens: "Problem discovery with industry: studied how data flows break between designers, engineers and fabricators — and prototyped tools to fix it.",
      roles: [
        {
          title: "PhD Fellow — InnoChain ETN (Marie Skłodowska-Curie)",
          period: "Dec 2015 – Apr 2020",
          bullets: [
            "Researched how multi-scale data models improve collaboration, with industry partners BuroHappold and Design-to-Production (with secondments, and a stay at McNeel).",
            "Prototyped schema-based modelling tools (SchemaBuilder, LayerStalker, BlankMachine) and tested them on real exchange scenarios between partners."
          ]
        }
      ]
    },
    {
      id: "exp-teaching",
      org: "Teaching & workshops",
      location: "Barcelona · Monterrey · Delft · Valletta · London",
      stage: "Teach",
      list: true,
      lens: "Learning how people really adopt tools — the foundation for later work in customer success and product.",
      roles: [
        { id: "exp-iaac", title: "Guest Faculty — IAAC", org: "IAAC", period: "May – Jul 2020 · Barcelona", description: "Collaborative design with Speckle for international master's students (BIM seminar and Global Summer School online course)." },
        { id: "exp-cedim", title: "Visiting Professor — CEDIM", org: "CEDIM", logo: "assets/logos/cedim.jpg", period: "Dec 2018 · Monterrey", description: "Led the Piped Assemblies workshop: 15 undergraduate students designed and built a free-form structure of 502 laser-cut strips through a streamed Speckle workflow." },
        { id: "exp-simaud", title: "Workshop Tutor — SimAUD, TU Delft", org: "TU Delft", logo: "assets/logos/tudelft.svg", period: "May 2018 · Delft", description: "Open collaborative design, simulation and analysis flows between design, analysis and reporting roles, using Speckle." },
        { id: "exp-innochain", title: "Workshop Participant — InnoChain, Bartlett", org: "InnoChain", logo: "assets/logos/innochain.jpg", period: "2016 · London", description: "With fellow InnoChain researchers, we designed and built a robotically machined timber aggregate structure in three days (Sealion)." },
        { id: "exp-easa", title: "Design Tutor — EASA Links", org: "EASA", logo: "assets/logos/easa.png", period: "Aug 2015 · Valletta", description: "Two-week workshop to design and build a large inflatable installation in St George's Square." }
      ]
    },
    {
      id: "exp-early",
      org: "Early practice",
      location: "Paris · Beijing",
      stage: "Build",
      list: true,
      roles: [
        { id: "exp-chaix", title: "Project Intern — Chaix & Morel et Associés", org: "Chaix & Morel", logo: "assets/logos/chaixmorel.png", period: "Jul – Aug 2013 · Paris", description: "Parametric façade for the refurbishment of a shopping centre in Pontault-Combault." },
        { id: "exp-tsinghua", title: "Project Intern — Tsinghua University", org: "Tsinghua University", logo: "assets/logos/tsinghua.png", period: "Jan – Feb 2013 · Beijing", description: "Global design study of a housing, commercial and hotel complex for CR Land Ltd. (China Resources Group)." },
        { id: "exp-ezct", title: "Research Intern — EZCT Architecture & Design Research", org: "EZCT", logo: "assets/logos/ezct.png", period: "Feb – May 2012 · Paris", description: "U-Cube, exhibited in “Multiversités créatives” at the Centre Georges Pompidou." }
      ]
    }
  ],

  education: [
    {
      id: "edu-cita",
      school: "CITA — Royal Danish Academy",
      logo: "assets/logos/kadk.svg",
      degree: "PhD, Architecture — Multi-Scale Modelling for Building Design",
      period: "2015 – 2020",
      note: "Thesis: Enhancing Collaborative Practices in AEC through Multi-Scalar Modelling Methodologies."
    },
    {
      id: "edu-stuttgart",
      school: "Universität Stuttgart",
      logo: "assets/logos/stuttgart.png",
      degree: "M.Sc. ITECH — Integrative Technologies & Architectural Design Research",
      period: "2013 – 2015",
      note: "ICD / ITKE. Design development and construction of the ICD/ITKE Research Pavilion 2014-15."
    },
    {
      id: "edu-ensapm",
      school: "École d'architecture Paris-Malaquais — PSL",
      logo: "assets/logos/ensapm.png",
      degree: "Bachelor of Architecture (B.Arch.) — Digital Knowledge Department",
      period: "2010 – 2013",
      note: ""
    },
    {
      id: "edu-hku",
      school: "The University of Hong Kong",
      logo: "assets/logos/hku.png",
      degree: "International Exchange, Architecture",
      period: "2012 – 2013",
      note: ""
    },
    {
      id: "edu-lfb",
      school: "Lycée français de Berlin — Französisches Gymnasium",
      mono: "LFB",
      degree: "AbiBac — Abitur & Baccalauréat Scientifique (Physics-Chemistry)",
      period: "2009 – 2010",
      note: ""
    }
  ],

  certifications: [
    { name: "Arkitekt MAA", issuer: "Danish Association of Architects" },
    { name: "Goethe-Zertifikat C1", issuer: "Goethe-Institut" },
    { name: "Basic Robot Programming (KRC 2)", issuer: "KUKA College" },
    { name: "Technician in Civil Engineering", issuer: "CNAM", logo: "assets/logos/cnam.png" }
  ],

  honors: [
    { name: "2nd place — Tallinn Architecture Biennale 2017 Installation Competition", year: "2017" },
    { name: "Île-de-France award, “TOUS SNCF” — with the EOLE team", year: "2022" },
    { name: "“Challenge Innovation – coup de cœur du jury”, “TOUS ITIF” — with the ITIF team", year: "2023" }
  ],

  skills: [
    { group: "Focus", items: ["Common Data Environments", "openBIM", "AI workflows & MCP", "Customer advisory", "Product discovery", "Change management", "AR / MR on site", "Computational design"] },
    { group: "Products & tools", items: ["Catenda Hub & Duo", "Trimble Connect", "Quadri", "SiteVision", "Trimble XR10", "Speckle", "Rhino + Grasshopper"] },
    { group: "Code", items: ["Python", "C#", "JavaScript", "Vue.js", "D3.js"] },
    { group: "Languages", items: ["French — native", "English — native / bilingual", "German — intermediate", "Danish — elementary"] }
  ],

  /* --------------------------------------------------------------------- *
   * International map — one pin per place. `href` points to the anchor of
   * the experience / education / publication on index.html, or to a project
   * page. Types: work · education · teaching · research · conference · project
   * (2020 conferences were held online, so they are not pinned.)
   * --------------------------------------------------------------------- */
  placeTypes: {
    work: "Work",
    education: "Education",
    teaching: "Teaching & workshops",
    research: "Research",
    conference: "Conference",
    project: "Project"
  },
  places: [
    { name: "Paris", country: "France", lat: 48.8566, lng: 2.3522, items: [
      { type: "work", title: "Catenda — Director, Strategic Customer Advisory · Customer Success Manager", when: "2024 – today", href: "#exp-catenda" },
      { type: "work", title: "Trimble Consulting — Project Consultant (SNCF Réseau, RATP)", when: "2020 – 2024", href: "#exp-trimble", children: [
        { type: "project", title: "BIM & Augmented Reality on EOLE", when: "2020 – 2024", href: "project.html?id=eole-ar" }
      ] },
      { type: "research", title: "PhD — CITA, Royal Danish Academy", when: "2015 – 2020", href: "#exp-cita", ref: true, children: [
        { type: "conference", title: "Design Modelling Symposium Paris", when: "2017", href: "#pub-dms2017" }
      ] },
      { type: "work", title: "Chaix & Morel et Associés — Project Intern", when: "2013", href: "#exp-chaix" },
      { type: "education", title: "B.Arch., ENSA Paris-Malaquais", when: "2010 – 2013", href: "#edu-ensapm" },
      { type: "work", title: "EZCT Architecture & Design Research — Research Intern", when: "2012", href: "#exp-ezct", children: [
        { type: "project", title: "U-Cube — Centre Pompidou", when: "2012", href: "project.html?id=u-cube" }
      ] }
    ] },
    { name: "London", country: "United Kingdom", lat: 51.5246, lng: -0.134, items: [
      { type: "work", title: "UCL Bartlett — Postdoctoral Researcher & Design Tutor", when: "2019 – 2020", href: "#exp-ucl", children: [
        { type: "project", title: "SpeckleViz", when: "2019", href: "project.html?id=speckleviz" }
      ] },
      { type: "research", title: "PhD — CITA, Royal Danish Academy", when: "2015 – 2020", href: "#exp-cita", ref: true, children: [
        { type: "research", title: "Secondment — BuroHappold Engineering", when: "2015 – 2019", href: "#exp-cita" }
      ] },
      { type: "teaching", title: "InnoChain workshop — participant", when: "2016", href: "#exp-innochain", children: [
        { type: "project", title: "Sealion", when: "2016", href: "project.html?id=sealion" }
      ] }
    ] },
    { name: "Copenhagen", country: "Denmark", lat: 55.6815, lng: 12.6037, items: [
      { type: "research", title: "PhD Fellow — CITA, Royal Danish Academy", when: "2015 – 2020", href: "#exp-cita", also: ["#edu-cita"], children: [
        { type: "project", title: "Multi-Scalar Modelling — PhD Thesis", when: "2015 – 2020", href: "project.html?id=phd" },
        { type: "conference", title: "ECPPM 2018", when: "2018", href: "#pub-ecppm2018" }
      ] }
    ] },
    { name: "Erlenbach (Zurich)", country: "Switzerland", lat: 47.307, lng: 8.592, items: [
      { type: "research", title: "PhD — CITA, Royal Danish Academy", when: "2015 – 2020", href: "#exp-cita", ref: true, children: [
        { type: "research", title: "Secondment — Design-to-Production", when: "2015 – 2019", href: "#exp-cita" }
      ] }
    ] },
    { name: "Barcelona", country: "Spain", lat: 41.3984, lng: 2.194, items: [
      { type: "teaching", title: "IAAC — Guest Faculty", when: "2020", href: "#exp-iaac" },
      { type: "research", title: "PhD — CITA, Royal Danish Academy", when: "2015 – 2020", href: "#exp-cita", ref: true, children: [
        { type: "conference", title: "IASS Symposium 2019 — Form and Force", when: "2019", href: "#pub-iass2019" },
        { type: "research", title: "Research stay — McNeel Europe", when: "2015 – 2019", href: "#exp-cita" }
      ] }
    ] },
    { name: "Stuttgart", country: "Germany", lat: 48.7821, lng: 9.1731, items: [
      { type: "education", title: "M.Sc. ITECH, University of Stuttgart", when: "2013 – 2015", href: "#edu-stuttgart", children: [
        { type: "project", title: "ICD/ITKE Research Pavilion 2014-15", when: "2015", href: "project.html?id=icd-itke-2014-15" },
        { type: "project", title: "Adaptive Pneumatic Shell Structures (Master's thesis)", when: "2015", href: "project.html?id=adaptive-pneumatic-shells" },
        { type: "project", title: "ICD/ITKE Research Pavilion 2013-14", when: "2014", href: "project.html?id=icd-itke-2013-14" },
        { type: "project", title: "Light Sculptures", when: "2013", href: "project.html?id=light-sculptures" }
      ] }
    ] },
    { name: "Berlin", country: "Germany", lat: 52.514, lng: 13.35, items: [
      { type: "education", title: "AbiBac — Lycée français de Berlin", when: "2009 – 2010", href: "#edu-lfb" }
    ] },
    { name: "Delft", country: "Netherlands", lat: 51.999, lng: 4.3735, items: [
      { type: "teaching", title: "SimAUD workshop, TU Delft — Tutor", when: "2018", href: "#exp-simaud" }
    ] },
    { name: "Valletta", country: "Malta", lat: 35.8993, lng: 14.5129, items: [
      { type: "teaching", title: "EASA Links — Design Tutor", when: "2015", href: "#exp-easa", children: [
        { type: "project", title: "EASA Links — inflatable installation", when: "2015", href: "project.html?id=easa-malta-2015" }
      ] }
    ] },
    { name: "Tallinn", country: "Estonia", lat: 59.4403, lng: 24.7553, items: [
      { type: "research", title: "PhD — CITA, Royal Danish Academy", when: "2015 – 2020", href: "#exp-cita", ref: true, children: [
        { type: "project", title: "Grove — Tallinn Architecture Biennale, 2nd prize", when: "2017", href: "project.html?id=grove-tab-2017" }
      ] }
    ] },
    { name: "Oulu", country: "Finland", lat: 65.0593, lng: 25.4663, items: [
      { type: "research", title: "PhD — CITA, Royal Danish Academy", when: "2015 – 2020", href: "#exp-cita", ref: true, children: [
        { type: "conference", title: "eCAADe 2016", when: "2016", href: "#pub-ecaade2016" }
      ] }
    ] },
    { name: "Monterrey", country: "Mexico", lat: 25.6641, lng: -100.4489, items: [
      { type: "teaching", title: "CEDIM — Visiting Professor", when: "2018", href: "#exp-cedim", children: [
        { type: "project", title: "Piped Assemblies", when: "2018", href: "project.html?id=piped-assemblies" }
      ] }
    ] },
    { name: "Hong Kong", country: "Hong Kong SAR", lat: 22.2833, lng: 114.1373, items: [
      { type: "education", title: "International exchange, The University of Hong Kong", when: "2012 – 2013", href: "#edu-hku", children: [
        { type: "project", title: "Flexible Concrete", when: "2012", href: "project.html?id=flexible-concrete" }
      ] }
    ] },
    { name: "Beijing", country: "China", lat: 40.0039, lng: 116.3264, items: [
      { type: "work", title: "Tsinghua University — Project Intern", when: "2013", href: "#exp-tsinghua" }
    ] },
    { name: "Tokyo", country: "Japan", lat: 35.7128, lng: 139.762, items: [
      { type: "research", title: "PhD — CITA, Royal Danish Academy", when: "2015 – 2020", href: "#exp-cita", ref: true, children: [
        { type: "conference", title: "IASS Symposium 2016", when: "2016", href: "#pub-iass2016" }
      ] }
    ] }
  ],

  categories: ["BIM & Digital Construction", "Computational Design", "Robotic Fabrication", "Web Development", "Academia", "Teaching"],

  /* --------------------------------------------------------------------- */
  projects: [
    {
      id: "phd",
      title: "Multi-Scalar Modelling — PhD Thesis",
      subtitle: "Enhancing Collaborative Practices in Architecture, Engineering and Construction through Multi-Scalar Modelling Methodologies",
      year: "2015 – 2020",
      location: "KADK / CITA, Copenhagen",
      role: "PhD researcher",
      categories: ["Computational Design", "Academia"],
      cover: "assets/img/PhD-Showreel.jpg",
      summary: "Schema-based workflows and inter-scalar search interfaces that let architects, engineers and fabricators share design data across scales.",
      body: [
        "My PhD thesis investigates how multi-scalar modelling methodologies can enhance collaboration between architects, engineers and fabricators. Through a series of modelling experiments — from propagating timber blanks and topological mapping to building, exploring and transferring hierarchies with custom schemas — it develops schema-based workflows and inter-scalar search interfaces for building design.",
        "The research was carried out within the InnoChain ETN network, which received funding from the European Union's Horizon 2020 research and innovation programme under the Marie Skłodowska-Curie grant agreement No 642877, at the Institute of Architecture and Technology, KADK, with industrial secondments at Design-to-Production and BuroHappold.",
        "The thesis was defended online on 3 April 2020. The videos below are listed in their order of appearance during the defence; each title refers to the corresponding thesis experiment."
      ],
      credits: [
        ["Author", "Paul Poinet"],
        ["Primary supervisor", "Prof. Mette Ramsgaard Thomsen, Head of CITA, KADK"],
        ["Secondary supervisor", "Assoc. Prof. Martin Tamke, CITA, KADK"],
        ["Industrial supervisors", "Dr. Al Fisher (BuroHappold Engineering), Fabian Scheurer (Design-to-Production)"],
        ["Assessment committee", "Prof. Jane Burry (Swinburne University of Technology), Robert Otani (Thornton Tomasetti), Assoc. Prof. Daniel Lee (KADK, chair)"],
        ["Funding", "EU Horizon 2020, Marie Skłodowska-Curie grant No 642877 (InnoChain ETN)"]
      ],
      links: [
        { label: "Read the thesis (pre-defence version)", url: "assets/docs/PhDThesis_PaulPoinet_102219_PreDefenceVersion.pdf" },
        { label: "Abstract", url: "assets/docs/PhDThesis_Abstract.pdf" },
        { label: "Defence presentation slides", url: "assets/docs/PaulPoinet_DefencePresentation_040320.pdf" },
        { label: "ResearchGate", url: "https://www.researchgate.net/publication/340362551_Enhancing_Collaborative_Practices_in_Architecture_Engineering_and_Construction_through_Multi-Scalar_Modelling_Methodologies" }
      ],
      videos: ["287429249", "345195863", "402625880", "402625834", "402625923", "402625798", "402625763"],
      images: ["PhD-Showreel.jpg", "PhD-Defence-LayerStaker.jpg", "Grove-Modelling.jpg", "Grove-Main-Render.jpg"]
    },
    {
      id: "eole-ar",
      title: "BIM & Augmented Reality on EOLE",
      subtitle: "CDE rollout and on-site AR for SNCF Réseau — Trimble Consulting",
      year: "2020 – 2024",
      location: "EOLE (RER E extension), Île-de-France",
      role: "Project Consultant, Trimble Consulting",
      categories: ["BIM & Digital Construction"],
      cover: "assets/img/EOLE-AR-Site.jpg",
      award: "TOUS SNCF 2022 award",
      summary: "500+ georeferenced AR inspections on one of Europe's largest rail projects, avoiding an estimated €6M in rework.",
      body: [
        "As part of a three-year contract between SNCF Réseau and Trimble Consulting (previously Gehry Technologies), I was responsible for the SNCF staff training and support plan on the Connect + Quadri Common Data Environment, and for deploying SiteVision — georeferenced augmented reality — and the Trimble XR10 mixed-reality headset in the field.",
        "On EOLE, the extension of the RER E line across Paris and its western suburbs, site teams used SiteVision to overlay the BIM model on the real site. More than 500 AR inspections helped detect deviations before they became costly, avoiding an estimated €6M in rework. The approach was then scaled across all of SNCF's regional engineering clusters, adapting workflows to very different user contexts.",
        "The work also produced the first successful BIM-based on-site safety briefing and a complete 4D construction sequence for railway track renewal. The EOLE team won the Île-de-France award at the “TOUS SNCF” 2022 competition, and the ITIF team the special award “Challenge Innovation 2023 – coup de cœur du jury” at “TOUS ITIF” 2023."
      ],
      credits: [
        ["Client", "SNCF Réseau — Programme industriel BIM / Continuité numérique"],
        ["Consultancy", "Trimble Consulting"],
        ["Technology", "Trimble Connect + Quadri (CDE), Trimble SiteVision, Trimble XR10 with HoloLens 2"]
      ],
      links: [],
      videos: ["844178156"],
      images: ["EOLE-AR-Site.jpg"]
    },
    {
      id: "speckleviz",
      title: "SpeckleViz",
      subtitle: "A web-based interactive activity network diagram for AEC",
      year: "2019",
      location: "UCL Bartlett, London",
      role: "Research & development",
      categories: ["Web Development"],
      cover: "assets/img/SpeckleViz-Interface2-Zoom.jpg",
      summary: "A Speckle web app that visualises how data flows across the users, streams and documents of an AEC project.",
      body: [
        "SpeckleViz is a Speckle web app available within the SpeckleAdmin interface. Its main purpose is to help users get a better understanding of the data flow of a specific Speckle project across multiple users, streams and documents.",
        "This project received funding from InnovateUK under the competition “Increase Productivity, Performance and Quality in UK Construction” (proj. no. 104799), as part of the AEC Delta Mobility project at UCL."
      ],
      credits: [],
      links: [
        { label: "Speckle", url: "https://speckle.systems/" },
        { label: "SpeckleAdmin on GitHub", url: "https://github.com/speckleworks/SpeckleAdmin/" },
        { label: "AEC Delta Mobility", url: "https://www.ucl.ac.uk/bartlett/construction/research/management-projects/aec-delta-mobility/" }
      ],
      videos: ["373740855", "357415299", "350506876"],
      images: ["SpeckleViz-Interface2-Zoom.jpg", "SpeckleViz-Interface1.jpg", "SpeckleViz-SimaudWorkflow.jpg", "SpeckleViz-CEDIMWorkflow.jpg"]
    },
    {
      id: "piped-assemblies",
      title: "Piped Assemblies",
      subtitle: "File-less collaborative design-to-fabrication workshop",
      year: "2018",
      location: "CEDIM, Monterrey, Mexico",
      role: "Visiting Professor, workshop leader",
      categories: ["Computational Design", "Academia", "Teaching"],
      cover: "assets/img/Piped-Assemblies-Bottom.jpg",
      summary: "502 unique polypropylene strips, designed and fabricated by students through a streamed, file-less Speckle workflow.",
      body: [
        "The Piped Assemblies workshop, conducted at the Centro de Estudios Superiores de Diseño de Monterrey (CEDIM) in November–December 2018, took on the challenge of introducing state-of-the-art computational design and fabrication workflows to undergraduate students in architecture.",
        "The overall free-form structure is built from 502 unique developable polypropylene strips connected with rivets, and occupies a volume of 12.5 m³ (2.12 × 2.5 × 2.35 m). Its aesthetics and morphology (local high curvature) are strongly inspired by the free-form installations of TheVeryMany (Marc Fornes) and Jens Pedersen's AA Visiting School workshops in Aarhus. The strip discretisation also draws on prior graph-based computational design research (Nejur, 2016).",
        "The main goal of the workshop was to set up an integrative, file-less collaborative design workflow in which data is constantly streamed — through the open-source AEC communication platform Speckle — from student to student during all phases of design and construction. The workflow followed a waterfall methodology in which each design “pipeline” (a local Grasshopper definition) depends on its predecessor; at any stage, changes could be communicated upstream to drive better output downstream, with feedback loops continuing until all requirements were met.",
        "The workflow was segregated into seven pipelines connected through Speckle streams: (1) definition of the overall abstract network, (2) base mesh generation and stitching between nodes, (3) mesh relaxation and planarisation (Kangaroo 2), (4) strip generation via a mesh-walk method built with NetworkX, (5) labelling, unrolling and sorting of the strips, (6) nesting (OpenNest), and (7) export of machine-ready DXF data with wireless transfer to laser-cutting (STM Robotics).",
        "From the fifth pipeline, the workflow branches into six parallel streams as students organised into six teams, each fabricating one node of the structure — reducing the complexity of assembly. The final prototype was hung with nylon threads in CEDIM's main entrance, through the mezzanine aperture, with the tension of each thread calibrated empirically."
      ],
      credits: [
        ["Host institution", "CEDIM"],
        ["Academic director", "David Durán"],
        ["Visiting professor", "Paul Poinet"],
        ["Assistants", "Djordje Stanojevic, Yessica Mendez"],
        ["Students", "Z. Esther Cepeda, Grecia C. Cortes, Iván A. Durán, A. Karen Garza, Fabrizio Hernández, Denise Llano, Mayalen Martínez, Lina I. Mejía, Carlos A. Muñoz, Ernesto Torralba, Jesus Villalobos"],
        ["Sponsors", "STM Robotics, Abacril"]
      ],
      links: [
        { label: "CEDIM blog", url: "http://blog.cedim.edu.mx/arquitectura/piped-assemblies/" },
        { label: "Paper — IASS Symposium 2019", url: "https://scholar.google.com/scholar?q=%22Collaborative+workflow+for+the+design%2C+structural+analysis+and+fabrication+of+a+strip-based+segmented+complex+structure%22" }
      ],
      videos: ["350531934"],
      images: ["Piped-Assemblies-Bottom.jpg", "Piped-Assemblies-Team.jpg", "Piped-Assemblies-NodeDetail.jpg", "Piped-Assemblies-StripDirectionality.jpg", "Piped-Assemblies-GlobalDesign.png", "Piped-Assemblies-GlobalDesign-Exploded.png", "Piped-Assemblies-Workflow.png", "Piped-Assemblies-Nesting.png"]
    },
    {
      id: "grove-tab-2017",
      title: "Grove — Tallinn Architecture Biennale",
      subtitle: "Installation competition, 2nd prize",
      year: "2017",
      location: "Museum of Estonian Architecture, Tallinn",
      role: "Design & modelling",
      categories: ["Computational Design", "Academia"],
      cover: "assets/img/Grove-Main-Render.jpg",
      award: "2nd prize",
      summary: "A branching canopy of free-form glue-laminated timber, modelled across scales from material limits to logistics.",
      body: [
        "Grove is a competition proposal for the 2017 Tallinn Architecture Biennale folly competition. It is a pocket of natural space — a safe haven — in the middle of the city. Constructed out of free-form glue-laminated timber elements, the folly twists, winds and branches into an enveloping canopy that seemingly grows from the site. Merging abstract, systemic methods of algorithmic modelling with state-of-the-art timber fabrication, the proposal points towards an architecture rooted in the deep embedding of material behaviour and performance.",
        "Taking inspiration from the branching and dense interleaving of trees in a forest, the entry is based on an integrated modelling method combining an overall branching and growth logic with embedded material limits and fabrication constraints. The structure is organised as a self-supporting ‘grove’ of laminated timber elements which bifurcate and interconnect into a three-dimensional, spaceframe-like structural scheme.",
        "Two contextual considerations guide the clustering and opening of the pavilion: the entrance of the Museum of Estonian Architecture, and the view towards the Old City to the southwest. These are articulated by two ‘pockets’ within the vaulting structure, providing semi-enclosed seating areas looking towards the skyline. The proposal unfolds in three parts: the experiential qualities of the folly; fabrication-aware modelling and prototypes that demonstrate feasibility; and a high-level graph-based model linking the overall scheme with logistics and project organisation across scales.",
        "The project was awarded 2nd place."
      ],
      credits: [
        ["Design", "Paul Poinet, Tom Svilans, Martin Tamke, Mette Ramsgaard Thomsen"],
        ["Modelling", "Paul Poinet, Tom Svilans"],
        ["Imagery", "Tom Svilans, Leonardo Castaman"]
      ],
      links: [
        { label: "InnoChain", url: "http://innochain.net/tallinn-architecture-biennale-2017-folly-competition/" },
        { label: "TAB 2017", url: "https://2017.tab.ee/" }
      ],
      youtube: "POh4oTwN9g4",
      youtubeCaption: "Presentation of the project at the TAB 2017 Symposium",
      videos: [],
      images: ["Grove-Main-Render.jpg", "Grove-Day-Render.jpg", "Grove-Night-Render.jpg", "Grove-Modelling.jpg", "Grove-Details.jpg"]
    },
    {
      id: "sealion",
      title: "Sealion",
      subtitle: "Robotically machined aggregate structure — InnoChain workshop",
      year: "2016",
      location: "Bartlett School of Architecture, London",
      role: "Design & fabrication",
      categories: ["Computational Design", "Robotic Fabrication", "Academia"],
      cover: "assets/img/Sealion.jpg",
      summary: "A self-supporting free-form structure of linear elements and simple joints, designed and built in three days.",
      body: [
        "This workshop presented the challenge of designing and fabricating an aggregate structure composed of simple linear elements with simple joints, using multi-axis robotic machining. The design-to-production workflow — from initial diagrammatic network sketch to individual joint connections and assembly sequences — was developed to realise a self-supporting, free-form structure. Member length limitations, joint geometries and structural stability all had to be addressed and solved in three days.",
        "The project was part of a series of workshops for the InnoChain Research Network."
      ],
      credits: [
        ["Design", "Paul Poinet, Tom Svilans, Kaspar Ax"],
        ["Fabrication", "Kaspar Ax, Paul Poinet, Tom Svilans, Inigo Dodd, Vicente Soler"]
      ],
      links: [{ label: "InnoChain", url: "http://innochain.net/" }],
      videos: [],
      images: ["Sealion.jpg", "Sealion3D.jpg", "SealionBuilt.jpg"]
    },
    {
      id: "adaptive-pneumatic-shells",
      title: "Adaptive Pneumatic Shell Structures",
      subtitle: "ITECH Master's thesis",
      year: "2015",
      location: "ICD, University of Stuttgart",
      role: "Design & fabrication",
      categories: ["Computational Design", "Robotic Fabrication", "Academia"],
      cover: "assets/img/MasterThesisCover.png",
      summary: "Feedback-driven robotic stiffening of inflated membranes, rigidified into thin compression shells.",
      body: [
        "This project develops a design framework that reduces the complexity of designing and fabricating free-form inflatable structures, which often results in very complex geometries. Previous research had investigated the form-finding potential of actuated and constrained inflatable membranes, but without a focus on fabrication. In established design-to-fabrication approaches, complex geometry is typically post-rationalised into smaller parts and fabricated with methods that must account for cutting patterns and material constraints.",
        "The framework transforms that process into a more integrated one that unfolds simultaneously in a physical and digital environment. At full scale, a flexible extensible membrane (e.g. latex) is actuated through inflation and modulated through robotic additive stiffening, before being fully rigidified with glass fibres to work as a thin shell under compression."
      ],
      credits: [["Design & fabrication", "Paul Poinet"], ["Institution", "ICD — Institute for Computational Design and Construction, University of Stuttgart"]],
      links: [{ label: "Research publication (eCAADe 2016)", url: "https://www.researchgate.net/publication/305993819_Adaptive_Pneumatic_Shell_Structures_Feedback-driven_robotic_stiffening_of_inflated_extensible_membranes_and_further_rigidification_for_architectural_applications" }],
      videos: ["146791195", "389371102"],
      images: ["MasterThesisCover.png", "MasterThesis00.png", "MasterThesis0.png", "MasterThesis1.png", "MasterThesis2.png", "MasterThesis3.jpg", "MasterThesis3b.jpg", "MasterThesis8.jpg", "MasterThesis5.jpg", "MasterThesis5b.jpg", "MasterThesis6.png", "MasterThesis7.jpg"]
    },
    {
      id: "easa-malta-2015",
      title: "EASA Links — Malta",
      subtitle: "Large-scale inflatable installation",
      year: "2015",
      location: "St George's Square, Valletta, Malta",
      role: "Design tutor",
      categories: ["Computational Design", "Teaching"],
      cover: "assets/img/EASAMaltaLinks0.jpg",
      summary: "A two-week workshop to design and build a temporary inflatable art installation in the heart of Valletta.",
      body: [
        "This workshop, organised within the European Architecture Students Assembly (EASA), focused on the design and fabrication of a large-scale inflatable structure that served as a temporary art installation in Valletta's St George's Square, at the very centre of Malta's capital. Over two weeks, students learned the required computational tools and fabrication processes, developed the global design and fabricated the structure."
      ],
      credits: [
        ["Design tutors", "Paul Poinet, Fabrice Wack, Julian Hoell"],
        ["Students", "Jano Vyšný, Antreas Biros, Laoura Tziourrou, Mark Distanov, Krista Skujiņa, Fabrice Kcaw, Elis Haçkaj, Aleksandra Wróbel, Denis Tantsyura, Özlem Yazgan, Marcos Anton Kowalski, Rachel Graham, Nikita Abanin"]
      ],
      links: [{ label: "EASA", url: "https://www.easanetwork.org/" }],
      videos: ["136809651"],
      images: ["EASAMaltaLinks0.jpg", "EASAMaltaLinks1.jpg", "EASAMaltaLinks2.jpg", "EASAMaltaLinks3.jpg", "EASAMaltaLinks5.jpg"]
    },
    {
      id: "icd-itke-2014-15",
      title: "ICD/ITKE Research Pavilion 2014-15",
      subtitle: "Robotic carbon-fibre reinforcement of a pneumatic formwork, inspired by the water spider",
      year: "2015",
      location: "University of Stuttgart",
      role: "Global design iterations; system development, fabrication & construction",
      categories: ["Computational Design", "Robotic Fabrication", "Academia"],
      cover: "assets/img/ICD-ITKE_RP14-15_Process10.jpg",
      summary: "An ETFE air-supported envelope robotically stiffened from inside with 45 km of carbon fibre — 260 kg for 40 m².",
      body: [
        "The ICD/ITKE Research Pavilion 2014-15 demonstrates the architectural potential of a novel building method inspired by the underwater nest construction of the water spider. Through a robotic fabrication process, an initially flexible pneumatic formwork is gradually stiffened by reinforcing it with carbon fibres from the inside. The resulting lightweight fibre composite shell forms a pavilion with unique architectural qualities while being a highly material-efficient structure.",
        "The pavilion continues the series of research pavilions by the Institute for Computational Design (ICD) and the Institute of Building Structures and Structural Design (ITKE), developed through their collaborative teaching in the interdisciplinary ITECH MSc programme. It is the result of one and a half years of development by researchers and students of architecture, engineering and natural sciences.",
        "The design concept is based on biological construction processes for fibre-reinforced structures, which require no complex formwork and adapt to the demands of each construction. The web-building process of the diving bell water spider (Argyroneta aquatica) proved particularly relevant: the spider builds a horizontal sheet web, places an air bubble beneath it, and sequentially reinforces the bubble with a hierarchical arrangement of fibres laid from within.",
        "To transfer this into architecture, an industrial robot was placed inside an air-supported ETFE membrane. Initially supported by air pressure, the soft shell is gradually stiffened by robotically applied carbon fibre into a self-supporting monocoque. Fibres are applied only where structurally required, and the pneumatic formwork doubles as the building skin.",
        "Shell geometry and main fibre bundles were generated through computational form-finding integrating fabrication constraints and structural simulation; an agent-based design method — like the spider — navigated the shell to generate robot paths for fibre placement. During fabrication, the changing stiffness of the formwork was handled through an embedded sensor system feeding position and contact force into the robot control in real time: a cyber-physical feedback loop between production conditions and code generation.",
        "45 km of carbon roving were laid at an average 0.6 m/min along 5 km of robot path. The pavilion covers about 40 m² with an internal volume of approximately 130 m³, a span of 7.5 m and a height of 4.1 m. Its total weight is just 260 kg — 6.5 kg/m².",
        "My contribution included the global design iterations: all form-finding iterations relied on Kangaroo (Daniel Piker), except the final ones performed with Rhino Membrane (Gerry D'Anza)."
      ],
      credits: [
        ["Research institutes", "ICD — Prof. Achim Menges; ITKE — Prof. Jan Knippers"],
        ["Scientific development", "Moritz Dörstelmann, Valentin Koslowski, Marshall Prado, Gundula Schieber, Lauren Vasey"],
        ["System development, fabrication & construction", "Hassan Abbasi, Yassmin Al-Khasawneh, Yuliya Baranovskaya, Marta Besalu, Giulio Brugnaro, Elena Chiridnik, Tobias Grun, Mark Hageman, Matthias Helmreich, Julian Höll, Jessica Jorge, Yohei Kanzaki, Shim Karmin, Georgi Kazlachev, Vangel Kukov, David Leon, Kantaro Makanae, Amanda Moore, Paul Poinet, Emily Scoones, Djordje Stanojevic, Andrei Stoiculescu, Kenryo Takahashi, Maria Yablonina; WiSe 2014-15: Rebecca Jaroszewski, Yavar Khonsari, Ondrej Kyjanek, Alberto Lago, Kuan-Ting Lai, Luigi Olivieri, Guiseppe Pultrone, Annie Scherer, Raquel Silva, Shota Tsikoliya"],
        ["With the support of", "Ehsan Baharlou, Benjamin Felbrich, Manfred Hammer, Axel Körner, Anja Mader, Michael Preisack, Seiichi Suzuki, Michael Tondera"],
        ["In collaboration with", "University of Tübingen (Evolutionary Biology of Invertebrates — Prof. Dr. Oliver Betz; Palaeontology of Invertebrates — Prof. Dr. James Nebelsick, Dr. Christoph Allgaier); University of Stuttgart (Institute for Machine Tools; Institute of Aircraft Design)"],
        ["Funding", "KUKA Roboter GmbH, GETTYLAB, tat aiRstructures, SGL Carbon SE, Sika Deutschland GmbH, Daimler AG and others"]
      ],
      links: [
        { label: "ArchDaily", url: "https://www.archdaily.com/770516/icd-itke-research-pavilion-2014-15-icd-itke-university-of-stuttgart/" },
        { label: "Domus", url: "https://www.domusweb.it/en/news/2015/07/14/icd_itke_research_pavilion.html" },
        { label: "Designboom", url: "https://www.designboom.com/architecture/icd-itke-research-pavilion-2014-15-water-spider-07-16-2015/" },
        { label: "Interactive panorama", url: "https://www.zitronenwolf.com/rundgaenge/projekte/150626_ICD-Pavillon2015/index.php?html5=prefer" }
      ],
      videos: ["132910518", "107991993"],
      images: ["ICD-ITKE_RP14-15_Image01.jpg", "ICD-ITKE_RP14-15_Image02.jpg", "ICD-ITKE_RP14-15_Image10.jpg", "ICD-ITKE_RP14-15_Image13.jpg", "ICD-ITKE_RP14-15_Image25.jpg", "ICD-ITKE_RP14-15_Process04.jpg", "ICD-ITKE_RP14-15_Process05.jpg", "ICD-ITKE_RP14-15_Process06.jpg", "ICD-ITKE_RP14-15_Process07.jpg", "ICD-ITKE_RP14-15_Process08.jpg", "ICD-ITKE_RP14-15_Process09.jpg", "ICD-ITKE_RP14-15_Process10.jpg", "ICD-ITKE_RP14-15_Process11.jpg", "ICD-ITKE_RP14-15_Process12.jpg", "ICD-ITKE_RP14-15_Process13.jpg", "ICD-ITKE_RP14-15_Process15.jpg", "ICD-ITKE_RP14-15_Process22.jpg"]
    },
    {
      id: "icd-itke-2013-14",
      title: "ICD/ITKE Research Pavilion 2013-14",
      subtitle: "Coreless robotic filament winding, inspired by the beetle elytron",
      year: "2014",
      location: "University of Stuttgart",
      role: "System development, fabrication & construction",
      categories: ["Computational Design", "Robotic Fabrication", "Academia"],
      cover: "assets/img/ICD-ITKE_RP13-14_Process18.jpg",
      summary: "36 unique double-layered fibre composite modules wound by two collaborating robots without moulds.",
      body: [
        "The Institute for Computational Design (ICD) and the Institute of Building Structures and Structural Design (ITKE) of the University of Stuttgart constructed another bionic research pavilion, planned and built within one and a half years by a multidisciplinary team of biologists, palaeontologists, architects and engineers.",
        "The project focuses on a bottom-up design strategy for the biomimetic investigation of natural fibre composite shells and the development of novel robotic fabrication methods for fibre-reinforced polymer structures: a winding technique for modular, double-layered fibre composite structures that reduces formwork to a minimum while maintaining geometric freedom.",
        "Biomimetic investigation. With biologists from the University of Tübingen, the elytron — the protective shell of a beetle's wings and abdomen — proved to be a suitable model for highly material-efficient construction. Its performance relies on a double-layered morphology connected by column-like, doubly curved trabeculae, whose continuous fibres merge the upper and lower shells. Micro-CT scans (ANKA / KIT) and SEM scans enabled comparative studies across beetle species, translated into design rules for structural morphologies.",
        "Material and structural logic. Glass and carbon fibre reinforced polymers were chosen for their strength-to-weight ratio and the potential to differentiate material properties through fibre placement. A robotic coreless winding method was developed in which two collaborating 6-axis robots wind fibres between two custom steel effector frames. The geometry emerges through fibre–fibre interaction: subsequently wound fibres tension and deform each other, generating doubly curved surfaces from straight connections. The winding sequence — the winding syntax — becomes an integral part of the computational design tool.",
        "The reconfigurable effectors served all 36 elements, with no individual moulds and no off-cuts. Each element comprises six wound layers: a first glass fibre layer defines the geometry and serves as formwork for subsequent carbon layers, individually varied according to forces derived from FE analysis of the global structure.",
        "Biomimetic prototype. The largest element has a 2.6 m diameter and weighs only 24.1 kg. The pavilion covers 50 m², with a volume of 122 m³ and a total weight of 593 kg, demonstrating how the computational synthesis of biological principles with material, form and robotic fabrication can generate new fibre composite construction methods and tectonic possibilities."
      ],
      credits: [
        ["Research institutes", "ICD — Prof. Achim Menges; ITKE — Prof. Jan Knippers"],
        ["Research development & project management", "Moritz Dörstelmann, Vassilios Kirtzakis, Stefana Parascho, Marshall Prado, Tobias Schwinn"],
        ["System development, fabrication & construction", "WiSe 2012-13 / SoSe 2013: Leyla Yunis, Desislava Angelova, Hans-Christian Bäcker, Maximilian Fichter, Eugen Grass, Michael Herrick, Nam Hoang, Alejandro Jaramillo, Norbert Jundt, Taichi Kuma, Ondrej Kyjánek, Sophia Leistner, Luca Menghini, Claire Milnes, Martin Nautrup, Gergana Rusenova, Petar Trassiev, Sascha Vallon, Shiyu Wie; WiSe 2013-14: Hassan Abbasi, Yassmin Al-Khasawneh, Desislava Angelova, Yuliya Baranovskaya, Marta Besalu, Giulio Brugnaro, Elena Chiridnik, Eva Espuny, Matthias Helmreich, Julian Höll, Shim Karmin, Georgi Kazlachev, Sebastian Kröner, Vangel Kukov, David Leon, Stephen Maher, Amanda Moore, Paul Poinet, Roland Sandoval, Emily Scoones, Djordje Stanojevic, Andrei Stoiculescu, Kenryo Takahashi, Maria Yablonina"],
        ["With the support of", "Michael Preisack"],
        ["Funding", "Competence Network Biomimetics, KUKA Roboter GmbH, SGL Group, Sika, AFBW"]
      ],
      links: [
        { label: "Dezeen", url: "https://www.dezeen.com/2014/06/26/icd-itke-pavilion-beetle-shells-university-of-stuttgart/" },
        { label: "ArchDaily", url: "https://www.archdaily.com/522408/icd-itke-research-pavilion-2014-icd-itke-university-of-stuttgart/" },
        { label: "Designboom", url: "https://www.designboom.com/architecture/icd-itke-research-pavilion-2013-14-interview-08-18-2014/" }
      ],
      videos: ["98783849"],
      images: ["ICD-ITKE_RP13-14_Image05.jpg", "ICD-ITKE_RP13-14_Image07.jpg", "ICD-ITKE_RP13-14_Image20.jpg", "ICD-ITKE_RP13-14_Image21.jpg", "ICD-ITKE_RP13-14_Image28.jpg", "ICD-ITKE_RP13-14_Image30.jpg", "ICD-ITKE_RP13-14_Process09.jpg", "ICD-ITKE_RP13-14_Process10.jpg", "ICD-ITKE_RP13-14_Process11.jpg", "ICD-ITKE_RP13-14_Process12.jpg", "ICD-ITKE_RP13-14_Process13.jpg", "ICD-ITKE_RP13-14_Process14.jpg", "ICD-ITKE_RP13-14_Process18.jpg", "ICD-ITKE_RP13-14_Process21.jpg", "ICD-ITKE_RP13-14_Process23.jpg", "ICD-ITKE_RP13-14_Process25.jpg"]
    },
    {
      id: "light-sculptures",
      title: "Light Sculptures",
      subtitle: "Long-exposure robotic light painting",
      year: "2013",
      location: "Stuttgart",
      role: "Design, programming & photography",
      categories: ["Computational Design", "Robotic Fabrication", "Academia"],
      cover: "assets/img/LightSculptures_1280.jpg",
      summary: "Industrial robot paths captured as light through long-exposure photography.",
      body: [
        "A series of light sculptures drawn by an industrial robot and captured through long-exposure photography, exploring three different ways of generating robot paths."
      ],
      specs: [
        { name: "Heartbeat", rows: [["Robot path", "Taught points on KRC2"], ["Camera", "Nikon D7100"], ["Focal length", "17 mm"], ["Aperture", "f/10"], ["Exposure", "20 s"]] },
        { name: "Thom Yorke", rows: [["Robot path", "HyperMill, surface finishing"], ["Camera", "Canon EOS 450D"], ["Focal length", "21 mm"], ["Aperture", "f/22"], ["Exposure", "9 min 52 s"]] },
        { name: "NURBS construction", rows: [["Robot path", "Grasshopper definition with KRL output"], ["Focal length", "18 mm"], ["Exposure", "3 min 13 s"]] }
      ],
      credits: [["Design, programming & photography", "Paul Poinet, Julian Hoell, Georgi Kazlachev, Djordje Stanojevic"]],
      links: [],
      videos: [],
      images: ["LightSculptures_1280.jpg", "LightSculptures2_1280.jpg", "LightSculptures3_1280.jpg"]
    },
    {
      id: "flexible-concrete",
      title: "Flexible Concrete",
      subtitle: "Responsive, reusable concrete formwork",
      year: "2012",
      location: "The University of Hong Kong",
      role: "Conceptual development",
      categories: ["Computational Design", "Academia"],
      cover: "assets/img/FlexibleConcrete0.jpg",
      summary: "Challenging the generic column-slab skeleton through an adaptive casting system.",
      body: [
        "Through design iterations, we created a structural system that could revise and transform the ground proposition (the contact) as well as the formwork strategy. Our scale of reference was a nine-storey generic column-slab structure with a central circulation core. The design process challenged this banal yet efficient skeleton by prioritising new spatial possibilities and inventive structural performance — both as a direct result of the casting procedure of the formwork system.",
        "The final prototype is made of a continuous material (concrete), making its craftsmanship an essential focus of the project. An integrated scheme for internal and external circulation completed a second act of occupation."
      ],
      credits: [["Assistant professor", "Olivier Ottevaere"], ["Conceptual development", "Paul Poinet, Anthony Chu"]],
      links: [],
      videos: [],
      images: ["FlexibleConcrete0.jpg", "FlexibleConcrete0b.jpg", "FlexibleConcrete1.jpg", "FlexibleConcrete2.jpg", "FlexibleConcrete3.png", "FlexibleConcrete4.jpg", "FlexibleConcrete5.jpg", "FlexibleConcrete6.jpg"]
    },
    {
      id: "u-cube",
      title: "U-Cube",
      subtitle: "Robotically cut discrete formwork for UHPFRC — EZCT Architecture & Design Research",
      year: "2012",
      location: "Exhibited at the Centre Pompidou, Paris",
      role: "Project team",
      categories: ["Computational Design", "Robotic Fabrication", "Academia"],
      cover: "assets/img/U-Cube00.jpg",
      award: "Centre Pompidou collection",
      summary: "Ductal® concrete poured into robot-cut Styrofoam cubes following discrete connectivity rules.",
      body: [
        "The U-Cube system is an experimental device made of hollowed Styrofoam cubes. The cavities respond to specific connectivity rules, and a self-compacting Ductal® concrete has been poured into them. The result is a support structure with no outside contact, offering advantages including excellent thermal and acoustic insulation. The cavities were cut by a 6-axis ABB industrial robot driven by HAL® (a Grasshopper plug-in developed by Thibault Schwartz), reproducing a three-dimensional mesh as continuous as possible while the cubes obey a discrete geometry. The project integrates the formal choice of the designer into the computer, understood here as a “discrete state machine”.",
        "The issues addressed are fourfold: establishing a correspondence between construction methods and the geometry present in the computer; anticipating the massive deployment of robotics (whose logic is discrete) by adapting geometric models upstream to the robots rather than the reverse; exploring an economical use of Ultra-High Performance Fibre-Reinforced Concrete (UHPFRC); and developing a new architectural notation based not on plans or metric dimensions but on numbers describing the relative positions and directions of cubes in discrete space."
      ],
      credits: [
        ["Conceptual development", "Philippe Morel / EZCT Architecture & Design Research"],
        ["Project team", "Tristan Gobin, Elodie Le Roy, Thibault Schwartz, Paul Poinet, Charles Bouyssou, Vida Chang"],
        ["Robotic manufacturing", "Tristan Gobin, Charles Bouyssou, Thibault Schwartz (HAL plug-in), ABB Robotics"],
        ["Concrete", "Lafarge"],
        ["Engineering", "RFR"],
        ["Materials", "Ductal®, Styrofoam, wood, stainless steel"],
        ["Collection", "Centre Pompidou, MNAM / CCI, inv. AM-1-PI18 EC2012"]
      ],
      links: [],
      videos: [],
      images: ["U-Cube00.jpg", "U-Cube0.jpg", "U-Cube1.jpg", "U-Cube2.jpg", "U-Cube3.jpg", "U-Cube4.jpg", "U-Cube5.jpg", "U-Cube6.jpg", "U-Cube7.jpg", "U-Cube8.jpg", "U-Cube9.jpg", "U-Cube10.jpg"]
    }
  ],

  /* --------------------------------------------------------------------- */
  publications: [
    { year: 2020, type: "Conference", title: "Supporting Collaborative Design and Project Management for AEC using Speckle's Interactive Data Flow Diagram", authors: "Poinet P., Stefanescu D., Tsakiridis G., de Boissieu A., Papadonikolaki E.", venue: "Design Computation Input/Output 2020 (DC I/O), London.", url: "https://doi.org/10.47330/dcio.2020.vyba4375", thumb: "assets/pub/dcio2020.jpg" },
    { year: 2020, type: "Conference", title: "Web-Based Distributed Design to Fabrication Workflows", authors: "Poinet P., Stefanescu D., Papadonikolaki E.", venue: "CAADRIA 2020: Anthropocene — Proceedings of the 25th International Conference of the Association for Computer-Aided Architectural Design Research in Asia, pp. 95–104. Hong Kong.", url: "https://www.researchgate.net/publication/343365431_Web-Based_Distributed_Design_to_Fabrication_Workflows", thumb: "assets/pub/caadria2020.jpg" },
    { year: 2020, type: "Conference", title: "Collaborative Workflows and Version Control through Open-Source and Distributed Common Data Environment", authors: "Poinet P., Stefanescu D., Papadonikolaki E.", venue: "ICCCBE 2020: 18th International Conference on Computing in Civil and Building Engineering, pp. 228–247. Springer, Cham.", url: "https://link.springer.com/chapter/10.1007/978-3-030-51295-8_18", thumb: "assets/pub/icccbe2020.jpg" },
    { year: 2020, type: "Conference", title: "SpeckleViz: A Web-based Interactive Activity Network Diagram for AEC", authors: "Poinet P., Stefanescu D., Papadonikolaki E.", venue: "SimAUD 2020: Proceedings of the 11th Symposium on Simulation for Architecture and Urban Design, pp. 419–428. SCS, Vienna.", url: "https://www.researchgate.net/publication/341592629_SpeckleViz_A_Web-based_Interactive_Activity_Network_Diagram_for_AEC", thumb: "assets/pub/simaud2020.jpg" },
    { year: 2020, type: "Thesis", title: "Enhancing Collaborative Practices in Architecture, Engineering and Construction through Multi-Scalar Modelling Methodologies", authors: "Poinet P.", venue: "PhD Thesis, The Royal Danish Academy of Fine Arts Schools of Architecture, Design and Conservation (KADK).", url: "https://www.researchgate.net/publication/340362551_Enhancing_Collaborative_Practices_in_Architecture_Engineering_and_Construction_through_Multi-Scalar_Modelling_Methodologies", thumb: "assets/pub/phdthesis.jpg" },
    { year: 2020, type: "Chapter", title: "Computational Extensibility and Mass Participation in Design", authors: "Poinet P., Fisher A.", venue: "Design Transactions: Rethinking Information Modelling for a New Material Age, pp. 56–61. UCL Press, London.", url: "https://www.researchgate.net/publication/338698530_Computational_Extensibility_and_Mass_Participation_in_Design", thumb: "assets/pub/design_transactions2020.jpg" },
    { year: 2020, type: "Chapter", title: "How to Effectively Collaborate at Scale in a Connected Digital Environment", authors: "Poinet P.", venue: "Design Transactions: Rethinking Information Modelling for a New Material Age, pp. 132–133. UCL Press, London.", url: "https://doi.org/10.2307/j.ctv13xprf6.25", thumb: "assets/pub/design_transactions2020.jpg" },
    { id: "pub-iass2019", year: 2019, type: "Conference", title: "Collaborative Workflow for the Design, Structural Analysis and Fabrication of a Strip-Based Segmented Complex Structure", authors: "Poinet P., Takahashi K., Stanojevic D., Mendez Y., Duran D.", venue: "Proceedings of the IASS Annual Symposium 2019 – Structural Membranes 2019: Form and Force, Barcelona.", url: "https://scholar.google.com/scholar?q=%22Collaborative+workflow+for+the+design%2C+structural+analysis+and+fabrication+of+a+strip-based+segmented+complex+structure%22", thumb: "assets/pub/iass2019.jpg", project: "piped-assemblies" },
    { id: "pub-ecppm2018", year: 2018, type: "Conference", title: "Schema-Based Workflows and Inter-Scalar Search Interfaces for Building Design", authors: "Poinet P., Tamke M., Ramsgaard Thomsen M., Scheurer F., Fisher A.", venue: "eWork and eBusiness in Architecture, Engineering and Construction: Proceedings of ECPPM 2018, pp. 329–335. CRC Press, London.", url: "https://www.researchgate.net/publication/327445945_Schema-Based_Workflows_and_Inter-Scalar_Search_Interfaces_for_Building_Design", thumb: "assets/pub/ecppm2018.jpg" },
    { id: "pub-dms2017", year: 2017, type: "Chapter", title: "A Multi-scalar Approach for the Modelling and Fabrication of Free-Form Glue-Laminated Timber Structures", authors: "Svilans T., Poinet P., Tamke M., Ramsgaard Thomsen M.", venue: "Humanizing Digital Reality: Proceedings of the Design Modelling Symposium 2017, pp. 247–257. Springer, Singapore.", url: "https://www.researchgate.net/publication/319859058_A_Multi-scalar_Approach_for_the_Modelling_and_Fabrication_of_Free-Form_Glue-Laminated_Timber_Structures", thumb: "assets/pub/dms2017.jpg" },
    { id: "pub-iass2016", year: 2016, type: "Conference", title: "Multi-Scalar Modelling for Free-form Timber Structures", authors: "Poinet P., Nicholas P., Tamke M., Ramsgaard Thomsen M.", venue: "Spatial Structures in the 21st Century: Proceedings of the IASS Annual Symposium 2016. The University of Tokyo.", url: "https://www.researchgate.net/publication/308695849_Multi-Scalar_Modelling_for_Free-form_Timber_Structures", thumb: "assets/pub/iass2016.jpg" },
    { id: "pub-ecaade2016", year: 2016, type: "Conference", title: "Adaptive Pneumatic Shell Structures: Feedback-driven robotic stiffening of inflated extensible membranes and further rigidification for architectural applications", authors: "Poinet P., Baharlou E., Schwinn T., Menges A.", venue: "Complexity & Simplicity: Proceedings of the 34th eCAADe Conference, pp. 549–558. Oulu School of Architecture.", url: "https://www.researchgate.net/publication/305993819_Adaptive_Pneumatic_Shell_Structures_Feedback-driven_robotic_stiffening_of_inflated_extensible_membranes_and_further_rigidification_for_architectural_applications", thumb: "assets/pub/ecaade2016.jpg" }
  ],

  /* --------------------------------------------------------------------- *
   * Videos — all 20 uploads from vimeo.com/user15749707, plus two pavilion
   * films by ICD/ITKE that appeared on the old site. Grouped by theme.
   * --------------------------------------------------------------------- */
  videoGroups: [
    { name: "Industry — Trimble Consulting × SNCF Réseau", ids: ["844178156"] },
    { name: "PhD research — multi-scalar modelling", ids: ["287429249", "345195863", "402625880", "402625834", "402625923", "402625763", "402625798", "348400311"] },
    { name: "Speckle & web-based collaboration", ids: ["373740855", "357415299", "350531934", "350506876"] },
    { name: "Stuttgart — ICD/ITKE & ITECH", ids: ["389371102", "146791195", "107991993", "132910518", "98783849", "104338731", "104338729"] },
    { name: "Workshops & studio", ids: ["136809651", "102783589"] }
  ],

  videos: {
    "844178156": { title: "BIM & augmented reality on the EOLE construction site", year: 2023, duration: 266, thumb: "https://i.vimeocdn.com/video/1696224809-4eeb0d76917d7c454fbd03181c45b222382fc92af58af6aecc12dbe16c027e16-d_640" },
    "402625923": { title: "B7–B8 · Building & Transferring Hierarchies: SchemaBuilder", year: 2020, duration: 64, thumb: "https://i.vimeocdn.com/video/871800212-62049648ae561cd41fcd4528ee666dde44badd063cfc8aa5c66242c85933d62b-d_640" },
    "402625880": { title: "A3–A4 · Topological Mapping: Projection-based Modelling | Spatial Branching", year: 2020, duration: 51, thumb: "https://i.vimeocdn.com/video/871800249-c9e168723cc498990b72e344294ca41fdfc3d957efd1662169c85ce8e74f4eda-d_640" },
    "402625834": { title: "B5 · Exploring Hierarchies: LayerStalker", year: 2020, duration: 32, thumb: "https://i.vimeocdn.com/video/871800134-bac3964ae9aa44edbbb9d7bb10745959fa2faf2201841cfd3ba5dd31f58fb1ff-d_640" },
    "402625798": { title: "C2 · SimAUD Workshop at TU Delft (2018): Open Collaborative Design, Simulation & Analysis Flows", year: 2020, duration: 17, thumb: "https://i.vimeocdn.com/video/871925023-063e0d51ede38afc78dd6d950924c515cf57ff04c36b5cfb5723773a43fb39d3-d_640" },
    "402625763": { title: "C1 · Sharing Custom Schemas via Speckle & BHoM: BuroHappold × Design-to-Production", year: 2020, duration: 20, thumb: "https://i.vimeocdn.com/video/871800074-d7bce4c7211bc3d445dd4e728f48cc02bb0fdfd55869191fb678a742c0fd7a21-d_640" },
    "389371102": { title: "ITECH Master Thesis Presentation (2015)", year: 2015, duration: 1700, thumb: "https://i.vimeocdn.com/video/871802281-12f3d445b0493a6602dcd215798225c1855b895cf14af699201dd4b632a9c3fa-d_640" },
    "373740855": { title: "SpeckleViz — Data flow example (IASS 2019)", year: 2019, duration: 77, thumb: "https://i.vimeocdn.com/video/831962812-71046c82768f52f5d1156966b23ad62d6f216c34fbfebd9808df7653f9ab2e6e-d_640" },
    "357415299": { title: "Speckle's Metagraph v2", year: 2019, duration: 41, thumb: "https://i.vimeocdn.com/video/810760239-579ad2b411f456c529c5f094a541c802d6f84fa89c9d26bdf38bb8bbcd064dac-d_640" },
    "350531934": { title: "Speckle's Metagraph — CEDIM Piped Assemblies Workshop (2018)", year: 2019, duration: 71, thumb: "https://i.vimeocdn.com/video/801835498-cb73f135d0427f45e18db5dcf4c76c8979941058304a3ca690c66209c28228f1-d_640" },
    "350506876": { title: "Speckle's Metagraph", year: 2019, duration: 74, thumb: "https://i.vimeocdn.com/video/801800676-841ff54a569c904149e93d2e67fab8067043ba8377a6da792e034f39dd18ae2e-d_640" },
    "348400311": { title: "LogJam!", year: 2019, duration: 73, thumb: "https://i.vimeocdn.com/video/799015492-bbb050624e6054525da757ef57e549a2ad641413e710a4dbb2d89bce16b37ecf-d_640" },
    "345195863": { title: "A1 · BlankMachine: Propagating the Blanks", year: 2019, duration: 43, thumb: "https://i.vimeocdn.com/video/794900319-1e4d8739c3b86c7f3b8e14e989ab059f06fa65610312a3f624bc27c53469ef4a-d_640" },
    "287429249": { title: "Multi-Scalar Modelling, Schema-Based Workflows and Inter-Scalar Search Interfaces — Showreel", year: 2018, duration: 294, thumb: "https://i.vimeocdn.com/video/722576688-ee294f553e5ba8e4fed7e0ca904fdcdef5d0971557484a0e672932ca67adc0ff-d_640" },
    "146791195": { title: "Adaptive Pneumatic Shell Structures", year: 2015, duration: 192, thumb: "https://i.vimeocdn.com/video/545293793-516747017159102d15c25a60350815b1fb5b3f093412e87de6bdd5bb5f80cfbe-d_640" },
    "136809651": { title: "afterEASALINKS — last day at EASA Malta 2015", year: 2015, duration: 136, thumb: "https://i.vimeocdn.com/video/531463882-673aa5c5fbe79c0ae66724f6b61f474181418e9b6e8c71831253da678d0e0544-d_640" },
    "107991993": { title: "ICD/ITKE Research Pavilion 2014-15 — Design Iterations", year: 2014, duration: 25, thumb: "https://i.vimeocdn.com/video/724920081-3d465e1362e87c45ba3eebfcfbb055a93130d2834250bba495bd3cdad76d6e1f-d_640" },
    "104338731": { title: "ICD/ITKE Kangaroo Workshop — Bistable structures / Attraction", year: 2014, duration: 10, thumb: "https://i.vimeocdn.com/video/486858035-e1b27db844ed4bccdbf67f1cedc23ca03baf862ac25172d1aca47aae8703b57a-d_640" },
    "104338729": { title: "ICD/ITKE Kangaroo Workshop — Bistable structures / Repulsion", year: 2014, duration: 10, thumb: "https://i.vimeocdn.com/video/486859238-693d347dc0a911a6f634bf1f4f057f82c9c6e3e1026a367c10c959a40f000914-d_640" },
    "102783589": { title: "Studio Regressive Resolutions — ENSA Paris-Malaquais (2013)", year: 2013, duration: 143, thumb: "https://i.vimeocdn.com/video/484855846-9319e440d8087e81b2c39788feb8026bcb62085f72cdd5654481a0bbe6078223-d_640" },
    "132910518": { title: "ICD/ITKE Research Pavilion 2014-15 (film by ICD/ITKE)", year: 2015, duration: 198, thumb: "https://i.vimeocdn.com/video/525930559-ea6de2a78f5d29e6aaf8056551fcba8aee676283e0f0e524a7a281bda7d6c0e0-d_640" },
    "98783849": { title: "ICD/ITKE Research Pavilion 2013-14 (film by ICD/ITKE)", year: 2014, duration: 193, thumb: "https://i.vimeocdn.com/video/479622219-6b16a09a20981d58d2a6b5c9823dc8b35718a27cd6855759f2520d20f480fdd8-d_640" }
  }
};
