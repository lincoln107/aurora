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

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "facade-hero",
    title: "Fachada Contemporânea com Brises Dinâmicos",
    category: "fachada",
    categoryLabel: "Fachada & Arquitetura",
    url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=85",
    description: "Design biofílico assinado por escritório de renome internacional com floreiras automatizadas e brises térmicos.",
    tag: "Arquitetura Autoral"
  },
  {
    id: "living-panoramic",
    title: "Living Integrado com Pé-Direito Duplo",
    category: "interiores",
    categoryLabel: "Living & Interiores",
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
    description: "Esquadrias piso-teto que ampliam a iluminação natural e proporcionam integração total com a varanda gourmet.",
    tag: "Conceito Aberto"
  },
  {
    id: "gourmet-balcony",
    title: "Varanda Gourmet com Vista Panorâmica",
    category: "interiores",
    categoryLabel: "Living & Interiores",
    url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
    description: "Churrasqueira a carvão embutida com duto individual e bancada em mármore importado para momentos memoráveis.",
    tag: "Vista Definitiva"
  },
  {
    id: "rooftop-pool",
    title: "Rooftop com Piscina de Borda Infinita",
    category: "lazer",
    categoryLabel: "Lazer & Rooftop",
    url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=85",
    description: "Piscina aquecida a 120 metros de altura com solarium e vista de 360° para o horizonte mais nobre da cidade.",
    tag: "Exclusividade Rooftop"
  },
  {
    id: "master-suite",
    title: "Suíte Master com Closet Walk-in",
    category: "suites",
    categoryLabel: "Suítes & Detalhes",
    url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1600&q=85",
    description: "Espaço planejado com isolamento acústico especial, marcenaria de alto padrão e persianas 100% automatizadas.",
    tag: "Conforto Acústico"
  },
  {
    id: "master-bathroom",
    title: "Banheiro Master Spa com Imersão",
    category: "suites",
    categoryLabel: "Suítes & Detalhes",
    url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=85",
    description: "Banheira de imersão freestanding, cuba dupla esculpida em quartzo e chuveiros de teto duplos.",
    tag: "Padrão Spa"
  },
  {
    id: "wellness-gym",
    title: "Academia Climatizada Life Fitness",
    category: "lazer",
    categoryLabel: "Lazer & Rooftop",
    url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=85",
    description: "Equipamentos profissionais de última geração, sala dedicada para pilates e yoga com vista para o jardim privativo.",
    tag: "Saúde & Performance"
  },
  {
    id: "wine-lounge",
    title: "Wine Lounge & Espaço Gourmet Privativo",
    category: "lazer",
    categoryLabel: "Lazer & Rooftop",
    url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=85",
    description: "Adega climatizada individualizada por apartamento e salão de festas privativo decorado por designer.",
    tag: "Alta Gastronomia"
  },
  {
    id: "modern-facade-night",
    title: "Iluminação Cênica Noturna da Fachada",
    category: "fachada",
    categoryLabel: "Fachada & Arquitetura",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85",
    description: "Projeto luminotécnico assinado que valoriza as linhas arrojadas do edifício e traz presença marcante ao bairro.",
    tag: "Elegância Noturna"
  }
];

export interface LocationPoint {
  category: "gastronomia" | "parques" | "educacao" | "compras" | "mobilidade";
  categoryLabel: string;
  name: string;
  type: string;
  distanceTime: string;
  transportType: "walking" | "driving";
  description: string;
}

export const LOCATION_POINTS: LocationPoint[] = [
  {
    category: "parques",
    categoryLabel: "Parques & Natureza",
    name: "Parque do Ibirapuera / Parque das Rosas",
    type: "Área Verde & Lazer",
    distanceTime: "3 min a pé",
    transportType: "walking",
    description: "A poucos passos para suas caminhadas matinais, corridas e contato diário com a natureza preservada."
  },
  {
    category: "gastronomia",
    categoryLabel: "Gastronomia Nobre",
    name: "Polo Gastronômico Jardins & Itaim",
    type: "Restaurantes & Bistrôs Premiados",
    distanceTime: "4 min a pé",
    transportType: "walking",
    description: "Cozinha autoral, cafeterias de grife e os restaurantes mais consagrados da cidade à sua porta."
  },
  {
    category: "compras",
    categoryLabel: "Conveniência & Compras",
    name: "Shopping Iguatemi & JK Iguatemi",
    type: "Lojas de Luxo & Alta Moda",
    distanceTime: "6 min de carro",
    transportType: "driving",
    description: "As principais grifes internacionais, cinemas VIP e serviços de alta conveniência."
  },
  {
    category: "educacao",
    categoryLabel: "Educação & Saúde",
    name: "Colégios Bilíngues de Referência & Albert Einstein",
    type: "Escolas Internacionais & Medicina",
    distanceTime: "5 min de carro",
    transportType: "driving",
    description: "Instituições de ensino de excelência para os seus filhos e os centros médicos mais avançados da América Latina."
  },
  {
    category: "mobilidade",
    categoryLabel: "Mobilidade Ágil",
    name: "Acesso Rápido às Vias Expressas & Estação Metrô",
    type: "Infraestrutura de Transporte",
    distanceTime: "2 min de carro / 5 min a pé",
    transportType: "walking",
    description: "Conexão imediata com os principais eixos financeiros e aeroportos, sem perder a serenidade de uma rua arborizada."
  },
  {
    category: "compras",
    categoryLabel: "Conveniência & Compras",
    name: "Empório Santa Luzia & St. Marche Gourmet",
    type: "Alta Gastronomia & Mercados",
    distanceTime: "4 min a pé",
    transportType: "walking",
    description: "Produtos importados selecionados, adega premiada e panificação artesanal a poucos passos de casa."
  }
];

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

