
import { Button } from "@/components/ui/button";
import { useTheme } from "../ThemeContext";
import { CalendarIcon, Clock, MapPin } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Web Development Workshop",
    date: "May 10, 2025",
    time: "10:00 AM - 1:00 PM",
    location: "Block 32 Auditorium, LPU",
    description: "Learn modern web development techniques with React and Node.js.",
    imageUrl: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210310114057/web-development-image.png",
  },
  {
    id: 2,
    title: "Competitive Programming Contest",
    date: "May 15, 2025",
    time: "2:00 PM - 6:00 PM",
    location: "Online (Zoom)",
    description: "Test your coding skills in this competitive programming challenge.",
    imageUrl: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20201119113313/How-to-Solve-any-Competitive-Programming-Problem.png",
  },
  {
    id: 3,
    title: "Machine Learning Bootcamp",
    date: "May 25, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Block 38 Lab Complex, LPU",
    description: "A full-day intensive bootcamp on machine learning fundamentals and applications.",
    imageUrl: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230118112545/MachineLearning_1.png",
  },
];

const Events = () => {
  const { theme } = useTheme();

  return (
    <section id="events" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div 
              className={`inline-block rounded-lg px-3 py-1 text-sm ${
                theme === "cyberpunk" 
                  ? "bg-cyber-dark border border-cyber-orange text-cyber-orange" 
                  : "bg-primary/10 text-primary"
              }`}
            >
              What's On
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
              Join us for these exciting events and enhance your skills.
            </p>
          </div>
        </div>

        <div className="mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {events.map((event) => (
            <div 
              key={event.id}
              className={`overflow-hidden rounded-xl ${
                theme === "cyberpunk" 
                  ? "border-2 border-cyber-purple shadow-lg shadow-cyber-purple/20" 
                  : "border border-border shadow-sm"
              }`}
            >
              <div className="relative">
                <img 
                  src={event.imageUrl} 
                  alt={event.title}
                  className="h-48 w-full object-cover"
                />
                {theme === "cyberpunk" && (
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark to-transparent opacity-60"></div>
                )}
                <div 
                  className={`absolute bottom-0 left-0 right-0 p-4 ${
                    theme === "cyberpunk" ? "bg-gradient-to-t from-cyber-dark to-transparent" : "bg-gradient-to-t from-black/60 to-transparent"
                  }`}
                >
                  <h3 
                    className={`text-xl font-bold text-white ${
                      theme === "cyberpunk" ? "neon-text-blue" : ""
                    }`}
                  >
                    {event.title}
                  </h3>
                </div>
              </div>
              <div 
                className={theme === "cyberpunk" ? "bg-cyber-dark p-6" : "bg-card p-6"}
              >
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <CalendarIcon 
                      className={`mr-1 h-4 w-4 ${
                        theme === "cyberpunk" ? "text-cyber-orange" : "text-primary"
                      }`} 
                    />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Clock 
                      className={`mr-1 h-4 w-4 ${
                        theme === "cyberpunk" ? "text-cyber-orange" : "text-primary"
                      }`} 
                    />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <MapPin 
                      className={`mr-1 h-4 w-4 ${
                        theme === "cyberpunk" ? "text-cyber-orange" : "text-primary"
                      }`} 
                    />
                    <span>{event.location}</span>
                  </div>
                  <p 
                    className={`mt-2 text-sm ${
                      theme === "cyberpunk" ? "text-gray-400" : "text-muted-foreground"
                    }`}
                  >
                    {event.description}
                  </p>
                </div>
                <div className="mt-6">
                  <Button 
                    className="w-full" 
                    variant={theme === "cyberpunk" ? "outline" : "default"}
                    style={theme === "cyberpunk" ? { 
                      borderColor: '#D946EF', 
                      color: '#D946EF',
                      boxShadow: '0 0 5px #D946EF'
                    } : {}}
                  >
                    Register Now
                  </Button>
                </div>
              </div>
            </div>
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
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Events;
