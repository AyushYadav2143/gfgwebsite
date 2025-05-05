
import { useTheme } from "./ThemeContext";

const DeveloperFooter = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`mt-8 pt-6 border-t ${
      theme === "cyberpunk" ? "border-cyber-blue/30" : "border-border"
    }`}>
      <div className="text-center">
        <p className={theme === "cyberpunk" ? "text-cyber-green text-sm" : "text-muted-foreground text-sm"}>
           <a href="https://bento.me/ayu5h">Developed by Ayush Yadav</a>


        </p>
        <p className={`mt-1 text-xs ${
          theme === "cyberpunk" ? "text-gray-400" : "text-muted-foreground/70"
        }`}>
          © 2025 •
        </p>
      </div>
    </div>
  );
};

export default DeveloperFooter;
