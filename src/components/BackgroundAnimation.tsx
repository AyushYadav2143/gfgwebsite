
import { useTheme } from "./ThemeContext";

const BackgroundAnimation = () => {
  const { theme } = useTheme();

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Light theme background */}
      {theme === "light" && (
        <div className="absolute inset-0 bg-dots"></div>
      )}

      {/* Dark theme background */}
      {theme === "dark" && (
        <div className="absolute inset-0 bg-dots bg-background"></div>
      )}

      {/* Cyberpunk theme background */}
      {theme === "cyberpunk" && (
        <>
          <div className="absolute inset-0 bg-cyber-grid bg-fixed bg-[length:50px_50px] opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark/0 via-cyber-purple/5 to-cyber-dark/0"></div>
          <div className="absolute inset-0 animate-pulse opacity-10">
            <div className="absolute h-[1px] w-full top-1/4 bg-cyber-pink"></div>
            <div className="absolute h-[1px] w-full top-2/4 bg-cyber-blue"></div>
            <div className="absolute h-[1px] w-full top-3/4 bg-cyber-green"></div>
          </div>
        </>
      )}
    </div>
  );
};

export default BackgroundAnimation;
