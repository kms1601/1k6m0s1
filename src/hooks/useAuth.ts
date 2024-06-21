import { create } from 'zustand'

interface AuthType {
  auth: boolean;
}

interface AuthState {
  auth: AuthType
}

interface AuthActions {
  setAuth: (auth: AuthType) => void
}

const defaultState = { auth: false };

const useAuth  = create<AuthState & AuthActions>((set) => ({
  auth: defaultState,
  setAuth: (auth: AuthType) => {set({ auth })},
}))

export default useAuth;