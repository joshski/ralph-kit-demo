import { describe, expect, it } from 'vitest'
import { generateExcuse } from './excuseGenerator'

describe('generateExcuse', () => {
  it('returns a string', () => {
    const excuse = generateExcuse()
    expect(typeof excuse).toBe('string')
  })

  it('returns a non-empty string', () => {
    const excuse = generateExcuse()
    expect(excuse.length).toBeGreaterThan(0)
  })

  it('ends with a period', () => {
    const excuse = generateExcuse()
    expect(excuse.endsWith('.')).toBe(true)
  })

  it('generates different excuses over multiple calls', () => {
    const excuses = new Set<string>()
    for (let i = 0; i < 20; i++) {
      excuses.add(generateExcuse())
    }
    expect(excuses.size).toBeGreaterThan(1)
  })
})
