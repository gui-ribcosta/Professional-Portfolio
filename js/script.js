const translations = {
  pt: {
    menuLabel: "Abrir menu",
    brandLabel: "GR, início",
    navigationLabel: "Navegação principal",
    languageSelectorLabel: "Seleção de idioma",
    language: { pt: "Mudar idioma para português", en: "Mudar idioma para inglês", ptTitle: "Português", enTitle: "English" },
    markers: { about: "SOBRE", projects: "PROJETOS SELECIONADOS", contact: "CONTATO" },
    nav: { home: "Página Inicial", projects: "Projetos", about: "Sobre", contact: "Contato" },
    hero: {
      eyebrow: "SOFTWARE ENGINEER · RIO DE JANEIRO, BR",
      title: "Desenvolvendo soluções para <em>problemas reais.</em>",
      lead: "Sou desenvolvedor de software com atuação full stack e foco em C#/.NET. Trabalho no desenvolvimento de aplicações web, APIs e integrações, conectando necessidades de negócio a soluções técnicas confiáveis e sustentáveis.",
      technologies: "C# · .NET · ASP.NET CORE · REACT · TYPESCRIPT",
      primary: "Ver Projetos", secondary: "Baixar Currículo",
      resumeUnavailable: "Adicione um arquivo de currículo para habilitar este botão",
      photoAlt: "Retrato profissional de Guilherme Ribeiro"
    },
    about: {
      eyebrow: "SOBRE MIM - GUILHERME RIBEIRO", title: "Entre o problema real e o código bem pensado.",
      text1: "Sou Guilherme Ribeiro, desenvolvedor de software interessado em construir soluções úteis, sustentáveis e claras para quem vai usá-las.",
      text2: "Minha formação em Análise e Desenvolvimento de Sistemas pelo IBMR sustenta uma prática guiada por curiosidade, colaboração e aprendizado contínuo.",
      more: "Ler mais sobre mim <span aria-hidden=\"true\">→</span>", photoAlt: "Retrato de Guilherme Ribeiro"
    },
    projects: {
      eyebrow: "MEUS MELHORES PROJETOS", title: "Projetos <em>selecionados</em>",
      intro: "Alguns dos trabalhos que representam minha atuação em desenvolvimento de software, produto digital e interfaces.",
      imagePending: "Imagem do projeto em breve", futureImage: "Espaço reservado para novo projeto", linkPending: "Em desenvolvimento", caseLink: 'Abrir case <span class="case-arrow" aria-hidden="true">↗</span>',
      tagsAria: "Tecnologias utilizadas",
      findall: { category: "PROJETO CONFIDENCIAL", label: "PLATAFORMA DE MONITORAMENTO", title: "FindAll", description: "Plataforma voltada ao monitoramento e à rastreabilidade de ativos, integrando tecnologias de IoT para apoiar a coleta, o processamento e a visualização de informações operacionais. O projeto envolve integração entre dispositivos e sistemas, com foco na confiabilidade dos dados e na eficiência dos processos.", imageAlt: "Logo da plataforma FindAll", caseLink: 'Abrir case <span class="case-arrow" aria-hidden="true">↗</span>', cardLink: "Abrir estudo de caso do FindAll" },
      workstation: { category: "PROJETO CONFIDENCIAL | AUTOMAÇÃO", label: "AUTOMAÇÃO DE AMBIENTE WINDOWS", title: "Workstation Kit", description: "Ferramenta em PowerShell para automatizar a configuração e padronização de ambientes Windows.", imageAlt: "Logo do Workstation Kit" },
      flowfin: { category: "APLICAÇÃO FULL STACK / FINANÇAS PESSOAIS", title: "FlowFin", description: "Aplicação full stack para organização e planejamento financeiro, com controle de contas, transações, cartões, orçamentos, metas e projeções. Desenvolvida com backend em .NET e frontend em React e TypeScript.", imageAlt: "Logo do FlowFin", linkPending: "Estudo em desenvolvimento" },
      iot: { category: "RESEARCH / DEVELOPMENT", label: "SISTEMAS CONECTADOS", title: "IoT / P&D", description: "Experiência profissional com sistemas conectados e tecnologias IoT, apresentada apenas em nível público e sem expor informações proprietárias." },
      portfolio: { category: "EXPERIMENT / FRONTEND", label: "ESTUDO DE INTERFACE", title: "Guilherme Ribeiro / Portfolio", description: "O próprio portfólio como estudo de design editorial, narrativa visual e desenvolvimento frontend sem dependências." },
      future: { category: "FUTURE / PROJECT", label: "PRÓXIMA EXPLORAÇÃO", title: "Em construção", description: "Um novo projeto será apresentado aqui quando houver uma solução pública para compartilhar.", tag: "A definir" }
    },
    contact: { eyebrow: "CONTATO / PRÓXIMO CAPÍTULO", title: "Vamos <em>conversar?</em>", lead: "Estou aberto a novas oportunidades, projetos e <em>conexões.</em>", text: "Se você procura alguém interessado em resolver problemas reais com software, engenharia e boas experiências digitais, vamos conversar.", channels: "CANAIS DE CONTATO", email: "E-mail", unavailable: "Adicione seu endereço ou perfil real." },
    caseStudy: { navLabel: "CASE FINDALL", openingEyebrow: "ESTUDO DE CASO · FINDALL IDSENSOR", openingAlt: "Fotografia de apresentação do projeto FindAll", aboutEyebrow: "SOBRE O PROJETO", aboutImageAlt: "Imagem de apresentação do projeto FindAll", aboutTitle: "Visibilidade total do inventário, do armazém à operação.", aboutText1: "O <strong>FindAll</strong> é uma plataforma de gestão e monitoramento de inventário desenvolvida para aumentar a rastreabilidade de materiais, automatizar o controle de estoque e tornar a localização de itens mais rápida e precisa em ambientes operacionais complexos.", aboutText2: "A solução integra tecnologias de <strong>IoT, RFID, BLE e LoRa</strong> para registrar movimentações, acompanhar entradas e saídas e ampliar a visibilidade sobre a localização dos materiais. Com isso, reduz a dependência de processos manuais, facilita a busca por itens e contribui para uma operação logística mais ágil, organizada e confiável.", aboutText3: "O <strong>objetivo</strong> é transformar a gestão de inventário em um processo mais automatizado e rastreável, permitindo que as equipes localizem materiais com maior eficiência, acompanhem movimentações e tenham informações mais precisas para apoiar a tomada de decisão.", role: "Papel", roleValue: "Desenvolvedor Full Stack", work: "Atuação", workValue: "Desenvolvimento e evolução da plataforma", duration: "Duração", durationValue: "Projeto de P&D de longo prazo", collaboration: "Colaboração", collaborationValue: "Produto, Desenvolvimento e equipes operacionais", status: "Status", statusValue: "Em desenvolvimento e evolução contínua", platform: "Plataforma", platformValue: "Sistema web integrado a dispositivos e tecnologias IoT", challengeEyebrow: "DESAFIO E SOLUÇÃO", challengeLabel: "O DESAFIO", challengeTextShort: "Conectar sinais provenientes de diferentes pontos e transformá-los em informação organizada exige atenção à comunicação, à consistência dos dados e aos limites de cada integração.", solutionLabel: "A SOLUÇÃO", solutionTextShort: "A abordagem é descrita de forma conceitual: estruturar o software e as integrações necessárias para apoiar um fluxo mais claro entre dispositivos, serviços e operação, respeitando o escopo autorizado.", eyebrow: "CASE STUDY / 01", category: "IOT · MONITORAMENTO · INTEGRAÇÃO DE SISTEMAS", title: "Conectando dispositivos,<br>dados e <em>operação.</em>", intro: "Uma apresentação conceitual da experiência com o FindAll, preservando informações confidenciais e destacando os problemas de engenharia envolvidos na integração entre sistemas e dispositivos.", visualLabel: "VISÃO CONCEITUAL / FINDALL", overviewEyebrow: "01 / VISÃO GERAL", overviewTitle: "Um sistema pensado para aproximar sinais do mundo real e decisões operacionais.", project: "Projeto", projectValue: "FindAll", segment: "Segmento", segmentValue: "IoT e sistemas de monitoramento", contribution: "Atuação", contributionValue: "Desenvolvimento de software e integração técnica, conforme o escopo público da experiência.", stack: "Tecnologias", stackValue: "C#, .NET, MySQL, RFID, BLE e LoRa", context: "Contexto", contextValue: "Experiência profissional apresentada em nível conceitual, sem expor dados, telas ou arquitetura proprietária.", challengeEyebrow: "02 / O DESAFIO", challengeTitle: "Transformar comunicação distribuída em informação confiável.", challengeText: "Projetos que conectam dispositivos, sistemas e operação exigem mais do que transportar dados. É preciso lidar com diferentes pontos de integração, organizar informações e criar condições para que os registros sejam compreendidos e utilizados com segurança.", challengeNote: "A descrição preserva o nível de abstração necessário para não revelar detalhes internos do projeto.",     contributionEyebrow: "MINHA CONTRIBUIÇÃO", contributionTitle: "Engenharia aplicada ao problema real.", contributionText: "Sou responsável pelo desenvolvimento e pela evolução da plataforma, atuando tanto no backend quanto no frontend. Trabalho na criação de novas funcionalidades e na implementação de melhorias contínuas no sistema, buscando aprimorar seu funcionamento e atender às necessidades da operação.", contributionOneTitle: "Desenvolvimento", contributionOneText: "Desenvolvimento de novas funcionalidades e melhorias no sistema, atuando no backend e no frontend para evoluir a plataforma de acordo com as necessidades do projeto.", contributionTwoTitle: "Testes em campo", contributionTwoText: "Realização de testes em campo para validar as funcionalidades em condições reais de uso. Acompanhamento da utilização do sistema pelo cliente, identificação de dificuldades operacionais e levantamento de oportunidades de melhoria para orientar a evolução da plataforma.", contributionThreeTitle: "Diagnóstico", contributionThreeText: "Análise de comportamentos, investigação de falhas e validação de ajustes técnicos.", architectureEyebrow: "04 / TECNOLOGIA E ARQUITETURA", architectureTitle: "Uma leitura simplificada do ecossistema.", architectureText: "A representação abaixo é conceitual. Ela mostra relações gerais entre dispositivos, serviços e dados, sem reproduzir topologia, endpoints ou fluxos internos.", devices: "DISPOSITIVOS", service: "SERVIÇO DE SOFTWARE", data: "DADOS OPERACIONAIS", learningEyebrow: "05 / APRENDIZADOS", learningTitle: "O que este projeto reforçou.", learningOneTitle: "Confiabilidade", learningOneText: "Dados úteis dependem de fluxos consistentes, validação e atenção aos casos de falha.", learningTwoTitle: "Integração", learningTwoText: "Sistemas conectados exigem contratos claros e observação cuidadosa das fronteiras entre componentes.", learningThreeTitle: "Manutenção", learningThreeText: "Uma solução sustentável precisa ser compreensível, diagnosticável e aberta a evolução.", closingEyebrow: "PRÓXIMO CAPÍTULO", closingTitle: "Mais contexto, menos ruído.", closingText: "O FindAll representa uma experiência de engenharia construída com responsabilidade, colaboração e atenção aos detalhes que tornam sistemas reais mais confiáveis.", back: "Voltar aos projetos ↗", next: "Próximo projeto em breve" },
    footer: { rights: "Guilherme Ribeiro", role: "Software Engineer", quote: "“Tecnologia é qualquer coisa que não<br>existia quando você nasceu.”", reserved: "Todos os direitos reservados.", back: "Voltar ao topo", instagramUnavailable: "Instagram indisponível: adicione o perfil real.", whatsappUnavailable: "WhatsApp indisponível: adicione o número real.", emailUnavailable: "E-mail indisponível: adicione o endereço real." }
  },
  en: {
    menuLabel: "Open menu",
    brandLabel: "GR, home",
    navigationLabel: "Main navigation",
    languageSelectorLabel: "Language selection",
    language: { pt: "Switch language to Portuguese", en: "Switch language to English", ptTitle: "Português", enTitle: "English" },
    markers: { about: "ABOUT", projects: "SELECTED WORK", contact: "CONTACT" },
    nav: { home: "Home", projects: "Projects", about: "About", contact: "Contact" },
    hero: {
      eyebrow: "SOFTWARE ENGINEER · RIO DE JANEIRO, BR",
      title: "Building solutions for <em>real-world problems.</em>",
      lead: "I'm a full-stack software developer focused on C#/.NET. I work on web applications, APIs, and integrations, connecting business needs with reliable, maintainable technical solutions.",
      technologies: "C# · .NET · ASP.NET CORE · REACT · TYPESCRIPT",
      primary: "View Projects", secondary: "Download Resume",
      resumeUnavailable: "Add a resume file to enable this button",
      photoAlt: "Professional portrait of Guilherme Ribeiro"
    },
    about: {
      eyebrow: "ABOUT ME - GUILHERME RIBEIRO", title: "Between the real problem and well-thought code.",
      text1: "I’m Guilherme Ribeiro, a software developer interested in building useful, sustainable and clear solutions for the people who use them.",
      text2: "My degree in Systems Analysis and Development from IBMR supports a practice guided by curiosity, collaboration and continuous learning.",
      more: "Read more about me <span aria-hidden=\"true\">→</span>", photoAlt: "Portrait of Guilherme Ribeiro"
    },
    projects: {
      eyebrow: "MY BEST PROJECTS", title: "Selected <em>projects</em>",
      intro: "A selection of work representing my practice in software development, digital products and interfaces.",
      imagePending: "Project image coming soon", futureImage: "Reserved space for a future project", linkPending: "In development", caseLink: 'Open case <span class="case-arrow" aria-hidden="true">↗</span>',
      tagsAria: "Technologies used",
      findall: { category: "CONFIDENTIAL PROJECT", label: "MONITORING PLATFORM", title: "FindAll", description: "A platform focused on asset monitoring and traceability, integrating IoT technologies to support the collection, processing and visualization of operational information. The project involves integration between devices and systems, with a focus on data reliability and process efficiency.", imageAlt: "FindAll platform logo", caseLink: 'Open case <span class="case-arrow" aria-hidden="true">↗</span>', cardLink: "Open the FindAll case study" },
      workstation: { category: "CONFIDENTIAL PROJECT | AUTOMATION", label: "WINDOWS DEVELOPMENT ENVIRONMENT AUTOMATION", title: "Workstation Kit", description: "PowerShell tool to automate the configuration and standardization of Windows environments.", imageAlt: "Workstation Kit logo" },
      flowfin: { category: "FULL-STACK APPLICATION / PERSONAL FINANCE", title: "FlowFin", description: "Full-stack personal finance application for managing accounts, transactions, credit cards, budgets, goals, and financial projections. Built with a .NET backend and a React and TypeScript frontend.", imageAlt: "FlowFin logo", linkPending: "Case study in development" },
      iot: { category: "RESEARCH / DEVELOPMENT", label: "CONNECTED SYSTEMS", title: "IoT / R&D", description: "Professional experience with connected systems and IoT technologies, presented only at a public level without exposing proprietary information." },
      portfolio: { category: "EXPERIMENT / FRONTEND", label: "INTERFACE STUDY", title: "Guilherme Ribeiro / Portfolio", description: "The portfolio itself as a study in editorial design, visual narrative and dependency-free frontend development." },
      future: { category: "FUTURE / PROJECT", label: "NEXT EXPLORATION", title: "In progress", description: "A new project will be presented here when there is a public solution to share.", tag: "To define" }
    },
    contact: { eyebrow: "CONTACT / NEXT CHAPTER", title: "Let's <em>talk?</em>", lead: "I’m open to new opportunities, projects and <em>connections.</em>", text: "If you are looking for someone interested in solving real problems with software, engineering and thoughtful digital experiences, let's talk.", channels: "CONTACT CHANNELS", email: "Email", unavailable: "Add your real address or profile." },
    caseStudy: { navLabel: "FINDALL CASE", openingEyebrow: "FINDALL IDSENSOR · CASE STUDY", openingAlt: "FindAll project presentation photograph", aboutEyebrow: "ABOUT THE PROJECT", aboutImageAlt: "FindAll project presentation image", aboutTitle: "Total inventory visibility, from warehouse to operations.", aboutText1: "<strong>FindAll</strong> is an inventory management and monitoring platform designed to increase material traceability, automate stock control and make item location faster and more precise in complex operational environments.", aboutText2: "The solution integrates <strong>IoT, RFID, BLE and LoRa</strong> technologies to record movements, track entries and exits and expand visibility over material locations. This reduces reliance on manual processes, makes item searches easier and contributes to a more agile, organized and reliable logistics operation.", aboutText3: "The <strong>objective</strong> is to turn inventory management into a more automated and traceable process, allowing teams to locate materials more efficiently, follow movements and access more accurate information to support decisions.", role: "Role", roleValue: "Full Stack Developer", work: "Contribution", workValue: "Platform development and evolution", duration: "Duration", durationValue: "Long-term R&D project", collaboration: "Collaboration", collaborationValue: "Product, Development and operational teams", status: "Status", statusValue: "Under continuous development and evolution", platform: "Platform", platformValue: "Web system integrated with devices and IoT technologies", challengeEyebrow: "CHALLENGE AND APPROACH", challengeLabel: "THE CHALLENGE", challengeTextShort: "Connecting signals from different points and turning them into organized information requires attention to communication, data consistency and the boundaries of each integration.", solutionLabel: "THE APPROACH", solutionTextShort: "The approach is described conceptually: structuring the software and integrations needed to support a clearer flow between devices, services and operations while respecting the authorized scope.", eyebrow: "CASE STUDY / 01", category: "IOT · MONITORING · SYSTEMS INTEGRATION", title: "Connecting devices,<br>data and <em>operations.</em>", intro: "A conceptual presentation of my FindAll experience, preserving confidential information while highlighting the engineering problems involved in connecting systems and devices.", visualLabel: "CONCEPTUAL VIEW / FINDALL", overviewEyebrow: "01 / OVERVIEW", overviewTitle: "A system designed to bring real-world signals closer to operational decisions.", project: "Project", projectValue: "FindAll", segment: "Segment", segmentValue: "IoT and monitoring systems", contribution: "Contribution", contributionValue: "Software development and technical integration within the public scope of the experience.", stack: "Technology", stackValue: "C#, .NET, MySQL, RFID, BLE and LoRa", context: "Context", contextValue: "Professional experience presented conceptually, without exposing data, screens or proprietary architecture.", challengeEyebrow: "02 / THE CHALLENGE", challengeTitle: "Turning distributed communication into reliable information.", challengeText: "Projects that connect devices, systems and operations require more than moving data. They require handling integration points, organizing information and creating conditions for records to be understood and used safely.", challengeNote: "The description remains abstract enough to avoid revealing internal project details.",     contributionEyebrow: "MY CONTRIBUTION", contributionTitle: "Engineering applied to a real problem.", contributionText: "I am responsible for the platform's development and evolution, working across both backend and frontend. I create new features and implement continuous improvements to enhance the system and meet operational needs.", contributionOneTitle: "Development", contributionOneText: "Developing new features and system improvements across backend and frontend to evolve the platform according to the project's needs.", contributionTwoTitle: "Field testing", contributionTwoText: "Conducting field tests to validate features under real-world conditions. Following the client's use of the system, identifying operational difficulties and gathering improvement opportunities to guide the platform's evolution.", contributionThreeTitle: "Diagnosis", contributionThreeText: "Analyzing behavior, investigating failures and validating technical adjustments.", architectureEyebrow: "04 / TECHNOLOGY AND ARCHITECTURE", architectureTitle: "A simplified view of the ecosystem.", architectureText: "The diagram below is conceptual. It shows general relationships between devices, services and data without reproducing topology, endpoints or internal flows.", devices: "DEVICES", service: "SOFTWARE SERVICE", data: "OPERATIONAL DATA", learningEyebrow: "05 / LEARNINGS", learningTitle: "What this project reinforced.", learningOneTitle: "Reliability", learningOneText: "Useful data depends on consistent flows, validation and attention to failure cases.", learningTwoTitle: "Integration", learningTwoText: "Connected systems require clear contracts and careful observation of component boundaries.", learningThreeTitle: "Maintainability", learningThreeText: "A sustainable solution must be understandable, diagnosable and ready to evolve.", closingEyebrow: "NEXT CHAPTER", closingTitle: "More context, less noise.", closingText: "FindAll represents an engineering experience built with responsibility, collaboration and attention to the details that make real systems more reliable.", back: "Back to projects ↗", next: "Next project coming soon" },
    footer: { rights: "Guilherme Ribeiro", role: "Software Engineer", quote: "“Technology is anything that<br>wasn’t around when you were born.”", reserved: "All rights reserved.", back: "Back to top", instagramUnavailable: "Instagram unavailable: add the real profile.", whatsappUnavailable: "WhatsApp unavailable: add the real number.", emailUnavailable: "Email unavailable: add the real address." }
  }
};

