import MarkdownSection from './MarkdownSection.jsx'
import content from '../../docs_spiata/07_conclusiones_spiata.md?raw'

export default function Conclusiones({ id }) {
  return <MarkdownSection id={id} title="Recomendaciones finales" content={content} />
}
