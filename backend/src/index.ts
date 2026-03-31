import { HttpAgent } from '@ag-ui/client'
import {
  CopilotRuntime,
  copilotRuntimeNextJSAppRouterEndpoint,
  EmptyAdapter,
} from '@copilotkit/runtime'
import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()

const serviceAdapter = new EmptyAdapter()

const runtime = new CopilotRuntime({
  agents: {
    default: new HttpAgent({
      url: process.env.AGENT_URL || '',
    }),
  },
})

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.post('/api/copilotkit', async ({ req }) => {
  const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
    endpoint: '/api/copilotkit',
    runtime,
    serviceAdapter,
  })

  return handleRequest(req.raw)
})

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`)
  },
)