translations.pt.caseStudy.closingText = "Tecnologia e conectividade para uma gestão de inventário mais eficiente.";
translations.pt.caseStudy.back = "Voltar à página inicial";
translations.en.caseStudy.closingText = "Technology and connectivity for more efficient inventory management.";
translations.en.caseStudy.back = "Back to homepage";
translations.pt.caseChallenge = {
  eyebrow: "DESAFIO E SOLUÇÃO",
  challengeTitle: "O desafio",
  challengeOneTitle: "Localizar materiais com agilidade",
  challengeOneText: "A busca por itens nos armazéns era demorada e dificultava o atendimento às demandas operacionais.",
  challengeTwoTitle: "Garantir a rastreabilidade",
  challengeTwoText: "Era necessário acompanhar a localização e a movimentação dos materiais com maior precisão.",
  challengeThreeTitle: "Controlar entradas e saídas",
  challengeThreeText: "O controle do inventário exigia mais automação e confiabilidade no registro das movimentações.",
  challengeFourTitle: "Monitorar diferentes tipos de itens",
  challengeFourText: "Era preciso integrar tecnologias de identificação e localização para atender a diferentes necessidades operacionais.",
  solutionTitle: "A solução",
  solutionOneTitle: "Identificação por RFID",
  solutionOneText: "Identificação automatizada de materiais por meio de tags RFID.",
  solutionTwoTitle: "Leitura por portais BLE",
  solutionTwoText: "Reconhecimento de itens ao passarem por pontos monitorados do armazém.",
  solutionThreeTitle: "Rastreamento com LoRa",
  solutionThreeText: "Monitoramento de itens de maior valor com dispositivos de localização integrados a GPS.",
  solutionFourTitle: "Controle de movimentações",
  solutionFourText: "Registro integrado de entradas, saídas e movimentações do estoque.",
  solutionFiveTitle: "Inventário centralizado",
  solutionFiveText: "Informações de estoque e rastreabilidade reunidas em uma única plataforma.",
  solutionSixTitle: "Mais agilidade operacional",
  solutionSixText: "Localização mais eficiente de materiais para acelerar a separação e o envio de itens."
};
translations.en.caseChallenge = {
  eyebrow: "CHALLENGE AND SOLUTION",
  challengeTitle: "The challenge",
  challengeOneTitle: "Locate materials efficiently",
  challengeOneText: "Searching for items in warehouses was time-consuming and made it harder to respond to operational demands.",
  challengeTwoTitle: "Ensure traceability",
  challengeTwoText: "It was necessary to follow the location and movement of materials with greater precision.",
  challengeThreeTitle: "Control entries and exits",
  challengeThreeText: "Inventory control required more automation and reliability when recording movements.",
  challengeFourTitle: "Monitor different item types",
  challengeFourText: "Identification and location technologies needed to work together for different operational needs.",
  solutionTitle: "The solution",
  solutionOneTitle: "RFID identification",
  solutionOneText: "Automated material identification through RFID tags.",
  solutionTwoTitle: "BLE portal reading",
  solutionTwoText: "Item recognition as materials pass through monitored warehouse points.",
  solutionThreeTitle: "LoRa tracking",
  solutionThreeText: "Monitoring higher-value items with location devices integrated with GPS.",
  solutionFourTitle: "Movement control",
  solutionFourText: "Integrated recording of inventory entries, exits and movements.",
  solutionFiveTitle: "Centralized inventory",
  solutionFiveText: "Inventory and traceability information gathered in a single platform.",
  solutionSixTitle: "Greater operational agility",
  solutionSixText: "More efficient material location to speed up item separation and shipping."
};
translations.pt.aboutPage = {
  pageTitle: "Sobre mim | Guilherme Ribeiro",
  navLabel: "SOBRE MIM",
  eyebrow: 'SOBRE MIM · <span class="about-name">GUILHERME RIBEIRO</span>',
  title: "Por trás do código, existe uma forma de <em>pensar.</em>",
  intro: "Sou desenvolvedor de software com atuação full stack e foco em C#/.NET. Trabalho no desenvolvimento de aplicações web, APIs e integrações, conectando necessidades de negócio a soluções técnicas confiáveis e sustentáveis.",
  introTwo: "Minha experiência combina evolução de aplicações, integração entre sistemas e contato com necessidades operacionais reais. Procuro entender o problema, validar o comportamento e construir soluções que possam continuar evoluindo.",
  location: "RIO DE JANEIRO, BRASIL",
  profileMark: "GR / PERFIL",
  journeyEyebrow: "01 / TRAJETÓRIA",
  journeyTitle: "Uma trajetória em construção.",
  journeyIntro: "Minha evolução profissional acontece na prática: estudando, desenvolvendo, testando e entendendo melhor os problemas que a tecnologia pode resolver.",
  professionalCardTitle: "Experiência profissional",
  professionalCardText: "Minha experiência com desenvolvimento de software, projetos reais e soluções construídas para necessidades concretas.",
  educationCardTitle: "Formação acadêmica",
  educationCardText: "Minha formação em tecnologia e os conhecimentos que venho desenvolvendo por meio de estudos contínuos.",
  professionalPanelLabel: "EXPERIÊNCIA PROFISSIONAL",
  educationPanelLabel: "FORMAÇÃO ACADÊMICA",
  closeDetails: "Fechar detalhes",
  dagatRole: "Desenvolvedor de software — atuação full stack.",
  dagatText: "Na Dagat Smart, atuo no desenvolvimento e na evolução de soluções tecnológicas e IoT. Implemento e mantenho funcionalidades backend e frontend, integro APIs e bancos de dados, participo de testes e investigo problemas para apoiar a evolução das aplicações.",
  findallTitle: "Projeto FindAll",
  findallRole: "Projeto integrado · Dagat Smart",
  findallText: "No FindAll, participo do desenvolvimento e da evolução de uma plataforma de rastreabilidade e monitoramento de ativos. Minha atuação envolve funcionalidades web, integrações entre sistemas e dispositivos, APIs, persistência de dados, testes e validações em contato com requisitos operacionais reais, sem expor informações internas do projeto.",
  educationDegree: "Análise e Desenvolvimento de Sistemas · IBMR · concluído em 2026",
  formationDetailText: "Formação voltada ao desenvolvimento de software, lógica de programação, bancos de dados e fundamentos necessários para projetar e construir sistemas.",
  complementaryTitle: "Cursos e estudos complementares",
  cc50Course: "CC50 — Introdução à Ciência da Computação · Harvard",
  cc50Description: "Curso de introdução à ciência da computação de Harvard, abrangendo fundamentos de programação, lógica e algoritmos para resolução de problemas.",
  formationTitle: "Formação",
  approachEyebrow: "02 / ABORDAGEM",
  approachTitle: "Não é só sobre escrever código.",
  understandTitle: "Entender antes de construir",
  understandText: "Procuro compreender o problema, o contexto e a necessidade por trás de cada funcionalidade antes de pensar na implementação.",
  intentionTitle: "Construir com intenção",
  intentionText: "Busco desenvolver soluções organizadas, compreensíveis e sustentáveis, considerando tanto o funcionamento técnico quanto a experiência de quem utiliza o sistema.",
  evolveTitle: "Evoluir na prática",
  evolveText: "Validação, testes e melhoria contínua fazem parte do processo. Entender o que funciona e o que precisa melhorar é essencial para evoluir uma solução.",
  technicalEyebrow: "03 / UNIVERSO TÉCNICO",
  technicalTitle: "Ferramentas para transformar ideias em sistemas.",
  backend: "Backend",
  backendDescription: "A parte que processa informações, aplica regras e faz a aplicação funcionar por trás da interface.",
  frontend: "Frontend",
  frontendDescription: "A parte visual com a qual as pessoas interagem: páginas, formulários, painéis e funcionalidades.",
  dataInfrastructure: "Dados e infraestrutura",
  dataInfrastructureDescription: "Tecnologias para persistência de dados, versionamento e preparação de aplicações para desenvolvimento e execução.",
  tooling: "Ferramentas e integração",
  toolingDescription: "Ferramentas e práticas para integrar serviços, automatizar rotinas e acompanhar a evolução do software.",
  iot: "IoT e conectividade",
  iotDescription: "Tecnologias que ajudam sistemas a identificar objetos, trocar informações e acompanhar materiais no mundo físico.",
  technicalNote: "Experiência concentrada em backend .NET, desenvolvimento full stack, dados e integração de sistemas.",
  futureEyebrow: "04 / PRÓXIMOS PASSOS",
  futureTitle: "Evoluir é parte do trabalho.",
  futureText: "Quero aprofundar meus conhecimentos em engenharia de software, fortalecer minha capacidade de projetar e implementar soluções de ponta a ponta e assumir desafios cada vez mais complexos. Meu objetivo é continuar evoluindo tecnicamente, contribuindo com produtos relevantes e ampliando minha atuação em equipes de tecnologia.",
  closingEyebrow: "PRÓXIMO CAPÍTULO",
  closingTitle: "Boas ideias começam com boas conversas.",
  closingText: "Estou aberto a oportunidades profissionais, projetos e conexões com pessoas que gostam de construir soluções relevantes.",
  projectsButton: "Conhecer meus projetos",
  contactButton: "Entrar em contato",
  homeButton: "Voltar à página inicial",
  photoAlt: "Retrato profissional de Guilherme Ribeiro"
};
translations.en.aboutPage = {
  pageTitle: "About me | Guilherme Ribeiro",
  navLabel: "ABOUT ME",
  eyebrow: 'ABOUT ME · <span class="about-name">GUILHERME RIBEIRO</span>',
  title: "Behind the code, there is a way to <em>think.</em>",
  intro: "I'm a full-stack software developer focused on C#/.NET. I work on web applications, APIs, and integrations, connecting business needs with reliable, maintainable technical solutions.",
  introTwo: "My experience combines application evolution, system integration and contact with real operational needs. I try to understand the problem, validate behavior and build solutions that can keep evolving.",
  location: "RIO DE JANEIRO, BRAZIL",
  profileMark: "GR / PROFILE",
  journeyEyebrow: "01 / JOURNEY",
  journeyTitle: "A path still taking shape.",
  journeyIntro: "My professional growth happens in practice: studying, developing, testing and understanding more clearly the problems technology can solve.",
  professionalCardTitle: "Professional experience",
  professionalCardText: "My experience with software development, real projects and solutions built for concrete needs.",
  educationCardTitle: "Academic background",
  educationCardText: "My technology education and the knowledge I continue to develop through ongoing study.",
  professionalPanelLabel: "PROFESSIONAL EXPERIENCE",
  educationPanelLabel: "ACADEMIC BACKGROUND",
  closeDetails: "Close details",
  dagatRole: "Software developer — full stack work.",
  dagatText: "At Dagat Smart, I work on the development and evolution of technology and IoT solutions. I implement and maintain backend and frontend features, integrate APIs and databases, participate in testing and investigate problems to support application evolution.",
  findallTitle: "FindAll Project",
  findallRole: "Integrated project · Dagat Smart",
  findallText: "On FindAll, I contribute to the development and evolution of an asset traceability and monitoring platform. My work involves web features, integrations between systems and devices, APIs, data persistence, testing and validation against real operational requirements, without exposing internal project information.",
  educationDegree: "Systems Analysis and Development · IBMR · completed in 2026",
  formationDetailText: "Education focused on software development, programming logic, databases and the foundations needed to design and build systems.",
  complementaryTitle: "Courses and complementary studies",
  cc50Course: "CS50 — Introduction to Computer Science · Harvard",
  cc50Description: "Harvard's introductory computer science course, covering foundations of programming, logic and algorithmic problem-solving.",
  formationTitle: "Education",
  approachEyebrow: "02 / APPROACH",
  approachTitle: "It is not only about writing code.",
  understandTitle: "Understand before building",
  understandText: "I try to understand the problem, context and need behind each feature before thinking about implementation.",
  intentionTitle: "Build with intention",
  intentionText: "I aim to develop organized, understandable and sustainable solutions, considering both technical behavior and the experience of the people who use them.",
  evolveTitle: "Evolve through practice",
  evolveText: "Validation, testing and continuous improvement are part of the process. Understanding what works and what needs to improve is essential to evolve a solution.",
  technicalEyebrow: "03 / TECHNICAL UNIVERSE",
  technicalTitle: "Tools for turning ideas into systems.",
  backend: "Backend",
  backendDescription: "The part that processes information, applies rules and makes an application work behind the interface.",
  frontend: "Frontend",
  frontendDescription: "The visual part people interact with: pages, forms, dashboards and features.",
  dataInfrastructure: "Data and infrastructure",
  dataInfrastructureDescription: "Technologies for data persistence, version control and preparing applications for development and execution.",
  tooling: "Tools and integration",
  toolingDescription: "Tools and practices for integrating services, automating routines and supporting software evolution.",
  iot: "IoT & connectivity",
  iotDescription: "Technologies that help systems identify objects, exchange information and track materials in the physical world.",
  technicalNote: "Experience focused on .NET backend, full-stack development, data and system integration.",
  futureEyebrow: "04 / NEXT STEPS",
  futureTitle: "Evolving is part of the work.",
  futureText: "I want to deepen my software engineering knowledge, strengthen my ability to design and implement end-to-end solutions and take on increasingly complex challenges. My goal is to keep growing technically, contribute to relevant products and expand my work within technology teams.",
  closingEyebrow: "NEXT CHAPTER",
  closingTitle: "Good ideas start with good conversations.",
  closingText: "I am open to professional opportunities, projects and connections with people who enjoy building meaningful solutions.",
  projectsButton: "Explore my projects",
  contactButton: "Get in touch",
  homeButton: "Back to homepage",
  photoAlt: "Professional portrait of Guilherme Ribeiro"
};

