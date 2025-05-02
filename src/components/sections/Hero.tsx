
import { Button } from "@/components/ui/button";
import { useTheme } from "../ThemeContext";

const Hero = () => {
  const { theme } = useTheme();
  
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background pattern - dots in light mode, grid in cyberpunk mode */}
      <div 
        className={`absolute inset-0 -z-10 ${
          theme === "cyberpunk" 
            ? "bg-cyber-grid bg-fixed opacity-30" 
            : "bg-dots"
        }`} 
        aria-hidden="true"
      />
      
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 
              className={`text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl ${
                theme === "cyberpunk" ? "neon-text-purple" : "text-foreground"
              }`}
            >
              GeeksforGeeks LPU Chapter
            </h1>
            
            <p 
              className={`mx-auto max-w-[700px] text-lg md:text-xl ${
                theme === "cyberpunk" ? "text-cyber-blue" : "text-muted-foreground"
              }`}
            >
              Empowering the tech leaders of tomorrow through innovation, learning, and community.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              className={theme === "cyberpunk" ? "bg-cyber-green text-black hover:bg-cyber-green/80" : ""}
              size="lg"
            >
              Join Us
            </Button>
            <Button
              variant="outline"
              size="lg"
              className={theme === "cyberpunk" ? "border-cyber-pink text-cyber-pink hover:bg-cyber-pink/10" : ""}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