export const TYPOLOGIES: TypologyPlan[] = [
  {
    id: "elegance",
    name: "Aurora Horizon",
    subtitle: "Planta Inteligente & Conforto Absoluto",
    area: "128 m²",
    suites: "3 Suítes",
    parking: "2 Vagas Cobertas",
    storage: "Depósito Privativo",
    estimatedPrice: "A partir de R$ 1.480.000",
    description: "Distribuição perfeita entre living social, cozinha gourmet e área íntima isolada para máxima privacidade e acústica.",
    image: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1400&q=85",
    features: [
      "Varanda gourmet nivelada com o living",
      "Hall privativo com biometria no elevador",
      "Infraestrutura para ar-condicionado em todos os cômodos",
      "Persianas motorizadas integradas nas suítes",
      "Lavabo social independente",
      "Área de serviço separada com ventilação natural"
    ]
  },
  {
    id: "prestige",
    name: "Aurora Grand",
    subtitle: "Espaço Generoso & Exclusividade Total",
    area: "186 m²",
    suites: "4 Suítes (ou 3 Suítes + Home Office)",
    parking: "3 Vagas Determinadas",
    storage: "Depósito Duplo",
    estimatedPrice: "A partir de R$ 2.190.000",
    description: "Living com pé-direito imponente de 3 metros, varanda com vista de 180° e master suite com closet walk-in e hidromassagem.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
    features: [
      "Suíte master com 28m² e banheiro spa",
      "Cozinha com ilha central e despensa",
      "Churrasqueira a carvão gourmet e ponto para chopeira",
      "Ponto para carregamento de veículo elétrico privativo",
      "Isolamento acústico premium nas lajes e tubulações",
      "Área técnica dedicada para condensadoras"
    ]
  },
  {
    id: "penthouse",
    name: "Aurora Penthouse Duplex",
    subtitle: "A Máxima Expressão do Luxo Urbano",
    area: "284 m²",
    suites: "4 Suítes Master",
    parking: "4 Vagas Privativas",
    storage: "Depósito VIP",
    estimatedPrice: "Consulte Condições Especiais",
    description: "Cobertura duplex incomparável com piscina privativa no piso superior, deck de madeira ecológica e vista panorâmica para toda a cidade.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=85",
    features: [
      "Piscina privativa aquecida com solarium",
      "Terraço descoberto com lareira ecológica ao ar livre",
      "Elevador privativo que atende ambos os pavimentos",
      "Espaço para adega climatizada de até 500 rótulos",
      "Sistema de automação predial completo instalado",
      "Acabamentos em mármore travertino e madeira nobre"
    ]
  }
];

export const BUILDING_HIGHLIGHTS = [
  {
    title: "Torre Única em Terreno Amplo",
    desc: "Maior privacidade e ventilação cruzada em um terreno de mais de 4.000m² com paisagismo exuberante.",
    icon: "Building2"
  },
  {
    title: "Rooftop com Borda Infinita",
    desc: "Área de lazer nas alturas com vista panorâmica definitiva para o pôr do sol e o skyline da cidade.",
    icon: "Sparkles"
  },
  {
    title: "Sustentabilidade & Economia",
    desc: "Energia solar para áreas comuns, reuso de águas pluviais e carregadores individuais para carros elétricos.",
    icon: "Leaf"
  },
  {
    title: "Segurança de Nível Internacional",
    desc: "Guarita blindada, controle perimetral por câmeras térmicas, biometria facial e eclusa de veículos.",
    icon: "ShieldCheck"
  },
  {
    title: "Gerador com 100% de Atendimento",
    desc: "Garantia de funcionamento integral para todas as tomadas, iluminação e elevadores mesmo em falta de energia.",
    icon: "Zap"
  },
  {
    title: "Isolamento Acústico Avançado",
    desc: "Mantas acústicas especiais sob o contrapiso e esquadrias de alto desempenho acústico.",
    icon: "VolumeX"
  }
];

export const FAQS = [
  {
    question: "Como funciona o agendamento de visita ao apartamento decorado?",
    answer: "Você pode clicar no botão 'Tenho Interesse' e preencher seus dados no formulário oficial. Nossa equipe de especialistas entrará em contato em menos de 15 minutos para agendar sua visita exclusiva com atendimento privativo e maquete física do empreendimento."
  },
  {
    question: "Qual é a previsão de entrega e fase atual da obra?",
    answer: "O Aurora Residences está na fase de pré-lançamento com condições comerciais exclusivas para os primeiros investidores e moradores. A previsão de conclusão é de 36 meses com garantia total da incorporadora e seguro de entrega assegurado pelo agente financeiro."
  },
  {
    question: "É possível personalizar a planta do apartamento antes da entrega?",
    answer: "Sim! Disponibilizamos o programa de personalização com opções de integração de suítes, abertura de living, escolha de bancadas e kits de acabamentos de alto padrão sem custo extra de reforma posterior."
  },
  {
    question: "Quais são as opções de financiamento e formas de pagamento?",
    answer: "Trabalhamos com fluxo direto com a construtora durante o período de obras (com entrada facilitada, parcelas mensais e anuais) e opção de financiamento bancário do saldo devedor através de qualquer banco (Itaú, Bradesco, Santander, Caixa, Banco do Brasil) no momento da entrega das chaves."
  },
  {
    question: "Por que a localização do Aurora Residences é considerada privilegiada?",
    answer: "O empreendimento está situado em um quadrilátero de altíssima valorização imobiliária, combinando uma rua estritamente residencial e arborizada com a proximidade imediata dos melhores colégios, parques, restaurantes de alta gastronomia e principais vias de acesso."
  }
];
