import create from "zustand";

const useViewStore = create((set) => ({
    controlPanel: false,
    setIsActive: (isActive, key) => set({ 
        [key]: isActive
     }),
}));

export default useViewStore;