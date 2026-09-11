// content.ts - Datos institucionales y estructurados para Angela Ramírez
// Contadora Pública · Revisoría Fiscal & Auditoría Forense · Cartago, Pereira y Risaralda, Colombia

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  badge: string;
  summary: string;
  targetAudience: string;
  legalFramework: string[];
  deliverables: string[];
  impactPoints: string[];
  icon: string;
}

export interface ForensicPhase {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  deliverable: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  organization: string;
  city: string;
  serviceCategory: string;
}

export const siteConfig = {
  name: "Angela Ramírez",
  fullName: "Angela María Ramírez Bedoya",
  title: "Contadora Pública",
  specialties: [
    "Especialista en Revisoría Fiscal",
    "Especialista en Auditoría Forense y Peritaje Judicial"
  ],
  slogan: "Tu información, en buenas manos",
  primaryRegion: "Cartago, Pereira, La Virginia y Risaralda",
  location: "Cartago · Pereira · La Virginia · Risaralda",
  locations: ["Cartago", "Pereira", "La Virginia", "Dosquebradas", "Santa Rosa de Cabal", "Risaralda", "Norte del Valle", "Eje Cafetero"],
  region: "Risaralda, Eje Cafetero y Norte del Valle, Colombia",
  addressDisplay: "Cartago · Pereira · La Virginia · Risaralda · Eje Cafetero",
  phone: "+57 310 527 4367",
  phoneClean: "573105274367",
  email: "angelaramirez.contabilidad@gmail.com",
  secondaryEmail: "contacto@angelaramirezcontadora.com",
  tpNumber: "",
  whatsappUrl: "https://wa.me/573105274367?text=Hola%20Angela,%20deseo%20agendar%20una%20consulta%20profesional.",
  seo: {
    metaTitle: "Contadora Pública en Pereira, Cartago y La Virginia | Angela Ramírez",
    metaDescription: "¿Busca contador o contadora pública en Pereira, Cartago, La Virginia o Risaralda? Revisoría Fiscal, Declaración de Renta, Auditoría y Asesoría Contable sin sanciones DIAN.",
    keywords: "contador pereira, contadora pereira, contadores pereira, contador cartago, contadora cartago, contadores cartago, contador la virginia, contadora la virginia, contadores risaralda, contadora publica risaralda, revisoria fiscal pereira, declaracion de renta cartago, asesoria contable risaralda, peritaje contable eje cafetero, contador publico norte del valle, auditoria forense pereira",
    geoPlacename: "Pereira, Risaralda, Cartago, Colombia",
    geoPosition: "4.8133;-75.6961",
    geoRegion: "CO-RIS"
  }
};

export const trustHighlights = [
  {
    metric: "100%",
    label: "Independencia",
    description: "Código de Ética IFAC y Ley 43 de 1990."
  },
  {
    metric: "10+",
    label: "Años Experiencia",
    description: "Empresas, personas y firmas legales."
  },
  {
    metric: "0 Sanciones",
    label: "Garantía Fe Pública",
    description: "Historial intachable ante DIAN y JCC."
  },
  {
    metric: "Admisible",
    label: "Prueba Judicial",
    description: "Código General del Proceso (CGP)."
  },
  {
    metric: "+500",
    label: "Declaraciones Renta",
    description: "Personas naturales y jurídicas."
  }
];

export interface SubServiceItem {
  number: string;
  title: string;
  description: string;
}

export interface ServiceAxis {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  tagline: string;
  badge: string;
  summary: string;
  services: SubServiceItem[];
  legalFramework: string[];
  ctaText: string;
  whatsappMessage: string;
  icon: string;
}