translations.pt.workstationCase = {
  pageTitle: "Workstation Kit | Case Study — Guilherme Ribeiro",
  openingEyebrow: "ESTUDO DE CASO · WORKSTATION KIT",
  openingAlt: "Apresentação do projeto Workstation Kit",
  aboutEyebrow: "SOBRE O PROJETO",
  aboutTitle: "Workstation Kit: automação e padronização para ambientes Windows.",
  aboutImageAlt: "Imagem do projeto Workstation Kit",
  aboutText1: "O <strong>Workstation Kit</strong> é uma solução desenvolvida em PowerShell voltada para a automação da configuração, instalação e padronização de ambientes de trabalho Windows.",
  aboutText2: "A ferramenta orquestra rotinas automatizadas com <strong>PowerShell, WinGet, Pester, Inno Setup e JSON</strong>, reduzindo o tempo de preparação de máquinas e garantindo consistência técnica em ambientes de desenvolvimento.",
  aboutText3: "O <strong>objetivo</strong> é substituir procedimentos manuais repetitivos por uma execução rápida, confiável e modular, permitindo provisionar uma estação de trabalho completa em poucos minutos.",
  role: "Papel",
  roleValue: "Desenvolvedor",
  work: "Atuação",
  workValue: "Automação, scripts e empacotamento",
  duration: "Duração",
  durationValue: "Projeto contínuo",
  collaboration: "Colaboração",
  collaborationValue: "Projeto individual / Engenharia",
  status: "Status",
  statusValue: "Em evolução contínua",
  platform: "Plataforma",
  platformValue: "Windows, PowerShell e WinGet",
  challengeEyebrow: "DESAFIO E SOLUÇÃO",
  challengeTitle: "O desafio",
  challengeOneTitle: "Configuração manual demorada",
  challengeOneText: "A instalação manual de programas e dependências em novos computadores consome tempo e é propensa a inconsistências.",
  challengeTwoTitle: "Falta de padronização",
  challengeTwoText: "Diferentes máquinas acabam com versões incompatíveis de ferramentas, variáveis de ambiente e preferências.",
  challengeThreeTitle: "Manutenção e atualizações",
  challengeThreeText: "Atualizar ferramentas em múltiplos computadores exige rotinas manuais sem um fluxo automatizado e centralizado.",
  challengeFourTitle: "Reprodutibilidade de ambiente",
  challengeFourText: "Recriar um ambiente de desenvolvimento idêntico em caso de formatação ou troca de máquina é demorado e trabalhoso.",
  solutionTitle: "A solução",
  solutionOneTitle: "Instalação automatizada via WinGet",
  solutionOneText: "Gerenciamento e download automático de pacotes e ferramentas de forma silenciosa e padronizada.",
  solutionTwoTitle: "Scripts modulares em PowerShell",
  solutionTwoText: "Estrutura dividida em módulos independentes e configuráveis para cada etapa do setup do sistema.",
  solutionThreeTitle: "Configuração via arquivo JSON",
  solutionThreeText: "Definição declarativa das aplicações, ferramentas e preferências a serem instaladas em cada perfil de máquina.",
  solutionFourTitle: "Testes automatizados com Pester",
  solutionFourText: "Validação de pré-requisitos, testes de idempotência e integridade das configurações aplicadas.",
  solutionFiveTitle: "Empacotamento com Inno Setup",
  solutionFiveText: "Criação de instalador executável para facilitar a distribuição e a execução guiada das rotinas de configuração.",
  solutionSixTitle: "Mais produtividade e consistência",
  solutionSixText: "Ambiente pronto para uso rapidamente, com total consistência, segurança e previsibilidade operacional.",
  contributionEyebrow: "MINHA CONTRIBUIÇÃO",
  contributionTitle: "Engenharia e automação aplicadas.",
  contributionText: "Responsável pela concepção da ferramenta, arquitetura dos scripts em PowerShell, definição dos fluxos de empacotamento e criação dos testes automatizados.",
  contributionOneTitle: "Arquitetura e Scripts",
  contributionOneText: "Desenvolvimento de funções modulares e idempotentes em PowerShell para provisionamento seguro e reproduzível.",
  contributionTwoTitle: "Empacotamento e Entrega",
  contributionTwoText: "Configuração de rotinas com Inno Setup para geração de instalador executável e integração direta com o WinGet.",
  contributionThreeTitle: "Qualidade e Testes",
  contributionThreeText: "Implementação de suíte de testes com Pester para validação contínua da integridade e assertividade das execuções.",
  closingText: "Automação e consistência para acelerar a configuração de ambientes Windows.",
  back: "Voltar à página inicial"
};

