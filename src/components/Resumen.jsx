import MarkdownSection from './MarkdownSection.jsx'
import content from '../../docs_spiata/01_resumen_spiata.md?raw'

export default function Resumen({ id }) {
  return <MarkdownSection id={id} title="Resumen Ejecutivo" content={content} />
}