export const serviceAxes: ServiceAxis[] = [
  {
    id: "revisoria-fiscal",
    number: "01",
    title: "Revisoría Fiscal",
    shortTitle: "Revisoría Fiscal",
    badge: "Aseguramiento & Control",
    tagline: "Vigilancia societaria, evaluación de control interno y dictamen con fe pública.",
    summary: "Órgano de fiscalización permanente e independiente que dictamina los estados financieros bajo normas NIAS, evalúa la eficacia del control interno y asegura el cumplimiento estricto ante la DIAN, Cámaras de Comercio y Superintendencias en el Eje Cafetero y Norte del Valle.",
    services: [
      {
        number: "1.1",
        title: "Cumplimiento normativo y legal",
        description: "Monitoreo continuo y verificación del cumplimiento estatutario, comercial, tributario y laboral de la entidad ante entes de control."
      },
      {
        number: "1.2",
        title: "Evaluación control interno",
        description: "Revisión crítica de las políticas y procedimientos operativos, identificando debilidades y emitiendo cartas de recomendaciones oportunas."
      },
      {
        number: "1.3",
        title: "Dictámenes",
        description: "Emisión de dictámenes profesionales independientes sobre Estados Financieros anuales e intermedios bajo normas NIAS."
      },
      {
        number: "1.4",
        title: "Trabajos de aseguramiento",
        description: "Procedimientos acordados de revisión y verificación de información financiera histórica y proyectada para juntas directivas."
      },
      {
        number: "1.5",
        title: "Certificaciones",
        description: "Expedición de certificaciones con fe pública contable para licitaciones, entidades bancarias y autoridades gubernamentales."
      }
    ],
    legalFramework: [
      "Código de Comercio de Colombia (Art. 203 - 217)",
      "Ley 43 de 1990 (Reglamentación del Contador Público)",
      "Normas Internacionales de Auditoría (NIAS - Decreto 2420/2015)"
    ],
    ctaText: "Solicitar Propuesta de Revisoría Fiscal",
    whatsappMessage: "Hola Angela, deseo una propuesta de Revisoría Fiscal para mi empresa en el Eje Cafetero y Norte del Valle.",
    icon: "shield-check"
  },
  {
    id: "auditoria-financiera-forense",
    number: "02",
    title: "Auditoría Financiera, Interna y Forense",
    shortTitle: "Auditoría Forense",
    badge: "Investigación & Peritaje",
    tagline: "Detección de anomalías, investigación de fraudes y dictámenes periciales con validez probatoria.",
    summary: "Examinación crítica de registros contables, detección e investigación profunda de actos de fraude corporativo, apropiaciones indebidas y estructuración de dictámenes periciales técnicos para despachos judiciales y tribunales de arbitramento.",
    services: [
      {
        number: "2.1",
        title: "Evaluación preliminar",
        description: "Diagnóstico inicial confidencial y delimitación precisa del alcance investigativo sin alertar a los involucrados."
      },
      {
        number: "2.2",
        title: "Análisis documental",
        description: "Inspección minuciosa de soportes contables, conciliaciones bancarias, contratos y trazabilidad de transacciones atípicas."
      },
      {
        number: "2.3",
        title: "Investigación de fraude y corrupción",
        description: "Identificación técnica de apropiaciones indebidas, conflictos de interés, falsedad documental y esquemas de desvío de capital."
      },
      {
        number: "2.4",
        title: "Elaboración de informes periciales",
        description: "Construcción de dictámenes periciales bajo el Código General del Proceso (CGP) con cuantificación rigurosa del daño emergente y lucro cesante."
      },
      {
        number: "2.5",
        title: "Documentación de hallazgos",
        description: "Consolidación de pruebas documentales bajo estricta cadena de custodia admisibles ante tribunales y juzgados."
      }
    ],
    legalFramework: [
      "Normas Internacionales de Auditoría Forense y Gestión Antifraude (ACFE)",
      "Ley 1564 de 2012 (Código General del Proceso - CGP Art. 226 a 235)",
      "Circular Externa 100-000016 SuperSociedades (SAGRILAFT / PTEE)"
    ],
    ctaText: "Solicitar Investigación Forense o Peritaje",
    whatsappMessage: "Hola Angela, requiero asesoría especializada en Auditoría Financiera, Interna o Forense.",
    icon: "fingerprint"
  },
  {
    id: "control-interno-riesgos",
    number: "03",
    title: "Control Interno y Gestión de Riesgos",
    shortTitle: "Control & Riesgos",
    badge: "Blindaje & Eficiencia",
    tagline: "Diagnóstico de sistemas de control, evaluación de terceros y mitigación de riesgos tecnológicos.",
    summary: "Diseño, supervisión y fortalecimiento de la arquitectura de control interno para proteger los activos empresariales, optimizar la eficiencia operativa y prevenir contingencias operativas, cibernéticas y regulatorias.",
    services: [
      {
        number: "3.1",
        title: "Diagnóstico y evaluación del sistema de control",
        description: "Valoración integral del ambiente de control bajo metodología COSO, detectando brechas y áreas de vulnerabilidad."
      },
      {
        number: "3.2",
        title: "Evaluación de eficiencia operativa",
        description: "Análisis de procesos clave para eliminar cuellos de botella, duplicidad de funciones y sobrecostos operativos."
      },
      {
        number: "3.3",
        title: "Evaluación de controles de terceros",
        description: "Auditoría de proveedores críticos, aliados comerciales y esquemas de tercerización (BPO) para blindar la operación."
      },
      {
        number: "3.4",
        title: "Identificación y valoración de riesgos",
        description: "Construcción y actualización de matrices de riesgo corporativo, probabilidad de ocurrencia e impacto financiero."
      },
      {
        number: "3.5",
        title: "Ciberseguridad y riesgo tecnológico",
        description: "Revisión de controles sobre accesos a sistemas contables/ERP, integridad de bases de datos y seguridad de la información financiera."
      }
    ],
    legalFramework: [
      "Marco Integrado de Control Interno (COSO 2013)",
      "Normas Técnicas ISO 31000 de Gestión de Riesgo",
      "Circular Básica Jurídica SuperSociedades (Gobierno Corporativo y Control Interno)"
    ],
    ctaText: "Solicitar Diagnóstico de Control Interno",
    whatsappMessage: "Hola Angela, me interesa un diagnóstico de Control Interno y Gestión de Riesgos para mi organización.",
    icon: "layers"
  },
  {
    id: "impuestos-cumplimiento-tributario",
    number: "04",
    title: "Impuestos y Cumplimiento Tributario",
    shortTitle: "Impuestos & DIAN",
    badge: "Estrategia & Ahorro Legal",
    tagline: "Planeación tributaria preventiva, atención fiscal DIAN y gestión de saldos a favor.",
    summary: "Acompañamiento fiscal estratégico para optimizar legítimamente la carga impositiva, asegurar la presentación impecable de obligaciones ante la DIAN y entes municipales, y defender con solidez técnica ante fiscalizaciones.",
    services: [
      {
        number: "4.1",
        title: "Diagnóstico tributario preventivo",
        description: "Auditoría previa a declaraciones para detectar inconsistencias y corregir desviaciones antes de fiscalizaciones de la DIAN."
      },
      {
        number: "4.2",
        title: "Planeación tributaria estratégica",
        description: "Proyección anual estructurada de la carga fiscal aprovechando deducciones, exenciones y beneficios legales vigentes."
      },
      {
        number: "4.3",
        title: "Preparación y presentación de declaraciones (Outsourcing tributario)",
        description: "Liquidación y presentación oportuna de Renta, IVA, Retención en la fuente, ICA territorial e Información Exógena."
      },
      {
        number: "4.4",
        title: "Atención de requerimientos y fiscalización DIAN",
        description: "Respuestas técnicas y fundamentadas a emplazamientos, requerimientos ordinarios y pliegos de cargos de la DIAN."
      },
      {
        number: "4.5",
        title: "Gestión de saldos a favor y devoluciones",
        description: "Trámite integral de solicitudes de devolución y compensación de saldos ante la DIAN y municipios con estricto soporte documental."
      }
    ],
    legalFramework: [
      "Estatuto Tributario Nacional de Colombia (Decreto 624/1989 y reformas)",
      "Estatutos Tributarios Municipales (Pereira, Cartago, La Virginia, Dosquebradas)",
      "Resoluciones DIAN sobre Medios Magnéticos y Facturación Electrónica"
    ],
    ctaText: "Solicitar Asesoría Tributaria Estratégica",
    whatsappMessage: "Hola Angela, deseo agendar una consulta sobre Impuestos y Cumplimiento Tributario.",
    icon: "trending-up"
  }
];