translations.en.workstationCase = {
  pageTitle: "Workstation Kit | Case Study — Guilherme Ribeiro",
  openingEyebrow: "CASE STUDY · WORKSTATION KIT",
  openingAlt: "Workstation Kit project presentation",
  aboutEyebrow: "ABOUT THE PROJECT",
  aboutTitle: "Workstation Kit: automation and standardization for Windows environments.",
  aboutImageAlt: "Workstation Kit project image",
  aboutText1: "<strong>Workstation Kit</strong> is a PowerShell-based solution developed to automate the setup, installation and standardization of Windows work environments.",
  aboutText2: "The tool orchestrates automated routines using <strong>PowerShell, WinGet, Pester, Inno Setup and JSON</strong>, reducing machine setup time and ensuring technical consistency across development environments.",
  aboutText3: "The <strong>goal</strong> is to replace repetitive manual steps with fast, reliable, and modular execution, allowing a complete workstation to be provisioned in minutes.",
  role: "Role",
  roleValue: "Developer",
  work: "Contribution",
  workValue: "Automation, scripting and packaging",
  duration: "Duration",
  durationValue: "Ongoing project",
  collaboration: "Collaboration",
  collaborationValue: "Individual project / Engineering",
  status: "Status",
  statusValue: "Under continuous evolution",
  platform: "Platform",
  platformValue: "Windows, PowerShell and WinGet",
  challengeEyebrow: "CHALLENGE AND SOLUTION",
  challengeTitle: "The challenge",
  challengeOneTitle: "Time-consuming manual setup",
  challengeOneText: "Manual installation of software and dependencies on new machines is tedious and prone to operational errors.",
  challengeTwoTitle: "Lack of standardization",
  challengeTwoText: "Different machines often end up with mismatched tool versions, environment variables and conflicting configurations.",
  challengeThreeTitle: "Maintenance and updates",
  challengeThreeText: "Updating tools across multiple machines requires manual effort without a centralized automated flow.",
  challengeFourTitle: "Environment reproducibility",
  challengeFourText: "Recreating an identical development environment after formatting or getting a new machine is slow and complex.",
  solutionTitle: "The solution",
  solutionOneTitle: "Automated installation via WinGet",
  solutionOneText: "Automated and silent package management and installation across tools and utilities.",
  solutionTwoTitle: "Modular PowerShell scripts",
  solutionTwoText: "Structured into independent and configurable modules for each stage of system setup.",
  solutionThreeTitle: "Configuration via JSON manifest",
  solutionThreeText: "Declarative definition of applications, tools and preferences for each machine profile.",
  solutionFourTitle: "Automated testing with Pester",
  solutionFourText: "Validation of prerequisites, idempotency tests and overall integrity of applied configurations.",
  solutionFiveTitle: "Packaging with Inno Setup",
  solutionFiveText: "Creation of an executable installer for simplified distribution and guided execution.",
  solutionSixTitle: "Higher productivity and consistency",
  solutionSixText: "Workstations ready for use rapidly, with full consistency, safety and operational predictability.",
  contributionEyebrow: "MY CONTRIBUTION",
  contributionTitle: "Engineering and automation applied.",
  contributionText: "Responsible for tool conception, PowerShell script architecture, packaging workflows definition and automated testing.",
  contributionOneTitle: "Architecture & Scripting",
  contributionOneText: "Development of modular and idempotent PowerShell functions for safe and reproducible provisioning.",
  contributionTwoTitle: "Packaging & Delivery",
  contributionTwoText: "Setup of Inno Setup routines to build executable installers and integrate directly with WinGet.",
  contributionThreeTitle: "Quality & Testing",
  contributionThreeText: "Implementation of automated test suites with Pester to validate execution integrity.",
  closingText: "Automation and consistency to speed up Windows environment setup.",
  back: "Back to homepage"
};

