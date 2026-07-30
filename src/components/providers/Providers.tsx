"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useUIStore, type Theme } from "@/lib/store";

export function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: { staleTime: 60_000, refetchOnWindowFocus: false },
        },
      }),
  );

  const setTheme = useUIStore((s) => s.setTheme);
  const hydrated = useRef(false);

  useEffect(() => {
    if (hydrated.current) return;
    hydrated.current = true;
    const resolved: Theme = document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
    setTheme(resolved);
  }, [setTheme]);

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
