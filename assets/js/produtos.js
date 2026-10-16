/* Catálogo Reabilita em Casa
   Especificações conforme o catálogo publicado em reclocacao.com.br (consulta 08/10/2026).
   Disponibilidade e valores: sempre confirmados pelo WhatsApp. */
window.CATEGORIAS = [
  { id: "todos", nome: "Todos" },
  { id: "cadeiras", nome: "Cadeiras de rodas" },
  { id: "banho", nome: "Banho e higiene" },
  { id: "marcha", nome: "Andadores e muletas" },
  { id: "camas", nome: "Camas e colchão" },
  { id: "apoio", nome: "Transferência e exercício" }
];

window.PRODUTOS = [
  {
    id: "agile", cat: "cadeiras", nome: "Cadeira de rodas Ágile", marca: "Jaguaribe",
    resumo: "Alumínio aeronáutico, leve e totalmente ajustável.",
    destaques: ["Até 120 kg", "Assento de 36 a 48 cm", "Desmontagem rápida"],
    specs: [
      "Construída em alumínio aeronáutico", "Estrutura dobrável em duplo X", "Pintura eletrostática epóxi",
      "Rolamentos blindados nas quatro rodas, inclusive no eixo vertical do garfo",
      "Estofamento em nylon acolchoado com tensionamento de assento regulável, fixado sem parafusos",
      "Almofada em espuma injetada", "Rodas traseiras de 24\" em alumínio, com pneus infláveis", "Protetores de raios",
      "Rodas dianteiras de 6\" maciças, com garfos injetados em nylon",
      "Desmontagem rápida (quick release) nas quatro rodas", "Protetores de roupa em nylon com aba",
      "Apoios de pés articuláveis, rebatíveis, removíveis e reguláveis em altura", "Apoios de braços escamoteáveis",
      "Mancal com regulagem de altura, ângulo do assento e centro de gravidade", "Regulagem de tilt",
      "Capacidade para 120 kg", "Larguras do assento: 36, 38, 40, 42, 44, 46 e 48 cm"
    ]
  },
  {
    id: "taipu-j3", cat: "cadeiras", nome: "Cadeira de rodas Taipu J3", marca: "Jaguaribe",
    resumo: "Pneus antifuro e rodas de desmontagem rápida, prática para o dia a dia.",
    destaques: ["Até 100 kg", "Assento de 44 cm", "Pneus antifuro"],
    specs: [
      "Estrutura dobrável em X", "Pintura eletrostática epóxi", "Estofamento em nylon", "Almofada em espuma",
      "Rodas traseiras de 24\" injetadas em nylon, com pneus antifuro", "Rodas dianteiras de 6\" com pneus antifuro",
      "Freios bilaterais", "Protetor de roupas", "Apoio para pés articulados e reguláveis em altura",
      "Apoio para braços escamoteáveis", "Eixo de desmontagem rápida (quick release) nas rodas traseiras",
      "Faixa de panturrilha", "Capacidade para 100 kg", "Largura do assento: 44 cm"
    ]
  },
  {
    id: "cantu", cat: "cadeiras", nome: "Cadeira de rodas Cantu", marca: "Jaguaribe",
    resumo: "Aço carbono, estrutura firme e manuseio simples.",
    destaques: ["Até 100 kg", "Assento de 42 cm", "Freios bilaterais"],
    specs: [
      "Construída em aço carbono", "Estrutura dobrável em X", "Pintura eletrostática epóxi", "Estofamento em nylon",
      "Rodas dianteiras de 6\" maciças", "Freios bilaterais", "Apoios de pés articuláveis e reguláveis em altura",
      "Apoios de braço escamoteáveis", "Capacidade para 100 kg", "Largura do assento: 42 cm"
    ]
  },
  {
    id: "d400", cat: "cadeiras", nome: "Cadeira de rodas D400", marca: "Dellamed",
    resumo: "Mais espaço de acomodação e boa circulação em ambientes estreitos.",
    destaques: ["Até 100 kg", "Encosto de 47 cm", "Bolsa traseira"],
    specs: [
      "Maior espaço para acomodação", "Apoio de braços escamoteável com suporte almofadado",
      "Rodas dianteiras maciças com sistema antifuro", "Rodas traseiras de 24\" com pneus infláveis",
      "Protetor lateral de roupas integrado", "Apoio de pés removível, rebatível lateralmente e com regulagem de altura",
      "Chassi tubular em aço carbono com pintura epóxi", "Almofada de espuma de alta densidade com capa em nylon",
      "Freios bilaterais reguláveis e ergonômicos", "Garfo dianteiro longo com regulagem de altura",
      "Cinto com velcro para apoio de panturrilha", "Bolsa traseira com zíper",
      "Facilidade de movimentação em locais de espaço reduzido", "Encosto: 47 cm", "Capacidade para até 100 kg"
    ]
  },
  {
    id: "poty", cat: "cadeiras", nome: "Cadeira de rodas Poty", marca: "Jaguaribe",
    resumo: "Assento largo e capacidade ampliada, com rodas antifuro.",
    destaques: ["Até 120 kg", "Assento de 50 cm", "Duplo X"],
    specs: [
      "Construída em aço", "Estrutura dobrável em duplo X", "Pintura eletrostática epóxi",
      "Estofamento em nylon acolchoado", "Almofada em espuma injetada", "Rodas traseiras de 24\" em alumínio, com pneus antifuro",
      "Rodas dianteiras de 6\" maciças, com garfos injetados em nylon", "Freios bilaterais reguláveis",
      "Protetores de roupa com aba", "Apoios de pés articuláveis e reguláveis em altura", "Apoios de braço escamoteáveis",
      "Largura do assento: 50 cm", "Capacidade para até 120 kg"
    ]
  },
  {
    id: "higienizacao-cinza", cat: "banho", nome: "Cadeira de higienização cinza", marca: "Práxis",
    resumo: "Alumínio dobrável, com rodízios e balde com tampa.",
    destaques: ["Até 80 kg", "Assento de 36 cm", "7,6 kg"],
    specs: [
      "Estrutura dobrável em alumínio", "Assento e tampa em plástico reforçado", "Altura do assento: 52 cm",
      "4 rodízios giratórios", "Freio nas rodas traseiras", "Balde com tampa", "Capacidade para até 80 kg",
      "Largura do assento: 36 cm", "Largura total aberta: 52 cm", "Peso: 7,6 kg"
    ]
  },
  {
    id: "higienizacao-branca", cat: "banho", nome: "Cadeira de higienização branca", marca: "Práxis",
    resumo: "Assento almofadado e apoio de pés articulado, para mais conforto.",
    destaques: ["Até 100 kg", "Assento de 40 cm", "Coletor com tampa"],
    specs: [
      "Encosto em plástico", "Assento almofadado", "Apoios articulados para os pés", "4 rodízios em plástico com freio",
      "Coletor com tampa", "Estrutura em alumínio", "Largura total: 56 cm", "Largura do assento: 40 cm",
      "Altura do assento: 57 cm", "Capacidade para até 100 kg"
    ]
  },
  {
    id: "banho-big", cat: "banho", nome: "Cadeira de banho Big", marca: "Jaguaribe",
    resumo: "Reforçada e espaçosa, com apoio de pé retrátil.",
    destaques: ["Até 130 kg", "Assento de 50 cm", "9,2 kg"],
    specs: [
      "Construída em aço carbono", "Pintura eletrostática epóxi", "Apoio de pé retrátil", "Freios bilaterais",
      "Apoios de braços fixos", "Capacidade para 130 kg", "Largura do assento: 50 cm",
      "Largura total aberta: 59,5 cm", "Peso: 9,2 kg"
    ]
  },
  {
    id: "banho-pop", cat: "banho", nome: "Cadeira de banho Pop", marca: "Jaguaribe",
    resumo: "Compacta e leve, para banheiros com pouco espaço.",
    destaques: ["Até 80 kg", "Assento de 40 cm", "6,2 kg"],
    specs: [
      "Construída em aço", "Pintura eletrostática epóxi", "Apoio de pé fixo", "Apoios de braço fixos",
      "Freios bilaterais", "Capacidade para 80 kg", "Largura do assento: 40 cm", "Largura total aberta: 49 cm", "Peso: 6,2 kg"
    ]
  },
  {
    id: "banho-br", cat: "banho", nome: "Cadeira de banho BR", marca: "Jaguaribe",
    resumo: "Braços removíveis que facilitam a transferência.",
    destaques: ["Até 90 kg", "Assento de 44 cm", "Recipiente coletor"],
    specs: [
      "Construída em aço carbono", "Pintura eletrostática epóxi", "Apoio de pés retrátil", "Apoios de braços removíveis",
      "Recipiente coletor", "Freios bilaterais", "Capacidade para 90 kg", "Largura do assento: 44 cm",
      "Largura total aberta: 58,5 cm", "Peso: 8,5 kg"
    ]
  },
  {
    id: "andador-articulado", cat: "marcha", nome: "Andador articulado", marca: "Dellamed",
    resumo: "Uso fixo ou articulado, com 8 níveis de altura.",
    destaques: ["Até 130 kg", "8 alturas", "Silencioso"],
    specs: [
      "8 níveis de regulagem de altura por engate rápido (pino click)",
      "Sistema mola-trave e engate rápido para abrir e fechar", "Barras centrais em aço carbono",
      "Sistema articulado", "Pés de borracha silenciosos",
      "Apoio de mão emborrachado, macio e anatômico, removível para limpeza",
      "Ponteira emborrachada de maior aderência", "Capacidade para até 130 kg", "Dimensões: C 36 × L 50 × A 76 cm"
    ]
  },
  {
    id: "andador-4-rodas", cat: "marcha", nome: "Andador 4 rodas com assento", marca: "Práxis",
    resumo: "Para percursos mais longos: freios com trava e assento para descansar.",
    destaques: ["Até 100 kg", "Assento almofadado", "7 kg"],
    specs: [
      "Dobrável, em alumínio", "Freios com trava nas rodas traseiras", "Assento almofadado",
      "Cesto e bolsa porta-objetos", "Largura total: 62 cm", "Altura do assento: 55 cm", "Peso: 7 kg", "Capacidade para 100 kg"
    ]
  },
  {
    id: "andador-3-rodas", cat: "marcha", nome: "Andador 3 rodas", marca: "Mobil",
    resumo: "Leve, dobrável e com freio na manopla.",
    destaques: ["Até 1,85 m", "Rodas de 8\"", "Dobrável"],
    specs: [
      "Confeccionado em alumínio", "Pintura eletrostática epóxi", "Totalmente dobrável", "Freios na manopla",
      "Bolso para guardar pertences", "3 rodas de 8\" em PU maciço", "Regulagem de altura do manete de freio",
      "Indicado para pessoas de até 1,85 m"
    ]
  },
  {
    id: "muleta-canadense", cat: "marcha", nome: "Muleta canadense (par)", marca: "Mercur",
    resumo: "Tamanho único, para alturas de 1,45 m a 1,90 m.",
    destaques: ["Par", "1,45 a 1,90 m", "Braçadeira"],
    specs: [
      "Tamanho único, compatível com usuários de 1,45 m a 1,90 m", "Altura mínima: 94 cm", "Contém o par",
      "Braçadeira em polipropileno", "Punho em policloreto de vinila"
    ]
  },
  {
    id: "cama-manual", cat: "camas", nome: "Cama hospitalar manual", marca: "Dellamed",
    resumo: "Dois movimentos, cabeça e pernas. Acompanha colchão.",
    destaques: ["Até 180 kg", "2 movimentos", "Com colchão"],
    specs: [
      "2 pontos de movimento: cabeça e pernas", "Manuseio facilitado",
      "Revestimento protetivo em polímero nas guias do sistema de movimentação",
      "4 rodízios blindados de 3\", com freio de dupla ação", "Estrado articulado em chapa de alta resistência",
      "Estrutura em aço carbono", "Capacidade para até 180 kg", "Acompanha colchão hospitalar",
      "Regulagem de postura", "Dimensões: C 198 × L 98 × A 64 cm (do chão ao leito)"
    ]
  },
  {
    id: "cama-mr441", cat: "camas", nome: "Cama motorizada 3 movimentos MR 441", marca: "Renovar",
    resumo: "Dorso, pernas e elevação por controle remoto. Inclui colchão.",
    destaques: ["Até 160 kg", "6 posições", "Com colchão"],
    specs: [
      "3 movimentos: dorso, perna e elevação", "Dimensões: 1,95 m × 0,95 m", "Altura do leito: de 0,45 m a 0,70 m",
      "Controle remoto com fio", "Pintura epóxi eletrostática a pó", "Motor Phoenix Mecano", "Não acompanha bateria",
      "Capacidade para até 160 kg", "Inclui colchão",
      "6 posições: Fowler, semi-Fowler, sentado, flexão, cardíaco e elevação do leito"
    ]
  },
  {
    id: "cama-mr505", cat: "camas", nome: "Cama motorizada 3 movimentos MR 505", marca: "Renovar",
    resumo: "Mesmos recursos da MR 441, com cabeceiras removíveis.",
    destaques: ["Até 160 kg", "6 posições", "Com colchão"],
    specs: [
      "3 movimentos: dorso, perna e elevação", "Dimensões: 1,95 m × 0,95 m", "Altura do leito: de 0,45 m a 0,70 m",
      "Cabeceiras removíveis injetadas em PU", "Pintura epóxi eletrostática a pó", "Motor Phoenix Mecano",
      "Não acompanha bateria", "Capacidade para até 160 kg", "Inclui colchão",
      "6 posições: Fowler, semi-Fowler, sentado, flexão, cardíaco e elevação do leito"
    ]
  },
  {
    id: "colchao-pneumatico", cat: "camas", nome: "Colchão pneumático inflável", marca: "Zimedical", venda: true,
    resumo: "Para quem passa muitas horas deitado. Disponível para venda.",
    destaques: ["Até 135 kg", "PVC atóxico", "110 V"],
    specs: [
      "Capacidade para até 135 kg", "Material: PVC EN-71 não tóxico",
      "Dimensões inflado: 900 × 2000 × 70 mm", "Peso do colchão: 2 kg", "Voltagem: 110 V"
    ]
  },
  {
    id: "mini-bike", cat: "apoio", nome: "Mini bike", marca: "Acte", venda: true,
    resumo: "Pedaleira dobrável para braços e pernas. Disponível para venda.",
    destaques: ["Até 100 kg", "Dobrável", "Monitor"],
    specs: [
      "Dobrável", "Ajuste de intensidade", "Computador multifunções", "Suporta aproximadamente 100 kg",
      "Medidas: 49 × 41,5 × 34,5 cm (A × C × L)",
      "Ajuda no fortalecimento de braços e pernas, no condicionamento físico e na circulação"
    ]
  },
  {
    id: "disco-giratorio", cat: "apoio", nome: "Disco giratório", marca: "",
    resumo: "Transferência da cama para a cadeira, ou para o carro, com menos esforço.",
    destaques: ["Gira 360°", "Antiderrapante", "32 cm"],
    specs: [
      "Indicado para pessoas com mobilidade reduzida",
      "Facilita a transferência da cama para a cadeira, do sofá para a cadeira ou para o carro",
      "Gira 360° e reduz o risco de quedas e lesões durante a transferência",
      "Base antiderrapante e resistente", "Leve e fácil de transportar", "Material: madeira",
      "Altura: 5 cm · Largura: 32 cm · Profundidade: 32 cm"
    ]
  },
  {
    id: "almofada-giratoria", cat: "apoio", nome: "Almofada giratória", marca: "",
    resumo: "Ajuda a girar o corpo ao sentar e levantar, inclusive no carro.",
    destaques: ["Portátil", "Menos atrito", "32 cm"],
    specs: [
      "Indicada para quem tem movimentos lentos ou dificuldade para girar o corpo sentado",
      "Facilita a rotação ao sentar ou levantar da cadeira ou do carro",
      "Reduz o atrito e o esforço físico, evitando dores e torções", "Compacta, leve e portátil, boa para viagens",
      "Revestimento confortável", "Material: courvin", "Altura: 5 cm · Largura: 32 cm · Profundidade: 32 cm"
    ]
  }
];
