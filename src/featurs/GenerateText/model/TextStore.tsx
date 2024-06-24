import { create } from "zustand";
import { devtools } from "zustand/middleware";

type TextState = {
  isLoading: boolean;
  text: string;
  setText: (text: string) => void;
  error: boolean;
};

export const useTextStore = create<TextState>()(
  devtools((set) => ({
    text: "",
    error: false,
    isLoading: false,
    setText: (text) =>
      set((state) => ({
        ...state,
        text: text,
        isLoading: false,
        error: false,
      })),
  }))
);