const getNestedValue = (object, path) => path.split(".").reduce((value, key) => value?.[key], object);
const navigationLinks = [...document.querySelectorAll(".main-nav a")];
const navigationSections = navigationLinks
  .map((link) => {
    const url = new URL(link.href, document.baseURI);
    const section = url.hash ? document.querySelector(url.hash) : null;
    return section ? { link, section } : null;
  })
  .filter(Boolean);
let pendingNavigation = null;
const setActiveLink = (activeLink) => {
  navigationLinks.forEach((link) => {
    const isActive = link === activeLink;
    link.classList.toggle("is-active", isActive);
    if (isActive) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
};
const setHomeNavigationActive = () => {
  if (navigationLinks.length) {
    setActiveLink(navigationLinks[0]);
  }
};
const updateActiveNavigationFromScroll = () => {
  if (!navigationSections.length) return;
  if (pendingNavigation) return;
  const headerHeight = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-height")) || 72;
  const anchorLine = headerHeight + 50;
  if (window.scrollY <= 15) {
    setHomeNavigationActive();
    return;
  }
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
    const lastItem = navigationSections[navigationSections.length - 1];
    if (lastItem) {
      setActiveLink(lastItem.link);
      return;
    }
  }
  const current = navigationSections.reduce((active, item) => {
    const top = item.section.getBoundingClientRect().top;
    if (top <= anchorLine && (!active || top > active.top)) return { ...item, top };
    return active;
  }, null);
  if (current) {
    setActiveLink(current.link);
  } else {
    setHomeNavigationActive();
  }
};
const applyLanguage = (language) => {
  const dictionary = translations[language];
  document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = getNestedValue(dictionary, element.dataset.i18n) ?? dictionary[element.dataset.i18n];
    if (value !== undefined) element.innerHTML = value;
  });
  document.querySelectorAll("[data-language]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.language === language);
    button.setAttribute("aria-pressed", String(button.dataset.language === language));
    button.setAttribute("aria-label", getNestedValue(dictionary, button.dataset.languageLabel));
    button.setAttribute("title", getNestedValue(dictionary, button.dataset.languageTitle));
  });
  const brand = document.querySelector("[data-brand-label]");
  const nav = document.querySelector("[data-nav-label]");
  const languageSwitcher = document.querySelector("[data-language-switcher-label]");
  const titledElement = document.querySelector("[data-i18n-title]");
  if (brand) brand.setAttribute("aria-label", dictionary.brandLabel);
  if (nav) nav.setAttribute("aria-label", dictionary.navigationLabel);
  if (languageSwitcher) languageSwitcher.setAttribute("aria-label", dictionary.languageSelectorLabel);
  if (titledElement) titledElement.setAttribute("title", getNestedValue(dictionary, titledElement.dataset.i18nTitle));
  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    element.setAttribute("alt", getNestedValue(dictionary, element.dataset.i18nAlt));
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", getNestedValue(dictionary, element.dataset.i18nAria));
  });
  localStorage.setItem("portfolio-language", language);
  if (navigationSections.length) updateActiveNavigationFromScroll();
};

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
  mainNav.addEventListener("click", (event) => {
    const link = event.target instanceof Element ? event.target.closest("a") : null;
    if (!link) return;
    const url = new URL(link.href, document.baseURI);
    const hash = url.hash;
    const target = hash ? document.querySelector(hash) : null;
    const isSamePage = url.origin === window.location.origin && url.pathname.replace(/\/index\.html$/, "/") === window.location.pathname.replace(/\/index\.html$/, "/");

    mainNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");

    if (isSamePage && target && hash) {
      event.preventDefault();
      pendingNavigation = { link, section: target };
      setActiveLink(link);
      target.scrollIntoView({ behavior: "smooth" });
      if (history.pushState) {
        history.pushState(null, "", hash);
      } else {
        window.location.hash = hash;
      }
      setTimeout(() => {
        pendingNavigation = null;
        updateActiveNavigationFromScroll();
      }, 600);
    }
  });
}
let scrollUpdateFrame = 0;
if (navigationSections.length) {
  window.addEventListener("scroll", () => {
    if (scrollUpdateFrame) return;
    scrollUpdateFrame = window.requestAnimationFrame(() => {
      scrollUpdateFrame = 0;
      updateActiveNavigationFromScroll();
    });
  }, { passive: true });
  window.addEventListener("hashchange", () => {
    const id = window.location.hash.slice(1);
    if (id) {
      const target = document.getElementById(id);
      if (target) {
        const matchingLink = navigationLinks.find((link) => {
          const u = new URL(link.href, document.baseURI);
          return u.hash === `#${id}`;
        });
        if (matchingLink) setActiveLink(matchingLink);
      }
    } else {
      updateActiveNavigationFromScroll();
    }
  });
  const cancelPendingNavigation = () => {
    if (!pendingNavigation) return;
    pendingNavigation = null;
    updateActiveNavigationFromScroll();
  };
  window.addEventListener("wheel", cancelPendingNavigation, { passive: true });
  window.addEventListener("touchstart", cancelPendingNavigation, { passive: true });
  window.addEventListener("pointerdown", cancelPendingNavigation, { passive: true });
  window.addEventListener("keydown", (event) => {
    if (["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End", " "].includes(event.key)) cancelPendingNavigation();
  });
  if (window.location.hash) {
    const id = window.location.hash.slice(1);
    const target = document.getElementById(id);
    if (target) {
      const matchingLink = navigationLinks.find((link) => {
        const u = new URL(link.href, document.baseURI);
        return u.hash === `#${id}`;
      });
      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth" });
        if (matchingLink) setActiveLink(matchingLink);
      }, 150);
    } else {
      setHomeNavigationActive();
    }
  } else {
    setHomeNavigationActive();
  }
}
document.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.language));
});
const backToTopButtons = document.querySelectorAll(".back-to-top");
backToTopButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  });
});
let activeJourneyCard = null;
let journeyInitialized = false;
const closeJourneyPanels = () => {
  const cards = document.querySelectorAll("[data-journey-card]");
  const panels = document.querySelectorAll("[data-journey-panel]");
  const cardsContainer = document.querySelector(".about-journey-cards");
  cards.forEach((card) => card.setAttribute("aria-expanded", "false"));
  panels.forEach((panel) => {
    panel.hidden = true;
    panel.classList.remove("is-open");
  });
  if (cardsContainer) cardsContainer.hidden = false;
  if (activeJourneyCard && typeof activeJourneyCard.focus === "function") {
    activeJourneyCard.focus();
  }
  activeJourneyCard = null;
};
const openJourneyPanel = (type) => {
  const cards = [...document.querySelectorAll("[data-journey-card]")];
  const panels = [...document.querySelectorAll("[data-journey-panel]")];
  const cardsContainer = document.querySelector(".about-journey-cards");
  const panel = panels.find((item) => item.dataset.journeyPanel === type);
  if (!panel) return;
  activeJourneyCard = cards.find((card) => card.dataset.journeyCard === type) || cards[0];
  cards.forEach((card) => card.setAttribute("aria-expanded", String(card === activeJourneyCard)));
  panels.forEach((item) => {
    const isTarget = item === panel;
    item.hidden = !isTarget;
    item.classList.toggle("is-open", isTarget);
  });
  if (cardsContainer) cardsContainer.hidden = true;
  const closeButton = panel.querySelector("[data-journey-close]");
  if (closeButton) closeButton.focus();
};
const initJourney = () => {
  if (journeyInitialized) return;
  const cards = document.querySelectorAll("[data-journey-card]");
  const panels = document.querySelectorAll("[data-journey-panel]");
  if (!cards.length || !panels.length) return;
  journeyInitialized = true;
  cards.forEach((card) => {
    card.addEventListener("click", () => openJourneyPanel(card.dataset.journeyCard));
  });
  document.querySelectorAll("[data-journey-close]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      closeJourneyPanels();
    });
  });
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      const isAnyPanelOpen = [...panels].some((panel) => !panel.hidden);
      if (isAnyPanelOpen) {
        closeJourneyPanels();
      }
    }
  });
};
initJourney();
const revealItems = [...document.querySelectorAll(".about-reveal")];
if (revealItems.length) {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: .12 });
    revealItems.forEach((item) => revealObserver.observe(item));
  }
}