export const servicesData = serviceAxes;

export const forensicMethodology: ForensicPhase[] = [
  {
    step: "01",
    title: "Evaluación Preliminar & Protocolo de Confidencialidad",
    subtitle: "Acuerdo ético estricto y delimitación del alcance",
    description: "Recepción de la sospecha o litigio. Firma de acuerdos de confidencialidad absoluta (NDA) y definición de los hechos objeto de investigación para no alertar a los involucrados.",
    deliverable: "Plan de Trabajo Forense & Cadena de Custodia Inicial"
  },
  {
    step: "02",
    title: "Aseguramiento & Custodia de Evidencia",
    subtitle: "Inmutabilidad de pruebas documentales y digitales",
    description: "Extracción controlada de libros contables, extractos bancarios, comprobantes de egreso, contratos y copias forenses de correos o sistemas ERP sin alterar metadatos.",
    deliverable: "Registro formal de Cadena de Custodia"
  },
  {
    step: "03",
    title: "Análisis Forense & Reconstrucción de Transacciones",
    subtitle: "Pruebas de correlación y detección de patrones de fraude",
    description: "Aplicación de técnicas de minería contable, análisis de variaciones sospechosas, pruebas de confirmación con terceros y reconstrucción cronológica del flujo monetario.",
    deliverable: "Matriz de Hallazgos y Correlación Probatoria"
  },
  {
    step: "04",
    title: "Emisión del Dictamen o Informe Pericial",
    subtitle: "Rigurosidad probatoria admisible en estrados judiciales",
    description: "Redacción del informe pericial con conclusiones claras, cuantificación precisa del daño (daño emergente/lucro cesante) y soporte documental con valor probatorio pleno.",
    deliverable: "Dictamen Pericial Contable bajo el Art. 226 del CGP"
  },
  {
    step: "05",
    title: "Sustentación Oral en Audiencia Judicial",
    subtitle: "Defensa técnica impecable ante el Juez o Tribunal",
    description: "Comparecencia personal en la audiencia de pruebas para sustentar el dictamen pericial, responder con solvencia técnica a las preguntas y resistir el contrainterrogatorio.",
    deliverable: "Defensa Pericial Efectiva en Estrado"
  }
];

