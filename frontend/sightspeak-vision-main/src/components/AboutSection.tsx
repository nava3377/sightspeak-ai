import { motion } from "framer-motion";
import { Eye, Brain, Volume2, Camera } from "lucide-react";

const steps = [
  { icon: Camera, label: "Camera Input", desc: "Captures real-time video feed" },
  { icon: Eye, label: "Object Detection", desc: "AI identifies objects in frame" },
  { icon: Brain, label: "Scene Analysis", desc: "Generates natural descriptions" },
  { icon: Volume2, label: "Voice Output", desc: "Speaks descriptions aloud" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">SightSpeak</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            SightSpeak bridges the gap between the visual world and those who experience it differently. 
            Using state-of-the-art computer vision and natural language processing, we transform 
            visual information into clear, spoken descriptions — empowering independence and safety.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-panel p-6">
              <h3 className="font-display text-xl font-semibold text-primary mb-2">The Problem</h3>
              <p className="text-muted-foreground">
                Over 2.2 billion people worldwide have vision impairment. Navigating unfamiliar environments, 
                identifying objects, and avoiding hazards remain daily challenges.
              </p>
            </div>
            <div className="glass-panel p-6">
              <h3 className="font-display text-xl font-semibold text-secondary mb-2">Our Solution</h3>
              <p className="text-muted-foreground">
                SightSpeak uses your device's camera to detect objects in real-time, generate intelligent 
                scene descriptions, and deliver them as spoken audio — all in milliseconds.
              </p>
            </div>
            <div className="glass-panel p-6">
              <h3 className="font-display text-xl font-semibold text-primary mb-2">Why It Matters</h3>
              <p className="text-muted-foreground">
                Independence isn't a luxury — it's a right. SightSpeak gives users the confidence to 
                explore their surroundings without relying on others.
              </p>
            </div>
          </motion.div>

          {/* Flow diagram */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <h3 className="font-display text-2xl font-semibold text-center mb-4">How It Works</h3>
            {steps.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex items-center gap-4"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center neon-glow">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 glass-panel p-4">
                  <p className="font-display font-semibold text-foreground">{step.label}</p>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="absolute left-7 mt-16 w-0.5 h-4 bg-primary/30 hidden md:block" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
