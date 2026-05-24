import MarkdownSection from './MarkdownSection.jsx'
import content from '../../docs_spiata/03_delitos_spiata.md?raw'

export default function Delitos({ id }) {
  return <MarkdownSection id={id} title="Delitos y artículos Ley 21.459" content={content} />
}
