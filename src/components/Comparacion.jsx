import MarkdownSection from './MarkdownSection.jsx'
import content from '../../docs_spiata/04_comparacion_spiata.md?raw'

export default function Comparacion({ id }) {
  return <MarkdownSection id={id} title="Tabla comparativa de marcos" content={content} />
}
