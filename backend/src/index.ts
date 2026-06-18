import { Hono } from 'hono'
import { cors } from 'hono/cors'
import authRoutes from './routes/auth'
import passwordRoutes from './routes/passwords'

type Bindings = {
  DB: D1Database
  KV: KVNamespace
  JWT_SECRET: string
  ENVIRONMENT: string
}

const app = new Hono<{ Bindings: Bindings }>()

// Middleware
app.use(cors())

// Routes
app.route('/auth', authRoutes)
app.route('/passwords', passwordRoutes)

// Health check
app.get('/health', (c) => {
  return c.json({ status: 'ok' })
})

export default app
