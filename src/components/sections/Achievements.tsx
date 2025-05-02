
import { useTheme } from "../ThemeContext";
import { Trophy, Award, Star, Users } from "lucide-react";

const achievements = [
  {
    id: 1,
    title: "Best Coding Club Award 2023",
    description: "Recognized as the best coding club in the university for promoting technical excellence.",
    icon: Trophy,
  },
  {
    id: 2,
    title: "1000+ Active Members",
    description: "Built a thriving community with over 1000 active student members.",
    icon: Users,
  },
  {
    id: 3,
    title: "50+ Technical Workshops",
    description: "Conducted over 50 technical workshops on various technology domains.",
    icon: Award,
  },
  {
    id: 4,
    title: "National Hackathon Winners",
    description: "Our members won multiple prizes at national level hackathons.",
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
              Celebrating our milestones and accomplishments over the years.
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
