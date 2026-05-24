import MarkdownSection from './MarkdownSection.jsx'
import content from '../../docs_spiata/05_responsabilidad_spiata.md?raw'

export default function Responsabilidades({ id }) {
  return <MarkdownSection id={id} title="Actores y responsabilidades" content={content} />
}
