import { useState } from 'react'
import { Shield, BookOpen } from 'lucide-react' // Importados desde la imagen
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
    <div className="min-h-screen bg-slate-50 flex flex-col">
      
      {/* HEADER (Estructura de la imagen con tus datos de BancoEstado) */}
      <header className="bg-slate-900 text-white py-10 px-6 shadow">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Shield size={40} className="text-red-400" />
          <div>
            <h1 className="text-3xl font-bold">Evaluación 2 -- Unidad 2</h1>
            <p className="text-slate-300 mt-1">
              TI3034 -- Fundamentos de Seguridad de la Información | Análisis BancoEstado
            </p>
          </div>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-1 max-w-4xl mx-auto px-6 py-12 w-full">
        
        {/* Sección de Bienvenida / Propósito fija */}
        <div className="bg-white rounded-lg shadow p-8 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="text-slate-700" />
            <h2 className="text-xl font-semibold text-slate-800">
              Análisis jurídico del ataque a BancoEstado
            </h2>
          </div>
          <p className="text-slate-600 leading-relaxed">
            Este sitio contiene el análisis legal del caso asignado. Las secciones se irán 
            incorporando como componentes individuales a través del menú de navegación interactivo.
          </p>
        </div> <hr></hr>

        {/* MENÚ DE NAVEGACIÓN (Botones para cambiar de componente) */}
        <nav className="section-nav mb-6">
          <h3 className="section-nav-title">
            Secciones del Informe
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {sectionItems.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`section-card-button ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => setActiveSection(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>

        {/* CONTENIDO DINÁMICO (Muestra el componente seleccionado) */}
        {ActiveSectionComponent && (
          <div className="bg-white rounded-lg shadow p-8 animate-fadeIn">
            <ActiveSectionComponent />
          </div>
        )}
      </main>

      <div>
        
      </div>

      {/* FOOTER (Estructura formal pedida por el docente) */}
      <footer className="bg-slate-100 text-slate-600 text-sm py-4 px-6 border-t border-slate-200">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <span><strong>Estudiante:</strong> Atalía Anaís Spielmann Flores</span>
          <span><strong>Docente:</strong> Rubén Schnettler L. -- INACAP Valparaíso</span>
        </div>
      </footer>

    </div>
  )
}

export default App