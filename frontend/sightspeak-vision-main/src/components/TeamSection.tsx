import { motion } from "framer-motion";

const team = [
  {
    name: "B. Navadeep Reddy",
    role: "Lead AI Architect & Full-Stack Integrator",
    desc: "Designed the YOLO-based detection pipeline, scene graph reasoning engine, activity inference system, and full-stack integration for SightSpeak.",
    image: "/navadeep.jpg",
  },
  {
    name: "B. Akanksha",
    role: "Computer Vision Engineer",
    desc: "Optimized object detection models, improved spatial reasoning accuracy, and enhanced real-time visual inference performance.",
    image: "/akanksha.jpg",
  },
  {
    name: "B.T.N.V Chaitanya Raju",
    role: "Backend Systems Engineer",
    desc: "Architected the FastAPI backend, managed real-time API data flow, and ensured scalable deployment infrastructure.",
    image: "/chaitanya.jpg",
  },
  {
    name: "Ch. Sravani",
    role: "NLP & Assistive AI Researcher",
    desc: "Developed language refinement modules, integrated text-to-speech, and improved contextual scene understanding.",
    image: "/sravani.jpg",
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-24 relative">
      <div className="gradient-mesh absolute inset-0 opacity-50" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            The minds behind SightSpeak – Intelligent Assistive Vision System.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-panel p-8 text-center group"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto mb-5 rounded-full object-cover border-2 border-primary/40 shadow-lg"
              />

              <h3 className="font-display text-lg font-semibold text-foreground">
                {member.name}
              </h3>

              <p className="text-sm text-primary font-medium mb-3">
                {member.role}
              </p>

              <p className="text-sm text-muted-foreground mb-4">
                {member.desc}
              </p>

              <div className="text-xs text-muted-foreground">
                Computer Vision | Scene Understanding | Assistive AI
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
