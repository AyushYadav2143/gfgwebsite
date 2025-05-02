
import { useTheme } from "../ThemeContext";

const teamMembers = [
  {
    id: 1,
    name: "Ankit Sharma",
    role: "Chapter Lead",
    image: "https://i.pravatar.cc/300?img=1",
  },
  {
    id: 2,
    name: "Priya Singh",
    role: "Technical Lead",
    image: "https://i.pravatar.cc/300?img=5",
  },
  {
    id: 3,
    name: "Rahul Verma",
    role: "Event Coordinator",
    image: "https://i.pravatar.cc/300?img=3",
  },
  {
    id: 4,
    name: "Neha Patel",
    role: "Marketing Lead",
    image: "https://i.pravatar.cc/300?img=10",
  },
  {
    id: 5,
    name: "Vikram Kumar",
    role: "Content Creator",
    image: "https://i.pravatar.cc/300?img=12",
  },
  {
    id: 6,
    name: "Shweta Jain",
    role: "Design Head",
    image: "https://i.pravatar.cc/300?img=9",
  },
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

        <div className="mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 mt-12">
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
                <div className={theme === "cyberpunk" ? "bg-cyber-dark p-6" : "p-6"}>
                  <div className="mx-auto h-40 w-40 overflow-hidden rounded-full">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 
                      className={`text-xl font-bold ${
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
                    <div className="mt-4 flex justify-center space-x-3">
                      <a 
                        href="#" 
                        className={theme === "cyberpunk" ? "text-gray-400 hover:text-cyber-green" : "text-gray-500 hover:text-primary"}
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M22.675 0H1.325C0.593 0 0 0.593 0 1.325v21.351C0 23.407 0.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463 0.099 2.795 0.143v3.24l-1.918 0.001c-1.504 0-1.795 0.715-1.795 1.763v2.313h3.587l-0.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.675V1.325C24 0.593 23.407 0 22.675 0z" />
                        </svg>
                      </a>
                      <a 
                        href="#" 
                        className={theme === "cyberpunk" ? "text-gray-400 hover:text-cyber-green" : "text-gray-500 hover:text-primary"}
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                      </a>
                      <a 
                        href="#" 
                        className={theme === "cyberpunk" ? "text-gray-400 hover:text-cyber-green" : "text-gray-500 hover:text-primary"}
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z" fillRule="evenodd" clipRule="evenodd" />
                        </svg>
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
