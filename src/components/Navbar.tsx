
import { Link } from "react-router-dom";
import { useTheme } from "./ThemeContext";
import { Sun, Moon, Zap, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeToggle = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("light");
    }
  };

  const handleFutureToggle = () => {
    setTheme(theme === "cyberpunk" ? "dark" : "cyberpunk");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur-lg transition-all">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <img 
            src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210420155809/gfg-new-logo.png" 
            alt="GeeksforGeeks Logo" 
            className="h-8 w-auto"
          />
          <span className={`text-xl font-bold ${theme === "cyberpunk" ? "neon-glow" : ""}`}>
            GFG LPU Chapter
          </span>
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {["Home", "About", "Achievements", "Team", "Events", "Collaborate", "Gallery"].map((item) => (
              <li key={item}>
                <Link
                  to={item === "Home" ? "/" : `/#${item.toLowerCase()}`}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    theme === "cyberpunk" ? "neon-text-blue" : ""
                  }`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="flex items-center space-x-3">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={handleThemeToggle}
            title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            className={`rounded-full ${
              theme === "cyberpunk" 
                ? "border-cyber-green text-cyber-green animate-neon-pulse" 
                : "border-gfg hover:border-gfg hover:text-gfg"
            }`}
            onClick={handleFutureToggle}
          >
            <Zap size={16} className="mr-1" />
            {theme === "cyberpunk" ? "Present" : "Future"}
          </Button>
          
          <Button 
            variant="default" 
            size="sm" 
            className={theme === "cyberpunk" ? "bg-cyber-purple hover:bg-cyber-blue" : ""}
            asChild
          >
            <a href="https://geekpoints.app" target="_blank" rel="noopener noreferrer">
              <LinkIcon size={16} className="mr-1" />
              GeekPoints
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
