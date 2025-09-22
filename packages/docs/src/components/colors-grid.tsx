import { getContrast } from 'polished'

import { tokens } from '../lib/tokens'

export function ColorsGrid() {
  return Object.entries(tokens.colors).map(([key, color]) => (
    <div key={key} style={{ backgroundColor: color, padding: '2rem' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontFamily: 'monospace',
          color: getContrast(color, '#fff') < 3.5 ? '#000' : '#fff',
        }}
      >
        <strong>--{key}</strong>
        <span>{color}</span>
      </div>
    </div>
  ))
}
