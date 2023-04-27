import React from 'react'

interface ContextNesterProps {
  contexts: React.ReactElement[]
  children: React.ReactNode
}

const ContextNester: React.FC<ContextNesterProps> = ({
  contexts,
  children,
}) => {
  const nestContexts = (
    contexts: React.ReactElement[],
    index: number
  ): JSX.Element | null => {
    if (index >= contexts.length) {
      return children as JSX.Element
    }

    const CurrentContext = React.cloneElement(
      contexts[index],
      {},
      nestContexts(contexts, index + 1)
    )
    return CurrentContext
  }

  return <>{nestContexts(contexts, 0)}</>
}

export default ContextNester
