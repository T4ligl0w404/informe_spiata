import MarkdownSection from './MarkdownSection.jsx'
import content from '../../docs_spiata/06_datos_spiata.md?raw'

export default function Datos({ id }) {
  return <MarkdownSection id={id} title="Datos personales y derechos ARCO" content={content} />
}
