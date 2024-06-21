import { create } from 'zustand'

interface AuthState {
  auth: boolean
}

interface AuthActions {
  setAuth: (auth: boolean) => void
}

const useAuth  = create<AuthState & AuthActions>((set) => ({
  auth: false,
  setAuth: (auth: boolean) => {set({auth})},
}))

export default useAuth;