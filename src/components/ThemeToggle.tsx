"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = (resolvedTheme ?? theme) === "dark";
  const toggle = () => setTheme(isDark ? "light" : "dark");

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggle}
      className="ml-3"
      aria-label={isDark ? "Açık moda geç" : "Koyu moda geç"}
    >
      {isDark ? "Koyu" : "Açık"}
    </Button>
  );
}


