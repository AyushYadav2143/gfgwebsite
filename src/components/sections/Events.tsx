
import { useTheme } from "../ThemeContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Sample events data - can be expanded to include more events
const events = [
  {
    id: 1,
    title: "Code Wizards Workshop",
    date: "May 15, 2025",
    location: "Block 32, Room 205, LPU",
    image: "/images/events/code-wizards.jpg",
    description: "Learn about algorithms and data structures with hands-on coding exercises.",
    registrationLink: "#"
  },
  {
    id: 2,
    title: "Web Development Bootcamp",
    date: "May 20, 2025",
    location: "Block 38, Room 103, LPU",
    image: "/images/events/web-dev.jpg",
    description: "Intensive workshop on modern web development techniques and frameworks.",
    registrationLink: "#"
  },
  {
    id: 3,
    title: "Hackathon 2025",
    date: "June 5-7, 2025",
    location: "Uni Mall, LPU",
    image: "/images/events/hackathon.jpg",
    description: "48-hour coding competition with exciting prizes and networking opportunities.",
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

        <div className="mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {events.map(event => (
            <Card 
              key={event.id}
              className={theme === "cyberpunk" ? "bg-cyber-dark border-cyber-purple/30" : ""}
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
              <CardContent className="p-4 sm:p-6">
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
                  className={`mb-4 ${
                    theme === "cyberpunk" ? "text-gray-300" : "text-muted-foreground"
                  }`}
                >
                  {event.description}
                </p>
                <Button 
                  className={`w-full sm:w-auto ${theme === "cyberpunk" ? "bg-cyber-purple hover:bg-cyber-blue" : ""}`}
                  asChild
                >
                  <a href={event.registrationLink}>Register Now</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
