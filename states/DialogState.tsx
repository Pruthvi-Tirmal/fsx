import { create } from "zustand";

interface DialogState {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const useDialogState = create<DialogState>()((set) => ({
  open: false,
  setOpen: (open: boolean) => set({ open }),
}));

export default useDialogState;
