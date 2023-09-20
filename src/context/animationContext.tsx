import React, { createContext } from 'react'

interface AnimationContextProviderProps {
  children: React.ReactNode;
}

export const AnimationContext = createContext<boolean>(true)

export const AnimationContextProvider: React.FC<AnimationContextProviderProps> = ({ children }) => {
  return (
    <AnimationContext.Provider value={false}>
      {children}
    </AnimationContext.Provider>
  )
}