const createAmbientTransition = (index) => {
  const suffix = `${index}-${Math.random().toString(36).slice(2, 7)}`;
  const transition = document.createElement("div");
  transition.className = "section-transition section-transition--shared";
  transition.setAttribute("aria-hidden", "true");
  transition.innerHTML = `
    <svg class="transition-art" viewBox="0 0 1200 120" preserveAspectRatio="none" focusable="false">
      <defs>
        <linearGradient id="transition-line-a-${suffix}" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stop-color="#8B5CF6" stop-opacity="0" />
          <stop offset=".25" stop-color="#C4B5FD" stop-opacity=".52" />
          <stop offset=".72" stop-color="#8B5CF6" stop-opacity=".32" />
          <stop offset="1" stop-color="#8B5CF6" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="transition-line-b-${suffix}" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stop-color="#4C1D95" stop-opacity="0" />
          <stop offset=".45" stop-color="#C4B5FD" stop-opacity=".34" />
          <stop offset="1" stop-color="#4C1D95" stop-opacity="0" />
        </linearGradient>
      </defs>
      <g class="energy-lines" fill="none" stroke-linecap="round">
        <path class="energy-line energy-line-one" pathLength="1" stroke="url(#transition-line-a-${suffix})" d="M-30 76 C170 10 270 108 470 52 S820 12 1230 64" />
        <path class="energy-line energy-line-two" pathLength="1" stroke="url(#transition-line-b-${suffix})" d="M-30 40 C180 100 290 10 540 70 S900 108 1230 30" />
        <path class="energy-line energy-line-three" pathLength="1" stroke="url(#transition-line-a-${suffix})" d="M-30 95 C190 64 340 68 550 26 S900 64 1230 92" />
        <path class="energy-line energy-line-four" pathLength="1" stroke="url(#transition-line-b-${suffix})" d="M-30 20 C160 54 330 28 510 86 S920 36 1230 52" />
      </g>
      <circle class="energy-pulse energy-pulse-one" cx="0" cy="0" r="2.2" />
      <circle class="energy-pulse energy-pulse-two" cx="0" cy="0" r="1.7" />
    </svg>`;
  return transition;
};

