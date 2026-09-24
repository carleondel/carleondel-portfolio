import type { Dictionary } from "./types";

export const es: Dictionary = {
  meta: {
    title: "Carlos León · Data Engineer & builder",
    description:
      "Data Engineer en Astrafy y builder. Construyo plataformas de datos en Google Cloud de día y productos de noche, desde pipelines de forecasting hasta apps SaaS.",
  },
  nav: {
    about: "Sobre mí",
    builds: "Proyectos",
    data: "Data products",
    experience: "Experiencia",
    blog: "Blog",
    contact: "Contacto",
  },
  profile: {
    role: "Data Engineer & builder",
    headline: {
      start: "Construyo plataformas de datos ",
      day: "de día",
      middle: " y productos ",
      night: "de noche",
      end: ".",
    },
    location: "Madrid, España",
    building: "Construyendo",
    emailMe: "Escríbeme",
    resume: "CV",
  },
  about: [
    "Soy Data Engineer en Astrafy, en Madrid, donde construyo plataformas y productos de datos en Google Cloud con dbt, BigQuery, Airflow y Terraform. Tengo las certificaciones Google Cloud Professional Data Engineer y Professional Cloud Architect. Antes hice BI para el Ministerio de Defensa, consultoría SQL en Minsait y machine learning en el laboratorio de innovación de Red Eléctrica.",
    "Estudié Matemáticas y sigo afrontando los problemas igual: primero entender la estructura, después construir. Últimamente eso significa construir mucho también fuera del trabajo: un SaaS para preparar certificaciones, el ML de un motor de salud financiera en un hackathon, un dashboard de finanzas personales y la web de una pequeña marca de ropa.",
    "Lo que más me atrae es el punto donde se cruzan ingeniería, producto y startups: decidir qué merece la pena construir y hacer que funcione de principio a fin. Fuera de eso: música, economía, literatura y demasiados ensayos.",
  ],
  now: {
    label: "Ahora",
    update:
      "Llevando mi app de preparación de certificaciones de herramienta personal a producto real: más certificaciones, un pipeline para generar y validar preguntas a partir de la documentación oficial y todo lo necesario para abrirla al público.",
  },
  intros: {
    builds:
      "Productos, proyectos personales y trabajo para clientes. Cosas que he llevado de una idea a algo que la gente puede usar.",
    data: "Pipelines de datos y ML de principio a fin, hechos como los haría en el trabajo: reproducibles, testeados y honestos con los resultados.",
    blog: "Notas sobre ingeniería de datos, construir productos y lo que voy aprendiendo por el camino.",
  },
  contact: {
    title: { start: "Construyamos ", accent: "algo", end: "." },
    text: "Ya sea un puesto de datos, una idea de producto o un equipo para un hackathon, escríbeme. El email es la forma más rápida de contactarme.",
    copy: "Copiar",
    copied: "Copiado",
    links: { email: "Email", github: "GitHub", linkedin: "LinkedIn", resume: "CV (PDF)" },
  },
  ui: {
    viewAllProjects: "Ver todos los proyectos",
    fullExperience: "Experiencia completa y formación",
    resumePdf: "CV (PDF)",
    footer: "Diseñada y construida por mí con Next.js y Tailwind CSS, desplegada en Vercel.",
    allProjects: "Todos los proyectos",
    nextProject: "Siguiente proyecto",
    video: "Vídeo",
    watchDemo: "Ver la demo",
    categories: { product: "Cosas que he construido", data: "Data products" },
    theme: { toLight: "Cambiar a modo claro", toDark: "Cambiar a modo oscuro" },
    switchLang: "Read in English",
    home: "Inicio",
  },
  caseStudy: {
    problem: "El problema",
    contribution: "Mi parte",
    built: "Qué construí",
    how: "Cómo está hecho",
    outcomes: "Resultados",
    next: "Siguientes pasos",
    stack: "Stack",
    year: "Año",
    role: "Rol",
    status: "Estado",
    live: "Ver en vivo",
    video: "Vídeo",
    github: "GitHub",
  },
  pages: {
    projects: {
      eyebrow: "Proyectos",
      title: { start: "Cosas que he ", accent: "construido", end: "." },
      intro:
        "Productos y trabajo para clientes por un lado, pipelines de datos y ML por otro. Cada uno enlaza a un pequeño caso de estudio: el problema, qué construí y las decisiones detrás.",
    },
    experience: {
      eyebrow: "Experiencia",
      title: { start: "Dónde he ", accent: "trabajado", end: "." },
      intro: "Ingeniería de datos, BI y machine learning en consultoría, sector público y energía.",
    },
    credentials: {
      title: "Formación y certificaciones",
      education: "Formación",
      certifications: "Certificaciones",
    },
    blog: {
      eyebrow: "Blog",
      title: { start: "Notas y ", accent: "artículos", end: "." },
      intro:
        "Lo que aprendo construyendo plataformas de datos y productos. Algunos posts están en inglés y otros en español.",
      empty: "Los primeros posts, muy pronto.",
      allPosts: "Todos los posts",
      back: "Todos los posts",
      inOtherLang: { en: "En inglés", es: "En español" },
      draft: "Borrador",
    },
  },
  projects: {
    dataforge: {
      tagline:
        "SaaS para preparar certificaciones con modo práctica, simulacros cronometrados y un sistema de estudio gamificado.",
      summary:
        "Empezó como mi herramienta para preparar el examen Google Cloud Professional Data Engineer, que aprobé. Ahora es un producto multi-certificación con cuentas, sincronización en la nube y prueba gratuita.",
      role: "En solitario: producto, diseño e ingeniería",
      status: "En producción · beta gratuita",
      context:
        "Construí la primera versión para estudiar el examen Google Cloud Professional Data Engineer, que aprobé. Cuando vi que a mí me funcionaba, la pregunta interesante pasó a ser si podía funcionarle a más gente, así que lo convertí en un producto.",
      whatIBuilt:
        "Una app en React con landing estática, login con Supabase (Google, GitHub, email o magic link), progreso sincronizado entre dispositivos y una prueba de 20 preguntas sin cuenta. Incluye práctica y estudio por bloques, simulacros cronometrados con los mismos pesos que el examen real, un reto diario y una capa de gamificación con XP, rangos, logros y jefes finales.",
      architecture: [
        "Un motor agnóstico de la certificación: cada una es una carpeta con su manifiesto, dominios y banco de preguntas, así que añadir otra no toca la app.",
        "localStorage es la caché de la que lee la app. Cada clave se replica en Supabase (con debounce y row-level security por usuario), y las escrituras sin confirmar se envían en la siguiente visita.",
        "Las vistas solo pintan y emiten eventos. El estado vive en hooks y en un motor puro cubierto con Vitest, y los bancos de preguntas se cargan en chunks bajo demanda.",
        "Se despliega en Vercel con cada push, y también funciona en local o en Docker detrás de nginx.",
      ],
      outcomes: [
        "Dos certificaciones de Google Cloud disponibles (Professional Data Engineer y Professional Cloud Architect) con más de 600 preguntas.",
        "La usé para aprobar mi propio examen PDE.",
        "Landing pública, páginas legales y un modo prueba que funciona sin registrarse.",
      ],
      nextStep:
        "Más certificaciones y un pipeline que genere y valide preguntas a partir de la documentación oficial, con revisión humana de todo lo marcado.",
    },
    "x-ray": {
      tagline:
        "Motor de salud financiera que puntúa 1.286 empresas a partir de su rastro bancario. HackSpain 2026, reto de Embat.",
      summary:
        "Construido en equipo en un fin de semana: un score causal de 0 a 100, una máquina de seis estados de trayectoria, una explicación exacta de cada movimiento y un simulador what-if encima.",
      role: "Responsable de ML en un equipo de hackathon",
      status: "Demo en vivo",
      context:
        "El reto de Embat preguntaba si el dinero por sí solo puede decir cómo está una empresa. Las empresas no quiebran por balance, quiebran por caja: los ratios anuales llegan tarde, mientras que el rastro diario de cobros, pagos y deuda llega a tiempo. La dificultad: los datos no traían ninguna etiqueta de impago de la que aprender.",
      contribution:
        "Me encargué de la parte de machine learning: el laboratorio de forecasting (regresiones Huber y Ridge validadas con GroupKFold, MAE a 1, 3 y 6 meses) y la previsión estructural, que proyecta cada cuenta hacia delante y la vuelve a puntuar con la misma función. También trabajé en el propio score y participé en las decisiones de producto y de UI.",
      whatIBuilt:
        "Un score determinista y point-in-time sobre 24 meses de datos bancarios de 1.286 empresas en 250 grupos. Encima: una máquina de seis estados de trayectoria, un waterfall aditivo que explica cada punto de cambio, un simulador what-if, consolidación de grupo y un monitor de alertas, todo movido por la misma función de scoring.",
      architecture: [
        "Sin etiqueta de impago, no hay GBDT en el núcleo: una función de scoring causal basada en reglas, con tests que demuestran que los datos futuros nunca cambian scores pasados.",
        "Una sola función mueve el score, el simulador, el outlook y la previsión estructural, así que una simulación nunca contradice al score. El ML vive al lado, no en su lugar.",
        "Motor en Python y DuckDB detrás de un backend FastAPI, y un front en Next.js con vista de cartera para Embat y una vista 360° de cada empresa.",
        "Validado en bancos sintéticos con regímenes controlados: el 95,5% de los deterioros detectados en seis meses, sin falsas alarmas estructurales en empresas estables.",
      ],
      outcomes: [
        "Responde a las seis preguntas del reto: quién está sano, quién mejora, quién se tuerce, bache o caída, por qué ha cambiado y con cuánta antelación se veía venir.",
        "Demo desplegada y vídeo de presentación, contando abiertamente los límites del modelo en vez de esconderlos.",
      ],
    },
    "wealth-tracker": {
      tagline:
        "Dashboard de patrimonio autoalojable con precios en vivo y un diario en lenguaje natural.",
      summary:
        "Escribes “vendí 3 MSTR a 180” y un LLM lo convierte en operaciones estructuradas. Multiusuario con magic link, con tu propio Supabase y una demo pública.",
      role: "En solitario",
      status: "En producción · demo pública",
      context:
        "Los trackers comerciales te obligan a subir extractos del broker o a meter tu cartera en categorías que no encajan con cómo la piensas. Quería uno en el que la base de datos fuera mía, yo definiera las posiciones y los precios vinieran de fuentes públicas.",
      whatIBuilt:
        "Una app en Next.js y Supabase con login por magic link, precios en vivo de APIs gratuitas (CoinGecko, tipos del BCE, Finnhub) y seis pestañas: resumen, posiciones, asignación con sliders de escenarios, política, histórico y un diario donde un LLM convierte lo que escribes en operaciones que revisas antes de aplicarlas.",
      architecture: [
        "Multiusuario desde el diseño: row-level security de Postgres por usuario, sin contraseñas ni formulario de registro.",
        "Histórico con snapshot en cada actualización e intereses de las cuentas de efectivo que confirmas antes de guardarlos.",
        "Una ruta /demo pública con datos ficticios y precios reales, donde todo funciona y nada se guarda.",
        "Autoalojable en minutos: haces fork, lo apuntas a tu Supabase y tu Vercel y mantienes el control total de tus datos.",
      ],
      outcomes: [
        "Una herramienta que uso para mis propias finanzas, con una instancia multiusuario alojada y un self-host en cinco minutos.",
        "Demo pública sin necesidad de cuenta.",
      ],
    },
    irisverd: {
      tagline: "Web editorial para un taller de ropa hecha a mano, para una clienta real.",
      summary:
        "Identidad de marca, catálogo y fichas de producto para las series cortas de María, preparado para conectar una tienda online más adelante.",
      role: "Freelance: diseño y desarrollo",
      status: "En producción · tienda próximamente",
      context:
        "María hace ropa a mano en series cortas y necesitaba un sitio para la marca antes de abrir la tienda online.",
      whatIBuilt:
        "Una web editorial en Next.js con catálogo, fichas de producto, la historia del taller, envíos y contacto. La identidad partió de un moodboard: paleta cálida, Cormorant Garamond con Jost y sin modo oscuro, porque la marca vive en luz cálida.",
      architecture: [
        "Un único módulo de catálogo es la fuente de todos los productos, así que conectar Shopify u otro backend más adelante no tocará las páginas.",
        "Fotos reales de las prendas, dos ángulos por pieza, servidas con next/image.",
        "Las piezas se reservan por email hasta que se conecte el checkout.",
      ],
      outcomes: ["En producción, a falta de los textos finales y del dominio propio."],
      nextStep: "Conectar pagos, stock y pedidos.",
    },
    "madrid-no2-forecasting": {
      tagline:
        "Previsión de NO₂ por estación en Madrid a 1, 24 y 72 horas, sin fugas de información.",
      summary:
        "Un pipeline reproducible de datos y ML con PostgreSQL, dbt y un modelo XGBoost por horizonte, evaluado con backtests rolling-origin e intervalos de predicción conformales.",
      role: "Data & ML Engineer",
      context:
        "La mayoría de portfolios de forecasting inflan sus resultados filtrando información del futuro en las features o evaluando con splits aleatorios. Yo quería lo contrario: una evaluación de series temporales honesta y reproducible sobre los datos oficiales de calidad del aire de Madrid, donde cada afirmación corresponde a una comprobación ejecutable.",
      whatIBuilt:
        "Un pipeline de principio a fin: ingesta tipada en Python de Madrid Open Data (más de 1,6 millones de observaciones horarias, de 2018 a 2025), marts en PostgreSQL modelados con dbt, feature engineering sin fugas, backtesting rolling-origin con embargo temporal y un modelo XGBoost directo por horizonte con intervalos conformales P10 a P90.",
      architecture: [
        "La ingesta tipada en Python normaliza los datos oficiales de Madrid y los archivos de Open-Meteo en Parquet particionado y un esquema raw en PostgreSQL, con normalización a UTC y gestión explícita del cambio de hora.",
        "dbt se encarga del grano analítico y la calidad del dato en las capas staging, intermediate y mart. Python se encarga de features, backtesting, entrenamiento y predicción.",
        "Las features se limitan al momento de la predicción (solo lags y estadísticas móviles desplazadas), y hay tests de pytest que fallan si entra información del futuro.",
        "Los backtests rolling-origin comparan XGBoost por horizonte contra baselines estacionales ingenuos, con manifiestos de benchmark versionados que protegen las métricas publicadas.",
      ],
      outcomes: [
        "Un 50% menos de MAE que el mejor baseline ingenuo a 1 hora, y mejoras honestas y modestas de ~12% a 24 y 72 horas.",
        "Un clon limpio reproduce la demo con un solo comando, y la CI ejecuta la integración real con PostgreSQL y dbt en cada push.",
        "Las previsiones incluyen intervalos conformales empíricos, reportados por su peor fold y no por la media.",
      ],
      nextStep:
        "Añadir features de previsiones meteorológicas archivadas (que sí se conocían en el momento de predecir) y calibración conformal adaptativa para corregir la infracobertura en los folds de cambio de estación.",
    },
    "chicago-taxi-weather-pipeline": {
      tagline: "Pipeline en GCP de principio a fin que cruza viajes de taxi de Chicago con datos meteorológicos.",
      summary:
        "Ingesta provisionada con Terraform, modelado en BigQuery y dbt, orquestación, CI/CD y salida en BI. Un pipeline de verdad en vez de un notebook aislado.",
      role: "Data Engineer",
      context:
        "Quería una forma reproducible de analizar cómo afecta el tiempo a la actividad de los taxis, con un pipeline real en lugar de un notebook aislado.",
      whatIBuilt:
        "Un flujo analítico completo en Google Cloud: ingesta, infraestructura, transformaciones, orquestación, tests y salida en BI.",
      architecture: [
        "Terraform provisiona los recursos de GCP y la infraestructura base.",
        "Cloud Functions y jobs programados se encargan de la ingesta y los refrescos.",
        "BigQuery guarda los datos raw y modelados, y dbt gestiona las transformaciones.",
        "Looker Studio consume los modelos finales para reporting.",
      ],
      outcomes: [
        "Ingesta, almacenamiento, modelado y reporting conectados en un sistema reproducible.",
        "Cercano a patrones reales de producción, con orquestación y CI/CD.",
      ],
      nextStep:
        "Añadir mejor monitorización y checks de frescura sobre la ingesta y las ejecuciones programadas.",
    },
    "nba-data-pipeline": {
      tagline:
        "Pipeline ELT de datos de la NBA con Snowflake y dbt, modelado en capas bronze, silver y gold.",
      summary:
        "Modelado medallion desde los datos raw de la NBA hasta modelos listos para BI de resultados, rendimiento de jugadores y análisis de equipos.",
      role: "Data Engineer",
      context:
        "Lo construí para practicar un flujo limpio de analytics engineering con modelado medallion y salidas orientadas a negocio.",
      whatIBuilt:
        "Un pipeline con Snowflake y dbt que transforma datos raw de la NBA en modelos analíticos de resultados, rendimiento de jugadores y equipos.",
      architecture: [
        "Los datos raw de la NBA llegan a Snowflake y se organizan en modelos por capas.",
        "dbt gestiona transformaciones, tests y estructura en las capas bronze, silver y gold.",
        "La capa gold está preparada para consumo y reporting en Power BI.",
      ],
      outcomes: [
        "Separación clara entre ingesta raw, lógica de transformación y salidas de negocio.",
      ],
    },
  },
  experience: {
    astrafy: {
      role: "Data Engineer",
      period: "sep 2025 - actualidad",
      description:
        "Construyo plataformas y productos de datos en Google Cloud para equipos de finanzas y marketing, desde la ingesta y el modelado con dbt hasta CI/CD, infraestructura como código y analítica self-service.",
      contributions: [
        "Construí y fui responsable de productos de datos en GCP, BigQuery, dbt y Airflow en más de 5 iniciativas con KPIs de finanzas y marketing",
        "Diseñé y mantuve proyectos dbt en producción con más de 100 modelos entre staging y marts, reduciendo las inconsistencias analíticas en torno a un 30%",
        "Implanté CI/CD e infraestructura como código con GitLab CI, Terraform y GCP IAM, reduciendo los problemas de setup y despliegue en torno a un 40%",
        "Entregué dashboards self-service en Lightdash y Looker que usan más de 10 stakeholders para reporting y toma de decisiones",
      ],
    },
    sii: {
      role: "BI Engineer",
      period: "oct 2024 - sep 2025",
      description:
        "Desarrollé soluciones de ingeniería de datos y BI para el Ministerio de Defensa, mejorando la planificación, el reporting y la visibilidad de datos financieros y operativos.",
      contributions: [
        "Desarrollé y automaticé soluciones de datos y BI usadas en más de 10 departamentos",
        "Construí dashboards en Power BI para seguir presupuestos multimillonarios para más de 4 directivos",
        "Automaticé flujos ETL con Python, SQL y Bash, reduciendo el tiempo de procesamiento un 95%",
        "Centralicé y modelé datos históricos para mejorar la consistencia del reporting y la planificación",
      ],
    },
    minsait: {
      role: "Data Consultant",
      period: "jul 2023 - ene 2024",
      description:
        "Trabajé en soluciones de datos con mucho SQL, junto a analistas y equipos técnicos, para mejorar rendimiento, fiabilidad y calidad de procesos.",
      contributions: [
        "Optimicé consultas SQL complejas, mejorando el rendimiento de la base de datos un 20% y reduciendo los tiempos de consulta un 25%",
        "Colaboré con analistas funcionales para traducir requisitos de negocio en soluciones técnicas de datos",
        "Mejoré los estándares de documentación y los procesos de datos, aumentando la eficiencia del equipo en torno a un 30%",
        "Reforcé la calidad de entrega en un equipo técnico de más de 10 personas con procesos de datos más claros",
      ],
    },
    ree: {
      role: "Becario de Data Science I+D",
      period: "abr 2023 - jul 2023",
      description:
        "Trabajé entre analítica, machine learning e innovación, construyendo herramientas internas y dashboards para casos de mercado eléctrico e I+D.",
      contributions: [
        "Construí flujos de análisis y modelos de machine learning para monitorizar más de 200 agentes del mercado eléctrico, reduciendo a la mitad la carga de los supervisores",
        "Integré Whisper para transcribir y documentar llamadas, mejorando la precisión del reporting un 35%",
        "Entregué 3 dashboards de Power BI que usan cada semana más de 10 analistas del departamento de Mercados",
        "Gestioné más de 50 iniciativas de I+D en el Innovation Lab y representé a Elewit en eventos del sector",
      ],
    },
  },
  education: [
    {
      name: "Applied Data Science Program",
      by: "Zrive",
      detail:
        "Programa intensivo sobre flujos de data science de principio a fin, feature engineering, desarrollo de modelos y despliegue con FastAPI.",
    },
    {
      name: "Grado en Matemáticas",
      by: "Universidad de Extremadura",
      detail:
        "TFG en teoría de juegos. Una base sólida en estructura, modelado y pensamiento analítico.",
    },
  ],
  certifications: [
    {
      name: "Professional Data Engineer",
      by: "Google Cloud",
      detail:
        "Certificación profesional sobre diseño, construcción, operación, seguridad y monitorización de sistemas de procesamiento de datos en Google Cloud.",
    },
    {
      name: "Professional Cloud Architect",
      by: "Google Cloud",
      detail:
        "Certificación profesional sobre diseño de arquitecturas cloud seguras, escalables y fiables en Google Cloud.",
    },
    {
      name: "Data Engineering: SQL, dbt, Snowflake & Power BI",
      by: "Cívica",
      detail: "Centrada en analytics engineering, modelado de datos y flujos de data warehouse modernos.",
    },
  ],
};
