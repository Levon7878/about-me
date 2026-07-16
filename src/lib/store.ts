import { create } from "zustand";

export type Theme = "light" | "dark";

interface UIState {
  theme: Theme;
  mobileMenuOpen: boolean;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  setMobileMenuOpen: (open: boolean) => void;
  toggleMobileMenu: () => void;
}

const STORAGE_KEY = "portfolio-theme";

/** Apply the theme to the document and persist the choice. */
function applyTheme(theme: Theme) {
  if (typeof document === "undefined") return;
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.style.colorScheme = theme;
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    /* storage may be unavailable (private mode) — non fatal */
  }
}

export const useUIStore = create<UIState>((set, get) => ({
  theme: "dark",
  mobileMenuOpen: false,
  setTheme: (theme) => {
    applyTheme(theme);
    set({ theme });
  },
  toggleTheme: () => {
    const next: Theme = get().theme === "dark" ? "light" : "dark";
    applyTheme(next);
    set({ theme: next });
  },
  setMobileMenuOpen: (mobileMenuOpen) => set({ mobileMenuOpen }),
  toggleMobileMenu: () =>
    set((state) => ({ mobileMenuOpen: !state.mobileMenuOpen })),
}));
