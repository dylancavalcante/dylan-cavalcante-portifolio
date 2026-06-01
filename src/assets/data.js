// ─── Static Data ─────────────────────────────────────────────────
// Edit your content here. No need to touch components or pages.

export const TYPING_LINES = [
  " initializing portfolio...",
  " loading systems...",
  " curiosity detected.",
  " welcome, stranger.",
];

export const STATS = [
  { n: "CENSIPAM", l: "desenvolvimento backend" },
  { n: "REST API´s", l: "integração de sistemas" },
  { n: "Docker", l: "infraestrutura & deploy" },
  { n: "Geodados", l: "pipelines e automação" },
];

export const STACK = [
  { cat: "Languages", items: ["Python", "JavaScript", "C", "SQL", "PHP"] },
  { cat: "Frontend",  items: ["React", "React Native", "HTML/CSS"] },
  { cat: "Backend",   items: ["Node.js", "FastAPI", "REST APIs", "Laravel"] },
  { cat: "Mobile",  items: ["Flutter", "Dart", "AndroidStudio"] },
  { cat: "Tools",     items: ["Git", "Linux", "VS Code", "Docker", "CI/CD workflows"] },
  { cat: "Learning",  items: ["TypeScript", "GraphQL", "Rust", "Java"] },
];

export const PROJECTS = [
  {
    id:        "01",
    name:      "UBS 8 de Taguatinga",
    desc:      "O UBS 8 de Taguatinga é um sistema web full stack desenvolvido para auxiliar na divulgação de projetos, publicações e iniciativas comunitárias promovidas pela Unidade Básica de Saúde 8 de Taguatinga, no Distrito Federal. A plataforma oferece uma área pública para consulta de informações pelos visitantes e um painel administrativo para gerenciamento de conteúdos.",
    stack:     ["React", "Vite", "Tailwind CSS", "React Router DOM", "Axios", "Lucide React", "FastAPI", "PostgreSQL", "Python", "Uvicorn", "Cloudinary", "Railway", "Vercel" ],
    status:    "deployed",
    highlight: "Reduziu as ligações em busca de informações. 50+ visualizações por semana.",
    repo:      "https://github.com/dylancavalcante/UBS8_TAGUATINGA",
  },
  {
    id:        "02",
    name:      "Pedro's Adventure",
    desc:      "Jogo 2D de plataforma desenvolvido em Python com Pygame, utilizando sistema de tiles, colisão, animações e lógica de gameplay. Foco em física básica, movimentação do jogador e estruturação de mapas em grade (tile-based).",
    stack:     ["Python", "Pygame", "Tile-based rendering", "Game Dev", "AABB Collision"],
    status:    "completed",
    highlight: "Sistema de colisão, movimentação fluida e mapas baseados em tiles",
    repo:      "https://github.com/dylancavalcante/pedros_adventure",
},
 {
  id: "03",
  name: "Arandú",
  desc: "Plataforma mobile de aprendizado gamificado, feita para um cliente real, desenvolvida por estudantes da UnB, inspirada em Duolingo e Brilliant. O sistema utiliza uma arquitetura full-stack moderna para oferecer experiências personalizadas de estudo com progressão por desafios.",
  stack: [
    "NestJS",
    "Flutter",
    "Swagger",
    "Docker",
    "TypeScript", "Dart", "Figma", "Metodologias: LeanInception, XP, Kanbam, Scrum"
  ],
  status: "completed",
  highlight: "Arquitetura full-stack com backend escalável, app mobile e frontend web integrados",
  repo: "https://fga-eps-mds.github.io/2024.2-ARANDU-DOC/"
},
  {
    id:        "04",
    name:      "CalorDF",
    desc:      "Dashboard Web de Dados Geoespaciais com integração de APIs REST para atualização automatizada de dados geoespaciais.",
    stack:     ["Python", "Geoprocessamento", "Docker", "Pipeline"],
    status:    "Constructing",
    highlight: "Containerização com Docker e utilização de Git para controle de versão e reprodutibilidade do ambiente.",
    repo:      "https://github.com/dylancavalcante/Deteccao-de-manchas-de-calor-DF",
  },
];

export const CURRICULUM = [
  {
    section: "Experiência",
    items: [
      {
        title: "CENSIPAM — Estágio em Desenvolvimento Backend",
        period: "2025 - Atual",
        description:
          "Desenvolvimento de aplicações web com Laravel, PHP e JavaScript para visualização de dados geoespaciais. Integração de APIs REST, criação de pipelines em Python, Docker, CI/CD e automação com IA.",
      },
      {
        title: "Home Doctor — Estágio em Suporte de TI",
        period: "2024",
        description:
          "Suporte técnico corporativo, manutenção de hardware e software, configuração de ambientes e resolução de problemas de infraestrutura.",
      },
    ],
  },

  {
  section: "Projetos Relevantes",
  items: [
    {
      title: "UBS 8 Taguatinga",
      period: "React • Plataforma Web",
      description:
        "Sistema web desenvolvido para a UBS 8 de Taguatinga voltado para divulgação de projetos sociais, publicações, horta medicinal e informações institucionais. Estruturado com foco em organização de conteúdo, navegação intuitiva e experiência do usuário.",
    },
    {
      title: "Sistema de Detecção de Embarcações",
      period: "CENSIPAM + Marinha do Brasil",
      description:
        "Desenvolvimento de solução em Python para processamento eficiente de dados geoespaciais e identificação de padrões aplicados a cenários operacionais reais.",
    },
    {
      title: "Arandú",
      period: "Flutter • Mobile",
      description:
        "Aplicação mobile desenvolvida com Flutter utilizando componentes reutilizáveis, navegação estruturada e foco em arquitetura de interface.",
    },
  ],
},

  {
    section: "Formação",
    items: [
      {
        title: "Universidade Federal de Brasília (UnB)",
        period: "2023 - 2028",
        description:
          "Em curso: Bacharelado em Engenharia de Software | Semestre atual: 2026/1",
      },
    ],
  },

  {
    section: "Idiomas",
    items: [
      {
        title: "Português",
        period: "Nativo",
        description: "",
      },
      {
        title: "Inglês",
        period: "Avançado",
        description: "",
      },
      {
        title: "Espanhol",
        period: "Intermediário",
        description: "Leitura técnica.",
      },
    ],
  },
];

export const CONTACT_LINKS = [
  { label: "GitHub",   handle: "@dylancavalcante", icon: "gh", url: "https://github.com/dylancavalcante" },
  { label: "LinkedIn", handle: "Dylan Cavalcante", icon: "li", url: "https://www.linkedin.com/in/dylan-cavalcante-0037b5240/" },
  { label: "Email",    handle: "dylanportelacavalcante@gmail.com",  icon: "ml", url: "mailto:dylanportelacavalcante@gmail.com" },
];

export const NAV_ITEMS = ["Home", "Projetos", "Stack", "Currículo", "Contato"];
