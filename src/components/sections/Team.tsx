
import { useTheme } from "../ThemeContext";
import { Github, Linkedin, Instagram } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

// Team members array - you can add as many members as needed following this structure
const teamMembers = [
  {
    id: 1,
    name: "Ankit Sharma",
    role: "Chapter Lead",
    image: "/images/team/ankit-sharma.jpg",
    social: {
      linkedin: "https://linkedin.com/in/ankit-sharma",
      github: "https://github.com/ankit-sharma",
      instagram: "https://instagram.com/ankit-sharma",
    }
  },
  {
    id: 2,
    name: "Ayush Yadav",
    role: "CHIEF OPERATIONAL OFFICER",
    image: "/images/team/ayush-yadav.png",
    social: {
      linkedin: "https://linkedin.com/in/priya-singh",
      github: "https://github.com/priya-singh",
      instagram: "https://instagram.com/priya-singh",
    }
  },
  {
    id: 3,
    name: "Rahul Verma",
    role: "Event Coordinator",
    image: "/images/team/rahul-verma.jpg",
    social: {
      linkedin: "https://linkedin.com/in/rahul-verma",
      github: "https://github.com/rahul-verma",
      instagram: "https://instagram.com/rahul-verma",
    }
  },
  {
    id: 4,
    name: "Neha Patel",
    role: "Marketing Lead",
    image: "/images/team/neha-patel.jpg",
    social: {
      linkedin: "https://linkedin.com/in/neha-patel",
      github: "https://github.com/neha-patel",
      instagram: "https://instagram.com/neha-patel",
    }
  },
  {
    id: 5,
    name: "Vikram Kumar",
    role: "Content Creator",
    image: "/images/team/vikram-kumar.jpg",
    social: {
      linkedin: "https://linkedin.com/in/vikram-kumar",
      github: "https://github.com/vikram-kumar",
      instagram: "https://instagram.com/vikram-kumar",
    }
  },
  {
    id: 6,
    name: "Shweta Jain",
    role: "Design Head",
    image: "/images/team/shweta-jain.jpg",
    social: {
      linkedin: "https://linkedin.com/in/shweta-jain",
      github: "https://github.com/shweta-jain",
      instagram: "https://instagram.com/shweta-jain",
    }
  },
  // You can add more team members here following the same structure
  // Example:
  /*
  {
    id: 7,
    name: "New Member",
    role: "Position",
    image: "/images/team/member-image.jpg",
    social: {
      linkedin: "https://linkedin.com/in/member-name",
      github: "https://github.com/member-name",
      instagram: "https://instagram.com/member-name",
    }
  },
  */
];

const Team = () => {
  const { theme } = useTheme();

  return (
    <section id="team" className="py-16 md:py-24">
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
              Our People
            </div>
            <h2 
              className={`text-3xl font-bold tracking-tight md:text-4xl ${
                theme === "cyberpunk" ? "neon-text-purple" : ""
              }`}
            >
              Meet the Team
            </h2>
            <p 
              className={`mx-auto max-w-[700px] text-lg ${
                theme === "cyberpunk" ? "text-gray-300" : "text-muted-foreground"
              }`}
            >
              The passionate individuals behind GFG LPU Chapter.
            </p>
          </div>
        </div>

        <div className="mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-12">
          {/* Map through all team members dynamically */}
          {teamMembers.map((member) => (
            <div 
              key={member.id}
              className={`flex flex-col items-center space-y-4 rounded-lg ${
                theme === "cyberpunk" 
                  ? "p-1 bg-gradient-to-r from-cyber-purple to-cyber-blue" 
                  : "p-0"
              }`}
            >
              <div 
                className={`w-full rounded-lg overflow-hidden ${
                  theme === "cyberpunk" ? "p-px" : "border border-border"
                }`}
              >
                <div className={theme === "cyberpunk" ? "bg-cyber-dark p-4 sm:p-6" : "p-4 sm:p-6"}>
                  <div className="mx-auto h-28 w-28 sm:h-40 sm:w-40 overflow-hidden rounded-full relative">
                    <img 
                      src={member.image || "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"} 
                      alt={member.name}
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/images/team/placeholder.jpg";
                        // Fallback to an online image if the local placeholder fails
                        target.onerror = () => {
                          target.src = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b";
                          target.onerror = null; // Prevent infinite loop
                        };
                      }}
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 
                      className={`text-xl font-bold mb-2 ${
                        theme === "cyberpunk" ? "text-cyber-pink" : ""
                      }`}
                    >
                      {member.name}
                    </h3>
                    <p 
                      className={theme === "cyberpunk" ? "text-cyber-blue" : "text-primary"}
                    >
                      {member.role}
                    </p>
                    <div className="mt-4 flex justify-center space-x-4">
                      <a 
                        href={member.social.linkedin} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className={theme === "cyberpunk" ? "text-gray-400 hover:text-cyber-green" : "text-gray-500 hover:text-primary"}
                        aria-label={`LinkedIn profile of ${member.name}`}
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a 
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={theme === "cyberpunk" ? "text-gray-400 hover:text-cyber-green" : "text-gray-500 hover:text-primary"}
                        aria-label={`GitHub profile of ${member.name}`}
                      >
                        <Github className="h-5 w-5" />
                      </a>
                      <a 
                        href={member.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className={theme === "cyberpunk" ? "text-gray-400 hover:text-cyber-green" : "text-gray-500 hover:text-primary"}
                        aria-label={`Instagram profile of ${member.name}`}
                      >
                        <Instagram className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
