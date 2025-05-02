
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "./ThemeContext";
import { Menu, X, Sun, Moon, Zap, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Navigation items
  const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Achievements", href: "#achievements" },
    { name: "Team", href: "#team" },
    { name: "Events", href: "#events" },
    { name: "Collaborate", href: "#collaborate" },
    { name: "Gallery", href: "#gallery" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur-lg transition-all">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo and Chapter Name */}
        <div className="flex items-center gap-2">
          <img 
            src="/images/branding/gfg-logo.png" 
            alt="GeeksforGeeks Logo" 
            className="h-8 w-auto"
          />
          <span className={`text-xl font-bold ${theme === "cyberpunk" ? "neon-glow" : ""}`}>
            GFG LPU Chapter
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    theme === "cyberpunk" ? "neon-text-blue" : ""
                  }`}
                  onClick={toggleMenu}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Action Buttons */}
        <div className="flex items-center space-x-3">
          {/* Theme Toggle */}
          <Button
            variant="outline"
            size="icon"
            className="rounded-full hidden sm:flex"
            onClick={handleThemeToggle}
            title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </Button>
          
          {/* Cyberpunk Mode Toggle */}
          <Button
            variant="outline"
            size="sm"
            className={`rounded-full hidden sm:flex ${
              theme === "cyberpunk" 
                ? "border-cyber-green text-cyber-green animate-neon-pulse" 
                : "border-gfg hover:border-gfg hover:text-gfg"
            }`}
            onClick={handleFutureToggle}
          >
            <Zap size={16} className="mr-1" />
            {theme === "cyberpunk" ? "Present" : "Future"}
          </Button>
          
          {/* GeekPoints Link */}
          <Button 
            variant="default" 
            size="sm" 
            className={`hidden sm:flex ${theme === "cyberpunk" ? "bg-cyber-purple hover:bg-cyber-blue" : ""}`}
            asChild
          >
            <a href="https://geekpoints.app" target="_blank" rel="noopener noreferrer">
              <LinkIcon size={16} className="mr-1" />
              GeekPoints
            </a>
          </Button>
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden ${theme === "cyberpunk" ? "bg-cyber-dark/95" : "bg-background/95"} backdrop-blur-lg`}>
          <nav className="container px-4 py-3">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={`block text-lg font-medium transition-colors hover:text-primary ${
                      theme === "cyberpunk" ? "neon-text-blue" : ""
                    }`}
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              
              {/* Mobile menu buttons */}
              <li className="pt-2 flex flex-col space-y-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleThemeToggle}
                  className="justify-start"
                >
                  {theme === "light" ? <Moon size={16} className="mr-2" /> : <Sun size={16} className="mr-2" />}
                  {theme === "light" ? "Dark Mode" : "Light Mode"}
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleFutureToggle}
                  className={`justify-start ${
                    theme === "cyberpunk" 
                      ? "border-cyber-green text-cyber-green" 
                      : ""
                  }`}
                >
                  <Zap size={16} className="mr-2" />
                  {theme === "cyberpunk" ? "Present" : "Future"}
                </Button>
                
                <Button 
                  variant="default" 
                  size="sm" 
                  className={theme === "cyberpunk" ? "bg-cyber-purple hover:bg-cyber-blue justify-start" : "justify-start"}
                  asChild
                >
                  <a href="https://geekpoints.app" target="_blank" rel="noopener noreferrer">
                    <LinkIcon size={16} className="mr-2" />
                    GeekPoints
                  </a>
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
