
import { useTheme } from "../ThemeContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

// Sample events data - can be expanded to include more events
const events = [
  {
    id: 1,
    title: "Boost Your DSA Skills Free!",
    date: "",
    location: "",
    image: "/images/events/decoded-ebook.PNG",
    description: "⚡️Exciting news from GeeksforGeeks Student Chapter, LPU! We're launching a free expert-curated DSA E-book packed with a DSA Cheat Sheet, bonus content, and revision material to boost your prep.🔥 Don't miss this limited-time chance to level up your coding skills for placements. 🚀 Stay tuned for more masterclasses, resources & developer growth sessions!",
    registrationLink: "https://forms.gle/hy6Ju8stxweBoEbC6"
  },
  {
    id: 2,
    title: "Something big is coming..",
    date: "",
    location: "",
    image: "/images/events/web-dev.jpg",
    description: " Exciting and grand events are on the horizon — stay tuned for unforgettable experiences and tech-filled adventures!",
    registrationLink: "#"
  },
  {
    id: 3,
    title: "Something big is coming..",
    date: "",
    location: "",
    image: "/images/events/hackathon.jpg",
    description: " Exciting and grand events are on the horizon — stay tuned for unforgettable experiences and tech-filled adventures!",
    registrationLink: "#"
  }
  
];

const Events = () => {
  const { theme } = useTheme();

  return (
    <section id="events" className="py-16 md:py-24 bg-muted/30">
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
              Calendar
            </div>
            <h2 
              className={`text-3xl font-bold tracking-tight md:text-4xl ${
                theme === "cyberpunk" ? "neon-text-purple" : ""
              }`}
            >
              Upcoming Events
            </h2>
            <p 
              className={`mx-auto max-w-[700px] text-lg ${
                theme === "cyberpunk" ? "text-gray-300" : "text-muted-foreground"
              }`}
            >
              Join us for exciting events, workshops, and competitions.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-6xl">
          <Carousel 
            className={`w-full ${
              theme === "cyberpunk" ? "cyber-carousel" : ""
            }`}
            opts={{
              align: "start",
            }}
          >
            <CarouselContent>
              {events.map(event => (
                <CarouselItem key={event.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <Card 
                    className={`h-full flex flex-col ${theme === "cyberpunk" ? "bg-cyber-dark border-cyber-purple/30" : ""}`}
                  >
                    <div className="relative aspect-video overflow-hidden rounded-t-lg">
                      <img 
                        src={event.image || "https://images.unsplash.com/photo-1518770660439-4636190af475"} 
                        alt={event.title}
                        className="h-full w-full object-cover transition-transform hover:scale-105"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "/images/events/placeholder.jpg";
                          // Fallback to an online image if the local placeholder fails
                          target.onerror = () => {
                            target.src = "https://images.unsplash.com/photo-1518770660439-4636190af475";
                            target.onerror = null; // Prevent infinite loop
                          };
                        }}
                      />
                    </div>
                    <CardContent className="p-4 sm:p-6 flex flex-col flex-grow">
                      <div className="mb-3 text-sm text-muted-foreground">
                        <span className={`block ${theme === "cyberpunk" ? "text-cyber-green" : "text-primary"}`}>{event.date}</span>
                        <span className="block mt-1">{event.location}</span>
                      </div>
                      <h3 
                        className={`text-xl font-bold mb-2 ${
                          theme === "cyberpunk" ? "text-cyber-pink" : ""
                        }`}
                      >
                        {event.title}
                      </h3>
                      <p 
                        className={`mb-4 flex-grow ${
                          theme === "cyberpunk" ? "text-gray-300" : "text-muted-foreground"
                        }`}
                      >
                        {event.description}
                      </p>
                      <Button 
                        className={`w-full sm:w-auto mt-auto ${theme === "cyberpunk" ? "bg-cyber-purple hover:bg-cyber-blue" : ""}`}
                        asChild
                      >
                        <a href={event.registrationLink}>Register Now</a>
                      </Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious 
              className={`hidden md:flex -left-12 md:-left-16 ${
                theme === "cyberpunk" ? "bg-cyber-dark border-cyber-blue text-cyber-blue hover:bg-cyber-dark/80" : ""
              }`}
            />
            <CarouselNext 
              className={`hidden md:flex -right-12 md:-right-16 ${
                theme === "cyberpunk" ? "bg-cyber-dark border-cyber-blue text-cyber-blue hover:bg-cyber-dark/80" : ""
              }`}
            />
          </Carousel>
          
          <div className="mt-6 text-center">
            <p className={`text-sm ${theme === "cyberpunk" ? "text-cyber-green" : "text-muted-foreground"}`}>
              {events.length} upcoming events • Use arrows to navigate
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
