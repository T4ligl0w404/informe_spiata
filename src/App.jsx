import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  FileText, 
  Scale, 
  Table, 
  Users, 
  Database, 
  CheckSquare, 
  Terminal, 
  Copy, 
  Check, 
  Menu, 
  X, 
  Download, 
  ExternalLink,
  ChevronRight,
  AlertTriangle,
  FileCode,
  Calendar,
  Layers,
  Info
} from 'lucide-react';

// ==========================================
// CONTENIDOS COMPLETOS DE LOS ARCHIVOS MD
// ==========================================

const markdownFiles = {
  "01_resumen_gonseb.md": `# 01_resumen_gonseb.md - Resumen Ejecutivo

## 1. Identificación del Caso
* **Nombre del incidente:** Ataque de Ransomware Sodinokibi a BancoEstado.
* **Fecha de ocurrencia:** Sábado 5 de septiembre de 2020 (detección inicial) con impacto crítico el lunes 7 de septiembre de 2020.
* **Víctima:** Banco del Estado de Chile (BancoEstado), única entidad bancaria estatal del país, responsable de la bancarización de más de 13 millones de chilenos mediante la "CuentaRUT".
* **Atacantes (Presuntos):** Grupo cibercriminal transnacional "REvil" (también conocidos como Sodinokibi), que operaban bajo la modalidad de Ransomware-as-a-Service (RaaS).

## 2. Cronología Detallada de los Hechos
* **Fase de Acceso Inicial (Previa):** Mediante campañas de phishing dirigidas (spear-phishing) dirigidas a empleados de la corporación o la explotación de una vulnerabilidad en un servicio VPN o de acceso remoto expuesto sin doble factor de autenticación (MFA), el atacante deposita un troyano inicial en una estación de trabajo de un funcionario.
* **Fase de Despliegue de Privilegios (Viernes 4 de Sep):** El malware realiza movimientos laterales en la red interna, comprometiendo controladores de dominio de Active Directory y escalando privilegios hasta obtener credenciales de administrador de sistemas.
* **Fase de Ejecución y Encriptación (Sábado 5 de Sep):** Se inicia la propagación masiva del ransomware Sodinokibi. Utilizando herramientas de administración de red legítimas (como políticas de grupo GPO), el binario de encriptación se ejecuta en aproximadamente 12.000 estaciones de trabajo y servidores internos de la institución.
* **Fase de Detección e Impacto Operativo (Lunes 7 de Sep):** Al iniciar la jornada laboral, los trabajadores se encuentran con pantallas de rescate exigiendo un pago multimillonario en criptomonedas (Monero/Bitcoin) a cambio de la clave de descifrado. BancoEstado toma la drástica decisión de **mantener cerradas sus 410 sucursales a nivel nacional** para contener la propagación y realizar un análisis forense.

## 3. Impacto del Incidente
* **Impacto Operacional:** Cierre total de sucursales durante 24-48 horas, lo que colapsó la atención física de millones de usuarios que dependen de la caja vecina y servicios presenciales.
* **Impacto Financiero:** Aunque no se vulneraron ni sustrajeron fondos de las cuentas de los clientes de manera directa, los costos de remediación, horas hombre de respuesta ante incidentes, consultoría forense externa y la pérdida transaccional en sucursales físicas se estimaron en millones de dólares.
* **Impacto Reputacional:** Cuestionamiento público y político sobre la robustez tecnológica del banco público más relevante del país, apenas dos años después del millonario ciberataque al Banco de Chile (2018).`,

  "02_marco_gonseb.md": `# 02_marco_gonseb.md - Marco Normativo Aplicable

El análisis de este incidente requiere un enfoque legal multidimensional, articulando leyes nacionales generales, normas sectoriales específicas del ámbito bancario chileno y tratados internacionales suscritos por el Estado de Chile.

## 1. Ley N° 21.459 - Ley de Delitos Informáticos (Chile)
* **Justificación:** Si bien el ataque ocurrió en 2020 (bajo la antigua Ley 19.223), un análisis legal moderno exige evaluar estos hechos conforme al nuevo estándar penal promulgado en junio de 2022. Esta ley sanciona penalmente las conductas dirigidas a vulnerar la integridad, confidencialidad y disponibilidad de sistemas informáticos, adecuándose a los estándares del Convenio de Budapest.

## 2. Ley N° 19.628 - Sobre Protección de la Vida Privada (Chile)
* **Justificación:** En un ataque de ransomware que paraliza 12.000 estaciones de trabajo de una entidad bancaria estatal, existe un riesgo inminente y directo sobre bases de datos que contienen datos personales, financieros y de identificación (RUT, saldos, direcciones) de más de 13 millones de ciudadanos. Esta ley regula el tratamiento de tales datos, el deber de confidencialidad y los derechos de los titulares ante brechas de seguridad.

## 3. Recopilación Actualizada de Normas (RAN) de la CMF - Capítulo 20-10 (Ciberseguridad)
* **Justificación:** Emitida por la Comisión para el Mercado Financiero (CMF), esta norma sectorial es de cumplimiento obligatorio para todas las instituciones bancarias en Chile. Regula específicamente la "Gestión de Seguridad de la Información y Ciberseguridad", exigiendo al Directorio de BancoEstado mantener estructuras de gobierno adecuadas, planes de continuidad de negocio (BCP), planes de recuperación ante desastres (DRP) y la obligación de reportar incidentes operacionales críticos a la CMF en un plazo máximo de 30 minutos desde su detección.

## 4. Convenio sobre la Ciberdelincuencia de Budapest (Tratado Internacional)
* **Justificación:** Chile es Estado Parte de este convenio desde 2017. Dado que los grupos detrás de REvil/Sodinokibi operan de forma transnacional, generalmente desde jurisdicciones fuera de América Latina (como Europa del Este), el Convenio de Budapest proporciona el marco legal habilitante para la cooperación internacional, la asistencia mutua entre policías (Interpol, OS9 de Carabineros, PDI) y la obtención de evidencia digital alojada en el extranjero de forma célere y estandarizada.`,

  "03_delitos_gonseb.md": `# 03_delitos_gonseb.md - Tipificación de Delitos bajo la Ley 21.459

Realizando un ejercicio de asimilación e hipótesis legal, si el ataque perpetrado por el grupo cibercriminal a BancoEstado fuese juzgado hoy en territorio chileno, las acciones del atacante se tipificarían bajo los siguientes artículos de la **Ley N° 21.459**:

## 1. Acceso Ilícito (Artículo 1°)
* **Mapeo del Hecho:** El ingreso inicial de los atacantes a la red corporativa de BancoEstado a través de credenciales comprometidas o la explotación de un túnel VPN sin autorización de la institución.
* **Análisis Legal:** Los perpetradores ingresaron y se mantuvieron en el sistema informático del banco superando barreras técnicas de seguridad (firewalls, autenticaciones) sin contar con la facultad ni el consentimiento de BancoEstado. Se configura en grado de consumado.

## 2. Daño Informático (Artículo 3°)
* **Mapeo del Hecho:** La encriptación masiva de archivos de sistema, bases de datos internas, documentos y software operativo en más de 12.000 equipos computacionales del banco mediante la carga maliciosa del ejecutable de REvil.
* **Análisis Legal:** Los atacantes alteraron, dañaron y borraron de manera irreversible el acceso legítimo a los datos contenidos en el sistema informático, inutilizándolos temporalmente para forzar el cobro del rescate.

## 3. Sabotaje Informático (Artículo 4°)
* **Mapeo del Hecho:** La paralización total del funcionamiento del banco, obligando al cierre de las 410 sucursales a nivel nacional, la caída de sistemas de atención de caja y la interrupción de plataformas web.
* **Análisis Legal:** Mediante la alteración masiva de los datos (encriptación), se obstaculizó y suspendió gravemente el normal funcionamiento y la prestación de los servicios financieros del banco estatal, afectando el orden público económico.

## 4. Abuso de Dispositivos (Artículo 6°)
* **Mapeo del Hecho:** El diseño, adquisición y propagación de herramientas maliciosas específicas (el binario del Ransomware Sodinokibi compilado para evadir los antivirus tradicionales de BancoEstado) introducidas en la red institucional.
* **Análisis Legal:** Se introdujo y facilitó un programa informático diseñado específicamente para la comisión de los delitos de daño y sabotaje informático definidos en la ley.`,

  "04_comparacion_gonseb.md": `# 04_comparacion_gonseb.md - Comparativa de Marcos Regulatorios por Industria

En Chile, el nivel de exigencia legal y técnica en ciberseguridad varía críticamente según la industria en la que opere la organización. La siguiente tabla compara el marco de BancoEstado (Sector Financiero) con otras dos industrias clave del país:

| Eje de Comparación | Sector Financiero (Ej. BancoEstado) | Sector Telecomunicaciones (Ej. Entel, Movistar) | Sector Retail / Consumo (Ej. Falabella, Cencosud) |
| :--- | :--- | :--- | :--- |
| **1. Ente Regulador y Normativa Primaria** | Comisión para el Mercado Financiero (CMF). Regulado por la Ley General de Bancos e Instrucciones RAN (Capítulo 20-10, Circular 3.626). | Subsecretaría de Telecomunicaciones (SUBTEL). Regulado por la Ley de Telecomunicaciones 18.168 y Resoluciones Técnicas de Ciberseguridad. | Servicio Nacional del Consumidor (SERNAC). Sin regulador técnico informático específico. Aplica Ley 19.496 de Protección al Consumidor. |
| **2. Obligación de Reporte de Incidentes** | **Extremadamente Crítico.** Obligación de reportar incidentes a la CMF dentro de los **30 minutos** posteriores a su detección a través de un canal exclusivo de emergencia. | **Crítico.** Reporte obligatorio a SUBTEL y al CSIRT de Telecomunicaciones en plazos de pocas horas si afecta la continuidad del servicio público de transmisión de datos. | **Moderado/Bajo.** No existe regulador que exija reporte técnico inmediato. Solo se reporta bajo Ley del Consumidor si hay afectación masiva de datos (SERNAC) o al SISS. |
| **3. Sanciones y Multas Aplicables** | Multas administrativas de hasta 5.000 UF (ampliables al doble ante reincidencia) impuestas por la CMF, además de la suspensión de operaciones o pérdidas de clasificación de riesgo. | Sanciones de SUBTEL que van desde amonestaciones hasta multas de 1.000 UTM, e incluso la caducidad de las concesiones en casos de negligencia reiterada grave. | Demandas colectivas vía SERNAC con indemnizaciones millonarias a los consumidores. Multas de hasta 1.500 UTM por infracción al deber de seguridad en el consumo. |`,

  "05_responsabilidades_gonseb.md": `# 05_responsabilidades_gonseb.md - Matriz de Responsabilidades Legales

Frente a un ciberataque de esta envergadura, la legislación chilena distribuye distintas responsabilidades sobre los actores involucrados:

## 1. Grupo Atacante (REvil / Sodinokibi)
* **Responsabilidad Penal:** Directa y principal. Conforme a la Ley 21.459, enfrentan penas de presidio menor en su grado medio a máximo por Acceso Ilícito (Art. 1) y Sabotaje Informático (Art. 4). Además, se configura la figura de Asociación Ilícita Criminal (Código Penal Chileno, Art. 292), dado que operan de forma organizada para extorsionar.
* **Responsabilidad Civil:** Civilmente obligados a la reparación de todos los perjuicios económicos directos generados a BancoEstado (costo de reposición, pérdida operativa) bajo el estatuto de responsabilidad extracontractual (Art. 2314 del Código Civil). Sin embargo, dada la clandestinidad transnacional, la persecución de esta responsabilidad es fácticamente inviable.

## 2. Directorio y Alta Gerencia de BancoEstado
* **Responsabilidad Administrativa:** Ante la CMF por eventuales fallas en el deber de cuidado e implementación de la Circular RAN 20-10. Los directores pueden ser sancionados personalmente si se demuestra que ignoraron advertencias previas de seguridad o no proveyeron el presupuesto necesario para mantener actualizadas las defensas de la institución.
* **Responsabilidad Civil:** Contractual frente a sus millones de cuentahabientes si la parálisis de los servicios causó perjuicios financieros demostrables (intereses no pagados, imposibilidad de realizar transacciones comerciales urgentes). El banco responde como persona jurídica institucional (Responsabilidad objetiva en el servicio).

## 3. Proveedores Externos de Ciberseguridad y TI
* **Responsabilidad Civil Contractual:** Si BancoEstado tenía contratados servicios de SOC (Security Operations Center), antivirus o monitoreo de red que no detectaron o alertaron la intrusión inicial debido a una evidente negligencia o incumplimiento de los niveles de servicio estipulados (SLA). La responsabilidad se limita a las indemnizaciones contractuales pactadas en los convenios de soporte tecnológico de la época.`,

  "06_datos_gonseb.md": `# 06_datos_gonseb.md - Tratamiento de Datos Personales y Ley 19.628

El ciberataque a BancoEstado puso a prueba los límites del resguardo de información de carácter privado en la banca estatal chilena bajo el alero de la **Ley N° 19.628**.

## 1. Identificación y Distinción de Datos Expuestos
* **Datos Personales de Carácter General (Art. 2° let. f):** Información como nombres completos, RUT (Cédula de Identidad), direcciones físicas, números de teléfono y correos electrónicos de clientes y funcionarios de la red interna. Estos datos requieren el consentimiento expreso del titular para su tratamiento y su filtración vulnera directamente el deber de reserva.
* **Datos de Carácter Económico/Financiero (Art. 17°):** Saldos de cuentas, historiales de transferencias, registros de créditos y números de tarjetas. Si bien no son definidos estrictamente como "datos sensibles" por la ley chilena (que se limita a origen racial, convicciones religiosas, salud, etc.), la jurisprudencia y la Ley de Bancos les otorga un estatus de máxima reserva bajo el Secreto Bancario.

## 2. Aplicación y Ejercicio de los Derechos ARCO
Frente a este incidente, cualquier titular de datos (cliente o empleado de BancoEstado) está legalmente habilitado para exigir el ejercicio de sus derechos ARCO ante la institución financiera:

1.  **Acceso:** El derecho a exigir que BancoEstado confirme formalmente si sus datos personales y de cuenta se vieron comprometidos, filtrados u observados por los atacantes en el incidente de ransomware.
2.  **Rectificación:** En caso de que la restauración de sistemas mediante respaldos (backups) haya corrompido datos personales de las cuentas del cliente, este puede exigir la corrección inmediata de la información errónea.
3.  **Cancelación (Eliminación):** Derecho a solicitar la eliminación de datos que ya no tengan sustento legal para ser tratados. *Límite:* En el ámbito financiero, el banco tiene la obligación legal de conservar registros transaccionales por 5 años (Ley General de Bancos), por lo que este derecho se ve limitado para cuentas activas.
4.  **Oposición:** Oponerse al tratamiento de sus datos para fines comerciales o de marketing cruzado utilizando el pretexto de la desconfianza generada por la vulnerabilidad técnica del incidente.`,

  "07_conclusiones_gonseb.md": `# 07_conclusiones_gonseb.md - Recomendaciones Técnicas-Legales y Reflexión Final

## 1. Plan de Recomendaciones para BancoEstado (Alineado a Estándares Internacionales)

### A. Adopción Estricta de la Nueva Ley de Ciberseguridad (Marco Nacional)
Con la reciente promulgación de la **Ley Marco de Ciberseguridad e Infraestructura Crítica de la Información**, BancoEstado califica indiscutiblemente como un **Operador de Importancia Vital (OIV)**. 
* **Acción:** Es prioritario constituir un Comité de Gestión de Incidentes permanente con enlace directo a la nueva Agencia Nacional de Ciberseguridad (ANCI).

### B. Implementación de un Framework de Control (Estándar Técnico)
* **Acción:** Migrar la estrategia defensiva institucional hacia los **Controles CIS v8** (especialmente los grupos de control de Acceso de Credenciales, Defensa contra Malware y Recuperación de Datos) y la norma **ISO/IEC 27001:2022**.

### C. Estrategia Zero Trust (Confianza Cero)
El ingreso a través de una estación de trabajo demuestra que la red interna confiaba ciegamente en los dispositivos una vez dentro del perímetro.
* **Acción:** Implementar segmentación estricta de red, autenticación multifactor obligatoria (MFA) para cada nodo y control de acceso basado en el principio del menor privilegio (PoLP).

### D. Simulacros de Resiliencia Operativa y Red Teaming
* **Acción:** Ejecutar pruebas periódicas de recuperación de respaldos desconectados de la red primaria (Air-gapped backups) para asegurar que en caso de una nueva encriptación masiva, el banco estatal pueda levantar sucursales críticas en menos de 4 horas de manera autónoma.

## 2. Reflexión Profesional Ético-Legal
El caso BancoEstado nos enseña que **la ciberseguridad ya no es un problema meramente de software, sino que constituye un pilar del Derecho y el Gobierno Corporativo**. 

En la era digital, la negligencia en la mantención de sistemas informáticos robustos equivale a un abandono del deber de custodia física de los bienes de los ciudadanos. La ética profesional de los ingenieros de software, administradores de red e informáticos jurídicos debe alinearse para comprender que detrás de cada base de datos comprometida, hay historias de vida, patrimonio y la seguridad nacional de un país entero en juego.`,

  "08_prompts_gonseb.md": `# 08_prompts_gonseb.md - Bitácora de Uso de Inteligencia Artificial

Este informe y el desarrollo del software de despliegue interactivo han sido construidos con el soporte ético y metodológico de Inteligencia Artificial (Gemini / Copilot), registrando un proceso de refinamiento continuo de prompts.

## 1. Registro de Prompts Relevantes

### Prompt 1: Diseño del Análisis de Delitos Informáticos (Sección 03)
* **Herramienta Empleada:** Gemini 2.5 Flash
* **Texto del Prompt:**
    > "Actúa como un abogado chileno experto en ciberseguridad y derecho penal informático. Analiza el caso del Ransomware a BancoEstado ocurrido en 2020. Necesito que mapees técnicamente el comportamiento del malware Sodinokibi (Phishing inicial, movimiento lateral, encriptación masiva, nota de rescate) a la nueva Ley de Delitos Informáticos de Chile (Ley 21.459), tipificando qué artículos se infringieron exactamente, justificando cada uno técnicamente y citando las normas."
* **Resultado de la IA:** La IA entregó un mapeo preciso vinculando los Artículos 1, 3 y 4 de la Ley 21.459.
* **Corrección y Ajustes:** Corregí la cita al artículo de interceptación de datos (Art. 2) ya que en el caso BancoEstado no existió evidencia fehaciente de interceptación de flujos de datos en tránsito de redes de telecomunicaciones, sino daño a sistemas almacenados. Reenfocamos en el Art 6 (Abuso de dispositivos) por el ingreso del binario malicioso.

### Prompt 2: Estructura de la Tabla Comparativa Industrial (Sección 04)
* **Herramienta Empleada:** GitHub Copilot Chat
* **Texto del Prompt:**
    > "Genera una tabla comparativa en formato Markdown para contrastar la regulación de ciberseguridad en Chile en tres industrias: Sector Financiero (con la CMF y la circular 20-10), Sector de Telecomunicaciones (SUBTEL), e Industria de Consumo/Retail (bajo el amparo de la Ley del Consumidor/SERNAC). Compara basándote en 3 ejes: Entidad fiscalizadora y norma primaria, plazos de obligación de notificar incidentes de seguridad, y la severidad de las multas asociadas. Asegúrate de que sea 100% verídico y actualizado a la legislación de 2026."
* **Resultado de la IA:** Una tabla limpia que sirvió de base directa para el archivo comparativo.
* **Corrección y Ajustes:** Verifiqué los montos de las multas de la Ley General de Bancos y la ley del consumidor (SERNAC), ajustando la escala de Unidades de Fomento (UF) e introduciendo el nuevo estándar de la Ley del Consumidor (hasta 1.500 UTM por fallas de seguridad).

## 2. Reflexión Final sobre el Uso de IA en este Proyecto
La Inteligencia Artificial demostró ser una herramienta indispensable para acelerar la estructuración técnica del análisis legislativo. Su valor radica no en la generación ciega de contenido, sino en su capacidad para actuar como un "copiloto consultivo" de alta velocidad, permitiendo la integración instantánea de bases dogmáticas del derecho chileno con procesos y marcos estrictamente técnicos del mundo del hacking ético y la seguridad defensiva. Su uso incrementó sustancialmente la rigurosidad conceptual del informe.`
};

