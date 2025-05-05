
import { useTheme } from "../ThemeContext";
import { Trophy, Award, Star, Users } from "lucide-react";

const achievements = [
  {
    id: 1,
    title: "Most Popular Tech Community at LPU",
    description: "One of the most active and tech-driven student communities fostering innovation and growth.",
    icon: Trophy,
  },
  {
    id: 2,
    title: " Transparent Functioning with GeekPoints",
    description: "The only organization at LPU with a transparent, points-based system to track contributions.",
    icon: Users,
  },
  {
    id: 3,
    title: "Gamified Promotion Strategy",
    description: "Promotions are earned through a fun, gamified system that rewards real participation",
    icon: Award,
  },
  {
    id: 4,
    title: "Backed by GeeksforGeeks",
    description: "Proudly supported by one of the most prominent and trusted names in the tech industry — GeeksforGeeks.",
    icon: Star,
  },
];

const Achievements = () => {
  const { theme } = useTheme();

  return (
    <section id="achievements" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div 
              className={`inline-block rounded-lg px-3 py-1 text-sm ${
                theme === "cyberpunk" 
                  ? "bg-cyber-dark border border-cyber-purple text-cyber-purple" 
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
              Our Achievements
            </h2>
            <p 
              className={`mx-auto max-w-[700px] text-lg ${
                theme === "cyberpunk" ? "text-gray-300" : "text-muted-foreground"
              }`}
            >
              Celebrating our milestones and accomplishments over the time.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
          {achievements.map((achievement) => (
            <div 
              key={achievement.id}
              className={`flex flex-col items-center space-y-4 rounded-lg p-6 text-center ${
                theme === "cyberpunk" 
                  ? "bg-cyber-dark border border-cyber-purple/30 shadow-lg shadow-cyber-purple/10" 
                  : "bg-card shadow-sm"
              }`}
            >
              <div 
                className={`rounded-full p-3 ${
                  theme === "cyberpunk" 
                    ? "bg-cyber-dark/50 border border-cyber-green" 
                    : "bg-primary/10"
                }`}
              >
                <achievement.icon 
                  className={`h-6 w-6 ${
                    theme === "cyberpunk" ? "text-cyber-green" : "text-primary"
                  }`} 
                />
              </div>
              <h3 
                className={`text-xl font-bold ${
                  theme === "cyberpunk" ? "text-cyber-blue" : ""
                }`}
              >
                {achievement.title}
              </h3>
              <p 
                className={theme === "cyberpunk" ? "text-gray-400" : "text-muted-foreground"}
              >
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
