import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "../ThemeContext";
import { useToast } from "@/hooks/use-toast";

const Collaborate = () => {
  const { theme } = useTheme();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null); // Reset form status before submission

    try {
      // Prepare the form data to be sent
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxHHfKSg06zc-pWAv1GlpJHN-KecW5HE5Z7x7lGogm1ltkQtitdrlVAHJXMhDfnplAeDA/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(formData),
        }
      );

      if (response.ok) {
        setFormStatus("success");
        toast({
          title: "Form submitted!",
          description: "We've received your message and will get back to you soon.",
          variant: "default",
        });

        // Reset form data
        setFormData({
          name: "",
          email: "",
          organization: "",
          message: "",
        });
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      setFormStatus("error");
      toast({
        title: "Submission failed",
        description: "There was an error submitting your form. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
              className={`text-xl font-bold ${theme === "cyberpunk" ? "text-cyber-pink" : ""}`}
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
                <span>Access to a community of tech enthusiasts</span>
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
              className={`mt-8 text-xl font-bold ${theme === "cyberpunk" ? "text-cyber-pink" : ""}`}
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
              className={`text-xl font-bold ${theme === "cyberpunk" ? "text-cyber-pink" : ""}`}
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

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className={`block text-sm font-medium ${theme === "cyberpunk" ? "text-gray-300" : ""}`}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md px-3 py-2 ${
                      theme === "cyberpunk"
                        ? "bg-cyber-dark border border-cyber-purple/50 text-white focus:border-cyber-blue focus:ring-cyber-blue"
                        : "border-input bg-background"
                    }`}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className={`block text-sm font-medium ${theme === "cyberpunk" ? "text-gray-300" : ""}`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md px-3 py-2 ${
                      theme === "cyberpunk"
                        ? "bg-cyber-dark border border-cyber-purple/50 text-white focus:border-cyber-blue focus:ring-cyber-blue"
                        : "border-input bg-background"
                    }`}
                    placeholder="Your email address"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="organization"
                  className={`block text-sm font-medium ${theme === "cyberpunk" ? "text-gray-300" : ""}`}
                >
                  Organization
                </label>
                <input
                  type="text"
                  id="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md px-3 py-2 ${
                    theme === "cyberpunk"
                      ? "bg-cyber-dark border border-cyber-purple/50 text-white focus:border-cyber-blue focus:ring-cyber-blue"
                      : "border-input bg-background"
                  }`}
                  placeholder="Your organization's name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium ${theme === "cyberpunk" ? "text-gray-300" : ""}`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md px-3 py-2 ${
                    theme === "cyberpunk"
                      ? "bg-cyber-dark border border-cyber-purple/50 text-white focus:border-cyber-blue focus:ring-cyber-blue"
                      : "border-input bg-background"
                  }`}
                  placeholder="Your message"
                  rows={4}
                  required
                />
              </div>

              <div className="flex items-center space-x-4">
                <Button
                  type="submit"
                  className={`${
                    theme === "cyberpunk"
                      ? "bg-cyber-pink text-black hover:bg-cyber-pink/90"
                      : "bg-primary text-white hover:bg-primary/90"
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Send Message"}
                </Button>
              </div>
            </form>

            {formStatus === "success" && (
              <div className="mt-4 text-green-500">
                Form submitted successfully! We will get back to you soon.
              </div>
            )}

            {formStatus === "error" && (
              <div className="mt-4 text-red-500">
                There was an error submitting your form. Please try again later.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaborate;
