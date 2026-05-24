import MarkdownSection from './MarkdownSection.jsx'
import content from '../../docs_spiata/08_prompts_spiata.md?raw'

export default function Prompts({ id }) {
  return <MarkdownSection id={id} title="Bitácora de uso de IA" content={content} />
}
