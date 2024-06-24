import axios from "axios";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { BASE_URL } from "../../../shared/axiosApi/axiosApi";

type TextState = {
  isLoading: boolean;
  text: string;
  setText: (text: string) => void;
  error: boolean;
  fetchText: () => Promise<void>;
};

export const useTextStore = create<TextState>()(
  devtools((set) => ({
    text: "aaaaaaaaaaaaaaaaaaaaaaa",
    error: false,
    isLoading: false,
    setText: (text) =>
      set((state) => ({
        ...state,
        text: text,
        isLoading: false,
        error: false,
      })),
    fetchText: async () => {
      set({ isLoading: true });
      try {
        const response = await axios.get(BASE_URL, {
          params: {
            type: "all-meat",
            sentences: "3",
            format: "text",
          },
        });
        const data = await response.data;
        set({ text: data });
      } catch (e) {
        set({ error: true });
      } finally {
        set({ isLoading: false });
      }
    },
  }))
);
