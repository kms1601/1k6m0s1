import { create } from 'zustand'

interface TimeType {
  time: number;
}

interface TimeState {
  time: TimeType
}

interface TimeActions {
  setTime: (time: TimeType) => void
}

const defaultState = { time: 0 };

const useTime  = create<TimeState & TimeActions>((set) => ({
  time: defaultState,
  setTime: (time: TimeType) => {set({ time })},
}))

export default useTime;