export const fiscalCalculatorData = {
  smmlvCurrent: 1423500, // Salario Mínimo Legal Vigente referencia Colombia
  thresholdAssetsSmmlv: 5000,
  thresholdIncomeSmmlv: 3000,
  commercialCodeRef: "Art. 203 del Código de Comercio y Ley 43 de 1990 (Parágrafo 2 del Art. 13)",
  societiesObligatedByNature: [
    "Sociedades por Acciones (S.A. y S.A.S. con topes)",
    "Sucursales de compañías extranjeras",
    "Sociedades en que por ley o por estatutos la administración no corresponda a todos los socios"
  ]
};

export const faqs: FAQItem[] = [
  {
    category: "Revisoría Fiscal",
    question: "¿Cuándo está obligada una empresa en Colombia a tener Revisor Fiscal?",
    answer: "Según el parágrafo 2 del artículo 13 de la Ley 43 de 1990, están obligadas a tener Revisor Fiscal todas las sociedades comerciales cuyos activos brutos al 31 de diciembre del año inmediatamente anterior sean o excedan el equivalente a 5.000 salarios mínimos (SMMLV), o cuyos ingresos brutos anuales sean o excedan el equivalente a 3.000 SMMLV. Además, por su naturaleza, las Sociedades Anónimas (S.A.) y sucursales de sociedades extranjeras siempre están obligadas por el Código de Comercio."
  },
  {
    category: "Revisoría Fiscal",
    question: "¿Qué diferencia existe entre un Revisor Fiscal y un Contador General?",
    answer: "El Contador General prepara y registra la contabilidad bajo las directrices de la administración. El Revisor Fiscal, en cambio, es un órgano independiente elegido por la Asamblea de Accionistas o Junta de Socios con función pública de control. Su misión es fiscalizar la gestión, dictaminar con fe pública sobre la razonabilidad de los estados financieros e informar oportunamente sobre irregularidades a los accionistas y entes de control."
  },
  {
    category: "Auditoría Forense",
    question: "¿En qué momentos se debe contratar una Auditoría Forense?",
    answer: "Se recomienda contratar una Auditoría Forense ante sospechas de desvío de inventarios o fondos, pagos irregulares a proveedores ficticios, inconsistencias en la facturación, litigios entre socios por el valor real de la compañía, o cuando se requiera calcular perjuicios económicos para una demanda judicial."
  },
  {
    category: "Peritaje Judicial",
    question: "¿Qué valor probatorio tiene un Dictamen Pericial Contable ante un juez?",
    answer: "El dictamen pericial contable elaborado bajo el Código General del Proceso (Ley 1564 de 2012) constituye un medio de prueba científico y técnico fundamental. Al ser emitido por una Contadora Pública especialista y sustentado oralmente en audiencia, otorga al juez la certeza técnica requerida para tasar indemnizaciones, decretar medidas cautelares o dictar sentencia."
  },
  {
    category: "Planeación Tributaria",
    question: "¿Cómo protege la asesoría tributaria a las empresas en Pereira y Cartago frente a los Municipios y la DIAN?",
    answer: "Pereira, Cartago y los municipios de Risaralda cuentan con particularidades tributarias locales como las tarifas de Industria y Comercio (ICA), retenciones y sobretasas municipales específicas. Una planeación tributaria adecuada no solo optimiza el impuesto sobre la renta nacional ante la DIAN, sino que evita sanciones y fiscalizaciones de las Secretarías de Hacienda municipales."
  }
];

