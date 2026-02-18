import { motion } from "framer-motion";
import { Smartphone, Camera, Play, Headphones } from "lucide-react";

const steps = [
  { icon: Smartphone, title: "Open the App", desc: "Launch SightSpeak on your device or browser." },
  { icon: Camera, title: "Allow Camera Access", desc: "Grant permission for real-time video capture." },
  { icon: Play, title: "Start Detection", desc: "Tap the button to begin AI-powered scanning." },
  { icon: Headphones, title: "Listen to Descriptions", desc: "Hear real-time voice descriptions of your surroundings." },
];

const HowToUseSection = () => {
  return (
    <section id="how-to-use" className="py-24 relative">
      <div className="gradient-mesh absolute inset-0 opacity-50" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            How to <span className="gradient-text">Use</span>
          </h2>
          <p className="text-muted-foreground text-lg">Get started in four simple steps.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="glass-panel p-8 text-center group cursor-default"
            >
              <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:neon-glow transition-shadow duration-300">
                <step.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="text-sm font-bold text-primary mb-2">Step {i + 1}</div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToUseSection;
