
import { useState } from "react";
import { useTheme } from "../ThemeContext";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
    alt: "Hackathon event with students working on laptops",
    caption: "Annual Hackathon 2024",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1558008258-3256797b43f3",
    alt: "Workshop session with presenter and audience",
    caption: "Web Development Workshop",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b",
    alt: "Team building activity with GFG members",
    caption: "Team Building Day",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1530099486328-e021101a494a",
    alt: "Students at a tech conference",
    caption: "LPU Tech Conference",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    alt: "Group picture of GFG LPU Chapter members",
    caption: "Our Amazing Team",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
    alt: "Award ceremony for coding competition",
    caption: "Coding Competition Awards",
  },
];

const Gallery = () => {
  const { theme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="gallery" className="py-16 md:py-24 bg-muted/50">
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
              Highlights from our past events and activities.
            </p>
          </div>
        </div>

        {/* Main Slider */}
        <div 
          className={`relative mx-auto mt-12 max-w-4xl overflow-hidden rounded-xl ${
            theme === "cyberpunk" ? "border-2 border-cyber-blue" : ""
          }`}
        >
          <div className="relative aspect-[16/9] w-full">
            <img 
              src={galleryImages[currentIndex].src} 
              alt={galleryImages[currentIndex].alt}
              className="absolute h-full w-full object-cover transition-all duration-500"
            />
            {theme === "cyberpunk" && (
              <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/80 to-transparent"></div>
            )}
            <div 
              className={`absolute bottom-0 left-0 right-0 p-6 ${
                theme === "cyberpunk" ? "" : "bg-gradient-to-t from-black/60 to-transparent"
              }`}
            >
              <p 
                className={`text-xl font-bold text-white ${
                  theme === "cyberpunk" ? "neon-text-blue" : ""
                }`}
              >
                {galleryImages[currentIndex].caption}
              </p>
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className={`absolute left-4 top-1/2 z-10 h-10 w-10 -translate-y-1/2 rounded-full ${
              theme === "cyberpunk" 
                ? "bg-cyber-dark/70 border border-cyber-pink text-cyber-pink hover:bg-cyber-dark hover:text-cyber-pink" 
                : "bg-background/70 border border-primary/10"
            }`}
            onClick={goToPrevious}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className={`absolute right-4 top-1/2 z-10 h-10 w-10 -translate-y-1/2 rounded-full ${
              theme === "cyberpunk" 
                ? "bg-cyber-dark/70 border border-cyber-pink text-cyber-pink hover:bg-cyber-dark hover:text-cyber-pink" 
                : "bg-background/70 border border-primary/10"
            }`}
            onClick={goToNext}
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Thumbnails */}
        <div className="mx-auto mt-6 flex max-w-4xl gap-2 overflow-x-auto pb-4">
          {galleryImages.map((image, index) => (
            <button
              key={image.id}
              className={`relative flex-shrink-0 cursor-pointer overflow-hidden rounded-md ${
                index === currentIndex 
                  ? theme === "cyberpunk" 
                    ? "ring-2 ring-cyber-green" 
                    : "ring-2 ring-primary" 
                  : "opacity-60"
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="h-16 w-24">
                <img 
                  src={image.src} 
                  alt={`Thumbnail ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            </button>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button 
            variant="outline"
            className={`${
              theme === "cyberpunk" 
                ? "border-cyber-blue text-cyber-blue hover:bg-cyber-blue/10" 
                : ""
            }`}
          >
            View Full Gallery
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
