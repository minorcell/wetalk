import { create } from "zustand";

interface CountStore {
  count: number;
  inc: () => void;
}

const useCountStore = create<CountStore>((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}));

export { useCountStore };
