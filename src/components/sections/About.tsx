
import { useTheme } from "../ThemeContext";

const About = () => {
  const { theme } = useTheme();

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h2 
              className={`text-3xl font-bold tracking-tight ${
                theme === "cyberpunk" ? "neon-text-purple" : "text-foreground"
              }`}
            >
              About GFG LPU Chapter
            </h2>
            
            <p className={theme === "cyberpunk" ? "text-gray-300" : "text-muted-foreground"}>
              GeeksforGeeks LPU Chapter is a student-led technical community that aims to foster technical learning, innovation, 
              and collaboration among students at Lovely Professional University.
            </p>
            
            <p className={theme === "cyberpunk" ? "text-gray-300" : "text-muted-foreground"}>
              Founded in 2019, our chapter has been consistently working towards creating a vibrant ecosystem where students
              can learn, practice, and excel in various domains of computer science.
            </p>
            
            <h3 
              className={`mt-6 text-xl font-semibold ${
                theme === "cyberpunk" ? "text-cyber-blue" : "text-primary"
              }`}
            >
              Our Mission
            </h3>
            <p className={theme === "cyberpunk" ? "text-gray-300" : "text-muted-foreground"}>
              To build a community of tech enthusiasts and empower them with knowledge, skills, and opportunities to
              contribute to the tech world.
            </p>
            
            <h3 
              className={`mt-6 text-xl font-semibold ${
                theme === "cyberpunk" ? "text-cyber-blue" : "text-primary"
              }`}
            >
              Our Vision
            </h3>
            <p className={theme === "cyberpunk" ? "text-gray-300" : "text-muted-foreground"}>
              To be a leading student community fostering tech education, innovation and career growth among 
              university students.
            </p>
          </div>
          
          <div 
            className={`overflow-hidden rounded-xl ${
              theme === "cyberpunk" 
                ? "border border-cyber-purple shadow-lg shadow-cyber-purple/20" 
                : "border border-border shadow-sm"
            }`}
          >
            <div className="aspect-video relative">
              <img
                src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200326191711/How-to-Think-Like-a-Programmer.png"
                alt="GeeksforGeeks Community"
                className="object-cover w-full h-full"
              />
              {theme === "cyberpunk" && (
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/70 to-transparent"></div>
              )}
            </div>
            
            <div 
              className={`p-6 ${
                theme === "cyberpunk" ? "bg-cyber-dark" : "bg-muted/50"
              }`}
            >
              <h4 
                className={`text-lg font-semibold ${
                  theme === "cyberpunk" ? "text-cyber-green" : "text-primary"
                }`}
              >
                Core Values
              </h4>
              <ul className="mt-2 space-y-1">
                <li className="flex items-center">
                  <span className={`mr-2 text-xl ${theme === "cyberpunk" ? "text-cyber-pink" : "text-primary"}`}>•</span>
                  <span>Knowledge Sharing and Collaboration</span>
                </li>
                <li className="flex items-center">
                  <span className={`mr-2 text-xl ${theme === "cyberpunk" ? "text-cyber-pink" : "text-primary"}`}>•</span>
                  <span>Innovation and Technical Excellence</span>
                </li>
                <li className="flex items-center">
                  <span className={`mr-2 text-xl ${theme === "cyberpunk" ? "text-cyber-pink" : "text-primary"}`}>•</span>
                  <span>Inclusivity and Diversity</span>
                </li>
                <li className="flex items-center">
                  <span className={`mr-2 text-xl ${theme === "cyberpunk" ? "text-cyber-pink" : "text-primary"}`}>•</span>
                  <span>Continuous Learning and Growth</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
