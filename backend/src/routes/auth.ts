import { Hono } from 'hono'
import { sign, verify } from 'hono/jwt'

type Bindings = {
  DB: D1Database
  KV: KVNamespace
  JWT_SECRET: string
}

const auth = new Hono<{ Bindings: Bindings }>()

// Register endpoint
auth.post('/register', async (c) => {
  try {
    const { email, password } = await c.req.json()

    if (!email || !password) {
      return c.json({ error: 'Email and password are required' }, 400)
    }

    // TODO: Hash password and store in database
    const token = await sign({ email, iat: Math.floor(Date.now() / 1000) }, c.env.JWT_SECRET)

    return c.json({ token, email })
  } catch (error) {
    return c.json({ error: 'Registration failed' }, 500)
  }
})

// Login endpoint
auth.post('/login', async (c) => {
  try {
    const { email, password } = await c.req.json()

    if (!email || !password) {
      return c.json({ error: 'Email and password are required' }, 400)
    }

    // TODO: Verify password from database
    const token = await sign({ email, iat: Math.floor(Date.now() / 1000) }, c.env.JWT_SECRET)

    return c.json({ token, email })
  } catch (error) {
    return c.json({ error: 'Login failed' }, 500)
  }
})

export default auth
