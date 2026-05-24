import { useState } from 'react'
import './App.css'
import Resumen from './components/Resumen.jsx'
import Marco from './components/Marco.jsx'
import Delitos from './components/Delitos.jsx'
import Comparacion from './components/Comparacion.jsx'
import Responsabilidades from './components/Responsabilidades.jsx'
import Datos from './components/Datos.jsx'
import Conclusiones from './components/Conclusiones.jsx'
import Prompts from './components/Prompts.jsx'

const sectionItems = [
  { id: 'resumen', label: 'Resumen Ejecutivo', Component: Resumen },
  { id: 'marco', label: 'Marco Normativo Aplicable', Component: Marco },
  { id: 'delitos', label: 'Delitos y artículos Ley 21.459', Component: Delitos },
  { id: 'comparacion', label: 'Tabla comparativa de marcos', Component: Comparacion },
  { id: 'responsabilidades', label: 'Actores y responsabilidades', Component: Responsabilidades },
  { id: 'datos', label: 'Datos personales y derechos ARCO', Component: Datos },
  { id: 'conclusiones', label: 'Recomendaciones finales', Component: Conclusiones },
  { id: 'prompts', label: 'Bitácora de uso de IA', Component: Prompts },
]

function App() {
  const [activeSection, setActiveSection] = useState(null)

  const ActiveSectionComponent = activeSection
    ? sectionItems.find((item) => item.id === activeSection)?.Component
    : null

  return (
    <div className="app">
      <header className="page-header">
        <div className="hero-copy">
          <span className="eyebrow">Informe SPIATA</span>
          <h1>Análisis jurídico del ataque a BancoEstado</h1>
          <p className="intro">
            Presentación formal del análisis jurídico, normativo y técnico relacionado con el incidente de ransomware en BancoEstado, basado en el contenido de los documentos del proyecto.
          </p>
        </div>
      </header>

      <main>
        <section className="section">
          <h2>Resumen y propósito</h2>
          <p>
            Este informe consiste en realizar un análisis legal riguroso y profundo de un caso real de ciberseguridad, estructurándolo como documentación técnica de la industria y presentándolo formalmente mediante una aplicación web interactiva en React.
          </p>
        </section>

        <nav className="section-nav">
          <h2>Secciones del informe</h2>
          <ul>
            {sectionItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  className={`section-card-button ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => setActiveSection(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <section className="section-content">
          {ActiveSectionComponent ? <ActiveSectionComponent /> : <p></p>}
        </section>
      </main>
    </div>
  )
}
export default App
