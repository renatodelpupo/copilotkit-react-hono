import { CopilotKit } from '@copilotkit/react-core'
import '@copilotkit/react-core/v2/styles.css'
import type { ReactNode } from 'react'

const runtimeUrl = `${import.meta.env.VITE_COPILOT_RUNTIME_URL}/api/copilotkit`

export function Providers({ children }: Readonly<{ children: ReactNode }>) {
  return <CopilotKit runtimeUrl={runtimeUrl}>{children}</CopilotKit>
}
