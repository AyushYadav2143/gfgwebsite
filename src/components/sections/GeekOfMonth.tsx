
import { useTheme } from "../ThemeContext";
import { Badge, Award, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const geekOfMonth = {
  name: "Priya Verma",
  achievement: "Highest GeekPoints Scorer - May 2025",
  points: 2580,
  image: "/images/geek-of-month/priya-verma.jpg",
  description: "Priya has demonstrated exceptional skills in algorithm challenges and actively contributed to three community workshops this month."
};

const GeekOfMonth = () => {
  const { theme } = useTheme();

  return (
    <section id="geek-of-month" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div 
              className={`inline-block rounded-lg px-3 py-1 text-sm ${
                theme === "cyberpunk" 
                  ? "bg-cyber-dark border border-cyber-blue text-cyber-blue" 
                  : "bg-primary/10 text-primary"
              }`}
            >
              Recognition
            </div>
            <h2 
              className={`text-3xl font-bold tracking-tight md:text-4xl ${
                theme === "cyberpunk" ? "neon-text-purple" : ""
              }`}
            >
              Geek of the Month
            </h2>
            <p 
              className={`mx-auto max-w-[700px] text-lg ${
                theme === "cyberpunk" ? "text-gray-300" : "text-muted-foreground"
              }`}
            >
              Recognizing excellence and outstanding contribution
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className={`overflow-hidden ${
            theme === "cyberpunk" 
              ? "bg-cyber-dark border-2 border-cyber-purple" 
              : ""
          }`}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex justify-center items-center p-6">
                <div className={`relative ${
                  theme === "cyberpunk" ? "border-2 border-cyber-pink p-1" : "border border-primary p-1"
                } rounded-full w-48 h-48 md:w-64 md:h-64 overflow-hidden`}>
                  <img 
                    src={geekOfMonth.image} 
                    alt={`${geekOfMonth.name} - Geek of the Month`}
                    className="object-cover h-full w-full rounded-full"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/images/team/placeholder.jpg";
                      // Fallback to an online image if the local placeholder fails
                      target.onerror = () => {
                        target.src = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158";
                        target.onerror = null; // Prevent infinite loop
                      };
                    }}
                  />
                  <div className={`absolute top-2 left-2 ${
                    theme === "cyberpunk" ? "animate-pulse" : ""
                  }`}>
                    <div className={`rounded-full p-1.5 ${
                      theme === "cyberpunk"
                        ? "bg-cyber-pink border border-cyber-blue"
                        : "bg-primary text-primary-foreground"
                    }`}>
                      <Award className="h-6 w-6" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col justify-center">
                <CardHeader className="p-0 pb-4">
                  <div className="flex items-center mb-2">
                    <Badge className={`mr-2 h-4 w-4 ${
                      theme === "cyberpunk" ? "text-cyber-green" : "text-primary"
                    }`} />
                    <span className={`text-sm ${
                      theme === "cyberpunk" ? "text-cyber-blue" : "text-muted-foreground"
                    }`}>
                      {geekOfMonth.achievement}
                    </span>
                  </div>
                  <CardTitle className={`text-2xl md:text-3xl font-bold ${
                    theme === "cyberpunk" ? "text-cyber-pink" : ""
                  }`}>
                    {geekOfMonth.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                  <p className={theme === "cyberpunk" ? "text-gray-300" : "text-muted-foreground"}>
                    {geekOfMonth.description}
                  </p>
                  <div className={`flex items-center ${
                    theme === "cyberpunk" 
                      ? "bg-black/40 text-cyber-green" 
                      : "bg-secondary text-primary"
                  } px-4 py-3 rounded-lg`}>
                    <Star className="h-5 w-5 mr-2" />
                    <span className="font-semibold">{geekOfMonth.points}</span>
                    <span className="ml-2">GeekPoints</span>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GeekOfMonth;
