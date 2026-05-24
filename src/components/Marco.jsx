import MarkdownSection from './MarkdownSection.jsx'
import content from '../../docs_spiata/02_marco_spiata.md?raw'

export default function Marco({ id }) {
  return <MarkdownSection id={id} title="Marco Normativo Aplicable" content={content} />
}
