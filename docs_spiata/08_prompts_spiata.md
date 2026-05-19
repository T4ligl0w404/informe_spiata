# Bitácora del Uso de Inteligencia Artificial

### Registro de Prompts Utilizados

#### 1. Para la Sección de Resumen y Contexto
- **Prompt:** *"Actúa como un analista experto en ciberseguridad legal. Analiza el caso real del ataque de ransomware Sodinokibi a BancoEstado de Chile en septiembre de 2020. Entrega un resumen completo detallando la fecha exacta, los actores involucrados (atacantes y víctimas) y la magnitud del impacto técnico y de continuidad de negocio de forma muy sólida."*
- [cite_start]**Herramienta:** Gemini (Chatbot en navegador)[cite: 75].
- **Corrección Aplicada:** La respuesta inicial omitió el número exacto de sucursales afectadas. [cite_start]Se corrigió manualmente integrando el dato histórico de las 410 sucursales comerciales cerradas reportado por la prensa y comunicados oficiales[cite: 66].

#### 2. Para la Sección de Tipificación Penal
- **Prompt:** *"Mapea detalladamente las acciones cometidas por el grupo detrás de Sodinokibi en el ataque a BancoEstado utilizando la actual ley chilena de delitos informáticos Ley N° 21.459. Cita textualmente los números de artículos correspondientes a acceso ilícito y sabotaje informático."*
- [cite_start]**Herramienta:** GitHub Copilot (Agente integrado en VS Code)[cite: 73, 74].
- **Corrección Aplicada:** Copilot sugirió inicialmente artículos de la derogada Ley 19.223. [cite_start]Se rechazó esa parte de la respuesta con justificación técnica y se le ordenó estrictamente aplicar los artículos 1, 3 y 5 de la nueva Ley 21.459 acorde a las pautas de evaluación[cite: 46, 80].

### Reflexión sobre la Utilidad de la Herramienta
El uso combinado de herramientas de Inteligencia Artificial representó un acelerador significativo en la fase de estructuración del informe y generación del boilerplate de código. [cite_start]Al operar la IA como un **Chatbot externo** (Gemini), facilitó la aclaración rápida de conceptos doctrinales sobre los derechos ARCO y la Ley 19.628[cite: 75]. [cite_start]Por otro lado, su uso en modalidad de **Agente integrado** (GitHub Copilot) agilizó el traspaso de los archivos Markdown hacia la creación sistemática de los componentes React (`.jsx`), optimizando el ciclo de desarrollo en la estación de trabajo local[cite: 73, 74]. [cite_start]Sin embargo, la supervisión del estudiante sigue siendo indispensable, ya que se detectaron alucinaciones normativas respecto a leyes derogadas que requirieron corrección humana experta[cite: 80].