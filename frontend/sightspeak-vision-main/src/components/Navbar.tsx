import { motion } from "framer-motion";
import { Eye } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#features", label: "Features" },
  { href: "#demo", label: "Demo" },
  { href: "#team", label: "Team" },
  { href: "#scope", label: "Roadmap" },
];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass-panel border-t-0 rounded-none border-x-0"
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-display text-xl font-bold text-foreground flex items-center gap-2">
          <Eye className="w-5 h-5 text-primary" />
          <span>Sight<span className="text-primary">Speak</span></span>
        </a>
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
              {link.label}
            </a>
          ))}
        </div>
        <a href="#demo" className="px-4 py-2 bg-primary/10 border border-primary/30 text-primary text-sm font-medium rounded-lg hover:bg-primary/20 transition-colors duration-200">
          Try Demo
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
