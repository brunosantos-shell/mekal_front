import React from 'react'
import type { AuthProviderProps, AuthState } from './types'

export const AuthContext = React.createContext<AuthState>({
  auth: false,
  login: () => {},
  logout: () => {},
})

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [auth, setAuth] = React.useState<boolean>(false)

  const login = (): void => {
    setAuth(true)
  }

  const logout = (): void => {
    setAuth(false)
  }

  return (
    <AuthContext.Provider
      value={{
        auth,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = (): AuthState => {
  const context = React.useContext(AuthContext)
  return context
}
