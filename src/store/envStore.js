import { create } from "zustand";

const useEnvStore = create((set) => ({
  brightness: 100,
  sound: 0,
  setBrightness: (brightness) => set({ brightness }),
  setSound: (sound) => set({ sound }),
}));

export default useEnvStore;