document.querySelectorAll("main").forEach((main) => {
  [...main.querySelectorAll(":scope > section")].slice(1).forEach((section, index) => {
    const previous = section.previousElementSibling;
    if (previous?.classList.contains("section-transition")) return;
    main.insertBefore(createAmbientTransition(index), section);
  });
});

const ambientTransitions = [...document.querySelectorAll(".section-transition")];
if (ambientTransitions.length) {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion || !("IntersectionObserver" in window)) {
    ambientTransitions.forEach((transition) => transition.classList.add("is-visible"));
  } else {
    const transitionObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -12% 0px", threshold: 0.01 });
    ambientTransitions.forEach((transition) => transitionObserver.observe(transition));
  }

}
const initTooltips = () => {
  const elements = document.querySelectorAll("[data-tooltip]");
  if (!elements.length) return;

  let tooltipEl = document.getElementById("site-tooltip");
  if (!tooltipEl) {
    tooltipEl = document.createElement("div");
    tooltipEl.id = "site-tooltip";
    tooltipEl.className = "site-tooltip";
    tooltipEl.setAttribute("role", "tooltip");
    tooltipEl.setAttribute("aria-hidden", "true");
    document.body.appendChild(tooltipEl);
  }

  let currentTarget = null;

  const showTooltip = (target) => {
    const text = target.getAttribute("data-tooltip");
    if (!text) return;

    currentTarget = target;
    tooltipEl.textContent = text;
    tooltipEl.classList.remove("is-bottom");
    tooltipEl.classList.add("is-visible");
    tooltipEl.setAttribute("aria-hidden", "false");
    target.setAttribute("aria-describedby", "site-tooltip");

    positionTooltip(target);
  };

  const hideTooltip = () => {
    if (currentTarget) {
      currentTarget.removeAttribute("aria-describedby");
      currentTarget = null;
    }
    tooltipEl.classList.remove("is-visible", "is-bottom");
    tooltipEl.setAttribute("aria-hidden", "true");
  };

  const positionTooltip = (target) => {
    const rect = target.getBoundingClientRect();
    const tooltipRect = tooltipEl.getBoundingClientRect();
    const tooltipWidth = tooltipRect.width;
    const tooltipHeight = tooltipRect.height;
    const gap = 8;

    let left = 0;
    let top = 0;

    const isLeftRail = target.closest(".social-rail") && rect.left < 80;

    if (isLeftRail) {
      left = rect.right + gap;
      top = rect.top + (rect.height - tooltipHeight) / 2;
    } else {
      left = rect.left + (rect.width - tooltipWidth) / 2;
      top = rect.top - tooltipHeight - gap;

      if (top < gap) {
        top = rect.bottom + gap;
        tooltipEl.classList.add("is-bottom");
      }
    }

    left = Math.max(gap, Math.min(window.innerWidth - tooltipWidth - gap, left));
    top = Math.max(gap, Math.min(window.innerHeight - tooltipHeight - gap, top));

    tooltipEl.style.left = `${Math.round(left)}px`;
    tooltipEl.style.top = `${Math.round(top)}px`;
  };

  elements.forEach((element) => {
    element.addEventListener("pointerenter", () => showTooltip(element));
    element.addEventListener("pointerleave", hideTooltip);
    element.addEventListener("focus", () => showTooltip(element));
    element.addEventListener("blur", hideTooltip);
  });

  window.addEventListener("scroll", hideTooltip, { passive: true });
  window.addEventListener("resize", hideTooltip, { passive: true });
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") hideTooltip();
  });
};

initTooltips();
applyLanguage(localStorage.getItem("portfolio-language") || "pt");
