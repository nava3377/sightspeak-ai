import { motion } from "framer-motion";
import { CheckCircle, Circle, Rocket } from "lucide-react";

const timelineItems = [
  { phase: "Current", status: "done", items: ["Real-time object detection via camera", "Natural language scene descriptions", "Text-to-speech voice output", "Danger alert notifications", "Web-based interface"] },
  { phase: "Limitations", status: "current", items: ["Requires stable internet connection", "Limited to common object categories", "English language only", "Dependent on camera quality"] },
  { phase: "Future", status: "future", items: ["AR Glass Integration", "Edge AI Deployment (offline)", "Personalized Vision Calibration", "Multilingual Voice Support", "Emotion & gesture recognition"] },
];

const ScopeSection = () => {
  return (
    <section id="scope" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Project <span className="gradient-text">Roadmap</span>
          </h2>
          <p className="text-muted-foreground text-lg">Where we are and where we're headed.</p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-muted" />

          <div className="space-y-12">
            {timelineItems.map((item, i) => (
              <motion.div
                key={item.phase}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative pl-16 md:pl-20"
              >
                {/* Dot */}
                <div className={`absolute left-3 md:left-5 w-7 h-7 rounded-full flex items-center justify-center ${
                  item.status === "done" ? "bg-primary neon-glow" : 
                  item.status === "current" ? "bg-secondary neon-glow-purple" : "bg-muted border border-muted-foreground/30"
                }`}>
                  {item.status === "done" ? <CheckCircle className="w-4 h-4 text-primary-foreground" /> :
                   item.status === "future" ? <Rocket className="w-3 h-3 text-muted-foreground" /> :
                   <Circle className="w-3 h-3 text-secondary-foreground" />}
                </div>

                <div className="glass-panel p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-4">{item.phase}</h3>
                  <ul className="space-y-2">
                    {item.items.map((text) => (
                      <li key={text} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span> {text}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScopeSection;
