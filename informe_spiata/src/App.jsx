import './App.css'

function App() {
  return (
    <div className="app">
      <header className="page-header">
        <div className="hero-copy">
          <span className="eyebrow">Informe SPIATA</span>
          <h1>Análisis jurídico del ciberataque al Banco de Chile</h1>
          <p className="intro">
            Caso real de ataque financiero en Chile. Este informe reúne el contexto, la legislación, los delitos configurados, la responsabilidad y la protección de datos bajo la Ley 21.459.
          </p>
        </div>
      </header>

      <main>
        <section className="section">
          <h2>Resumen del caso</h2>
          <div className="section-grid">
            <article className="card">
              <h3>Contexto</h3>
              <p>
                En 2018, Banco de Chile sufrió un ataque sofisticado que combinó malware destructivo y fraude financiero internacional mediante SWIFT. El incidente comprometió estaciones internas y permitió el desvío de aproximadamente USD 10 millones.
              </p>
            </article>

            <article className="card">
              <h3>Objetivos del análisis</h3>
              <ul>
                <li>Identificar delitos informáticos según legislación chilena.</li>
                <li>Evaluar responsabilidades penales, civiles y administrativas.</li>
                <li>Analizar afectación de datos personales.</li>
                <li>Comparar con estándares internacionales.</li>
                <li>Revisar cumplimiento normativo y práctica regulatoria.</li>
              </ul>
            </article>

            <article className="card">
              <h3>Hallazgos relevantes</h3>
              <ul>
                <li>Compromiso de sistemas críticos y falta de segmentación.</li>
                <li>Fallas en monitoreo y detección temprana.</li>
                <li>Encaja en los delitos tipificados por la Ley 21.459.</li>
                <li>Implicancias en protección de datos y normativa CMF.</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="section">
          <h2>Marco legal chileno</h2>
          <div className="section-grid">
            <article className="card">
              <h3>Ley 21.459</h3>
              <ul>
                <li>Acceso ilícito.</li>
                <li>Ataque a la integridad de sistemas.</li>
                <li>Ataque a la integridad de datos.</li>
                <li>Interceptación ilícita.</li>
                <li>Fraude informático.</li>
                <li>Abuso de dispositivos.</li>
              </ul>
            </article>

            <article className="card">
              <h3>Normativa complementaria</h3>
              <ul>
                <li>Ley 19.628 sobre protección de datos personales.</li>
                <li>Regulación CMF sobre gestión operacional y ciberseguridad.</li>
                <li>Código Penal y Código Procesal Penal.</li>
                <li>Doctrina que vincula ciberseguridad con el deber de diligencia empresarial.</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="section">
          <h2>Delitos configurados</h2>
          <div className="section-grid">
            <article className="card">
              <h3>Acceso ilícito</h3>
              <p>El atacante obtuvo acceso no autorizado a sistemas bancarios internos.</p>
            </article>

            <article className="card">
              <h3>Ataque a integridad</h3>
              <p>Se desplegó malware destructivo para inutilizar estaciones de trabajo y ocultar operaciones fraudulentas.</p>
            </article>

            <article className="card">
              <h3>Fraude informático</h3>
              <p>La manipulación del sistema SWIFT permitió transferencias internacionales fraudulentas.</p>
            </article>

            <article className="card">
              <h3>Asociación criminal</h3>
              <p>Dependiendo de la investigación, podría configurarse participación organizada internacional.</p>
            </article>
          </div>
        </section>

        <section className="section">
          <h2>Comparación internacional</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Caso</th>
                  <th>País</th>
                  <th>Tipo de ataque</th>
                  <th>Resultado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Banco de Chile</td>
                  <td>Chile</td>
                  <td>Malware + SWIFT</td>
                  <td>Robo financiero</td>
                </tr>
                <tr>
                  <td>WannaCry</td>
                  <td>Internacional</td>
                  <td>Ransomware</td>
                  <td>Interrupción masiva</td>
                </tr>
                <tr>
                  <td>Colonial Pipeline</td>
                  <td>EE.UU.</td>
                  <td>Ransomware</td>
                  <td>Crisis operacional</td>
                </tr>
                <tr>
                  <td>BHU Uruguay</td>
                  <td>Uruguay</td>
                  <td>Ransomware</td>
                  <td>Filtración de datos</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="section-grid">
            <article className="card">
              <h3>Similitudes</h3>
              <ul>
                <li>Uso de ingeniería social y persistencia interna.</li>
                <li>Movimiento lateral en la red.</li>
                <li>Exfiltración y manipulación de datos.</li>
              </ul>
            </article>

            <article className="card">
              <h3>Diferencias</h3>
              <ul>
                <li>El caso chileno se orientó principalmente al fraude financiero.</li>
                <li>Otros casos priorizaron extorsión mediante ransomware.</li>
                <li>Valor clave: gestión de SWIFT y monitoreo financiero.</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="section">
          <h2>Responsabilidad</h2>
          <div className="section-grid">
            <article className="card">
              <h3>Responsabilidad pen</h3>
              <ul>
                <li>Fraude informático.</li>
                <li>Acceso ilícito.</li>
                <li>Sabotaje informático.</li>
              </ul>
            </article>
            <article className="card">
              <h3>Responsabilidad corporativa</h3>
              <ul>
                <li>Sanciones regulatorias y civiles.</li>
                <li>Incumplimientos de estándares CMF.</li>
                <li>Responsabilidad por daños a clientes.</li>
              </ul>
            </article>
            <article className="card">
              <h3>Responsabilidad administrativa</h3>
              <ul>
                <li>Reportes de incidentes a la CMF.</li>
                <li>Auditorías y planes de remediación.</li>
                <li>Implementación del deber de diligencia.</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="section">
          <h2>Datos y evidencia</h2>
          <div className="section-grid">
            <article className="card">
              <h3>Datos comprometidos</h3>
              <ul>
                <li>Credenciales internas.</li>
                <li>Registros financieros.</li>
                <li>Transferencias internacionales.</li>
                <li>Información de clientes.</li>
              </ul>
            </article>
            <article className="card">
              <h3>Evidencia digital</h3>
              <ul>
                <li>Preservación de evidencia y cadena de custodia.</li>
                <li>Técnicas especiales de investigación.</li>
                <li>SIEM, EDR y monitoreo SOC.</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="section">
          <h2>Conclusiones</h2>
          <div className="section-grid">
            <article className="card">
              <h3>Conclusiones jurídicas</h3>
              <p>La legislación chilena actual permite perseguir de forma más efectiva los delitos informáticos complejos.</p>
            </article>
            <article className="card">
              <h3>Conclusiones técnicas</h3>
              <ul>
                <li>Debilidad humana.</li>
                <li>Necesidad de monitoreo continuo.</li>
                <li>Importancia de segmentación y MFA.</li>
              </ul>
            </article>
            <article className="card">
              <h3>Conclusiones regulatorias</h3>
              <ul>
                <li>Fortalecer gobierno de ciberseguridad.</li>
                <li>Elevar el cumplimiento normativo.</li>
                <li>Gestionar riesgos tecnológicos como obligación estratégica.</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="section">
          <h2>Prompts de análisis</h2>
          <ul className="prompt-list">
            <li>Analiza un caso real de ciberataque financiero en Chile aplicando la Ley 21.459.</li>
            <li>Identifica los delitos informáticos configurados en un ataque tipo SWIFT.</li>
            <li>Compara el caso Banco de Chile con Colonial Pipeline y WannaCry.</li>
            <li>Evalúa responsabilidad civil, penal y administrativa derivada de un ciberataque bancario.</li>
            <li>Analiza implicancias legales de filtración de datos financieros en Chile.</li>
          </ul>
        </section>
      </main>
    </div>
  )
}

export default App