export default function App() {
  const [activeTab, setActiveTab] = useState("01_resumen_gonseb.md");
  const [viewMode, setViewMode] = useState("app"); // "app" or "md"
  const [copiedFile, setCopiedFile] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const tabList = [
    { id: "01_resumen_gonseb.md", label: "01. Resumen", icon: FileText, color: "text-blue-500", bg: "bg-blue-50" },
    { id: "02_marco_gonseb.md", label: "02. Marco Normativo", icon: Shield, color: "text-emerald-500", bg: "bg-emerald-50" },
    { id: "03_delitos_gonseb.md", label: "03. Tipificación Delitos", icon: Scale, color: "text-rose-500", bg: "bg-rose-50" },
    { id: "04_comparacion_gonseb.md", label: "04. Comparación Marcos", icon: Table, color: "text-amber-500", bg: "bg-amber-50" },
    { id: "05_responsabilidades_gonseb.md", label: "05. Responsabilidades", icon: Users, color: "text-violet-500", bg: "bg-violet-50" },
    { id: "06_datos_gonseb.md", label: "06. Datos Personales", icon: Database, color: "text-indigo-500", bg: "bg-indigo-50" },
    { id: "07_conclusiones_gonseb.md", label: "07. Conclusiones", icon: CheckSquare, color: "text-teal-500", bg: "bg-teal-50" },
    { id: "08_prompts_gonseb.md", label: "08. Bitácora de Prompts", icon: Terminal, color: "text-slate-500", bg: "bg-slate-50" },
  ];

  const handleCopy = (filename, text) => {
    // Usar la instrucción de copiado compatible con iFrames (execCommand)
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed"; // Evitar scrolling al agregarlo al DOM
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand("copy");
      setCopiedFile(filename);
      setToastMessage(`¡Archivo '${filename}' copiado al portapapeles con éxito!`);
      setShowToast(true);
      setTimeout(() => setCopiedFile(null), 3000);
      setTimeout(() => setShowToast(false), 3000);
    } catch (err) {
      console.error("Error al copiar texto: ", err);
    } finally {
      document.body.removeChild(textarea);
    }
  };

  // Renderizador interactivo adaptado para simular un parser markdown estético
  const renderAppView = (tabId) => {
    switch (tabId) {
      case "01_resumen_gonseb.md":
        return (
          <div className="space-y-6 animate-fadeIn">
            {/* Cabecera del caso */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-5 rounded-r-lg shadow-sm">
              <div className="flex items-center gap-3">
                <AlertTriangle className="text-red-500 h-6 w-6 shrink-0" />
                <h3 className="text-lg font-bold text-red-950">Ataque Crítico Sodinokibi/REvil Ransomware</h3>
              </div>
              <p className="mt-2 text-sm text-red-800 leading-relaxed">
                Este caso representa uno de los hitos más críticos en la historia de la ciberseguridad nacional chilena, exponiendo la vulnerabilidad de la infraestructura financiera estatal en Septiembre de 2020.
              </p>
            </div>

            {/* Ficha Resumen */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-lg border border-slate-150 shadow-sm">
                <h4 className="text-sm font-semibold uppercase text-slate-400 tracking-wider">Detalles de la Víctima</h4>
                <div className="mt-3 space-y-2">
                  <div className="flex justify-between border-b pb-2"><span className="text-slate-500 text-sm">Organización:</span> <span className="font-semibold text-slate-800 text-sm">BancoEstado</span></div>
                  <div className="flex justify-between border-b pb-2"><span className="text-slate-500 text-sm">Tipo de Entidad:</span> <span className="font-semibold text-slate-800 text-sm">Banca Estatal Pública</span></div>
                  <div className="flex justify-between border-b pb-2"><span className="text-slate-500 text-sm">Clientes Afectados:</span> <span className="font-semibold text-slate-800 text-sm">+13 Millones (CuentaRUT)</span></div>
                  <div className="flex justify-between"><span className="text-slate-500 text-sm">Infraestructura:</span> <span className="font-semibold text-slate-800 text-sm">~12,000 Equipos Afectados</span></div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-slate-150 shadow-sm">
                <h4 className="text-sm font-semibold uppercase text-slate-400 tracking-wider">Ficha Técnica del Ataque</h4>
                <div className="mt-3 space-y-2">
                  <div className="flex justify-between border-b pb-2"><span className="text-slate-500 text-sm">Actor de Amenaza:</span> <span className="font-semibold text-red-600 text-sm">REvil / Sodinokibi</span></div>
                  <div className="flex justify-between border-b pb-2"><span className="text-slate-500 text-sm">Vector de Ataque:</span> <span className="font-semibold text-slate-800 text-sm">Phishing / Credenciales VPN</span></div>
                  <div className="flex justify-between border-b pb-2"><span className="text-slate-500 text-sm">Tipo de Malware:</span> <span className="font-semibold text-slate-800 text-sm">Ransomware-as-a-Service (RaaS)</span></div>
                  <div className="flex justify-between"><span className="text-slate-500 text-sm">Exigencia de Pago:</span> <span className="font-semibold text-slate-800 text-sm">Monero / Bitcoin (No pagado)</span></div>
                </div>
              </div>
            </div>

            {/* Línea de tiempo interactiva */}
            <div className="bg-white p-6 rounded-lg border border-slate-150 shadow-sm">
              <h3 className="text-md font-bold text-slate-800 mb-6 flex items-center gap-2">
                <Calendar className="text-blue-500 h-5 w-5" /> Cronología del Incidente
              </h3>
              <div className="relative border-l-2 border-slate-150 ml-4 pl-6 space-y-6">
                <div className="relative">
                  <div className="absolute -left-[31px] top-1 bg-emerald-500 rounded-full h-4 w-4 border-2 border-white"></div>
                  <span className="text-xs font-semibold text-emerald-600 uppercase">Fase Inicial</span>
                  <h4 className="font-semibold text-slate-800 mt-1">Intrusión Silenciosa</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Un empleado corporativo recibe un correo electrónico dirigido de alta fidelidad (Spear Phishing) que contiene un archivo adjunto malicioso. Al abrirlo, el troyano inicial obtiene acceso a su estación de trabajo interna.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] top-1 bg-amber-500 rounded-full h-4 w-4 border-2 border-white"></div>
                  <span className="text-xs font-semibold text-amber-600 uppercase">Fase Intermedia</span>
                  <h4 className="font-semibold text-slate-800 mt-1">Movimiento Lateral y Escalación de Privilegios</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    El malware recorre los segmentos de red interna de BancoEstado aprovechando debilidades en los protocolos de autenticación y la falta de segmentación estricta, obteniendo el control de las credenciales de Administración de Dominio de Active Directory.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] top-1 bg-red-500 rounded-full h-4 w-4 border-2 border-white"></div>
                  <span className="text-xs font-semibold text-red-600 uppercase">Fase de Impacto</span>
                  <h4 className="font-semibold text-slate-800 mt-1">Despliegue Masivo de Ransomware (Sábado 5 Sept 2020)</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Aprovechando las horas de menor monitoreo (fin de semana), el atacante ejecuta políticas de grupo (GPO) para forzar la instalación y ejecución del binario del ransomware REvil en unas 12.000 computadoras y servidores institucionales.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] top-1 bg-slate-700 rounded-full h-4 w-4 border-2 border-white"></div>
                  <span className="text-xs font-semibold text-slate-700 uppercase">Fase de Remediación</span>
                  <h4 className="font-semibold text-slate-800 mt-1">Cierre Total de Sucursales (Lunes 7 Sept 2020)</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Para evitar la propagación remota, el Directorio de BancoEstado cierra sus 410 sucursales físicas a nivel nacional. Comienza una titánica labor forense y de restauración manual de sistemas mediante respaldos (backups). No se pagó rescate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case "02_marco_gonseb.md":
        return (
          <div className="space-y-6 animate-fadeIn">
            <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <Layers className="text-emerald-500" /> Los 4 Pilares del Marco Normativo Aplicable
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Un análisis completo de este caso exige evaluar los hechos bajo un prisma de derecho comparado y jerarquía legal, integrando normas penales nacionales, regulaciones específicas y convenios internacionales:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-lg border border-slate-150 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded bg-rose-50 text-rose-600"><Scale size={20} /></div>
                  <h4 className="font-bold text-slate-800 text-sm">1. Ley N° 21.459 (Delitos Informáticos)</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong>Justificación:</strong> Es la norma penal matriz en ciberseguridad en Chile. Si bien el incidente original data de 2020, este informe evalúa las conductas de los ciberdelincuentes bajo el actual estándar penal de 2022 (alineado con la comunidad internacional).
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-slate-150 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded bg-indigo-50 text-indigo-600"><Database size={20} /></div>
                  <h4 className="font-bold text-slate-800 text-sm">2. Ley N° 19.628 (Datos Personales)</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong>Justificación:</strong> El volumen informático de un banco estatal comprende millones de datos de identificación. Esta norma regula cómo el banco debe salvaguardar el deber de secreto, protegiendo las bases de datos de accesos por agentes maliciosos externos.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-slate-150 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded bg-emerald-50 text-emerald-600"><Shield size={20} /></div>
                  <h4 className="font-bold text-slate-800 text-sm">3. Cap. 20-10 RAN de la CMF</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong>Justificación:</strong> Regulador sectorial específico (CMF). La Circular RAN 20-10 obliga a los bancos a estructurar planes de ciberseguridad exigentes y a reportar de forma prioritaria brechas críticas de continuidad operativa en un plazo perentorio de 30 minutos.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-slate-150 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded bg-blue-50 text-blue-600"><ExternalLink size={20} /></div>
                  <h4 className="font-bold text-slate-800 text-sm">4. Convenio de Budapest</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong>Justificación:</strong> Tratado internacional de cooperación del cual Chile es firmante. Habilita la persecución de grupos criminales transnacionales como REvil, facilitando requerimientos policiales ágiles fuera de las fronteras chilenas.
                </p>
              </div>
            </div>
          </div>
        );

      case "03_delitos_gonseb.md":
        return (
          <div className="space-y-6 animate-fadeIn">
            <h3 className="text-lg font-bold text-slate-800">Tipificación y Mapeo Penal (Ley N° 21.459)</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Mapeamos de forma sistemática las acciones técnicas realizadas por los cibercriminales del grupo REvil en el ataque a BancoEstado, tipificando cada hito en los nuevos tipos penales chilenos:
            </p>

            <div className="space-y-4">
              <div className="bg-white border border-slate-150 rounded-lg p-5">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b pb-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 text-xs font-semibold rounded bg-red-50 text-red-700 border border-red-200">Acción 1</span>
                    <h4 className="font-bold text-slate-800 text-sm">Intrusión a través de VPN / Phishing</h4>
                  </div>
                  <span className="text-xs font-bold text-slate-500 uppercase">Artículo 1° - Acceso Ilícito</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong>Análisis Legal:</strong> Los atacantes penetraron el perímetro lógico corporativo del banco saltándose los sistemas de control de identidad digital del personal sin contar con la debida autorización del propietario del sistema.
                </p>
              </div>

              <div className="bg-white border border-slate-150 rounded-lg p-5">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b pb-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 text-xs font-semibold rounded bg-red-50 text-red-700 border border-red-200">Acción 2</span>
                    <h4 className="font-bold text-slate-800 text-sm">Encriptación Masiva de Archivos</h4>
                  </div>
                  <span className="text-xs font-bold text-slate-500 uppercase">Artículo 3° - Daño Informático</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong>Análisis Legal:</strong> Al alterar los bits de la información mediante algoritmos criptográficos asimétricos, los atacantes inutilizaron, destruyeron e impidieron el acceso legítimo de BancoEstado a su propia documentación operativa almacenada en los discos.
                </p>
              </div>

              <div className="bg-white border border-slate-150 rounded-lg p-5">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b pb-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 text-xs font-semibold rounded bg-red-50 text-red-700 border border-red-200">Acción 3</span>
                    <h4 className="font-bold text-slate-800 text-sm">Paralización de Sucursales y Servicios</h4>
                  </div>
                  <span className="text-xs font-bold text-slate-500 uppercase">Artículo 4° - Sabotaje Informático</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong>Análisis Legal:</strong> Mediante la indisponibilidad de los datos encriptados, se paralizó de forma deliberada el funcionamiento global del banco del Estado, impidiendo la entrega normal de servicios de depósito y retiro de fondos públicos, dañando gravemente la infraestructura crítica.
                </p>
              </div>

              <div className="bg-white border border-slate-150 rounded-lg p-5">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b pb-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 text-xs font-semibold rounded bg-red-50 text-red-700 border border-red-200">Acción 4</span>
                    <h4 className="font-bold text-slate-800 text-sm">Introducción del Ejecutable Malicioso REvil</h4>
                  </div>
                  <span className="text-xs font-bold text-slate-500 uppercase">Artículo 6° - Abuso de Dispositivos</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong>Análisis Legal:</strong> El diseño, importación, propagación y ejecución del software nocivo diseñado con el fin inequívoco de secuestrar datos y forzar extorsiones encuadra en la distribución de malware de sabotaje tipificado en este artículo.
                </p>
              </div>
            </div>
          </div>
        );

      case "04_comparacion_gonseb.md":
        return (
          <div className="space-y-6 animate-fadeIn">
            <h3 className="text-lg font-bold text-slate-800">Comparación de Marcos Regulatorios Nacionales</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              La rigurosidad legal impuesta por el Estado de Chile varía sustancialmente según la industria de interés, situando a la industria bancaria en el peldaño de máxima exigencia debido a su estatus de Infraestructura Crítica:
            </p>

            {/* Tabla Comparativa Responsiva */}
            <div className="overflow-x-auto rounded-lg border border-slate-200 shadow-sm">
              <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
                <thead className="bg-slate-50 text-slate-700 uppercase text-xs">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Eje de Comparación</th>
                    <th className="px-4 py-3 font-semibold text-blue-800 bg-blue-50/50">Sector Financiero (BancoEstado)</th>
                    <th className="px-4 py-3 font-semibold text-emerald-800 bg-emerald-50/50">Sector Telecomunicaciones</th>
                    <th className="px-4 py-3 font-semibold text-amber-800 bg-amber-50/50">Retail / Consumo Masivo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white text-slate-700 text-xs leading-relaxed">
                  <tr>
                    <td className="px-4 py-3 font-bold bg-slate-50/30">Ente Fiscalizador</td>
                    <td className="px-4 py-3 bg-blue-50/10">
                      <strong>Comisión para el Mercado Financiero (CMF)</strong>
                      <p className="text-slate-500 mt-1">Regulado por Ley de Bancos y circulares de seguridad.</p>
                    </td>
                    <td className="px-4 py-3 bg-emerald-50/10">
                      <strong>Subsecretaría de Telecomunicaciones (SUBTEL)</strong>
                      <p className="text-slate-500 mt-1">Normas de continuidad de servicios esenciales.</p>
                    </td>
                    <td className="px-4 py-3 bg-amber-50/10">
                      <strong>Servicio Nacional del Consumidor (SERNAC)</strong>
                      <p className="text-slate-500 mt-1">Fiscalización enfocada en contratos y seguridad del consumo.</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold bg-slate-50/30">Plazo Reporte Incidente</td>
                    <td className="px-4 py-3 bg-blue-50/10">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-100 text-red-800 border border-red-200">Máximo 30 Minutos</span>
                      <p className="text-slate-500 mt-1">Notificación obligatoria de incidentes operacionales a la CMF.</p>
                    </td>
                    <td className="px-4 py-3 bg-emerald-50/10">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-200">Pocas Horas</span>
                      <p className="text-slate-500 mt-1">Obligatorio si se ven interrumpidos servicios esenciales a usuarios.</p>
                    </td>
                    <td className="px-4 py-3 bg-amber-50/10">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-800 border border-slate-200">Sin Plazo Fijo Técnico</span>
                      <p className="text-slate-500 mt-1">Solo se reporta bajo Ley General de Consumidor si hay daño a datos.</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold bg-slate-50/30">Límite de Sanciones</td>
                    <td className="px-4 py-3 bg-blue-50/10">
                      <strong>Hasta 5.000 UF</strong>
                      <p className="text-slate-500 mt-1">Duplicables por reincidencia, además de caídas en clasificación de riesgo.</p>
                    </td>
                    <td className="px-4 py-3 bg-emerald-50/10">
                      <strong>Hasta 1.000 UTM</strong>
                      <p className="text-slate-500 mt-1">SUBTEL puede llegar a caducar licencias operativas por fallas graves.</p>
                    </td>
                    <td className="px-4 py-3 bg-amber-50/10">
                      <strong>Hasta 1.500 UTM</strong>
                      <p className="text-slate-500 mt-1">Por infracciones al deber de seguridad, sumado a demandas colectivas civiles.</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );

      case "05_responsabilidades_gonseb.md":
        return (
          <div className="space-y-6 animate-fadeIn">
            <h3 className="text-lg font-bold text-slate-800">Matriz de Distribución de Responsabilidades</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              La persecución de las responsabilidades legales difiere críticamente entre los agentes internos responsables de la gobernanza informática y la autoría intelectual del crimen:
            </p>

            <div className="space-y-4">
              <div className="bg-white border-l-4 border-rose-500 p-5 rounded-r-lg shadow-sm">
                <h4 className="font-bold text-rose-950 text-sm flex items-center gap-2">
                  <AlertTriangle className="text-rose-600" size={18} /> Atacante Externo (REvil)
                </h4>
                <p className="text-xs text-rose-900 mt-2 leading-relaxed">
                  <strong>Responsabilidad Penal Directa:</strong> Imputables de presidio menor a medio por los delitos de la Ley 21.459. Se suma la figura de asociación ilícita para el lavado y la extorsión transnacional.
                </p>
                <p className="text-xs text-rose-850 mt-1">
                  <strong>Responsabilidad Civil Extracontractual:</strong> Obligación civil de reparar los miles de millones de pesos perdidos en la remediación. <em>Desafío práctico:</em> Clandestinidad e inoperabilidad judicial internacional.
                </p>
              </div>

              <div className="bg-white border-l-4 border-indigo-500 p-5 rounded-r-lg shadow-sm">
                <h4 className="font-bold text-indigo-950 text-sm flex items-center gap-2">
                  <Shield className="text-indigo-600" size={18} /> Directorio de BancoEstado
                </h4>
                <p className="text-xs text-indigo-900 mt-2 leading-relaxed">
                  <strong>Responsabilidad Administrativa Institucional:</strong> BancoEstado responde directamente ante la CMF por brechas en la continuidad operacional y por fallar en la debida diligencia de su Gobierno de Ciberseguridad.
                </p>
                <p className="text-xs text-indigo-850 mt-1">
                  <strong>Responsabilidad Contractual frente a Clientes:</strong> Responden de forma civil por no dar acceso oportuno a los ahorros en sucursales y no garantizar canales estables de transaccionalidad.
                </p>
              </div>

              <div className="bg-white border-l-4 border-slate-500 p-5 rounded-r-lg shadow-sm">
                <h4 className="font-bold text-slate-950 text-sm flex items-center gap-2">
                  <Users className="text-slate-600" size={18} /> Empresas Tecnológicas de Soporte (Proveedores)
                </h4>
                <p className="text-xs text-slate-900 mt-2 leading-relaxed">
                  <strong>Responsabilidad Contractual (SLA):</strong> Compromiso de vigilar de manera ininterrumpida las anomalías de red. Si se demuestra que los antivirus y sistemas SIEM fallaron por desactualización de firmas o negligencia de operadores externos, se activan pólizas de responsabilidad civil contractual limitadas a los topes de indemnización contractuales preestablecidos.
                </p>
              </div>
            </div>
          </div>
        );

      case "06_datos_gonseb.md":
        return (
          <div className="space-y-6 animate-fadeIn">
            <h3 className="text-lg font-bold text-slate-800">Evaluación bajo la Ley de Datos Personales N° 19.628</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              En este incidente, el banco debe catalogar y custodiar con estricta reserva los datos que viajan a través de sus sistemas informáticos para evitar la fuga de información sensible de sus cuentahabientes:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-lg border border-slate-150 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  <h4 className="font-bold text-slate-800 text-sm">Datos Personales Generales</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Incluye nombres, cédulas de identidad (RUT), datos de contacto de clientes y correos electrónicos de empleados de BancoEstado. Su resguardo requiere el cumplimiento estricto del deber de secreto, regulado por el Art. 2 let f de la Ley 19.628.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-slate-150 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-3 w-3 rounded-full bg-purple-500"></div>
                  <h4 className="font-bold text-slate-800 text-sm">Datos Económico-Financieros</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Saldos de cuentas de ahorro, transferencias efectuadas, deudas registradas y transacciones electrónicas. Si bien no se catalogan de forma taxativa como "datos sensibles" por la ley general chilena, sí caen bajo el estricto amparo legal de la **Reserva y Secreto Bancario**.
                </p>
              </div>
            </div>

            {/* Simulador Interactivo de Derechos ARCO */}
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <h4 className="font-bold text-slate-800 text-sm mb-4 flex items-center gap-2">
                <Info className="text-indigo-600" size={18} /> ¿Cómo ejercen los clientes sus Derechos ARCO en este escenario?
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                <div className="bg-white p-4 rounded border border-slate-200">
                  <span className="font-bold text-blue-600 block mb-1">A - ACCESO</span>
                  El cliente exige saber si su RUT, dirección o saldos transaccionales fueron expuestos y extraídos por el grupo REvil en el ataque.
                </div>
                <div className="bg-white p-4 rounded border border-slate-200">
                  <span className="font-bold text-emerald-600 block mb-1">R - RECTIFICACIÓN</span>
                  Si la restauración de bases de datos corrompió o desactualizó saldos de cuentas, el cliente exige su corrección inmediata con comprobantes físicos.
                </div>
                <div className="bg-white p-4 rounded border border-slate-200">
                  <span className="font-bold text-amber-600 block mb-1">C - CANCELACIÓN</span>
                  El usuario pide borrar sus datos si decide cerrar sus cuentas. <em>Límite:</em> La ley de bancos exige guardar historiales por 5 años por seguridad nacional.
                </div>
                <div className="bg-white p-4 rounded border border-slate-200">
                  <span className="font-bold text-purple-600 block mb-1">O - OPOSICIÓN</span>
                  El titular se opone a que BancoEstado use sus datos personales para campañas de marketing cruzado de seguros o créditos de consumo.
                </div>
              </div>
            </div>
          </div>
        );

      case "07_conclusiones_gonseb.md":
        return (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-gradient-to-r from-teal-50 to-emerald-50 border-l-4 border-teal-500 p-5 rounded-r-lg shadow-sm">
              <h3 className="text-lg font-bold text-teal-950 flex items-center gap-2">
                <CheckSquare className="text-teal-600 animate-pulse" /> Recomendaciones Estratégicas Técnicas-Legales
              </h3>
              <p className="mt-2 text-xs text-teal-800 leading-relaxed">
                Este plan de remediación robustece la defensa de BancoEstado alineándolo con los mayores estándares globales de resiliencia operativa y la nueva Ley Marco de Ciberseguridad promulgada en Chile:
              </p>
            </div>

            <div className="space-y-4 text-xs">
              <div className="bg-white p-4 rounded-lg border border-slate-150 flex gap-3 shadow-sm">
                <span className="h-6 w-6 shrink-0 rounded bg-teal-50 text-teal-600 font-bold flex items-center justify-center">1</span>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Designación como Operador de Importancia Vital (OIV)</h4>
                  <p className="text-slate-600 mt-1 leading-relaxed">
                    Bajo el marco de la nueva **Ley Marco de Ciberseguridad de Chile**, BancoEstado debe reportar obligatoriamente cualquier incidente grave a la **ANCI** en plazos inferiores a 3 horas e implementar planes de auditoría externa anual.
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border border-slate-150 flex gap-3 shadow-sm">
                <span className="h-6 w-6 shrink-0 rounded bg-teal-50 text-teal-600 font-bold flex items-center justify-center">2</span>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Adopción del Framework de Controles CIS v8</h4>
                  <p className="text-slate-600 mt-1 leading-relaxed">
                    Implementar controles estrictos para la mitigación del ransomware, enfocándose en la defensa contra código dañino (Control 10), gestión de acceso por credenciales administrativas (Control 6) y planes de recuperación y backup ante desastres offline (Control 11).
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border border-slate-150 flex gap-3 shadow-sm">
                <span className="h-6 w-6 shrink-0 rounded bg-teal-50 text-teal-600 font-bold flex items-center justify-center">3</span>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Migración a Arquitectura Zero Trust</h4>
                  <p className="text-slate-600 mt-1 leading-relaxed">
                    Eliminar el concepto obsoleto de seguridad perimetral tradicional. Dividir los segmentos de la red bancaria y exigir autenticación de doble factor física (MFA) para todo servidor, equipo de oficina y terminal transaccional de caja de forma obligatoria.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg border border-slate-150 shadow-sm text-xs leading-relaxed">
              <h4 className="font-bold text-slate-800 text-sm mb-2">Reflexión Profesional Ético-Legal</h4>
              <p className="text-slate-600">
                El ciberataque a BancoEstado nos demuestra que la seguridad defensiva ya no debe concebirse como un gasto o un apéndice técnico de informática, sino como una **obligación ética institucional** de resguardo de los derechos fundamentales de los chilenos. El abandono de sistemas vulnerables es un perjuicio patrimonial público del cual los administradores de sistemas deben responder con total responsabilidad y ética.
              </p>
            </div>
          </div>
        );

      case "08_prompts_gonseb.md":
        return (
          <div className="space-y-6 animate-fadeIn">
            <h3 className="text-lg font-bold text-slate-800">Bitácora de Uso y Refinamiento de Inteligencia Artificial</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              A continuación, se documentan las interacciones más críticas llevadas a cabo con motores de IA para compilar este informe y el código fuente de despliegue, logrando el cumplimiento exigido por la rúbrica de evaluación:
            </p>

            <div className="space-y-4">
              <div className="bg-white border border-slate-150 rounded-lg p-5">
                <div className="flex items-center gap-2 border-b pb-3 mb-3">
                  <Terminal size={18} className="text-slate-600" />
                  <span className="text-xs font-bold text-slate-600 uppercase">Caso 1: Prompt Penal Ley 21.459</span>
                </div>
                <div className="bg-slate-50 p-3 rounded text-xs font-mono text-slate-700 mb-2 whitespace-pre-wrap">
                  "Actúa como un abogado chileno experto en ciberseguridad. Analiza el caso BancoEstado 2020. Mapea el comportamiento de Sodinokibi a la nueva Ley de Delitos Informáticos de Chile (Ley 21.459)..."
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong>Corrección Aplicada:</strong> El motor de IA sugirió inicialmente tipificar la interceptación de flujos de datos (Art. 2). Se corrigió manualmente debido a que no existió evidencia de sniffeo en redes externas, sino secuestro y encriptación de datos estáticos en hosts internos, reenfocando al Art. 6 (Abuso de dispositivos).
                </p>
              </div>

              <div className="bg-white border border-slate-150 rounded-lg p-5">
                <div className="flex items-center gap-2 border-b pb-3 mb-3">
                  <Terminal size={18} className="text-slate-600" />
                  <span className="text-xs font-bold text-slate-600 uppercase">Caso 2: Comparativa de Industrias</span>
                </div>
                <div className="bg-slate-50 p-3 rounded text-xs font-mono text-slate-700 mb-2 whitespace-pre-wrap">
                  "Genera una tabla comparativa en formato Markdown para contrastar la regulación de ciberseguridad en Chile: Financiero (CMF 20-10), Telecomunicaciones (SUBTEL), y Retail/Consumo (SERNAC)..."
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong>Corrección Aplicada:</strong> Se verificaron manualmente las multas indicadas por la IA para el sector financiero en Chile, ajustando la escala de Unidades de Fomento (UF) para evitar de forma absoluta alucinaciones numéricas desactualizadas.
                </p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800">
      
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-5 right-5 z-50 bg-slate-900 text-white px-4 py-3 rounded-lg shadow-xl flex items-center gap-2 border border-slate-700 animate-slideUp">
          <Check className="text-emerald-400 h-5 w-5" />
          <span className="text-xs font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* TOP HEADER */}
      <header className="bg-slate-900 text-white px-4 py-4 md:px-8 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
            className="md:hidden p-2 rounded hover:bg-slate-800"
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <div className="flex items-center gap-2">
            <Shield className="text-indigo-400 h-6 w-6" />
            <div>
              <h1 className="text-md md:text-lg font-bold tracking-tight">Evaluación Sumativa N°2</h1>
              <p className="text-[10px] md:text-xs text-slate-400">Análisis Legal de Caso Real de Ciberseguridad</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs">
          <div className="hidden lg:block text-right">
            <p className="font-semibold text-slate-200">Asignatura: Fundamentos de Seguridad</p>
            <p className="text-[10px] text-slate-400">INACAP Valparaíso • Otoño 2026</p>
          </div>
          <span className="h-8 w-px bg-slate-700 hidden lg:block"></span>
          <div className="bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700 text-right">
            <span className="text-[10px] text-indigo-400 font-bold block">REPOSITORIO / PROYECTO</span>
            <span className="font-mono text-slate-300">informe_gonseb</span>
          </div>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <div className="flex-1 flex relative overflow-hidden">
        
        {/* SIDEBAR (Responsive) */}
        <aside className={`
          fixed md:relative top-0 bottom-0 left-0 z-40 w-72 bg-white border-r border-slate-200 p-4 transition-transform duration-200 ease-in-out shrink-0
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}>
          <div className="flex items-center justify-between md:hidden pb-4 mb-4 border-b">
            <h2 className="font-bold text-slate-800 text-sm">Menú de Navegación</h2>
            <button onClick={() => setIsSidebarOpen(false)} className="p-1 rounded hover:bg-slate-100">
              <X size={18} />
            </button>
          </div>

          {/* Tarjeta de Alumno */}
          <div className="bg-indigo-950 text-white rounded-xl p-4 mb-6 relative overflow-hidden">
            <div className="absolute right-0 bottom-0 translate-x-3 translate-y-3 opacity-10">
              <Shield size={120} />
            </div>
            <span className="text-[9px] uppercase font-bold tracking-widest text-indigo-300">Alumno Evaluado</span>
            <h2 className="text-sm font-bold mt-1">Sebastián González (gonseb)</h2>
            <p className="text-[10px] text-indigo-200 mt-1">INACAP Departamento Informática</p>
            <div className="mt-3 bg-indigo-900/60 rounded p-2 text-[10px] font-mono border border-indigo-800 text-indigo-200">
              Carpeta: <span className="text-white font-semibold">docs_gonseb/</span>
            </div>
          </div>

          <nav className="space-y-1">
            <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400 px-2 mb-2">Secciones del Informe (.md)</p>
            {tabList.map((tab) => {
              const TabIcon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setIsSidebarOpen(false);
                  }}
                  className={`
                    w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left text-xs font-semibold transition-all
                    ${isActive 
                      ? `${tab.bg} ${tab.color} border-l-4 border-${tab.color.split('-')[1]}-500 shadow-sm` 
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 border-l-4 border-transparent'}
                  `}
                >
                  <TabIcon size={16} className={isActive ? tab.color : "text-slate-400"} />
                  <span className="truncate">{tab.label}</span>
                  {isActive && <ChevronRight size={14} className="ml-auto shrink-0" />}
                </button>
              );
            })}
          </nav>
        </aside>

        {/* SIDEBAR BACKDROP */}
        {isSidebarOpen && (
          <div 
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-slate-900/40 z-30 md:hidden"
          ></div>
        )}

        {/* WORKSPACE AREA */}
        <main className="flex-1 flex flex-col min-w-0 bg-slate-50 overflow-y-auto p-4 md:p-8">
          
          {/* CONTROL TOP BAR */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5 mb-6">
            <div>
              <span className="text-xs text-indigo-600 font-bold uppercase tracking-wider">Visualizando Archivo</span>
              <h2 className="text-lg font-bold text-slate-900">{activeTab}</h2>
            </div>

            {/* Selector de Modo */}
            <div className="flex items-center bg-slate-200 p-1 rounded-lg self-start">
              <button
                onClick={() => setViewMode("app")}
                className={`
                  flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all
                  ${viewMode === "app" 
                    ? "bg-white text-slate-900 shadow-sm" 
                    : "text-slate-600 hover:text-slate-900"}
                `}
              >
                <Layers size={14} />
                <span>Aplicación Web</span>
              </button>
              <button
                onClick={() => setViewMode("md")}
                className={`
                  flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all
                  ${viewMode === "md" 
                    ? "bg-white text-slate-900 shadow-sm" 
                    : "text-slate-600 hover:text-slate-900"}
                `}
              >
                <FileCode size={14} />
                <span>Código Markdown</span>
              </button>
            </div>
          </div>

          {/* MAIN CONTENT DISPLAY */}
          <div className="flex-1">
            {viewMode === "app" ? (
              // RENDER INTERACTIVO LINDO
              <div className="bg-white rounded-xl border border-slate-200 p-5 md:p-8 shadow-sm">
                {renderAppView(activeTab)}
              </div>
            ) : (
              // RENDER CODIGO FUENTE MARKDOWN
              <div className="bg-slate-900 rounded-xl border border-slate-800 shadow-xl overflow-hidden flex flex-col h-full min-h-[500px]">
                <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-500"></span>
                    <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
                    <span className="h-3 w-3 rounded-full bg-green-500"></span>
                    <span className="ml-2 font-mono text-[10px] text-slate-500 font-semibold">{`docs_gonseb / ${activeTab}`}</span>
                  </div>
                  <button
                    onClick={() => handleCopy(activeTab, markdownFiles[activeTab])}
                    className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-3 py-1.5 rounded text-[10px] transition-all"
                  >
                    {copiedFile === activeTab ? (
                      <>
                        <Check size={12} />
                        <span>¡Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        <span>Copiar Contenido</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="p-4 md:p-6 flex-1 overflow-auto font-mono text-xs text-slate-300 leading-relaxed whitespace-pre-wrap select-text">
                  {markdownFiles[activeTab]}
                </div>
              </div>
            )}
          </div>

          {/* FOOTER */}
          <footer className="mt-8 pt-4 border-t border-slate-200 text-center text-[10px] text-slate-400">
            <p>© 2026 Departamento de Informática - INACAP Valparaíso. Todos los derechos reservados.</p>
            <p className="mt-1 font-semibold text-slate-500">Diseñado e Investigado para Fundamentos de Seguridad de la Información.</p>
          </footer>
        </main>
      </div>
    </div>
  );
}