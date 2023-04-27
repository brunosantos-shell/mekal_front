export interface AuthProviderProps {
  children?: React.ReactNode
}

export interface AuthState {
  auth: boolean
  login: () => void
  logout: () => void
}
