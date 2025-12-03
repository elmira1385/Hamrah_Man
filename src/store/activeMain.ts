import { create } from 'zustand'

type TactiveMain = {
  activeMain: "home" | "char" | "packages" | "work" | "parse",
  setActiveMain: (value:"home" | "char" | "packages" | "work" | "parse") => void
}

export const useActiveMain = create<TactiveMain>()((set) => ({
  activeMain: "home",
  setActiveMain: (value) => set(() => ({ activeMain:value})),
}))

