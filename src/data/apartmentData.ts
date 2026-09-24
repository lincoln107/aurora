export type DevelopmentId = "aurora" | "jardins" | "bentivi";

export const FORMS_URLS = {
  aurora: "https://forms.gle/KZbo9q1tfRPDRHoH8",
  tatuape: "https://forms.gle/D3ar1Kv3hyGhzs7q6", // Bentivi
  cidadeJardim: "https://forms.gle/eNKvdMYwsPYEpvgE9", // Jardins
};

export const INTEREST_FORM_URL = "https://forms.gle/KZbo9q1tfRPDRHoH8";

export interface GalleryPhoto {
  id: string;
  title: string;
  category: "all" | "fachada" | "interiores" | "suites" | "lazer";
  categoryLabel: string;
  url: string;
  description: string;
  tag: string;
}

export interface LocationPoint {
  category: "gastronomia" | "parques" | "educacao" | "compras" | "mobilidade";
  categoryLabel: string;
  name: string;
  type: string;
  distanceTime: string;
  transportType: "walking" | "driving";
  description: string;
}

export interface TypologyPlan {
  id: string;
  name: string;
  subtitle: string;
  area: string;
  suites: string;
  parking: string;
  storage: string;
  estimatedPrice: string;
  description: string;
  image: string;
  features: string[];
}

