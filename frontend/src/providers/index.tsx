import { CopilotKit } from '@copilotkit/react-core'
import '@copilotkit/react-core/v2/styles.css'
import type { ReactNode } from 'react'

export function Providers({ children }: Readonly<{ children: ReactNode }>) {
  return <CopilotKit runtimeUrl="/api/copilotkit">{children}</CopilotKit>
}
