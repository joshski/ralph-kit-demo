import type { Server } from 'bun'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'

describe('server', () => {
  let server: Server

  beforeAll(async () => {
    const module = await import('./server')
    server = (module as unknown as { default: Server }).default
  })

  afterAll(() => {
    server?.stop()
  })

  it('serves HTML at root path', async () => {
    const res = await fetch(`http://localhost:${server.port}/`)
    expect(res.status).toBe(200)
    expect(res.headers.get('Content-Type')).toBe('text/html')
    const text = await res.text()
    expect(text).toContain('Excuse Generator')
  })

  it('returns JSON excuse from API endpoint', async () => {
    const res = await fetch(`http://localhost:${server.port}/api/excuse`)
    expect(res.status).toBe(200)
    const data = await res.json()
    expect(data).toHaveProperty('excuse')
    expect(typeof data.excuse).toBe('string')
    expect(data.excuse.length).toBeGreaterThan(0)
  })

  it('returns 404 for unknown paths', async () => {
    const res = await fetch(`http://localhost:${server.port}/unknown`)
    expect(res.status).toBe(404)
  })
})