export interface Development {
  id: DevelopmentId;
  name: string;
  fullName: string;
  neighborhood: string;
  shortNeighborhood: string;
  cityZone: string;
  badge: string;
  address: string;
  formUrl: string;
  headlineTitle: string;
  headlineHighlight: string;
  headlineLocation: string;
  subheadline: string;
  heroImage: string;
  priceStartingFrom: string;
  priceValueNum: number;
  areaRange: string;
  suitesRange: string;
  parkingRange: string;
  rooftopHighlight: string;
  standAddress: string;
  walkScore: number;
  walkScoreLabel: string;
  walkScoreDesc: string;
  zoneDescription: string;
  photos: GalleryPhoto[];
  locationPoints: LocationPoint[];
  typologies: TypologyPlan[];
  highlights: {
    icon: string;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const DEVELOPMENTS: Record<DevelopmentId, Development> = {
  aurora: {
    id: "aurora",
    name: "Aurora Residences",
    fullName: "Aurora Residences Mooca",
    neighborhood: "Mooca, São Paulo - SP",
    shortNeighborhood: "Mooca",
    cityZone: "Zona Leste Tradicional & Nobre",
    badge: "Tradição & Contemporaneidade na Mooca",
    address: "Rua Juventus, 850 - Alto da Mooca, São Paulo - SP",
    formUrl: "https://forms.gle/KZbo9q1tfRPDRHoH8",
    headlineTitle: "O Encontro Entre a Arquitetura Moderna e a Alma Nobre da",
    headlineHighlight: "Mooca",
    headlineLocation: "Alto da Mooca · Rua Juventus",
    subheadline:
      "Apartamentos de alto padrão com 3 e 4 suítes (128m² a 284m²), living integrado com varanda gourmet, lazer privativo no rooftop e a tradição de viver no bairro mais acolhedor de São Paulo.",
    heroImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=90",
    priceStartingFrom: "A partir de R$ 1.480.000",
    priceValueNum: 1480000,
    areaRange: "128 a 284 m²",
    suitesRange: "3 e 4 Suítes",
    parkingRange: "2 a 4 Vagas + Depósito",
    rooftopHighlight: "Rooftop com Borda Infinita",
    standAddress: "Rua Juventus, 850 - Alto da Mooca, São Paulo - SP (Estacionamento com manobrista)",
    walkScore: 98,
    walkScoreLabel: "Vida a Pé na Mooca",
    walkScoreDesc: "Cantinas italianas históricas, padarias artesanais, Clube Juventus e Parque Sabesp a passos de casa.",
    zoneDescription:
      "Situado no coração do Alto da Mooca, em uma rua calma e arborizada, unindo a autenticidade e segurança de um dos bairros mais amados de São Paulo com acesso rápido à Av. Paes de Barros e Radial Leste.",
    photos: [
      {
        id: "aurora-1",
        title: "Fachada Biofílica com Brises Dinâmicos na Mooca",
        category: "fachada",
        categoryLabel: "Fachada & Arquitetura",
        url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=85",
        description: "Design contemporâneo assinado por arquitetos premiados, com floreiras verticais e brises de alumínio amadeirado.",
        tag: "Arquitetura Autoral"
      },
      {
        id: "aurora-2",
        title: "Living Integrado com Pé-Direito Duplo",
        category: "interiores",
        categoryLabel: "Living & Interiores",
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
        description: "Grandes panos de vidro do piso ao teto proporcionam iluminação natural e vista desafogada para o skyline da Mooca.",
        tag: "Conceito Aberto"
      },
      {
        id: "aurora-3",
        title: "Varanda Gourmet com Churrasqueira a Carvão",
        category: "interiores",
        categoryLabel: "Living & Interiores",
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
        description: "Bancada em pedra nobre e sistema de exaustão individual para momentos inesquecíveis em família.",
        tag: "Espaço Gourmet"
      },
      {
        id: "aurora-4",
        title: "Rooftop Pool a 120m de Altura",
        category: "lazer",
        categoryLabel: "Lazer & Rooftop",
        url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=85",
        description: "Piscina com borda infinita aquecida e vista panorâmica de 360° para a capital paulista.",
        tag: "Exclusividade Rooftop"
      },
      {
        id: "aurora-5",
        title: "Suíte Master com Amplo Closet Walk-in",
        category: "suites",
        categoryLabel: "Suítes & Detalhes",
        url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1600&q=85",
        description: "Isolamento acústico de alto desempenho nas paredes e lajes para noites de descanso tranquilo.",
        tag: "Conforto Acústico"
      },
      {
        id: "aurora-6",
        title: "Banheiro Master Spa com Imersão",
        category: "suites",
        categoryLabel: "Suítes & Detalhes",
        url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=85",
        description: "Banheira freestanding, cuba dupla em quartzo esculpido e acabamentos de metais dourados escovados.",
        tag: "Padrão Spa"
      }
    ],
    locationPoints: [
      {
        category: "gastronomia",
        categoryLabel: "Gastronomia Tradicional",
        name: "Polo Gastronômico da Mooca (Di Cunto & Hospedaria)",
        type: "Cantinas e Restaurantes Consagrados",
        distanceTime: "3 min a pé",
        transportType: "walking",
        description: "A melhor culinária italiana e internacional de São Paulo a poucos passos da sua porta."
      },
      {
        category: "parques",
        categoryLabel: "Lazer & Parques",
        name: "Clube Atlético Juventus & Parque Sabesp Mooca",
        type: "Esporte, Verde e Lazer Familiar",
        distanceTime: "4 min a pé",
        transportType: "walking",
        description: "Área de preservação, pistas de corrida, piscinas e atividades esportivas completas."
      },
      {
        category: "compras",
        categoryLabel: "Compras & Conveniência",
        name: "Mooca Plaza Shopping & St. Marche",
        type: "Centro de Compras e Mercado Gourmet",
        distanceTime: "5 min de carro",
        transportType: "driving",
        description: "Mais de 230 lojas, cinema VIP, empórios selecionados e serviços completos de conveniência."
      },
      {
        category: "educacao",
        categoryLabel: "Educação & Saúde",
        name: "Colégios Tradicionais & Hospital São Cristóvão",
        type: "Educação de Excelência e Medicina",
        distanceTime: "4 min de carro",
        transportType: "driving",
        description: "Colégios bilíngues conceituados e complexos médicos de referência no bairro."
      },
      {
        category: "mobilidade",
        categoryLabel: "Mobilidade Ágil",
        name: "Av. Paes de Barros, Radial Leste & Metrô",
        type: "Conexão Expressa com Toda SP",
        distanceTime: "2 min de carro / 6 min a pé",
        transportType: "walking",
        description: "Conexão veloz aos polos financeiros da Av. Paulista e Centro, com a paz de uma rua residencial."
      }
    ],
    typologies: [
      {
        id: "aurora-128",
        name: "Aurora Horizon Mooca",
        subtitle: "Planta Inteligente & Conforto Absoluto",
        area: "128 m²",
        suites: "3 Suítes",
        parking: "2 Vagas Cobertas",
        storage: "Depósito Privativo",
        estimatedPrice: "A partir de R$ 1.480.000",
        description: "Planta perfeitamente setorizada com varanda gourmet contígua à cozinha e área íntima reservada.",
        image: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1400&q=85",
        features: [
          "Varanda gourmet integrada ao living",
          "Elevador com controle biométrico privativo",
          "Infraestrutura completa para ar-condicionado",
          "Persianas automatizadas nas suítes",
          "Ponto elétrico para recarga veicular"
        ]
      },
      {
        id: "aurora-186",
        name: "Aurora Grand Mooca",
        subtitle: "Espaço Generoso & Exclusividade Total",
        area: "186 m²",
        suites: "4 Suítes (ou 3 Suítes + Home Office)",
        parking: "3 Vagas Determinadas",
        storage: "Depósito Duplo",
        estimatedPrice: "A partir de R$ 2.190.000",
        description: "Living com 3 ambientes, varanda panorâmica com churrasqueira e suíte master com hidro de imersão.",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
        features: [
          "Suíte master com 28m² e closet walk-in",
          "Cozinha ampla com ilha gourmet",
          "Churrasqueira a carvão e ponto de chopeira",
          "Isolamento acústico especial nas lajes",
          "3 vagas de garagem fixas e demarcadas"
        ]
      },
      {
        id: "aurora-284",
        name: "Aurora Penthouse Duplex Mooca",
        subtitle: "A Máxima Expressão do Luxo na Mooca",
        area: "284 m²",
        suites: "4 Suítes Master",
        parking: "4 Vagas Privativas",
        storage: "Depósito VIP",
        estimatedPrice: "Consulte Condições Especiais",
        description: "Cobertura duplex incomparável com piscina privativa no piso superior e terraço descoberto com solarium.",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=85",
        features: [
          "Piscina aquecida privativa no rooftop",
          "Deck de madeira nobre e lareira ao ar livre",
          "Elevador atendendo os dois pavimentos",
          "Espaço para adega climatizada de até 500 rótulos",
          "Vista 360° panorâmica da cidade"
        ]
      }
    ],
    highlights: [
      {
        icon: "Building2",
        title: "Torre Única no Alto da Mooca",
        description: "Terreno amplo de 4.200m² com apenas 2 unidades por andar para máxima privacidade."
      },
      {
        icon: "Sparkles",
        title: "Rooftop com Vista Panorâmica",
        description: "Piscina aquecida com borda infinita, solarium e bar lounge nas alturas."
      },
      {
        icon: "ShieldCheck",
        title: "Segurança de Nível Internacional",
        description: "Portaria blindada 24h, reconhecimento facial e eclusa dupla para pedestres e veículos."
      },
      {
        icon: "Leaf",
        title: "Sustentabilidade e Energia Solar",
        description: "Placas fotovoltaicas para áreas comuns e tomadas para carros elétricos em todas as vagas."
      }
    ],
    faqs: [
      {
        question: "Onde fica localizado exatamente o Aurora Residences na Mooca?",
        answer: "Fica na Rua Juventus, 850, em um dos pontos mais desejados do Alto da Mooca, a poucos passos do Clube Juventus e das tradicionais cantinas da região."
      },
      {
        question: "Como posso garantir as condições especiais do pré-lançamento na Mooca?",
        answer: "Basta clicar em 'Tenho Interesse' e enviar seus dados no formulário oficial da Mooca. Nossa equipe de especialistas entrará em contato em menos de 15 minutos."
      },
      {
        question: "Qual o link direto para manifestar interesse no Aurora Mooca?",
        answer: "O formulário oficial do Aurora Mooca está disponível no link: https://forms.gle/KZbo9q1tfRPDRHoH8."
      }
    ]
  },

  jardins: {
    id: "jardins",
    name: "Empreendimento Jardins",
    fullName: "Jardins Residencial Cidade Jardim",
    neighborhood: "Cidade Jardim, São Paulo - SP",
    shortNeighborhood: "Cidade Jardim",
    cityZone: "Zona Sul / Eixo Marginal Pinheiros & Faria Lima",
    badge: "Ultraluxo & Natureza na Cidade Jardim",
    address: "Av. Cidade Jardim, 1150 - Cidade Jardim, São Paulo - SP",
    formUrl: "https://forms.gle/eNKvdMYwsPYEpvgE9",
    headlineTitle: "A Sofisticação Internacional do Ultraluxo na",
    headlineHighlight: "Cidade Jardim",
    headlineLocation: "Cidade Jardim · Próximo ao Shopping & Parque do Povo",
    subheadline:
      "Residências suspensas com 3 e 4 suítes (165m² a 380m²), arquitetura biofílica internacional, vista eterna para o skyline da Faria Lima e ao lado dos clubes mais seletos do país.",
    heroImage:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=90",
    priceStartingFrom: "A partir de R$ 2.450.000",
    priceValueNum: 2450000,
    areaRange: "165 a 380 m²",
    suitesRange: "3 e 4 Suítes Master",
    parkingRange: "3 a 5 Vagas Privativas",
    rooftopHighlight: "Sky Lounge & Piscina Suspensa",
    standAddress: "Av. Cidade Jardim, 1150 - Cidade Jardim, São Paulo - SP (Concierge e Manobrista)",
    walkScore: 92,
    walkScoreLabel: "Privilégio na Cidade Jardim",
    walkScoreDesc: "A poucos minutos do Shopping Cidade Jardim, Parque do Povo, Clube Pinheiros e centros executivos.",
    zoneDescription:
      "Endereço sinônimo de prestígio e alta sofisticação. A Cidade Jardim combina bulevares arborizados, residências de altíssimo padrão, alta gastronomia internacional e conexão instantânea com a Av. Brigadeiro Faria Lima.",
    photos: [
      {
        id: "jardins-1",
        title: "Fachada Escultural com Jardins Suspensos",
        category: "fachada",
        categoryLabel: "Fachada & Arquitetura",
        url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85",
        description: "Linhas orgânicas e vegetação exuberante integrada à estrutura de concreto aparente e vidro refletivo.",
        tag: "Design Internacional"
      },
      {
        id: "jardins-2",
        title: "Living Monumental com Vista para a Faria Lima",
        category: "interiores",
        categoryLabel: "Living & Interiores",
        url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85",
        description: "Pé-direito de 3,20m livres com esquadrias minimalistas sem travessas horizontais.",
        tag: "Vista Panorâmica"
      },
      {
        id: "jardins-3",
        title: "Varanda Lounge e Adega Climatizada",
        category: "interiores",
        categoryLabel: "Living & Interiores",
        url: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85",
        description: "Espaço gourmet de alta gastronomia revestido em mármore travertino navona e lâminas de nogueira.",
        tag: "Acabamento Nobre"
      },
      {
        id: "jardins-4",
        title: "Piscina com Borda Infinita Voltada para o Verde",
        category: "lazer",
        categoryLabel: "Lazer & Rooftop",
        url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=85",
        description: "Raia semiolímpica aquecida com tratamento por ozônio e solarium privativo com espreguiçadeiras italianas.",
        tag: "Resort Privativo"
      },
      {
        id: "jardins-5",
        title: "Suíte Master com Closet Duplo para o Casal",
        category: "suites",
        categoryLabel: "Suítes & Detalhes",
        url: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1600&q=85",
        description: "Iluminação circadiana programável, persianas 100% blackout elétricas e piso em madeira maciça.",
        tag: "Máximo Conforto"
      },
      {
        id: "jardins-6",
        title: "Sala de Bem-Estar, Spa e Massagem",
        category: "lazer",
        categoryLabel: "Lazer & Rooftop",
        url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=85",
        description: "Sauna úmida e seca com vestiários privativos e espaço dedicado para terapias corporais.",
        tag: "Wellness VIP"
      }
    ],
    locationPoints: [
      {
        category: "compras",
        categoryLabel: "Luxo & Grifes",
        name: "Shopping Cidade Jardim & JK Iguatemi",
        type: "Alta Costura & Restaurantes Estrelados",
        distanceTime: "3 min de carro",
        transportType: "driving",
        description: "As maiores marcas internacionais de luxo (Hermès, Gucci, Prada, Chanel) e bistrôs premiados."
      },
      {
        category: "parques",
        categoryLabel: "Natureza & Clubes",
        name: "Parque do Povo & Clube Pinheiros",
        type: "Parque Linear & Esportes de Alto Rendimento",
        distanceTime: "4 min de carro / 8 min a pé",
        transportType: "driving",
        description: "Pistas para corrida, quadras esportivas, verde preservado e o clube social mais seleto da América Latina."
      },
      {
        category: "gastronomia",
        categoryLabel: "Alta Culinária",
        name: "Restaurantes Fasano, Due Cuochi & Adega Santiago",
        type: "Gastronomia Nobre de Padrão Michelin",
        distanceTime: "5 min de carro",
        transportType: "driving",
        description: "A mais sofisticada experiência gastronômica da cidade no seu quintal."
      },
      {
        category: "educacao",
        categoryLabel: "Educação & Saúde",
        name: "Graded School, Avenues & Hospital Albert Einstein",
        type: "Escolas Internacionais & Centro Médico",
        distanceTime: "6 min de carro",
        transportType: "driving",
        description: "Formação bilíngue de padrão global e os médicos mais conceituados do país."
      },
      {
        category: "mobilidade",
        categoryLabel: "Eixo Financeiro",
        name: "Acesso Rápido à Av. Faria Lima & Ponte Estaiada",
        type: "O Coração dos Negócios de SP",
        distanceTime: "3 min de carro",
        transportType: "driving",
        description: "Chegue aos principais escritórios corporativos e centros financeiros sem perder tempo no trânsito."
      }
    ],
    typologies: [
      {
        id: "jardins-165",
        name: "Jardins Horizon",
        subtitle: "Amplitude & Luminosidade Natural",
        area: "165 m²",
        suites: "3 Suítes Master",
        parking: "3 Vagas Determinadas",
        storage: "Depósito Privativo",
        estimatedPrice: "A partir de R$ 2.450.000",
        description: "Living de pé-direito imponente, cozinha planejada com despensa e varanda gourmet voltada para a copa das árvores.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
        features: [
          "Hall privativo com elevador inteligente de alta velocidade",
          "Varanda nivelada com churrasqueira gourmet embutida",
          "Suíte principal com closet e cuba senhor e senhora",
          "Tomada de recarga rápida para veículos elétricos",
          "Tratamento acústico de lajes superiores"
        ]
      },
      {
        id: "jardins-235",
        name: "Jardins Grand Residence",
        subtitle: "A Nobreza de uma Residência Suspensa",
        area: "235 m²",
        suites: "4 Suítes Completas",
        parking: "4 Vagas Demarcadas",
        storage: "Depósito Duplo",
        estimatedPrice: "A partir de R$ 3.650.000",
        description: "Espaço generoso com living de 4 ambientes, cozinha gourmet integrada e suíte master com banheiro spa e banheira de imersão.",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=85",
        features: [
          "Vista permanente para o skyline da Faria Lima",
          "Varanda de 20 metros de extensão envidraçada",
          "Suíte master com 35m² e closet duplo",
          "Isolamento acústico de vidros laminados duplos",
          "Infraestrutura pronta para automação residencial completa"
        ]
      },
      {
        id: "jardins-380",
        name: "Jardins Penthouse Majestic",
        subtitle: "O Ápice do Ultraluxo na Cidade Jardim",
        area: "380 m²",
        suites: "4 Suítes VIP + Home Cinema",
        parking: "5 Vagas Privativas",
        storage: "Depósito VIP Blindado",
        estimatedPrice: "Consulte Condições Exclusivas",
        description: "Cobertura triplex com piscina aquecida suspensa com visor de vidro, deck de contemplação e lounge externo com churrasqueira gourmet e lareira.",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=85",
        features: [
          "Piscina privativa transparente com deck solarium",
          "Adega climatizada para 800 garrafas",
          "Elevador privativo que atende todos os andares da cobertura",
          "Espaço privativo para academia ou estúdio",
          "Segurança reforçada e portas blindadas no acesso"
        ]
      }
    ],
    highlights: [
      {
        icon: "Building2",
        title: "Arquitetura Autoral Premiada",
        description: "Fachada biomimética assinada por escritório internacional em terreno de altíssimo padrão."
      },
      {
        icon: "Sparkles",
        title: "Concierge & Serviços de Hotelaria",
        description: "Gestão de hospitalidade VIP, manobrista 24h e personal trainer disponível no condomínio."
      },
      {
        icon: "ShieldCheck",
        title: "Blindagem & Segurança Máxima",
        description: "Controle de acesso perimetral militar com câmeras térmicas e guaritas blindadas nível III-A."
      },
      {
        icon: "Leaf",
        title: "Certificação Sustentável Leed Gold",
        description: "Painéis solares, reuso inteligente de água e eficiência energética com baixo custo condominial."
      }
    ],
    faqs: [
      {
        question: "Qual o endereço exato do Empreendimento Jardins?",
        answer: "O Empreendimento Jardins está situado na Av. Cidade Jardim, 1150, na nobre Cidade Jardim em São Paulo, ao lado do Parque do Povo e Shopping Cidade Jardim."
      },
      {
        question: "Qual o link oficial para registrar interesse no Empreendimento Jardins (Cidade Jardim)?",
        answer: "O link oficial para atendimento prioritário na Cidade Jardim é: https://forms.gle/eNKvdMYwsPYEpvgE9."
      },
      {
        question: "Quais são as metragens disponíveis na Cidade Jardim?",
        answer: "Oferecemos plantas de 165m² (3 suítes), 235m² (4 suítes) e a exclusiva Penthouse de 380m² com piscina privativa."
      }
    ]
  },

  bentivi: {
    id: "bentivi",
    name: "Empreendimento Bentivi",
    fullName: "Bentivi Residencial Tatuapé",
    neighborhood: "Tatuapé, São Paulo - SP",
    shortNeighborhood: "Tatuapé",
    cityZone: "Zona Leste Nobre / Anália Franco",
    badge: "Modernidade & Estilo de Vida no Tatuapé",
    address: "Rua Emília Marengo, 920 - Tatuapé / Anália Franco, São Paulo - SP",
    formUrl: "https://forms.gle/D3ar1Kv3hyGhzs7q6",
    headlineTitle: "O Novo Ícone de Design Contemporâneo no",
    headlineHighlight: "Tatuapé",
    headlineLocation: "Tatuapé · Entre a Rua Itapura & Parque CERET",
    subheadline:
      "Apartamentos modernos com 2 e 3 suítes (98m² a 218m²), lazer de resort com quadra de beach tennis, rooftop com vista livre para o Anália Franco e a vibração cosmopolita do Tatuapé.",
    heroImage:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=90",
    priceStartingFrom: "A partir de R$ 980.000",
    priceValueNum: 980000,
    areaRange: "98 a 218 m²",
    suitesRange: "2 e 3 Suítes",
    parkingRange: "2 a 3 Vagas Cobertas",
    rooftopHighlight: "Rooftop Lounge & Beach Tennis",
    standAddress: "Rua Emília Marengo, 920 - Tatuapé, São Paulo - SP (Estacionamento no local)",
    walkScore: 96,
    walkScoreLabel: "Vida Cosmopolita no Tatuapé",
    walkScoreDesc: "Os melhores bares e restaurantes das ruas Itapura e Coelho Lisboa, Parque CERET e Shopping Anália Franco.",
    zoneDescription:
      "Localizado no ponto mais nobre do Tatuapé, vizinho imediato ao Jardim Anália Franco. Uma região consagrada pelo comércio sofisticado, vida noturna gastronômica de primeira linha e fácil conexão com a Radial Leste e Salim Farah Maluf.",
    photos: [
      {
        id: "bentivi-1",
        title: "Fachada Moderna com Brises Metálicos e Vidro Reflex",
        category: "fachada",
        categoryLabel: "Fachada & Arquitetura",
        url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85",
        description: "Torre imponente com arquitetura arrojada que se destaca na paisagem urbana do Tatuapé.",
        tag: "Design Marcante"
      },
      {
        id: "bentivi-2",
        title: "Living Integrado à Varanda Gourmet Panorâmica",
        category: "interiores",
        categoryLabel: "Living & Interiores",
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
        description: "Conexão total entre sala de jantar, estar e churrasqueira para celebrar os melhores momentos.",
        tag: "Ambiente Social"
      },
      {
        id: "bentivi-3",
        title: "Cozinha Moderna com Ilha Central e Acabamentos em Quartzo",
        category: "interiores",
        categoryLabel: "Living & Interiores",
        url: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=85",
        description: "Espaço funcional pensado para quem aprecia culinária com praticidade e elegância.",
        tag: "Design Funcional"
      },
      {
        id: "bentivi-4",
        title: "Complexo Aquático com Piscina Adulto e Infantil",
        category: "lazer",
        categoryLabel: "Lazer & Rooftop",
        url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=85",
        description: "Piscina aquecida com solarium molhado, bar de apoio e quiosques privativos para a família.",
        tag: "Resort Urbano"
      },
      {
        id: "bentivi-5",
        title: "Suíte Master com Sacada Exclusiva e Closet",
        category: "suites",
        categoryLabel: "Suítes & Detalhes",
        url: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1600&q=85",
        description: "Refúgio de conforto com ampla iluminação natural e excelente ventilação cruzada.",
        tag: "Privacidade Total"
      },
      {
        id: "bentivi-6",
        title: "Quadra Oficial de Beach Tennis e Academia Pro",
        category: "lazer",
        categoryLabel: "Lazer & Rooftop",
        url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=85",
        description: "Espaço esportivo ao ar livre com areia tratada e academia completa climatizada.",
        tag: "Saúde & Esporte"
      }
    ],
    locationPoints: [
      {
        category: "parques",
        categoryLabel: "Esporte & Verde",
        name: "Parque CERET (Centro Esportivo)",
        type: "286 mil m² de Área Verde e Esportes",
        distanceTime: "3 min de carro / 7 min a pé",
        transportType: "walking",
        description: "Pistas para corrida, campos esportivos, bosque preservado e o maior complexo ao ar livre da região."
      },
      {
        category: "gastronomia",
        categoryLabel: "Gastronomia & Vida Noturna",
        name: "Polo Gastronômico da Rua Itapura & Emília Marengo",
        type: "Bistrôs, Bares Charmosos e Padarias Nobres",
        distanceTime: "2 min a pé",
        transportType: "walking",
        description: "Mais de 60 opções de restaurantes premiados, hamburguerias artesanais e cafés de grife a poucos passos."
      },
      {
        category: "compras",
        categoryLabel: "Compras de Prestígio",
        name: "Shopping Anália Franco & Shopping Metrô Tatuapé",
        type: "Centros Comerciais Completos",
        distanceTime: "4 min de carro",
        transportType: "driving",
        description: "Lojas de grife, salas IMAX e teatro com ampla programação cultural e gastronômica."
      },
      {
        category: "educacao",
        categoryLabel: "Educação & Saúde",
        name: "Colégio Agostiniano Mendel & Hospital São Luiz",
        type: "Ensino de Referência e Pronto Atendimento VIP",
        distanceTime: "5 min de carro",
        transportType: "driving",
        description: "Educação de excelência desde a infância e medicina com tecnologia de última geração."
      },
      {
        category: "mobilidade",
        categoryLabel: "Mobilidade & Vias",
        name: "Radial Leste, Salim Farah Maluf & Metrô Carrão/Tatuapé",
        type: "Acesso Imediato ao Centro e Aeroporto",
        distanceTime: "3 min de carro",
        transportType: "driving",
        description: "Rapidez para se deslocar até a Av. Paulista, Marginal Tietê e Aeroporto Internacional de Guarulhos."
      }
    ],
    typologies: [
      {
        id: "bentivi-98",
        name: "Bentivi Smart Tatuapé",
        subtitle: "Praticidade & Conforto Urbano",
        area: "98 m²",
        suites: "2 ou 3 Dorms (1 Suíte Master)",
        parking: "2 Vagas Cobertas",
        storage: "Depósito Privativo",
        estimatedPrice: "A partir de R$ 980.000",
        description: "Planta otimizada com varanda integrada, churrasqueira a carvão e suíte confortável para a família moderna.",
        image: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1400&q=85",
        features: [
          "Varanda gourmet com churrasqueira integrada à cozinha",
          "Fechadura biométrica digital na porta social",
          "Janelas com persianas de enrolar integradas",
          "Ponto para cooktop elétrico e ilha na cozinha",
          "2 vagas cobertas de garagem"
        ]
      },
      {
        id: "bentivi-142",
        name: "Bentivi Premium Tatuapé",
        subtitle: "Espaço Amplo para Momentos Inesquecíveis",
        area: "142 m²",
        suites: "3 Suítes Plenas",
        parking: "2 a 3 Vagas Determinadas",
        storage: "Depósito Privativo",
        estimatedPrice: "A partir de R$ 1.540.000",
        description: "Living de 2 ambientes com vista panorâmica para o Tatuapé e Anália Franco, cozinha espaçosa e lavabo independente.",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
        features: [
          "3 suítes plenas com piso laminado premium",
          "Varanda gourmet com bancada de granito e churrasqueira",
          "Elevador com controle de acesso codificado",
          "Tubulação com isolamento acústico reduzido",
          "Tomadas USB nos dormitórios e living"
        ]
      },
      {
        id: "bentivi-218",
        name: "Bentivi Duplex Top Tatuapé",
        subtitle: "Cobertura Duplex com Solarium Privativo",
        area: "218 m²",
        suites: "3 Suítes Master",
        parking: "3 Vagas Determinadas",
        storage: "Depósito Duplo",
        estimatedPrice: "Consulte Condições Especiais",
        description: "Cobertura espetacular com terraço descoberto, jacuzzi spa privativa, churrasqueira gourmet e vista deslumbrante.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
        features: [
          "Terraço privativo com spa de hidromassagem aquecido",
          "Espaço gourmet exclusivo no piso superior",
          "Vista infinita para o Parque CERET e horizonte",
          "Suíte master com closet ampliado e sacada",
          "3 vagas de garagem grandes e privativas"
        ]
      }
    ],
    highlights: [
      {
        icon: "Building2",
        title: "Localização Nobre no Tatuapé",
        description: "Na Rua Emília Marengo, cercado pelos melhores restaurantes e serviços do bairro."
      },
      {
        icon: "Sparkles",
        title: "Lazer Completo com Beach Tennis",
        description: "Quadra oficial de areia, piscina aquecida, fitness by Life Fitness e brinquedoteca."
      },
      {
        icon: "ShieldCheck",
        title: "Segurança 24 Horas com Eclusa",
        description: "Guarita blindada, biometria e circuito fechado de TV com monitoramento inteligente."
      },
      {
        icon: "Leaf",
        title: "Economia e Sustentabilidade",
        description: "Bacias com acionamento duplo, captação pluvial e iluminação LED em 100% das áreas comuns."
      }
    ],
    faqs: [
      {
        question: "Onde fica o Empreendimento Bentivi no Tatuapé?",
        answer: "Está situado na Rua Emília Marengo, 920, no coração nobre do Tatuapé, a poucos minutos do Parque CERET e do Shopping Anália Franco."
      },
      {
        question: "Qual o link direto para preencher o formulário do Bentivi no Tatuapé?",
        answer: "O formulário exclusivo para o empreendimento do Tatuapé é: https://forms.gle/D3ar1Kv3hyGhzs7q6."
      },
      {
        question: "Quais opções de plantas existem no Bentivi Tatuapé?",
        answer: "Plantas de 98m² (2 ou 3 dorms com suíte), 142m² (3 suítes plenas) e Cobertura Duplex de 218m² com jacuzzi e terraço descoberto."
      }
    ]
  }
};

export const DEVELOPMENTS_LIST = [
  DEVELOPMENTS.aurora,
  DEVELOPMENTS.jardins,
  DEVELOPMENTS.bentivi,
];
