import { Eye, Github, Mail, FileText } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-16 border-t border-border relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <h3 className="font-display text-xl font-bold text-foreground flex items-center gap-2 mb-4">
              <Eye className="w-5 h-5 text-primary" /> SightSpeak
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI-powered assistive technology making the visual world accessible to everyone.
            </p>
          </div>
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["About", "Features", "Demo", "Team", "Roadmap"].map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Connect</h4>
            <div className="space-y-3">
              <a href="mailto:contact@sightspeak.ai" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" /> contact@sightspeak.ai
              </a>
              <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-4 h-4" /> GitHub Repository
              </a>
              <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <FileText className="w-4 h-4" /> Documentation
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} SightSpeak. All rights reserved. Built with ❤️ for accessibility.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
