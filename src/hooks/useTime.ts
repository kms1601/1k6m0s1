import { create } from 'zustand'

interface TimeState {
  time: number
}

interface TimeActions {
  setTime: (time: number) => void
}

const useTime  = create<TimeState & TimeActions>((set) => ({
  time: 0,
  setTime: (time: number) => {set({ time })},
}))

export default useTime;