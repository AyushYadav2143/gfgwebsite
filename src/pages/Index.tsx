
import { useEffect } from "react";
import { ThemeProvider } from "@/components/ThemeContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Achievements from "@/components/sections/Achievements";
import Team from "@/components/sections/Team";
import Events from "@/components/sections/Events";
import Collaborate from "@/components/sections/Collaborate";
import Gallery from "@/components/sections/Gallery";
import Footer from "@/components/Footer";
import DeveloperFooter from "@/components/DeveloperFooter";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();

  useEffect(() => {
    // Welcome toast
    toast({
      title: "Welcome to GFG LPU Chapter",
      description: "Explore our website to learn more about us. Try the 'Future' button for a cyberpunk experience!",
      duration: 5000,
    });

    // Preload cyber mode sound
    const audio = new Audio("/cyber-mode-on.mp3");
    audio.preload = "auto";
  }, []);

  return (
    <ThemeProvider>
      <BackgroundAnimation />
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Achievements />
          <Team />
          <Events />
          <Collaborate />
          <Gallery />
        </main>
        <Footer />
        <div className="container px-4 md:px-6 mb-8">
          <DeveloperFooter />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;
