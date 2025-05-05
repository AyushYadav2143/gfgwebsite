
import { useTheme } from "../ThemeContext";

// Sample gallery data - can be expanded to include more images
const galleryImages = [
  {
    id: 1,
    src: "/images/branding/gfg-logo.jpeg",
    alt: "Gfg in LPU",
    caption: "GFG IN LPU"
  },
  {
    id: 2,
    src: "/images/gallery/event2.jpg",
    alt: "Hackathon Winners",
    caption: "Hackathon Winners 2024"
  },
  {
    id: 3,
    src: "/images/gallery/event3.jpg",
    alt: "Team Building Activity",
    caption: "Team Building Session"
  },
  {
    id: 4,
    src: "/images/gallery/event4.jpg",
    alt: "Guest Lecture",
    caption: "Industry Expert Session"
  },
  {
    id: 5,
    src: "/images/gallery/event5.jpg",
    alt: "Code Competition",
    caption: "Coding Competition 2024"
  },
  {
    id: 6,
    src: "/images/gallery/event6.jpg",
    alt: "Community Meetup",
    caption: "GFG LPU Community Meetup"
  }
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

        <div className="mx-auto mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image) => (
              <div 
                key={image.id} 
                className={`group relative overflow-hidden rounded-lg ${
                  theme === "cyberpunk" ? "border border-cyber-purple/30" : "border border-border"
                }`}
              >
                <img
                  src={image.src || "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"}
                  alt={image.alt}
                  className="h-48 sm:h-64 w-full object-cover transition-transform group-hover:scale-110"
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
