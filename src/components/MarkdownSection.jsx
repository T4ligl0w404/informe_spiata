function renderMarkdown(raw, keyPrefix) {
  const lines = raw.split('\n')
  const result = []
  let listItems = []
  let paragraphLines = []
  let tableLines = []

  const parseTableRow = (line) =>
    line
      .trim()
      .split('|')
      .slice(1, -1)
      .map((cell) => cell.trim())

  const isSeparatorRow = (cells) =>
    cells.every((cell) => /^:?-+:?$/.test(cell))

  const flushParagraph = () => {
    if (paragraphLines.length > 0) {
      result.push(
        <p key={`${keyPrefix}-p-${result.length}`}>
          {paragraphLines.join(' ')}
        </p>,
      )
      paragraphLines = []
    }
  }

  const flushList = () => {
    if (listItems.length > 0) {
      result.push(
        <ul key={`${keyPrefix}-list-${result.length}`}>
          {listItems}
        </ul>,
      )
      listItems = []
    }
  }

  const flushTable = () => {
    if (tableLines.length > 0) {
      const rows = tableLines.map(parseTableRow)
      const hasSeparator = rows.length > 1 && isSeparatorRow(rows[1])
      const header = rows[0]
      const bodyRows = hasSeparator ? rows.slice(2) : rows.slice(1)

      result.push(
        <div key={`${keyPrefix}-table-${result.length}`} className="doc-table-box">
          <table>
            <thead>
              <tr>
                {header.map((cell, cellIndex) => (
                  <th key={`th-${cellIndex}`}>{cell}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bodyRows.map((row, rowIndex) => (
                <tr key={`tr-${rowIndex}`}>
                  {row.map((cell, cellIndex) => (
                    <td key={`td-${rowIndex}-${cellIndex}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>,
      )
      tableLines = []
    }
  }

  lines.forEach((line, index) => {
    const trimmed = line.trim()

    if (!trimmed) {
      flushParagraph()
      flushList()
      flushTable()
      return
    }

    if (/^###\s+/.test(trimmed)) {
      flushParagraph()
      flushList()
      flushTable()
      result.push(
        <h3 key={`${keyPrefix}-h3-${index}`}>{trimmed.replace(/^###\s+/, '')}</h3>,
      )
      return
    }

    if (/^##\s+/.test(trimmed)) {
      flushParagraph()
      flushList()
      flushTable()
      result.push(
        <h2 key={`${keyPrefix}-h2-${index}`}>{trimmed.replace(/^##\s+/, '')}</h2>,
      )
      return
    }

    if (/^#\s+/.test(trimmed)) {
      flushParagraph()
      flushList()
      flushTable()
      result.push(
        <h1 key={`${keyPrefix}-h1-${index}`}>{trimmed.replace(/^#\s+/, '')}</h1>,
      )
      return
    }

    if (/^[-*]\s+/.test(trimmed)) {
      flushParagraph()
      flushTable()
      listItems.push(
        <li key={`${keyPrefix}-li-${index}`}>{trimmed.replace(/^[-*]\s+/, '')}</li>,
      )
      return
    }

    if (/^\|/.test(trimmed)) {
      flushParagraph()
      flushList()
      tableLines.push(line)
      return
    }

    flushTable()
    paragraphLines.push(trimmed)
  })

  flushParagraph()
  flushList()
  flushTable()
  return result
}

export default function MarkdownSection({ id, title, content }) {
  return (
    <section id={id} className="section">
      <h2>{title}</h2>
      <div className="doc-content">{renderMarkdown(content, title)}</div>
    </section>
  )
}
