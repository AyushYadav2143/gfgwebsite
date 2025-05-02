
import { createContext, useContext, ReactNode, useState, useEffect } from "react";

type Theme = "light" | "dark" | "cyberpunk";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    // Apply theme to document
    document.documentElement.classList.remove("light", "dark", "cyberpunk");
    document.documentElement.classList.add(theme);
    
    // Save to localStorage
    localStorage.setItem("gfg-lpu-theme", theme);
    
    // Play sound effect when cyberpunk mode is activated
    if (theme === "cyberpunk") {
      const audio = new Audio("/cyber-mode-on.mp3");
      audio.volume = 0.2;
      audio.play().catch(() => {
        // Silently fail if autoplay is blocked
      });
    }
  }, [theme]);

  // Initialize from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("gfg-lpu-theme") as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {theme === "cyberpunk" && <div className="scanlines" />}
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