export const testimonials: Testimonial[] = [
  {
    quote: "La rigurosidad de Angela en nuestra Revisoría Fiscal nos dio la tranquilidad que necesitábamos ante la Junta Directiva y la Superintendencia. Su visión estratégica va mucho más allá de firmar balances: identifica riesgos antes de que se conviertan en pérdidas.",
    author: "Carlos E. Montaño",
    role: "Presidente de Junta Directiva",
    organization: "Grupo Logístico del Café S.A.S.",
    city: "Pereira, Colombia",
    serviceCategory: "Revisoría Fiscal"
  },
  {
    quote: "En un complejo litigio societario de liquidación comercial, el dictamen pericial contable elaborado y sustentado por Angela fue determinante para que el tribunal reconociera los perjuicios económicos reales. Su solvencia técnica en audiencia fue insuperable.",
    author: "Dra. Patricia Arana V.",
    role: "Socia Directora de Litigios Comerciales",
    organization: "Arana & Asociados Abogados",
    city: "Cartago, Colombia",
    serviceCategory: "Peritaje Contable Judicial"
  },
  {
    quote: "Cuando detectamos inconsistencias operativas en tesorería, Angela lideró la investigación forense con máxima discreción, asegurando la evidencia con una cadena de custodia impecable que permitió recuperar los recursos y reestructurar nuestros controles internos.",
    author: "Andrés Felipe Valencia",
    role: "Gerente General",
    organization: "Distribuidora Agroindustrial del Eje",
    city: "La Virginia / Pereira, Colombia",
    serviceCategory: "Auditoría Forense"
  }
];

export const heroRotatingServices = [
  {
    title: "Declaraciones de Renta de Personas Naturales y Jurídicas",
    short: "Declaración de Renta",
    highlight: "Optimización fiscal, deducciones de ley y cumplimiento oportuno DIAN.",
    badge: "Personas & Empresas"
  },
  {
    title: "Revisoría Fiscal",
    short: "Revisoría Fiscal",
    highlight: "Vigilancia societaria, evaluación de control interno y dictamen con fe pública.",
    badge: "Obligatoriedad Legal"
  },
  {
    title: "Asesoría Tributaria, Contable y Financiera",
    short: "Asesoría Integral",
    highlight: "Estructuración de flujos de caja, blindaje normativo y rentabilidad sostenible.",
    badge: "Estrategia Empresarial"
  },
  {
    title: "Auditoría Financiera & Forense",
    short: "Auditoría Financiera",
    highlight: "Inspección técnica de estados financieros, detección de anomalías y prevención de fraude.",
    badge: "Control & Integridad"
  },
  {
    title: "Constitución de Empresas y Sociedades",
    short: "Constitución de Sociedades",
    highlight: "Acompañamiento integral en creación de S.A.S., estatutos a la medida y Cámara de Comercio.",
    badge: "Emprendimiento & Expansión"
  }
];

