import { motion } from "framer-motion";
import { Scan, FileText, Volume2, AlertTriangle, Eye } from "lucide-react";

const features = [
  { icon: Scan, title: "Real-Time Object Detection", desc: "Identify objects, people, and obstacles instantly using advanced YOLO-based models." },
  { icon: FileText, title: "Smart Scene Description", desc: "AI generates natural language descriptions of the entire scene context." },
  { icon: Volume2, title: "Voice Feedback System", desc: "Clear, natural text-to-speech output delivers descriptions in real time." },
  { icon: AlertTriangle, title: "Danger Alert System", desc: "Instant warnings for potential hazards like vehicles, stairs, or obstacles." },
  { icon: Eye, title: "Vision Enhancement Mode", desc: "Experimental contrast and edge enhancement for low-vision users." },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Built with cutting-edge AI to provide comprehensive visual assistance.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="glass-panel p-8 group cursor-default hover:border-primary/40 transition-colors duration-300"
            >
              <div className="w-14 h-14 mb-5 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:neon-glow transition-shadow duration-300">
                <feat.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{feat.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
