
import { useTheme } from "../ThemeContext";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

// Sample gallery data - can be expanded to include more images
const galleryImages = [
  {
    id: 1,
    src: "/images/branding/gfg-logo.jpeg",
    alt: "Gfg in LPU",
    caption: "GFG IN LPU"
  },
  
];

const Gallery = () => {
  const { theme } = useTheme();

  return (
    <section id="gallery" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div 
              className={`inline-block rounded-lg px-3 py-1 text-sm ${
                theme === "cyberpunk" 
                  ? "bg-cyber-dark border border-cyber-blue text-cyber-blue" 
                  : "bg-primary/10 text-primary"
              }`}
            >
              Memories
            </div>
            <h2 
              className={`text-3xl font-bold tracking-tight md:text-4xl ${
                theme === "cyberpunk" ? "neon-text-purple" : ""
              }`}
            >
              Event Gallery
            </h2>
            <p 
              className={`mx-auto max-w-[700px] text-lg ${
                theme === "cyberpunk" ? "text-gray-300" : "text-muted-foreground"
              }`}
            >
              A glimpse of our past events and activities.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-4xl px-6">
          <Carousel 
            className={`w-full ${
              theme === "cyberpunk" ? "cyber-carousel" : ""
            }`}
          >
            <CarouselContent>
              {galleryImages.map((image) => (
                <CarouselItem key={image.id}>
                  <div 
                    className={`group relative overflow-hidden rounded-lg ${
                      theme === "cyberpunk" ? "border border-cyber-purple/30" : "border border-border"
                    }`}
                  >
                    <div className="aspect-[16/9] w-full">
                      <img
                        src={image.src || "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"}
                        alt={image.alt}
                        className="h-full w-full object-cover transition-transform group-hover:scale-110"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "/images/gallery/placeholder.jpg";
                          // Fallback to an online image if the local placeholder fails
                          target.onerror = () => {
                            target.src = "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5";
                            target.onerror = null; // Prevent infinite loop
                          };
                        }}
                      />
                    </div>
                    <div className={`absolute inset-x-0 bottom-0 ${
                      theme === "cyberpunk" 
                        ? "bg-cyber-dark/80 backdrop-blur" 
                        : "bg-black/60 backdrop-blur-sm"
                    }`}>
                      <p className="py-2 px-3 text-center text-sm text-white">
                        {image.caption}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious 
              className={`-left-12 md:-left-16 ${
                theme === "cyberpunk" ? "bg-cyber-dark border-cyber-blue text-cyber-blue hover:bg-cyber-dark/80" : ""
              }`}
            />
            <CarouselNext 
              className={`-right-12 md:-right-16 ${
                theme === "cyberpunk" ? "bg-cyber-dark border-cyber-blue text-cyber-blue hover:bg-cyber-dark/80" : ""
              }`}
            />
          </Carousel>
          
          <div className="mt-6 text-center">
            <p className={`text-sm ${theme === "cyberpunk" ? "text-cyber-green" : "text-muted-foreground"}`}>
              {galleryImages.length} events in total • Use arrows to navigate
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
