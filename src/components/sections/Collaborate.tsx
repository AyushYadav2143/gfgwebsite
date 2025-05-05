
import { Button } from "@/components/ui/button";
import { useTheme } from "../ThemeContext";
import { Mail, PhoneCall, MessageSquare } from "lucide-react";

const Collaborate = () => {
  const { theme } = useTheme();

  return (
    <section id="collaborate" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div 
              className={`inline-block rounded-lg px-3 py-1 text-sm ${
                theme === "cyberpunk" 
                  ? "bg-cyber-dark border border-cyber-green text-cyber-green" 
                  : "bg-primary/10 text-primary"
              }`}
            >
              Partnerships
            </div>
            <h2 
              className={`text-3xl font-bold tracking-tight md:text-4xl ${
                theme === "cyberpunk" ? "neon-text-purple" : ""
              }`}
            >
              Collaborate With Us
            </h2>
            <p 
              className={`mx-auto max-w-[700px] text-lg ${
                theme === "cyberpunk" ? "text-gray-300" : "text-muted-foreground"
              }`}
            >
              We're always open to partnerships and collaborations that help our community grow.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 mt-12">
          <div 
            className={`rounded-xl p-6 ${
              theme === "cyberpunk" 
                ? "bg-cyber-dark border border-cyber-purple/30" 
                : "bg-card shadow-sm border border-border"
            }`}
          >
            <h3 
              className={`text-xl font-bold ${
                theme === "cyberpunk" ? "text-cyber-pink" : ""
              }`}
            >
              Why Collaborate With Us?
            </h3>
            <ul className="mt-4 space-y-3">
              <li 
                className={`flex items-start space-x-2 ${
                  theme === "cyberpunk" ? "text-gray-300" : ""
                }`}
              >
                <span 
                  className={`mt-1 block h-2 w-2 rounded-full ${
                    theme === "cyberpunk" ? "bg-cyber-green" : "bg-primary"
                  }`}
                />
                <span>Access to a community of 1000+ tech enthusiasts</span>
              </li>
              <li 
                className={`flex items-start space-x-2 ${
                  theme === "cyberpunk" ? "text-gray-300" : ""
                }`}
              >
                <span 
                  className={`mt-1 block h-2 w-2 rounded-full ${
                    theme === "cyberpunk" ? "bg-cyber-green" : "bg-primary"
                  }`}
                />
                <span>Platform to showcase your products or opportunities</span>
              </li>
              <li 
                className={`flex items-start space-x-2 ${
                  theme === "cyberpunk" ? "text-gray-300" : ""
                }`}
              >
                <span 
                  className={`mt-1 block h-2 w-2 rounded-full ${
                    theme === "cyberpunk" ? "bg-cyber-green" : "bg-primary"
                  }`}
                />
                <span>Co-host workshops, hackathons, and tech events</span>
              </li>
              <li 
                className={`flex items-start space-x-2 ${
                  theme === "cyberpunk" ? "text-gray-300" : ""
                }`}
              >
                <span 
                  className={`mt-1 block h-2 w-2 rounded-full ${
                    theme === "cyberpunk" ? "bg-cyber-green" : "bg-primary"
                  }`}
                />
                <span>Recruit talented students for internships and jobs</span>
              </li>
            </ul>
            
            <h3 
              className={`mt-8 text-xl font-bold ${
                theme === "cyberpunk" ? "text-cyber-pink" : ""
              }`}
            >
              Collaboration Opportunities
            </h3>
            <ul className="mt-4 space-y-3">
              <li 
                className={`flex items-start space-x-2 ${
                  theme === "cyberpunk" ? "text-gray-300" : ""
                }`}
              >
                <span 
                  className={`mt-1 block h-2 w-2 rounded-full ${
                    theme === "cyberpunk" ? "bg-cyber-green" : "bg-primary"
                  }`}
                />
                <span>Sponsorships for our events and initiatives</span>
              </li>
              <li 
                className={`flex items-start space-x-2 ${
                  theme === "cyberpunk" ? "text-gray-300" : ""
                }`}
              >
                <span 
                  className={`mt-1 block h-2 w-2 rounded-full ${
                    theme === "cyberpunk" ? "bg-cyber-green" : "bg-primary"
                  }`}
                />
                <span>Guest lectures and knowledge-sharing sessions</span>
              </li>
              <li 
                className={`flex items-start space-x-2 ${
                  theme === "cyberpunk" ? "text-gray-300" : ""
                }`}
              >
                <span 
                  className={`mt-1 block h-2 w-2 rounded-full ${
                    theme === "cyberpunk" ? "bg-cyber-green" : "bg-primary"
                  }`}
                />
                <span>Mentorship programs for students</span>
              </li>
              <li 
                className={`flex items-start space-x-2 ${
                  theme === "cyberpunk" ? "text-gray-300" : ""
                }`}
              >
                <span 
                  className={`mt-1 block h-2 w-2 rounded-full ${
                    theme === "cyberpunk" ? "bg-cyber-green" : "bg-primary"
                  }`}
                />
                <span>Industry projects and case studies</span>
              </li>
            </ul>
          </div>
          
          <div 
            className={`rounded-xl ${
              theme === "cyberpunk" 
                ? "bg-cyber-dark border border-cyber-purple/30 p-6" 
                : "bg-card shadow-sm border border-border p-6"
            }`}
          >
            <h3 
              className={`text-xl font-bold ${
                theme === "cyberpunk" ? "text-cyber-pink" : ""
              }`}
            >
              Get in Touch
            </h3>
            <p 
              className={`mt-2 ${
                theme === "cyberpunk" ? "text-gray-400" : "text-muted-foreground"
              }`}
            >
              Fill out the form below and we'll get back to you within 48 hours.
            </p>
            
            <form  className="mt-6 space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label 
                    htmlFor="name"
                    className={`block text-sm font-medium ${
                      theme === "cyberpunk" ? "text-gray-300" : ""
                    }`}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className={`mt-1 block w-full rounded-md px-3 py-2 ${
                      theme === "cyberpunk" 
                        ? "bg-cyber-dark border border-cyber-purple/50 text-white focus:border-cyber-blue focus:ring-cyber-blue" 
                        : "border-input bg-background"
                    }`}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label 
                    htmlFor="email"
                    className={`block text-sm font-medium ${
                      theme === "cyberpunk" ? "text-gray-300" : ""
                    }`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className={`mt-1 block w-full rounded-md px-3 py-2 ${
                      theme === "cyberpunk" 
                        ? "bg-cyber-dark border border-cyber-purple/50 text-white focus:border-cyber-blue focus:ring-cyber-blue" 
                        : "border-input bg-background"
                    }`}
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label 
                  htmlFor="organization"
                  className={`block text-sm font-medium ${
                    theme === "cyberpunk" ? "text-gray-300" : ""
                  }`}
                >
                  Organization
                </label>
                <input
                  type="text"
                  id="organization"
                  className={`mt-1 block w-full rounded-md px-3 py-2 ${
                    theme === "cyberpunk" 
                      ? "bg-cyber-dark border border-cyber-purple/50 text-white focus:border-cyber-blue focus:ring-cyber-blue" 
                      : "border-input bg-background"
                  }`}
                  placeholder="Your company or organization"
                />
              </div>
              <div>
                <label 
                  htmlFor="message"
                  className={`block text-sm font-medium ${
                    theme === "cyberpunk" ? "text-gray-300" : ""
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className={`mt-1 block w-full rounded-md px-3 py-2 ${
                    theme === "cyberpunk" 
                      ? "bg-cyber-dark border border-cyber-purple/50 text-white focus:border-cyber-blue focus:ring-cyber-blue" 
                      : "border-input bg-background"
                  }`}
                  placeholder="Tell us about your collaboration idea"
                />
              </div>
              <Button 
                type="submit"
                className="w-full"
                style={theme === "cyberpunk" ? { 
                  backgroundColor: '#D946EF', 
                  color: 'white',
                  boxShadow: '0 0 10px #D946EF'
                } : {}}
              >
                Send Message
              </Button>
            </form>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-center space-x-3">
                <div 
                  className={`rounded-full p-2 ${
                    theme === "cyberpunk" ? "bg-cyber-dark border border-cyber-green" : "bg-primary/10"
                  }`}
                >
                  <Mail 
                    className={`h-4 w-4 ${
                      theme === "cyberpunk" ? "text-cyber-green" : "text-primary"
                    }`} 
                  />
                </div>
                <span>geeksforgeekslpu.contact@gmail.com</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div 
                  className={`rounded-full p-2 ${
                    theme === "cyberpunk" ? "bg-cyber-dark border border-cyber-green" : "bg-primary/10"
                  }`}
                >
                  <PhoneCall 
                    className={`h-4 w-4 ${
                      theme === "cyberpunk" ? "text-cyber-green" : "text-primary"
                    }`} 
                  />
                </div>
                <span>+91 9161704150</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div 
                  className={`rounded-full p-2 ${
                    theme === "cyberpunk" ? "bg-cyber-dark border border-cyber-green" : "bg-primary/10"
                  }`}
                >
                  <MessageSquare 
                    className={`h-4 w-4 ${
                      theme === "cyberpunk" ? "text-cyber-green" : "text-primary"
                    }`} 
                  />
                </div>
                <span>@gfg_lpu</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaborate;