export interface FreeResourceItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  formatText: string;
  buttonText: string;
  whatsappMessage: string;
  iconType: 'calendar' | 'shield' | 'book' | 'checklist';
}

export const freeResourcesData: FreeResourceItem[] = [
  {
    id: "calendario-2026",
    badge: "ACTUALIZADO 2026",
    title: "Calendario Tributario 2026",
    description: "Cronograma consolidado de vencimientos DIAN y municipales (Renta PN y PJ, IVA, Retención en la fuente e ICA en Pereira, Cartago, La Virginia y Dosquebradas) para evitar sanciones y extemporaneidades.",
    formatText: "PDF Interactivo · Descarga Inmediata",
    buttonText: "Descargar Calendario",
    whatsappMessage: "Hola Angela, deseo obtener el Calendario Tributario 2026.",
    iconType: "calendar"
  },
  {
    id: "diagnostico-control",
    badge: "EXCEL FORMULADO",
    title: "Diagnóstico Control Interno & SAGRILAFT",
    description: "Matriz parametrizada para autoevaluar riesgos corporativos, segregación funcional y preparación ante requerimientos de Superintendencias y normatividad antilavado.",
    formatText: "Plantilla Excel (.xlsx) · Parametrizada",
    buttonText: "Solicitar Plantilla",
    whatsappMessage: "Hola Angela, deseo recibir la Plantilla de Diagnóstico de Control Interno y SAGRILAFT.",
    iconType: "shield"
  },
  {
    id: "guia-niif",
    badge: "GUÍA TÉCNICA",
    title: "Guía de Cierre Contable & Revelaciones",
    description: "Lista de 25 puntos críticos bajo NIIF (deterioro de cartera, inventarios, provisiones y notas explicativas) para garantizar dictámenes sin salvedades y estados financieros fidedignos.",
    formatText: "Manual Técnico PDF · Grupos 1 y 2",
    buttonText: "Descargar Guía NIIF",
    whatsappMessage: "Hola Angela, deseo descargar la Guía de Cierre Contable NIIF.",
    iconType: "book"
  },
  {
    id: "checklist-renta",
    badge: "CHECKLIST 2026",
    title: "Checklist Documental Declaración Renta",
    description: "Relación detallada de certificados tributarios, extractos financieros y soportes probatorios indispensables para la depuración del impuesto de renta sin objeciones por parte de la DIAN.",
    formatText: "Checklist Verificado · Personas & Empresas",
    buttonText: "Obtener Checklist",
    whatsappMessage: "Hola Angela, deseo el Checklist Documental para Declaración de Renta.",
    iconType: "checklist"
  }
];

export interface LocalFAQ {
  question: string;
  answer: string;
}

export const localFaqs: LocalFAQ[] = [
  {
    question: "¿Presta servicios de contabilidad y revisoría fiscal en Pereira, Cartago y La Virginia?",
    answer: "Sí. Angela Ramírez presta servicios profesionales presenciales y remotos de Revisoría Fiscal, Auditoría Financiera, Declaraciones de Renta y Asesoría Contable en Cartago (Valle), Pereira, La Virginia, Dosquebradas y en todo el departamento de Risaralda."
  },
  {
    question: "¿Cómo contactar a un contador o contadora pública para declaración de renta en Pereira o Cartago?",
    answer: "Puede agendar una consulta directa a través de WhatsApp al +57 310 527 4367. Se realiza un diagnóstico preliminar de ingresos, deducciones y documentación para presentar su declaración de renta sin sanciones ni requerimientos de la DIAN."
  },
  {
    question: "¿Qué garantía ofrece la revisoría fiscal y auditoría forense con Angela Ramírez?",
    answer: "Más de una década de experiencia intachable, 0 sanciones ante la Junta Central de Contadores (JCC) y la DIAN, y plena admisibilidad probatoria de informes bajo el Código General del Proceso (CGP) y las Normas Internacionales de Auditoría (NIA)."
  },
  {
    question: "¿Atiende personas naturales comerciantes y empresas pymes en Risaralda y Norte del Valle?",
    answer: "Sí. El acompañamiento está diseñado para personas naturales, comerciantes, profesionales independientes, y pequeñas y medianas empresas (Pymes) en régimen ordinario y Régimen Simple de Tributación (RST)."
  }
];

