# Bitácora de Uso de Inteligencia Artificial y Registro de Prompts

Este documento constituye la bitácora oficial del uso de herramientas de Inteligencia Artificial para el desarrollo del análisis legal del ciberataque de Ransomware Sodinokibi a BancoEstado (2020), en cumplimiento con los requerimientos transversales de la asignatura.

## 1. Fase de Investigación y Resumen del Caso
* **Herramienta utilizada:** Gemini 1.5 Pro / ChatGPT (Interfaz Web de Chatbot).

### Prompt Textual Enviado:
> "Actúa como un experto en ciberseguridad y auditoría informática. Necesito investigar el caso real del ataque de ransomware que sufrió el banco estatal chileno 'BancoEstado' en septiembre de 2020. Entrega un resumen ejecutivo estructurado con los siguientes puntos: ¿Qué pasó y Cuándo? ¿Quiénes participaron? y su Impacto y Magnitud del Incidente."

La IA identificó correctamente a quienes participaron, el ¿Qué paso y cuándo? e incluso su impacto y magnitud.


---

## 2. Fase de Análisis Legal y Tipificación Penal (Ley N° 21.459)
* **Herramienta utilizada:** GitHub Copilot Chat (Panel integrado en VS Code).
* **Sección objetivo:** `03_delitos_<aaa><nnn>.md`.

### Prompt Textual Enviado:
> "@workspace /explain Necesito redactar un informe legal en Markdown que analice el ataque de Sodinokibi a BancoEstado. El docente exige plantear el escenario hipotético como si los hechos hubiesen ocurrido bajo la jurisdicción de la actual Ley N° 21.459 de Delitos Informáticos de Chile. Genera la tipificación detallada para tres delitos específicos: Acceso Ilícito, Interferencia Ilícita y Ataque a la Integridad de los Datos. Para cada uno, cita el número de artículo de la Ley 21.459, describe la conducta típica y realiza un mapeo explícito de cómo la acción del atacante (el phishing inicial, los movimientos laterales y el cifrado criptográfico) encaja en ese artículo. Aplica el agravante de interrupción de un servicio de utilidad pública."

### Proceso de Control y Corrección Humana:
* **Lo que se aceptó de la IA:** La redacción jurídica y la estructura de mapeo conductual-legal fueron impecables. El agente vinculó correctamente la inhabilitación operativa con la tipicidad de los artículos.
* **Lo que se corrigió / ajustó:** El modelo sugirió inicialmente el Artículo 7° referente a "Fraude Informático" argumentando que hubo una extorsión económica (petición de rescate en criptomonedas). 
* **Justificación de la corrección:** Se eliminó la propuesta del artículo de fraude porque, en el caso real de BancoEstado, no se concretó una estafa, manipulación de saldos ni transferencia no autorizada de fondos de clientes. Se forzó al modelo a concentrarse estrictamente en el **Artículo 3° (Interferencia Ilícita)** debido a que el hecho material relevante fue el sabotaje y cierre forzado de las 410 sucursales físicas a nivel nacional, gatillando el agravante de utilidad pública.

---

## 3. Fase de Tratamiento de Datos Personales (Ley N° 19.628)
* **Herramienta utilizada:** Claude 3.5 Sonnet / Gemini (Interfaz Web).
* **Sección objetivo:** `06_datos_<aaa><nnn>.md`.

### Prompt Textual Enviado:
> "Analiza el ciberataque a BancoEstado de 2020 bajo el marco de la legislación de protección de datos en Chile (Ley N° 19.628). Primero, clasifica los datos expuestos en las estaciones de trabajo de los ejecutivos en tres categorías claras de la ley: datos personales comunes, datos económicos/financieros y datos sensibles (biometría/credenciales). Segundo, analiza de qué manera la indisponibilidad de los sistemas informáticos provocada por el ransomware afectó el ejercicio de los Derechos ARCO (específicamente Acceso, Rectificación y Oposición) por parte de los clientes del banco. Incluye citas textuales o referencias directas a los artículos de la Ley 19.628."

### Proceso de Control y Corrección Humana:
* **Lo que se aceptó de la IA:** La clasificación tripartita de los datos según las definiciones de la ley chilena (Art. 2 letras f y g) y el desglose de los impactos en los derechos ARCO.
* **Lo que se corrigió / ajustó:** La IA redactó los derechos ARCO utilizando los estándares del Reglamento General de Protección de Datos europeo (GDPR) y términos anglosajones.
* **Justificación de la corrección:** Se reemplazaron las menciones internacionales por la terminología exacta de la **Ley N° 19.628 de Chile**, adaptando el análisis de los derechos de Acceso (Art. 12) y Rectificación (Art. 6) al escenario donde el banco debió usar copias de seguridad de días anteriores, arriesgando inconsistencias en los saldos reales.

---

## 4. Reflexión Crítica: La IA como Chatbot vs. La IA como Agente

El desarrollo de esta evaluación permitió experimentar de manera práctica dos paradigmas radicalmente distintos en el uso de Inteligencia Artificial aplicada a la tecnología y la legislación:

1. **La IA como Chatbot de Consulta (Interfaz Web):** Su comportamiento es pasivo y conversacional. Fue una herramienta sumamente útil en las fases iniciales de investigación conceptual y recopilación histórica (por ejemplo, para desglosar de forma rápida las cláusulas del Convenio de Budapest o buscar la cronología de los comunicados de prensa de BancoEstado). Sin embargo, carece de contexto sobre el entorno de desarrollo y requiere que el usuario copie, pegue y adapte manualmente las nomenclaturas, aumentando la probabilidad de cometer errores de formato o alucinaciones sobre los hechos del caso.

2. **La IA como Agente de Proyecto (GitHub Copilot en VS Code):**
   Su comportamiento es proactivo y contextual. Al estar integrado en el entorno de desarrollo (`@workspace`), el agente "entiende" la arquitectura completa de la aplicación web en React. No solo ayudó a estructurar los componentes de presentación en la carpeta `src/components/`, sino que detectó automáticamente que los nombres de los archivos Markdown debían llevar el sufijo dinámico de mi apellido y nombre (`_<aaa><nnn>.md`). Su uso como agente optimizó de forma drástica los tiempos de codificación, la configuración de Tailwind CSS para la interfaz y la resolución de errores sintácticos en tiempo real antes de subir los cambios a GitHub.

**Conclusión Intelectual:** La Inteligencia Artificial acelera la productividad, pero en el área de ciberseguridad y legislación, **el criterio humano sigue siendo insustituible**. Para alcanzar un nivel profesional en este informe, fue obligatorio auditar cada artículo citado, contrastar los datos técnicos con las minutas del Senado de Chile y corregir las alucinaciones de las herramientas, garantizando un entregable riguroso, ético y técnicamente trazable.